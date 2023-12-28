import { useState } from "react"
import "./RegistrationFrom.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegistrationForm = () => {
  const [formsubmit,setFormSubmit] = useState(false)
  const [formData,setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [formErr,setFormErr] = useState({})

  const handleInputChange =(e)=>{
    let {name,value} = e.target
    setFormData({
      ...formData,[name]:value
    })
  }
  const formSubmitHandler =(e)=>{
    e.preventDefault()
    let errors = validate(formData)
    setFormErr(errors)

    if (Object.keys(errors).length == 0) {
      setFormSubmit(true)
      toast('Form Submitted successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    } else {
      setFormSubmit(false)
      Object.keys(errors).forEach((e)=>{
        toast.error(`${errors[e]}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
    }
  }
  
  const validate =(data)=>{
    let error = {}
    if (data.firstName.trim() == ""){
      error.firstName = "Enter Your First Name"
    }
    if (data.lastName.trim() == ""){
      error.lastName = "Enter Your Last Name"
    }
    if (data.email.trim() == ""){
      error.email = "Enter Your Email"
    }
    if (data.phone.trim() == ""){
      error.phone = "Enter Your Phone Number"
    }
    return error
  }
  
  return (
      <>
        <ToastContainer/>
      <div className="form">
        <form onSubmit={(e)=>{formSubmitHandler(e)}}>
          {formsubmit && <div className="success">
            <p>Registration Successful</p>
          </div>}
          <div>
            <input type="text" name="firstName" placeholder="Enter First Name" onChange={(e)=>{handleInputChange(e)}}/>
            {formErr.firstName && <p>Enter Your First Name</p>}
          </div>
          <div>
            <input type="text" name="lastName" placeholder="Enter Last Name" onChange={(e)=>{handleInputChange(e)}}/>
            {formErr.lastName && <p>Enter Your last Name</p>}
          </div>
          <div>
            <input type="email" name="email" placeholder="Enter Email" onChange={(e)=>{handleInputChange(e)}}/>
            {formErr.email && <p>Enter Your Email</p>}
          </div>
          <div>
            <input type="number" name="phone" placeholder="Enter Phone Number" onChange={(e)=>{handleInputChange(e)}}/>
            {formErr.phone && <p>Enter Your First Name</p>}
          </div>
          <button className="button" type="submit" style={{fontSize:"1.5vw"}}>Submit</button>
        </form>
        
      </div>
      </>
  )
}

export default RegistrationForm