Tasks = new Mongo.Collection('tasks');
Fossils = new Mongo.Collection('fossils');


Images = new FS.Collection("images",{
  stores: [new FS.Store.GridFS("images",{path: "~/uploads"})]
});

FossilsIndex = new EasySearch.Index({
    collection: Fossils,
    fields: ['collector'],
    engine: new EasySearch.MongoDB()
  });


Fossils.attachSchema(new SimpleSchema({
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
		type: Array,
		label: "Collector"
	},
	"collector.$": {
		type: String
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