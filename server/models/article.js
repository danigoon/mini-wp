const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    author: {type: Schema.Types.ObjectId, ref: 'User'}
},{
    versionKey:false,
    timestamps:true
});

const Article = mongoose.model('Todo', articleSchema);

module.exports = Article;