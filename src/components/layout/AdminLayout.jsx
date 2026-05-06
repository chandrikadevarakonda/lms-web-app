import { useState } from 'react'
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const AdminLayout = () => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/students', label: 'Students', icon: '👨‍🎓' },
    { path: '/admin/courses', label: 'Courses', icon: '📚' },
    { path: '/admin/payments', label: 'Payments', icon: '💰' },
    { path: '/admin/enquiries', label: 'Enquiries', icon: '📋' },
  ]

  const adminOnlyItems = [
    { path: '/admin/reports', label: 'Reports', icon: '📈' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-16'
        } bg-gray-900 text-white flex flex-col transition-all duration-300`}
      >
        {/* Logo */}
        <div className="px-4 py-5 border-b border-gray-700 flex items-center justify-between">
          {sidebarOpen && (
            <span className="text-xl font-bold text-blue-400">EduNest</span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white p-1 rounded"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors
                   ${
                     location.pathname === item.path
                       ? 'bg-blue-600 text-white'
                       : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                   }
                `}
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}

          {/* Admin only section */}
          {user?.role === 'admin' && (
            <>
              {sidebarOpen && (
                <p className="text-gray-600 text-xs uppercase px-4 py-3 mt-2 tracking-wider">
                  Admin Only
                </p>
              )}
              {adminOnlyItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={` flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors
                     ${
                       location.pathname === item.path
                         ? 'bg-blue-600 text-white'
                         : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                     }
                 
                 `}
                >
                  <span className="text-lg">{item.icon}</span>
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              ))}
            </>
          )}
        </nav>

        {/* User info at bottom */}
        <div className="border-t border-gray-700 p-4">
          {sidebarOpen ? (
            <div>
              <p className="text-sm font-medium text-white">{user?.name}</p>
              <p className="text-sx text-gray-400 capitalize mb-3">
                {user?.role}
              </p>
              <button
                onClick={handleLogout}
                className="w-full text-sm text-red-400 hover:text-red-300 text-left"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300"
            >
              ⏻
            </button>
          )}
        </div>
      </aside>

      {/*Main content area*/}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-sm text-gray-500 capitalize">
              {user?.role} Portal
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full capitalize">
              {user?.role}
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
