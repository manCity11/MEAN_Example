var Post = require('../models/post');

module.exports.postList = function(req, res){
	Post.find(function(err, results){
		if(err){
			res.status(500).json({
				message: 'Impossible to retrieve data'
			});
		}
		else{
			res.json(results);
		}
	});
}

module.exports.postDetail = function(req, res){
	Post.findOne({slug: req.params.slug}, function(err, result){
		if(err){
			res.status(500).json({
				message: 'Impossible to retrieve data'
			});
		}
		else{
			res.status(200).json(result);
		}
	});
}

module.exports.postCreate = function(req, res){
	var postTmp = new Post({
		title: req.body.title,
		content: req.body.content
	});

	postTmp.save(function(err){
		if(err){
			res.status(500).json({
				message: 'Failed to save data'
			});
		}
		else{
			res.status(200).json({
				message: 'Post saved'
			});
		}
	});
}

module.exports.postDelete = function(req, res){
	Post.remove({slug: req.params.slug}, function(err){
		if(err){
			res.status(500).json({
				message: 'Failed to delete data'
			});
		}
		else{
			res.status(200).json({
				message: 'Data successfully deleted'
			});
		}
	});
}

module.exports.postUpdate = function(req, res){
	if(req.body.title == null && req.body.content == null){
		res.status(500).json({
			message: 'Failed to update data'
		});
	}
	else{
		if(req.body.title == null){
			Post.findOneAndUpdate({slug: req.params.slug}, {content: req.body.content}, function(err, result){
				if(err){
					res.status(500).json({
						message: 'Failed to update data'
					});
				}
				else{
					res.status(200).json(result);
				}
			});
		}
		else if(req.body.content == null){
			Post.findOneAndUpdate({slug: req.params.slug}, {title: req.body.title}, function(err, result){
				if(err){
					res.status(500).json({
						message: 'Failed to update data'
					});
				}
				else{
					res.status(200).json(result);
				}
			});
		}
		else{
			Post.findOneAndUpdate({slug: req.params.slug}, {title: req.body.title, content: req.body.content}, function(err, result){
				if(err){
					res.status(500).json({
						message: 'Failed to update data'
					});
				}
				else{
					res.status(200).json(result);
				}
			});
		}
	}
}
