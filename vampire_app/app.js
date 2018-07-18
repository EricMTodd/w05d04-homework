console.log("app.js is running...");


// 1. Require your node modules
const mongoose = require("mongoose");
const app = mongoose.connection;
const populateVampires = require("./populateVampires");


// 2. Require your model (and possibly your extra data source);
const Vampire = require("./models/vampire")

// 3. Connect your database and collection name
const url = "mongodb://localhost:27017/vampires";
mongoose.connect(url, { useNewUrlParser:true });

// 4. Open your mongoose connection
app.on("error", (err) => {
	console.log(err, "Mongoose failed to connect");
});

app.on("connected", () => {
	console.log("Mongoose is connected.");
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(populateVampires, (err, data) => {
	if (err) {
		console.log("Failed to add provided vampire data.");
	} else {
		console.log("Successfully added provided vampire data.");
		// ### Add some new vampire data
Vampire.create({
	name: "Darian Falkenrath",
	hair_color: "Black",
	eye_color: "Dark Brown",
	dob: "Unknown",
	loves: ["Blood", "Power", "Olivia Voldaren"],
	location: "Bloodspire, Durnvohst",
	gender: "m",
	victims: 13000
},
{
	name: "Olivia Voldaren",
	hair_color: "Red",
	eye_color: "Gold",
	dob: "Unknown",
	loves:["Blood", "Power", "Herself"],
	location: "Bloodspire, Durnvohst",
	gender: "f",
	victims: 700
},
{
	name: "Aldwin Stromkirk",
	hair_color: "Silver",
	eye_color: "Silver",
	dob: "Unknown",
	loves: ["Blood", "Power", "The Falkenrath Syndicate"],
	location: "Bloodspire, Durnvohst",
	gender: "m",
	victims: 200
},
{
	name: "Maria Stromkirk",
	hair_color: "Blonde",
	eye_color: "Amber",
	dob: "Unknown",
	loves: ["Blood", "Power", "Aldwind Stromkirk"],
	location: "Bloodspire, Durnvohst",
	gender: "f",
	victims: 128
}, (err, createdVampires) => {
	if (err) {
		console.log("Failure to create vampires.");
	} else {
		console.log("Falkenrath and Stromkirk families successfully created.");
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Find all female vampires and log responses to the console.
Vampire.find( { gender: { $eq: 'f' } }, (err, femaleVampires) => {
	if (err) {
		console.log("Female vampies not found, search failed");
	} else {
		console.log("Female vampires successfully found.", femaleVampires);
// Find all vampires with victims greater than 500 and log responses to the console.
Vampire.find( { victims: { $gt: 500 } }, (err, victimsGreaterThanFiveHundred) => {
	if (err) {
		console.log("Failed to find vampires with victims greater than 500.");
	} else {
		console.log("Successfully found vampires with victims greater than 500.", victimsGreaterThanFiveHundred);
// Find all vampires with victims less than or equal to 150 and log responses to the console.
Vampire.find( { victims: { $lte: 150 } }, (err, victimsFewerThanOrEqualToOneHundredFifty) => {
	if (err) {
		console.log("Failed to find vampires with victims fewer than or equal to 150.");
	} else {
		console.log("Successfully found vampires with victims fewer than or equal to 150.", victimsFewerThanOrEqualToOneHundredFifty);
// Find all the vampires that have a victim count not equal to 210234.
Vampire.find( { victims: { $ne: 210234 } }, (err, victimsNotEqualToTwoHundredTenThousandTwoHundredThirtyFour) => {
	if (err) {
		console.log("Failed to find vampires with victims not equal to 210234.");
	} else {
		console.log("Successfully found vampires with victims not equal to 210234.", victimsNotEqualToTwoHundredTenThousandTwoHundredThirtyFour);
// Find all the vampires that have victims greater than 150 and fewer than 500.
Vampire.find( { victims: { $gt: 150 } && { $lt: 500 } }, (err, victimsGreaterThanOneHundredFiftyAndFewerThanFiveHundred) => {
	if (err) {
		console.log("Failed to find vampires that have victims greater than 150 and fewer than 500.");
	} else {
		console.log("Successfully found vampires that have victims greater than 150 and fewer than 500.", victimsGreaterThanOneHundredFiftyAndFewerThanFiveHundred);
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Find all vampires that have a title property.
Vampire.find( { title: { $exists: true } }, (err, titleExists) => {
	if (err) {
		console.log("Failed to find vampires that have a title property.");
	} else {
		console.log("Successfully found all vampires that have a title property.", titleExists);
// Find vampires that do not have a victims propery.
Vampire.find( { victims: { $exists: false } }, (err, victimsDoNotExist) => {
	if (err) {
		console.log("Failed to find vampires that do not have a victims propery.");
	} else {
		console.log("Successfully found vampires that do not have a victims propery.", victimsDoNotExist);
// Find all vampires that have a title and no victims. (Barnabas Spenser)
Vampire.find( { $and: [ { title: { $exists: true } }, { victims: { $exists: false } } ] }, (err, titleAndNoVictims) => {
	if (err) {
		console.log("Failed to find vampires that have a title and no victims.");
	} else {
		console.log("Successfully found vampires that have a title and no victims.", titleAndNoVictims);
// Find all vampires that have victims and their count is greater than 1000.
Vampire.find( { victims: { $gt: 1000 } }, (err, victimsGreaterThanOneThousand) => {
	if (err) {
		console.log("Failed to find vampires with victims greater than 1000.");
	} else {
		console.log("Successfully found vampires with victims greater than 1000.", victimsGreaterThanOneThousand);
// Select all vampires that are from New York, New York, US or New Orleans, Louisiana, US.

// Clears out the vampire collection to ensure every time the code is run, what is created with in the code is not duplicated. The connection is then closed upon a successful clear.
Vampire.remove({}, (err, reset) => {
	if (err) {
		console.log("Failed to clear vampires collection.");
	} else {
		console.log("Successfully cleared vampires collection.");
		mongoose.connection.close();
	}
});
	}
});	
	}
});
	}
});
	}
});
	}
});
	}
});
	}
});
	}
});
	}
});
	}
});
	}
});






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
