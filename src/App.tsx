// BOOTSTRAP 5
import 'bootstrap/dist/css/bootstrap.min.css';

// BOOTSTRAP ICONS
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css'
import ProfileBiodata from './Component/ProfileBiodata'

function App() {

  return (
    <>
      <div className="container allign-items-center">
        <div className="container">
          <ProfileBiodata></ProfileBiodata>
        </div>
      </div>
    </>
  )
}

export default App
