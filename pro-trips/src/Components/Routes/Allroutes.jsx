import {Routes,Route} from "react-router-dom"
import Home from '../Home'
import Contact from '../contact'
import RegistrationForm from '../RegistrationForm'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/registrationform' element={<RegistrationForm/>}/>
    </Routes>
  )
}

export default Allroutes