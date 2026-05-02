import { createContext, useContext, useState, useEffect } from 'react'

//step1-create the context
const AuthContext = createContext()

//step2-Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  //Check localstorage on app startup
  useEffect(() => {
    const token = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')

    if (token && savedUser) {
      setUser(JSON.parse(savedUser))
    }

    setLoading(false)
  }, [])

  //login-Function-saves token n user
  const login = (token, userData) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
  }

  //Logout function-clearn everything
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  //Don't render anything untill we've checked localstorage
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Loading..</p>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

//step3-custom hook for easy access
export const useAuth = () => {
  return useContext(AuthContext)
}
