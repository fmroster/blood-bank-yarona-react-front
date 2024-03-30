export const donationsTable = ()=>{
    //code that goes here gets from the API

    return(
        <div class>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">
                            Donations
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Donation ID
                        </th>
                        <th>
                            Donation date
                        </th>
                        {user.role == 0 ? <th>Donor Name</th> : null} {/* Conditionally render donor name header */}
                    </tr>
                </thead>
                <tbody>
                    {donationData.map(donations=>(
                        <tr key={donations.id}>
                            <td>
                                {donations.id}
                            </td>
                            <td>
                                {donations.date}
                            </td>
                            {user.role == 0 ? <td>{donations.user_id}</td> : null}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export const appointmentsTable = () => {
    // Code to fetch appointment data from the API

    return (
        <div class>
            <table>
                <thead>
                    <tr>
                        <th colSpan="4">
                            Appointments
                        </th> 
                    </tr>
                    <tr>
                        <th>
                            Appointment ID
                        </th>
                        <th>
                            Appointment Date
                        </th>
                        <th>
                            Location
                        </th>
                        
                        <th>
                            Desired Appointment Date
                        </th> 
                    </tr>
                </thead>
                <tbody>
                    {appointmentData.map(appointment => (
                        <tr key={appointment.id}>
                            <td>
                                {appointment.id}
                            </td>
                            <td>
                                {appointment.date}
                            </td>
                            <td>
                                {appointment.location}
                            </td>
                            <td>
                                {appointment.desiredDate}
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export const requestsTable = () =>{

    //Api code here
    return (
        <div>
            <thead>
                <tr>
                    <th
                    colSpan="3">
                        Requests 
                        
                    </th>
                </tr>
                <tr>
                    <th>
                        Request ID
                    </th>
                    <th>
                        Blood Type
                    </th>
                    Location
                    <th>
                    </th>

                </tr>

            </thead>
            <tbody>
                {requestData.map(request => (
                    <tr key={request.id}>
                        <td>
                            {request.id}
                        </td>
                        <td>
                            {request.bloodtype}
                        </td>
                        <td>
                            {request.location} 
                        </td>


                    </tr>
                ))}
            </tbody>
        </div>
    )
}