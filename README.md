# UnionHackathon  
118.67.129.142:3000  

# /translate  
method:POST   

## request  
body{  
	source: 원본 언어(en)  
	target: 목표언어(kr)  
	text: 번역할 문장  
}  

## response  
{  
	"message": {  
		"@type": "response",  
		"@service": "naverservice.nmt.proxy",  
		"@version": "1.0.0",  
		"result": {  
			"srcLangType": "ko",  
			"tarLangType": "en",  
			"translatedText": "ten thousand",  
			"engineType": "PRETRANS",  
			"pivot": null  
		}  
	}  
}  
