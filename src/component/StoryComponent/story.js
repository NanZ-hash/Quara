import React from 'react'
import EditStory from './editStory'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



export default class Story extends React.Component { 


   deleteStoryHandler= e => { 
    this.props.deleteStoryHandler(this.props.id);
   }


 
    render() { 
        return (          
        <Card >
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.content}
          </Card.Text>
          <EditStory id={this.props.id}
                  title={this.props.title}
                  content={this.props.content} 
                  editStory={this.props.editStory}/>
                  <Button variant="danger" onClick={this.deleteStoryHandler}>Delete</Button>
        </Card.Body>
      </Card>
        )
    }  
}


