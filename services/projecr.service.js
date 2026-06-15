import pool from "../config/db.config.js";

const addProject = async (data) => {
  try {
    const { name, technology_type, description, tag, image } = data;
    const qurey = `INSERT INTO project VALUES (DEFAULT, ?, ?, ?, ?, ?, DEFAULT)`;
    const [result] = await pool.execute(qurey, [
      name,
      technology_type,
      description,
      tag,
      image,
    ]);
    return result.insertId;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getAllProject = async () => {
  const qurey = "SELECT * FROM project";
  const [result] = await pool.execute(qurey, []);
  return result;
};

const getProject = async (id) => {
  if (!id) return null;
  const query = `SELECT * FROM project WHERE id = ?`;
  const [result] = await pool.execute(query, [id]);
  return result;
};

export { addProject, getAllProject, getProject };
