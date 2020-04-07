import React from 'react';
 
 const NewStory = ({newStorySubmit = e => e}) => {
    let title, content
    const submit = e => {
        e.preventDefault()
        newStorySubmit(title.value, content.value)
        title.value = ''
        content.value = ''
    }

    return (
        <form onSubmit={submit}>
            <div>
            <input  ref={input => title = input}
                    type="text"
                    placeholder="Title" required />
                    </div>
                    <div>
            <textarea ref={textarea => content = textarea}
                    type="textarea"
                    placeholder="Content" required/>
                    </div>
   
            <button>Add Story</button>
        </form>
    )
}

export default NewStory