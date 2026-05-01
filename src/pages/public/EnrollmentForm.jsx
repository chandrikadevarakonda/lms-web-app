import { Link } from 'react-router-dom';
import { useState } from 'react';

const EnrollmentForm = () => {
  
    //one object storing all form field values
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: ""
    })

    //Tracks if form was submitted successfully
    const [submitted, setSubmitted] =useState(false)

    //Stores error messages for validation
    const [errors, setErrors] = useState({})

    //One function handles all input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,                      //keep all existing values
            [e.target.name]: e.target.value   //update only the changed field
        })
    }

    //Validate form before submitting
    const validate = () => {
        const newErrors ={}

        if (!formData.name.trim()){
            newErrors.name ="Full name is required"
        }
        if (!formData.email.trim()) {
            newErrors.email ="Please enter a valid email"
        }
        if (!formData.phone.trim()){
            newErrors.phone= "Phone number is required"
        }
        if (!formData.course) {
            newErrors.course= "Please select a course"
        }

        return newErrors
    }

    //Runs when Submit button is clicked
    const handleSubmit = () => {
        //Run validation first
        const newErrors =validate()

        //if there are any errors-show them, stop here
        if(Object.keys(newErrors).length >0){
            setErrors(newErrors)
            return
        }

        //No errors-Form is valid
        console.log("Form submitted:", formData)
        setSubmitted(true)
    }

    //if form was submitted-show success message instead of form
    if (submitted) {
        return(
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-md p-12 max-w-md text-center">
                    <div className="text-6xl mb-6">🎉</div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Enquiry Submitted!
                    </h2>
                    <p className="text-gray-500 mb-2">
                        Thank you <span className="font-semibold text-blue-600">{formData.name}</span>
                    </p>
                    <p className="text-gray-500">
                        We have received your enquiry for {" "}
                        <span className="font-semibold text-blue-600">{formData.course}</span>
                    </p>
                </div>
            </div>
        )
    }
    
    //Main Form-Shows when submitted = false

    return (

        <div>

            {/*Banner*/}
            <section className="bg-blue-600 text-white py-10">
                <div className="max-w-7xl text-center mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-4">
                      Enroll Now
                    </h1>
                    <p className="text-xl text-blue-100 font-normal mb-4">
                       Fill in the details to get enrolled!
                    </p>
                </div>

            </section>

            {/*Form Section*/}
            <section className="bg-gray-50 py-16">
                <div className="max-w-2xl mx-auto px-6">
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">
                            Enrollment Enquiry Form
                        </h2>

                        {/* Full Name*/}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                            /> 
                            {/* Show error if exists*/}
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>
 
                        {/* Email */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input 
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email address"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                              />
                              {errors.email && (
                                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                              )}
                        </div>

                        {/* Phone */ }
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ouline-none focus:border-blue-500"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-smmt-1">{errors.phone}</p>
                            )}  
                        </div>

                        {/* Course Dropdown */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">
                                Course Interest <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="course"
                              value={formData.course}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none foucs:border-blue-500"
                            >
                                <option value="">Select a Course</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Data Analytics">Data Analytics</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="SDET">SDET</option>
                                <option value="AI Engineer">AI Engineer</option>
                                <option value="Salesforce">Salesforce</option>
                            </select>
                            {errors.course && (
                                <p className="text-red-500 text-sm mt-1">{errors.course}</p>
                            )}  
                        </div>

                        {/* Message */ }
                        <div className="mb-8">
                            <label className="block text-gray-700 font-medium mb-2">
                                Message <span className="text-gray-400 text-sm font-normal">(Optional)</span>
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={4}
                              placeholder="Any specific questions or requirements?"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
                              />
                        </div>

                        { /* Submit Button */}
                        <button
                           onClick={handleSubmit}
                           className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                        >
                            Submit Enquiry
                        </button>
                              
                        
                        
                    </div>
                </div>
            </section>

        </div>

    )
}

export default EnrollmentForm;