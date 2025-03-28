const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite');

db.serialize(() => {
    db.run(`INSERT INTO orders (customer_name, sales) VALUES 
        ('Alice', 500),
        ('Bob', 700),
        ('Charlie', 200)
    `);

    console.log("Sample data inserted successfully!");
});

db.close();
