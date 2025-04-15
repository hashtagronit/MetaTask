import React from 'react'

const Header = (props) => {

  const logOutUser= ()=> {
    localStorage.setItem('loggedInUser','')
    //window.location.reload()                      (this reloades the page , we dont want to reload as using react)
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{props.data.name} 👋</span></h1>
      <button onClick={logOutUser} className='bg-emerald-600 rounded-sm text-white text-lg font-medium outline-none py-2 px-5  placeholder:text-white'>Log Out</button>
    </div>
  )
}

export default Header
