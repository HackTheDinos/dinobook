 Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

Template.search.helpers({
  FossilsIndex: () => FossilsIndex
});

Template.search.events({
  'keypress input':function(event){
  	console.log('het');
    Router.go('/search')
    if (event.keyCode == 13) {
        event.preventDefault();
    }
  }
});