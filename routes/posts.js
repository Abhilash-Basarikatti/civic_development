const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  caption: String,
  like: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }],
  comments: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  },
  shares: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }],
  picture: String
})


module.exports = mongoose.model("post", postSchema);



// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user'
//   },
//   caption: String,
//   like: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user'
//   }],
//   comments: {
//     type: Array,
//     default: []
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   shares: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user'
//   }],
//   picture: String,
//   city: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'City' // reference to the City model
//   }
// });

// module.exports = mongoose.model('Post', postSchema);
