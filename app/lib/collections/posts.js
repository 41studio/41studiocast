Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {

  Meteor.startup(function () {
    if (Posts.find().count() === 0) {
      Posts.insert({title: "41studio is hiring!", 
        video_url: "http://www.youtube.com/embed/DokUjuZmpCE",
        description: "41studio is hiring and hiring again"
      })
    }
  });

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

Posts.friendlySlugs(
  {
    slugFrom: 'title',
    slugField: 'slug',
    distinct: true,
    updateSlug: true
  }
)

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
  tags: {
    type: String,
    label: "Tags",
    max: 200,
    optional: true,
    autoform: {
      type: 'tags'
    }
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
  },
  slug: {
    type: String,
    optional: true
  }
}));
