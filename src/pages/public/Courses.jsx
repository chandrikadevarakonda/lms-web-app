import { Link } from 'react-router-dom'

const Courses = () => {
    return (
        <div>

            {/*Banner*/}
            <section className="bg-blue-600 text-white py-10">
                <div className="max-w-5xl px-6 mx-auto text-center py-6">
                    <h1 className="text-4xl font-bold mb-6">
                        Our Courses
                    </h1>
                    <p className="max-w-2xl text-xl text-blue-100 mx-auto">
                        Covers all the latest Technologies asked in companies!
                    </p>
                </div>
            </section>

            {/*Courses Grid*/}
            <section className="bg-gray-50 px-10">
                <div className="max-w-7xl px-6 mx-auto">
                    <div className="grid grid-cols-3 gap-12 py-12">

                        {/*Courses Card1 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                          <div className="bg-blue-100 text-blue-600 rounded-full text-sm font-medium px-3 py-1 mb-4 inline-block">
                            Programming
                          </div>
                          <h3 className="text-xl font-bold mb-4">Web Development</h3>
                          <p className="text-gray-500 text-sm mb-6">
                            Learn HTML, CSS, JavaScript and React from scratch.
                            Build real world projects.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">⏱ 6 Months</span>
                            <Link to="/enroll" className="text-blue-600 text-sm font-medium hover:underline">
                                Enroll Now
                            </Link>
                          </div>

                        </div>
                        {/*Courses Card2 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                          <div className="bg-green-100 text-green-600 rounded-full text-sm font-medium px-3 py-1 mb-4 inline-block">
                            Data Science
                          </div>
                          <h3 className="text-xl font-bold mb-4">Data Analytics</h3>
                          <p className="text-gray-500 text-sm mb-6">
                            Master data analysis, visualization and machine learning with Python and SQL.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">⏱ 4 Months</span>
                            <Link to="/enroll" className="text-blue-600 text-sm font-medium hover:underline">
                                Enroll Now
                            </Link>
                          </div>

                        </div>
                        {/*Courses Card3 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                          <div className="bg-purple-100 text-purple-600 rounded-full text-sm font-medium px-3 py-1 mb-4 inline-block">
                            Design
                          </div>
                          <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
                          <p className="text-gray-500 text-sm mb-6">
                             Learn user interface design, prototyping and design thinking with Figma.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">⏱ 3 Months</span>
                            <Link to="/enroll" className="text-blue-600 text-sm font-medium hover:underline">
                                Enroll Now
                            </Link>
                          </div>

                        </div>
                        {/*Courses Card4 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                          <div className="bg-orange-100 text-orange-600 rounded-full text-sm font-medium px-3 py-1 mb-4 inline-block">
                            Testing
                          </div>
                          <h3 className="text-xl font-bold mb-4">SDET</h3>
                          <p className="text-gray-500 text-sm mb-6">
                            Learn manual and Automation with PlayWright n Appium.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">⏱ 5 Months</span>
                            <Link to="/enroll" className="text-blue-600 text-sm font-medium hover:underline">
                                Enroll Now
                            </Link>
                          </div>

                        </div>
                        {/*Courses Card5 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                          <div className="bg-teal-50 text-teal-600 rounded-full text-sm font-medium px-3 py-1 mb-4 inline-block">
                            AI
                          </div>
                          <h3 className="text-xl font-bold mb-4">AI Engineer</h3>
                          <p className="text-gray-500 text-sm mb-6">
                            Learn to build AI agents n automations using N8N and Lang Chain n LAngraph.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">⏱ 6 Months</span>
                            <Link to="/enroll" className="text-blue-600 text-sm font-medium hover:underline">
                                Enroll Now
                            </Link>
                          </div>

                        </div>
                        {/*Courses Card6 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                          <div className="bg-pink-100 text-pink-600 rounded-full text-sm font-medium px-3 py-1 mb-4 inline-block">
                            Salesforce
                          </div>
                          <h3 className="text-xl font-bold mb-4">Development/Admin</h3>
                          <p className="text-gray-500 text-sm mb-6">
                            Learn Salesforce admin and Development using Apex, LWC and Flows.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">⏱ 6 Months</span>
                            <Link to="/enroll" className="text-blue-600 text-sm font-medium hover:underline">
                                Enroll Now
                            </Link>
                          </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Courses