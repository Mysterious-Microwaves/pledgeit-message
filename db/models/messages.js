const db = require('../');

const Message = db.Model.extend({
  tableName: 'messages',
  orgs: function() {
    return this.belongsTo('Org');
  }
});

module.exports = db.model('Message', Message);
