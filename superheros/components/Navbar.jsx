import Link from "next/link"
import { MDBBtn } from "mdb-react-ui-kit"

const Navbar = () => {
    return (
        <nav className="navbar container">
            <Link href="/" className="navbar-brand">
                Superhero identity
            </Link>
            <Link href="/add">
                <MDBBtn>New Identity</MDBBtn>
            </Link>
        </nav>
    )
}

export default Navbar