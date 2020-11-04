const mariadb = require('mariadb');
const conn = mariadb.createConnection({ host: 'mydb.com', user: 'root', password: 'pass@word1', database: 'db' });
if (conn)
    console.log("done")
else
    console.log("ERROR")
conn.query("SELECT 1 as val", (err, rows) => {
        console.log(rows)
    }