import { DataTypes } from 'sequelize';
import sequelize from '../utils/sequelize.js';
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized successfully.');
        // Continue with your code or start the server
    })
    .catch((error) => {
        console.error('Error synchronizing database:', error);
    });
const Person = sequelize.define('Person', {
    PersonID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    LastName: {
        type: DataTypes.STRING,
    },
    FirstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    City: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // ... define other fields as needed
});

export default Person;