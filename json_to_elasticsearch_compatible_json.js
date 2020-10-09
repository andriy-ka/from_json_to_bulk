var inputFile = "D:\\IntelliJ IDEA 2020.2.2\\IdeaProjects\\from-json-to-bulk\\input.json";

var outputFile = "D:\\IntelliJ IDEA 2020.2.2\\IdeaProjects\\from-json-to-bulk\\output.json";

var index = "barkomsession";

var type= "_doc";

var fs = require('fs');

var jsonContent = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

var stream = fs.createWriteStream(outputFile);

stream.once('open', function(fd) {

    for(var object in jsonContent)
    {
        //For _id as sequence no.

        //stream.write("{ \"index\" : { \"_index\" : \""+index+"\", \"_type\" : \""+type+"\", \"_id\" : \""+object+"\" } }\n")

        //For _id as document id
        stream.write("{ \"index\" : { \"_index\" : \""+index+"\", \"_type\" : \""+type+"\", \"_id\" : \""+jsonContent[object]._id+"\" } }\n")

        stream.write(JSON.stringify(jsonContent[object]._source)+"\n")
    }

    stream.end();
});