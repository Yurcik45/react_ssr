import React, { useState, useEffect } from 'react'

const Test = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const tm = setTimeout(() => {
      setLoading(false)
      clearTimeout(tm)
    }, 3000)
  }, [])

  console.info('test')

  return (
    <div>
      {
        loading
          ? <div>loading ...</div>
          : <div>hello</div>
      }
    </div>
  )
}

export default Test