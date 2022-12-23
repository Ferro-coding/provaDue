const express = require("express");
const sesso = require('express-session'); // session
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.use(
    sesso({
    secret: 'thisisasecret',
    saveUninitialized: false,
    resave: false
    })
    );

app.get("/", (req, res) => {
    //var sessuale;
    //sessuale = req.sesso;
    //const content = req.body

    //console.log(content)
    /*
    writeFileSync('./test.txt', '\n', {flag:'a'});
    writeFileSync('./test.txt', content.username,{flag:'a'});
    writeFileSync('./test.txt', ' ', {flag:'a'});
    writeFileSync('./test.txt', content.password,{flag:'a'});
    */
    res.sendFile('index.html', {root: __dirname + '/public'})
});
app.get("/wallet", (req, res) => res.sendFile('wallet.html', {root: __dirname + '/public'}));
app.post("/login.html", (req, res) => {
    const content = req.body
    const username = content.username;
    const password = content.password;
    if(username === "Crosta"){
        res.redirect('/')
    }
    else{
        res.sendFile('nonSeiAutorizzato.html', {root: __dirname + '/public'})
    }
    //console.log(content.username);
    //console.log(content.password);

});
app.get("/doLogout", (req, res) =>{
    //FARE IL LOGOUT(Middleware)
    res.sendFile('index.html', {root: __dirname + '/public'});
});
app.get("/transaction", (req, res) => res.sendFile('transaction.html', {root: __dirname + '/public'}));




app.listen(port, () => console.log(`Example app listening on port ${port}!`));