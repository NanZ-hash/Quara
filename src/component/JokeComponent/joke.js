import React from 'react' 
import EditJoke from './editJoke'
import Button from 'react-bootstrap/Button'

 export default class Joke extends React.Component { 
    
    deleteJokeHandler =e=>{ 
        this.props.deleteJokeHandler(this.props.id);
    }
 
    render () { 

        return ( <div> 
            <p>{this.props.content}</p>
            <EditJoke id={this.props.id}
             content={this.props.content} 
             editJoke={this.props.editJoke}/>
            <Button variant="danger" onClick={this.deleteJokeHandler}>Delete</Button>
            </div>
            ) 

    }
}

