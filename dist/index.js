"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.get('/users', (req, res) => {
    const a = 5;
    if (a > 6) {
        res.send('OK');
    }
    else {
        res.send('false');
    }
});
app.post('/users', (req, res) => {
    res.send('We have create user');
});
app.listen(port, () => console.log(`Server get started on port ${port}`));
