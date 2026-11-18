import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='outer'>
      <div className='inner'>
        <h1 style={{ color: 'black',textAlign: 'center'
         }}>Square & Circle</h1>
         <div className='square'>
<div className='circle'>
  
</div>
         </div>
      </div>
    </div>
          </>
  )
}

export default App
