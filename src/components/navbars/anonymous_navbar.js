import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export const anonymousDiv = () =>{
    return(
        <ul class = "navbar-nav me-auto mb-2 mb-lg-0">
            <li class ="nav-item active">
                <Link class = "nav-link" to="#">Login</Link>
            </li>
            <li class ="nav-item active">
                <Link class = "nav-link" to="#">Sign up</Link>
            </li>
        </ul>
    )
}