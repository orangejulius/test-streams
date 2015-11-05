var JSONStream = require('JSONStream');
var fs = require('fs');
var es = require('event-stream');
var CombinedStream = require('combined-stream');


var combinedStream = CombinedStream.create();
var fileStream = fs.createReadStream('test.json');
var fileStream2 = fs.createReadStream('test2.json');

combinedStream.append(fileStream);
combinedStream.append(fileStream2);


combinedStream.pipe(JSONStream.parse())
.pipe(es.mapSync(function(data) {
    console.log(data);
    return data;
}));
