##  :bouquet: 多媒体架构设计  
![多媒体架构设计](/Images/video-system.png)  
###### :bird: 支持的直播流输入协议  
* RTMP 用于拉取和发布的流  
* RTSP 为拉和宣布的流  
* 用于HTTP和UDP流的 MPEG-TS  
* SRT 用于听，拉和集合模式  
* UDT 用于听，拉和集合模式  
* HLS 为拉流  
###### :baby_chick: 单路路实时编码流传递（RTMP）  
![单路路实时编码流传递](/Images/live_streaming_big.png)
###### :penguin: 多路实时编码流传递（RTMP）  
![多路实时编码流传递](/Images/rtmp-republishing_big.png)  

######  :chicken: HLS、MPEG-DASH多路输入/输出流   
![Markdown](/Images/rtmp-republishing-hls-dash_big.png)  

######  :hatched_chick: 通过SSL加密和公开HLS媒体的来源（HLS）  
![Markdown](/Images/http_restreaming_big.png)  

##  :hibiscus: 点播架构设计  
![Markdown](/Images/vod-system.png)   
## :cherry_blossom: 点播流程图  
![Markdown2](/Images/aliyun-viedo-upload.svg)   
## :four_leaf_clover: 更新列表  

* :six: 2018年8月31日 星期五   
  * [自定义音频播放器的实现](https://hehuiyun.github.io/2018/07/27/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E7%9A%84%E5%AE%9E%E7%8E%B0/#more)  
  * [HLS-iOS视频播放服务架构深入探究（二）](https://yangchao0033.github.io/blog/2016/02/14/hls-2/)
  * [HLS-iOS视频播放服务架构深入探究（一）](https://yangchao0033.github.io/blog/2016/01/29/hls-1/)  
  * [HTTP Live Streaming (HLS) - 概念](https://www.jianshu.com/p/2ce402a485ca) 
* :five: 2018年3月22日 星期五 
  * [视频插件 video.js的用法](http://www.jq22.com/jquery-info404)  
  * [视频直播常见问题与解决办法汇总](https://yq.aliyun.com/articles/511196)  
  * [在Ubuntu 14.04上安装Nginx-RTMP](https://www.vultr.com/docs/setup-nginx-rtmp-on-ubuntu-14-04)  
* :four: 2018年1月16日 星期二 [音视频解决方案 NGINX-RTMP-TS-DASH](https://github.com/Tinywan/NGINX-RTMP-TS-DASH)  
* :three: 2017年04月18日 星期二 [解决VideoJs阿里云直播和点播跨域问题](http://www.cnblogs.com/tinywan/p/6234463.html)
* :two: 2017年06月06日 星期二 开源的播放器  
  * :computer: [Aliplayer 播放器](https://player.alicdn.com/aliplayer/index.html)
  * :computer: [Video-dev-Hls 播放器 ](https://github.com/video-dev/hls.js)  
  * :computer: [ Sewise-Player 播放器](https://github.com/jackzhang1204/sewise-player)  
  * :computer: [clappr 播放器](https://github.com/clappr/clappr)   
    *  支持格式：`hls, dash, ogg, webm, mp4, rtmp either live or video on demand`   
    *  :computer:  [在线预览](http://github.tinywan.com/html5-dash-hls-rtmp/clappr/index1.html)  
  * [mediaelement player 播放器](https://github.com/mediaelement/mediaelement)  
    * 支持格式：`支持MP4，WebM和MP3以及HLS，Dash，YouTube，Facebook，SoundCloud和其他HTML5 MediaElement API的HTML5 <audio>或<video>播放器，可在所有浏览器中实现一致的UI`  
    * :computer:  [在线预览](http://github.tinywan.com/html5-dash-hls-rtmp/MediaElement/index1.html)  
* :one: 2017年06月07日 星期三 Play-RTMP-HLS-Stream 代码方法优化
###  :tomato:  直播源  
+  HLS-001：`http://hls-live.jia.360.cn/live_jia_public/_LC_RE_non_3605277091515101384821337866_BX/index.m3u8`
+   香港卫视&emsp;`http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8`
+   CCTV1高清&emsp;`http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8`
+   CCTV5高清&emsp;`http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8`
+   杭康&emsp;`http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8`
### :tropical_fish: 详细介绍  
+   以下测试延迟多为局域网测试环境（线上为阿里云平台测试）  
+   M3U8 直播或者点播DEMO  
### :sunny: VideoJs-M3U8
+ [x] 1、支持直播流：HSL的 m3u8   
+ [x] 2、如何使用：直接下载即可使用,注意点： m3u8 播放必须放在服务器下面  
+ [x] 3、默认：m3u8播放   
+ [x] 4、延迟测试(局域网测试)
     + [x] RTMP 延迟：2s   
     + [x] HLS 延迟： 18s 
     + [x] VLC 延迟(不推荐)： 18s  
+ [x] 5、鉴权：可以      
+ [x] 皮肤支持
    + [官方皮肤](http://www.scriptsmashup.com/Video_Skin_Generator/Videojs/videojs-skin-generator.html)
    + YouTouBe
    ![YouTouBe](/Images/YouTouBe.jpg)
    + facebook-player   
    ![facebook-player](/Images/facebook.jpg)
### :cloud: m3u8-IE-Support 
+ [x] 兼容所有浏览器
+ [x] 支持IE11 浏览器播放  
+ [x] 测试结果：通过 
### :cyclone:   VideoJs2017
+ [x] 1、RTMP 支持播放
+ [x] 2、支持鉴权 
+ [ ] 3、~~M3U8 IE 暂时不支持播放~~  
+ [x] 4、延迟测试(局域网测试)
    + [x] RTMP 延迟：2s   
    + [x] HLS 延迟： 18s 
    + [x] VLC 延迟(不推荐)： 18s 
+ 测试播放列表
     + [1] RTMP直播流：`rtmp-stream.html`
     + [2] HLS直播和点播：`hls-stream.html`
     + [3] 直播和点播HLS的M3U8播放(可输入动态改变HLS地址)：`auto-input-hls-player.html`
        + 遇到JS跨域的问题：
            - `The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. Origin 'http://127.0.0.1`
        + 解决办法(Nginx 服务器配置方法，Apache自行百度)：
        ```
        location /record {
            add_header Cache-Control no-cache;
            add_header 'Access-Control-Allow-Origin' '*' always;
            add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
            add_header 'Access-Control-Allow-Headers' 'Range';
            types{
                    application/dash+xml mpd;
                    application/vnd.apple.mpegurl m3u8;
                    video/mp2t ts;
             }
            alias /home/tinywan/hls;
         }

        ```
        + 测试地址：`http://192.168.18.143/record/stream_name/index.m3u8`
+ [x] 测试进度
    + [2017年4月10日 下午 16:00 ] 局域网的HSL和RTMP流延迟的测试
        > 测试结果：RTMP 延迟：2s ，HLS 延迟： 18s    
    + [2017年4月11日 下午 13:00 ] 直播和点播HLS的M3U8播放(可输入动态改变HLS地址),JS 跨域问题    

#### :umbrella: Play-RTMP-HLS-Stream(Obj-Flash) 
+   支持 RTMP 和 M3U8 直播兼容播放
+   参数说明
    +   语法：`embedSWF: function(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj, callbackFn)`
        1.  `swfUrlStr`:指定您的SWF的URL（StrobeMediaPlayback.swf）
        1.  `replaceElemIdStr`:指定包含替换元素的html元素的ID,能用你的flash的内容来替换
        1.  `widthStr`:指定SWF的宽度
        1.  `heightStr`:指定SWF的高度
        1.  `swfVersionStr`:指定SWF 发布所需的flash播放器的版本
        1.  `xiSwfUrlStr`:指定快速安装的路径，激活快速安装. 请注意，快速安装只会触发一次（他第一次被调用）
        1.  `flashvarsObj`:指定需要传递给flash的变量（用键值对）
        1.  `parObj`:指定嵌入对象的参数（用键值对）
        1.  `attObj`:指定对象的属性（用键值对）
        1.  `callbackFn`: (JavaScript function, optional)能定义一个回调函数，不管调用flash创建成功或者失败都可以调用该函数
+   文档
    + [x] 1、支持：播放RTMP直播流和HSL直播流   
    + [x] 2、如何使用：直接下载即可使用,注意点：m3u8 播放必须放在服务器下面，负载存在跨域问题  
    + [x] 3、默认：RTMP播放   
    + [x] 4、延迟：
        + [x] RTMP 延迟：3s   
        + [x] HLS 延迟： 20s  
    + [x] 5、跨域：OK
    + [x] 6、鉴权：OK （服务添加xml跨域文件）
    + [x] 7、待解决问题：js 调用swf问题~~~~~~~~~~~
    + [x] 测试进度
        + [2017年4月10日 下午 16:00 ] 局域网的HSL和RTMP流延迟的测试，测试结果：RTMP 延迟：3s ，HLS 延迟： 20s 
        + [2017年6月7日 下午 16:00 ] 代码优化,该页面进行过优化`play2video2.html`，默认静音播放  

## :apple: 音频和视频技术文档
* [HLS-iOS视频播放服务架构深入探究（二）](https://yangchao0033.github.io/blog/2016/02/14/hls-2/)
* [HLS-iOS视频播放服务架构深入探究（一）](https://yangchao0033.github.io/blog/2016/01/29/hls-1/)  
* [HTTP Live Streaming (HLS) - 概念](https://www.jianshu.com/p/2ce402a485ca)  
* 服务器端流媒体技术
  * [GStreamer](https://gstreamer.freedesktop.org/)  
  * [Nginx RTMP模块](https://github.com/arut/nginx-rtmp-module)  
  * [SHOUTcast](http://en.wikipedia.org/wiki/SHOUTcast)
+   [为 HTML 5 视频提供的 DASH 自适应串流](https://developer.mozilla.org/zh-CN/docs/Web/HTML/DASH_Adaptive_Streaming_for_HTML_5_Video)    
+   [HTTP访问控制（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
+   [使用 canvas 处理视频](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
+   [音频和视频内容](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
+   [基于HTTP的动态自适应流媒体](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)       
+   [P2P如何将视频直播带宽降低75%？](http://mp.weixin.qq.com/s/ryojkLRb1x02pr0KSFzP9Q)       
+   [展望2018音视频技术：AV1，AI，区块链，WebRTC](http://mp.weixin.qq.com/s/lX9WWqSS0KGQddrOVqV-Jg)       
+   [怎么让不可靠的UDP可靠？](http://mp.weixin.qq.com/s/-yJH782XEnaezr7NWu8lIw)        
+   [Twitch如何实现转码器比FFmepg性能提升65%？（上）](http://mp.weixin.qq.com/s/F7BBKM5heMu6EN705N504A)        
+   [Twitch如何实现转码器比FFmpeg性能提升65%？（下）](http://mp.weixin.qq.com/s/BCMLzV9MlOjsnHzzfkTKkA)     
  
## :melon: FFmpeg HLS 命令记录
+   [https://github.com/video-dev/hls.js](https://github.com/video-dev/hls.js)
+   [官方文档http://www.ffmpeg.org/ffmpeg-formats.html](http://www.ffmpeg.org/ffmpeg-formats.html)
+   `hls_segment_filename` 文件名
    +   设置段文件名。除非hls_flags single_file设置， 文件名将被用作具有段号的字符串格式：
    +   格式：`ffmpeg -i in.nut -hls_segment_filename'file％03d.ts'out.m3u8`
    +   此示例将生成播放列表， out.m3u8，和段文件： file000.ts， file001.ts， file002.ts等等
+   `use_localtime` 文件名
    +   对文件名使用strftime（）来扩展本地时间段的文件名。段号也可在此模式下使用，但要使用它，您需要指定second_level_segment_index hls_flag，而%% d将是说明符。
    +   格式：`ffmpeg -i in.nut -use_localtime 1 -hls_segment_filename'file-％Y％m％d-％s.ts'out.m3u8`
    +   此示例将生成播放列表， out.m3u8，和段文件： 文件20160215-1455569023.ts， 文件20160215-1455569024.ts等等。注意：在某些系统/环境中，说明%s符不可用。见 strftime()文件。
+   ts 文件转换成m3u8文件:`ffmpeg -i 854-1496985395500.ts -c copy -map 0 -f segment -segment_list playlist.m3u8 -segment_time 10 output%03d.ts`        
+   码云提交代码==Github 同步diamante     
