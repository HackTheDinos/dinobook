 Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

Template.search.helpers({
  FossilsIndex: () => FossilsIndex
});


Template.imageView.helpers({
  images: function () {

    return Images.find({_id:this.fileId}); // Where Images is an FS.Collection instance
  }
});