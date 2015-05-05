Template.about.events({ 
"click .aboutButton": function (event, template) {
    window.history.pushState("", "", "/about");
    Session.set('currentPostName', 'about');
    $('#postModal').openModal();
  },
});