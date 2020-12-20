var HAO_DATA = {
    searchTabData: {
        defaultByCate: {
            news: "baidu",
            webpage: "baidu",
            weibo: "weibo",
            music: "baidu",
            video: "baidu",
            image: "baidu",
            wenda: "baidu",
            map: "baidu",
            shopping:"taobao",		
        },
        searchEngConf: {
            "webpage": {
				baidu: ["http://www.baidu.com/s", "wd", "\u767e\u5ea6", "http://www.baidu.com/", "ie:utf-8"],
				google: ["http://www.google.com.hk/search", "q", "\u8c37\u6b4c", "http://www.google.com.hk/webhp?client=heben123", "client:heben123;hl:zh-CN;ie:utf-8;newwindow:1"],
                bing: ["http://cn.bing.com/search", "q", "\u5fc5\u5e94", "http://cn.bing.com", "form:heben123;pc:heben123;market:zh-cn;ie:utf-8"],
                youdao: ["http://www.youdao.com/search", "q", "\u6709\u9053", "http://www.youdao.com/?keyfrom=heben123", "keyfrom:heben123;ue:utf-8;vendor:heben123"],               
                jike: ["http://www.jike.com/so", "q", "\u5373\u523B", "http://www.jike.com/?fm=heben123&ac=so", "fm:heben123;ie:utf-8"],
				so360: ["http://www.so.com/s", "q", "360搜索", "http://www.so.com/", "ie:utf-8;src:heben123", "360搜索"]
            },
            "music": {
				baidu: ["http://music.baidu.com/search", "key", "\u767e\u5ea6", "http://music.baidu.com/", "f:ms;ct:134217728;ie:utf-8","百度音乐"],
                sogou: ["http://mp3.sogou.com/music", "query", "\u641c\u72d7", "http://mp3.sogou.com/", "ie:utf-8","搜狗音乐"],
				so360: ["http://s.music.so.com/s", "q", "360音乐", "http://music.so.com/", "ie:utf-8;src:heben123", "360音乐"]
            },
            "video": {
				baidu: ["http://video.baidu.com/v", "word", "\u767e\u5ea6", "http://video.baidu.com/", "ie:utf-8","百度视频"],
                google: ["http://www.google.com.hk/search", "q", "\u8c37\u6b4c", "http://www.google.com.hk/search", "tbo:p;tbm:vid;source:vgc;tbs:vid;client:heben123;hl:zh-CN;ie:utf-8","谷歌视频"],
                souku: ["http://www.soku.com/v", "keyword", "\u641c\u5e93", "http://www.soku.com/", "ie:utf-8;cp:4002372;cpp:1000324","搜酷搜索"],
                v360: ["http://video.so.com/v", "q", "360影视", "http://video.so.com/", "code:utf-8", "360影视"]
            },
            "image": {
                baidu: ["http://image.baidu.com/i", "word", "\u767e\u5ea6", "http://image.baidu.com/", "ie:utf-8;tn:baiduimage", "百度图片"],
                google: ["http://images.google.com.hk/images", "q", "\u8c37\u6b4c", "http://images.google.com.hk/imghp?client=aff-heben123", "client:aff-heben123;hl:zh-CN;ie:utf-8", "谷歌图片"],
                youdao: ["http://image.youdao.com/search?keyfrom=heben123", "q", "\u6709\u9053", "http://image.youdao.com/search", "keyfrom:heben123;ue:utf-8", "有道图片"],
				jike: ["http://image.jike.com/so", "q", "\u5373\u523B", "http://image.jike.com/?fm=heben123&ac=so", "fm:heben123;ie:utf-8", "即刻图片"],
                bing: ["http://cn.bing.com/images/search", "q", "\u5fc5\u5e94", "http://cn.bing.com/images", "form:heben123;pc:heben123;market:zh-cn;ie:utf-8", "必应图片"],				               
                so360: ["http://image.so.com/i", "q", "360图片", "http://image.so.com/", "ie:utf-8;src:heben123", "360图片"]
            },
            "weibo": {
                weibo: ["http://s.weibo.com/weibo/", "search", "微博", "http://s.weibo.com/", "ie:utf-8;refer:360"]
            },
            "news": {
				baidu: ["http://news.baidu.com/ns", "word", "\u767e\u5ea6", "http://news.baidu.com/", "ie:utf-8","百度新闻"],
                google: ["http://news.google.com.hk/news/search", "q", "\u8c37\u6b4c", "http://news.google.com.hk/?client=aff-360daohang", "client:aff-360daohang;hl:zh-CN;ie:utf-8","谷歌新闻"],             
                youdao: ["http://news.youdao.com/search?keyfrom=360dh_01", "q", "\u6709\u9053", "http://news.youdao.com/search", "ue:utf-8;keyfrom:360dh_01","有道新闻"],
				newsmulti: ["http://news.so.360.cn/ns", "q", "\u7efc\u5408\u65b0\u95fb", "http://news.so.360.cn/", "ie:utf-8;tn:news;src:hao_search","360新闻"]
            },
            "map": {
				baidu: ["http://map.baidu.com/m", "word", "\u767e\u5ea6", "http://map.baidu.com/", "ie:utf-8","百度地图"],
                google: ["http://ditu.google.cn/maps", "q", "\u8c37\u6b4c", "http://ditu.google.cn/", "ie:utf-8","谷歌地图"],
                so360: ["http://map.so.com/", "k", "360地图", "http://map.so.com/", "ie:utf-8;src:hao_360so;t:map", "360地图"],
                gaode: ["http://www.amap.com", "k", "高德", "http://www.amap.com", "t:map","高德地图"]
            },
            "wenda": {
				baidu: ["http://zhidao.baidu.com/q", "word", "\u767e\u5ea6", "http://zhidao.baidu.com", "ct:17;pt:360se_ik;tn:ikaslist;ie:utf-8","百度知道"],
                qihoo: ["http://wenda.so.com/search/", "q", "360问答", "http://wenda.so.com/", "ie:utf-8;src:hao_360so", "搜索答案"]
            },
            "shopping": {
                taobao: ["http://search8.taobao.com/browse/search_auction.htm", "q", "\u6dd8\u5b9d", "http://www.taobao.com/?pid=mm_15144495_2216478_8873469", "unid:24;pid:mm_15144495_2216478_8873469;search_type:auction;commend:all;at_topsearch:1;user_action:initiative;spercent:0;f:D9_5_1;ie:utf-8","淘宝购物"],
                buy360: ['http://open.union.360.cn/go', 'k', "京东", "http://open.union.360.cn/go?bid=2000801&qihoo_id=36100&fname=hao_search_logo", "bid:2000801;qihoo_id:36100;flag:hao_cps;fname:hao_search","京东商城"],
                amazon: ["http://open.union.360.cn/go", "k", "\u4E9A\u9A6C\u900A", "http://open.union.360.cn/go?bid=2000292&qihoo_id=36100&fname=hao_search_logo", "bid:2000292;qihoo_id:36100;flag:hao_cps;fname:hao_search","亚马逊"],
                vancl: ["http://open.union.360.cn/go", "k", "\u51E1\u5BA2", "http://open.union.360.cn/go?bid=2000320&qihoo_id=36100&fname=hao_search_logo", "bid:2000320;qihoo_id:36100;flag:hao_cps;fname:hao_search","凡客商城"],
                yihaodian: ["http://open.union.360.cn/go", "k", "一号店", "http://open.union.360.cn/go?bid=2000519&qihoo_id=36100&fname=hao_search_logo", "bid:2000519;qihoo_id:36100;flag:hao_cps;fname:hao_search","一号店"]
            }
        }
    }
};
