import { useAuth } from '../../context/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-500 mb-8">
          Role:{' '}
          <span className="font-medium text-blue-600 capitalize">
            {user?.role}
          </span>
        </p>
        <div className="bg-white rounded-xl shadow-md p-8 text-center text-gray-400">
          Dashboard content coming soon...
        </div>
      </div>
    </div>
  )
}

export default Dashboard
