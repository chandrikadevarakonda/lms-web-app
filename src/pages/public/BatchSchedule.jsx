import { Link } from 'react-router-dom';

const batchschedules =[
    {
        id: 1,
        course: "Data Analyst",
        startdate: "May 3, 2026",
        timing: "7:00 PM -9:00 PM CST",
        duration: "5 Months",
        seats: 25,
        status: "Open",
        badgeBg: "bg-green-600",
        badgeText: "text-green-100"
    },
    {
        id: 2,
        course: "Web Development",
        startdate: "May 5, 2026",
        timing: "6:00 PM -8:00 PM CST",
        duration: "6 Months",
        seats: 20,
        status: "Filling Fast",
        badgeBg: "bg-yellow-600",
        badgeText: "text-yellow-100"
    },
    {
        id: 3,
        course: "SDET",
        startdate: "May 6, 2026",
        timing: "7:00 PM -9:00 PM CST",
        duration: "4 Months",
        seats: 30,
        status: "Open",
        badgeBg: "bg-green-600",
        badgeText: "text-green-100"
    },
    {
        id: 4,
        course: "UI/UX Design",
        startdate: "May 9, 2026",
        timing: "5:00 PM -7:00 PM CST",
        duration: "4 Months",
        seats: 25,
        status: "Full",
        badgeBg: "bg-red-600",
        badgeText: "text-red-100"
    },
    {
        id: 5,
        course: "Salesforce",
        startdate: "May 12, 2026",
        timing: "7:00 PM -9:00 PM CST",
        duration: "6 Months",
        seats: 25,
        status: "Filling Fast",
        badgeBg: "bg-yellow-600",
        badgeText: "text-yellow-100"
    },
    {
        id: 6,
        course: "AI Engineer",
        startdate: "May 15, 2026",
        timing: "6:00 PM -8:00 PM CST",
        duration: "6 Months",
        seats: 25,
        status: "Open",
        badgeBg: "bg-green-600",
        badgeText: "text-green-100"
    }    
];

const BatchSchedule = () => {
    return (
     <div>
        <section className="bg-blue-600 text-white py-10">
            <div className="max-w-5xl text-center mx-auto px-6 py-6">
                <h1 className="text-4xl font-bold mb-6">
                    Upcoming Batch Schedule
                </h1>
                <p className="text-blue-100 text-xl mx-auto font-medium mb-6">
                    Here is the schedule for the month of May!
                </p>
            </div>
        </section>

        {/*Schedule Table*/}
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left px-6 py-3">Course</th>
                            <th className="text-left px-6 py-3">Start Date</th>
                            <th className="text-left px-6 py-3">Timing</th>
                            <th className="text-left px-6 py-3">Seats</th>
                            <th className="text-left px-6 py-3">Status</th>
                            <th className="text-left px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {batchschedules.map(batch => (
                            <tr key={batch.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{batch.course}</td>
                                <td className="px-6 py-4">{batch.startdate}</td>
                                <td className="px-6 py-4">{batch.timing}</td>
                                <td className="px-6 py-4">{batch.seats}</td>
                                <td className="px-6 py-4">
                                  <span className={`${batch.badgeBg} ${batch.badgeText} rounded-full inline-block text-xl px-3 py-1 font-medium `}>
                                    {batch.status}
                                  </span>  
                                </td>
                                <td className="px-6 py-4">
                                  <Link to="/enroll" className="bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 px-6 py-4">
                                    Enroll Now
                                  </Link>
                                </td>  
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div> 
        </section>
     </div>
    )
}

export default BatchSchedule;
