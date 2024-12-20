const express = require('express');  //TPM

//mw
const app = express();

//pluggins
port=5005;

//Taking Data from Server
app.get('/', (req, res)=>{
    res.send('Welcome on Landing Page')
});

app.get('/login' , (req, res)=>{
    res.send('Welcome on Login Page')
});


//Posting the data on server
app.post('/', (req, res)=>{
    res.send('Welcome using Post() on Landing Page')
})


app.post('/login' , (req, res)=>{
    res.send('Welcome using Post() on Login Page')
})

// updating the data of serve
app.put('/', (req, res)=>{
    res.send("Updating the home Page")
});

app.put('/login', (req, res)=>{
    res.send("Updating the Login Page")
});

//deleting the data of server

app.delete('/', (req, res)=>{
    res.send('Home page data Deleted')
});

app.delete('/login', (req, res)=>{
    res.send('Login page data Deleted')
});





app.listen(port , ()=>{
    console.log(`Landing Page : http://localhost:${port}/`)
    console.log(`Login Pagin Page : http://localhost:${port}/login`)
});

