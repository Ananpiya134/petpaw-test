import {useState, useEffect} from 'react'
import axios from 'axios'
import BodyContent from "../cards/BodyContent"
import content from '../../services/content'

export default function BodyContainer(){

	const [search, setSearch] = useState('')
	const [houseName, setHouseName] = useState('')
	const [currentLord, setCurrentLord] = useState('')
	const handleChangeSearch = (event) => {
		setSearch(event.target.value)
	}

	useEffect(() => {
		const fetchData = async () => {
			const data = await axios.get("https://anapioficeandfire.com/api/houses/378").then( res => res.data)
			const lordLink = data.currentLord
			const lord = await axios.get(lordLink).then(res => res.data.name)
			setCurrentLord(lord)
			setHouseName(data.name)
		}

		fetchData()
	},[])


		return <div className="body-container mb-3">
				<div className="body-header pt-3">
					<h1 className="mt-4">How can we help?</h1>
					<div className="input-group rounded">
						<input
						value={search}
						onChange={handleChangeSearch}
						className="form-control border-secondary" 
						placeholder='Search'
						type="text" 
						/>
						<button className="btn btn-outline-secondary" style={{backgroundColor:'white'}}><i className="fa-solid fa-arrow-right" style={{color:'black'}}/ ></button>
					</div>
				</div>
				<div className="container">
					{search === '' ? content.map((item, index) => {
						return <BodyContent item={item} key={index}/>
					}):
					<div className='m-auto'>
						<h5 className='content-header-font'>House: {houseName}</h5>
						<h5 className='content-header-font'>Lord: {currentLord}</h5>
					</div>
				}
					</div>
		</div>
}