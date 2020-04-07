import React from 'react';

export default class EditJoke extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            content: this.props.content
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editJoke= e =>{ 
        e.preventDefault();
        const editedContent = { 
            content: this.state.content,
        }
        this.props.editJoke(this.props.id, editedContent);
    };

    render(){
        return(
            <form>
                <div>
            <textarea  name="content"
                    type="text"
                    placeholder="Content"
                    value={this.state.content}
                    onChange={this.handleChange} />
                    </div>
            <button onClick={this.editJoke}>Update Joke</button>
        </form>  
        )
    }
}