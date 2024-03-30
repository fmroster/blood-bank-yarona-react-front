export const adminTable = () =>{
    
    return (
        <div class>
            <table>
                <thead>
                    <tr>
                        <th colspan="5">
                            Users

                        </th>
                    </tr>
                    <tr>
                        <th>
                            User ID
                        </th>
                        <th>
                            User Name
                        </th>
                        <th>
                            User Surname
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Location
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(users =>(
                        <tr key={users.id}>
                            <td>
                                {users.id}
                            </td>
                            <td>
                                {users.name}
                            </td>
                            <td>
                                {users.surname}
                            </td>
                            <td>
                                {users.email}
                            </td>
                            <td>
                                {users.location}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export const availableBlood = () => {
    
    return (
        <div class>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">
                            Available Blood
                        </th>
                    </tr>
                    <th>
                        Blood Group

                    </th>
                    <th>
                        Hospital
                    </th>
                    <th>
                        Pins available
                    </th>
                </thead>
                <tbody>
                    {availableBloodData.map(availableBlood =>(
                        <tr key= {availableBlood.bloodtype}>
                            <td>
                                {availableBlood.bloodtype}
                            </td>
                            <td>
                                {availableBlood.hospital}

                            </td>
                            <td>
                                {availableBlood.pins}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        
    )
}