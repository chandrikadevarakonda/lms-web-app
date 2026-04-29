import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top section */}
        <div className="grid grid-cols-3 gap-8">
          
          {/* Brand column */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-3">
              EduNest
            </h2>
            <p className="text-gray-400 text-sm">
              Quality education for everyone. 
              Browse our courses and start your 
              learning journey today.
            </p>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/courses" className="text-gray-400 hover:text-white text-sm">
                Courses
              </Link>
              <Link to="/faculty" className="text-gray-400 hover:text-white text-sm">
                Faculty
              </Link>
              <Link to="/trial-classes" className="text-gray-400 hover:text-white text-sm">
                Trial Classes
              </Link>
              <Link to="/batches" className="text-gray-400 hover:text-white text-sm">
                Batch Schedule
              </Link>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <p>📧 info@edunest.com</p>
              <p>📞 +1 234 567 890</p>
              <p>📍 123 Learning Street</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© 2025 EduNest. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer