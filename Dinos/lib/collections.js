Tasks = new Meteor.Collection('tasks');
Fossils = new Meteor.Collection('fossils');

/* Fossils Schema */

var Schema = {};

Schema.Fossil = new SimpleSchema({
	specNum: {
		type: Number,
		label: "Specimen Number",
	},
	locality: {
		type: String,
		label: "Locality"
	},
	coordinates: {
		type: Object,
		label: "Coordinates",
		optional: true
	},
	"coordinates.x": {
		type: Number,
		decimal: true
	},
	"coordinates.y": {
		type: Number,
		decimal: true
	},
	components: {
		type: Array,
		label: "Components",
		optional: true
	},
	"components.$" : {
		type: String
	},
	date: {
		type: Date,
		label: "Date Collected"
	},
	collector: {
		type: String,
		label: "Collector"
	},
	media: {
		type: String,
		label: "Temp field for photo/vid",
		optional: true
	}
});

Fossils.attachSchema(Schema.Fossil);
// Meteor.users.attachSchema(Schema.User);