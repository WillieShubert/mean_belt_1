console.log("server routes");

var polls = require('./../controllers/pollsController.js');

module.exports = function(app){
  app.get('/polls', function(req, res) {
  polls.index(req, res);
  });
  app.get('/polls/:id', function(req, res) {
    polls.show(req, res);
  });
  app.post('/polls', function(req, res) {
    polls.create(req, res);
  });
  app.post('/add_user', function(req, res) {
    polls.add_user(req, res);
  });
  app.put('/polls/:id', function(req, res) {
    polls.update(req, res);
  });
  app.delete('/polls/:id', function(req, res) {
    polls.delete(req, res);
  });
}
