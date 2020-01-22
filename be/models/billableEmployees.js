const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

let billableEmployeesSchema = new Schema({
    empId: {
        type: String,
    },
    clientName: {
        type: String,
    },
    empName: {
        type: String,
    },
    dateOfDeployment: {
        type: String
    },
    contractEndDate: {
        type: String
    },
    rateCard: {
        type: Number
    },
    stack: {
        type: String
    },
    yearOfExperience: {
        type: Number
    }

});

autoIncrement.initialize(mongoose.connection);

billableEmployeesSchema.plugin(autoIncrement.plugin, 'billableEmployeesSchema');

module.exports = mongoose.model('BillableEmployee', billableEmployeesSchema);