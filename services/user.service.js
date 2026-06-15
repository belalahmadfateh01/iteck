import pool from "../config/db.config.js";

const addUser = async (data) => {
    try {

        const { first_name, last_name, job, role } = data;
        const query = `INSERT INTO users VALUES (?, ?, ?, ?)`;
        const [result] = await pool.execute(query, [first_name, last_name, job, role]);
        return result.insertId;

    } catch (err) {
        console.log(err);
        return null;
    }
}

const getAllUsers = async () => {
    const query = `SELECT * FROM users`;
    const [result] = await pool.execute(query, []);
    return result;
}

const getUser = async (id) => {
    if (!id) return null;
    const query = `SELECT * FROM users WHERE id = ?`;
    const [result] = await pool.execute(query, [id]);
    return result;
}

export { addUser, getAllUsers }