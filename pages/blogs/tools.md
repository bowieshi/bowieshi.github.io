---
title: 'Creating a Comfortable Environment for Alchemy'
date: 2023-07-05 14:30:36
tags:
---

## How to check GPU occupancy

```shell
nvidia-smi
```

**Reference**

https://blog.csdn.net/weixin_44120025/article/details/115110907

## How to use local computer to show tensorboard in remote server 

```shell
ssh -L 16006:127.0.0.1:6006 astar@inno1.astar.ml
```

```shell
tensorboard --logdir=runs --port=6006
```

On your local machine, go to [http://127.0.0.1:16006](http://127.0.0.1:16006/) and enjoy your remote TensorBoard.

Please be reminded that you should open this website using Chrome (Safari has some problem).

**Reference**

https://stackoverflow.com/questions/37987839/how-can-i-run-tensorboard-on-a-remote-server

## How to keep training in server with local computer shut down

```shell
nohup python train.py --epoch 80 --mode train &
```

output the log in train_log file:

```shell
nohup python train.py --epoch 80 --mode train > train_log &
```

**Reference**

https://blog.csdn.net/uzwuzw/article/details/116199680
