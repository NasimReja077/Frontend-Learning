import { useEffect, useState } from "react";

export const AutoDownloadCVTimer = () =>{
     const [message, setMessage] = useState('Your CV is downloading...');

     useEffect(() =>{
          const cvImageUrl = '/cv-image.jpg'; // Adjust path or use external URL
          const fileName = 'My_CV.jpg';
          const lastDownloadKey = 'lastDownloadTime';
          const oneHourInMs = 60 * 60 * 1000; // 1 hour in milliseconds 
          // Get the last download time from localStorage
          const lastDownloadFile = localStorage.getItem(lastDownloadKey);
          const currentTime = Date.now();

          if(!lastDownloadFile || currentTime - parseInt(lastDownloadFile) > oneHourInMs){

               const link = document.createElement("a");
               link.href = cvImageUrl;
               link.download = fileName;
               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);

               localStorage.setItem(lastDownloadKey, currentTime.toString());
               setMessage("CV downloaded");
          }else{
               setMessage("CV is already doenlode")
          }
     }, [])
     return(
          <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        <a
          href="/cv-image.jpg" // Fallback manual download link
          download="My_CV.jpg"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Download CV Manually
        </a>
      </div>
    </div>
     )
}