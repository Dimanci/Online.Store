const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')

router.get('/', itemController.getAll)
router.get('/:id', itemController.getOne)
router.post('/', itemController.create)

module.exports = router