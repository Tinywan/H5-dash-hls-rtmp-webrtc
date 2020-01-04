ffmpeg -rtsp_transport tcp -i rtsp://admin:12345@192.168.18.252:554/h264/ch1/main/av_stream -c:a copy -c:v libx264 -f flv rtmp://stream.baidu.com/live/4001480473625
pause