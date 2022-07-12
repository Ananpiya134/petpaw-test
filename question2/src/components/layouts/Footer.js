import footerContent from "../../services/footerContent"
import FooterContent from "../cards/FooterContent"

export default function Footer() {
    return <div className="footer d-flex ms-3 me-3 mt-2 mb-4 justify-content-around">
        {footerContent.map((item, index) => {
            return <FooterContent item={item} key={index}/>
        })}

				<div className="d-flex flex-column justify-content-end mb-5">
				<i className="fa-brands fa-instagram mb-3" style={{fontSize:'40px'}}/>
				 <h5 className="footer-default-font"><i className="fa-regular fa-copyright"/> Copyright 2022</h5>
				<h4 className="footer-default-font">Abstract Studio Design, Inc.</h4>
				<h4 className="footer-default-font">All rights reserved</h4>
				</div>
    </div>
}