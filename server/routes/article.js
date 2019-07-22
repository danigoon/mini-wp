const router = require('express').Router()
const Article = require('../controllers/article')
const {authentication, authorization} = require('../middlewares/auth')

router.use(authentication)
router.get('/', Article.getAll)
router.post('/', Article.create)
router.delete('/:article_id',authorization, Article.delete)
router.get('/:article_id',authorization, Article.getOne)
router.put('/:article_id',authorization, Article.update)

module.exports = router