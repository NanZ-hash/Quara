import React from 'react'
import EditStory from './editStory'

export default class Story extends React.Component { 


   deleteStoryHandler= e => { 
    this.props.deleteStoryHandler(this.props.id);
   }


 
    render() { 

        return (
        <div>
            <h4>{this.props.title}</h4>
            <p>{this.props.content}</p>
            <EditStory id={this.props.id}
             title={this.props.title}
             content={this.props.content} 
             editStory={this.props.editStory}/>
            <button onClick={this.deleteStoryHandler}> Delete</button>
            </div>
        )
    }

  
}