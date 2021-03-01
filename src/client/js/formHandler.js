function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    fetch('http://localhost:4040/test', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify({
            url: formText
        })
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
    document.getElementById('results').innerHTML = `agreement: ${res.agreement} <br> model: ${res.model} <br> confidence: ${res.confidence} <br> irony: ${res.irony} <br> score_tag: ${res.score_tag} <br> subjectivity: ${res.subjectivity}`
    })
}

export { handleSubmit }
