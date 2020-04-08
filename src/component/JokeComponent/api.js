import axios from 'axios'
import apiUrl from '../../apiConfig'

//SHOW all 
const getJokes = joke => { 
    return axios.get(`${apiUrl}/api/v1/jokes`)
}

//POST 
const postJokes = (content,user) =>{ 
    return  axios({ url: apiUrl + '/api/v1/jokes',
    method: 'POST',
    headers: {

      'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
        jokes: {
            content
      }
      }
    })
}



//DELETE by ID
const deleteJokeByID =  id => { 
    return axios.delete(`${apiUrl}/api/v1/jokes/${id}`)
    
}

//UPDATE by ID
const editJokeByID = (id,content) => { 
    return axios.put(`${apiUrl}/api/v1/jokes/${id}`,{ jokes: {
        content
  }
})
}


export { getJokes , postJokes , deleteJokeByID , editJokeByID }