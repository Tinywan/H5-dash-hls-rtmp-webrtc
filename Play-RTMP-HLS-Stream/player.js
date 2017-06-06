var SWFPlayer = function (_parent_id, _player_id, _width, _height, server_name) {
    var parent_id = _parent_id;
    var player_id = _player_id;
    var width = _width;
    var height = _height;
    var serverName = server_name;

    function createPlayer(src) {
        var pqs = new ParsedQueryString();
        var parameterNames = pqs.params(false);
        var parameters = {
            src: src,
            autoPlay: "true",
            verbose: "true",
            controlBarAutoHide: "true",
            controlBarPosition: "bottom",
            poster: serverName + "/static/video/images/poster.png",
            plugin_hls: serverName + "/static/video/HLSDynamicPlugin.swf"
        };
        for (var i = 0; i < parameterNames.length; i++) {
            var parameterName = parameterNames[i];
            parameters[parameterName] = pqs.param(parameterName) ||
                parameters[parameterName];
        }

        var wmodeValue = "transparent";
        var wmodeOptions = ["direct", "opaque", "transparent", "window"];
        if (parameters.hasOwnProperty("wmode")) {
            if (wmodeOptions.indexOf(parameters.wmode) >= 0) {
                wmodeValue = parameters.wmode;
            }
            delete parameters.wmode;
        }

        //alert(swfobject.getFlashPlayerVersion);
        // Embed the player SWF:	            
        swfobject.embedSWF(
            serverName + "/static/video/StrobeMediaPlayback.swf"
            , parent_id
            , width
            , height
            , "11"
            , serverName + "/static/video/expressInstall.swf"
            , parameters
            , {
                allowFullScreen: "true",
                wmode: wmodeValue
            }
            , {
                name: player_id
            }
        );
    };

    createPlayer("");

    this.reload = function (src) {
        $("#parent_id").html("");
        createPlayer(src);
    }

}


function flashChecker() {
    var hasFlash = 0;
    var flashVersion = 0;
    if (document.all) {
        var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (swf) {
            hasFlash = 1;
            VSwf = swf.GetVariable("$version");
            flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
        }
    } else {
        if (navigator.plugins && navigator.plugins.length > 0) {
            var swf = navigator.plugins["Shockwave Flash"];
            if (swf) {
                hasFlash = 1;
                var words = swf.description.split(" ");
                for (var i = 0; i < words.length; ++i) {
                    if (isNaN(parseInt(words[i]))) continue;
                    flashVersion = parseInt(words[i]);
                }
            }
        }
    }
    return {
        f: hasFlash,
        v: flashVersion
    };
}
