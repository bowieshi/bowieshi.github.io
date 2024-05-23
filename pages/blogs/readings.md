---
title: 'Readings'
date: 2023-07-18 15:00:19
tags:
---
15/5/2024
一次帮你搞懂Haskell Monad: https://www.zhihu.com/tardis/bd/art/675783382?source_id=1001

10/5/2024
样本标准差为什么不是总体标准差的无偏估计量？： https://www.zhihu.com/question/44898621
无偏估计和最小方差无偏估计简介: https://blog.csdn.net/weixin_43413559/article/details/126042228

7/5/2024
React Hooks 面试宝典：https://blog.csdn.net/m0_66139206/article/details/130539513

3/5/2024
图解 script 标签中的 async 和 defer 属性： https://juejin.cn/post/6894629999215640583

1/5/2024
显著性水平与pvalue：如何避免常见错误：https://blog.csdn.net/universsky2015/article/details/135808750
总体方差未知时，为什么要用t分布来进行假设检验？（BIO100A，随想，不定期更新）： https://zhuanlan.zhihu.com/p/91012612
如何理解统计学中「自由度」这个概念？: https://www.zhihu.com/question/20983193/answer/3268909062?utm_psn=1701968916212146176

30/4/2024
由浅入深理解 Fisher 信息（3）——从10种不同的角度和深度理解 Fisher information: https://zhuanlan.zhihu.com/p/589321752
29/4/2024
奇异值分解（SVD）原理总结： https://mp.weixin.qq.com/s?__biz=MzU0NjgzMDIxMQ==&mid=2247611288&idx=5&sn=44d0f740c99adb204aab1ae1d57fc737&chksm=fb54d174cc23586219d4f75ff389fb624a834669dab829c16d8004989cc7e8bbfd1c8c7d0a45&scene=27&poc_token=HGZEL2ajFxSWx_EhJCvE8MJ50USj0HvI_F_XFqwK

What are the conditions on tr(𝐴𝐵)≤tr(A)tr(B) tr(AB)≤tr(A)tr(B) to be true? https://math.stackexchange.com/questions/3061871/what-are-the-conditions-on-texttrab-leq-texttra-texttrb-to-be

28/4/2024
Haskell: 表达式的计算顺序: https://blog.csdn.net/WinterShiver/article/details/106603695
27/4/2024
JavaScript基础 -- 模式匹配: https://www.cnblogs.com/abigale/p/5151956.html

26/4/2024
【C/C++服务器开发】事件驱动、事件驱动架构、事件驱动编程及设计模式: https://blog.csdn.net/qq_41854911/article/details/121708382
并发模型与事件循环: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop

20/4/2024
统计学意义——看懂文献统计部分的基础知识: https://www.bilibili.com/read/cv9131310/
15/4/2024
SIFT (Bag of features) + SVM for classification: https://liverungrow.medium.com/sift-bag-of-features-svm-for-classification-b5f775d8e55f
Training of SVM classifier using SIFT features: https://stackoverflow.com/questions/19048891/training-of-svm-classifier-using-sift-features
SIFT(尺度不变特征变换): https://blog.csdn.net/u014693851/article/details/131620134
（三）对图像进行Gauss高斯平滑处理： https://blog.csdn.net/rhyijg/article/details/106937800

14/4/2024
“Yeah, we first do one measure before we do anything else” 是的我们做任何事情前首先要做测量
我们不停地对qubit进行测量，发现

13/4/2024
思考概率究竟是什么？ 概率也是人类为了描述物理世界的规律而设定的一个概念，通过不同的立足点而产生两种学派：1.频率学派；2.贝叶斯学派。其实世界上并没有说参数和性质都完全确定的模型，我们只是从观测到的统计数据中抽象建模，来描述事件。比如抛硬币，谁也无法知道一个硬币抛到正面是多少可能性，只是猜测是1/2，但这个1/2只是理想情况下，有很多其他因素导致这个硬币抛到正面的概率不是1/2(硬币制造的误差，磨损，没有完全公正的抛)，所以和1/2始终都有偏差。频率派认为这个概率是个客观存在的定值，可以通过重复实验然后取极限来逼近。贝叶斯学派认为这个概率是我们主关上通过观测得到的知识而推断出来的，而非客观存在的。举一个极端的例子，昨天下雨了，这是一个已经发生的事情，但有一个人一直被关在小黑屋里，不知道这个事件，他会说我认为昨天下雨的概率是1/2，这是他根据过往经验而有的prior probability。然后我可以告诉他昨天的湿度，温度等各种信息，他可以由此来修正自己的判断形成新的概率，这就是后验概率。

