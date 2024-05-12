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
    createUrlTxt(sys.argv[1])
    print('url.txt created')
    with open('url.txt') as f:
        urls = f.readlines()
    for url in urls:
        print(url)