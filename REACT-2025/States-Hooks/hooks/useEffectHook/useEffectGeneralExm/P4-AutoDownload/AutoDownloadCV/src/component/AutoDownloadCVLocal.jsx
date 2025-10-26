import { useEffect } from "react"

export const AutoDownloadCVLocal = () =>{
     useEffect(() =>{
      const isDownloaded = sessionStorage.getItem("resume")
      if(isDownloaded === null){
        const a = document.createElement("a")
          a.href ="/demo.jpg"
          a.download = "demo.jpg"
          a.click()
          a.remove()
          sessionStorage.setItem("resumes", true)
      }
     },[])

     
     return(
          <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
                <div className="max-w-md bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-600 mb-6">
          Thank you for visiting! Your CV image has been downloaded automatically.
        </p>
        <a
          href="/imag.jpg" // Fallback manual download link
          download="MyCv66.jpg"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Download CV Again
        </a>
      </div>
          </div>
     )
}