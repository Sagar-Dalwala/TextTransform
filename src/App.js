import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#1a1a1b';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  
  return (
    <>
      <Router>

      <Navbar title="Text Transform" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <Switch>
        <Route exact path='/about'>
          <About mode={mode}/>
        </Route>
        <Route exact path='TextTransform'>
          <TextForm entertext="Provide Your Text" heading="Text to Analyze" mode={mode} showAlert={showAlert}/>
          </Route>
      </Switch>
      </Router>
      {/* <Navbar/> */}
      {/* <TextForm entertext="Provide Your Text" heading="Text to Analyze" mode={mode} showAlert={showAlert}/> */}
      {/* <About/> */}
    </>
  );
}

export default App;
