var http=require('http');
var url=require('url');
var events=require('events');
var eventEmitter=new events.EventEmitter();


function checker(){
http.createServer((req,res)=>{
    //res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello Guys\n");
    //Reading Query String
                // var x=req.url;
                // res.write(x+"\n");



    //Reading Params
    var y=url.parse(req.url,true).query;
    var k=y.name+" "+y.roll;
    res.write(k);
    res.end("\nBbye");
}).listen(3003);
}

eventEmitter.on('check',checker);

eventEmitter.emit('check');