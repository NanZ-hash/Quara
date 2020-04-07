import React from 'react';
 
 const NewJoke = ({newJokeSubmit = e => e}) => {
    let content
    const submit = e => {
        e.preventDefault()
        newJokeSubmit(content.value)
        content.value = ''
    }

    return (
        <form onSubmit={submit}>
                    <div>
            <textarea ref={textarea => content = textarea}
                    type="textarea"
                    placeholder="Tell me .." required/>
                    </div>

            <button>Add Joke</button>
        </form>
    )
}

export default NewJoke