## Html5-m3u8
#### 以下测试延迟多为局域网测试环境
#### M3U8 直播或者点播DEMO
+ **VideoJs-M3U8**
    + [x] 1、支持直播流：HSL的 m3u8   
    + [x] 2、如何使用：直接下载即可使用,注意点： m3u8 播放必须放在服务器下面  
    + [x] 3、默认：m3u8播放   
    + [x] 4、延迟测试(局域网测试)
        + [x] RTMP 延迟：2s   
        + [x] HLS 延迟： 18s 
        + [x] VLC 延迟(不推荐)： 18s  
    + [x] 5、鉴权：可以      

+ **皮肤支持**
    + [官方皮肤](http://www.scriptsmashup.com/Video_Skin_Generator/Videojs/videojs-skin-generator.html)
    + YouTouBe
        + ![YouTouBe](https://github.com/Tinywan/Html5-m3u8-RTMP/blob/master/Images/YouTouBe.jpg)
    
    + facebook-player   
        + ![facebook-player](https://github.com/Tinywan/Html5-m3u8-RTMP/blob/master/Images/facebook.jpg)

+ **m3u8-IE-Support**    
    + [x] 兼容所有浏览器
    + [x] 支持IE11 浏览器播放  
    + [x] 测试结果：通过 
+ **VideoJs2017**
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

#### RTMP and M3U8 直播
+ Play-RTMP-HLS-Stream(Obj-Flash) 
    + [x] 1、支持直播流：播放RTMP直播流和HSL直播流   
    + [x] 2、如何使用：直接下载即可使用,注意点： m3u8 播放必须放在服务器下面  
    + [x] 3、默认：RTMP播放   
    + [x] 4、延迟：
        + [x] RTMP 延迟：3s   
        + [x] HLS 延迟： 20s  
        + [x] VLC 延迟(不推荐)： 18s
    + [x] 5、跨域：OK
    + [x] 6、鉴权：不可以
    + [x] 测试进度
        + [2017年4月10日 下午 16:00 ] 局域网的HSL和RTMP流延迟的测试
            > 测试结果：RTMP 延迟：3s ，HLS 延迟： 20s 

#### (Push)Play-RTMP-Info (功能比较强大)
+ 播放RTMP直播流,同时显示直播流的详细信息
    ![Markdown](https://github.com/Tinywan/Html5-m3u8-RTMP/blob/master/Images/push-rtmp-play-rtmp-html.png)
+ 探索中...    