“贝叶斯学派并不试图说「事件本身是随机的」，或者「世界的本体带有某种随机性」，这套理论根本不言说关于「世界本体」的东西，而只是从「观察者知识不完备」这一出发点开始，构造一套在贝叶斯概率论的框架下可以对不确定知识做出推断的方法。频率学派下说的「随机事件」在贝叶斯学派看来，并不是「事件本身具有某种客观的随机性」，而是「观察者不知道事件的结果」而已，只是「观察者」知识状态中尚未包含这一事件的结果。
贝叶斯概率论试图构建的是知识状态的表征，而不是客观世界的表征。因此，在机器学习、统计推断中，许多情况下贝叶斯概率推断更能解决观察者推断的问题，而绕开了关于事件本体的讨论，因为没有讨论本体的必要性。

贝叶斯概率仍然只是一个实数，而概率分布是推断者根据自己的知识状态赋予参数在某集合内取各个值的可信度，因此概率分布表征了推断者的知识状态。”
from ZHIHU 贝叶斯学派与频率学派有何不同？任坤的回答。https://www.zhihu.com/question/20587681
“总之，概率但定义有些不同。贝叶斯派倾向于定义为believe it or not，频率学派倾向于定义为will it happen or not。”

Monty hall problem: 用贝叶斯学派的思想其实也是对的，其实主持人开了一扇没有奖品的门，我们需要充分挖掘这个信息来更新我们的猜测，余下的那个门其实更可能是有奖品的。

如何在Git中忽略DS_Store文件: https://blog.csdn.net/weixin_46660849/article/details/134831185
Multi-armed bandits:多臂老虎机: https://zhuanlan.zhihu.com/p/655158238?utm_id=0
11/4/2024
电子的自旋： https://baijiahao.baidu.com/s?id=1774387977780540643&wfr=spider&for=pc

10/4/2024
基于SVM的cifar10分类: https://blog.csdn.net/haronchou/article/details/106541162


11686 RBF 核函数背后隐藏着怎样的映射？: https://zhuanlan.zhihu.com/p/135898326
彻底理解为什么三角函数系具有正交性: https://zhuanlan.zhihu.com/p/341796771
深入理解正交函数： https://zhuanlan.zhihu.com/p/338045910
傅里叶分析之掐死教程（完整版）更新于2014.06.06: https://zhuanlan.zhihu.com/p/19763358

‘我在日报评论过。形象化的方式学数学终究不是出路，总希望将抽象具体化，并不是个好习惯。
基的理解，可以说是解决线性问题基本，作者应该是感受不深，文中关于这个问题有误导性。
从巴拿赫空间和希尔伯特空间入手去理解函数，向量，线性，结果会发现傅立叶变换真的很普通，和空间中求点的坐标无异。
希望能给你以后的学习带来帮助。函数是向量或者矩阵。两个函数乘积的积分就是两个向量的内积，内积就是投影。所以傅立叶变换，其实是向量在一组基上的投影，得到每个方向的值。





这里有一条数轴，在数轴上有一个红色的线段，它的长度是1。当它乘以3的时候，它的长度发生了变化，变成了蓝色的线段，而当它乘以-1的时候，就变成了绿色的线段，或者说线段在数轴上围绕原点旋转了180度。

我们知道乘-1其实就是乘了两次 i使线段旋转了180度，那么乘一次 i 呢——答案很简单——旋转了90度。




你眼中看似落叶纷飞变化无常的世界，实际只是躺在上帝怀中一份早已谱好的乐章。
抱歉，这不是一句鸡汤文，而是黑板上确凿的公式：傅里叶同学告诉我们，任何周期函数，都可以看作是不同振幅，不同相位正弦波的叠加。在第一个例子里我们可以理解为，利用对不同琴键不同力度，不同时间点的敲击，可以组合出任何一首乐曲。

