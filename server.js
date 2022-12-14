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















/*
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`
*/