Tasks = new Meteor.Collection('tasks');
Fossils = new Meteor.Collection('fossils');


Images = new FS.Collection("images",{
  stores: [new FS.Store.GridFS("images",{path: "~/uploads"})]
});

/* Fossils Schema */

//var Schema = {};

Fossils.attachSchema(new SimpleSchema({
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
	fileId: {
		type: String,
		optional: true
	}
}))

//Fossils.attachSchema(Schema.Fossil);
// Meteor.users.attachSchema(Schema.User);



Images.deny({
 insert: function(){
 return false;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 },
 download: function(){
 return false;
 }
 });

Images.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});