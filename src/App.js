import logo from './logo.svg';
import './App.css';
import { Container } from './component/navbar';
import { CompleteForm } from './component/text';
import { Letterchange } from './component/text';
import { useState } from 'react';
import { Alert } from './component/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/try';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)



  const handledarkmode = () => {
    if (mode === 'light') {
      console.log("dark");
      document.body.classList.add('dark');
      setMode('dark')
      showAlert('sucess', 'dark mode')
    }
    else {
      console.log("light");
      document.body.classList.remove('dark');
      setMode('light')
      showAlert('sucess', 'light mode')
    }
  }

  const showAlert = (type, message) => {
    setAlert({
      'type': type,
      'message': message
    })

    setInterval(() => {
      setAlert(null)
    }, 2000);
  }


  function Home() {
    return (
      <>
        <Alert alert={alert} />

        <div className='flex bg-gray-800 dark:bg-black p-10' style={color}>
          <CompleteForm />
          <Letterchange />
        </div>
      </>
    )
  }

  const [color, setColor] = useState(null)

  const bgcolor = (e) => {
    console.log(e.target.className.split(/[ ]+/).filter(className => className.startsWith('bg')));
    let coloris = String(e.target.className.split(/[ ]+/).filter(className => className.startsWith('bg')))
    console.log(coloris);
    setColor({ 'color': coloris })
    document.body.className = coloris
    console.log('ggg');
  }


  return (
    <>
      <Router>
        <Container
          src={logo}
          mode={mode}
          setMode={handledarkmode}
        />

        <div className='flex gap-4 bg-gray-800' >
          <button onClick={bgcolor} className='p-4 bg-green-500' ></button>
          <button onClick={bgcolor} className='p-4 bg-blue-500'></button>
          <button onClick={bgcolor} className='p-4 bg-pink-500'> </button>
        </div>
        <Routes>
          <Route exact path='/about' element={<About />} />
        </Routes>

        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
