// blog-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const blog = new Schema({
    heading: { type: String, required: true },
    slug: { type: String, required: false },
    body: { type: String, required: true },

    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number,  default: Date.now },
  }, {
    timestamps: false
  });

  return mongooseClient.model('blog', blog);
};
