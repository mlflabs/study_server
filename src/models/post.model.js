// post-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const post = new Schema({
    id: {
      type: String,
      unique: true,
      primaryKey: true,
    },
    text: { type: String, required: false },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number,  default: Date.now },
  }, {
    timestamps: false
  });

  return mongooseClient.model('post', post);
};
