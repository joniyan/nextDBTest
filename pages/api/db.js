import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nextjs_testing',
});

export default function handler(req, res) {
    connection.query('SELECT * FROM persons', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error connecting to database' });
        } else {
            res.status(200).json(results);
        }
    });
}
/*
CREATE TABLE nextjs_testing.Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
 */