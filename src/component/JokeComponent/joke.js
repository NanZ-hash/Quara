import React from 'react' 
import EditJoke from './editJoke'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


 export default class Joke extends React.Component { 
    
    deleteJokeHandler =e=>{ 
        this.props.deleteJokeHandler(this.props.id);
    }
 
    render () { 

        return (
            <Card >
        <Card.Body>
            <Card.Text>
            {this.props.content}
            </Card.Text>
            <EditJoke id={this.props.id}
             content={this.props.content} 
             editJoke={this.props.editJoke}/>
            <Button variant="danger" onClick={this.deleteJokeHandler}>Delete</Button>
            </Card.Body>
            </Card>
            ) 

    }
}

