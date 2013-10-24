/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

   attributes: {
    username: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      minLength: 6,
      required: true,
      columnName: 'encrypted_password'
    },

    userId: 'INT',
    firstName: 'string',
    lastName: 'string',
    age: 'INT',
    gender: 'string',
    location: 'string',

    // Define a custom instance method
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }

};
