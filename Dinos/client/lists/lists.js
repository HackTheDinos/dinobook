Template.fossilList.helpers({
  postList: function () {
    //selector = {collector: Meteor.userId()};
    return Fossils.find({});
  },
  posts: function(){
   
    return Fossils.find({});  
  }
})

Template.todoList.helpers({
  taskList:function(){
    return Tasks.find({});
  }
})
