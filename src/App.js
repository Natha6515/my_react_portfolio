import './App.css';
import Journey from './Journey';
import Skills from './Skills';
import Contact from './Contact';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import MainPage from './MainPage';
import Footer from './Footer';

function App() {
  return (
    <>
     
     <Navbar/>
     <Switch>
        
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/journey" component={Journey}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/home" component={MainPage}></Route>
        <Route exact path="/aboutme" component={Aboutme}></Route>
        <Redirect to="/"></Redirect>

     </Switch>
     <Footer></Footer>
     {/* <Home></Home>
     <Journey></Journey>
     <Skills></Skills>
     <Contact></Contact> */}
    </>
  );
}

export default App;
