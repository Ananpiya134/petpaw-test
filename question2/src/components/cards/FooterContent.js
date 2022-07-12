export default function FooterItem({item}){
    return <div className="mt-4">
                <h5 className="footer-header-font">{item.title}</h5>
                {item.items.map((elem, key) => {
                    return <a href='#' key={key}><h6 className="footer-item-font">{elem}</h6></a>
        })}
                {item.title === 'Company' 
                &&
                <div className="mt-4">
								<h6 className="footer-item-font" style={{fontStyle:'bold', fontSize:'13px'}}>Contact us</h6>
								<h5 className="footer-item-font">info@abstract.com</h5>
                </div>
            }
            </div>
}