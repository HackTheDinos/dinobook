
Router.configure({
  layoutTemplate: 'applicationLayout',
  loadingTemplate: 'loader',
  yieldRegions:{
  	'menu':{to:'menu'}
  },

});


Router.route('/', {
    // options for the route
   	name:'home',
   	layout:'applicationLayout',
   	template:'home',
    waitOn:function(){
		return [Meteor.subscribe('tasks'),Meteor.subscribe('fossils')];
	},
	data: function(){
		return [Tasks.find({}),Fossils.find({})];
	},
});

Router.route('/map',{

	name:'map',
	path: '/map',
	layout:'applicationLayout',
	waitOn:function(){
		return [ Meteor.subscribe('tasks'), Meteor.subscribe('fossils')];


	},

	data: function(){
		return [Tasks.find({}),Fossils.find({})];
	},
	template:'map'
})

Router.route('/fossilList',{

	name:'fossilList',
	path: '/fossilList',
	layout:'applicationLayout',
	waitOn:function(){
		return [ Meteor.subscribe('tasks'), Meteor.subscribe('fossils')];


	},

	data: function(){
		return [Tasks.find({}),Fossils.find({})];
	},
	template:'fossilList'
})

Router.route('/fossilForm',{

	name:'fossilForm',
	path: '/fossilForm',
	layout:'applicationLayout',
	waitOn:function(){
		return [ Meteor.subscribe('tasks'), Meteor.subscribe('fossils')];


	},

	data: function(){
		return [Tasks.find({}),Fossils.find({})];
	},
	template:'fossilForm'
})

