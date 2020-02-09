import chai from 'chai';
// import { checkDirectory } from 'typings-tester';
import AwsPromisify from '../src/index';

describe('aws promisify', () => {
  const doInstance = {
    doFunction: (params, callback) => {
      // callback(undefined, {});
    },
  };
  const wrappedFunction = AwsPromisify(doInstance, doInstance.doFunction);

  it('must return a function', () => {
    chai.assert.isFunction(wrappedFunction);
    chai.assert.strictEqual(wrappedFunction.length, 1);
  });
  describe('handle returned function', () => {
    it('returned function must return Promise', () => {
      const returnedpromise = wrappedFunction();
      chai.assert.isTrue(
        returnedpromise.then && typeof returnedpromise.then === 'function',
      );
    });
  });
});
