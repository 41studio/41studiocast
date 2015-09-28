/*****************************************************************************/
/* Posts: Event Handlers */
/*****************************************************************************/
Template.Posts.events({
});

/*****************************************************************************/
/* Posts: Helpers */
/*****************************************************************************/
Template.Posts.helpers({
  posts: function() {
    return Posts.find();
  },
  image: function(){
    return Images.findOne({_id: this.image_cover});
  }
});

/*****************************************************************************/
/* Posts: Lifecycle Hooks */
/*****************************************************************************/
Template.Posts.onCreated(function () {
});

Template.Posts.onRendered(function () {
});

Template.Posts.onDestroyed(function () {
});
