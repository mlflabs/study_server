// appEvents-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const appEvents = new Schema({
    text: { type: String, required: true },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number,  default: Date.now },
  }, {
    timestamps: false
  });

  return mongooseClient.model('appEvents', appEvents);
};
