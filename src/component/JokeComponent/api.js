import axios from 'axios'
import apiUrl from '../../apiConfig'

//SHOW all 
const getJokes = joke => { 
    return axios.get(`${apiUrl}/api/v1/jokes`)
}

//POST 
const postJokes = (content) =>{ 
    return axios.post(`${apiUrl}/api/v1/jokes`, { joke: {content} })
}

//DELETE by ID
const deleteJokeByID =  id => { 
    return axios.delete(`${apiUrl}/api/v1/jokes/${id}`)
}

//UPDATE by ID
const editJokeByID = (id,content) => { 
    return axios.put(`${apiUrl}/api/v1/jokes/${id}`,{content})
}


export { getJokes , postJokes , deleteJokeByID , editJokeByID }