9/4/2024
【直观理解+证明】证明高维空间随机取两个向量几乎正交+n维球上任取两点的夹角概率密度函数: https://zhuanlan.zhihu.com/p/379542285
完备空间: https://zh.wikipedia.org/zh-cn/完备空间
柯西序列: https://zh.wikipedia.org/wiki/柯西序列
如何理解希尔伯特空间？:https://www.zhihu.com/question/19967778
浅谈度量空间（metric space）： https://zhuanlan.zhihu.com/p/54041981
中科大团队用超导量子计算机证明量子力学复数描述的重要意义: https://baijiahao.baidu.com/s?id=1724355698806185262&wfr=spider&for=pc
从零开始几何处理：RBF函数： https://zhuanlan.zhihu.com/p/413596878


8/4/2024
sklearn支持向量机（SVM）多分类问题: https://blog.csdn.net/Yvesx/article/details/111201301
第十三章 图像特征Vol.1：全局特征与区域特征:https://zhuanlan.zhihu.com/p/627467549
LBP（局部二值模式）特征提取原理: https://blog.csdn.net/shenziheng1/article/details/72582197
方向梯度直方图（Histogram of Oriented Gradient）:https://blog.csdn.net/weixin_48524215/article/details/130308255
Histogram of Oriented Gradients explained using OpenCV: https://learnopencv.com/histogram-of-oriented-gradients/

6/4/2024
对话斯坦福Mobile ALOHA机器人团队赵子豪：惊艳和不完美都只是开始: https://tech.ifeng.com/c/8XkhVj4EAN8
机器人工程师学习计划: https://zhuanlan.zhihu.com/p/22266788
串口通信与波特率: https://zhuanlan.zhihu.com/p/613206493#:~:text=波特率即串口,38400、57600和115200等%E3%80%82&text=因此，在通信双方约定,准确无误地解析数据%E3%80%82

4/4/2024
CISC和RISC的区别以及对比: https://c.biancheng.net/view/ztwj6r1.html
X86-64 Assembly常用知识点整理: https://zhuanlan.zhihu.com/p/411300340

3/4/2024
贝叶斯方法和频率方法的根本区别在于随机性存在的位置。在频率论领域内，数据被认为是随机的，参数（如均值、方差）是固定的。在贝叶斯领域中，参数是随机的，数据是固定的。
一文读懂机器学习中的贝叶斯统计学: https://www.jiqizhixin.com/articles/2019-05-06-4

1/4/2024
Infimum and supremum: https://en.wikipedia.org/wiki/Infimum_and_supremum

21/3/2024
非线性方程求解:不动点迭代（Fixed-point iteration）: https://zhuanlan.zhihu.com/p/636502569?utm_id=0
Soft Value function基础和Soft Q Learning中Policy Improvement 证明: https://blog.csdn.net/weixin_39059031/article/details/104755576
"统计学和机器学习的目的是基于数据在概率分布的特征进行推断。"
马尔可夫链蒙特卡罗法: https://zhuanlan.zhihu.com/p/619564589
最大熵原理: https://baike.baidu.com/item/最大熵原理/9938383?fr=ge_ala

19/3/2024
torch.contiguous()方法: https://blog.csdn.net/qq_37828380/article/details/107855070

17/3/2024
微元法与随机变量的变换: https://zhuanlan.zhihu.com/p/347514024

12/3/2024
重参数化技巧: https://zhuanlan.zhihu.com/p/542478018


11/3/2024
pycharm远程连接并自动同步代码详细教程: https://blog.csdn.net/weixin_43912994/article/details/118613389

10/3/2024
英语中Syntax和Grammar的区别: https://baijiahao.baidu.com/s?id=1628032235691049766&wfr=spider&for=pc
什么是函数式编程思维？: https://www.zhihu.com/question/28292740
纯函数式编程语言中的变量也不是命令式编程语言中的变量，即存储状态的单元，而是代数中的变量，即一个值的名称。变量的值是不可变的（immutable），也就是说不允许像命令式编程语言中那样多次给一个变量赋值。比如说在命令式编程语言我们写“x = x + 1”，这依赖可变状态的事实，拿给程序员看说是对的，但拿给数学家看，却被认为这个等式为假。

9/3/2024
图解PyTorch中的torch.gather函数: https://zhuanlan.zhihu.com/p/352877584

7/3/2024
相机标定之张正友标定法数学原理详解（含python源码: https://zhuanlan.zhihu.com/p/94244568
相机模型与去畸变方法详解: https://blog.csdn.net/weixin_44543463/article/details/120659447
常见的几种编码方式: https://zhuanlan.zhihu.com/p/259504907
最近邻搜索(NN)、最大内积搜索（MIPS）与(A)LSH算法：https://zhuanlan.zhihu.com/p/111502331
向量范数与矩阵范数：https://zhuanlan.zhihu.com/p/35897775
最大化内积搜索相关研究 (Maximum Inner Product Search, MIPS): https://blog.csdn.net/qq_41552508/article/details/129144650

