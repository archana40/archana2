const express = require('express');
const router = express.Router();
const billableEmpDashboardController = require('../controllers/billableEmpDashboard');

//Getting billableEmployees details count
router.get('/getBillableEmployeesDetailsCount', billableEmpDashboardController.getBillableEmployeesDetailsCount);

