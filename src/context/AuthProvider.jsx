import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/StorageLocal'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null)
  //localStorage.clear()
  
  useEffect(()=>{
     setLocalStorage()
    const{employees,admin} = getLocalStorage()
    setUserdata(employees)
 },[])



  return (
    <AuthContext.Provider value={[userdata,setUserdata]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
