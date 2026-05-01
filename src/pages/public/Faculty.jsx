import { Link } from 'react-router-dom'

const faculties = [
    {
        id: 1,
        name: "Shyam",
        specialization: "Programming",
        experience: "22 years",
        description: "Passioante about teaching",
        photo:"👨‍💻",
        badgeBg: "bg-red-100",
        badgeText: "text-red-600"
    },
    {
        id: 2,
        name: "Ajay",
        specialization: "AI",
        experience: "10 years",
        description: "Tech Savy",
        photo:"👩‍🏫",
        badgeBg: "bg-orange-100",
        badgeText: "text-orange-600"
    },
    {
        id: 3,
        name: "Mahadev",
        specialization: "Data Science",
        experience: "30 years",
        description: "Very good in Analyzing the data",
        photo:"👨",
        badgeBg: "bg-green-100",
        badgeText: "text-green-600"
    },
    {
        id: 4,
        name: "Abhi",
        specialization: "Salesforce",
        experience: "13 years",
        description: "Likes to share Knowledge",
        photo:"👨‍💻",
        badgeBg: "bg-blue-100",
        badgeText: "text-blue-600"
    },
    {
        id: 5,
        name: "Saahithi",
        specialization: "Design",
        experience: "12 years",
        description: "Very creative",
        photo:"👨‍💻",
        badgeBg: "bg-pink-100",
        badgeText: "text-pink-600"
    },
    {
        id: 6,
        name: "Anusha",
        specialization: "SDET",
        experience: "2 years",
        description: "Happy teaching",
        photo:"👨‍💻",
        badgeBg: "bg-purple-100",
        badgeText: "text-purple-600"
    }
]

const Faculty = () => {
    return (
        <div>

            {/*Banner*/}
            <section className="bg-blue-600 text-white py-10">
                <div className="max-w-5xl text-center px-6 py-6 mx-auto">
                    <h1 className="font-bold text-4xl mb-6">
                      Meet Our Faculty
                    </h1>
                    <p className="text-blue-100 text-xl max-w-2xl mx-auto">
                        The best faculty ever!
                    </p>
                </div>
            </section>

            {/*Courses Grid*/}
            <section className="bg-gray-50 py-16">
                <div className="max-w-5xl px-6 mx-auto">
                    <div className="grid grid-cols-3 gap-6">
                      
                     {faculties.map(faculty => (
                        <div 
                          key={faculty.id}
                          className="bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow p-6"
                          >
                            {/*Faculty Name*/}
                            <h1 className="text-6xl mb-4">
                                {faculty.photo}
                            </h1>
                            <h2 className="text-xl font-bold mb-4">
                                {faculty.name}
                            </h2>
                            <div className={`${faculty.badgeBg} ${faculty.badgeText} rounded-full text-sm font-medium px-3 py-1 mb-4 inline-block`}>
                                {faculty.specialization}
                            </div>
                            <h3 className="text-xl font-bold mb-4">
                                {faculty.experience}
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">
                                {faculty.description}
                            </p>    
                        </div>
                     )
                        
                        )}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faculty