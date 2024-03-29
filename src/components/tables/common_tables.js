const donationsTable = ()=>{
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

const appointmentsTable = () => {
    // Code to fetch appointment data from the API

    return (
        <div class>
            <table>
                <thead>
                    <tr>
                        <th colSpan="5">
                            Appointments</th> {/* colspan="5" to span five columns */}
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
                            Hospital
                            </th>
                        <th>
                            Desired Appointment Date
                            </th> {/* New column for desired appointment date */}
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
                                {appointment.hospital}
                                </td>
                            <td>
                                {appointment.desiredDate}
                                </td> {/* Render desired appointment date */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


const requestsTable = () =>{

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
                            {request.location} {/* Should we show the nearest blood bank or hospital which has available bags?   */}
                        </td>


                    </tr>
                ))}
            </tbody>
        </div>
    )
}