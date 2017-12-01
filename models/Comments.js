var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  title: String,
  upvotes: {type: Number, default: 0},
});
var StoreSchema = new mongoose.Schema({
  title: String,
  upvotes: {type: Number, default: 0},
  price:{type: Number, default: 0},
  url: {type: String, default: "https://iphoneimei.net/images/attachment/2014/10/24/iphone5.png"},
});

CommentSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
StoreSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Comment', StoreSchema);
