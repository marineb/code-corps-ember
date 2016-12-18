import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  classNameBindings: ['statusClass'],
  classNames: ['funds-recipient', 'account-setup__section'],

  status: computed.alias('account.recipientStatus'),

  statusClass: computed('status', function() {
    return `account-setup__section--${get(this, 'status')}`;
  })
});
