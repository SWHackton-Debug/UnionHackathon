# UnionHackathon  
118.67.129.142:3000  


# /translate  
method:POST   
사진에서 추출한 사물의 이름을 번역해서 돌려줍니다.


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
