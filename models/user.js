var mongoose = require('mongoose');
    // validate email add
    const bcrypt = require('bcrypt');

    var UserSchema = new mongoose.Schema({
      email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
      },
        password: {
          type: String,
          required: true,
          minlength: 6
        },
         name: {
          type: String,
          unique: true,
          required: true,
          trim: true
        },
        date:{
          type: Date,
          default: Date.now
        }
    });

    UserSchema.pre('save', function (next) {
        var self = this;
        User.find({name : self.name}, function (err, doc) {
            if (!doc.length){
                next();
            }else{
                console.log('user exists: ',self.name);
                next(new Error("User exists!"));
            }
        });
    }) ;


    UserSchema.pre('save', function(next){
      const user = this;
      bcrypt.hash(user.password, 10, function(error, hash){
        if(error){
          return next(error);
        }
        user.password = hash;
        next();
      });
    });



     UserSchema.statics.authenticate = function(name, password, callback) {
     User.findOne({ name: name })
     .exec(function (error, user) {
     if (error) {
     return callback(error);
     } else if ( !user ) {
     var err = new Error('User not found.');
     err.status = 401;
     return callback(err);
     }
     //if the user exists, compare the hashed password to the new hash from req.body.password
     bcrypt.compare(password, user.password , function(error, result) {
     // if passwords are the same return the user
     if (result === true) {
     return callback(null, user);
     } else {
     return callback();
     }
     })
     });
   }

   var User = mongoose.model('User', UserSchema);
      module.exports = User;
