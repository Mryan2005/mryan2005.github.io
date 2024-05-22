import os
import sys
import threading
import requests
import random
import json

def createUrlTxt(url):
    links = []
    for root, dirs, files in os.walk("."):
        for file in files:
            if file.endswith('.html') and "Readme" not in file and "README" not in file:
                urlc = url + '/' + os.path.join(root, file)[2:]
                # urlc = urlc.encode("utf-8").decode("latin1")
                links.append(urlc)
    return links

if __name__ == '__main__':
    links = createUrlTxt(sys.argv[1])
    siteurl = sys.argv[1]
    if "indexNew" in sys.argv:
        bingIndexNewToken = sys.argv[3]
    else:
        baiduToken = sys.argv[2]
        bingToken = sys.argv[3]
    needToPush = []
    # random push 10 urls
    for i in range(0, 10):
        while True:
            choice = links[random.randint(0, len(links) - 1)]
            if choice not in needToPush and "www.mryan2005.top" in choice:
                if choice.endswith('index.html'):
                    choice = choice[:-10]
                elif choice.endswith('.html'):
                    choice = choice[:-5]
                needToPush.append(choice)
                break
    print("we will push the url as follow", needToPush)
    # push to bing
    if "indexNew" not in sys.argv:
        headers = {
            'Content-Type': 'application/json; charset=utf-8',
            "Host": "ssl.bing.com"
        }
        data = {
            "siteUrl": siteurl,
            "urlList": needToPush
        }
        response = requests.post('https://www.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=' + bingToken, data=json.dumps(data), headers=headers)
    elif "indexNew" in sys.argv:
        headers = {
            'Content-Type': 'application/json; charset=utf-8',
            "Host": "api.indexnow.org"
        }
        data = {
            "host": siteurl.split('://')[1],
            "key": bingIndexNewToken,
            "keyLocation": siteurl + bingIndexNewToken + '.txt',
            "urlList": needToPush
        }
        response = requests.post('https://www.bing.com/IndexNow', data=json.dumps(data), headers=headers)
    print(response.text)
    if "indexNew" not in sys.argv:
        # push to baidu
        """
        User-Agent: curl/7.12.1
        Host: data.zz.baidu.com
        Content-Type: text/plain
        """
        headers = {
            'Content-Type': 'text/plain',
            "Host": "data.zz.baidu.com",
            "User-Agent": "curl/7.12.1"
        }
        data = '\n'.join(needToPush)
        response = requests.post('http://data.zz.baidu.com/urls?site=' + siteurl + '&token=' + baiduToken, data=data, headers=headers)
        print(response.text)