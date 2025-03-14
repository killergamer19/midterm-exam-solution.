const express = require('express');
const sequelize = require('./database');
const User = require('./models/user');

const app = express();
const PORT = 3000;