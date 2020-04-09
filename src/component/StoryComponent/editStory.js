import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export default class EditStory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: this.props.content,
            setShow: false, 
            show:false
        }
    }

    
    handleClose = () =>{ 
    this.setState( { show : false })
   } 
    handleShow = () => { 
       this.setState( { show : true })
   }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    editStory= e =>{ 
        e.preventDefault();
        const editedStory = { 
            title: this.state.title,
            content: this.state.content,
        }
        this.props.editStory(this.props.id, editedStory);
    };


    render(){
        return(
            <>
            <Button variant="primary" onClick={this.handleShow}>
              Edit
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Story</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                <Form.Label>Title : </Form.Label>
                <Form.Control name="title" 
                    type="text" 
                    placeholder="Title..." 
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                    <Form.Label>Content : </Form.Label>
                <Form.Control name="content" 
                    as="textarea" rows="3" 
                    placeholder="..." 
                    value={this.state.content}
                    onChange={this.handleChange}
                    />
                    </Form> 

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.editStory}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>

             
        )
    }
}