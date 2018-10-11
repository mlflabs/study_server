// events-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const events = new Schema({
    id: { type: String, required: true },//need this for vis graph and timeline
    content: { type: String, required: false },
    note: { type: String },
    start: { type: Date, required: false },
    end: { type: Date },
    type: { type: String },
    group: { type: String },
    subgroup: { type: String },
    tags: { type: [String]},
    author: { type: [String]},

    to: { type: []},
    from: { type: []},

    viewDayHide: { type: Boolean }, // = 
    viewWeekHide: { type: Boolean },
    viewMonthHide: { type: Boolean },
    viewYearHide: { type: Boolean }, // = 365
    viewDecadeHide: { type: Boolean }, // = 3650
    viewCenturyHide: { type: Boolean }, //= 36500
    viewMilleniumHide: { type: Boolean }, // = 365000 days
    view5MilleniumHide: { type: Boolean }, // = 365000 days

    viewDayLabel: { type: String },
    viewWeekLabel: { type: String },
    viewMonthLabel: { type: String },
    viewYearLabel: { type: String },
    viewDecadeLabel: { type: String },
    viewCenturyLabel: { type: String },
    viewMilleniumLabel: { type: String },
    view5MilleniumLabel: { type: String },


    meta_dirty: { type: Boolean },
    meta_removed: { type: Boolean },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number,  default: Date.now },
  },
  {
    timestamps: false
  });

  return mongooseClient.model('events', events);
};
