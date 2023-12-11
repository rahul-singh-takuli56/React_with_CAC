import React, { useCallback, useRef, useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [num_allowed, setNum_allowed] = useState(false);
  const [char_allowed, setChar_allowed] = useState(false);
  const [Password, setPassword] = useState("");

  // use Reaf Hook 
  const passwordRef = useRef(null);


  const password_generator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num_allowed) str += "0123456789";
    if (char_allowed) str += "!@#$%^&*()_+{}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, num_allowed, char_allowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(Password);
  }, [Password])

  useEffect(() => {
    password_generator();
  }, [length, num_allowed, char_allowed, setPassword])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl text-center text-white mb-4'>Password Generator</h1>
      <div className='max-w-md w-full p-8 rounded-lg bg-gray-700 text-orange-500'>
        <input
          type="text"
          value={Password}
          className='outline-none w-full py-1 px-3 mb-4'
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='mt-4'>
        <div className='mb-2'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={num_allowed}
            id="numberInput"
            onChange={() => setNum_allowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={char_allowed}
            id="characterInput"
            onChange={() => setChar_allowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Chracter</label>
        </div>
      </div>
    </div>
  );
}

export default App;
