import React from 'react'
import Story from './story'
import NewStory from './newStory'

import { getStories , postStories , deleteStoryByID , editStoryByID} from './api'
export default class StoryContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        storyList: [],
        editingStoryById: null ,
    }
}

componentDidMount() {
  //GET ALL STORIES ..
  getStories()
    .then(res => {
      console.log(res)
      this.setState({
        storyList: res.data
      })
  })
  .catch(err => console.log(err))
}

 // POST A NEW STORY 
 addNewStory=(title,content)=> {
   postStories(title,content)
   .then(res => {
    console.log(res)
    const storyList = [ ...this.state.storyList, res.data ]
    this.setState({storyList})
    })
    .catch(err => {
    console.log(err)
    })
 }

// DELETE STORY
deleteStory=(id)=> {
  deleteStoryByID(id)
  .then(res => {
      const storyList = this.state.storyList.filter(
          story => story.id !== id
      )
      this.setState({storyList})
  })
  .catch(err => console.log(err))
}

// passing the Id for the item we want to edit in the state..
editingStory= id => { 
  this.setState ({editingStoryById: id})
}


// UPDATE STORY
editStory =(id, editedStory) =>{
  editStoryByID(id, editedStory)
  .then(res => {
      console.log(res);
      const storyList = this.state.storyList;
      storyList.forEach((item, index) => {
        if (item.id === id) {
          storyList[index].title = editedStory.title;
          storyList[index].content = editedStory.content;
        }
      });
      this.setState({storyList})
  })
  .catch(err => console.log(err));
}

  render() { 
        // MAP all over the stories in the storyList
        const allStories= this.state.storyList.map( (story, index) => {
          return (
          <Story 
             key={index}
             id={story.id}
             title={story.title}
             content={story.content}
             deleteStoryHandler={this.deleteStory}
             editStory={this.editStory}  />)
          })
    return (
      <> 
      <h1>Story </h1>
      <div>
      {allStories}
      </div>
      <div>
      <NewStory newStorySubmit={this.addNewStory} />
      </div>
      </>
    )
  }
}