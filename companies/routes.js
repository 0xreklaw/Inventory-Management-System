const express = require("express");
const router = express.Router();

const {
    getCompanies, 
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany
} = require("./controllers");

router.route('/').get(getCompanies);
router.route('/:id').get(getCompanyById);
router.route('/').post(createCompany);
router.route('/:id').put(updateCompany);
router.route('/:id').delete(deleteCompany);

module.exports = router;