let html2CanvasPromise

export function loadHtml2Canvas() {
  if (window.html2canvas) return Promise.resolve(window.html2canvas)

  if (!html2CanvasPromise) {
    html2CanvasPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script")
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
      script.async = true
      script.onload = () => resolve(window.html2canvas)
      script.onerror = () => reject(new Error("Unable to load html2canvas"))
      document.body.appendChild(script)
    })
  }

  return html2CanvasPromise
}
