import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const logo = require('../../assets/yaron-logo.png')

export const commonNavbarItems =() =>{
   return( <Link class="navbar-brand" to ="/">
        <img src={logo} width="30" height = "30" class="d-inline-block align-top" alt="site logo"/> Yarona Blood
    </Link>)
}