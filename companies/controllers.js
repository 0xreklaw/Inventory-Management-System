const pool = require('../queries');

exports.getCompanies = async (req, res) => {
    try {
        const companies = await pool.query('SELECT * FROM companies ORDER BY id ASC');
        res.status(200).json(companies.rows);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.getCompanyById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const company = await pool.query('SELECT * FROM companies WHERE id = $1', [id]);
        res.status(200).json(company.rows);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.createCompany = async (req, res) => {
    try {
        const { title, adminId } = req.body;
        const createdAt = new Date();
        const company = await pool.query('INSERT INTO companies (title, admin_id, created_at, updated_at) VALUES ($1, $2, $3, $4)', [title, adminId, createdAt, createdAt]);
        res.status(201).json(`Company ${company.id} has been created`);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// @Note: should update all items associated with company
exports.updateCompany = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, adminId } = req.body;

        const updatedAt = new Date();

        const company = await pool.query('UPDATE companies SET title = $1, admin_id = $2, updated_at = $4 WHERE id = $5', [title, adminId, updatedAt, id]);
        res.status(200).json(`Company ${id} has been modified`);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// @Note: should delete all items associated with company
exports.deleteCompany = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const company = await pool.query('DELETE FROM companies WHERE id = $1', [id]);
        res.status(200).json(`Company ${id} has been deleted`);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// @Note: Should implement SQL script into program so don't have to manueley enter each first time, also good practice :)

// CREATE TABLE companies (
//      ID SERIAL PRIMARY KEY,
//      title VARCHAR(50) UNIQUE NOT NULL,
//      admin_id INTEGER,
//      created_at TIMESTAMP WITH TIME ZONE,
//      updated_at TIMESTAMP WITH TIME ZONE,
//      FOREIGN KEY (admin_id) REFERENCES accounts(id)
//     );