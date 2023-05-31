import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nextjs_testing', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

// (async () => {
//     await sequelize.sync({ alter: false });
//     console.log('Mysql synced');
//     //process.exit();
// })();

export default sequelize;