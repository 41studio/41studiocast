Meteor.startup(function () {
  if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
      username: 'memen',
      email: 'mada@41studio.com',
      password: 'qwertyuiop',
      roles: ['admin']
    });
  }
});