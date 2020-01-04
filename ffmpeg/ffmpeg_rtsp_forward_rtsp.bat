ffmpeg -rtsp_transport tcp -i "rtsp://admin:12345@192.168.18.252:554/h264/ch1/main/av_stream" -c copy -rtsp_transport tcp -f rtsp "rtsp://114.55.251.140/1001.sdp"
pause