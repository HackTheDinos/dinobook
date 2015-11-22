Template.todoForm.events({
	'submit #submitTask':function(e){
		console.log('submit task');
		e.preventDefault();
		var task = $('#task').val();

			Tasks.insert({
			task: task
		})
			$('#task').val('');

	}
})