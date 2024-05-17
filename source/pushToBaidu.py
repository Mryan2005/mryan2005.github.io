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
            if file.endswith('.html'):
                urlc = url + '/' + os.path.join(root, file)[2:]
                # urlc = urlc.encode("utf-8").decode("latin1")
                links.append(urlc)
    return links

if __name__ == '__main__':
    links = createUrlTxt(sys.argv[1])
    siteurl = sys.argv[1]
    baiduToken = sys.argv[2]
    bingToken = sys.argv[3]
    needToPush = []
    # random push 10 urls
    for i in range(0, 10):
        while True:
            choice = links[random.randint(0, len(links) - 1)]
            if choice not in needToPush and "mryan2005.top" in choice:
                needToPush.append(choice.split("/index.html")[0])
                break

    # push to bing
    headers = {
        'Content-Type': 'application/json; charset=utf-8',
        "Host": "ssl.bing.com"
    }
    data = {
        "siteUrl": siteurl,
        "urlList": needToPush
    }
    response = requests.post('https://www.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=' + bingToken, data=json.dumps(data), headers=headers)
    print(response.text)

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