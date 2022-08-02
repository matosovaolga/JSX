import axios from 'axios';



export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID wHUFbqybYL3opa6p2Mpri0MGF5lXzkZZ5zD2JiGqJNE'
	}
})