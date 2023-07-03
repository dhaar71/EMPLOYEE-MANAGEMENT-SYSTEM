const express = require('express')
const{
    createEmpl,
    getDept,
    deleteEmpl,
    updateEmpl
} = require('../controllers/datacontrollers')

const router = express.Router()

router.use(express.json()); // Middleware for parsing JSON request bodies


router.get('/', getDept);
router.get('/:id', getDept);
router.post('/', createEmpl);
router.get('/:id', deleteEmpl);
router.patch('/:id', updateEmpl);


module.exports = router;