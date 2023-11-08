"use client"

export const generatePdf = async (
  svg: string,
  width: number,
  height: number,
  callBack: (url: string) => void
) => {
  const PDFDocument = (await import("pdfkit/js/pdfkit.standalone")).default
  const SVGtoPDF = (await import("svg-to-pdfkit")).default
  const blobstream = (await import("blob-stream")).default

  const doc = new PDFDocument({
    compress: false,
    size: "A4",
  })
  SVGtoPDF(doc, svg, 0, 0, {
    width,
    height,
    preserveAspectRatio: `xMidYMid meet`,
  })
  const stream = doc.pipe(blobstream())
  stream.on("finish", () => {
    const blob = stream.toBlob("application/pdf")
    const url = URL.createObjectURL(blob)
    callBack(url)
  })
  doc.end()
}
