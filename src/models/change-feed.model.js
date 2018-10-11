// changeFeed-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const changeFeed = new Schema({
    date: { type: Number, default: Date.now, sparse: true },
    col: { type: String, required: true },
    action: { type: String, required: true },
    isDelete: {type: Boolean },
    user: {type: String, required: true },
    doc: {type: {}},
  }, {
    timestamps: false
  });

  return mongooseClient.model('changeFeed', changeFeed);
};
