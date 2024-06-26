python`import packge` 的时候，会优先import当前目录下的package，如果当前目录下有`scheduler.py`，就会被import，从而覆盖本来需要import的conda环境中的scheduler package。

小心使用`from numpy import *`, 这样会导致所有的numpy里的函数不用`nump.`+`function name`, 就可以使用，包括`numpy.min`。这样就会覆盖标准库下的`min`，导致出现`TypeError: 'numpy.float64' object cannot be interpreted as an integer`

