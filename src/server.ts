import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    return response.send("<h1>Hello NLW04</h1>")
})

app.listen(3333, () => {
    console.log('Server is running!')
})