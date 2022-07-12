import { Link } from "react-router-dom"

export default function Navbar () {
    return (
        <div className="navigation-bar">
					<div className="nav-home pt-3"><i className="fa-brands fa-instagram mt-2 me-2" />Abstract | Help Center</div>
					<div className="nav-button">
					<a href="#" className="btn rounded nav-btn" style={{backgroundColor:'#494949', border:'1px solid #898989'}}>Submit a request</a>
					<a href='#' className="btn rounded nav-btn" style={{backgroundColor:'#4C5FD5'}}>Sign in</a>
				</div>
        </div>
    )
}