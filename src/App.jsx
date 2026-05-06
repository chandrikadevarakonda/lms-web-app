import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AdminLayout from './components/layout/AdminLayout'
import ProtectedRoute from './components/common/ProtectedRoute'

import Home from './pages/public/Home'
import Courses from './pages/public/Courses'
import Faculty from './pages/public/Faculty'
import TrialClasses from './pages/public/TrialClasses'
import BatchSchedule from './pages/public/BatchSchedule'
import EnrollmentForm from './pages/public/EnrollmentForm'

import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import Students from './pages/admin/Students'
import CoursesLayout from './pages/admin/CoursesLayout'
import Enquiries from './pages/admin/Enquiries'
import Payments from './pages/admin/Payments'
import Unauthorized from './pages/admin/Unauthorized'
import Reports from './pages/admin/Reports'

//Wrapper for public pages
const PublicLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <PublicLayout>
              <Courses />
            </PublicLayout>
          }
        />
        <Route
          path="/faculty"
          element={
            <PublicLayout>
              <Faculty />
            </PublicLayout>
          }
        />
        <Route
          path="/trial-classes"
          element={
            <PublicLayout>
              <TrialClasses />
            </PublicLayout>
          }
        />
        <Route
          path="/batches"
          element={
            <PublicLayout>
              <BatchSchedule />
            </PublicLayout>
          }
        />
        <Route
          path="/enroll"
          element={
            <PublicLayout>
              <EnrollmentForm />
            </PublicLayout>
          }
        />

        {/* Auth Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin', 'staff']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* These render inside <Outlet /> in AdminLayout*/}

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="courses" element={<CoursesLayout />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="payments" element={<Payments />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
