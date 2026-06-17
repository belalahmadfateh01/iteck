import pool from "../config/db.config.js";

const addService = async (data) => {
  try {
    if(!data) throw new Error("No data object provided");

    const { name, description } = data;
    if(!name || !description) throw new Error("name and description not provided");
    
    const query = `
    INSERT INTO service(
    name,
    description)
    VALUES (?, ?)`;

    const [result] = await pool.execute(query, [name, description]);
    return result.insertId;
  } catch (err) {
    console.log(err);
    throw new Error(err.message || 'Error in creating service');
  }
};

const getAllServices = async () => {
  const query = `SELECT * FROM service`;
  const [result] = await pool.execute(query, []);
  return result;
};

const getService = async (id) => {
  if (!id) return null;
  const query = `SELECT * FROM service WHERE id = ?`;
  const [result] = await pool.execute(query, [id]);
  return result[0] ?? null;
};

export { addService, getAllServices, getService };
