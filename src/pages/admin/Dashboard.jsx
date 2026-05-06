import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'

// Reusable Stat Card component
const StatCard = ({ label, value, icon, bg, text }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4">
    <div className={`${bg} ${text} text-3xl p-4 rounded-xl`}>{icon}</div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{label}</p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
)

// Mock data — replace with API later
const mockStats = {
  totalStudents: 156,
  activeCourses: 6,
  pendingEnquiries: 12,
  totalRevenue: '$24,500',
}

const mockEnquiries = [
  {
    id: 1,
    name: 'Rahul Sharma',
    course: 'Web Development',
    date: 'May 1, 2026',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Priya Patel',
    course: 'AI Engineer',
    date: 'Apr 30, 2026',
    status: 'contacted',
  },
  {
    id: 3,
    name: 'Ankit Verma',
    course: 'Salesforce',
    date: 'Apr 29, 2026',
    status: 'pending',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    course: 'SDET',
    date: 'Apr 28, 2026',
    status: 'enrolled',
  },
  {
    id: 5,
    name: 'Kiran Kumar',
    course: 'Data Analytics',
    date: 'Apr 27, 2026',
    status: 'pending',
  },
]

const statusStyles = {
  pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Pending' },
  contacted: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Contacted' },
  enrolled: { bg: 'bg-green-100', text: 'text-green-700', label: 'Enrolled' },
}

const Dashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState(null)
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats(mockStats)
      setEnquiries(mockEnquiries)
      setLoading(false)
    }, 800)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-400 text-lg">Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Here's what's happening at EduNest today
        </p>
      </div>

      {/* KPI Stat Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard
          label="Total Students"
          value={stats.totalStudents}
          icon="👨‍🎓"
          bg="bg-blue-50"
          text="text-blue-600"
        />
        <StatCard
          label="Active Courses"
          value={stats.activeCourses}
          icon="📚"
          bg="bg-green-50"
          text="text-green-600"
        />
        <StatCard
          label="Pending Enquiries"
          value={stats.pendingEnquiries}
          icon="📋"
          bg="bg-yellow-50"
          text="text-yellow-600"
        />
        <StatCard
          label="Total Revenue"
          value={stats.totalRevenue}
          icon="💰"
          bg="bg-purple-50"
          text="text-purple-600"
        />
      </div>

      {/* Recent Enquiries Table */}
      <div className="bg-white rounded-xl shadow-sm">
        {/* Table Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Enquiries
          </h2>
          <span className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">
            View All
          </span>
        </div>

        {/* Table */}
        <div className="overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Course Interest
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr
                  key={enquiry.id}
                  className="border-b border-gray-50 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {enquiry.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{enquiry.course}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {enquiry.date}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`${statusStyles[enquiry.status].bg} ${
                        statusStyles[enquiry.status].text
                      } text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {statusStyles[enquiry.status].label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 text-sm font-medium hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
