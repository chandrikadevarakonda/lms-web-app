import { useState, useMemo } from 'react'

const mockEnquiries = [
  {
    id: 1,
    name: 'Rahul Sharma',
    email: 'rahul@gmail.com',
    phone: '9876543210',
    course: 'Web Development',
    message: 'I want to know about the batch timings',
    submittedDate: 'May 1, 2026',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Priya Patel',
    email: 'priya@gmail.com',
    phone: '9876543211',
    course: 'AI Engineer',
    message: 'Is there any EMI option available?',
    submittedDate: 'Apr 30, 2026',
    status: 'contacted',
  },
  {
    id: 3,
    name: 'Ankit Verma',
    email: 'ankit@gmail.com',
    phone: '9876543212',
    course: 'Salesforce',
    message: 'Looking for weekend batches',
    submittedDate: 'Apr 29, 2026',
    status: 'enrolled',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    email: 'sneha@gmail.com',
    phone: '9876543213',
    course: 'SDET',
    message: 'What is the course fee?',
    submittedDate: 'Apr 28, 2026',
    status: 'pending',
  },
  {
    id: 5,
    name: 'Kiran Kumar',
    email: 'kiran@gmail.com',
    phone: '9876543214',
    course: 'Data Analytics',
    message: 'Do you provide placement assistance?',
    submittedDate: 'Apr 27, 2026',
    status: 'pending',
  },
  {
    id: 6,
    name: 'Divya Singh',
    email: 'divya@gmail.com',
    phone: '9876543215',
    course: 'UI/UX Design',
    message: 'I am a beginner, is this course suitable?',
    submittedDate: 'Apr 26, 2026',
    status: 'contacted',
  },
]

const statusStyles = {
  pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Pending' },
  contacted: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Contacted' },
  enrolled: { bg: 'bg-green-100', text: 'text-green-700', label: 'Enrolled' },
}

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState(mockEnquiries)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedEnquiry, setSelectedEnquiry] = useState(null)

  // Filter enquiries
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((enquiry) => {
      const matchesSearch =
        enquiry.name.toLowerCase().includes(search.toLowerCase()) ||
        enquiry.course.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        filterStatus === 'all' || enquiry.status === filterStatus

      return matchesSearch && matchesStatus
    })
  }, [enquiries, search, filterStatus])

  // Update enquiry status
  const updateStatus = (id, newStatus) => {
    setEnquiries((prev) =>
      prev.map((enquiry) =>
        enquiry.id === id ? { ...enquiry, status: newStatus } : enquiry
      )
    )
    if (selectedEnquiry?.id === id) {
      setSelectedEnquiry((prev) => ({ ...prev, status: newStatus }))
    }
  }

  // Stats
  const totalEnquiries = enquiries.length
  const pendingCount = enquiries.filter((e) => e.status === 'pending').length
  const contactedCount = enquiries.filter(
    (e) => e.status === 'contacted'
  ).length
  const enrolledCount = enquiries.filter((e) => e.status === 'enrolled').length

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Enquiries</h1>
        <p className="text-gray-500 mt-1">
          Manage all enrollment enquiries from prospective students
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
          <p className="text-3xl font-bold text-gray-800">{totalEnquiries}</p>
          <p className="text-gray-500 text-sm mt-1">Total Enquiries</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
          <p className="text-3xl font-bold text-yellow-600">{pendingCount}</p>
          <p className="text-gray-500 text-sm mt-1">Pending</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
          <p className="text-3xl font-bold text-blue-600">{contactedCount}</p>
          <p className="text-gray-500 text-sm mt-1">Contacted</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
          <p className="text-3xl font-bold text-green-600">{enrolledCount}</p>
          <p className="text-gray-500 text-sm mt-1">Enrolled</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search by name or course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 bg-white"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="contacted">Contacted</option>
          <option value="enrolled">Enrolled</option>
        </select>
      </div>

      {/* Main content — table + detail panel */}
      <div className="flex gap-6">
        {/* Enquiries Table */}
        <div
          className={`bg-white rounded-xl shadow-sm overflow-hidden ${
            selectedEnquiry ? 'flex-1' : 'w-full'
          }`}
        >
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              All Enquiries
            </h2>
            <span className="text-sm text-gray-500">
              {filteredEnquiries.length} of {totalEnquiries}
            </span>
          </div>

          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Course
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Date
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
              {filteredEnquiries.length > 0 ? (
                filteredEnquiries.map((enquiry) => (
                  <tr
                    key={enquiry.id}
                    className={`border-b border-gray-50 hover:bg-gray-50 cursor-pointer
                      ${
                        selectedEnquiry?.id === enquiry.id ? 'bg-blue-50' : ''
                      }`}
                    onClick={() => setSelectedEnquiry(enquiry)}
                  >
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-800">
                        {enquiry.name}
                      </p>
                      <p className="text-sm text-gray-400">{enquiry.email}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {enquiry.course}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {enquiry.submittedDate}
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
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedEnquiry(enquiry)
                        }}
                        className="text-blue-600 text-sm font-medium hover:underline"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-16 text-center text-gray-400"
                  >
                    <p className="text-4xl mb-3">🔍</p>
                    <p className="font-medium">No enquiries found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Detail Panel — shows when enquiry is selected */}
        {selectedEnquiry && (
          <div className="w-80 bg-white rounded-xl shadow-sm p-6 h-fit">
            {/* Panel Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-800">Enquiry Details</h3>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Student Info */}
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mb-3">
                {selectedEnquiry.name.charAt(0)}
              </div>
              <p className="font-semibold text-gray-800">
                {selectedEnquiry.name}
              </p>
              <p className="text-sm text-gray-500">{selectedEnquiry.email}</p>
              <p className="text-sm text-gray-500">{selectedEnquiry.phone}</p>
            </div>

            {/* Enquiry Info */}
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Course Interest
                </p>
                <p className="text-sm font-medium text-gray-800 mt-1">
                  {selectedEnquiry.course}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Submitted
                </p>
                <p className="text-sm font-medium text-gray-800 mt-1">
                  {selectedEnquiry.submittedDate}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Message
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedEnquiry.message}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Current Status
                </p>
                <span
                  className={`${statusStyles[selectedEnquiry.status].bg} ${
                    statusStyles[selectedEnquiry.status].text
                  } text-xs font-medium px-3 py-1 rounded-full mt-1 inline-block`}
                >
                  {statusStyles[selectedEnquiry.status].label}
                </span>
              </div>
            </div>

            {/* Status Update Buttons */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
                Update Status
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => updateStatus(selectedEnquiry.id, 'contacted')}
                  disabled={selectedEnquiry.status === 'contacted'}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Mark as Contacted
                </button>
                <button
                  onClick={() => updateStatus(selectedEnquiry.id, 'enrolled')}
                  disabled={selectedEnquiry.status === 'enrolled'}
                  className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Mark as Enrolled
                </button>
                <button
                  onClick={() => updateStatus(selectedEnquiry.id, 'pending')}
                  disabled={selectedEnquiry.status === 'pending'}
                  className="w-full border border-yellow-400 text-yellow-600 py-2 rounded-lg text-sm font-medium hover:bg-yellow-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Reset to Pending
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Enquiries
