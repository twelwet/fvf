'use strict';

require(`dotenv`).config();
const express = require(`express`);
const path = require(`path`);
const PORT = process.env.SERVER_PORT;
const {placesByPriority, priorityNames} = require(`./prepared-data`);

const app = express();

app.set(`json spaces`, 2);
app.use(express.json());

const PUBLIC_DIR = `../../public`;

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.use(express.urlencoded({extended: false}));

app.set(`views`, `./src/server/templates`);
app.set(`view engine`, `pug`);

app.get(`/`, (req, res) => {
  const pageContent = {placesByPriority, priorityNames};
  res.render(`main`, pageContent);
});

app.listen(
    PORT,
    () => console.log(`Server starts on port: ${PORT}`)
);
