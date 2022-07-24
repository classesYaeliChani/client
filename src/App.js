import logo from './logo.svg';
import './App.css';
//import AppBar from './AppBar'
import SignIn from './SignIn'
import AddGroup from './AddGroup'
//import AddCourse from './AddCourse'
//import CheckboxesTags from './AddRoom'

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
 {/* <AppBar/>  */}
 <SignIn/>
{/* <AddCourse softwareArr={softwareArr}/>  */}
<AddGroup/>
<CheckboxesTags/>
</>
  );
}

export default App;
