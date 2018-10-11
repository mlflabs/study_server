// test-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const test = new Schema({
    text: { type: String, required: false },
    id: { type: String, required: false},

    meta_dirty: { type: Boolean },
    meta_removed: { type: Boolean },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number,  default: Date.now },
  }, {
    timestamps: false
  });

  return mongooseClient.model('test', test);
};
