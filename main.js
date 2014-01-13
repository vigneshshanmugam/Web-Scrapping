var request = require('request'),
	cheerio = require('cheerio'),
	// fs = require('fs');
	urls = [];

request('http://www.reddit.com/',function(err,resp,body){

	if(err){
		console.log(err);
	}

	if(!err && resp.statusCode == 200){

		var $ = cheerio.load(body);
		$('a.title').each(function(){

			var url = this.attr('href');
			urls.push(url);
		});
		console.log(urls);
	}


});