4/3/2024
基尼指数在机器学习中的奥秘: https://zhuanlan.zhihu.com/p/545157674
基于Delaunay图的快速最大内积搜索算法：https://zhuanlan.zhihu.com/p/133526632

22/2/2024
如何理解 95% 置信区间？: https://www.zhihu.com/question/26419030
19/2/2024
Understanding Fuzzy String Matching: Exploring Fuzz Ratio, Fuzz Partial Ratio, Token Set Ratio, and Token Sort Ratio: Machine Learning Concept 78: https://medium.com/@chandu.bathula16/understanding-fuzzy-string-matching-exploring-fuzz-ratio-fuzz-partial-ratio-token-set-ratio-and-d6892430f53c
16/2/2024
使用 SSH 连接到 GitHub: https://blog.csdn.net/henry_23/article/details/126178149
SSH 公钥 私钥的理解: https://zhuanlan.zhihu.com/p/134349361?utm_medium=social&utm_oi=1005183544871772160&utm_id=0
Monte-Carlo（蒙特卡罗）算法: https://blog.csdn.net/weixin_39094034/article/details/108105755

12/2/2024
.DS_Store 文件是什么？: https://www.zhihu.com/question/20345704

10/2/2024
一部接近完美的电影，《教父1》深度解析: https://zhuanlan.zhihu.com/p/511129121
3步搞定Namesilo域名解析: https://zhuanlan.zhihu.com/p/663147863
Namesilo域名解析详细教程: https://www.zhudc.com/website/2413
在 Ubuntu 中安装 Apache、MySQL、PHP（LAMP）套件: https://linux.cn/article-13041-1.html

5/2/2024
python之typing使用: https://zhuanlan.zhihu.com/p/637347770

24/1/2024
浅谈beam splitter(分光镜)：https://zhuanlan.zhihu.com/p/30332021
光子的偏振（狄拉克量子力学原理第一章第二节）: https://zhuanlan.zhihu.com/p/391517902
python 理解BN、LN、IN、GN归一化、分析torch.nn.LayerNorm()和torch.var()工作原理: https://blog.csdn.net/Next_SummerAgain/article/details/130168838?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-130168838-blog-107939602.235%5Ev40%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-130168838-blog-107939602.235%5Ev40%5Epc_relevant_anti_vip&utm_relevant_index=1
pytorch 中的乘法*，@，torch.dot(), torch.matmul(), torch.mm(), torch.mul(), torch.bmm(): https://blog.csdn.net/whitesilence/article/details/119033117
一文搞懂pytorch中的乘法: https://blog.csdn.net/MrR1ght/article/details/105660981
广播的执行过程：
1.如果维度个数不同，则在维度较少的左边补1，使得维度的个数相同。
2.各维度的维度大小不同时，如果有维度为1的，直接将该维拉伸至维度相同
PyTorch nn.Module中的self.register_buffer()解析: https://zhuanlan.zhihu.com/p/464825510


23/1/2024

mac&linux配置环境变量详解: https://blog.csdn.net/qq_39208536/article/details/125660945

21/1/2024

协方差矩阵与多元正态分布: https://blog.51cto.com/u_15899958/5909831

17/1/2024

linux export命令（export指令）source命令（source指令): https://blog.csdn.net/Dontla/article/details/130205534

11/1/2024

Why do we "pack" the sequences in PyTorch?: https://stackoverflow.com/questions/51030782/why-do-we-pack-the-sequences-in-pytorch

pyi文件是干嘛的？（一文读懂Python的存根文件和类型检查: https://www.cnblogs.com/chester-cs/p/14000921.html

8/1/2024

为什么要叫滤波，因为measurement会上下抖动（噪音），通过平均进行smooth，去出噪音所以叫滤波

![image-20240108001235182](/Users/bowieshi/Library/Application Support/typora-user-images/image-20240108001235182.png)

4/1/2024

聊聊Google Cloud：谷歌云：https://backend.devrank.cn/traffic-information/7205238842469779514

1/1/2024

Entailment: https://www.ultius.com/glossary/linguistics/entailment.html#:~:text=Entailment%20is%20a%20concept%20that,entailed%20by%20the%20first%20sentence.

