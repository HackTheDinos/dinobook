
Router.route('/', {
    // options for the route
    template: 'home',
    waitOn:function(){
		return [Meteor.subscribe('tasks'),Meteor.subscribe('fossils')];
	},
	data: function(){
		return [Tasks.find({}),Fossils.find({})];
	},
});
