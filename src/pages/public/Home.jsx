import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Learn, Grow and Succeed with EduNest
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Discover our expertly crafted courses taught by industry 
            professionals. Start your learning journey today.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50"
            >
              Browse Courses
            </Link>
            <Link
              to="/enroll"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600">500+</p>
              <p className="text-gray-500 mt-1">Students Enrolled</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">20+</p>
              <p className="text-gray-500 mt-1">Courses Available</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">15+</p>
              <p className="text-gray-500 mt-1">Expert Faculty</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">95%</p>
              <p className="text-gray-500 mt-1">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Our Popular Courses
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Choose from our wide range of expertly designed courses
          </p>
          <div className="grid grid-cols-3 gap-8">

            {/* Course Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Programming
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Web Development
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Learn HTML, CSS, JavaScript and React from scratch. 
                Build real world projects.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">⏱ 6 Months</span>
                <Link
                  to="/courses"
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Data Science
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Data Analytics
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Master data analysis, visualization and machine learning 
                with Python and SQL.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">⏱ 4 Months</span>
                <Link
                  to="/courses"
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Design
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                UI/UX Design
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Learn user interface design, prototyping and design 
                thinking with Figma.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">⏱ 3 Months</span>
                <Link
                  to="/courses"
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Why Choose EduNest?
          </h2>
          <p className="text-center text-gray-500 mb-12">
            We are committed to delivering quality education
          </p>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-bold text-gray-800 mb-2">Expert Faculty</h3>
              <p className="text-gray-500 text-sm">
                Learn from industry professionals with years of experience
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-gray-800 mb-2">Live Classes</h3>
              <p className="text-gray-500 text-sm">
                Interactive live sessions with real time doubt clearing
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-gray-800 mb-2">Study Materials</h3>
              <p className="text-gray-500 text-sm">
                Access comprehensive study materials and recorded sessions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
              <p className="text-gray-500 text-sm">
                Receive industry recognised certificates on completion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join hundreds of students already learning with EduNest
          </p>
          <Link
            to="/enroll"
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50"
          >
            Enroll Today
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home