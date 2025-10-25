import { useEffect } from "react"
import Swal from 'sweetalert2'

export const SweetAlertExample = () =>{
     useEffect(() =>{
          Swal.fire({
               title: "Welcome",
               text: "This popup runs once when the component mounts.",
               icon: "info",
               confirmButtonText: "Cool",
          });
     }, []);
     return (
          <div>
               <h2 className="text-center mt-10 text-2xl">SweetAlert Example</h2>;
          </div>
     )
}