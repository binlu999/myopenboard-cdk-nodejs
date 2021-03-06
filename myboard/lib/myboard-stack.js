const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3')

class MyboardStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    new s3.Bucket(this, 'myboard-test',{
      bucketName:"myboard-test",
      versioned:true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    })
    // The code that defines your stack goes here
  }
}

module.exports = { MyboardStack }
