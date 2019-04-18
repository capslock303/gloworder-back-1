const Joi = require('joi')

const userSchema = Joi.object()
  .keys({
    firstName: Joi.string().alphanum().min(1).max(30).required(),
    lastName: Joi.string().alphanum().min(1).max(30).required(),
    phone: Joi.string.alphanum().min(10).max(11).required(),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    // RegEx Password Requirements - 2 uppercase, 1 special char, 2 digits, 3 lowercase
    password: Joi.string().regex(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])$/).min(8).max(100).required(),
    DOB: Joi.date().timestamp('javascript')
})

module.exports = userSchema