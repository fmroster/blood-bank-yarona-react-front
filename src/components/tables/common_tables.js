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