const fs = require('fs');

const args = process.argv.slice(2);

const GROUP = args[0];
const FILE_NAME = args[1];
const fileStream = fs.createReadStream(FILE_NAME);

const ACCESS_KEY = 'NLWIIA606I4YF95OTWFJ';
const SECRET_KEY = 'U3wOfftBVm1GBD99P7SkXyxt2XCjg0jTE1VPidfT';
const S3_BUCKET = 'nk-schools';

const AWS = require('aws-sdk');

const s3opts = {
  region: 'ocdn',
  endpoint: 'ocdn.eu',
  s3ForcePathStyle: true,
  sslEnabled: true,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  signatureVersion: 's3',
  computeChecksums: false,
};

const S3 = new AWS.S3(s3opts);

const putParams = {
  Bucket: S3_BUCKET,
  Key: SECRET_KEY,
  Body: fileStream,
  ContentType: 'multipart/archive; type=zip',
  Key: GROUP + '/szkoly'
};

S3.putObject(putParams, function(putErr, putData){
  if(putErr){
    console.error(putErr);
  } else {
    console.log(putData);
  }
});