import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-6">🚫</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Access Denied</h1>
        <p className="text-gray-500 mb-8">
          You don't have permission to view this page.
        </p>
        <Link
          to="/admin/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Back to Login
        </Link>
      </div>
    </div>
  )
}

export default Unauthorized
