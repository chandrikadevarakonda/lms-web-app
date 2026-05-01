import { Link } from 'react-router-dom';

const trialclasses = [
    { 
        id: 1,
        course: "Web Developement",
        instructor: "Shyam",
        date: "May 10, 2025",
        time: "10:00 AM - 11:00 AM",
        seats: "5 Seats Left",
        badgeBg: "bg-red-100",  
        badgeText:"text-red-600"

    },
    { 
        id: 2,
        course: "AI Engineer",
        instructor: "Ajay",
        date: "May 5, 2025",
        time: "10:00 AM - 11:00 AM",
        seats: "2 Seats Left",
        badgeBg: "bg-green-100",  
        badgeText:"text-green-600"

    },
    { 
        id: 3,
        course: "Data Analyst",
        instructor: "Mahadev",
        date: "May 6, 2025",
        time: "10:00 AM - 11:00 AM",
        seats: "3 Seats Left",
        badgeBg: "bg-blue-100",  
        badgeText:"text-blue-600"

    },
    { 
        id: 4,
        course: "Salesforce",
        instructor: "Abhi",
        date: "May 7, 2025",
        time: "10:00 AM - 11:00 AM",
        seats: "12 Seats Left",
        badgeBg: "bg-yellow-100",  
        badgeText:"text-yellow-600"

    },
    { 
        id: 5,
        course: "UI/UX Design",
        instructor: "Saahithi",
        date: "May 8, 2025",
        time: "10:00 AM - 11:00 AM",
        seats: "5 Seats Left",
        badgeBg: "bg-teal-100",  
        badgeText:"text-teal-600"

    },
    { 
        id: 6,
        course: "Testing",
        instructor: "Anusha",
        date: "May 9, 2025",
        time: "10:00 AM - 11:00 AM",
        seats: "10 Seats Left",
        badgeBg: "bg-orange-100",  
        badgeText:"text-orange-600"

    }
] 

const TrialClasses = () => {
    return (
      <div>

        {/*Banner*/}
        <section className="bg-blue-600 text-white py-10">
            <div className="max-w-5xl text-center mx-auto px-6 py-6">
                <h1 className="text-4xl font-bold mb-6">
                    Free Trail Classes
                </h1>
                <p className="text-xl max-w-2xl mx-auto text-blue-100 font-medium mb-4">
                    Try our trial classes before u enroll
                </p>
            </div>
        </section>

        {/*Info Box*/}
        <div className="bg-blue-50 mx-auto text-center border border-blue-400 my-8 px-6 py-6 rounded-xl max-w-2xl shadow-lg">
            <h3 className="text-blue-500 text-xl font-normal mx-auto px-6 py-6">
               Attend a free trial class before you enroll.
               No payment required. Limited seats available.
            </h3>
        </div>

        {/*Trial Classes Grid*/}
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-3 gap-10">
                    {trialclasses.map(trialclass => (
                        <div
                        key={trialclass.id}
                        className="bg-white rounded-xl text-center hover:shadow-lg shadow-md transition-shadow px-6 py-3"
                        >
                        <div className={`${trialclass.badgeBg} ${trialclass.badgeText} rounded-full text-2xl font-medium px-3 py-1 inline-block mb-4`}>
                            {trialclass.course}    
                        </div>
                        <p className="text-md font-normal mb-2">
                           📅  {trialclass.date}
                        </p>
                        <p className="text-md font-normal mb-2">
                           🕐  {trialclass.time}
                        </p>
                        <p className="text-md font-normal mb-2">
                           👨‍💻  {trialclass.instructor}
                        </p>
                        <p className="text-md font-normal mb-4">
                           🪑  {trialclass.seats}
                        </p>
                        <Link to="/enroll" className="block w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
                            Enroll Now 
                        </Link>
                        </div>
                  ))}
                        
                </div>
             </div>
        </section>

      </div>
    )
}

export default TrialClasses;