30/12/2023

Perplexity in Language Models: https://towardsdatascience.com/perplexity-in-language-models-87a196019a94

28/12/2023

metadata: https://www.techtarget.com/whatis/definition/metadata#:~:text=Often%20referred%20to%20as%20data,of%20the%20information%20it%20describes.

一网打尽——学术知识图谱: https://www.jianshu.com/p/4391b3163052

F1 Score in Machine Learning: Intro & Calculation: https://www.v7labs.com/blog/f1-score-guide

23/12/2023

什么是Baseline Model？记和硅谷大佬的一次吃饭: https://zhuanlan.zhihu.com/p/29185180

18/11/2023

为什么偏导数符号不代表微商含义呢? https://www.zhihu.com/question/365437244

Multivariable calculus local linearity: https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/jacobian/v/local-linearity-for-a-multivariable-function

13/11/2023

伽马分布族与贝塔分布族（豪华版）:https://zhuanlan.zhihu.com/p/593803954?utm_id=0

20/10/2023

LaTeX伪代码: https://blog.csdn.net/qq_44947550/article/details/127251802

VS Code + LaTeX: https://zhuanlan.zhihu.com/p/108095566

18/10/2023

IDEA project JDK is not define solution: https://blog.csdn.net/m0_45888043/article/details/121056598

AI Agent：大模型与场景间的价值之桥，但不适合当纯技术看: https://baijiahao.baidu.com/s?id=1774910307383706852&wfr=spider&for=pc

AI Agent发展简史，从哲学思想启蒙到人工智能实体落地: https://www.thepaper.cn/newsDetail_forward_24960521

细说AI-Agent（二更）https://www.zhihu.com/tardis/bd/art/657737603?source_id=1001

8/10/2023

AI Agent：基于大模型的自主智能体，在探索AGI的道路上前进: https://baijiahao.baidu.com/s?id=1775256253589962285&wfr=spider&for=pc

25/9/2023

概率论中，相互独立和两两独立有何区别？：https://www.zhihu.com/question/464863145

24/9/2023

深度学习笔记：finetune和linear probing的区别：https://blog.csdn.net/weixin_48018951/article/details/130261908

【Linear Probing | 线性探测】深度学习 线性层：https://blog.csdn.net/LemonShy2019/article/details/125852323

23/9/2023

