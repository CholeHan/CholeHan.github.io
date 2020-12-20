M({
    container: "#weather"
},
function(e, t) {
    function n(t) {
        e(".setting")[t == "show" ? "hide": "show"](),
        e(".inner")[t == "set" ? "hide": "show"](),
        "set" == t && !e("#weather-prov").val() && Weather.getProvince(function(e) {
            r(e, "prov", hao360.area.get("prov"))
        })
    }
    function r(t, n, r) {
        var i = "",
        n = n || "prov";
        t.forEach(function(e, t) {
            r != e[1] ? i += '<option value="' + e[1] + '">' + e[0] + "</option>": i += '<option selected="selected" value="' + e[1] + '">' + e[0] + "</option>"
        }),
        e("#weather-" + n).html(i).fire("change")
    }
    QW.W(document).delegate("#weather-change", "click",
    function(e) {
        e.preventDefault(),
        n("set")
    }),
    e("#weather-cancel").click(function(e) {
        e.preventDefault(),
        n("show")
    }),
    e(".done").click(function(r) {
        r.preventDefault();
        var i = this;
        e(this).attr("disabled", "disabled");
        if (e(this).attr("disabled") == "disabled") return;
        var s = {
            prov: g("weather-prov").value,
            city: g("weather-city").value,
            town: g("weather-town").value
        };
        Weather.getWeather(function(r) {
            r && t.tweet("weather-loaded", {
                code: s.town
            }),
            R("weather-inner").render("weather-template", r),
            n("show"),
            e(i).attr("disabled", "")
        },
        s.town, 1)
    }),
    e(".setting select").on("change",
    function(t) {
        var n = {
            "weather-prov": "city",
            "weather-city": "town"
        },
        i = n[e(this).attr("id")],
        s = hao360.area.get(i);
        if (!i) return;
        Weather.getArea(i,
        function(e) {
            r(e, i, s)
        },
        e(this).val())
    });
    var i = ["\u7a7a\u6c14\u8d28\u91cf\u5f88\u597d", "\u7a7a\u6c14\u8d28\u91cf\u8fd8\u662f\u4e0d\u9519\u7684", "\u7a7a\u6c14\u7a0d\u5fae\u6709\u70b9\u6c61\u67d3\uff0c\u6613\u611f\u4eba\u7fa4\u5728\u6237\u5916\u6d3b\u52a8\u65f6\u95f4\u4e0d\u5b9c\u8fc7\u957f\uff0c\u8001\u4eba\u3001\u513f\u7ae5\u5e94\u51cf\u5c11\u6237\u5916\u6d3b\u52a8", "\u7a7a\u6c14\u4e2d\u5ea6\u6c61\u67d3\uff0c\u5bf9\u8001\u4eba\u3001\u5c0f\u5b69\u3001\u547c\u5438\u9053\u75be\u75c5\u60a3\u8005\u7b49\u654f\u611f\u4eba\u7fa4\u5f71\u54cd\u8f83\u5927\uff0c\u5916\u51fa\u914d\u6234\u53e3\u7f69", "\u7a7a\u6c14\u91cd\u5ea6\u6c61\u67d3\uff0c\u5bb9\u6613\u8bf1\u53d1\u547c\u5438\u9053\u75be\u75c5\uff0c\u6240\u6709\u4eba\u5e94\u9002\u5f53\u51cf\u5c11\u5ba4\u5916\u6d3b\u52a8\uff0c\u5916\u51fa\u4f69\u6234\u53e3\u7f69", "\u7a7a\u6c14\u4e25\u91cd\u6c61\u67d3\uff0c\u5bf9\u6240\u6709\u4eba\u7684\u5065\u5eb7\u90fd\u4f1a\u53d7\u5230\u5371\u5bb3\uff0c\u5c3d\u91cf\u907f\u514d\u4efb\u4f55\u6237\u5916\u6d3b\u52a8", "\u7a7a\u6c14\u6c61\u67d3\u7269\u4e25\u91cd\u8d85\u6807\uff0c\u5929\u6c14\u5bf9\u60a8\u8eab\u4f53\u4f24\u5bb3\u5de8\u5927\uff0c\u5c3d\u91cf\u907f\u514d\u4efb\u4f55\u6237\u5916\u6d3b\u52a8"];
    t.receive("pm25-loaded",
    function(t) {
        setTimeout(function() {
            e(".extend-list").animate({
                top: {
                    to: "-22px"
                }
            })
        },
        500)
    });
    var s = '<li><a href="http://www.so.com/s?ie=utf-8&amp;src=hao_360weather&amp;q={$city}pm2.5" class="pm25 pm-level{$step}" title="{$title}">\u7a7a\u6c14\u8d28\u91cf\uff1a<em>{$level}</em></a></li>';
    t.receive("weather-loaded",
    function(n) {
        Weather.getPm25(function(n) {
            n && (n.title = "\u4eca\u65e5pm2.5\u6307\u6570\u4e3a" + n.pm25 + "\uff0c" + i[n.step], qboot.await(function() {
                return R("weather-inner").getStatus() == R.STATUS_OK
            },
            function() {
                n.city = encodeURIComponent(e(".name").html()),
                e(".extend-list").appendChild(e(s.tmpl(n))),
                t.tweet("pm25-loaded"),
                e(".weather-extend").hover(function(t) {
                    e(".today").toggleClass("hover")
                })
            },
            function() {},
            50, 20))
        },
        n.data.code, 1)
    }),
    qboot.await(function() {
        return hao360.cityCode.get()
    },
    function() {
        t.tweet("weather-loaded", {
            code: hao360.cityCode.get()
        })
    })
});
M("#joke",
function(e, t) {
    function s() {
        var e = n[Math.floor(Math.random() * r)];
        if (e[1] == i.attr("href")) return s();
        i.attr("href", e[1]).attr("title", e[0]).html("\u7b11\u8bdd\uff1a" + e[0])
    }
    var n = hao360.jokeData,
    r = n.length,
    i = e("#ajoke");
    e(".refresh").click(function(e) {
        e.preventDefault(),
        s()
    })
});
M("#email",
function(e, t) {
    var n = StringH.trim,
    r = [],
    i = {
        "@163.com \u7f51\u6613": {
            action: "http://reg.163.com/CheckUser.jsp",
            params: {
                url: "http://entry.mail.163.com/coremail/fcg/ntesdoor2?lightweight=1&verifycookie=1&language=-1&style=15",
                username: "#{u}",
                password: "#{p}"
            },
            type: "mail"
        },
        "@126.com \u7f51\u6613": {
            action: "https://reg.163.com/logins.jsp",
            params: {
                domain: "126.com",
                username: "#{u}@126.com",
                password: "#{p}",
                url: "http://entry.mail.126.com/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26language%3D0%26style%3D-1"
            },
            type: "mail"
        },
        "@sina.com \u65b0\u6d6a": {
            action: "http://mail.sina.com.cn/cgi-bin/login.cgi",
            params: {
                u: "#{u}@sina.com",
                psw: "#{p}"
            },
            type: "mail"
        },
        "@yahoo.com.cn": {
            action: "https://edit.bjs.yahoo.com/config/login",
            params: {
                login: "#{u}@yahoo.com.cn",
                passwd: "#{p}",
                domainss: "yahoo",
                ".intl": "cn",
                ".src": "ym"
            },
            type: "mail"
        },
        "@yahoo.cn \u96c5\u864e": {
            action: "https://edit.bjs.yahoo.com/config/login",
            params: {
                login: "#{u}@yahoo.cn",
                passwd: "#{p}",
                domainss: "yahoocn",
                ".intl": "cn",
                ".done": "http://mail.cn.yahoo.com/inset.html"
            },
            type: "mail"
        },
        "@sohu.com \u641c\u72d0": {
            action: "http://passport.sohu.com/login.jsp",
            params: {
                loginid: "#{u}@sohu.com",
                passwd: "#{p}",
                fl: "1",
                vr: "1|1",
                appid: "1000",
                ru: "http://login.mail.sohu.com/servlet/LoginServlet",
                ct: "1173080990",
                sg: "5082635c77272088ae7241ccdf7cf062"
            },
            type: "mail"
        },
        "@yeah.net \u7f51\u6613": {
            action: "https://reg.163.com/logins.jsp",
            type: "open",
            params: {
                domain: "yeah.net",
                username: "#{u}@yeah.net",
                password: "#{p}",
                url: "http://entry.mail.yeah.net/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26style%3D-1"
            },
            type: "mail"
        },
        "@tom.com": {
            action: "http://login.mail.tom.com/cgi/login",
            params: {
                user: "#{u}",
                pass: "#{p}"
            },
            type: "mail"
        },
        "@21cn.com": {
            action: "http://passport.21cn.com/maillogin.jsp",
            params: {
                UserName: "#{u}@21cn.com",
                passwd: "#{p}",
                domainname: "21cn.com"
            },
            type: "mail"
        },
        "@139.com": {
            action: "https://mail.10086.cn/Login/Login.ashx?clientid=5025",
            params: {
                UserName: "#{u}",
                Password: "#{p}",
                ClientId: "5025"
            },
            type: "mail"
        },
        "\u4ee5\u4e0b\u5728\u5f39\u51fa\u9875\u767b\u5f55": {
            style: "font-weight:600;"
        },
        "@qq.com": {
            action: "http://mail.qq.com",
            type: "link"
        },
        "@gmail.com": {
            action: "http://www.gmail.com",
            type: "link"
        },
        "@hotmail.com": {
            action: "http://www.hotmail.com",
            type: "link"
        },
        "\u6dd8\u5b9d\u8d26\u53f7": {
            action: "https://login.taobao.com/member/login.jhtml",
            type: "link"
        },
        "\u652f\u4ed8\u5b9d": {
            action: "https://www.alipay.com/user/login.htm",
            type: "link"
        },
        "\u65b0\u6d6a\u5fae\u535a": {
            action: "http://t.sina.com.cn/?c=spr_web_sina_360_tblog_TN001",
            style: "color:red;",
            type: "link"
        },
        "\u5f00\u5fc3\u7f51": {
            action: "http://www.kaixin001.com/",
            type: "link"
        },
        "\u4eba\u4eba\u7f51": {
            action: "http://www.renren.com/",
            type: "link"
        },
        "\u767e\u5ea6": {
            action: "https://passport.baidu.com/?login",
            type: "link"
        },
        "51.com": {
            action: "http://www.51.com/",
            type: "link"
        },
        "chinaren\u6821\u53cb\u5f55": {
            action: "http://class.chinaren.com/",
            type: "link"
        },
        "\u5929\u6daf\u793e\u533a": {
            action: "http://www.tianya.cn/",
            type: "link"
        }
    };
    for (var s in i) r.push('<option value="' + s + '" ' + (i[s].style ? 'style="' + i[s].style + '"': "") + ">" + s + "</option>");
    r.forEach(function(t) {
        e("#mail-opts").appendChild(e(t))
    }),
    e("#mail-opts").on("change",
    function() {
        var e = g("mail-opts").options[g("mail-opts").selectedIndex].innerHTML,
        t = i[e];
        if (t && t.action) {
            if (t.type == "link") return window.open(t.action),
            !0;
            t.type == "mail" && g("mail-pwd").focus()
        }
    });
    var o = function(e, t) {
        var n = {};
        for (var r in e) n[r] = t ? t(e[r]) : e[r];
        return n
    };
    e("#mail-form").on("submit",
    function(t) {
        var r = i[g("mail-opts").value];
        if (!r || !r.action) alert("\u63d0\u793a:\u8bf7\u9009\u62e9\u4f7f\u7528\u90ae\u7bb1"),
        g("mail-opts").focus(),
        t.preventDefault();
        if (r && r.action) if (r.type == "link") window.open(r.action),
        g("mail-form").action = r.action,
        t.preventDefault();
        else {
            if (n(g("mail-user").value) === "" || n(g("mail-user").value) === e("#mail-user").attr("placeholder")) e("#mail-user").val("").focus(),
            t.preventDefault();
            if (n(g("mail-pwd").value) === "" || n(g("mail-pwd").value) === e("#mail-pwd").attr("placeholder")) g("mail-pwd").focus(),
            t.preventDefault();
            var s = o(r.params,
            function(e) {
                var t = g("mail-user").value,
                n = t.indexOf("@"),
                r = t.substring(0, n != -1 ? n: t.length);
                return e.replace("#{u}", r).replace("#{p}", g("mail-pwd").value)
            });
            g("mail-form").action = r.action,
            g("mail-hide").innerHTML = "";
            for (var u in s) e('<input name="' + u + '" type="hidden">').val(s[u]).appendTo(e("#mail-hide"));
            setTimeout(function() {
                g("mail-pwd").value = ""
            },
            200)
        }
    }),
    e(".mail-trigger").on("focus",
    function(t) {
        e(".mail-login").show(),
        e("#mail-user").focus().select()
    }).click(function(e) {
        e.stopPropagation()
    }),
    e(".mail-login").click(function(t) {
        t.stopPropagation(),
        e(this).show()
    }),
    QW.W(document).click(function(t) {
        e(".mail-login").hide(),
        e("#mail-trigger").val(e("#mail-user").val())
    }),
    e("#mail-user").on("keyup",
    function(e) {
        var t = this.value,
        n = t.indexOf("@");
        if (n != -1) {
            var r = t.substr(n),
            i = hao360.g("mail-opts"),
            s = i.options;
            for (var o = 0,
            u = s.length; o < u; o++) {
                var a = s[o].value.split(" ")[0];
                if (r == a) {
                    s[o].selected = !0;
                    break
                }
            }
        }
    })
});
M({
    container: "#search"
},
function(e, t) {
    function c(t) {
        if (e("#widget-" + t).html() || l[t]) return;
        l[t] = !0,
        qboot.jsonp(f.host, {
            widget: t,
            v2: f.v
        },
        function() {},
        {
            threshold: f.threshold,
            jsonp: "r"
        })
    }
    function v() {
        if (a.getCate() != "webpage") return;
        var e = (d.attr("data-expires") || 24) * 36e5;
        d.removeNode(),
        n.set("hideHotwordNumTips", 1, {
            expires: e
        })
    }
    var n = qboot.cookie,
    r = HAO_CONFIG.search,
    i = HAO_DATA.searchTabData,
    s = new AppData("api.hao.360.cn", r.r),
    o = s.get("defaultEng") || "somulti",
    u = "webpage",
    a = new SearchTab({
        engData: i.searchEngConf,
        defaultByCate: i.defaultByCate
    });
    a.on("catechange",
    function(n) {
        var r = n.cate,
        i = n.eng,
        s = this.engData[r],
        o = "html-" + r,
        u = '<a class="$1" title="$2" data-site="$1" data-cate="$3">$1</a>',
        a = "";
        for (var f in s) a += u.replace(/\$1/g, f).replace(/\$2/g, s[f][2]).replace(/\$3/g, r);
        e(".eng-list").html(a),
        e("#search-engine")[ObjectH.keys(n.data).length === 1 ? "addClass": "removeClass"]("single"),
        t.tweet("search-cate-change", {
            cate: r,
            eng: i,
            data: n.data
        })
    }),
    a.on("change",
    function(e) {
        t.tweet("search-eng-change", {
            cate: e.cate,
            eng: e.eng,
            data: e.data
        })
    }),
    a.render(o, u),
    t.receive("search-cate-change",
    function(t) {
        e(".hotwords-cate").removeClass("hotwords-cate-show"),
        e(".hotwords-cate-" + t.data.cate).addClass("hotwords-cate-show")
    }),
    t.receive("search-eng-change",
    function(e) {
        e.data.cate == "webpage" && LogHub.search("toggle", {
            eng: e.data.eng
        })
    }),
    t.delegate(".eng-list>a", "click",
    function(t) {
        if (a.cate == "webpage") {
            var n = e(this).attr("data-site"),
            r = (10 + Math.floor(Math.random() * 6)) * 864e5,
            i = (new Date).getTime() + r;
            s.set("defaultEng", n, i)
        }
    });
    var f = HAO_CONFIG.widget,
    l = {};
    t.receive("widget-change",
    function(t) {
        var n = t.data.widget;
        e(".form-group").hide(),
        e(".widget-group").hide(),
        e("#widget-" + n).show(),
        c(n)
    }),
    e("[data-widget]").click(function(n) {
        t.tweet("widget-change", {
            widget: e(this).attr("data-widget")
        })
    }),
    e("#search-engine .g-toggle,#search-engine .eng-list").click(function(t) {
        t.preventDefault(),
        e("#search-engine").toggleClass("open")
    }),
    e("#eng-logo").click(function(t) {
        e("#search-engine").removeClass("open").removeClass("hover")
    }),
    e(".more").click(function(t) {
        e(".more .list").toggle()
    });
    var h = {};
    e("[data-link]").forEach(function(t) {
        e(t).attr("data-href", e(t).query("a").attr("href"))
    }),
    e(".search-hd>ul>li").hover(function(t) {
        e(this).toggleClass("hover")
    }).click(function(t) { (!e(t.target).hasClass("link") || !e(t.target).parentNode(".on").length) && t.preventDefault();
        if (e(this).attr("data-link")) {
            window.open(e(this).query("a").attr("href"));
            return
        }
        e(this).attr("data-cate") && !e(".form-group").isVisible() && (e(".widget-group").hide(), e(".form-group").show()),
        e(".search-hd>ul>li").removeClass("on"),
        e(this).addClass("on"),
        t.target.tagName == "A" && t.target.blur()
    }).on("mouseover",
    function() {
        e(this).attr("data-widget") && c(e(this).attr("data-widget"))
    }).on("mousedown",
    function(t) {
        if (e(this).attr("data-link")) {
            var n = e("#search-kw").val(),
            r = e(this).attr("data-link");
            if (!n) {
                e(this).query(">a").attr("href", e(this).attr("data-href"));
                return
            }
            if (!h[r]) {
                var s = i.searchEngConf[r] && i.defaultByCate[r] && i.searchEngConf[r][i.defaultByCate[r]];
                if (!s) return;
                var o = s[4].split(";"),
                u = {};
                o.forEach(function(e) {
                    var t = e.split(":");
                    u[t[0]] = t[1]
                }),
                h[r] = {
                    k: s[1],
                    url: s[0],
                    querys: u
                }
            }
            var a = h[r];
            a.querys[a.k] = n;
            var f = a.url + "?" + ObjectH.encodeURIJson(a.querys);
            e(this).query("a").attr("href", f)
        }
    }),
    e("#search-btn").hover(function(t) {
        e(this).toggleClass("hover")
    }).on("mousedown",
    function(t) {
        e(this).addClass("mousedown")
    }).on("mouseup",
    function(t) {
        e(this).removeClass("mousedown")
    }).on("mouseout",
    function(t) {
        e(this).removeClass("mousedown")
    }),
    QW.W(document).click(function(t) {
        var n = t.target,
        r = e(n);
        r.attr("id") == "search-engine" || r.parentNode("#search-engine").length || r.hasClass("eng-list") || r.parentNode(".eng-list").length || e("#search-engine").removeClass("open")
    }),
    window.search = a;
    var p = !1,
    d = e("#search-hotword-update");
    if (!n.get("hideHotwordNumTips")) {
        var m = 0;
        setTimeout(function() {
            Feed.hotword(function(e) {
                e.webpage.forEach(function(e) {
                    e[2] && m++
                }),
                m && a.getCate() == "webpage" && d.html(m).show()
            },
            0)
        }),
        d.once("click",
        function() {
            e("#search-hotword").fire("click")
        }),
        e("#search-hotword").once("click", v)
    }
    t.receive("search-cate-change",
    function(e) {
        m && d.html(m)[e.data.cate == "webpage" ? "show": "hide"]()
    });
    var g = a.lastEngOfCate.webpage;
    setTimeout(function() {
        var e = n.get("customEng"),
        t = (new Date).getMonth() + 1 + "-" + (new Date).getDate();
        e !== t && (LogHub.search("custom", {
            eng: a.lastEngOfCate.webpage
        }), n.set("customEng", t))
    },
    1500)
});
M("#plane",
function(e, t) {
    var n = Browser.webkit ? document.body: document.documentElement,
    r = 0,
    i = Dom.getDocRect().scrollHeight,
    s = function(e) {
        e.preventDefault()
    },
    o = function(t) {
        t.preventDefault(),
        e(".downToFooter").un("click", u).on("click", s);
        var i = new ElAnim(n, {
            scrollTop: {
                to: r
            }
        },
        1e3, QW.Easing.easeBothStrong);
        i.onend = function() {
            e(".downToFooter").un("click", s).on("click", u)
        },
        i.play()
    };
    e(".upToTop").on("click", o);
    var u = function(r) {
        r.preventDefault(),
        e(".upToTop").un("click", o).on("click", s);
        var u = new ElAnim(n, {
            scrollTop: {
                to: i
            }
        },
        1500, QW.Easing.easeOut);
        u.onend = function() {
            e(".upToTop").un("click", s).on("click", o)
        },
        u.play(),
        t.tweet("loulou-show", {
            cate: e(".downToFooter").attr("data-cate")
        })
    };
    e(".downToFooter").on("click", u),
    t.receive("window-resize",
    function() {
        var e = Dom.getDocRect().width;
        t[e < 1100 ? "hide": "show"]()
    }),
    QW.W(window).on("scroll",
    function(t) {
        var n = Dom.getDocRect();
        n.scrollY > n.height ? e(".upToTop").show() : e(".upToTop").hide(),
        n.scrollY + n.height > QW.W("#footer").getRect().top + QW.W("#topbar").getRect().height ? e(".downToFooter").hide() : e(".downToFooter").show()
    }),
    QW.W(window).on("resize",
    function() {
        t.tweet("window-resize")
    }),
    t.tweet("window-resize")
});