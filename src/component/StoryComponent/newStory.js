import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
 
 const NewStory = ({newStorySubmit = e => e}) => {
    let title, content
    const submit = e => {
        e.preventDefault()
        newStorySubmit(title.value, content.value)
        title.value = ''
        content.value = ''
    }

    return (

        <Form >
                <Form.Label>Title : </Form.Label>
                <Form.Control  
                    ref={Control => title = Control}
                    type="text"
                    placeholder="Title" required
                    />

                    <Form.Label>Content : </Form.Label>
                <Form.Control
                    
                    ref={Control => content = Control}
                    type="textarea"
                    as="textarea" rows="3" 
                    placeholder="Content" required/>
                    <Button variant="primary" onClick={submit} > Add Story </Button>
                   </Form> 
    )
}

export default NewStory