一文搞懂什么是ablation study (消融实验）：https://zhuanlan.zhihu.com/p/644502891

What is a Long Tail Distribution? (Definition & Example): https://www.statology.org/long-tail-distribution/

如何学习信息论？：https://www.zhihu.com/question/30310304

什么是「互信息」？：https://www.zhihu.com/question/304499706/answer/544609335?utm_id=0

「图分类研究」最新2022综述：https://zhuanlan.zhihu.com/p/467251376

20/9/2023

GIN：逼近WL-test的GNN架构: https://ifwind.github.io/2021/07/03/GIN：逼近WL-test的GNN架构/

什么是Weisfeiler-Lehman(WL)算法和WL Test？ https://zhuanlan.zhihu.com/p/90645716/

《SVM笔记系列之六》支持向量机中的核技巧那些事儿 https://www.cnblogs.com/FesianXu/p/13283800.html

如何理解正定矩阵和半正定矩阵 https://zhuanlan.zhihu.com/p/81169491?ivk_sa=1024320u

17/9/2023

Numpy中matrix和ndarray的区别 https://blog.csdn.net/qq_42859149/article/details/118089752

在ipython notebook中使用argparse方式: https://cloud.tencent.com/developer/article/1741722?areaSource=102001.3&traceId=BhUtOtT268NeoAaP1naB5

13/9/2023

Self-supervised graph learning for recommendation-自监督图学习增强的推荐：https://zhuanlan.zhihu.com/p/498662819

斯隆奖得主赵宇飞：大图世界里的数学利器 | 欲善其事，先利其器:http://www.360doc.com/content/21/0719/19/2495754_987336990.shtml

8/92023

NLP（自然语言处理）涉及的范畴有哪些（5）信息检索 https://zhuanlan.zhihu.com/p/524510222

6/9/2023

一文弄懂Word2Vec之skip-gram（含详细代码）http://www.taodudu.cc/news/show-3126356.html?action=onClick

5/9/2023

CS168: The Modern Algorithmic Toolbox Lecture #7: Understanding and Using Principal Component Analysis (PCA)：https://web.stanford.edu/class/cs168/l/l7.pdf

Genes mirror geography within Europe：https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2735096/?_escaped_fragment_=po=19.2308

4/9/2023

NVIDIA显卡的Ubuntu驱动程序安装方法: https://www.bilibili.com/video/BV1wY411p7mU/?p=2&spm_id_from=333.880.my_history.page.click&vd_source=d292a057acdb9d9f7dc26fc247065e36

彻底解决安装了显卡驱动后，Ubuntu开机无法进入图形化界面、黑屏、左上角光标闪烁问题 https://blog.csdn.net/iBenzene/article/details/130818216

3/9/2023

Co-Occurrence Matrix——共现矩阵的计算方法: https://blog.csdn.net/weixin_42782150/article/details/120646183

2/9/2023

（这篇说明的很好）论文 | A Neural Probabilistic Language Model https://blog.csdn.net/JackyAce6880/article/details/123137244

【语言模型】NNLM(神经网络语言模型) https://zhuanlan.zhihu.com/p/206878986

1/9/2023

【NLP】神经网络语言模型（NNLM）https://zhuanlan.zhihu.com/p/417625837

**30/8/2023**

CV往哪卷？李飞飞指出三点：具身智能，视觉推理和场景理解: https://baijiahao.baidu.com/s?id=1731919470473272134&wfr=spider&for=pc

用于图像-文本匹配的视觉语义推理：https://zhuanlan.zhihu.com/p/490302244

**29/8/2023**

工程，技术和科学，他们的区别是什么？https://www.bilibili.com/video/BV1rK4y1N7AK/?spm_id_from=333.337.search-card.all.click&vd_source=d292a057acdb9d9f7dc26fc247065e36

讲的超级好：https://www.bilibili.com/video/BV1FP41167sf/?spm_id_from=333.337.search-card.all.click&vd_source=d292a057acdb9d9f7dc26fc247065e36

**16/8/2023**

[图卷积网络原来是这么回事（三）——图滤波器与图卷积的设计](https://zhuanlan.zhihu.com/p/297613044)

《深入浅出图神经网络：GNN原理解析》配套代码: https://github.com/FighterLYL/GraphNeuralNetwork

Proof method：

对于$H$ 与 $L$ 矩阵 $0$ 元素相同的证明，先考虑例子，举例子，举简单的例子，比如让 $H$ 矩阵的对角矩阵只有第一个元素为 $1$, 其他为 $0$。然后发现所有其他情况可以由只有一个 $1$的特例组成就化简了证明问题。分解问题，从简单的开始证明

李笛：说明中国人喜欢应试教育，排名只会让人同质化。大家很容易遗忘，当年人脸识别出来也全在刷榜，刷到最后，一无所有。

榜单上的任何一家，都跟别人没太大区别——那么大训练规模下，数据不会有太大差别；训练方法都从那几篇论文来；拿GPT训练模型，老师也一样。反而是模型不一味追求参数大，才真有机会探索。

**27/7/2023**

Signal Causality

**12/8/2023**

[Is the system represented by the equation 𝑦(𝑡)=𝑥(2𝑡)y(t)=x(2t) time invariant?](https://dsp.stackexchange.com/questions/37233/is-the-system-represented-by-the-equation-yt-x2t-time-invariant)

[【信号与系统】对“时不变性”判定的一点注记](https://zhuanlan.zhihu.com/p/34172872)

[**Is a unit doublet function an even function, like a unit impulse function?**](https://www.quora.com/Is-a-unit-doublet-function-an-even-function-like-a-unit-impulse-function)

**25/7/2023**

[如何直观理解欧拉公式？](https://www.zhihu.com/question/284620618)

[自然常数“e”，工程中的自然数“1”](https://zhuanlan.zhihu.com/p/40317763)

["上帝公式"(欧拉公式)真的神到无法触碰？](https://zhuanlan.zhihu.com/p/48392958)

[被众人膜拜的欧拉恒等式是个什么东东?](https://zhuanlan.zhihu.com/p/40302967)

[从傅里叶提出的历史背景理解傅里叶变换](https://zhuanlan.zhihu.com/p/37673700)

[Why is the absolute value needed with the scaling property of fourier tranforms?](https://math.stackexchange.com/questions/260310/why-is-the-absolute-value-needed-with-the-scaling-property-of-fourier-tranforms)

为了“简单”而进行“分解”，为了更好的“分解”，人类又发明了“正交”的概念。