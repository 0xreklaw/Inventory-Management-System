const express = require("express");
const router = express.Router();

const {

} = require("./controllers");

// router.route('/').get(getAccounts);
// router.route('/:id').get(getAccountById);
// router.route('/').post(createAccount);
// router.route('/:id').put(updateAccount);
// router.route('/:id').delete(deleteAccount);

module.exports = router;


// @Resource: https://mysql.tutorials24x7.com/blog/guide-to-design-database-for-inventory-management-system-in-mysql
// Item
// id
// title
// summary
// type
// created at
// updated at
// content

// Item_Meta
// id
// item_id
// key
// content
// item url scan

//@Note
// Need tables for ordering item, address, order table (recipt), transaction 

// account, item, item type, manufacterer, item location