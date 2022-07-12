import logo from './logo.svg';
import './App.css';
//import ResponsiveAppBar from './AppBar'
//import SignIn from './SignIn'
//import AddGroup from './AddGroup'
import AddCourse from './AddCourse'

function App() {
 const softwareArr=[
   {SoftWareId:1,SoftWareName:"visual studio"},
   {SoftWareId:2,SoftWareName:"ssms"},
   {SoftWareId:1,SoftWareName:"visual studio"},
   {SoftWareId:2,SoftWareName:"ssms"}, 
    {SoftWareId:1,SoftWareName:"visual studio"},
   {SoftWareId:2,SoftWareName:"ssms"},
 ]
  return (<>
{/* <ResponsiveAppBar/> 
 <AddGroup/> */}
<AddCourse softwareArr={softwareArr}/> 
</>
  );
}

export default App;
