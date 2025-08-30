import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";

// Importante: decirle a pdfjs dónde está el worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PdfThumbnailProps {
  pdfUrl: string;
  alt?: string;
}

const PdfThumbnail: React.FC<PdfThumbnailProps> = ({ pdfUrl, alt }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const renderThumbnail = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1); // primera página

        const viewport = page.getViewport({ scale: 1 });
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d")!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;
        setImageSrc(canvas.toDataURL("image/png"));
      } catch (error) {
        console.error("Error al renderizar thumbnail del PDF:", error);
      }
    };

    renderThumbnail();
  }, [pdfUrl]);

  return (
    <>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={alt || "PDF Thumbnail"}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 text-sm">
          Cargando portada...
        </div>
      )}
      {/* Canvas oculto */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </>
  );
};

export default PdfThumbnail;
