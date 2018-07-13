console.log("app.js is running...");


// 1. Require your node modules
const mongoose = require("mongoose");
const app = mongoose.connection;
const populateVampires = require("./populateVampires");


// 2. Require your model (and possibly your extra data source);
const Vampire = require("./models/vampire")

// 3. Connect your database and collection name
mongoose.connect("mongodb://localhost:27017/vampires");

// 4. Open your mongoose connection
app.on("error", (err) => {
	console.log(err, "Mongoose failed to connect");
});

app.on("connected", () => {
	console.log("mongoose is connected to mongodb");
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(populateVampires, (err, data) => {
	console.log("added provided vampire data");
	mongoose.connection.close();
});

// ### Add some new vampire data
Vampire.create({
	name: "Darian Falkenrath",
	hair_color: "Black",
	eye_color: "Dark Brown",
	dob: "Unknown",
	loves: ["Blood", "Power", "Olivia Voldaren"],
	location: "Bloodspire, Durnvohst",
	gender: "Male",
	victims: 13000
},
{
	name: "Olivia Voldaren",
	hair_color: "Red",
	eye_color: "Gold",
	dob: "Unknown",
	loves:["Blood", "Power", "Herself"],
	location: "Bloodspire, Durnvohst",
	gender: "Female",
	victims: 700
},
{
	name: "Aldwin Stromkirk",
	hair_color: "Silver",
	eye_color: "Silver",
	dob: "Unknown",
	loves: ["Blood", "Power", "The Falkenrath Syndicate"],
	location: "Bloodspire, Durnvohst",
	gender: "Male",
	victims: 200
},
{
	name: "Maria Stromkirk",
	hair_color: "Blonde",
	eye_color: "Amber",
	dob: "Unknown",
	loves: ["Blood", "Power", "Aldwind Stromkirk"],
	location: "Bloodspire, Durnvohst",
	gender: "Female",
	victims: 128
}
);

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
