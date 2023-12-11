import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

      <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
      <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
      <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "pink" }}>Pink</button>
      <button onClick={() => setColor("black")} className='outlVioletine-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "black" }}>Black</button>
      <button onClick={() => setColor("Violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Violet" }}>Violet</button>
      <button onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "grey" }}>Grey</button>
      <button onClick={() => setColor("darkRed")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "darkRed" }}>DarkRed</button>
      <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>
    </div >
  )
}

export default App
