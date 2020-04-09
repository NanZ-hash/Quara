import React from 'react'
import Story from './story'
import NewStory from './newStory'
import { getStories , postStories , deleteStoryByID , editStoryByID} from './api'

export default class StoryContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        storyList: [],
    }
}

componentDidMount() {
  //GET ALL STORIES ..
  getStories()
    .then(res => {
      console.log(res)
      this.setState({
        storyList: res.data.stories
      })
  })
  .catch(err => console.log(err))
}

 // POST A NEW STORY 
 addNewStory=(title,content)=> {
   postStories(title,content,this.props.user)
   .then(res => {
    console.log(res)
    const storyList = [ ...this.state.storyList, res.data.story ]
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
    {allStories}
      <div className={'div'}>
      <NewStory newStorySubmit={this.addNewStory} />
      </div>
      </>
    )
  }
}