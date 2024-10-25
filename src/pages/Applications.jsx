import { useState, useEffect } from "react";

import PageContent from "../components/PageContent";

const Applications = () => {
    const [applications, setApplications] = useState([])
    
    useEffect( () => {
        const fetchApplications = async () => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/application/')
                const data = await res.json()
                setApplications(data)
            }
            catch (error) {
                console.log('Error fetching data', error)
            }
        }
            
        fetchApplications()
    }, [])

    console.log(applications)
    return (
        <PageContent>
             <div>
                {applications.map( (application) => (
                    <div>
                        <p> Имя: {application.name}</p>
                        <p> Почта: {application.email}</p>
                        <p> Телефон: {application.phone}</p>
                        <br></br>
                    </div>
                ))}
            </div>
        </PageContent>
    )
}

export default Applications