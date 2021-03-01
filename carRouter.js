const express = require("express");

const router = express.Router();

const db = require("./data/config");

router.get("/", (req, res, next) => {
	res.json({
		message: "Welcome",
	});
});

router.get("/cars", async (req, res, next) => {
	try {
		res.status(200).json(await db("car-dealer"));
	} catch (err) {
		next(err);
	}
});
router.post("/cars", async (req, res, next) => {
	try {
		const [id] = await db("car-dealer").insert(req.body);
		const car = await db("car-dealer").where({ id }).first();
		res.status(201).json(car);
	} catch (err) {
		next(err);
	}
});
module.exports = router;
