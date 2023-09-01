import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    let navigate = useNavigate()
  return (
    <div>
        Home <br></br>
        <button onClick={(e) => {
            navigate('contact')
        }}>Navigate to Contact</button>
    </div>
  )
}

export default HomePage