const {Router} = require('express');
const router = Router();

const animalsControllers = require('../controllers/animals.controllers')

router.get('/animals', animalsControllers.index);
router.get('/animals/:id', animalsControllers.show);
router.post('/animals', animalsControllers.store);
router.put('/animals/:id', animalsControllers.update);
router.delete('/animals/:id', animalsControllers.delete);

module.exports = router;