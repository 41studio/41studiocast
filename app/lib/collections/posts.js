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
  video_url: {
    type: String,
    label: "Video Url",
    max: 200
  },
  description: {
    type: String,
    label: "Description",
    max: 500,
    autoform: {
      afFieldInput: {
        type: "summernote",
        rows: 7,
        class: "editor",
        settings: {
          height: 300
        }
      }
    }
  }
}));
