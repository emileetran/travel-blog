Template.about.events({ 
"click .aboutButton": function (event, template) {
    $('#aboutModal').openModal();
    window.history.pushState("", "", "/about");
  },
});