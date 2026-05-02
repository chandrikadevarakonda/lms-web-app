import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          EduNest
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/courses"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Courses
          </Link>
          <Link
            to="/faculty"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Faculty
          </Link>
          <Link
            to="/trial-classes"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Trial Classes
          </Link>
          <Link
            to="/batches"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Batch Schedule
          </Link>
          <Link
            to="/enroll"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
          >
            Enroll Now
          </Link>

          {/* Show logout if logged in, login if not */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium">{user.name}</span>
              <button
                onClick={logout}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/admin/login"
              className="text-gray-500 hover:text-blue-600 font-medium"
            >
              Admin Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
