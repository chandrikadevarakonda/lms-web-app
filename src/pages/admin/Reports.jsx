import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// Student growth data
const studentGrowthData = [
  { month: 'Jan', students: 20 },
  { month: 'Feb', students: 35 },
  { month: 'Mar', students: 48 },
  { month: 'Apr', students: 62 },
  { month: 'May', students: 89 },
  { month: 'Jun', students: 110 },
  { month: 'Jul', students: 125 },
  { month: 'Aug', students: 142 },
  { month: 'Sep', students: 156 },
]

// Revenue data
const revenueData = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 6800 },
  { month: 'Mar', revenue: 5900 },
  { month: 'Apr', revenue: 8200 },
  { month: 'May', revenue: 9100 },
  { month: 'Jun', revenue: 11500 },
  { month: 'Jul', revenue: 10200 },
  { month: 'Aug', revenue: 13400 },
  { month: 'Sep', revenue: 15600 },
]

// Course enrollment data
const courseEnrollmentData = [
  { name: 'Web Dev', value: 45, color: '#2563eb' },
  { name: 'AI Engineer', value: 32, color: '#f59e0b' },
  { name: 'Data Analytics', value: 28, color: '#10b981' },
  { name: 'UI/UX Design', value: 20, color: '#8b5cf6' },
  { name: 'SDET', value: 18, color: '#f97316' },
  { name: 'Salesforce', value: 13, color: '#ec4899' },
]

// Batch wise data
const batchData = [
  { batch: 'Jan Batch', enrolled: 35, completed: 28 },
  { batch: 'Mar Batch', enrolled: 42, completed: 35 },
  { batch: 'May Batch', enrolled: 38, completed: 20 },
  { batch: 'Jul Batch', enrolled: 45, completed: 10 },
  { batch: 'Sep Batch', enrolled: 30, completed: 0 },
]

const Reports = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Reports & Analytics
        </h1>
        <p className="text-gray-500 mt-1">
          Overview of student growth, revenue and course performance
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
          <p className="text-3xl font-bold text-blue-600">156</p>
          <p className="text-gray-500 text-sm mt-1">Total Students</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
          <p className="text-3xl font-bold text-green-600">$24,500</p>
          <p className="text-gray-500 text-sm mt-1">Total Revenue</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
          <p className="text-3xl font-bold text-purple-600">6</p>
          <p className="text-gray-500 text-sm mt-1">Active Courses</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
          <p className="text-3xl font-bold text-orange-600">92%</p>
          <p className="text-gray-500 text-sm mt-1">Avg Attendance</p>
        </div>
      </div>

      {/* Row 1 — Line Chart + Pie Chart */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Student Growth Line Chart */}
        <div className="col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Student Growth
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={studentGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#6b7280' }} />
              <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
              <Tooltip
                contentStyle={{
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                }}
              />
              <Line
                type="monotone"
                dataKey="students"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ fill: '#2563eb', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Course Enrollment Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Enrollment by Course
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={courseEnrollmentData}
                cx="50%"
                cy="45%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
              >
                {courseEnrollmentData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Custom Legend */}
          <div className="mt-2 space-y-1">
            {courseEnrollmentData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-medium text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — Revenue Bar Chart + Batch Chart */}
      <div className="grid grid-cols-2 gap-6">
        {/* Revenue Bar Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Monthly Revenue
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#6b7280' }} />
              <YAxis
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                contentStyle={{
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                }}
              />
              <Bar dataKey="revenue" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Batch Performance Bar Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Batch Performance
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={batchData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="batch" tick={{ fontSize: 11, fill: '#6b7280' }} />
              <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
              <Tooltip
                contentStyle={{
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                }}
              />
              <Legend />
              <Bar
                dataKey="enrolled"
                name="Enrolled"
                fill="#2563eb"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="completed"
                name="Completed"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Reports
