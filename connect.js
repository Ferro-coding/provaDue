const { Client } = require('pg');
require('dotenv').config();

function startvv(inputUsername){
  (async () => {
    const client = new Client({
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      ssl: true,
    });
    await client.connect();
    const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
    console.log(res.rows[0].connected);

    //await client.query("CREATE TABLE sessuale(id int not null,username varchar not null,password varchar not null);");
    //await client.query("INSERT INTO sessuale values(2,'Paccita','1234');");

    const c = await client.query("SELECT username FROM sessuale");
    //console.log(inputUsername);
    for(var i = 0; i < c.rowCount; i++){
      console.log("Dentro il for", await c.rows[i].username);
      return await c.rows[i].username;
    }

    //console.log(c);

    await client.end();
    return 
  })();
}

console.log("FUORIIIII", startvv("Paccita"));

module.exports = startvv