import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './AppBar'
import SignIn from './SignIn'
import AddGroup from './AddGroup'
import AddCourse from './AddCourse'
function App() {
  return (<>
<ResponsiveAppBar/>
<AddGroup/>
<AddCourse/>
</>
  );
}

export default App;
