import React from 'react'
import Joke from './joke'
import NewJoke from './newJoke'
import { getJokes , postJokes , deleteJokeByID , editJokeByID } from './api'

class JokeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        jokeList: [],
    }
    console.log("this is 14" ,this.state.jokeList)
}

componentDidMount() {
  //GET ALL Jokes ..
  getJokes()
    .then(res => {
      console.log(res)
      this.setState({
        jokeList: res.data.jokes
      })
      console.log("this is 23" ,this.state.jokeList)
    
  })
  .catch(err => console.log(err))
}
  

 // POST A NEW JOKE 
 addNewJoke=(content)=> {
  postJokes(content, this.props.user)
  .then(res => {
  //  console.log("Line 34"+ res)
   console.log("Line 35 /// ", res.data)
  //  console.log("Line 36"+ Object.keys(res.data))
  //  console.log("this is 35" ,this.state.jokeList)
   const jokeList = [ ...this.state.jokeList, res.data.joke ]
   console.log("this is 37" ,this.state.jokeList)
   
   this.setState({jokeList})
   console.log("this is 41" ,this.state.jokeList)
   })
   .catch(err => {
   console.log(err)
   })
}


// DELETE JOKE
deleteJoke=(id)=> {
  deleteJokeByID(id)
  .then(res => {
      const jokeList = this.state.jokeList.filter(joke => {
        return joke.id !== id
      })
      this.setState({jokeList})
  })
  .catch(err => console.log(err))
}


// UPDATE JOKE
editJoke =(id, editedContent) =>{
  editJokeByID(id, editedContent)
  .then(res => {
      // console.log(res);
      const jokeList = this.state.jokeList;
      jokeList.forEach((item, index) => {
        if (item.id === id) {
          jokeList[index].content = editedContent.content;
        }
      });
      this.setState({jokeList})
  })
  .catch(err => console.log(err));
}


  render() { 

 // MAP all over the stories in the storyList 
 console.log(`here 77 ${Object.keys(this.state.jokeList)}`)
 console.log(`here 78 ${this.state.jokeList}`)

 const allJokes= this.state.jokeList.map( (joke,index) => {
  return (
  <Joke 
   joke={joke}
   key={index}
    id={joke.id} 
    content={joke.content}
    deleteJokeHandler={this.deleteJoke}
    editJoke={this.editJoke} />
    )
 })

    return (
      <> 
      {allJokes}
      <div>
      <NewJoke newJokeSubmit={this.addNewJoke} />
      </div>
      </>
    )
  }
}

export default JokeContainer;
