import express from 'express';


const app = express();



app.route('/')
  .get((req, res)=>res.end('Hello World'))
app.get('*', (req, res)=> res.status(404).render('404'))
app.set('port', (process.env.PORT || 3000));



export default app;

