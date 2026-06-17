import pool from "../config/db.config.js";

const addUser = async (data) => {
    const { first_name, last_name, job, role } = data;

    if (!first_name || !last_name || !role) {
        throw new Error(
            'first name, last name and role are required'
        );
    }

    const validRoles = [
        'team_member',
        'common_member'
    ];

    if (!validRoles.includes(role)) {
        throw new Error('Invalid role, role must be (common_member or team_member)');
    }

    const query = `
        INSERT INTO users (
            first_name,
            last_name,
            job,
            role
        )
        VALUES (?, ?, ?, ?)
    `;

    const [result] = await pool.execute(query, [
        first_name,
        last_name,

        job ?? null,
        role
    ]);

    return result.insertId;
};

const getAllUsers = async () => {
  const query = `SELECT * FROM users`;
  const [result] = await pool.execute(query, []);
  return result;
};

const getUser = async (id) => {
  if (!id) return null;
  const query = `SELECT * FROM users WHERE id = ?`;
  const [result] = await pool.execute(query, [id]);
  return result[0] ?? null;
};

export { addUser, getAllUsers, getUser }
