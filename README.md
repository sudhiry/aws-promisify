# aws-promisify

[![build status](https://img.shields.io/travis/sudhiry/aws-promisify/master.svg?style=flat-square)](https://travis-ci.org/sudhiry/aws-promisify)
[![npm version](https://img.shields.io/npm/v/aws-promisify.svg?style=flat-square)](https://www.npmjs.com/package/aws-promisify)
[![npm downloads](https://img.shields.io/npm/dm/aws-promisify.svg?style=flat-square)](https://www.npmjs.com/package/aws-promisify)


## Installtion

```js
npm install aws-promisify
```

## Usage 

You can use `aws-promisify` to wrap any `aws-sdk` function with promise. Following are some of the examples.

For DynamoDB queries:

```js
import AWS from 'aws-sdk';
import aws_promisify from 'aws-promisify';

const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'YOUR_REGION',
    accessKeyId: 'YOUR_AWS_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY'
})

const params = {
    // Any parameters required by aws-sdk dynamodb documentation
    TableName: 'YOUR_TABLE_NAME',
}

aws_promisify(dynamoDb, dynamoDb.scan)(params).then((data) => {
    // Here will be output of your Dynamodb query 
    console.log(data)
}).catch((err) => {
    // If anything fails you can catch error here.
    console.error(err)
})

```

For S3:

```js
import AWS from 'aws-sdk';
import aws_promisify from 'aws-promisify';

const S3 = new AWS.S3()

const params = {
    // Any params listed by aws-sdk S3 documentation
    Bucket: 'YOUR_S3_BUCKET_NAME',
    ACL: 'YOUR_ACL_SCOPE', // For example 'public-read'
}

aws_promisify(S3, S3.createBucket)(params).then((data) => {
    // Here will be output of your S3 operation
    console.log(data)
}).catch((err) => {
    // If anything fails you can catch error here.
    console.error(err)
})

```

If you are using `async await` 

```js

import AWS from 'aws-sdk';
import aws_promisify from 'aws-promisify';

const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'YOUR_REGION',
    accessKeyId: 'YOUR_AWS_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY'
})

// You can also implement this using async await
const scan  = async (params) => {
    try {
        // Here will be output of your Dynamodb query 
        const data = await aws_promisify(dynamoDb, dynamoDb.scan)(params)

        return data
    } catch (err) {
        console.error(err)
    }
    
}
```

## License

MIT