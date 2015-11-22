Tasks = new Mongo.Collection('tasks');
Fossils = new Mongo.Collection('fossils');


Images = new FS.Collection("images",{
  stores: [new FS.Store.GridFS("images",{path: "~/uploads"})]
});

FossilsIndex = new EasySearch.Index({
    collection: Fossils,
    fields: ['collector','locality','coordinates','components','specNum'],
    engine: new EasySearch.Minimongo()
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
		decimal: true,
		max: 180,
		min: -180
	},
	"coordinates.y": {
		type: Number,
		decimal: true,
		max: 85,
		min: -85
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