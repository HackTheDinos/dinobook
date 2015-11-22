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
