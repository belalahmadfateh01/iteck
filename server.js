import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import pool from "./config/db.config.js";

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        const connection = await pool.getConnection();
        connection.release();
        console.log('DB connected!')
    } catch (err) {
        console.log(err);
    }
})();

app.listen(PORT, err => {
    if(err) console.log(err);
    console.log(`server is running on port ${PORT}`);
});