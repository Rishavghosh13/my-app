// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import Alert from './components/Alert'
import About from './components/About';
import { useState } from 'react';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const[change,setChange]=useState('primary')
  const [val,setVal]=useState(1)
  const handleR=()=>{
    setVal(2)
    setChange('danger')
    if(mode==='dark')
   { document.body.style.backgroundColor = '#851f0d'
   
  }
}
const handleY=()=>{
  setVal(3)
  setChange('warning')
  if(mode==='dark')
  {document.body.style.backgroundColor = '#949025'
    }
  
}
const handleB=()=>{
  setVal(1)
  setChange('primary')
  if(mode==='dark')
  {document.body.style.backgroundColor = '#094682'
   }
}
const handleG=()=>{
  setVal(4)
  setChange('success')
  if(mode==='dark')
 {document.body.style.backgroundColor = '#046b1b'
 }
}
  const[mode,setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='dark')
    {setMode('light')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    showAlert('Dark Mode has been enabled',"success")
    }
    else
    {setMode('dark')
    if(val===1)
    {document.body.style.backgroundColor = '#094682'
    setChange('primary')}
    else if(val===2)
    {document.body.style.backgroundColor = '#851f0d'
    setChange('danger')}
    else if(val===3)
    {document.body.style.backgroundColor = '#949025'
    setChange('warning')}
    else if(val===4)
    {document.body.style.backgroundColor = '#046b1b'
    setChange('success')}
    document.body.style.color = 'white'
    showAlert('Dark Mode has been disabled',"success")
    }
  }

  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
<>
<Navbar title="Textutils" abouttext="About" mode={mode} toggleMode={toggleMode} change={val} handleB={handleB} handleG={handleG} handleR={handleR} handleY={handleY} />
<Alert alert={alert}/>
{/* <Router> */}
<div className="container">
{/* <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={ }>
            </Route>
          </Routes> */}
            <Textform showAlert={showAlert} heading="Enter your text to analyze" mode={mode} change={change}/>
        
</div>
{/* </Router> */}
{/* <div className="container my=3">
  <About/>
  </div> */}

</>
  );
}

export default App;
