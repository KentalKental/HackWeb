// BOOTSTRAP 5
import 'bootstrap/dist/css/bootstrap.min.css';

// BOOTSTRAP ICONS
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import CommunityCard from './Component/CommunityCard'

import './App.css'
import SignUp1 from './SignUpForm1'

function App() {

  return (
    <>
    <div className="container">
      <div className="row d-flex">
        <div className="col-4"><CommunityCard name="Bonding" image=".\src\assets\community-card-bonding.jpg"></CommunityCard></div>
        <div className="col-4"><CommunityCard name="Build" image=".\src\assets\community-card-build.jpg"></CommunityCard></div>
        <div className="col-4"><CommunityCard name="Breakthrough" image=".\src\assets\community-card-breakthrough.jpg"></CommunityCard></div>
      </div>
    </div>
      
      
    </>
  )
}

export default App
