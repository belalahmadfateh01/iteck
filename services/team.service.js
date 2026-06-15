import pool from "../config/db.config.js";

const addTeam = async (data) => {
  try {
    const { name, description } = data;
    const query = `INSERT INTO team VALUES (DEFAULT, ?, ?)`;
    const [result] = await pool.execute(query, [name, description]);
    return result.insertId;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getAllTeam = async () => {
  const query = "SELECT * FROM team";
  const [result] = await pool.execute(query, []);
  return result;
};

const getTeam = async (id) => {
  if (!id) return null;
  const query = `SELECT * FROM team WHERE id = ?`;
  const result = await pool.execute(query, [id]);
  return result;
};

const teamMember = async (id) => {
  if (!id) return null;
  const query = `SELECT * FROM user WHERE team_id = ?`;
  const [result] = await pool.execute(query, [id]);
  return result;
};
export { addTeam, getAllTeam, getTeam, teamMember };
