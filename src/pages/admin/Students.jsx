import { useState, useMemo } from 'react'

const mockStudents = [
  {
    id: 1,
    name: 'Rahul Sharma',
    email: 'rahul@gmail.com',
    course: 'Web Development',
    enrolledDate: 'Jan 10, 2026',
    feeStatus: 'paid',
    attendance: 92,
    status: 'active',
  },
  {
    id: 2,
    name: 'Priya Patel',
    email: 'priya@gmail.com',
    course: 'AI Engineer',
    enrolledDate: 'Feb 5, 2026',
    feeStatus: 'partial',
    attendance: 78,
    status: 'active',
  },
  {
    id: 3,
    name: 'Ankit Verma',
    email: 'ankit@gmail.com',
    course: 'Salesforce',
    enrolledDate: 'Jan 20, 2026',
    feeStatus: 'overdue',
    attendance: 65,
    status: 'active',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    email: 'sneha@gmail.com',
    course: 'SDET',
    enrolledDate: 'Mar 1, 2026',
    feeStatus: 'paid',
    attendance: 88,
    status: 'active',
  },
  {
    id: 5,
    name: 'Kiran Kumar',
    email: 'kiran@gmail.com',
    course: 'Data Analytics',
    enrolledDate: 'Feb 15, 2026',
    feeStatus: 'paid',
    attendance: 95,
    status: 'active',
  },
  {
    id: 6,
    name: 'Divya Singh',
    email: 'divya@gmail.com',
    course: 'UI/UX Design',
    enrolledDate: 'Mar 10, 2026',
    feeStatus: 'partial',
    attendance: 70,
    status: 'inactive',
  },
]

const feeStyles = {
  paid: { bg: 'bg-green-100', text: 'text-green-700', label: 'Paid' },
  partial: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Partial' },
  overdue: { bg: 'bg-red-100', text: 'text-red-700', label: 'Overdue' },
}

const statusStyles = {
  active: { bg: 'bg-green-100', text: 'text-green-700', label: 'Active' },
  inactive: { bg: 'bg-gray-100', text: 'text-gray-600', label: 'Inactive' },
}

const Students = () => {
  const [search, setSearch] = useState('')
  const [filterCourse, setFilterCourse] = useState('all')

  // Filter students based on search and course filter
  const filteredStudents = useMemo(() => {
    return mockStudents.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.email.toLowerCase().includes(search.toLowerCase())

      const matchesCourse =
        filterCourse === 'all' || student.course === filterCourse

      return matchesSearch && matchesCourse
    })
  }, [search, filterCourse])

  // Get unique courses for filter dropdown
  const courses = ['all', ...new Set(mockStudents.map((s) => s.course))]

  // Stats
  const totalStudents = mockStudents.length
  const activeStudents = mockStudents.filter(
    (s) => s.status === 'active'
  ).length
  const overdueStudents = mockStudents.filter(
    (s) => s.feeStatus === 'overdue'
  ).length

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Students</h1>
          <p className="text-gray-500 mt-1">Manage all enrolled students</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700">
          + Add Student
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="bg-blue-50 text-blue-600 text-2xl p-3 rounded-lg">
            👨‍🎓
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Students</p>
            <p className="text-2xl font-bold text-gray-800">{totalStudents}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="bg-green-50 text-green-600 text-2xl p-3 rounded-lg">
            ✅
          </div>
          <div>
            <p className="text-gray-500 text-sm">Active Students</p>
            <p className="text-2xl font-bold text-gray-800">{activeStudents}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="bg-red-50 text-red-600 text-2xl p-3 rounded-lg">
            ⚠️
          </div>
          <div>
            <p className="text-gray-500 text-sm">Overdue Payments</p>
            <p className="text-2xl font-bold text-gray-800">
              {overdueStudents}
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search by name or email..."
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
              {course === 'all' ? 'All Courses' : course}
            </option>
          ))}
        </select>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">All Students</h2>
          <span className="text-sm text-gray-500">
            Showing {filteredStudents.length} of {totalStudents} students
          </span>
        </div>

        {/* Table */}
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Student
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Course
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Enrolled
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Fee Status
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Attendance
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
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-50 hover:bg-gray-50"
                >
                  {/* Student name + email */}
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">{student.name}</p>
                    <p className="text-sm text-gray-400">{student.email}</p>
                  </td>

                  {/* Course */}
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {student.course}
                  </td>

                  {/* Enrolled date */}
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {student.enrolledDate}
                  </td>

                  {/* Fee status badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`${feeStyles[student.feeStatus].bg} ${
                        feeStyles[student.feeStatus].text
                      } text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {feeStyles[student.feeStatus].label}
                    </span>
                  </td>

                  {/* Attendance with color */}
                  <td className="px-6 py-4">
                    <span
                      className={`text-sm font-medium ${
                        student.attendance >= 90
                          ? 'text-green-600'
                          : student.attendance >= 75
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {student.attendance}%
                    </span>
                  </td>

                  {/* Status badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`${statusStyles[student.status].bg} ${
                        statusStyles[student.status].text
                      } text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {statusStyles[student.status].label}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button className="text-blue-600 text-sm font-medium hover:underline">
                        View
                      </button>
                      <button className="text-gray-400 text-sm font-medium hover:underline">
                        Edit
                      </button>
                    </div>
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
                  <p className="font-medium">No students found</p>
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

export default Students
