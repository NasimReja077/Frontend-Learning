import {useFormStatus} from 'react-dom';
const App =()=> {
  const handleSubmit=async ()=>{
    await new Promise(res=>setTimeout(res,5000));
    console.log("submit");
  }

  const CustomerForm =()=>{
    const {pending,data,method} =useFormStatus();
    console.log(pending,data,method);
    return(
      <div>
          <input type="text" placeholder="Enter Name" />
          <br />
          <br />
          <input type="text" placeholder="Enter Password" />
          <br />
          <br />
          <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
      </div>
    )
  }
  return (
   <div>
    <h1>useFormStatus Hook in React js 19</h1>
    <form action={handleSubmit} method='post'>
      <CustomerForm />
    </form>
   </div>

  );
}

export default App;