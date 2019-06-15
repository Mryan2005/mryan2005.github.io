---
title: 如何在Git中使用GPG
date: 2019-06-15 11:34:40
tags: 
- Git
- gpg
categories: Git
---
开篇之前，先给大伙看点东西  

![GitHub Gpg 认证](https://s2.ax1x.com/2019/06/15/VoM7jS.png)

是不是很想要？你找对地方了!  

下面是教程：

## 在 “开始”菜单 打开Git Bash  

### 输入 gpg --gen-key

显示如下

``` bash
$ gpg --gen-key

gpg (GnuPG) 2.2.13-unknown; Copyright (C) 2019 Free Software Foundation, Inc.

This is free software: you are free to change and redistribute it.

There is NO WARRANTY, to the extent permitted by law.

Note: Use "gpg --full-generate-key" for a full featured key generation dialog.

GnuPG needs to construct a user ID to identify your key.

Real name: 这里填GitHub Username

Email address: 这里填GitHub email address private

You selected this USER-ID: # 生成部分

    "你的GitHub Username <你的GitHub email address private>"

Change (N)ame, (E)mail, or (O)kay/(Q)uit? O

We need to generate a lot of random bytes. It is a good idea to perform

some other action (type on the keyboard, move the mouse, utilize the

disks) during the prime generation; this gives the random number

generator a better chance to gain enough entropy.

We need to generate a lot of random bytes. It is a good idea to perform

some other action (type on the keyboard, move the mouse, utilize the

disks) during the prime generation; this gives the random number

generator a better chance to gain enough entropy.

gpg: key 2E728412D609DBC4 marked as ultimately trusted

gpg: revocation certificate stored as '/c/Users/Administrator/.gnupg/openpgp-revocs.d/D511141C8CE2FF942A4DFA542E728412D609DBC4.rev'

public and secret key created and signed.

pub  rsa2048 2019-06-01 [SC] [expires: 2021-05-31]

      D511141C8CE2FF942A4DFA542E728412D609DBC4

uid                        [ultimate] xxxxx <xxxx@xxxx.com>

sub  rsa2048 2019-06-01 [E] [expires: 2021-05-31]
```  

### 输入  gpg --list-keys --keyid-format SHORT

``` bash
gpg --list-keys --keyid-format SHORT

# 返回内容如下

pub  rsa2048/D609DBC4 2019-06-01 [SC] [expires: 2021-05-31]

      D511141C8CE2FF942A4DFA542E728412D609DBC4

uid        [ultimate] xxxxx <xxxx@xxxx.com>
```

### 发布密钥

输入 gpg --send-key 你的密钥，就是rsa2048/xxxxxxx中的xxxxxxx

``` bash
# 例如：

gpg --send-keys D609DBC4
```

## github设置GPG key

### 拷贝上面得到的公钥到github账号中，注意：格式如：开头：

``` bash

-----BEGIN PGP PUBLIC KEY BLOCK----- 
# 结尾：
-----END PGP PUBLIC KEY BLOCK-----
```  

### 请参考把GPG key 加到你的github帐号

## 配置git

### 输入 ```git config --global user.signingkey 你的GPG key ID```

``` bash
# 例如：

git config --global user.signingkey D609DBC4
```

### 输入 ```git config commit.gpgsign true```

### 输入 ```git config --global commit.gpgsign true```

## 配置完成
