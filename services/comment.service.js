import pool from "../config/db.config.js";

const addComment = async (data) => {
  try {
    const { message, rating, date } = data;
    const query = `INSERT INTO comment VALUES (DEFAULT, ?, ?, DEFAULT, DEFAULT, DEFAULT)`;
    const [result] = await pool.execute(query, [message, rating, date]);
    return result.insertId;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getAllComment = async () => {
  const query = "SELECT * FROM comment";
  const [result] = await pool.execute(query, []);
  return result;
};

const getComment = async (id) => {
  const query = "SELECT * FROM comment WHERE id = ?";
  const [result] = await pool.execute(query, [id]);
  return result;
};

export { addComment, getAllComment, getComment };
