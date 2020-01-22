const clientDetails = require('../models/clientDetails')
const billableEmployeesDetails = require('../models/billableEmployees');
const billableEmployeesPackaeDetails = require('../models/billableEmployeesPackageDetails')

exports.postBillableEmployeesDetails = (req, res, next) => {
    let clientName = req.body.clientName
    clientDetails.find({"clientName":clientName}).then(client =>{
        if(client.length>0){
            new billableEmployeesDetails({
                empId: req.body.empId,
                clientName: req.body.clientName,
                empName: req.body.empName,
                dateOfDeployment: req.body.dateOfDeployment,
                contractEndDate: req.body.contractEndDate,
                rateCard: req.body.rateCard,
                stack: req.body.stack,
                yearOfExperience: req.body.yearOfExperience
            }).save().then(billableEmployees => {
                res.json(billableEmployees);
            }).catch(err => {
                console.log(err);
            });
        }else{
            res.json({msg:"client does not exist"})
        }
    })
    // console.log(req.params.compId, req.params.candId);
   
}



exports.getBillableEmployeesDetails = (req, res, next) => {
    billableEmployeesDetails.find().then(BillableEmployeesDetails => {
        // console.log(BillableEmployeesDetails);
        res.json(BillableEmployeesDetails);
    }).catch(err => {
        console.log(err);
    })
}




exports.updateBillableEmployeesDetails = (req, res, next) => {
    let employeeId = req.params._id;
    billableEmployeesDetails.findById(employeeId).then(billableEmployeesDetails => {
        billableEmployeesDetails.dateOfDeployment = req.body.dateOfDeployment;
        billableEmployeesDetails.contractEndDate = req.body.contractEndDate;
        billableEmployeesDetails.rateCard = req.body.rateCard;
        billableEmployeesDetails.stack = req.body.stack;
        billableEmployeesDetails.yearOfExperience = req.body.yearOfExperience;
        billableEmployeesDetails.save();
        res.json(billableEmployeesDetails);
    }).catch(err => {
        console.log(err);
    })
}

exports.deleteBillableEmployeesDetails = (req, res, next) => {
    let id = req.params.id;
    billableEmployeesDetails.findByIdAndRemove(id).then(billableEmployeesDetails => {
        console.log(billableEmployeesDetails);
        res.json(billableEmployeesDetails);
    }).catch(err => {
        console.log(err);
    })
}


//billablePackageData

exports.postBillableEmployeesPackageDetails = (req, res, next) => {
    let billableEmpPackaeDetails = new billableEmployeesPackaeDetails({
        dateOfPaymemtByClient: req.body.dateOfPaymemtByClient,
        dateOfPaymemtByTyss: req.body.dateOfPaymemtByTyss,
        rateCardByClient: req.body.rateCardByClient,
        rateCardByTyss: req.body.rateCardByTyss
    })
    billableEmpPackaeDetails.save().then(billableEmpPackaeDetails => {
        console.log(billableEmpPackaeDetails);
        res.json(billableEmpPackaeDetails);
    }).catch(err => {
        console.log(err);
    });
}


exports.getPackageBillableData= (req, res, next) =>{
    billableEmployeesPackaeDetails.find().then(billablePackagedata => {
            res.json(billablePackagedata);
        }).catch(err => {
            console.log(err);
        });
    }

//     //getting data in dashboard


   
// User.findById(req.params.compId).then(comp => {
//         View.findById(req.params.candId).then(cand => {
//             console.log(comp, cand);
//             new Deploy({
//                 cname: comp.cname,
//                 name: cand.name,
//                 role: cand.role,
//                 contactno: cand.contactno,
//                 email: cand.email,
//                 prevcompany: cand.prevcompany,
//                 prevsalary: cand.prevsalary,
//                 expectsalary: cand.expectsalary,
//                 experience: cand.experience,
//                 notice: cand.notice
//             }).save();
//             console.log(comp.cname);
//             FilledRequirement.find({ "cname": comp.cname }).then(requirement => {
//                 console.log(requirement);
//                 if (requirement.length === 0) {
//                     new FilledRequirement({
//                         cname: comp.cname,
//                         skill: comp.skill,
//                         salary: comp.salary,
//                         location: comp.location,
//                         position: 1
//                     }).save().then(result1 => {
//                         comp.position = comp.position - 1;
//                         comp.save().then(result5 => {
//                             View.findByIdAndRemove(req.params.candId).then(result3 => {
//                                 return res.json({ msg: "candidate deployed" })
//                             })
//                         })
//                     })
//                 } else {
//                     for (let requ of requirement) {
//                         if (comp.position > 1) {
//                             comp.position = comp.position - 1;
//                             comp.save().then(result4 => {
//                                 requ.position = requ.position + 1;
//                                 requ.save().then(result2 => {
//                                     View.findByIdAndRemove(req.params.candId).then(result4 => {
//                                         return res.json({ msg: "candidate deployed" })
//                                     })
//                                 })

//                             })
//                         } else {
                            
//                             requ.position = requ.position + 1;
//                             requ.save().then(result2 => {
//                                 View.findByIdAndRemove(req.params.candId).then(result4 => {
//                                     User.findByIdAndRemove(req.params.compId).then(result6 => {
//                                         return res.json({ msg: "candidate deployed" })
//                                     })
//                                 })
//                             })
//                         }
//                     }
//                 }
//             })
//         })
//     }).catch(err => {
//         console.log(err)
//     })
//     // res.json("got");
// }