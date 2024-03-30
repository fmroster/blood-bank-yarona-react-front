export const bloodRequest = () => {
    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Name
            </label>
            <input
            type="text"
            name="firstName"
            onChange={handleInputSubmit}>
            </input>


            <label>
                Surname
            </label>
            <input 
            type="text"
            name="lastName"
            onChange={handleInputSubmit}>    
            </input>


          <label>
            BloodGroup
          </label>
          <select>
          <option value ="Blood Group"> Select Blood Group </option>
                    <option value="A positive">A+</option>
                    <option value="A negative">A-</option>
                    <option value="B positive">B+</option>
                    <option value="B negative">B-</option>
                    <option value="AB positive">AB+</option>
                    <option value="AB negative">AB-</option>
                    <option value="O positive">O+</option>
                    <option value="O negative">O-</option>
          </select>
          <label>
                    location
                </label>
                <select>
                    <option value ="Location"> Select Location </option>
                    <option value="Gaborone">Gaborone</option>
                    <option value="Francistown">francistown</option>
                    <option value="Serowe">Serowe</option>
                    <option value="Molepolole">Molepolole</option>
                    <option value="Mahalapye">Mahalapye</option>
                </select> 
                <button type="Submit">Request</button>
                
        </form>
    )
}
export const bloodDonation = () => {

    return (
        <form onSubmit={handleInputSubmit}>
            <label>
                First Name
            </label>
            <input
            type="text"
            name="firstName"
            onChange={handleInputSubmit}>
            </input>


            <label>
                 lastName
                </label>
                 <input 
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}>
                 </input>
                
                 <label>
                 lastName
                </label>
                 <input 
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}>
                 </input>


                <label>
                    location
                </label>
                <select>
                    <option value ="Location"> Select Location </option>
                    <option value="Gaborone">Gaborone</option>
                    <option value="Francistown">francistown</option>
                    <option value="Serowe">Serowe</option>
                    <option value="Molepolole">Molepolole</option>
                    <option value="Mahalapye">Mahalapye</option>
                </select> 
                <button type="submit">Create</button>


        </form>

    )
}