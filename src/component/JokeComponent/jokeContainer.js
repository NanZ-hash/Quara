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
}

componentDidMount() {
  //GET ALL Jokes ..
  getJokes()
    .then(res => {
      console.log(res)
      this.setState({
        jokeList: res.data.jokes
      })
  })
  .catch(err => console.log(err))
}
  

 // POST A NEW JOKE 
 addNewJoke=(content)=> {
  postJokes(content, this.props.user)
  .then(res => {
   const jokeList = [ ...this.state.jokeList, res.data.joke ]
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
      <h3>Joke Library</h3>
      <div className={'div'}>
      <NewJoke newJokeSubmit={this.addNewJoke} />
      </div>
      <div className={'div'}>
      {allJokes}
      </div>
      </>
    )
  }
}

export default JokeContainer;
