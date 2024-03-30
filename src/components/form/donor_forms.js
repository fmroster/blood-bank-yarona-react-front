export const donorForm = () => {
    
    return (
        
            <form onSubmit={handleFormSubmit}>
                <label>
                    First Name
                </label>
                <input
                    type="text"
                    name="firstName"
                    onChange={handleInputChange}>
                </input>
                
                <label>
                 Last Name
                </label>
                 <input 
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}>
                 </input>
                
                <label>
                    Location
                </label>
                <select>
                    <option value ="Location"> Select Location </option>
                    <option value="Gaborone">Gaborone</option>
                    <option value="Francistown">francistown</option>
                    <option value="Serowe">Serowe</option>
                    <option value="Molepolole">Molepolole</option>
                    <option value="Mahalapye">Mahalapye</option>
                </select> 
              <label>
                    date
                    
                </label>
                <input
                    type="date"
                    name="selectedDate"
                    onChange="handleDateChange">
                        
                </input>
                <button type="submit">Appointment</button>
            </form>
        
    )    
} 
