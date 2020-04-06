const puppeteer = require('puppeteer');

(async () => {
	//const browser = await puppeteer.launch();
	const browser = await puppeteer.connect({
		//browserWSEndpoint:"ws://localhost:9222/devtools/page/3A2AEDCC97D0ABA2F6D7C2E2B7868059"
		browserURL:"http://localhost:9222"
	});
	const page = await browser.newPage();
		await page.setViewport({
	  width: 1366,
	  height: 748,
	  deviceScaleFactor: 1,
	});
	await page.goto('http://mail.thunisoft.com/');
	

	await page.evaluate(function(){
		eleuid=document.querySelector('#uid');
		elepassword=document.querySelector('#password');
		
		eleuid.value="";
	});
		
	await page.type('#uid','xuelxiang@thunisoft.com');
	await page.type('#password','6789@jkl');
	await page.click('#login_button');

	await page.evaluate(function(){
		//console.log('2');
		eleuid=document.querySelector('#uid');
		elepassword=document.querySelector('#password');
		
		if(eleuid.textContent != 'xuelixiang@thunisoft.com'|| elepassword.textContent != '6789@jkl'){
			alert('credential incorrect');
		}
		
        elespan=document.querySelector('#logArea > div.tips.Error > span');
		if(elespan){
			alert(elespan.textContent);
			alert('login false');
		
		}
		//alert('not equal');
		
	});

	//await page.waitForSelector('#content_left')
	//	.then(() => console.log('load'));


	//let ele=await page.$('#content_left');
	//console.log(ele.textContent);

	//await page.evaluate((ele) => {
	//	ele=document.querySelector('#content_left');
	//	alert(ele.textContent);
	//	if(ele.textContent != 'hello'){
	//		alert('not equal');
	//	}
	//	if(document.querySelector("#sccc")){
	//		alert('good');
	//	}
	//}, 7);

	//await page.screenshot({path: 'baidu.png'});

	//await browser.close();
})();
