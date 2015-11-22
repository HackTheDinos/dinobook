Template.fossilList.helpers({
  posts: function(){
   
    return Fossils.find({});  
  }
})

Template.todoList.helpers({
  taskList:function(){
    return Tasks.find({});
  }
})

Template.todoList.events({
	'click .deleteTodo':function(){
		console.log('remove');
		Tasks.remove(this._id);
	}
})