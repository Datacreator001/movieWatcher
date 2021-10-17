const path = require('path');
const fs = require('fs').promises;

const { db } = require('./db');
const { Movie, User } = require("./models/Index");

const seed = async () => {
	async function seedModel(modelName, fileName, modelClass) {
		await db.sync({ force: true });

		const seedPath = path.join(__dirname, fileName);
		const buffer = await fs.readFile(seedPath);

		const { data } = JSON.parse(String(buffer));

		const modelPromises = data.map((item) => modelClass.create(item));
		await Promise.all(modelPromises);
		console.log(`${modelName} was just populated.`);
	}

	seedModel('Movie', 'movie.json', Movie);
	seedModel('User', 'user.json', User);
};

//export my seed function
module.exports = seed;
