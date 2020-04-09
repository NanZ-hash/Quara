import React from 'react' 
import apiUrl from "./apiConfig"
import axios from 'axios'

 export default class RandomJoke extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            helloJoke:[]
        }
    }

      genRandJoke=e=>{ 
          // till now I'll make it 10 jokes but it's need to be improved to support dynamic choose.
        //    e =Math.floor(Math.random() * 11);
        e=36;
            axios({
              url: `${apiUrl}/api/v1/jokes/${e}`,
              method: 'GET',
            })
            .then(res => {
                console.log(res)
                this.setState({
                    helloJoke: [res.data.joke]
                })
            })
            .catch(err => console.log(err))
            
          }

    render () { 

        return (
            <>
           <h1> Random </h1>
           <button onClick={this.genRandJoke} > Click ME !</button>

           {this.state.helloJoke.map( joke=> {
               return ( 
                   <h4>{joke.content}</h4>
               )

           }
           )}

           </>
            ) 

    }
}

