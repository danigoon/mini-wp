const Article = require('../models/article')

class ArticleController {
    static create(req, res, next) {
        const {title, content} = req.body
        let newArticle = {
            title,
            content,
            author: req.decode.id
        }
        Article.create(newArticle)
            .then(article => {
                res.status(201).json({
                    message: 'succesfully create article.'
                })
            })
            .catch(next)
    }

    static getOne(req, res, next) {
        const {article_id} = req.params
        Article.findById(article_id)
            .then(article => {
                res.status(200).json(article)
            })
            .catch(next)
        
    }

    static delete(req, res, next) {
        Article.deleteOne({_id: req.params.article_id})
            .then(success => {
                res.status(200).json({
                    message: 'sucessfully delete Article.',
                    status: success
                })
            })
            .catch(next)
    }

    static getAll(req, res, next) {
        Article.find({author: req.decode.id})
            .then(articles => {
                res.status(200).json(articles)
            })
            .catch(next)
    }

    static update(req, res, next) {
        const {article_id} = req.params
        const {content, title} = req.body
        Article.update({_id: article_id}, {$set:{content, title}})
            .then(success => {
                console.log(success)
                res.status(200).json({
                    message: 'article successfully updated.'
                })
            })
            .catch(next)
    }
}

module.exports = ArticleController