const express = require('express');
const db = require('./db');
const user = require('./user');
const app = express();
app.use(express.json());


// get

app.get('/', async (req, res) => {
    let data = await user.find();
    res.send(data);
});

// app.get('/', async (req, res) => {
//     let {gender , shirt_size} = req.query;
//     let data = await user.find({gender : gender ,shirt_size : shirt_size});
//     res.send(data);
// });


// post

app.post('/', async (req, res) => {
    await user.create(req.body);
    res.send("successfully created");
});

// patch

app.patch('/:id', async (req, res) => {
    let {id} = req.params;

    let data = await user.findByIdAndUpdate(id , req.body);
    res.send(data);
});

// delete

app.delete('/:id', async (req, res) => {
    let {id} = req.params;

    let data = await user.findByIdAndDelete(id);
    res.status(200).json({data});
});
// server start

app.listen(3000, () => {
    db();
    console.log('Server started on port 3000');
});
