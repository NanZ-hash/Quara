import React from 'react' 
import EditJoke from './editJoke'

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
            <button onClick={this.deleteJokeHandler}>Delete</button>
            </div>
            ) 

    }
}

