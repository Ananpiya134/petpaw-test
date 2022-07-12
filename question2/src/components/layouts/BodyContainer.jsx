import BodyContent from "../cards/BodyContent"
import content from '../../services/content'

export default function BodyContainer(){
		return <div className="body-container mb-3">
				<div className="body-header pt-3">
					<h1 className="mt-4">How can we help?</h1>
					<div className="input-group rounded">
						<input
						className="form-control border-secondary" 
						placeholder='Search'
						type="text" 
						/>
						<button className="btn btn-outline-secondary" style={{backgroundColor:'white'}}><i className="fa-solid fa-arrow-right" style={{color:'black'}}/ ></button>
					</div>
				</div>
				<div className="container">
					{content.map((item, index) => {
						return <BodyContent item={item} key={index}/>
					})}
				</div>
		</div>
}