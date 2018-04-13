# JsonpDemo
实现一个简单的jsonp库

##### 使用

```
new Jsonp({
  url: 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?format=jsonp&key=晴天&jsonpCallback=call&format=jsonp',
  callbackName: 'call',
  success: function(result){
    console.log(result);
  },
  error: function(){
    
  }
});
```
`callbackName`为服务器返回的函数调用名

![](https://upload-images.jianshu.io/upload_images/11610396-f1a6659ac9a0aaa5.gif?imageMogr2/auto-orient/strip)
