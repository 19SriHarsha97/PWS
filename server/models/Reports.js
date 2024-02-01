const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dailywatersupply = new Schema(
    {
        // suppliedat : {type:Date,required:true},
        reports:{type:Array,required:true},
    },
    {collection:'reports'}
);

const Dailywatersupply = mongoose.model('Dailywatersupply',dailywatersupply);

module.exports = Dailywatersupply;