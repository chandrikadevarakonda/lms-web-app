import { useState, useMemo } from 'react'

const mockCourses = [
  {
    id: 1,
    name: 'Web Development',
    category: 'Programming',
    instructor: 'Shyam',
    duration: '6 Months',
    studentsEnrolled: 45,
    status: 'active',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-600',
  },
  {
    id: 2,
    name: 'AI Engineer',
    category: 'AI',
    instructor: 'Ajay',
    duration: '6 Months',
    studentsEnrolled: 32,
    status: 'active',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-600',
  },
  {
    id: 3,
    name: 'Data Analytics',
    category: 'Data Science',
    instructor: 'Mahadev',
    duration: '4 Months',
    studentsEnrolled: 28,
    status: 'active',
    badgeBg: 'bg-green-100',
    badgeText: 'text-green-600',
  },
  {
    id: 4,
    name: 'UI/UX Design',
    category: 'Design',
    instructor: 'Saahithi',
    duration: '3 Months',
    studentsEnrolled: 20,
    status: 'active',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-600',
  },
  {
    id: 5,
    name: 'SDET',
    category: 'Testing',
    instructor: 'Anusha',
    duration: '5 Months',
    studentsEnrolled: 18,
    status: 'inactive',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-600',
  },
  {
    id: 6,
    name: 'Salesforce',
    category: 'Salesforce',
    instructor: 'Abhi',
    duration: '6 Months',
    studentsEnrolled: 13,
    status: 'active',
    badgeBg: 'bg-pink-100',
    badgeText: 'text-pink-600',
  },
]

const statusStyles = {
  active: { bg: 'bg-green-100', text: 'text-green-700', label: 'Active' },
  inactive: { bg: 'bg-gray-100', text: 'text-gray-600', label: 'Inactive' },
}

const CoursesLayout = () => {
  const [search, setSearch] = useState('')
  const [filterInstructor, setFilterInstructor] = useState('all')

  // Filter courses based on search and instructor filter
  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      const matchesSearch = course.name
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesInstructor =
        filterInstructor === 'all' || course.instructor === filterInstructor

      return matchesSearch && matchesInstructor
    })
  }, [search, filterInstructor])

  // Get unique instructors for filter dropdown
  const instructors = ['all', ...new Set(mockCourses.map((s) => s.instructor))]

  // Stats
  const totalCourses = mockCourses.length
  const activeCourses = mockCourses.filter((s) => s.status === 'active').length
  const totalEnrolled = mockCourses.reduce(
    (sum, course) => sum + course.studentsEnrolled,
    0
  )

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Courses</h1>
          <p className="text-gray-500 mt-1">Manage all courses</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700">
          + Add Course
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="bg-blue-50 text-blue-600 text-2xl p-3 rounded-lg">
            📚
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Courses</p>
            <p className="text-2xl font-bold text-gray-800">{totalCourses}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="bg-green-50 text-green-600 text-2xl p-3 rounded-lg">
            ✅
          </div>
          <div>
            <p className="text-gray-500 text-sm">Active Courses</p>
            <p className="text-2xl font-bold text-gray-800">{activeCourses}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="bg-red-50 text-red-600 text-2xl p-3 rounded-lg">
            👨‍🎓
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Enrolled</p>
            <p className="text-2xl font-bold text-gray-800">{totalEnrolled}</p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search by course name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
        />
        <select
          value={filterInstructor}
          onChange={(e) => setFilterInstructor(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 bg-white"
        >
          {instructors.map((instructor) => (
            <option key={instructor} value={instructor}>
              {instructor === 'all' ? 'All instructors' : instructor}
            </option>
          ))}
        </select>
      </div>

      {/* Courses Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">All Courses</h2>
          <span className="text-sm text-gray-500">
            Showing {filteredCourses.length} of {totalCourses} courses
          </span>
        </div>

        {/* Table */}
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Course Name
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Instructor
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Duration
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                Total students enrolled
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
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <tr
                  key={course.id}
                  className="border-b border-gray-50 hover:bg-gray-50"
                >
                  {/* Course name + Category */}
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">{course.name}</p>
                    <span
                      className={`inline-block mt-1 ${course.badgeBg} ${course.badgeText} text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {course.category}
                    </span>
                  </td>

                  {/* Instructor */}
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {course.instructor}
                  </td>

                  {/* Duration */}
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {course.duration}
                  </td>

                  {/* Students Enrolled */}
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {course.studentsEnrolled}
                  </td>

                  {/* Status badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`${statusStyles[course.status].bg} ${
                        statusStyles[course.status].text
                      } text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {statusStyles[course.status].label}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <button className="text-gray-400 text-sm font-medium hover:underline">
                      Edit
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
                  <p className="font-medium">No courses found</p>
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

export default CoursesLayout
