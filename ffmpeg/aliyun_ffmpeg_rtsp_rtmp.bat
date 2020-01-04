ffmpeg -rtsp_transport tcp -i rtsp://192.168.18.240:554/onvif/live/1 -c:a copy -c:v libx264 -f flv rtmp://live.baidu.com/live/8001515731713
pause