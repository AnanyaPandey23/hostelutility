const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema({
    rollNo: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required:true
    },
    detail: {
        type: String,
        required:true
    },
    issueDate: {
        type: String,
        required:true
    },
    preferredDate: {
        type: String
    },
    issueResolved: {
        type: String
    },
    preferredTimeFrom: {
        type: String
    },
    preferredTimeTo: {
        type: String
    },
    token: {
        type: String,
        required:true
    }
});

const IssueModel=mongoose.model("issues",issueSchema);
module.exports=IssueModel