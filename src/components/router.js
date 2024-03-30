import { BrowserRouter, Route, Routes } from "react-router-dom"
import { signUpForm as SignUpForm, loginForm as LoginForm } from "./form/auth_forms"
import { donorForm as Donorform } from "./form/donor_forms"
import { bloodRequest as BloodRequest, bloodDonation as BloodDonation } from "./form/admin_forms"
import { navbar as Navbar} from "./navbars/navbar"
import { adminNavbar as AdminNavbar } from "./navbars/user_navbar"
import { adminTable as AdminTable,availableBlood as AvailableBlood } from "./tables/admin_tables"
import { donationsTable as DonationTable, appointmentsTable as AppointmentTable, requestsTable as RequestTable } from "./tables/common_tables"

export const router  =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element ={<LoginForm/>}/>
                <Route path="/register" element ={<SignUpForm/>}/>
                <Route path="/appointment" element ={<Donorform/>}/>
                <Route path="/bloodRequest" element ={<BloodRequest/>}/>
                <Route path="/bloodDonation" element ={<BloodDonation/>}/>
                <Route path="/commonNavbar" element ={<commonNavbarItems/>}/>
                <Route path="/navbar" element ={<Navbar/>}/>
                <Route path="/adminNavbar" element ={<AdminNavbar/>}/>
                <Route path="/adminTable" element ={<AdminTable/>}/>
                <Route path="/availableBlood" element ={<AvailableBlood/>}/>
                <Route path="/donationTable" element ={<DonationTable/>}/>
                <Route path="/appointmentTable" element ={<AppointmentTable/>}/>
                <Route path="/requestTable" element ={<RequestTable/>}/>

            </Routes>
        </BrowserRouter>
    )
}