// groups-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const groups = new Schema({
    content: { type: String, required: true },
    color: { type: String, required: false},
    visible: { type: Boolean, required: false},

    _dirty: { type: Boolean },
    _newid: { type: Boolean },
    _removed: { type: Boolean },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }, {
    timestamps: false
  });

  return mongooseClient.model('groups', groups);
};
