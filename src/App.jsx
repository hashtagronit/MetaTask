import React, { useContext,useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App =  () => {

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const { authData} = useContext(AuthContext)

const employees = authData?.employees || []
  const admin = authData?.admin || []
  

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }

},[]) 



const handleLogin = (email, password) => {
  if (authData) {
    const adminn = admin.find((e) => e.emailId === email && e.password === password);
    if (adminn) {
      setUser('admin');
      setLoggedInUserData(adminn);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminn }));
    } else {
      const employee = employees.find((e) => e.emailId === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid Credentials");
      }
    }
  } else {
    alert("Invalid Credentials");
  }
}


if (!authData || !authData.employees || !authData.admin) {
  return <div>Loading...</div>;
}


  return (
    <div>
      
      {!user ? <Login handleLogin={handleLogin} /> :'' }
      {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </div>
  )
}

export default App
