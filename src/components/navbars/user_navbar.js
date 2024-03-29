import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export const commonUserNavBar = ()=>{
    return(<ul class ="navbar-nav">
        <li class="nav-item active"><button type="button" class="btn btn-success">{'email here'}</button></li>
        <li class="nav-item active"><button type="button" class="btn btn-success">Log Out</button></li>
    </ul>)
}

export const adminNavbar = ()=>{
    return(<ul class = "navbar-nav me-auto mb-2 mb-lg-0">
        <li class ="nav-item active">
            <Link class = "nav-link" to="#">Donations</Link>
        </li>
        <li class ="nav-item active">
            <Link class = "nav-link" to="#">Appointments</Link>
        </li>
        <li class ="nav-item active">
            <Link class = "nav-link" to="#">Request</Link>
        </li>
        <li class ="nav-item active">
            <Link class = "nav-link" to="#">Available Blood</Link>
        </li>
        <li class ="nav-item active">
            <Link class = "nav-link" to="#">Users</Link>
        </li>
    </ul>)
}

export const donorNavBar = ()=>{
    return(<ul class = "navbar-nav me-auto mb-2 mb-lg-0">
        <li class ="nav-item active">
            <Link class = "nav-link" to="#">Donations</Link>
        </li>
        <li class ="nav-item active">
            <Link class = "nav-link" to="#">Appointments</Link>
        </li>
        <li class ="nav-item active">
            <Link class = "nav-link" to="#">Request</Link>
        </li>
    </ul>)
}