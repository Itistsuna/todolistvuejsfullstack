const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/todoVueJs', {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function() {
	console.log('Connexion à la base OK');
});

const app = express();
app.use(cors())
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true
	})
);

var todoSchema = mongoose.Schema(
	{
		name: String,
		id: Number,
		createdAt: String,
		todo: Boolean,
	},
	{
		collection: 'todo'
	}
);
var Todo = mongoose.model('todo', todoSchema);

app.post('/todo', async (req, res) => {
	try {
		var todo = new Todo(req.body);
		todo.save(function(error) {
			if (error) {
				res.send(error);
			} else {
				res.send(todo + 'a été stockée');
			}
		});
	} catch (error) {
		console.log(error);
	}
});

app.get('/todo', async (req, res) => {
	try {
		data = await Todo.find({});
		res.send(data);
	} catch (error) {
		console.log(error);
	}
});

app.get('/todo/:id', async (req, res) => {
	try {
		data = await Todo.findOne({ id: req.params.id });
		res.send(data);
	} catch (error) {
		console.log(error);
	}
});

app.put('/todo/:id', async (req, res) => {
	try {
		data = await Todo.findOne({ id: req.params.id });
		data.todo = !data.todo;
		data.save();
		res.send(data);
	} catch (error) {
		console.log(error);
	}
});
app.listen(3000, function() {
	console.log('listening on http://localhost:3000/');
});
