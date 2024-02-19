import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
function Trail() {
    const [hovered, setHovered] = useState(false);
    const [text, setText] = useState('Yes');
    const [t2, setT2] = useState('No');

    const handleHover = () => {
        setHovered(!hovered);
        setText(text === 'Yes' ? 'No' : 'Yes');
        setT2(t2 === 'Yes' ? 'No' : 'Yes');
    };

    return (
        <div className="App" >
            <h3 className='top'>Will You Be My VALENTINE ❤️???</h3>
            <div className='gap' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/love.gif`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: "20vw",
                height: "33vh"
            }}>
            
          <div className='flex'>
          <Link to='/tq' className='container' >{text}</Link>
            <Link to='/tq' 
            
                className="container"
            >
            <div
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    {t2}
                </div>
            </Link>

          </div>

            </div>
        </div>
    );
}

export default Trail;
