import './App.css'
import { Profile } from './profile/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // entrée du data
  const Data = 
    {
      id: Math.random(),
      fullName: "Mohamed Sellami",
      bio: "flkdqsgdgmuHEIO£%MGKSDgl,l kgjO%IDSJMGJghKJDNmknf",
      profession: "ingénieur",
    }
  ;
  // alert function
  const handleName =(x) => alert(` the name of profile user is: ${x}`);
  return (
    // appel du component
    <>
    <Profile info={Data} alertFunction={handleName}><img src="/profilephoto.jpg" alt="profile-photo" className="image1" /></Profile>
    </>
  )
}

export default App
