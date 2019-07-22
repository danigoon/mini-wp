const { verifyToken } = require('../helpers/jwt');
const Article = require('../models/article');
module.exports = {
	authentication(req, res, next) {
		if (req.headers.hasOwnProperty('token')) {
			try {
				const decode = verifyToken(req.headers.token);
				req.decode = decode;
				next();
			} catch (err) {
				console.log(err);
				res.status(403).json(err);
			}
		} else {
			res.status(403).json({
				message: 'Authentication failed.'
			});
		}
	},
	authorization(req, res, next) {
		console.log(req.params);
		Article.findById(req.params.article_id)
			.populate('author')
			.then((article) => {
				console.log(article)
				if (article.author._id == req.decode.id) {
					next();
				} else {
					throw new Error('unauthorized proccess.');
				}
			})
			.catch((err) => {
				res.status(403).json({
					message: 'forbidden process.',
					detail: err.message
				});
			});
	}
};
