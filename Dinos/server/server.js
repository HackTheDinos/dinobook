Meteor.publish("tasks", function () {
    return Tasks.find();
  });
Meteor.publish("fossils", function () {
    return Fossils.find();
  });