// BOOTSTRAP 5
import 'bootstrap/dist/css/bootstrap.min.css';

// BOOTSTRAP ICONS
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css'
import MultiStepForm from './MultiStepForm';
import Navbar from './Component/Navbar';
import ProfileBiodata from './Component/ProfileBiodata';
import Footer from './Component/Footer';

function App() {

  return (
    <>
      {/* <div className="container allign-items-center">
        <div className="container">
          <ProfileBiodata></ProfileBiodata>
        </div>
      </div> */}
      <Navbar></Navbar>
      <div className="sign-up-part">
        <MultiStepForm></MultiStepForm>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
