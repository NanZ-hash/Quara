import axios from 'axios'
import apiUrl from '../../apiConfig'

//SHOW all 
const getStories = story => { 
    return axios.get(`${apiUrl}/api/v1/stories`)
}

//POST 
const postStories = (title,content,user) =>{ 
    return  axios({ url: apiUrl + '/api/v1/stories',
    method: 'POST',
    headers: {

      'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
        story: {
            title,
            content
      }
      }
    })
}

//DELETE by ID
const deleteStoryByID =  id => { 
    return axios.delete(`${apiUrl}/api/v1/stories/${id}`)
}

//UPDATE by ID
const editStoryByID = (id,story) => { 
    return axios.patch(`${apiUrl}/api/v1/stories/${id}`,{story})
}


export { getStories , postStories , deleteStoryByID , editStoryByID }