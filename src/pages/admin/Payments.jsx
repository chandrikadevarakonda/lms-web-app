import { useState, useMemo } from 'react'

const mockPayments = [
  {
    id: 1,
    studentName: 'Rahul Sharma',
    course: 'Web Development',
    totalFee: 1500,
    paidAmount: 1500,
    dueDate: 'Mar 1, 2026',
    status: 'paid',
  },
  {
    id: 2,
    studentName: 'Priya Patel',
    course: 'AI Engineer',
    totalFee: 2000,
    paidAmount: 1000,
    dueDate: 'Mar 15, 2026',
    status: 'partial',
  },
  {
    id: 3,
    studentName: 'Ankit Verma',
    course: 'Salesforce',
    totalFee: 1800,
    paidAmount: 0,
    dueDate: 'Feb 28, 2026',
    status: 'overdue',
  },
  {
    id: 4,
    studentName: 'Sneha Reddy',
    course: 'SDET',
    totalFee: 1600,
    paidAmount: 1600,
    dueDate: 'Apr 1, 2026',
    status: 'paid',
  },
  {
    id: 5,
    studentName: 'Kiran Kumar',
    course: 'Data Analytics',
    totalFee: 1400,
    paidAmount: 700,
    dueDate: 'Mar 20, 2026',
    status: 'partial',
  },
  {
    id: 6,
    studentName: 'Divya Singh',
    course: 'UI/UX Design',
    totalFee: 1200,
    paidAmount: 0,
    dueDate: 'Feb 20, 2026',
    status: 'overdue',
  },
]
const feeStyles = {
  paid: { bg: 'bg-green-100', text: 'text-green-700', label: 'Paid' },
  partial: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Partial' },
  overdue: { bg: 'bg-red-100', text: 'text-red-700', label: 'Overdue' },
}

const Payments = () => {
  const [search, setSearch] = useState('')
  const [filterCourse, setFilterCourse] = useState('all')

  // Filter students based on search and course filter
  const filteredPayments = useMemo(() => {
    return mockPayments.filter((payment) => {
      const matchesSearch = payment.studentName
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesCourse =
        filterCourse === 'all' || payment.course === filterCourse

      return matchesSearch && matchesCourse
    })
  }, [search, filterCourse])

  // Get unique courses for filter dropdown
  const courses = ['all', ...new Set(mockPayments.map((s) => s.course))]

  // Stats
  const totalRevenue = mockPayments.reduce(
    (sum, payment) => sum + payment.paidAmount,
    0
  )
  const Paid = mockPayments.filter((s) => s.status === 'paid').length
  const Partial = mockPayments.filter((s) => s.status === 'partial').length
  const Overdue = mockPayments.filter((s) => s.status === 'overdue').length

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
          <p className="text-gray-500 mt-1">Manage all payments</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="bg-blue-50 text-blue-600 text-2xl p-3 rounded-lg">
            💰
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-800">
              ${totalRevenue.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="bg-green-50 text-green-600 text-2xl p-3 rounded-lg">
            ✅
          </div>
          <div>
            <p className="text-gray-500 text-sm">Paid</p>
            <p className="text-2xl font-bold text-gray-800">{Paid}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="bg-red-50 text-red-600 text-2xl p-3 rounded-lg">
            📋
          </div>
          <div>
            <p className="text-gray-500 text-sm">Partial</p>
            <p className="text-2xl font-bold text-gray-800">{Partial}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="bg-red-50 text-red-600 text-2xl p-3 rounded-lg">
            ⚠️
          </div>
          <div>
            <p className="text-gray-500 text-sm">Overdue</p>
            <p className="text-2xl font-bold text-gray-800">{Overdue}</p>
          </div>
        </div>
      </div>
      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search by student name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
        />
        <select
          value={filterCourse}
          onChange={(e) => setFilterCourse(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 bg-white"
        >
          {courses.map((course) => (
            <option key={course} value={course}>
              {course === 'all' ? 'All courses' : course}
            </option>
          ))}
        </select>
      </div>

      {/* Payment Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">All Payments</h2>
        </div>

        {/* Table */}
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Student Name
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Course
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Total Fee
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Paid Amount
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Balance
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.length > 0 ? (
              filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b border-gray-50 hover:bg-gray-50"
                >
                  {/* Student name  */}
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">
                      {payment.studentName}
                    </p>
                  </td>

                  {/* Course */}
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {payment.course}
                  </td>

                  {/* Total Fee */}
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    ${payment.totalFee.toLocaleString()}
                  </td>

                  {/* Paid Amount */}
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    ${payment.paidAmount.toLocaleString()}
                  </td>

                  {/* Balance */}
                  <td className="px-6 py-4 text-sm font-medium">
                    <span
                      className={
                        payment.totalFee - payment.paidAmount === 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }
                    >
                      $
                      {(payment.totalFee - payment.paidAmount).toLocaleString()}
                    </span>
                  </td>

                  {/* Status badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`${feeStyles[payment.status].bg} ${
                        feeStyles[payment.status].text
                      } text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {feeStyles[payment.status].label}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <button className="text-gray-400 text-sm font-medium hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              // Empty state
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-16 text-center text-gray-400"
                >
                  <p className="text-4xl mb-3">🔍</p>
                  <p className="font-medium">No payments found</p>
                  <p className="text-sm mt-1">
                    Try adjusting your search or filter
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Payments
