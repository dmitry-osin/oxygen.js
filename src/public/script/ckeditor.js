async function loadCkEditor() {
    const editor = await InlineEditor
        .create(document.querySelector('#editor'), {placeholder: 'Type post content here...', name: 'content'})
        .catch(error => {
            console.error(error)
        })
    editor.focus()
}

loadCkEditor()
    .then()
    .catch(error => console.error(error))