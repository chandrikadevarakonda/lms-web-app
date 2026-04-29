import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className = "bg-white shadow-md px-6 py-4">
          <div className = "max-w-7x1 mx-auto flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="text-2x1 font-bold text-blue-600">
                EduNest
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
                <Link to="/courses" className="text-gray-600 hover:text-blue-600 font-medium">
                    Courses
                </Link>
                <Link to="/faculty" className="text-gray-600 hover:text-blue-600 font-medium">
                    Faculty
                </Link>
                <Link to="/trial-classes" className="text-gray-600 hover:text-blue-600 font-medium">
                    Trial Classes
                </Link>
                <Link to="/batches" className="text-gray-600 hover:text-blue-600 font-medium">
                    Batch Schedule
                </Link>
                <Link to="/enroll" className="bg-blue-600 text-white px-4 py-2 rounded-1g font-medium hover:bg-blue-700">
                    Enroll Now
                </Link>
    
            </div>
          </div>

        </nav>
    )
}

export default Navbar