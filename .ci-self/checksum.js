let crypto = require('crypto'),
  fs = require('fs');

let algorithm = 'sha1',
  shasum = crypto.createHash(algorithm);

s = fs.ReadStream(process.argv[2]);

s.on('data', function (data) {
  shasum.update(data);
});

s.on('end', function () {
  var hash = shasum.digest('hex');
  console.log(hash);
});
