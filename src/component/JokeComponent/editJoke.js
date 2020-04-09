import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export default class EditJoke extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
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

    editJoke= e =>{ 
        e.preventDefault();
        const editedContent = { 
            content: this.state.content,
        }
        this.props.editJoke(this.props.id, editedContent);
    };

    render(){
        return(
            <>
            <Button variant="primary" onClick={this.handleShow}>
              Edit
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Joke</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
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
                <Button variant="primary" onClick={this.editJoke}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
    
        )
    }
}