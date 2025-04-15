import React, { createContext, useState, useEffect } from 'react'
import {getLocalStorage,setLocalStorage} from '../utils/LocalStorage'



export const AuthContext = createContext()

const AuthProvider = ({children}) => {
//localStorage.clear()

  const [authData, setAuthData] = useState(null)


  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    if(employees && admin){
    setAuthData({ employees, admin })

  }
  }, []);
  

  return (
    
      <AuthContext.Provider value={{ authData, setAuthData }}>
        {children}
      </AuthContext.Provider>
    
  )
}

export default AuthProvider
