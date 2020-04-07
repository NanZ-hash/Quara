import React from 'react'
import Joke from './joke'
import NewJoke from './newJoke'
import { getJokes , postJokes , deleteJokeByID , editJokeByID } from './api'

class JokeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        jokeList: [],
        editingJokeById: null,
    }
}

componentDidMount() {
  //GET ALL Jokes ..
  getJokes()
    .then(res => {
      console.log(res)
      this.setState({
        jokeList: res.data
      })
  })
  .catch(err => console.log(err))
}
  

 // POST A NEW JOKE 
 addNewJoke=(content)=> {
  postJokes(content)
  .then(res => {
   console.log(res)
   const jokeList = [ ...this.state.jokeList, res.data ]
   this.setState({jokeList})
   })
   .catch(err => {
   console.log(err)
   })
}

// DELETE JOKE
deleteJoke=(id)=> {
  deleteJokeByID(id)
  .then(res => {
      const jokeList = this.state.jokeList.filter(
          joke => joke.id !== id
      )
      this.setState({jokeList})
  })
  .catch(err => console.log(err))
}

// passing the Id for the item we want to edit in the state..
editingJoke= id => { 
  this.setState ({editingJokeById: id})
}



// UPDATE JOKE
editJoke =(id, editedContent) =>{
  editJokeByID(id, editedContent)
  .then(res => {
      console.log(res);
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
 const allJokes= this.state.jokeList.map( (joke,index) => {
  return (<Joke joke={joke}
    key={index}
    id={joke.id} 
    content={joke.content}
    deleteJokeHandler={this.deleteJoke}
    editJoke={this.editJoke} />)
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
