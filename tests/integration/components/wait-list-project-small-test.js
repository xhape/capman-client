import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wait-list-project-small', 'Integration | Component | wait list project small', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wait-list-project-small}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wait-list-project-small}}
      template block text
    {{/wait-list-project-small}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
