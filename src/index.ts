const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
        res.send('Hello world')
    }
)

app.get('/users', (req, res) => {
        const a = 5
        if (a > 6) {
            res.send('OK')
        } else {
            res.send('false')
        }
    }
)

app.post('/users', (req, res) => {
        res.send('We have create user')
    }
)

app.listen(port, () =>
    console.log(`Server get started on port ${port}`)
)
