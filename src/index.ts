import express from 'express'

const app = express()
const port = 3000

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

const db = {
    courses: [
        {id: 1, title: 'BACK-END'},
        {id: 2, title: 'FRONT-END'},
        {id: 3, title: 'JAVA'},
        {id: 4, title: 'REACT'}
    ]
}

app.get('/', (req, res) => {
        res.sendStatus(404)
    }
)

app.post('/courses', (req, res) => {

    let lastElement = db.courses[db.courses.length - 1]

    if (!req.body.title) {

        res.sendStatus(403)
        return
    }

    let newCourse = {
        id: ++lastElement.id,
        title: req.body.title
    };
    db.courses.push(
        newCourse
    )
    console.log(newCourse)
    res.json(newCourse)

})

// Изменение курса
app.put('/courses/:id', (req, res) => {

// Получаем ИД записи для изменения
//     let idElementForEdit = parseInt(req.params.id)
    let idElementForEdit = req.params.id

// Если в боди пусто
    if(!req.body.title) {
        res.json({message: 'body is empty'})
    }

// Получаем новые данные
    let newData = {id: idElementForEdit, title: req.body.title}

// Ищем индекс элемента в массиве для изменения
//     let index = db.courses.findIndex(el => el.id === idElementForEdit)

// Если элемент не найден
//     if (index < 0) {
//         res.json({message: 'Element not found'})
//         return
//     }

// Ищем элемент для изменения в массиве
    const foundCourse = db.courses.find(el => el.id === +idElementForEdit)

//  Если элемент в массиве не найден
    if(!foundCourse) {
        res.sendStatus(401)
        return
    }

// Изменение элемента в массиве
//     db.courses[index] = newData
    foundCourse.title = newData.title



// После успешного изменения возвращаем весь массив
    res.json(db.courses)

})




app.delete('/courses/:id', (req, res) => {

    if (!req.params.id) {
        res.sendStatus(400)
        return
    }

    let idElementForDelete = parseInt(req.params.id)

    console.log(`ИД объекта для удаления ${idElementForDelete}`)

    let indexElementForDelete = db.courses.findIndex((el) => {
        return el.id === idElementForDelete
    })

    console.log(`Индекс элемента в массиве для удаления ${indexElementForDelete}`)

    if (indexElementForDelete !== -1) {
        db.courses.splice(indexElementForDelete, 1)
    } else {
        res.sendStatus(402)
        return
    }

    res.json(db.courses)

})

app.get('/courses', (req, res) => {

        let foundCourse = db.courses

        if (req.query.title) {
            foundCourse = db.courses.filter(
                c => c.title.indexOf(req.query.title as string) > -1
            )
        }

        res.json(foundCourse)
    }
)

app.get('/courses/:id', (req, res) => {
        const foundCourse = db.courses.find(c => c.id === +req.params.id);

        res.json(foundCourse)
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
