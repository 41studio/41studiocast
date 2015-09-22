var imageStore = new FS.Store.S3("images", {
  region: "ap-southeast-1", //optional in most cases
  accessKeyId: "AKIAIFFELCCQYLGRAE3A", //required if environment variables are not set
  secretAccessKey: "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", //required if environment variables are not set
  bucket: "41studiocast", //required
  maxTries: 2 //optional, default 5
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});


Images.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  download: function (userId) {
    return true;
  }
});