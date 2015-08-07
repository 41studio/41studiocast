/*****************************************************************************/
/* EditPost: Event Handlers */
/*****************************************************************************/
Template.EditPost.events({
});

/*****************************************************************************/
/* EditPost: Helpers */
/*****************************************************************************/
Template.EditPost.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete post: "' + doc.title + '"?')) {
      this.remove();
      Router.go('posts');
    }
  };
 }
});

/*****************************************************************************/
/* EditPost: Lifecycle Hooks */
/*****************************************************************************/
Template.EditPost.onCreated(function () {
});

Template.EditPost.onRendered(function () {
});

Template.EditPost.onDestroyed(function () {
});
