Template.join.events({
  'click .back__home': function() {
    Router.go('home');
  },
  'click .github_login' : function() {
    Meteor.loginWithGithub({loginStyle: "redirect"});
  }
})