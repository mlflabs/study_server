// groups-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const groups = new Schema({
    //id: { type: String },
    content: { type: String, required: true },
    color: { type: String, required: false},
    //visible: { type: Boolean, required: false},
    _nestedGroups: [String],

    author: { type: String },
    
    meta_dirty: { type: Boolean },
    meta_removed: { type: Boolean },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number,  default: Date.now },
  }, {
    timestamps: false
  });

  return mongooseClient.model('groups', groups);
};


//d102b4fc5f110d6242415fb7, d1024f2a5f110d6242415fb4, d100d56395cf09b26e735fa1, 
//