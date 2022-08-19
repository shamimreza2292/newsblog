import express from 'express';

import mongoose from 'mongoose';

const app = express();


// const routes = require('./router/routes');

const port = process.env["PORT"] || 4000;
app.set('view engine', 'html');
app.use('/', function (req, res, next) {
    res.json({"title": "Hi, node world"})
    next()
  })

// ONU8Lh2p439Mq72e

 mongoose.connect('mongodb+srv://max:ONU8Lh2p439Mq72e@cluster0.xxcpo.mongodb.net/easyStepResume?retryWrites=true&w=majority', {
    useNewUrlParser: true ,
    useUnifiedTopology: true ,
    useFindAndModify: false,
    useCreateIndex: true
}).then((db)=>{
    app.listen(port, ()=>{
        console.log(`server use port ${port}`);
    });
    
}).catch((err: any)=>{
    console.log('mongodb conection error');
    console.log(err);
});
