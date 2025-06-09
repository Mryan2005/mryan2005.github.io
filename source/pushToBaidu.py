import os
import sys
import requests
import random
import json
import logging

logging.basicConfig(level=logging.INFO)

def create_url_list(base_url):
    """生成所有 HTML 文件的完整 URL 列表"""
    links = []
    for root, dirs, files in os.walk("."):
        for file in files:
            if file.endswith('.html') and "Readme" not in file and "README" not in file:
                url = base_url + '/' + os.path.join(root, file)[2:]
                links.append(url)
    return links

def push_to_service(url, headers, data, service_name):
    """通用推送函数"""
    try:
        response = requests.post(url, data=json.dumps(data) if headers['Content-Type'] == 'application/json; charset=utf-8' else data, headers=headers)
        print(f"{service_name} Response: {response.text}")
        print(f"{service_name} Status Code: {response.status_code}")
    except requests.RequestException as e:
        print(f"Error pushing to {service_name}: {e}")

if __name__ == '__main__':
    if len(sys.argv) < 4:
        print("Usage: python pushToBaidu.py <site_url> <baidu_token> <bing_token> [indexNew]")
        sys.exit(1)

    site_url = sys.argv[1]
    links = create_url_list(site_url)
    need_to_push = random.sample([link for link in links if "blog.mryan2005.top" in link], min(10, len(links)))

    print("We will push the following URLs:", need_to_push)

    if "indexNew" in sys.argv:
        bing_index_new_token = sys.argv[3]
        headers = {
            'Content-Type': 'application/json; charset=utf-8',
            "Host": "api.indexnow.org"
        }
        data = {
            "host": "blog.mryan2005.top",
            "key": bing_index_new_token,
            "keyLocation": f"{site_url}/{bing_index_new_token}.txt",
            "urlList": need_to_push
        }
        push_to_service('https://www.bing.com/IndexNow', headers, data, "Bing IndexNow")
    else:
        baidu_token = sys.argv[2]
        bing_token = sys.argv[3]

        # 推送到 Bing
        headers = {
            'Content-Type': 'application/json; charset=utf-8',
            "Host": "ssl.bing.com"
        }
        data = {
            "siteUrl": site_url,
            "urlList": need_to_push
        }
        push_to_service(f'https://www.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey={bing_token}', headers, data, "Bing")

        # 推送到百度
        headers = {
            'Content-Type': 'text/plain',
        }
        
        api = f'https://data.zz.baidu.com/urls?site={site_url}&token={baidu_token}'
        response = requests.post(api, data='\n'.join(need_to_push), headers=headers, verify=False)  # 添加 verify=False
        logging.info(f"Pushed to Baidu: {need_to_push}")