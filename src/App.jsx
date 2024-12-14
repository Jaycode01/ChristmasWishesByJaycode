import React from 'react'
import { useState, useEffect } from 'react';
import PreLoader from './components/PreLoader'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500); 
  }, []);
  return (

    <div>
      {loading ? <PreLoader /> : <div>
          <p className='text-4xl font-Poppins'>Welcome</p>
        </div>}
    </div>

  )
}

export default App
