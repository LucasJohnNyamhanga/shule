import { Worker, Viewer } from "@react-pdf-viewer/core";
import React, { useState } from "react";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { type } from "os";

type dataType = {
  url: string;
};

export default function pdf({ url }: dataType) {
  const [pageNumber, setPageNumber] = useState(1);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  function onItemClick({ pageNumber: itemPageNumber }: any) {
    setPageNumber(itemPageNumber);
  }

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      <div style={{ height: "750px" }}>
        <Viewer fileUrl={url} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
}
