import React,{useState} from 'react'
import './Login.css'
function Login() {
  const [status,setstatus] = useState('');
  function handleFileChange(event)
  {
     const resp=event.target.files[0];
     if(resp)
     {
        setstatus("File Uploaded")
     }
     else
     {
        setstatus("File not Uploaded")
     }
  }
  return (
    <div className='window'>
      <div className='widget'>
        <h5>{status}</h5>
        <input type='file' className='filedialog' onChange={handleFileChange}></input>
      </div>
    </div>
  )
}
export default Login
