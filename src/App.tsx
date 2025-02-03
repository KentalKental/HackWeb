// BOOTSTRAP 5
import 'bootstrap/dist/css/bootstrap.min.css';

// BOOTSTRAP ICONS
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './Navbar'
import Footer from './Footer'
import SearchButton from './SearchButton'

import './App.css'
import SignUp1 from './SignUpForm1'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="sign-up-part">
        <SignUp1></SignUp1>
      </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
