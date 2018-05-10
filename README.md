# aws-sample
A *nodejs* + *express* app setup using *ui-routes* along with *material-angular* framework
This app is also using other important library like:
      
     ```"@uirouter/angularjs": "^1.0.16",
        "angular": "^1.6.10",
        "angular-animate": "^1.6.10",
        "angular-aria": "^1.6.10",
        "angular-material": "^1.1.9",
        "angular-messages": "^1.6.10",
        "angular-ui-router": "^1.0.3",
        "aws-sdk": "^2.233.1",
        "cookie-parser": "~1.4.3",
        "debug": "~2.6.9",
        "ejs": "~2.5.7",
        "express": "~4.16.0",
        "http-errors": "~1.6.2",
        "morgan": "~1.9.0"
        "grunt": "^1.0.2",
        "grunt-contrib-concat": "^1.0.1"```

**AWS-SDK API communication**

- authenticate API key and API token
- List/ Create/ Delete Buckuct
- List/ Upload/ Delete Buckuct content

**how to use it**

min requirement is `node`, `npm` and `express` to be installed.

- just use `npm install` command, wait it to finish
- `npm start` to run the node server
- to use `aws s3` communication you have to set up .env variable

```var AWS = require('aws-sdk');
    var s3 = new AWS.S3({
    //signatureVersion: 'v4'
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_TOKEN
});```

let us know if you need help. Thank you visiting my project.
