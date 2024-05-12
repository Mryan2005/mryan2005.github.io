import requests
import os
import sys

def createUrlTxt(url):
    with open('urls.txt', 'w') as f:
        for root, dirs, files in os.walk("."):
            for file in files:
                if file.endswith('.html'):
                    f.write(url + '/' + os.path.join(root, file)[:] + '\n')

if __name__ == '__main__':
    createUrlTxt(sys.argv[1])
    print('urls.txt created')
    with open('urls.txt') as f:
        urls = f.readlines()
    for url in urls:
        print(url)