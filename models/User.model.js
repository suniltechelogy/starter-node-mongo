var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserSchema = new mongoose.Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, required: true },
	city: { type: String, required: true },
	zipcode: { type: String, required: true },
	phone: { type: Number, required: true },
	gender: { type: Number, required: true },
	status: { type: Boolean, required: true, default: 1 }
}, { timestamps: true })

UserSchema.plugin(mongoosePaginate)

const User = mongoose.model('Users', UserSchema)

module.exports = User;