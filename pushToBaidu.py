import os
import sys
import threading

def createUrlTxt(url):
    links = []
    for root, dirs, files in os.walk("."):
        for file in files:
            if file.endswith('.html'):
                links.append(url + '/' + os.path.join(root, file)[2:])
    return links

if __name__ == '__main__':
    links = createUrlTxt(sys.argv[1])
    siteurl = sys.argv[1]
    baiduToken = sys.argv[2]
    id = 1
    for i in range(len(links)):
        if i % 20 == 0:
            file = open('urls{}.txt'.format(id), 'w')
            file.write(links[i]+ '\n')
            id += 1
        else:
            file.write(links[i]+ '\n')
    print('urls.txt created')
    threads = []
    for i in range(1, id):
        thread = threading.Thread(target=os.system, args=("curl -H \'Content-Type:text/plain\' --data-binary @urls{}.txt \"http://data.zz.baidu.com/urls?site={}&token={}\"".format(i, siteurl, baiduToken),))
        threads.append(thread)
        thread.start()
    for thread in threads:
        thread.join()
    print('All urls have been pushed to Baidu')