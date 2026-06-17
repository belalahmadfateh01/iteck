import pool from "../config/db.config.js";

const addComment = async (data) => {
  try {
    if(!data) throw new Error("No data object provided");
    
    const { message, rating, user_id, service_id } = data;

    if(!message || !rating || !user_id || !service_id) throw new Error("message, rating, user id and service id are required");

    const query = `
    INSERT INTO comment(
    message,
    rating,
    user_id,
    service_id)
    VALUES (?, ?, ?, ?)`;

    const [result] = await pool.execute(query, [message, rating, user_id, service_id]);
    return result.insertId;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

const getAllComment = async (userId) => {
  if(!userId) throw new Error("user id not provided");
  const query = "SELECT * FROM comment WHERE user_id = ?";
  const [result] = await pool.execute(query, [userId]);
  return result;
};

const getComment = async (userId, commentId) => {
  if(!userId) throw new Error("user id not provided");
  const query = "SELECT * FROM comment WHERE id = ? AND user_id = ?";
  const [result] = await pool.execute(query, [commentId, userId]);
  return result;
};

export { addComment, getAllComment, getComment };
