import React,{useContext} from 'react'
import ThemeContext from '../Context'
import Navbar from './Navbar'
import './Common.css'

const Contact = () => {

  const {isLight} = useContext(ThemeContext)

  return (
    <>
    <div className={isLight?'light':'dark'}>
     <Navbar />
     <h1>You can mail me help@geekster.in</h1> 
     </div>
    </>
  )
}

export default Contact
