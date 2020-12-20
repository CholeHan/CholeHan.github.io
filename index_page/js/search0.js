// JavaScript Document
var PAGE_START_TIME = (new Date).getTime(),
WEBINDEXCK = "360WEBINDEXCK",
DEBUG = 0; (function() {
    function getCookie(key) {
        var reg = new RegExp("(^| )" + key + "=([^;]*)(;|\x24)"),
        ret = reg.exec(document.cookie);
        return (ret && ret[2] && decodeURIComponent(ret[2])) || '';
    }
    var withHash = {
        'beta': 1
    };
    var indexUrl = getCookie(WEBINDEXCK),
    indexPages = {
        'http://hao.360.cn/i/index.html': 'my',
        'http://hao.360.cn/kuanping.html': 'kuanping'
    };
    if (indexUrl && indexPages[indexUrl] && indexPages[indexUrl] != 'standard') {
        var goUrl = indexUrl + location.search,
        skipnum = getCookie('skipnum') || 0;
        if (withHash[indexPages[indexUrl]]) {
            goUrl += location.hash;
        }
        if (skipnum++<3) {
            if ((location + "").indexOf(goUrl) == -1 && /^http:\/\/hao\.360\.cn/i.test(goUrl)) {
                document.cookie = 'skipnum=' + skipnum + '; expires=' + (new Date((new Date).getTime() + 2000)).toGMTString();
                window.location.href = goUrl;
            }
        }
    }
})();
var CUSTOM_THEME = "customTheme",
DEFAULT_THEME = "default",
MEM_STORE = {},
API_VERSION = {
    "hotword": "1.0",
    "channeltop": "1.3",
    "channelOrder": "8",
    "channelView": "2.5",
    "guessdata": "3",
    "theme": "1.0",
    "locallist": "1.0",
    "localdata": "1.0"
},
API_SNAPSHOTNUM = {
    "joke": "e42e873241f89f735e29f260a8403e77",
    "hotword": "4de7d3c79487595ff19d3f37b41f836a",
    "channeltop": "43bb55d0825d04f616059329bdff3654",
    "theme": [],
    "guessdata": "863d3210f1dc32a2ec742bcc548b23b2",
    "menu": "3d7cb694fe1b40d7150a50d7f9cff237",
    "rside": "fe3570ab98e8b596a6cf107272f8af22",
    "categorymap": "fcfb8f886debae3f7e92b43edf9f7245",
    "coolsite": "41a99130e5065cb88ffa1a5a443cf11a",
    "locallist": "bf86505689c93b0f7df7aa919a77cd41",
    "channelOrder": "89c85a39ded34697666eb76be4515b8c"
};
/*hao360versionmark*/
/*Do!not!delete!*/

var HAO_CONFIG = {
    version: 2.0,
    feedsConfig: {
        "hotword": {
            host: 'http://hao.h.qhimg.com/api.php',
            api: 'hotword',
            v: API_VERSION.hotword || "1.0",
            r: API_SNAPSHOTNUM.hotword || "",
            quietUpdateTime: 1800000,
            expires: 7200000
        },
        "channeltop": {
            host: 'http://hao.h.qhimg.com/api.php',
            api: 'channeltop',
            v: API_VERSION.channeltop || "1.0",
            r: API_SNAPSHOTNUM.channeltop || "",
            threshold: 300000,
            expires: 1800000
        }
    },
    themeConfig: {
        domain: 'hao.h.qhimg.com',
        host: 'http://hao.h.qhimg.com/api.php',
        api: 'theme',
        v: API_VERSION.theme || "1.0",
        r: '1.0',
        threshold: 86400000,
        storeObj: MEM_STORE,
        params: {}
    },
    channelOrder: {
        host: 'http://tuijian.h.qhimg.com/index.php',
        api: 'channelOrder',
        v: API_VERSION.channelOrder || "",
        r: API_SNAPSHOTNUM.channelOrder || "entsportstech",
        expires: 3600000
    },
    pushServer: {
        host: 'http://tui.h.qhimg.com/msg/v1/all/{0}/{1}'
    },
    userChannel: {
        api: 'userChannel',
        v: "1",
        r: "apollo"
    },
    localService: {
        host: "http://hao.h.qhimg.com/index.php",
        v: API_VERSION.localdata || '1.0'
    },
    channelView: {
        host: 'http://hao.h.qhimg.com/channelview.php',
        d_host: 'http://d.hao.h.qhimg.com/channelview.php',
        v: API_VERSION.channelView
    },
    iguess: {
        host: 'http://guess.h.qhimg.com/index.php',
        v: API_VERSION.guessdata
    },
    mysite: {
        host: "http://hao.h.qhimg.com/sitelist.php",
        api: 'mysite',
        v: '1.0',
        r: '1'
    },
    weather: {
        host: 'http://weather.hao.360.cn/',
        cnd_host: 'http://cdn.weather.hao.360.cn/',
        weather: {
            path: 'sed_api_weather_info.php',
            api: 'weather',
            v: '2',
            r: 'zyy',
            quietUpdateTime: 7200000,
            expires: 14400000
        },
        area: {
            path: 'sed_api_area_query.php',
            api: 'area',
            v: '1.1',
            r: 'www'
        }
    },
    pm25: {
        host: 'http://cdn.weather.hao.360.cn/sed_api_weather_info.php',
        api: 'pm25',
        v: '1',
        r: 'pm25_1',
        quietUpdateTime: 7200000,
        expires: 14400000
    },
    widget: {
        host: 'http://hao.h.qhimg.com/widget.php',
        threshold: 50000,
        v: 1
    },
    search: {
        api: 'search',
        v: '1',
        r: 'aaa'
    }
};