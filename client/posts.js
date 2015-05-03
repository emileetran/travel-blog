window.Posts = new Meteor.Collection('posts');

Meteor.subscribe('visible-posts');

Session.setDefault('currentPostName', 'patong');

Meteor.startup(function() {
  $('#postModal').openModal();
})

Template.post.helpers({
  showPost: function() {
    var currentPostName = Session.get('currentPostName');

    if(!currentPostName) {
      return false;
    }

    var currentPost = Posts.findOne({
      name: currentPostName,
    });

    if(!currentPost) {
      return false;
    }

    return true;
  },
  content: function() {
    var currentPostName = Session.get('currentPostName');
    var currentPost = Posts.findOne({
      name: currentPostName,
    })
    return currentPost.content;
  }
});