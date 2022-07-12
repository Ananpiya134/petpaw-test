

export default function BodyContent ({item}) {
    return <div className="d-flex m-3" style={{width:'330px'}} >
					<img style={{width:'60px', height:'60px'}} className='me-4 mt-1'src={item.icon} alt='icon'/>
					<div>
						<h5 className="content-header-font">{item.title}</h5>
						<h6 className="content-description-font">{item.description}</h6>
						<a href="#" >Learn more <i className="fa-solid fa-arrow-right ms-2 mt-2"/></a>
					</div>
				</div>
}