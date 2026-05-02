import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ProtectedRoute from './components/common/ProtectedRoute'

import Home from './pages/public/Home'
import Courses from './pages/public/Courses'
import Faculty from './pages/public/Faculty'
import TrialClasses from './pages/public/TrialClasses'
import BatchSchedule from './pages/public/BatchSchedule'
import EnrollmentForm from './pages/public/EnrollmentForm'

import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import Unauthorized from './pages/admin/Unauthorized'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            {/* Public Routes */}

            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/trial-classes" element={<TrialClasses />} />
            <Route path="/batches" element={<BatchSchedule />} />
            <Route path="/enroll" element={<EnrollmentForm />} />

            {/* Auth Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Protected Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin', 'staff']}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
