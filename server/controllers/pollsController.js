console.log('Polls Controller')
var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var User = mongoose.model('User');

module.exports = (function(){
  return {
    index: function(req, res){
      Poll.find({}, function(err, results){
        if(err){
          res.json(err);
        }else{
          res.json(results);
        }
      })
    },
    create: function(req, res){
      var new_poll = new Poll(req.body);
      new_poll.save(function(err, results){
        if(err){
          res.json(err);
        }else{
          res.json(results);
        }
      })
    },
    add_user: function(req, res){
      var new_user = new User(req.body);
      new_user.save(function(err, results){
        if(err){
          res.json(err);
        }else{
          res.json(results);
        }
      })
    },
    show: function(req,res){
    Poll.find({_id: req.params.id}, function(err, results){
      if (err){
        res.json(err);
      }else{
        console.log('showing:', results)
        res.json(results)
      }
     })
    },
    update: function(req,res){
      Poll.update({_id: req.params.id}, req.body, function(err, results){
       if(err){
         res.json(err);
       }else{
         console.log('successfully updated profile!', results);
         res.json(results);
     }
   })
  },
    delete: function(req, res){
    Poll.remove({ _id: req.params.id }, function(err, results){
      if (err) {
        res.json(err);
      }else{
        res.json(results);
      }
    })
  }
 }
})();
