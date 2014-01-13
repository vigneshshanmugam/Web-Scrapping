var request = require('request'), 
	cheerio = require('cheerio'),
	urls = [];

request('https://news.ycombinator.com/news',function(err,resp,body){

	if(!err && resp.statusCode == 200){

		var $ = cheerio.load(body);
		$('a','.title').each(function(){
			
			var url = this.attr('href');
			urls.push(url);
			console.log(url);
		});
		console.log(urls.length);
	}
	
});