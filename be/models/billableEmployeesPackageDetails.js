const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let billableEmployeesPackageDetailsSchema = new Schema({
    dateOfPaymemtByClient: {
        type: String
    },
    dateOfPaymemtByTyss: {
        type: String
    },
    rateCardByClient: {
        type: Number
    },
    rateCardByTyss: {
        type: Number
    }
});



module.exports = mongoose.model('BillableEmployeesPackageDetail', billableEmployeesPackageDetailsSchema);