Tasks = new Meteor.Collection('tasks');
Fossils = new Meteor.Collection('fossils');

/* Fossils Schema */

var Schema = {};

Schema.Fossil = new SimpleSchema({
	specNum: {
		type: String,
		label: "Specimen Number",
	},
	locality: {
		type: String,
		label: "Locality"
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