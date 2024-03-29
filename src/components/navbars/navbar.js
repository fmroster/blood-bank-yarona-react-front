import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { adminNavbar, donorNavBar } from './user_navbar'
import { anonymousDiv } from './anonymous_navbar'
const navbar =({isLoggedIn, isAdmin})=>{
    return(
        <nav class ="navbar navbar-expand-lg navbar-dark background-nav">
            <div class ="container-fluid">
                <commonNavbarItems></commonNavbarItems>
                <button class = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                {isLoggedIn ? (
                        isAdmin ? <>
                            {adminNavbar()}
                            <CommonUserNavbar />
                        </> : <>
                            {donorNavBar()}
                            <CommonUserNavbar />
                        </>
                    ) : (
                        <>{anonymousDiv()}</>
                    )}
                </div>
            </div>
        </nav>
    )
}