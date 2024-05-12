import requests
import os
import sys

def createUrlTxt(url):
    with open('url.txt', 'w') as f:
        for root, dirs, files in os.walk('public'):
            for file in files:
                if file.endswith('.html'):
                    f.write(url + '/' + os.path.join(root, file)[7:] + '\n')

if __name__ == '__main__':
    createUrlTxt("https://www.mryan2005.top")