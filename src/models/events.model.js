// events-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const events = new Schema({
    content: { type: String, required: false },
    note: { type: String },
    start: { type: Date, required: false },
    end: { type: Date },
    type: { type: String },
    group: { type: String },
    subgroup: { type: String },
    tags: { type: [String]},


    _dirty: { type: Boolean },
    _newid: { type: Boolean },
    _removed: { type: Boolean },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: false
  });

  return mongooseClient.model('events', events);
};
