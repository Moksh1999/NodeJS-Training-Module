var http=require('http');
var dt=require('./Myfirstmodule');
var url=require('url');
var sec=require('./secondmudule');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-type':'text/html'});
//  res.write('Hello World');
  var q=url.parse(req.url,true).query;
  res.write("Todays\'s date is : "+dt.mydate());
  var txt=q.year+" "+q.month;
  res.write("<br>");
  res.write(txt);
  res.write(sec.secmod());

}).listen(3030);
