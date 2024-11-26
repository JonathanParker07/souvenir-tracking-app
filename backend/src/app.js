const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const pool = new Pool({
    user: 'postgres',
    host: 'database',
    database: 'souvenirs',
    password: 'password',
    port: 5432,
});

// Routes
app.get('/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/students/:id', async (req, res) => {
    const { id } = req.params;
    const { souvenirs } = req.body;
    try {
        await pool.query('UPDATE students SET souvenirs = $1, received = true WHERE id = $2', [souvenirs, id]);
        res.send('Updated successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(5000, () => console.log('Backend running on port 5000'));
