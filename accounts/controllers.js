const pool = require('../queries');

exports.getAccounts = async (req, res) => {
    try {
        const accounts = await pool.query('SELECT * FROM accounts ORDER BY id ASC');
        res.status(200).json(accounts.rows);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.getAccountById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const account = await pool.query('SELECT * FROM accounts WHERE id = $1', [id]);
        res.status(200).json(account.rows);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.createAccount = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const createdAt = new Date();
        const account = await pool.query('INSERT INTO accounts (name, email, password, created_at, updated_at) VALUES ($1, $2, $3, $4, $5)', [name, email, password, createdAt, createdAt]);
        res.status(201).json(`Account ${account.id} has been created`);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.updateAccount = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, email, password } = req.body;

        const updatedAt = new Date();

        const account = await pool.query('UPDATE accounts SET name = $1, email = $2, password = $3, updated_at = $4 WHERE id = $5', [name, email, password, updatedAt, id]);
        res.status(200).json(`Account ${id} has been modified`);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.deleteAccount = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const account = await pool.query('DELETE FROM accounts WHERE id = $1', [id]);
        res.status(200).json(`Account ${id} has been deleted`);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// CREATE TABLE accounts (
//     ID SERIAL PRIMARY KEY,
//     name VARCHAR(25),
//     email VARCHAR(50),
//     password VARCHAR(50),
//     created_at TIMESTAMP WITH TIME ZONE,
//     updated_at TIMESTAMP WITH TIME ZONE
//     );

    