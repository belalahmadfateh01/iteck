import pool from "../config/db.config.js";

const addTeam = async (data) => {
  try {
    if(!data) throw new Error("No data object provided");
    
    const { name, description } = data;
    if(!name || !description) throw new Error("name or description not provided");
    
    const query = `
    INSERT INTO team(
    name,
    description)
    VALUES (?, ?)`;
    const [result] = await pool.execute(query, [name, description]);
    return result.insertId;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const getAllTeam = async () => {
  const query = "SELECT * FROM team";
  const [result] = await pool.execute(query, []);
  return result;
};

const getTeam = async (id) => {
  if (!id) throw new Error("No id provided");

  const query = `SELECT * FROM team WHERE id = ?`;
  const [result] = await pool.execute(query, [id]);
  console.log(result);
  return result;
};

const getTeamMembers = async (id) => {
  if (!id) throw new Error("No id provided");

  const query = `SELECT * FROM users WHERE team_id = ?`;
  const [result] = await pool.execute(query, [id]);
  return result;
};

const addTeamMember = async (userId, teamId) => {
  try {
    const query = `
    UPDATE users SET team_id = ? WHERE id = ?
    `;

    const [result] = await pool.execute(query, [teamId, userId]);
    return result;

  } catch (err) {
    console.log(err);
    throw new Error(err.message || 'Error in adding member to team');
  }
}

export { addTeam, getAllTeam, getTeam, getTeamMembers, addTeamMember };
