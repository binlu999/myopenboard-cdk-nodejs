const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const Myboard = require('../lib/myboard-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Myboard.MyboardStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
