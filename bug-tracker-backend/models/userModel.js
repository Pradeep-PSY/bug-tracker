const {model, Schema} = require('mongoose');

const userSchema = Schema({
    email:{type: String, required: true},
    password:{type: String, required: true}
})

const userModel = model('user', userSchema);


module.exports = userModel;