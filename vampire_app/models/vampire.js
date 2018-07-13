console.log("vampire.js is running...");


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
	name: {type: String, required: true},
	hair_color: {type: String, default: "Blonde"},
	eye_color: String,
	dob: String,
	loves: [{type: String}],
	location: String,
	gender: String,
	victims: {
		type: Number,
		min: [0, "Cannot have fewer than zero victims"]
	}
});

const Vampire = mongoose.model("Vampire", vampireSchema);


module.exports = Vampire;


