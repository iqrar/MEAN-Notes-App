
module.exports = function(app,mongojs,db){
app.get('/notes', function(req, res){
	db.Notes.find(function(err, result){
		if(err){
			res.send(err);
		} else {
			
			res.json(result);
		}
	});
});

app.get('/notes/:id', function(req, res){
	db.Notes.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, result){
		if(err){
			res.send(err);
		} else {
			
			res.json(result);
		}
	});
});

app.post('/notes', function(req, res){
	db.Notes.insert(req.body, function(err, result){
		if(err){
			res.send(err);
		} else {
			
			res.json(result);
		}
	});
});

app.put('/notes/:id', function(req, res){
	db.Notes.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},
            update:{$set:{
			note: req.body.note,
			type:req.body.type,
			priority:req.body.priority,
			description:req.body.description
		}},
		new: true
}, function(err, result){
		if(err){
			res.send(err);
		} else {
			res.json(result);
		}
	});
});

app.delete('/notes/:id', function(req, res){
	db.Notes.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, result){
		if(err){
			res.send(err);
		} else {
			res.json(result);
		}
	});
});

};