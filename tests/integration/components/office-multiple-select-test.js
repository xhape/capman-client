import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('office-multiple-select', 'Integration | Component | office multiple select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{office-multiple-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#office-multiple-select}}
      template block text
    {{/office-multiple-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
