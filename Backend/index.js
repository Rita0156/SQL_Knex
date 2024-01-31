
const express=require('express');
const app = express()

app.use(express.json())
const db = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "",
      database: "knex-test"
    }
  });

  app.get("/",(req,res)=>{
     res.send("welcome to homepage")
  })
  
app.set("db", db);

app.get("/seed", function(req, res, next) {
    const db = req.app.get('db');
    db.schema.hasTable("users").then(function(exists) {
      if (!exists) {
        db.schema
          .createTable("users", function(table) {
            table.increments("id").primary();
            table.string("name");
            table.string("email");
          })
          .then(function() {
            const recordsLength = Array.from(Array(100).keys());
            const records = recordsLength.map(rec => ({
              name: faker.name.findName(),
              email: faker.internet.email()
            }));
            db("users")
              .insert(records)
              .then(() => {
                res.send("Seeded data");
              });
          });
      } else {
        res.send("Table exists - Seeded data");
      }
    });
  });

app.listen(7000,()=>{
    console.log("running port on---7000",);
})