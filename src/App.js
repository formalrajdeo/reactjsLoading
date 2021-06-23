import React, { useState, useEffect } from 'react'
import './index.css'

const App = () => {
  const [loading, setLoading] = useState(0)
  useEffect(() => {
    setLoading(1)
  }, [])
  console.log('loading ka value dekho  : ', loading)

  return (
    <>
      {loading === 1 && (
        <div className='container'>
          <span>Page 1</span>
          <button className='btn' onClick={() => setLoading(2)}>
            next
          </button>
        </div>
      )}
      {loading === 2 && (
        <div className='container'>
          <span>Page 2</span>
          <div className='two-btn'>
            <button className='btn' onClick={() => setLoading(1)}>
              previous
            </button>
            <button className='btn ' onClick={() => setLoading(3)}>
              next
            </button>
          </div>
        </div>
      )}
      {loading === 3 && (
        <div className='container'>
          <span>Page 3</span>
          <div className='two-btn'>
            <button className='btn' onClick={() => setLoading(2)}>
              previous
            </button>
            <button className='btn' onClick={() => setLoading(1)}>
              Home
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
