import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navigation.css'


const Navigation = () => {
  return (
    <nav className='navigation'>
        <span>React 2023</span>
        <Link className='navigation_link' to='/users'>Users</Link>
        <Link className='navigation_link' to='/todos'>Todos</Link>
    </nav>
  )
}

export default Navigation