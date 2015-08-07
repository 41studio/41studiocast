Posts = new Mongo.Collection('posts');


if (Meteor.isServer) {
  Posts.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 100
  },
  description: {
    type: String,
    label: "Description",
    max: 500
  },
  video_url: {
    type: String,
    label: "Video Url",
    max: 500
  }
}));
