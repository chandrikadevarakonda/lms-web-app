import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { loginService } from '../../services/authService'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please enter both email and password')
      return
    }

    try {
      setLoading(true)
      setError('')

      // Call mock service
      const { token, user } = await loginService(
        formData.email,
        formData.password
      )

      // Save to AuthContext and localStorage
      login(token, user)

      // Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin/dashboard')
      } else {
        navigate('/staff/dashboard')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">EduNest</h1>
          <p className="text-gray-500 mt-2">Admin Portal — Sign In</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-300 text-red-600 rounded-lg px-4 py-3 mb-6 text-sm">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        {/* Hint for testing */}
        <div className="mt-6 bg-gray-50 rounded-lg p-4 text-sm text-gray-500">
          <p className="font-medium text-gray-600 mb-1">Test Credentials:</p>
          <p>Admin: admin@edunest.com / admin123</p>
          <p>Staff: staff@edunest.com / staff123</p>
        </div>
      </div>
    </div>
  )
}

export default Login
