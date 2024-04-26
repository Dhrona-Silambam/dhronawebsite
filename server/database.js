const {Pool} = require("pg");

const pool = new Pool({
    user: "dhrona_user",
    password:"ICH8RQ2JUQK30iVgkzvy2tpx4QWmM6jW",
    host:"colo2sgl5elc73blmk90-a.oregon-postgres.render.com",
    port:5432,
    database:"dhrona",
    ssl: {rejectUnauthorized: false}
});


module.exports = pool