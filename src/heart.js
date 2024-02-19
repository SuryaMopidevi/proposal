// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Tq from './tq';

function App() {
  const [toggle, settoggle] = useState(0)
  const EnterMouse = ()=>{settoggle(1)}
  const ExitMouse = ()=>{settoggle(0)}
  return (
    <div className="App" >
      <h3 className='top'>Will You Be My VALENTINE ❤️???</h3>
        <div className='gap' style={{
      backgroundImage:`url(${process.env.PUBLIC_URL}/love.gif`,
      backgroundRepeat:"no-repeat",
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      width:"20vw",
      height:"33vh"
    }}>
          <div className='flex'>
          <Link  to='/tq' ><button>
            {toggle===0 && <p className='accept'>YES</p>}{toggle===1 && <p>NO</p>}
            </button></Link>
            <Link to='/tq' ><button
          onMouseEnter={EnterMouse}
          onMouseLeave={ExitMouse}
          >{toggle===0 && <p>NO</p>}{toggle===1 && <p>YES</p>}</button></Link>

          </div>
        </div>
      
    </div>
  );
}

export default App;
