const express = require('express');
const router = express.Router();
const billableEmployeesController = require('../controllers/billableEmployees');


//Posting billableEmployees details
router.post('/postBillableEmployeesDetails', billableEmployeesController.postBillableEmployeesDetails);

// router.get('/deployCandidate/:compId/:candId' , candidateController.deployCandidate);


//Getting billableEmployees details 
router.get('/getBillableEmployeesDetails', billableEmployeesController.getBillableEmployeesDetails);


//Updating billableEmployees details
router.post('/updateBillableEmployeesDetails/:_id', billableEmployeesController.updateBillableEmployeesDetails);

//Deleting billableEmployees details
router.delete('/deleteBillableEmployeesDetails/:id', billableEmployeesController.deleteBillableEmployeesDetails);


//Posting billable Employees Package details
router.post('/postBillableEmployeesPackageDetails', billableEmployeesController.postBillableEmployeesPackageDetails);


//getting the billable Employees Package details
router.get('/getBillablePackageData',billableEmployeesController.getPackageBillableData);







module.exports = router;