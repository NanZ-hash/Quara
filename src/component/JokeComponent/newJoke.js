import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
 
const NewJoke = ({newJokeSubmit = e => e}) => {
  let content
  const submit = e => {
      e.preventDefault()
      newJokeSubmit(content.value)
      content.value = ''
  }

  return (
    <Form >
        <Form.Label>Tell me ! : </Form.Label>
        <Form.Control
        ref={Control => content = Control}
        type="textarea"
        as="textarea" rows="3" 
        placeholder="Content" required/>
        <Button variant="primary" onClick={submit} > Add Joke </Button>
       </Form> 
  )
}

export default NewJoke