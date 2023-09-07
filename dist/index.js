"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3003;
app.get('/courses', (req, res) => {
    res.json([
        { id: 1, title: 'front-end' },
        { id: 2, title: 'back-end' },
        { id: 3, title: 'autonation uq' },
        { id: 4, title: 'devops' },
    ]);
});
app.get('/courses/:id', (req, res) => {
    res.json([
        { id: 1, title: 'front-end' },
        { id: 2, title: 'back-end' },
        { id: 3, title: 'autonation uq' },
        { id: 4, title: 'devops' },
    ].find(c => c.id === +req.params.id));
});
app.get('/users', (req, res) => {
    res.send('Hello Users');
});
app.post('/users', (req, res) => {
    res.send('We created user');
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
