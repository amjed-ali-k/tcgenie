"use client"

export const generatePdf = async (
  svg: string,
  width: number,
  height: number,
  timeOut = 20000
) => {
  const PDFDocument = (await import("pdfkit/js/pdfkit.standalone")).default
  const SVGtoPDF = (await import("svg-to-pdfkit")).default
  const blobstream = (await import("blob-stream")).default

  return new Promise<string>((resolve, reject) => {
    const time = setTimeout(() => {
      reject("Timed out")
    }, timeOut)
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
      clearTimeout(time)
      resolve(URL.createObjectURL(blob))
    })
    stream.on("")
    doc.end()
  })
}
