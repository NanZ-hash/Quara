import React from 'react' 
import apiUrl from "./apiConfig"
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

 export default class RandomJoke extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            helloJoke:[]
        }
    }

      genRandJoke=e=>{ 
          // till now I'll make it 10 jokes but it's need to be improved to support dynamic choose.
           e =Math.floor(Math.random() * 11);
        // e=36;
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
             <Card >
        <Card.Body>
            <Card.Text>
                <p>Hi ..!
                    <br />
                     This is a test project with Rails api and ReactJS (ゝω•)~☆ 
                     <br />
                     This project is a test for the CURD operation 
                     </p>
                <hr /> 
             <Button variant="danger"  onClick={this.genRandJoke}>Click ME ! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ </Button>
            
            <div className={'div'}>
           {this.state.helloJoke.map( joke=> {
               return ( <h4>{joke.content}</h4>  )  }
           )}
           </div>
            </Card.Text>
            </Card.Body>
            </Card>
    
           <img src={"https://www.up4.cc/image182044.html"} />

           </>
            ) 

    }
}

