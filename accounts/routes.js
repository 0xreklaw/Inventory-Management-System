const express = require("express");
const router = express.Router();

const {
    getAccounts, 
    getAccountById,
    createAccount,
    updateAccount,
    deleteAccount
} = require("./controllers");

router.route('/').get(getAccounts);
router.route('/:id').get(getAccountById);
router.route('/').post(createAccount);
router.route('/:id').put(updateAccount);
router.route('/:id').delete(deleteAccount);

module.exports = router;