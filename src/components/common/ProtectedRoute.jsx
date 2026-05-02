import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth()

  //Not logged in -redirect to login
  if (!user) {
    return <Navigate to="/admin/login" replace />
  }

  //Logged in but wrong role-redirect to unauthorized
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  //All good-render page
  return children
}

export default ProtectedRoute
