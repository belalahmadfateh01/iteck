import pool from "../config/db.config.js";

const addProject = async (data) => {
  try {
    if(!data) throw new Error("No data object provided");
  
    const { name, technology_type, description, tag } = data;
    if(!name || !technology_type || !description || !tag) throw new Error("name, technology, description and tage are required");
    
    const qurey = `
    INSERT INTO project(
    name,
    technology_type,
    description,
    tag)
    VALUES (?, ?, ?, ?)`;

    const [result] = await pool.execute(qurey, [
      name,
      technology_type,
      description,
      tag
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
  if (!id) throw new Error("No id provided");
  const query = `SELECT * FROM project WHERE id = ?`;
  const [result] = await pool.execute(query, [id]);
  return result;
};

export { addProject, getAllProject, getProject };
