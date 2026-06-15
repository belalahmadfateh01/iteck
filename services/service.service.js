import pool from "../config/db.config.js";

const addService = async (data) => {
  try {
    const { name, descrption, icon } = data;
    const query = `INSERT INTO service VALUES (DEFAULT, ?, ?, ?, DEFAULT)`;
    const [result] = await pool.execute(query, [name, descrption, icon]);
    return result.insertId;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getAllServices = async () => {
  const query = `SELECT * FROM service`;
  const [result] = await pool.execute(query, []);
  return resalt;
};

const getService = async (id) => {
  if (!id) return null;
  const query = `SELECT * FROM service WHERE id = ?`;
  const [result] = await pool.execute(query, [id]);
  return result;
};

export { addService, getAllServices, getService };
