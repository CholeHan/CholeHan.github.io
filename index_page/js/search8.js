(function() {
    var e = 1,
    t = function(t) {
        this.data = t || [],
        this.id = e++
    };
    t.prototype.setData = function(e) {
        this.data = e || []
    },
    t.prototype.getData = function() {
        return this.data.slice()
    },
    t.prototype.empty = function() {
        this.data = []
    },
    window.Tape = t
})(),
function() {
    function e(e) {
        return Math.round(e / 100)
    }
    function t(e) {
        return e ? e * 100 : 0
    }
    var n = function() {
        var n = 200,
        r = 400,
        i = function() {
            this.isStoped = !1,
            this.playTimer = null,
            this.playing = function(i) {
                if (!i || !i.length) {
                    this.autoStop && this.autoStop();
                    return
                }
                var s = this,
                o = i.shift(),
                u = o.split(";"),
                a = u[0],
                f = t(i[0] && i[0].split(";")[1] || e(r)),
                l = t(u[2] || e(n));
                soundWave.trigger(a, l),
                s.isStoped ? (clearTimeout(s.playTimer), s.isStoped = !1) : s.playTimer = setTimeout(function() {
                    s.playing(i)
                },
                f)
            }
        };
        return i.prototype.start = function(e) {
            this.isStoped = !1,
            this.playing(e)
        },
        i.prototype.stop = function() {
            this.isStoped = !0
        },
        i
    } (),
    r = function() {
        var t = function() {
            var t = this;
            this.data = [],
            this.startTime = null,
            this.triggerHander = function(n) {
                var r = +(new Date);
                t.startTime || (t.startTime = r);
                var i = [n.noteId, e(r - t.startTime)];
                t.data.push(i.join(";")),
                t.startTime = r
            }
        };
        return t.prototype.start = function() {
            this.data = [],
            this.startTime = null,
            soundWave.on("trigger", this.triggerHander)
        },
        t.prototype.stop = function() {
            return soundWave.un("trigger", this.triggerHander),
            this.data
        },
        t
    } (),
    i = {
        EMPTY: "empty",
        LOADED: "loaded",
        PLAYING: "playing",
        RECORDING: "recording",
        PAUSED: "paused"
    },
    s = {
        LOAD: "load",
        PLAY: "play",
        RECORD: "record",
        STOP: "stop",
        PAUSE: "pause",
        EJECT: "eject"
    },
    o = function() {
        var e = {};
        return {
            reg: function(t, n, r) {
                e[t] || (e[t] = {}),
                e[t][n] = r
            },
            next: function(t, n) {
                var r = n;
                return e[t] && e[t][n] && (r = e[t][n]),
                r
            }
        }
    } ();
    o.reg(s.LOAD, i.EMPTY, i.LOADED),
    o.reg(s.PLAY, i.LOADED, i.PLAYING),
    o.reg(s.PLAY, i.PAUSED, i.PLAYING),
    o.reg(s.RECORD, i.LOADED, i.RECORDING),
    o.reg(s.STOP, i.PLAYING, i.LOADED),
    o.reg(s.STOP, i.RECORDING, i.LOADED),
    o.reg(s.PAUSE, i.PLAYING, i.PAUSED),
    o.reg(s.EJECT, i.LOADED, i.EMPTY);
    var u = function(e) {
        var t = this;
        this.currState = i.EMPTY,
        this.loadedTape = e || null,
        this.recorder = new r,
        this.player = new n,
        this.player.autoStop = function() {
            t.__fire(s.STOP)
        }
    };
    u.prototype.__fire = function(e) {
        var t = this.currState,
        n = o.next(e, this.currState);
        if (t == i.LOADED && n == i.PLAYING) {
            var r = this.loadedTape && this.loadedTape.getData() || [];
            this.player.start(r)
        } else if (t == i.LOADED && n == i.RECORDING) this.recorder.start();
        else if (t == i.PLAYING && n == i.LOADED) this.player.stop();
        else if (t == i.RECORDING && n == i.LOADED) {
            var r = this.recorder.stop();
            this.loadedTape && this.loadedTape.setData(r)
        }
        this.currState = n
    },
    u.prototype.load = function(e) {
        this.loadedTape = e || null,
        this.__fire(s.LOAD)
    },
    u.prototype.superPlay = function() {
        this.__fire(s.LOAD),
        this.__fire(s.STOP),
        this.__fire(s.PLAY)
    },
    u.prototype.play = function() {
        this.__fire(s.PLAY)
    },
    u.prototype.stop = function() {
        this.__fire(s.STOP)
    },
    u.prototype.superRecord = function() {
        this.__fire(s.LOAD),
        this.__fire(s.STOP),
        this.__fire(s.RECORD)
    },
    u.prototype.record = function() {
        this.__fire(s.RECORD)
    },
    u.prototype.eject = function() {
        this.__fire(s.EJECT);
        var e = this.loadedTape;
        return this.loadedTape = null,
        e
    },
    u.prototype.getTape = function() {
        return this.loadedTape
    },
    u.prototype.getState = function() {
        return this.currState
    },
    window.TapeDeck = u
} (); (function() {
    var e = 0,
    t = 6,
    n = 330,
    r = !!document.createElement("audio").canPlayType && "" != document.createElement("audio").canPlayType('audio/mpeg; codecs="mp3"'),
    i = !!document.createElement("audio").canPlayType && "" != document.createElement("audio").canPlayType('audio/ogg; codecs="opus"'),
    s = function(e, t, n) {
        return "http://s8.qhimg.com/share/audio/piano1/" + t.toLowerCase() + ( + e + 1) + "." + n
    },
    o = function(e) {
        e = e || {},
        this.baseRange = 4
    };
    o.KEYS = {
        DO: "C",
        RE: "D",
        MI: "E",
        FA: "F",
        SO: "G",
        LA: "A",
        XI: "B"
    },
    o.isCanUse = function() {
        var e = r || i;
        return o.isCanUse = function() {
            return e
        },
        e
    },
    o.superTone = function() {
        var e = {},
        t = function(e, t, n) {
            return "http://s8.qhimg.com/share/audio/piano1/" + t.toLowerCase() + ( + e + 1) + "." + n
        },
        n = function(e, t) {
            var n = new Audio;
            return n.autoplay = !1,
            n.loop = !1,
            n.preload = "auto",
            n.autobuffer = !0,
            n.setAttribute("data-loadeddata", "false"),
            n.addEventListener("loadeddata",
            function() {
                n.setAttribute("data-loadeddata", "true")
            }),
            i ? n.src = s(e, t, "ogg") : r && (n.src = s(e, t, "mp3")),
            n
        },
        o = function(t, n, r) {
            var i = t + n;
            e[i] || (e[i] = []),
            r && e[i].push(r)
        },
        u = function(t, r) {
            var i = t + r;
            return ! e[i] || e[i].length <= 0 ? (e[i] = [], o(t, r, n(t, r))) : e[i].length > 5 && e[i].splice(4, e[i].length - 5),
            e[i]
        },
        a = function(e) {
            setTimeout(function() {
                try {
                    e.currentTime = 0,
                    e.play()
                } catch(t) {}
            })
        };
        return {
            load: function(e, t) {
                var n = u(e, t);
                n[0].load()
            },
            play: function(e, t) {
                var n = u(e, t),
                r = n.shift();
                r.addEventListener("ended",
                function() {
                    r.setAttribute("data-loadeddata", "true"),
                    r.removeEventListener("ended", arguments.callee),
                    o(e, t, r)
                });
                if (r.getAttribute("data-loadeddata") == "false") {
                    r.load();
                    var i = !1;
                    r.addEventListener("loadeddata",
                    function() {
                        i || a(r),
                        r.removeEventListener("loadeddata", arguments.callee)
                    }),
                    setTimeout(function() {
                        i = !0,
                        r.setAttribute("data-loadeddata", "true")
                    },
                    1e3)
                } else a(r)
            },
            getDepot: function() {
                return e
            }
        }
    } (),
    o.prototype.preload = function(e, t) {
        o.superTone.load(t, e)
    };
    var u = {
        1 : o.KEYS.DO,
        2 : o.KEYS.RE,
        3 : o.KEYS.MI,
        4 : o.KEYS.FA,
        5 : o.KEYS.SO,
        6 : o.KEYS.LA,
        7 : o.KEYS.XI
    },
    a = [o.KEYS.DO, o.KEYS.RE, o.KEYS.MI, o.KEYS.FA, o.KEYS.SO, o.KEYS.LA, o.KEYS.XI],
    f = function(e, t) {
        return e + "-" + t
    },
    l = function(e) {
        return ! isNaN( + e) && u[e] ? !0 : !1
    },
    c = function(e) {
        return ! isNaN( + e) && +e > -2 && +e < 8
    },
    h = function(e) {
        return a.indexOf(e) > -1
    };
    o.prototype.setRange = function(e) {
        return e && c(e) ? (this.baseRange = e, !0) : !1
    },
    o.prototype.tap = function(e, t) {
        l(e) && (e = u[e]);
        if (!t || !c(t)) t = this.baseRange;
        if (!h(e)) return;
        o.superTone.play(t, e)
    };
    var p = function(n) {
        return this.preloaded = !1,
        this.pronouncedNotes = {},
        this.pronouncedCount = 0,
        this.baseRangeIndex = 3,
        this.muteIsOn = !1,
        this.preloadThreshold = 100,
        typeof n != "undefined" && parseInt(n) >= e && parseInt(n) <= t && (this.baseRangeIndex = parseInt(n)),
        this.instrument = new o,
        this.setPreloadThreshold(3),
        this
    };
    p.keyNumConf = {
        1 : [o.KEYS.DO, 0],
        2 : [o.KEYS.RE, 0],
        3 : [o.KEYS.MI, 0],
        4 : [o.KEYS.FA, 0],
        5 : [o.KEYS.SO, 0],
        6 : [o.KEYS.LA, 0],
        7 : [o.KEYS.XI, 0],
        8 : [o.KEYS.DO, 1],
        9 : [o.KEYS.RE, 1]
    },
    p.prototype.isCanUse = p.isCanUse = o.isCanUse,
    p.prototype.preload = function() {
        if (this.preloaded || this.muteIsOn) return;
        for (var e in p.keyNumConf) {
            var t = p.keyNumConf[e];
            this.instrument.preload(t[0], this.baseRangeIndex + t[1])
        }
        this.preloaded = !0
    },
    p.prototype.pronounce = function(e) {
        if (typeof e == "undefined" || this.muteIsOn) return;
        var t = p.keyNumConf[e];
        if (!t) return;
        this.instrument.tap(t[0], this.baseRangeIndex + t[1]),
        this.pronouncedNotes[e] || (this.pronouncedNotes[e] = 1, this.pronouncedCount++, this.preloadThreshold <= this.pronouncedCount && this.preload())
    },
    p.prototype.setPreloadThreshold = function(e) {
        typeof e != "undefined" && parseInt(e) > -1 && (this.preloadThreshold = parseInt(e), this.preloadThreshold == 0 && this.preload())
    },
    p.prototype.onMute = function() {
        this.muteIsOn = !0
    },
    p.prototype.offMute = function() {
        this.muteIsOn = !1
    },
    window.Musical = p,
    window.Piano = o
})(); (function() {
    function e(e, t) {
        this._doms = e.toArray(),
        this._render(t),
        this.triggers = t.triggers || [{
            window: "resize"
        },
        {
            window: "scroll"
        }],
        this._init()
    }
    e.prototype.getCurrent = function() {
        return this.current
    },
    e.prototype._init = function() {
        if (this.triggers) {
            var e = {
                window: window,
                document: document
            },
            t = this;
            this.triggers.forEach(function(n) {
                for (var r in n) {
                    var i = n[r];
                    e[r] && (r = e[r]),
                    W(r).on(i,
                    function() {
                        t.dealWithDisplay()
                    })
                }
            })
        }
    },
    e.prototype._loadTextareaChildDom = function(e) {
        var t = W(this._doms[e]).query("TEXTAREA");
        t.length && (W(this._doms[e]).html(W(t[0]).val()), this._doms.splice(e, 1))
    },
    e.prototype._loadImage = function(e) {
        var t = this._doms[e],
        n = W(t).attr(this.imageRealPath);
        n && (W(this._doms[e]).attr("src", n), this._doms.splice(e, 1))
    },
    e.prototype._loadDoms = function(e) {
        this.current = W(this._doms[e]);
        if (this.onbeforeload && this.onbeforeload() === !1) return ! 1;
        switch (this.lazyloaderType) {
        case "blocker":
            this._loadTextareaChildDom(e);
            break;
        case "imager":
            this._loadImage(e)
        }
        if (this.onafterload && this.onafterload() === !1) return ! 1
    },
    e.prototype.dealWithDisplay = function() {
        var e = DomU.getDocRect(),
        t = {
            left: e.scrollX,
            right: e.width + e.scrollX + this.threshold,
            top: e.scrollY,
            bottom: e.height + e.scrollY + this.threshold
        };
        for (var n = 0; n < this._doms.length; ++n) {
            var r = NodeH.getRect(this._doms[n]);
            DomU.rectIntersect(r, t) && this._loadDoms(n)
        }
    },
    e.prototype._render = function(e) {
        this.lazyloaderType = e.lazyloaderType || "blocker",
        this.imageRealPath = e.imageRealPath || "data-src",
        this.threshold = e.threshold || 0,
        this.onbeforeload = e.onbeforeload,
        this.onafterload = e.onafterload
    },
    window.lazyLoader = e
})();
var MessagePushServer = function() {
    function s() {
        var e = qboot.cookie.get(r) || 0;
        qboot.jsonp(HAO_CONFIG.pushServer.host.format(e, "MessagePushServer.callback"))
    }
    var e = {},
    t = QW.TweetH,
    n = qboot.mix,
    r = "msgMaxId",
    i = 9e5;
    return e.callback = function(e) {
        var n = e.ti * 1e3;
        t.tweet(document, "message-push", e),
        setTimeout(function() {
            s()
        },
        n)
    },
    e.run = function(e) { ! e || (i = e),
        setTimeout(function() {
            s()
        },
        i)
    },
    e
} (),
MESSAGE_PUSH_RATE = parseFloat(hao360.g("message-push-rate").value);
Math.random() > MESSAGE_PUSH_RATE && MessagePushServer.run();
M("#topbar",
function(e, t) {
    var n = function(t) {
        var t = t || "on";
        t == "off" ? (e("#toolbar-edition").removeClass("on"), e(".more-edition").hide()) : (e("#toolbar-edition").addClass("on"), e(".more-edition").show())
    };
    e("#toolbar-edition").click(function(e) {
        e.preventDefault(),
        n()
    }).on("mouseenter",
    function(t) {
        e("#toolbar-edition").addClass("on")
    }).on("mouseleave",
    function(e) {
        n("off")
    }),
    e(".more-edition>div").hover(function(t) {
        e(this).toggleClass("hover")
    }).click(function(n) {
        n.preventDefault(),
        t.tweet("index-change", {
            index: e(this).attr("data-v")
        })
    });
    var r = {
        my: "http://hao.360.cn/i/index.html",
        kuanping: "http://hao.360.cn/kuanping.html"
    };
    t.receive("index-change",
    function(e) {
        var t = r[e.data.index];
        typeof t == "string" ? (qboot.cookie.set("360WEBINDEXCK", t, {
            expires: 31536e6
        }), setTimeout(function() {
            window.location.href = t
        },
        200)) : typeof t == "function" && t()
    }),
    e("#toolbar-themetrigger").click(function(e) {
        e.preventDefault();
        var n = QW.W("#theme-panel").css("display") == "none";
        t.tweet("theme-trigger", {
            event: "click",
            status: n ? "open": "close"
        })
    }).on("mouseenter",
    function(e) {
        t.tweet("theme-trigger", {
            event: "mouseover"
        })
    }),
    t.receive("theme-trigger",
    function(t) {
        if (t.data.event === "click") {
            var n = e("#toolbar-themetrigger");
            t.data.status == "open" ? n.addClass("on").html("\u8fd4\u56de").attr("title", "\u8fd4\u56de") : n.removeClass("on").html("\u6362\u80a4").attr("title", "\u6362\u80a4")
        }
        t.data.event === "mouseover"
    })
});
qboot.load(function() {
    document.getElementById("suggest-container") || QW.W("body").insertAdjacentHTML("beforeend", '<div id="suggest-container" style="visibility: hidden;"><div class="suggest-bd"></div><div class="suggest-ft"><div class="declare">\u8be5\u70ed\u70b9\u6765\u81ea\u7f51\u7edc</div></div></div>')
},
function() {
    var e = W("#search-kw")[0],
    t = W("#search-input")[0],
    n = W("#suggest-container")[0],
    r = W("#suggest-container .suggest-bd")[0],
    i = e.form,
    s = new qSuggest(e, {
        uiReferElem: t,
        uiWrapElem: n,
        uiContainerElem: r,
        posAdjust: {
            width: -2,
            top: -1
        },
        recAllTimeout: 120
    }),
    o = function() {
        var t = navigator.userAgent.toLowerCase(),
        n = /webkit/.test(t) && !/qqbrowser/.test(t);
        return n && W("body").appendChild("<a id='cbdopen' href='' rel='noreferrer' style='position:absolute;top:-100px;left:-100px;'>cbdopen</a>"),
        function() {
            var t = search.get() || [],
            r = t[0],
            i = t[1];
            if (i === "baidu") {
                var s = HAO_DATA.searchTabData.searchEngConf[r].baidu,
                o = s[0] + "?" + s[1] + "=" + encodeURIComponent(e.value) + "&" + s[4].replace(/:/g, "=").split(";").join("&"),
                u = !1;
                try {
                    if (n) {
                        var a = document.getElementById("cbdopen");
                        a.href = o;
                        if (document.createEvent) {
                            var f = document.createEvent("MouseEvents");
                            f.initEvent("click", !0, !1),
                            a.dispatchEvent(f)
                        } else a.click();
                        u = !0
                    } else {
                        var l = window.open(o);
                        l && l.opener && (u = !0)
                    }
                } catch(c) {
                    u = !1
                }
                return !! u
            }
            return ! 1
        }
    } (); (function() {
        var e = qSuggest.log,
        t = s,
        n = t.ui,
        r = t.data,
        i = "reci",
        u = "direct",
        a = "common",
        f = {},
        l = {},
        c = function(e) {
            return String(e).replace(/[^\x00-\xff]/g, "abc").replace(/[\d]/g, "abc").length
        },
        h = !1;
        f[a] = [1, 50],
        f[u] = [6, 50],
        l[a] = [],
        l[u] = [],
        l[i] = [],
        n.searchForm.on("submit",
        function(e) {
            var r = n.getFocusedGroup();
            if (r == u) {
                var s = W("#suggest-direct>a.hover");
                s[0] && h ? (window.open(s.attr("href")), e.preventDefault && e.preventDefault(), h = !1) : o() && e.preventDefault && e.preventDefault()
            } else {
                var s = W("#suggest-reci>a.hover");
                r == i && s[0] && s.attr("href") && h ? (window.open(s.attr("href")), e.preventDefault && e.preventDefault(), h = !1) : o() && e.preventDefault && e.preventDefault()
            }
            n.getTextInputVal() == t.query && LogHub.suggest("nosuggestClk", {
                inputKw: n.getTextInputVal()
            }),
            LogHub.search("query", {
                query: n.getTextInputVal()
            })
        }),
        function() {
            var e = {},
            r = {};
            Feed.hotword(function(e) {
                r = e
            });
            var s = W("#search-hotword-tips");
            W("#suggest-container").delegate("#reci-auto-show", "click",
            function() {
                W(this).attr("checked") ? (qboot.cookie.set("reciDenyAutoShow", 1, {
                    expires: 31536e6
                }), s.fadeIn(1e3,
                function() {
                    setTimeout(function() {
                        s.fadeOut()
                    },
                    3500)
                })) : (s.fadeOut(1e3), qboot.cookie.remove("reciDenyAutoShow"))
            }),
            W("#search-hotword").on("click",
            function(e) {
                var r = W(this);
                r.hasClass("open") ? (n.hide(), r.removeClass("open")) : (W("#suggest-reci")[0] ? n.show() : (t.query = "", n.render()), r.addClass("open")),
                n.focusTextInput(),
                n.on("change",
                function(e) {
                    n.hide(),
                    n.un("change", arguments.callee)
                })
            }),
            n.on("show",
            function() {
                n.getTextInputVal().trim() == "" && (W("#search-hotword").addClass("open"), LogHub.reci("show", {
                    cate: search.getCate()
                }))
            }),
            n.on("hide",
            function() {
                W("#search-hotword").removeClass("open")
            }),
            W(document).receive("search-cate-change",
            function(e) {
                t.query == "" && W("#suggest-reci")[0] && (n.fillContent(), n.query = n.getTextInputVal())
            }),
            n.on("change",
            function(e) {
                e.query || n.hide(),
                W("#search-kw").tweet("query-change", {
                    query: e.query
                })
            }),
            n.textInput.on("mousedown",
            function(e) {
                n.getTextInputVal().trim() == "" && (n.isVisible() || !qboot.cookie.get("reciDenyAutoShow")) && W("#search-hotword").fire("click")
            }),
            n.textInput.on("keydown",
            function(e) {
                var t = n.container.html() ? !0 : !1; ! t && e.keyCode == 40 && n.getTextInputVal().trim() == "" && W("#search-hotword").fire("click")
            }),
            n.bindGroupHandler(i, {
                render: {
                    setup: function() {
                        l[i] = []
                    },
                    build: function() {
                        if (t.query == "") {
                            var s = search.getCate();
                            if (r[s]) {
                                if (!e[s]) {
                                    e[s] = {};
                                    var o = "",
                                    u = e[s].total = r[s].length,
                                    a = "",
                                    f = [];
                                    for (var l = 0; l < u; l++) a = l < 3 ? "<em class='hot'>" + (l + 1) + "</em>": "<em>" + (l + 1) + "</em>",
                                    f = [],
                                    +r[s][l][2] && f.push("new"),
                                    o += "<a" + (r[s][l][1] ? ' href=""': "") + ' data-text="' + r[s][l][0] + '" data-index="' + l + '">' + a + '<span class="' + f.join(" ") + '">' + r[s][l][0] + "</span></a>";
                                    e[s].content = o ? '<div id="suggest-reci">' + o + '': ""
                                }
                                return n.setGroupTotal(i, e[s].total),
                                e[s].content.replace("checkedtmpl", qboot.cookie.get("reciDenyAutoShow") ? "checked": "")
                            }
                            return ""
                        }
                        W("#search-hotword").removeClass("open")
                    },
                    teardown: function() {
                        l[i] = W("#suggest-reci>a")
                    }
                },
                init: function() {
                    n.initGroupMouseBehavior(i, "#suggest-reci>a"),
                    n.container.delegate("#suggest-reci>a", "click",
                    function(e) {
                        W(this).attr("href") || e.preventDefault()
                    }),
                    n.on("itemSelect",
                    function(e) {
                        if (e.group !== i) return;
                        if (e.index > -1 && l[i][e.index]) {
                            var t = l[i].item(e.index),
                            r = t.attr("data-text");
                            e.trigger != "keyboard" && n.setTextInputVal(r),
                            t.attr("href") ? e.trigger == "keyboard" && n.getTextInputVal() == r && (h = !0) : n.fire("enter", {
                                trigger: e.trigger
                            }),
                            LogHub.reci("click", {
                                cate: search.getCate(),
                                text: t.attr("data-text"),
                                link: t.attr("href")
                            })
                        }
                    }),
                    n.on("itemFocus",
                    function(e) {
                        if (e.group !== i) return;
                        if (e.index > -1 && l[i][e.index]) {
                            var t = l[i].item(e.index);
                            t.addClass("hover"),
                            e.trigger === "keyboard" && n.setTextInputVal(t.attr("data-text"))
                        }
                    }),
                    n.on("itemBlur",
                    function(e) {
                        if (e.group !== i) return;
                        e.index > -1 && l[i][e.index] && l[i].item(e.index).removeClass("hover")
                    })
                }
            })
        } (),
        r.bindGroupHandler(a, {
            request: function(e, t) {
                if (!t || !e) return;
                if (e.indexOf("?") > -1) return;
                var n = c(e);
                n >= f[a][0] && n <= f[a][1] && qboot.jsonp("http://sug.so.360.cn/suggest?word=" + encodeURIComponent(e) + "&encodein=utf-8&caller=hao_home&encodeout=utf-8",
                function(e, n) {
                    t(e)
                },
                {
                    jsonp: "callback"
                })
            },
            receive: function(t) {
                if (t && t.q && t.s && t.s.length > 0) {
                    var n = c(t.q);
                    if (n > f[a][0] && n < f[u][0]) {
                        var i = t.s[0];
                        r.on("receiveOne",
                        function(n) {
                            n.name === u && (e("query [" + t.q + "] twice by [" + n.query + "]", n.data), r.setOne(n.name, t.q, n.data), r.un("receiveOne"))
                        }),
                        r.getOne(u, i)
                    }
                    return {
                        query: t.q,
                        data: t.s
                    }
                }
                return null
            }
        }),
        r.bindGroupHandler(u, {
            request: function(e, t) {
                if (!t || !e) return;
                if (e.indexOf("?") > -1) return;
                var n = c(e);
                n >= f[u][0] && n <= f[u][1] && qboot.jsonp("http://sug.h.qhimg.com/sug.php?ver=2.1&kw=" + encodeURIComponent(e) + "&from=hao360cn",
                function(e, n) {
                    t(e)
                },
                {
                    jsonp: "cb"
                })
            },
            receive: function(e) {
                return e && e.errno === 0 ? {
                    query: e.kw,
                    data: e
                }: null
            }
        }),
        n.bindGroupHandler(u, {
            render: {
                setup: function() {
                    l[u] = []
                },
                build: function(e) {
                    if (!e) return "";
                    if (e.res.length <= 0) return "";
                    var r = "",
                    i = e.app,
                    s = e.res[0];
                    i === "video" && (r = '<a class="video" data-subApp="' + i + '" data-text="' + s[0] + '" data-index="0" href="' + s[2] + '" hidefocus="false" style="outline:0;" target="_blank"><h2><strong>' + s[0] + "</strong> " + s[1] + '<ins class="hdicon"></ins></h2><div class="meta">' + s[3] + '</div><div class="meta">' + s[4] + "</div></a>"),
                    i === "website" && (r = '<a class="website" data-subApp="' + i + '" data-text="' + s[0] + '" data-index="0" href="' + s[2] + '" hidefocus="false" style="outline:0;" target="_blank"><h2><img src="' + s[4] + '" /><strong>' + s[0] + "</strong> - " + s[3] + '</h2><div class="meta">' + s[1] + "</div></a>");
                    if (i === "caipiao" || i === "mall" || i === "tuan" || i === "game") r = '<a class="' + i + '" data-subApp="' + i + '" data-text="' + s[0] + '" data-index="0" href="' + s[2] + '" hidefocus="false" style="outline:0;" target="_blank"><h2><strong>' + s[0] + "</strong> - " + s[1] + '</h2><div class="meta">' + s[3] + "</div></a>";
                    return r = r ? '<div id="suggest-direct">' + r + "</div>": "",
                    r && (n.setGroupTotal(u, 1), LogHub.suggest("directShow", {
                        inputKw: t.query,
                        directKw: s[0],
                        subApp: i
                    })),
                    r
                },
                teardown: function() {
                    l[u] = W("#suggest-direct>a")
                }
            },
            init: function() {
                n.initGroupMouseBehavior(u, "#suggest-direct>a"),
                n.on("itemSelect",
                function(r) {
                    if (r.group === u) {
                        e("itemSelect[DIRECT] index:" + r.index);
                        if (r.index > -1 && l[u][r.index]) {
                            var i = l[u].item(r.index),
                            s = i.attr("data-text");
                            r.trigger == "keyboard" && n.getTextInputVal() == s ? h = !0 : r.trigger != "keyboard" && n.setTextInputVal(s),
                            LogHub.suggest("directClk", {
                                inputKw: t.query,
                                directKw: s,
                                subApp: i.attr("data-subApp")
                            })
                        }
                    }
                }),
                n.on("itemFocus",
                function(e) {
                    if (e.group !== u) return;
                    if (e.index > -1 && l[u][e.index]) {
                        var t = l[u].item(e.index);
                        t.addClass("hover"),
                        e.trigger === "keyboard" && n.setTextInputVal(t.attr("data-text"))
                    }
                }),
                n.on("itemBlur",
                function(e) {
                    if (e.group !== u) return;
                    e.index > -1 && l[u][e.index] && l[u].item(e.index).removeClass("hover")
                })
            }
        }),
        n.bindGroupHandler(a, {
            render: {
                setup: function() {
                    l[a] = []
                },
                build: function() {
                    var e = 0;
                    return function(r) {
                        if (!r) return "";
                        var i = "",
                        s, o = t.query.length;
                        n.setGroupTotal(a, r.length);
                        for (var u = 0,
                        f = r.length; u < f; u++) {
                            r[u] = r[u].trim(),
                            s = r[u].toLowerCase();
                            if (s === t.query) continue;
                            s.indexOf(t.query) === 0 && (s = t.query + "<b>" + s.substring(o) + "</b>"),
                            i += '<a data-text="' + r[u] + '" data-index="' + u + '">' + s + "</a>"
                        }
                        return i = i ? '<div id="suggest-common">' + i + "</div>": "",
                        e != f && (e = f, W(".suggest-ft .declare").css("position", "relative").css("position", "absolute")),
                        i
                    }
                } (),
                teardown: function() {
                    l[a] = W("#suggest-common>a")
                }
            },
            init: function() {
                n.initGroupMouseBehavior(a, "#suggest-common>a"),
                n.container.delegate("#suggest-common>a", "click",
                function(e) {
                    e.preventDefault()
                }),
                n.on("itemSelect",
                function(r) {
                    if (r.group !== a) return;
                    if (r.index > -1 && l[a][r.index]) {
                        var i = l[a].item(r.index);
                        r.trigger != "keyboard" && n.setTextInputVal(i.attr("data-text")),
                        n.fire("enter", {
                            trigger: r.trigger
                        }),
                        e("itemSelect[COMMON] index:" + r.index),
                        LogHub.suggest("commonClk", {
                            inputKw: t.query,
                            suggestKw: i.attr("data-text"),
                            index: r.index,
                            eng: search.get()[1]
                        })
                    }
                }),
                n.on("itemFocus",
                function(e) {
                    if (e.group !== a) return;
                    if (e.index > -1 && l[a][e.index]) {
                        var t = l[a].item(e.index);
                        t.addClass("hover"),
                        e.trigger === "keyboard" && n.setTextInputVal(t.attr("data-text"))
                    }
                }),
                n.on("itemBlur",
                function(e) {
                    if (e.group !== a) return;
                    e.index > -1 && l[a][e.index] && l[a].item(e.index).removeClass("hover")
                })
            }
        }),
        n.on("itemSelect",
        function(e) {
            n.hide()
        }),
        W(document).on("mouseup",
        function(e) {
            var t = W(e.target); (!t.attr("id") || ["search-kw", "search-hotword", "suggest-container"].indexOf(t.attr("id")) == -1) && !t.parentNode("#search-kw")[0] && !t.parentNode("#suggest-container")[0] && !t.parentNode("#search-hotword")[0] && n.hide()
        }),
        W(window).on("blur",
        function() {
            n.hide()
        })
    })()
});
M("#theme-panel",
function(e, t) {
    var n = new Theme,
    r = {},
    i = null,
    s = !1,
    o = 6,
    u = 1,
    a = -150,
    f = function(t) {
        t.keyCode == 37 && e(".page .prev").click(),
        t.keyCode == 39 && e(".page .next").click(),
        t.keyCode == 27 && e(".btn-cancel").click()
    },
    l = function(e, t) {
        hao360.themeData = [e, t],
        (new AppData("api.hao.360.cn", HAO_CONFIG.themeConfig.r)).set("userTheme", [e, t])
    },
    c = function(n) {
        s = !0,
        n = n.data;
        var i = "",
        o = "",
        a = n.length;
        u = Math.ceil(a / 6);
        for (var f = 0; f < a; f++) o += '<li data-key="' + n[f].key + '"><div class="cover"><img src="' + (n[f].cover || "") + '"/></div><div class="title"><em>' + n[f].name + "</em></div></li>",
        r[n[f].key] = n[f];
        i = '<div class="theme-panel-bd"><div class="list"><ul>' + o + '</ul></div><div class="page"><em>1</em>/<span>' + u + '</span>\u9875 <a class="prev" data-p="0" onselectstart="return false;">\u4e0a\u4e00\u9875</a><a class="next" data-p="2" onselectstart="return false;">\u4e0b\u4e00\u9875</a></div><div class="operate"><input type="button" class="btn-save" /><input type="button" class="btn-cancel" /><a href="http://bbs.360.cn/4261557/47511422.html">\u65e0\u6cd5\u4fdd\u5b58\u76ae\u80a4\uff1f</a></div></div>',
        t.html(i),
        e(".list li[data-key=" + hao360.themeData[0] + "]").addClass("on"),
        r[hao360.themeData[0]] && r[hao360.themeData[0]].snapshotnum != hao360.themeData[1] && (hao360.themeData[1] = r[hao360.themeData[0]].snapshotnum, l(hao360.themeData[0], hao360.themeData[1]))
    },
    h = function(t) {
        if (t < 1 || t > u) return;
        e(".list>ul").css("marginTop", a * (t - 1) + "px"),
        e(".page>em").html(t),
        e(".page>.prev").attr("data-p", t - 1),
        e(".page>.next").attr("data-p", t + 1)
    },
    p = function(e) {
        var t = r[e];
        return t && t.snapshotnum ? "http://" + HAO_CONFIG.themeConfig.domain + "/theme.php?theme=" + t.key + "&v=" + HAO_CONFIG.themeConfig.v + "&r=" + t.snapshotnum: ""
    },
    d = function(e) {
        if (!e) return;
        var t = document.getElementById("themeFile");
        t ? t.href = e: (t = document.createElement("link"), t.rel = "stylesheet", t.id = "themeFile", t.href = e, document.getElementsByTagName("head")[0].appendChild(t))
    },
    v = function(e) {
        d(p(e))
    };
    t.delegate(".list li", "click",
    function(n) {
        n.preventDefault(),
        e(".list li").removeClass("on"),
        e(this).addClass("on"),
        t.tweet("theme-change", {
            theme: e(this).attr("data-key")
        })
    }).delegate(".list li", "mouseover",
    function(n) {
        e(this).attr("preload") != "1" && (t.tweet("theme-preload", {
            theme: e(this).attr("data-key")
        }), e(this).attr("preload", "1"))
    }).delegate(".page>a", "click",
    function(n) {
        n.preventDefault(),
        t.tweet("theme-turnpage", {
            pagenum: e(this).attr("data-p") | 0
        })
    }).delegate(".btn-cancel", "click",
    function(e) {
        e.preventDefault(),
        t.tweet("theme-cancel"),
        t.tweet("theme-trigger", {
            event: "click",
            status: "close"
        })
    }).delegate(".btn-save", "click",
    function(e) {
        e.preventDefault(),
        t.tweet("theme-save"),
        t.tweet("theme-trigger", {
            event: "click",
            status: "close"
        })
    }),
    t.receive("theme-trigger",
    function(e) {
        e.data.event === "click" && (t.tweet(e.data.status == "open" ? "theme-open": "theme-close"), !s && n.getList(c)),
        e.data.event === "mouseover" && !s && n.getList(c)
    }),
    t.receive("theme-open",
    function(e) {
        t.slideDown(200),
        QW.W("body").on("keydown", f),
        LogHub.theme("open")
    }),
    t.receive("theme-close",
    function(e) {
        t.slideUp(200),
        QW.W("body").un("keydown", f),
        LogHub.theme("close")
    }),
    t.receive("theme-change",
    function(e) {
        i = e.data.theme,
        v(i),
        LogHub.theme("select", {
            theme: i
        })
    }),
    t.receive("theme-preload",
    function(e) {
        var t = e.data.theme;
        qboot.load("preload",
        function() {
            qboot.preload(p(t))
        })
    }),
    t.receive("theme-save",
    function(e) {
        if (r[i]) {
            var t = r[i];
            l(i, t.snapshotnum)
        }
        LogHub.theme("save", {
            theme: i
        })
    }),
    t.receive("theme-cancel",
    function(t) {
        var n = i;
        i = null,
        e(".list li").removeClass("on"),
        e(".list li[data-key=" + hao360.themeData[0] + "]").addClass("on"),
        v(hao360.themeData[0]),
        LogHub.theme("cancel", {
            theme: n
        })
    }),
    t.receive("theme-turnpage",
    function(e) {
        h(e.data.pagenum),
        LogHub.theme("turnpage")
    }),
    hao360.saveTheme = function(e) {
        var n = r[e];
        if (n && n.snapshotnum) t.tweet("theme-change", {
            theme: e
        }),
        t.tweet("theme-save");
        else {
            var i = API_SNAPSHOTNUM.theme && API_SNAPSHOTNUM.theme[e] ? API_SNAPSHOTNUM.theme[e] : "";
            d("http://" + HAO_CONFIG.themeConfig.domain + "/theme.php?theme=" + e + "&v=" + HAO_CONFIG.themeConfig.v + "&r=" + i),
            l(e, i)
        }
    }
});
M("#longlong",
function(e, t) {
    function r(e, t) {
        this.el = e,
        this.a = e.query("a.tab-item"),
        this.hotpic = e.query(".hot-pic"),
        this.opts = n({
            delay: 1e3
        },
        t, !0),
        this.init()
    }
    var n = qboot.mix;
    n(r.prototype, {
        showInloaded: function() {
            if (this.el.hasClass("on")) return;
            var e = 3e3 + Math.random() * 2e3,
            t = this,
            n = setTimeout(function() {
                t.show();
                var r = setTimeout(function() {
                    t.hide(),
                    clearTimeout(r)
                },
                e);
                clearTimeout(n)
            },
            t.opts.delay)
        },
        mEventHandle: function() {},
        init: function() {
            var e = this,
            t = this.hotpic.query("img").attr("src"),
            n = new Image;
            n.onload = function() {
                e.showInloaded()
            },
            n.src = t,
            this.mEventHandle()
        }
    });
    var i = {
        show: function() {
            this.a.addClass("hover")
        },
        hide: function() {
            this.a.removeClass("hover")
        }
    },
    s = {
        show: function() {
            this.hotpic.animate({
                top: {
                    to: "1px"
                }
            },
            100)
        },
        hide: function() {
            this.hotpic.animate({
                top: {
                    to: "38px"
                }
            },
            300)
        },
        mEventHandle: function() {
            var e = this,
            t = this.el,
            n = this.hotpic.query("img");
            t.hover(function() {
                t.hasClass("on") || e.show()
            },
            function() {
                e.hide()
            })
        }
    };
    Browser.ie < 9 ? n(r.prototype, s, !0) : n(r.prototype, i, !0),
    e(".hot-pic").forEach(function(t) {
        var n = e(t).parentNode("li");
        new r(n)
    })
});
M("#longlong",
function(e, t) {
    var n = 0,
    r = !1,
    i = 15e3,
    s = 7;
    t.receive("menupiano-trigger",
    function() {
        n++,
        r || (r = !0, setTimeout(function() {
            n > s && LogHub.behavior("menupiano", "playing"),
            r = !1,
            n = 0
        },
        i))
    }),
    t.receive("menupiano-onMute",
    function() {
        LogHub.behavior("menupiano", "onMute")
    }),
    t.receive("menupiano-offMute",
    function() {
        LogHub.behavior("menupiano", "offMute")
    }),
    t.receive("menupiano-isOnMute",
    function() {
        LogHub.behavior("menupiano", "isOnMute")
    }),
    t.receive("menupiano-isOffMute",
    function() {
        LogHub.behavior("menupiano", "isOffMute")
    })
});
M("#menupiano-setting",
function(e, t) {
    function f(e, t, n) {
        this.sound = e,
        this.wave = t,
        this.opts = u({
            autoOffTime: -1
        },
        n, !0),
        o(this, ["trigger"])
    }
    function h(e, t) {
        function n() {
            c && (e = []);
            var r = e.shift();
            r && (l.trigger(r), setTimeout(function() {
                l.reset(r),
                n()
            },
            t || 60))
        }
        c = !1,
        n()
    }
    function p() {
        var t = [];
        QW.W("#longlong li[data-note]").forEach(function(n) {
            t.push(e(n).attr("data-note"))
        }),
        c = !0,
        h(t, 120)
    }
    var n = 350,
    r = !1,
    i = new Musical(3),
    s = function() {
        var e = "1.0",
        n = function(t) { (new AppData("api.hao.360.cn", e)).set("pianoIsMute1", t ? 1 : 0)
        },
        r = function() {
            return (new AppData("api.hao.360.cn", e)).get("pianoIsMute1")
        }; (new AppData("api.hao.360.cn", e)).remove("pianoIsMute");
        var s = !0;
        return r() == 0 && (s = !1),
        {
            isMute: function() {
                return s
            },
            onMute: function(e) {
                QW.W("#longlong").removeClass("menupiano"),
                e && n(!0),
                s = !0,
                t.removeClass("offmute").addClass("onmute").query("a").attr("title", "\u70b9\u51fb\u5f00\u542f\u58f0\u97f3"),
                i.onMute()
            },
            offMute: function(e) {
                QW.W("#longlong").addClass("menupiano"),
                e && n(!1),
                s = !1,
                t.removeClass("onmute").addClass("offmute").query("a").attr("title", "\u70b9\u51fb\u5173\u95ed\u58f0\u97f3"),
                i.offMute()
            },
            setInvalid: function() {
                t.addClass("invalid").query("a").attr("title", "\u5f00\u542f\u58f0\u97f3\u9700\u5347\u7ea7\u6d4f\u89c8\u5668")
            },
            setValid: function() {
                t.addClass("valid")
            }
        }
    } (),
    o = QW.CustEvent.createEvents,
    u = qboot.mix,
    a = {
        _tabs: {},
        timeInterval: 300,
        getCurTime: function() {
            return + (new Date)
        },
        down: function(e) {
            var t = this,
            n = Math.max(this._tabs[e] + this.timeInterval - this.getCurTime(), 0);
            setTimeout(function() {
                QW.W("#longlong li[data-note=" + e + "]").query("a").removeClass("hover"),
                delete t._tabs[e]
            },
            n)
        }
    };
    o(a, ["rise", "down"]),
    a.on("rise",
    function(e) {
        var t = e.noteId;
        this._tabs[t] = this.getCurTime(),
        QW.W("#longlong li[data-note=" + t + "]").query("a").addClass("hover")
    }),
    a.on("down",
    function(e) {
        var t = e.noteId,
        n = this;
        t ? this.down(t) : ObjectH.keys(this._tabs).forEach(function(e) {
            n.down(e)
        })
    }),
    u(f.prototype, {
        trigger: function(e, n) {
            var r = this,
            i = this.sound,
            o = this.wave;
            i && !s.isMute() && (i.pronounce(e), t.tweet("menupiano-trigger")),
            o && (o.fire("rise", {
                noteId: e
            }), n = n || this.opts.autoOffTime, n > -1 && setTimeout(function() {
                r.reset(e)
            },
            n || 0)),
            this.fire("trigger", {
                noteId: e,
                autoOffTime: n
            })
        },
        reset: function(e) {
            var t = this.wave;
            t && t.fire("down", {
                noteId: e
            })
        },
        addSound: function(e) {
            this.sound = e
        },
        removeSound: function() {
            delete this.sound
        },
        addWave: function(e) {
            this.wave = e
        },
        removeWave: function() {
            this.wave && (this.wave.fire("down"), delete this.wave)
        }
    });
    var l = new f(i, a),
    c = !1;
    if (!i.isCanUse()) s.setInvalid();
    else {
        var d = function() {
            s.setValid(),
            s.isMute() ? (s.onMute(), t.tweet("menupiano-isOnMute"), qboot.cookie.remove("caidangangqin1_tips"), qboot.cookie.remove("caidangangqin_tips")) : (s.offMute(), t.tweet("menupiano-isOffMute"))
        };
        d();
        var v, m;
        QW.W("#longlong").on("mouseenter",
        function() {
            v = setTimeout(function() {
                r = !0
            },
            n)
        }).on("mouseleave",
        function() {
            clearTimeout(v)
        }),
        QW.W("#longlong li[data-note]").hover(function() {
            var t = this;
            r ? r && l.trigger(e(this).attr("data-note")) : m = setTimeout(function() {
                r = !0,
                l.trigger(e(t).attr("data-note"))
            },
            n)
        },
        function() {
            r && l.reset(e(this).attr("data-note")),
            clearTimeout(m)
        }),
        t.click(function(e) {
            t.tweet("menupiano-tip-close"),
            t.tweet("menu-extra-total-silent"),
            s.isMute() ? (s.offMute(!0), t.tweet("menupiano-offMute"), setTimeout(function() {
                p()
            },
            0)) : (s.onMute(!0), t.tweet("menupiano-onMute"))
        }),
        t.receive("menu-extra-off-mute",
        function(e) {
            s.isMute() && s.offMute()
        }),
        function() {
            function r(e) {
                if (!isNaN(e) && e > 0 && e < 10) return ! 0
            }
            function i(e) {
                var i = t[e] ? t[e] : (String.fromCharCode(e) + "").toLowerCase();
                return i = n[i] || i,
                r( + i) ? i: null
            }
            function s(e) {
                if (["input", "textarea", "select"].indexOf(e.tagName.toLowerCase()) > -1) return ! 0
            }
            function o(e, t) {
                if (s(e)) return;
                var n = i(t);
                n !== null && l.trigger(n, 200)
            }
            var t = {
                8 : "backspace",
                9 : "tab",
                13 : "return",
                16 : "shift",
                17 : "ctrl",
                18 : "alt",
                19 : "pause",
                20 : "capslock",
                27 : "esc",
                32 : "space",
                33 : "pageup",
                34 : "pagedown",
                35 : "end",
                36 : "home",
                37 : "left",
                38 : "up",
                39 : "right",
                40 : "down",
                45 : "insert",
                46 : "del",
                96 : "0",
                97 : "1",
                98 : "2",
                99 : "3",
                100 : "4",
                101 : "5",
                102 : "6",
                103 : "7",
                104 : "8",
                105 : "9",
                106 : "*",
                107 : "+",
                109 : "-",
                110 : ".",
                111 : "/",
                112 : "f1",
                113 : "f2",
                114 : "f3",
                115 : "f4",
                116 : "f5",
                117 : "f6",
                118 : "f7",
                119 : "f8",
                120 : "f9",
                121 : "f10",
                122 : "f11",
                123 : "f12",
                144 : "numlock",
                145 : "scroll",
                188 : ",",
                190 : ".",
                191 : "/",
                224 : "meta"
            },
            n = {
                a: 1,
                s: 2,
                d: 3,
                f: 4,
                g: 5,
                h: 6,
                j: 7,
                k: 8,
                l: 9
            },
            u = function() {
                e(document).on("keydown",
                function(e) {
                    o(e.target, e.keyCode)
                })
            };
            u(),
            hao360.keySoundWave = o
        } ()
    }
    window.soundWave = l
}),
function() {
    function t() {
        var e = location.hash.toLowerCase();
        if (/^#music(\d\;\d+(\;\d+)?(\-?))+$/.test(e)) return e.substr(6).split("-");
        if (/^#music(\d\|\d+(\|\d+)?(,?))+$/.test(e)) return e = e.replace(/\|/g, ";"),
        e.substr(6).split(",");
        if (/^#music\d+$/.test(e)) return e.substr(6).split("")
    }
    function n(t) {
        W(document).tweet("menu-extra-off-mute");
        var n = new Tape;
        n.setData(t || []),
        W(document).tweet("menu-extra-total-silent"),
        e.load(n),
        e.play()
    }
    function r() {
        var r = t();
        r && (soundWave.sound.preload(), setTimeout(function() {
            n(r)
        },
        2e3)),
        W(window).on("hashchange",
        function(e) {
            var r = t();
            r && n(r)
        }),
        W(document).on("keydown",
        function(t) {
            t.keyCode == 27 && e.stop()
        }),
        W(document).receive("menu-extra-total-silent",
        function(t) {
            e.stop()
        })
    }
    var e = new TapeDeck;
    r()
} ();
M("#activity",
function(e, t) {
    var n = e("#activity-imgs-switch"),
    r = 1e4,
    i = function() {
        function f(n) {
            if (!n) {
                var i = e(".act-topic-list>li").first();
                t.appendChild(i)
            }
            e(".act-topic-list").animate({
                top: {
                    from: 0,
                    to: -r + "px"
                }
            }),
            s = setTimeout(function() {
                f()
            },
            a)
        }
        var t = e(".act-topic-list"),
        n = e(".act-topic-list>li").length,
        r = e(".act-topic-list>li").first().getSize().height,
        i = 0,
        s = 0,
        o = 0,
        u = 1e4,
        a = 1e4;
        n > 1 && setTimeout(function() {
            e(".act-topic-list").delegate("li", "mouseenter",
            function() {
                clearTimeout(s),
                clearTimeout(o)
            }).delegate("li", "mouseleave",
            function() {
                o = setTimeout(f, a / 2)
            }),
            f(!0)
        },
        u)
    },
    s = function() {
        if (e("[data-face]").length <= 1) return;
        var t = function(t, r) {
            var i, s = function(e) {
                clearTimeout(i)
            },
            o = function(u) {
                i = setTimeout(function() {
                    n(r),
                    e("[data-face=" + t + "]").un("mouseenter", s).un("mouseleave", o)
                },
                3e3)
            };
            e("[data-face=" + t + "]").on("mouseenter", s).on("mouseleave", o)
        },
        n = function(n) {
            var r = e("[data-face=" + n + "]");
            if (r[0]) {
                e("[data-face]").fadeOut(200),
                r.fadeIn(100);
                var i = r.attr("data-autoTurnFace");
                i && e("[data-face=" + i + "]")[0] && t(n, i)
            }
        };
        e("[data-face]").delegate("[data-clickTurnFace]", "click",
        function() {
            n(e(this).attr("data-clickTurnFace"))
        })
    },
    o = function() {
        var t = new QW.Slide(g("activity-imgs-switch"), {
            animType: "fade",
            autoPlayTime: r,
            viewSelector: ".slide-content div",
            autoPlay: !0,
            supportMouseenter: !0,
            mouseenterSwitchTime: 300,
            selectedIndex: 0,
            onbeforeswitch: function(t) {
                var n = e(t.toView).query("img"),
                r = n.attr("data-src"); ! n.attr("src") && r && n.attr("src", r)
            }
        });
        n.hover(function() {
            e(".slide-btn").toggle()
        })
    };
    e(".act-topic-list")[0] && i(),
    e("[data-face]")[0] && s(),
    n.length && o()
});
M({
    container: "#hot-site"
},
function(e, t) {
    var n = 0;
    e(".g-toggle").hover(function(t) {
        clearTimeout(n);
        var r = e(this).parentNode(".site-group");
        n = setTimeout(function() {
            e(".group-list").hide(),
            QW.W(".group-list", r).show()
        },
        300)
    },
    function() {
        clearTimeout(n);
        var t = e(this).parentNode(".site-group");
        n = setTimeout(function() {
            QW.W(".group-list", t).hide()
        },
        300)
    }),
    e(".group-list").hover(function(t) {
        clearTimeout(n),
        e(".group-list").hide(),
        e(this).show()
    },
    function(t) {
        var r = this;
        n = setTimeout(function() {
            e(r).hide()
        },
        300)
    }),
    e(".mynav-icon").click(function(n) {
        n.preventDefault();
        var r = QW.W("#hot-site").getRect().height - 2;
        e(".mynav-iframe").css("height", r + "px"),
        e(".mynav-iframe iframe").attr("src", "http://favorite.hao.360.cn/index.php?nocache=" + Math.random()),
        e("#mynav").addClass("open"),
        t.tweet("mynav-open")
    }),
    e(".btn-close").click(function(n) {
        n.preventDefault(),
        e("#mynav").removeClass("open"),
        t.tweet("mynav-close")
    })
});
M("#iguess",
function(e, t) {
    function a(t) {
        n = t,
        e(".iguess-page>.on").removeClass("on"),
        e(".iguess-page>span").item(t).addClass("on")
    }
    function f(e) {
        IGuess.get(function(n) {
            n && n.errno == IGuess.ERRORS.OK && n.guess.length && (s.setData(n).reRender(), t.tweet("changed-iguess-page", {
                pn: e
            }))
        },
        e + 1)
    }
    function l(n, r) {
        var i = e(".item[data-type=" + n + "] .inner");
        if (r !== undefined) i.query(">.list").removeClass("on"),
        e(i.query(">.list")[r]).addClass("on");
        else {
            var s = i.query(">.on"),
            o = s.nextSibling(".list").length ? s.nextSibling(".list") : i.query(">.list").first();
            s.removeClass("on"),
            o.addClass("on")
        }
        t.tweet("guess-showSites-changed")
    }
    function c(t) {
        IGuess.getType(t,
        function(n) {
            var r = n.sites,
            s = [];
            for (var a = 0,
            f = r.length; a < f; a += i) {
                var c = [];
                r.slice(a, a + i).forEach(function(e) {
                    qboot.mix(e, {
                        asin: "",
                        res: ""
                    }),
                    c.push(o(u, e))
                }),
                s.push(['<ul class="list">', "</ul>"].join(c.join("")))
            }
            e(".item[data-type=" + t + "] .inner").html(s.join("")),
            l(t, 1)
        })
    }
    function h(e) {
        if (!e.parentNode(".list").length) return;
        var t = e.parentNode(".item").attr("data-type"),
        n = (e.attr("asin") || e.attr("siteid")).substr(0, 16),
        r = e.attr("asin") ? 2 : 1;
        return [t, n, r].join("_")
    }
    function v() {
        var t = [],
        n = [];
        e(".inner>.on a").forEach(function(r) {
            var i = (e(r).attr("asin") || "").substr(0, 16),
            s = parseInt(e(r).attr("siteid"));
            i && !p.contains(i) && (t.push(r), p.push(i)),
            s && !d.contains(s) && (n.push(r), d.push(s))
        });
        var r = {
            adSites: t,
            notadSites: n
        };
        return r
    }
    function g() {
        var n = v(),
        r = n.adSites,
        i = n.notadSites,
        s = t.attr("data-v"),
        o = [],
        u = [];
        r.forEach(function(t) {
            var n = e(t);
            o.push(n.attr("asin")),
            u.push(h(n))
        }),
        i.forEach(function(t) {
            u.push(h(e(t)))
        }),
        o.length && LogHub.iguessShowed(o, m),
        u.length && LogHub.newIguessShowed(u, s)
    }
    var n = 0,
    r = +t.attr("data-totalPn") || 1,
    i = 6,
    s = R("iguess-wrap"),
    o = s.tmpl,
    u = QW.W("#iguess-link-template").html().trim();
    t.receive("changed-iguess-page",
    function(e) {
        a(e.data.pn),
        t.tweet("guess-showSites-changed")
    }),
    t.receive("change-iguess-page",
    function(e) {
        var t = e.data.toPn;
        f(parseInt(t))
    }),
    e(".iguess-page>a").click(function(i) {
        i.preventDefault();
        var s = e(this).hasClass("iguess-pre") ? "pre": "next",
        o = (n + r + (s == "pre" ? -1 : 1)) % r;
        t.tweet("change-iguess-page", {
            toPn: o
        })
    }),
    e(".iguess-page>span").forEach(function(t, n) {
        e(t).attr("data-pn", n)
    }).click(function(n) {
        n.preventDefault(),
        t.tweet("change-iguess-page", {
            toPn: e(this).attr("data-pn")
        })
    }),
    t.delegate(".item", "mouseenter",
    function() {
        e(this).addClass("hover")
    }).delegate(".item", "mouseleave",
    function() {
        e(this).removeClass("hover")
    }),
    t.receive("refresh-iguess-sites",
    function(t) {
        var n = t.data.type,
        r = e(".item[data-type=" + n + "]"),
        i = r.query(".inner");
        if (i.query(">.list").length == 1) {
            c(n);
            return
        }
        l(n),
        LogHub.iguess("refresh")
    }),
    t.delegate(".huan", "click",
    function(n) {
        n.preventDefault();
        var r = e(this).parentNode(".item"),
        i = r.attr("data-type");
        t.tweet("refresh-iguess-sites", {
            type: i
        })
    });
    var p = [],
    d = [];
    t.receive("iguess-clk",
    function(e) {
        var t = e.data.link;
        LogHub.iguess("click", {
            text: t.html(),
            link: t.attr("href"),
            res: t.attr("res") || "",
            siteid: t.attr("siteid") || 0,
            channel: "",
            asin: t.attr("asin") || "",
            tagid: ""
        },
        !1)
    }),
    t.receive("iguess-clk",
    function(e) {
        var n = e.data.link,
        r = h(n),
        i = t.attr("data-v");
        r && LogHub.newIguessClk(r, i)
    });
    var m = 0;
    t.receive("guess-showSites-changed",
    function() {
        setTimeout(g, 500)
    }),
    e("#iguess-wrap").delegate("a", "click",
    function(n) {
        var r = e(this);
        t.tweet("iguess-clk", {
            link: e(this)
        })
    }),
    qboot.await(function() {
        return s.getStatus() == R.STATUS_OK
    },
    function() {
        t.tweet("guess-showSites-changed")
    },
    function() {},
    500, 600)
});
M("#top-channel",
function(e, t) {
    function c(t, n, r) {
        var i = "slide" + n;
        for (var s in t) ! t[s] || (t[s].autoPlayPausing = !0); ! t[i] || r ? t[i] = new QW.Slide(e("#channel-news .tabview-cont .cover")[n], {
            animType: "fade",
            autoPlayTime: 1e4,
            tabSelector: ".slide-nav li",
            viewSelector: ".slide-content div",
            pageUpSelector: ".slide-pageup",
            pageDownSelector: ".slide-pagedown",
            autoPlay: !0,
            supportMouseenter: !0,
            mouseenterSwitchTime: 300,
            autoPlayPausing: !1,
            selectedIndex: 0
        }) : t[i].autoPlayPausing = !1
    }
    var n = QW.TweetH,
    r = HAO_CONFIG.feedsConfig.channeltop,
    i = new AppData("api.hao.360.cn", r.r),
    s = i.get(r.api, !0),
    o = s && i.getUpdatedTime(r.api) || 0,
    u = parseInt(t.attr("data-updatetime")),
    a = (new Date).getTime(),
    f = 3e5; (!s || o < u) && e("#channel-news .tabview-wrap .channel-data-default").replaceClass("channel-data-default", "tabview-cont").addClass("on");
    var l = {
        slide0: null,
        slide1: null,
        slide2: null,
        slide3: null
    };
    t.receive("channeltop-ok",
    function(n) {
        function a(e, t) {
            t.length > 1 && e.query(".slide-content").insertAdjacentHTML("beforeend", t[0]).insertAdjacentHTML("afterend", t[1])
        }
        var r = hao360.showChannelTop(n.data.channelTopData, n.data.flush ? 0 : 1),
        i = "#channel-news .section-bd",
        s = QW.W("#news-tips"),
        o = e(i);
        n.data.flush && o.query(".tabview-cont").removeNode(),
        o.html(o.html() + r),
        n.data.flush && (s.removeClass("update-loading"), s.attr("data-showing", 0).hide(), t.tweet("page-height-resize"));
        var u = "#channel-news .tabview-tabs>li";
        e(u).forEach(function(t, r) {
            var i = e("#channel-news .tabview-cont .cover"),
            s = hao360.htmlForChannelTopSlide(n.data.channelTopData[r]);
            a(i.item(r), s),
            e(t).hasClass("on") && (e(QW.W(".tabview-cont", o)[r]).addClass("on"), c(l, r, !0));
            var u = i.item(r);
            u.hover(function(e) {
                u.query(">a").show()
            },
            function(e) {
                u.query(">a").hide()
            }),
            e(t).on("click",
            function(e) {
                c(l, r)
            })
        })
    }),
    Feed.channeltop(function(e) {
        e = e.data,
        t.tweet("channeltop-ok", {
            channelTopData: e
        }),
        TimeSVC.getTime(function(t) {
            var n = t.getTime();
            Math.abs(a - n) < f && i.set(r.api, e[0])
        })
    },
    {
        cache: !1
    }),
    n.receive(document, "news-read",
    function(e) {
        var n = e.data.last_modify_time * 1e3;
        e = e.data.data,
        setTimeout(function() {
            t.tweet("channeltop-ok", {
                channelTopData: e,
                flush: !0
            }),
            QW.W("#top-channel").attr("data-news-readtime", n)
        },
        500)
    }),
    e("#channel-news").tabview(),
    e("#channel-news").delegate("a", "click",
    function(e) {
        LogHub.channeldata("click", {
            cate: "news",
            text: this.innerHTML,
            link: this.href
        })
    })
});
M("#user-channel",
function(e, t) {
    function u(n) {
        var r = n.data.channel,
        i = "#channel-" + r,
        u = "channelview-" + r,
        a = s[r],
        f = R(u);
        if (!f) return;
        setTimeout(function() {
            f.getStatus() != R.STATUS_OK && t.tweet("get-channel-data", {
                channel: r
            })
        },
        o),
        qboot.await(function() {
            return f.getStatus() == R.STATUS_OK
        },
        function() {
            e(i).tabview(a !== undefined, {
                delayTime: a
            })
        })
    }
    var n = hao360.showedChannel,
    r = HAO_CONFIG.channelOrder,
    i = (new AppData("api.hao.360.cn", r.r)).get(r.api); ! i && hao360.mid && Channel.getOrder(function(e) {
        t.tweet("channelOrder-ok", {
            order: e.slice(0, 4)
        })
    });
    var s = {
        video: 0,
        mall: 1e4
    },
    o = 6e3;
    t.receive("get-channel-data",
    function(e) {
        var t = e.data.channel,
        n = "channelview-" + t;
        Channel.getChannel(t,
        function(e) {
            var r = e && e.data && e.data[t];
            R(n).setData(r)
        },
        {
            _r: Math.random()
        })
    }),
    t.receive("channel-to-render", u),
    n.forEach(function(e) {
        t.tweet("channel-to-render", {
            channel: e
        })
    }),
    e(".retry").click(function(n) {
        n.preventDefault();
        var r = e(this).parentNode(".section").attr("data-channel");
        t.tweet("get-channel-data", {
            channel: r
        })
    });
    var a = {},
    f = [],
    l = 1,
    c = hao360.showedChannel;
    if (c.length > 0) while (c[l - 1]) a[c[l - 1]] = l,
    f.push(l + "_" + c[l - 1]),
    l++; (function() {
        var n = function() {
            var n = {},
            r = {},
            i = hao360.showedChannel,
            s = [],
            o = function() {
                for (var e = 0,
                t = i.length; e < t; e++) {
                    var n = i[e];
                    if (s.indexOf(n) == -1) continue;
                    r[n] = {
                        prevTabIndex: 0,
                        currentTabIndex: 0,
                        slideEntry: [0, 0, 0, 0]
                    }
                }
            };
            n.dealSwitchEntry = function(t, n, i) {
                var s = r[t];
                if (s === undefined) return;
                var o = s.slideEntry[n];
                s.currentTabIndex = n || 0,
                s.prevTabIndex = i || 0,
                s.currentTabIndex !== s.prevTabIndex && (s.slideEntry[s.prevTabIndex].onbeforeswitch = function() {
                    return ! 1
                });
                if (o == 0) {
                    var u = e("#channel-" + t + " .tabview-cont .cover");
                    u.query(".mask").removeNode(),
                    s.slideEntry[n] = new QW.Slide(u[n], {
                        animType: "fade",
                        autoPlayTime: 1e4,
                        tabSelector: ".slide-nav li",
                        viewSelector: ".slide-content div",
                        pageUpSelector: ".slide-pageup",
                        pageDownSelector: ".slide-pagedown",
                        autoPlay: !0,
                        supportMouseenter: !0,
                        mouseenterSwitchTime: 300,
                        selectedIndex: 0
                    })
                } else s.slideEntry[n].onbeforeswitch = function() {
                    return ! 0
                }
            };
            var u = function() {
                for (var e in r) n.dealSwitchEntry(e, 0, 0)
            },
            a = function() {
                o(),
                u()
            },
            f = function() {
                t.delegate("li.cover", "mouseover",
                function() {
                    var t = e(this).parentNode("div.section").attr("data-channel"); (t == null || s.indexOf(t) != -1) && e(this).query("a.slide-btn").show("block")
                }),
                t.delegate("li.cover", "mouseout",
                function() {
                    e(this).query("a.slide-btn").hide()
                })
            };
            return n.initialize = function() {
                var n = e("#channel-white-list").val();
                n != "" && (s = n.split("|")),
                t.receive("channels-choosed",
                function(e) {
                    i = e.data.channels,
                    setTimeout(function() {
                        a()
                    },
                    300)
                }),
                a(),
                f()
            },
            n
        } ();
        window.onload = function() {
            setTimeout(function() {
                n.initialize()
            },
            16)
        },
        QW.TweetH.receive(document, "tabview-change",
        function(e) {
            var t = e.data,
            r = t.channelName,
            i = Math.max(0, t.currentTabIndex),
            s = Math.max(0, t.prevTabIndex);
            n.dealSwitchEntry(r, i, s)
        })
    })(),
    LogHub.channeldata("pv", {
        pm: f.join(",")
    }),
    e("[data-channel]").forEach(function(t, n) {
        var r = e(t).attr("data-channel");
        e(t).delegate("a", "click",
        function(e) {
            LogHub.channeldata("click", {
                cate: r,
                text: this.innerHTML,
                link: this.href,
                p: a[r]
            })
        })
    })
});
M("#channel-sort",
function(e, t) {
    function w(e) {
        LogHub.behavior("channelSort", e)
    }
    function x() {
        f.attr("data-showing", 0).hide()
    }
    function T(e) {
        var t = [];
        for (var n = 0,
        r = e.cover.length; n < r; n++) t.push(e.cover[n].pic + "-" + e.cover[n].text);
        for (var n = 0,
        r = e.rows.length; n < r; n++) {
            var i = e.rows[n].items;
            for (var s = 0,
            o = i.length; s < o; s++) i[s].text != "" && t.push(i[s].highlight + "-" + i[s].text)
        }
        return t.join("")
    }
    function L() {
        qboot.cookie.set(C, N, {
            expires: 2592e6
        })
    }
    var n = QW.TweetH,
    r = e("#sort-toggle"),
    i = r.query(".txt"),
    s = i.html().trim(),
    o = r.hasClass("open") ? "show": "hide",
    u = e(".sort-panel"),
    a = e(".sort-tips"),
    f = e("#news-tips"),
    l = e(".error-info"),
    c = "\u4eb2\uff0c\u53ea\u80fd\u9009\u62e9<em>4</em>\u4e2a\u54e6\uff0c\u53bb\u6389<em>n</em>\u4e2a\u5427",
    h = "\u4eb2\uff0c\u53ef\u4ee5\u9009\u62e9<em>4</em>\u4e2a\u54e6\uff0c\u518d\u6765<em>n</em>\u4e2a\u5427",
    p = QW.W("#user-channel"),
    d = parseInt(p.attr("data-channelheight")),
    v = p.attr("data-defaultorder").split(","),
    m = hao360.showedChannel,
    g = hao360.channelOrder,
    y = HAO_CONFIG.userChannel,
    b = new AppData("api.hao.360.cn", y.r),
    E = 0,
    S = {
        status: o,
        setTitle: function() {
            e(".sort-list>[data-key]").attr("title", "\u70b9\u51fb\u9009\u4e2d"),
            e(".sort-list>.channel-select").attr("title", "\u70b9\u51fb\u53d6\u6d88\u9009\u4e2d")
        },
        showNewsTips: function() {
            f.attr("data-showing") === "1" && (f.show(), t.tweet("page-height-resize"))
        },
        showTips: function(e, n) {
            var r = this;
            a[0].__preAnim && a[0].__preAnim.end(),
            clearTimeout(E),
            e && a.query(".sort-tips-text").html(e),
            f.hide(),
            a.show().animate({
                height: {
                    from: 0,
                    to: "30px"
                }
            },
            200,
            function() {
                t.tweet("page-height-resize")
            }),
            n && (E = setTimeout(function() {
                a.slideUp(400,
                function() {
                    a.hide(),
                    r.showNewsTips(),
                    t.tweet("page-height-resize")
                })
            },
            n))
        },
        showOK: function() {
            e(".sort-tips-text").attr("data-ctrl", ""),
            S.showTips('<em class="orange">\u592a\u68d2\u4e86\uff0c\u5df2\u7ecf\u9009\u62e9\u6210\u529f\u5566</em>', 2e3)
        },
        show: function() {
            a[0].__preAnim && a[0].__preAnim.end(),
            m.forEach(function(t) {
                e(".sort-list>[data-key=" + t + "]").addClass("channel-select")
            }),
            S.setTitle(),
            r.addClass("open"),
            i.html("\u8fd4\u56de"),
            u.show(),
            a.hide(),
            t.tweet("page-height-resize"),
            S.status = "show"
        },
        hide: function() {
            r.removeClass("open"),
            i.html(s),
            u.hide(),
            e(".sort-list>.channel-select").removeClass("channel-select"),
            S.status = "hide"
        },
        saveChannels: function() {
            var n = e(".channel-select"),
            r = n.length,
            i = [];
            if (r < 4) {
                l.html(h.replace("n", 4 - r));
                return
            }
            if (r > 4) {
                l.html(c.replace("n", r - 4));
                return
            }
            l.html(""),
            n.forEach(function(t) {
                var n = e(t).attr("data-key");
                i.push(n)
            }),
            i.sort().join() != m.sort().join() ? (m = i, t.tweet("channels-choosed", {
                channels: i
            })) : (t.tweet("sort-panel-hide"), S.showOK())
        },
        renderChannels: function(e) {
            p.query(".channel-bd>.section").css({
                display: "none"
            });
            var n = 0,
            r = [];
            g.forEach(function(e) {
                m.contains(e) && (r.push(e), p.query("#channel-" + e).css({
                    top: n + "px",
                    display: "block"
                }), p.query("#channelloading-" + e).css({
                    display: "block"
                }), n += d)
            }),
            b.set(y.api, r),
            e.forEach(function(e) {
                var n = "channelview-" + e,
                r = R(n);
                r && (Channel.getChannel(e,
                function(t) {
                    var n = t && t.data && t.data[e];
                    r.reRender(null, n)
                }), t.tweet("channel-to-render", {
                    channel: e
                }))
            }),
            t.tweet("sort-panel-hide"),
            S.showOK()
        }
    };
    t.receive("sort-panel-show",
    function(e) {
        S.show()
    }),
    t.receive("sort-panel-hide",
    function(e) {
        S.hide()
    }),
    r.click(function(e) {
        e.preventDefault(),
        t.tweet("sort-panel-" + (S.status == "show" ? "hide": "show"))
    }),
    e(".cancel-sort-btn").click(function(e) {
        e.preventDefault(),
        t.tweet("sort-panel-hide")
    }),
    t.delegate("[data-ctrl=open-sort]", "click",
    function(e) {
        e.preventDefault(),
        t.tweet("sort-panel-show")
    });
    var N, C = "msgMaxId",
    k;
    n.receive(document, "message-push",
    function(e) {
        e = e.data;
        if (e.data === undefined) {
            x();
            return
        }
        var n = e.data.news;
        N = e.max_id;
        if (n && !!n[0].t) {
            var r = HAO_CONFIG.feedsConfig.channeltop,
            i = new AppData("api.hao.360.cn", r.r),
            s = i.get(r.api, !0),
            o = T(s);
            Feed.channeltop(function(e) {
                var s = QW.W("#top-channel").attr("data-news-readtime"),
                u = e.last_modify_time * 1e3,
                a = T(e.data[0]);
                u > s && o != a ? (LogHub.behavior("messagePush", "newsShow"), k = e, f.query(".update-text").html("<em class='orange'>{0}</em>".format(n[0].t)), f.attr("data-showing", 1).show(), t.tweet("page-height-resize"), i.set("newsReadTime", u), i.set(r.api, e.data[0])) : L()
            },
            {
                cache: !1,
                params: {
                    _t: N
                }
            },
            DataCache.FLUSH)
        } else x()
    }),
    f.click(function() {
        f.addClass("update-loading"),
        LogHub.behavior("messagePush", "readNews"),
        N !== undefined && L(),
        k && n.tweet(document, "news-read", k)
    }),
    t.receive("channels-choosed",
    function(e) {
        S.renderChannels(e.data.channels)
    }),
    t.delegate(".sort-list>a", "click",
    function(t) {
        t.preventDefault(),
        l.html(""),
        e(this).toggleClass("channel-select"),
        S.setTitle()
    }),
    e(".save-sort-btn").click(function(e) {
        e.preventDefault(),
        S.saveChannels()
    });
    var A = e(".sort-tips-text").html().trim();
    if (A) {
        var O = hao360.md5(A),
        M = "channelSort_tips",
        _ = a.attr("data-expires"),
        D = (qboot.cookie.get(M) || "").split("|"),
        P = parseInt(D[0] || 0),
        H = D[1],
        B = a.attr("data-ignore"),
        j = 6048e5;
        _ && /^\d{4}\/\d{2}\/\d{2}$/.test(_) && (j = new Date(_) - new Date);
        function F(t) {
            if (j <= 0) return;
            if (m.contains(B)) return;
            e(".sort-tips-text").attr("data-ctrl", "open-sort"),
            setTimeout(S.showTips, 2e3),
            qboot.cookie.set(M, [t || 1, O].join("|"), {
                expires: j
            })
        }
        O != H ? (qboot.cookie.remove(M), F()) : P < 3 && F(P + 1),
        t.receive("sort-panel-show",
        function() {
            qboot.cookie.set(M, [3, O].join("|"), {
                expires: j
            })
        })
    }
    t.delegate("#sort-toggle .txt", "click",
    function(t) {
        t.preventDefault(),
        e(this).html() == "\u6362\u4e00\u4e0b" ? w("back") : w("change")
    }).delegate(".cancel-sort-btn", "click",
    function(e) {
        e.preventDefault(),
        w("cancel2back")
    }).delegate('.sort-tips-text[data-ctrl="open-sort"]', "click",
    function(e) {
        e.preventDefault(),
        w("tipsClick")
    }),
    t.receive("channels-choosed",
    function(e) {
        var t = e.data.channels;
        t.forEach(function(e) {
            w("choose-" + e)
        })
    })
});
M("#category-service",
function(e, t) {
    t.query(".panel").hover(function(t) {
        var n = e(this);
        n.toggleClass("hover-panel", "")
    })
});
M("#cool-site",
function(e, t) {
    e(".panel .item").hover(function(t) {
        e(this).toggleClass("hover")
    })
});
var LocalCityService = function() {
    var e = {},
    t = W("#localcity"),
    n = function() {
        var e = hao360.area.get(),
        t = [e.town, e.city, e.prov],
        n = "default";
        for (var r = 0,
        i = t.length; r < i; r++) if (t[r] in LOCAL_CITY_LIST) {
            n = t[r];
            break
        }
        return n
    },
    r = function() {
        var e = HAO_CONFIG.localService,
        n = Bus.register({},
        e, !0);
        return function(r) {
            hao360.g("localcity-title").innerHTML = "{0}\u672c\u5730\u751f\u6d3b".format(LOCAL_CITY_LIST[r] || "\u6211\u7684"),
            n.request({
                c: "localData",
                a: "index",
                v: e.v,
                key: r
            },
            function(e) {
                e && e.localdata ? (W("#localcity-loading").removeNode(), hao360.g("localcity-bd").innerHTML = e.localdata) : t.hide()
            })
        }
    } (),
    i = function() {
        var n = {
            lazyloaderType: "blocker",
            onafterload: function() {
                W("#localcity-loading").show(),
                e.getLocalService(),
                QW.TweetH.receive(document, "weather-loaded",
                function() {
                    e.getLocalService()
                })
            }
        };
        new lazyLoader(t, n)
    };
    return e.getLocalService = function(e) {
        e = e || n(),
        r(e)
    },
    e.init = function() {
        i()
    },
    e
} ();
LocalCityService.init();
M("#footer",
function(e, t) {
    function p() {
        if (e("#loulou-iframe").length) return;
        n.insert("afterbegin", e(r)),
        e(window).un("scroll", c).un("resize", h)
    }
    var n = e("#loulou-wrap"),
    r = e("#loulou").val().trim();
    if (!r) return;
    var i = QW.W("body").size().height,
    s = 600,
    o = Dom.getDocRect().height,
    u = HAO_CONFIG.channelOrder,
    a = u.r,
    f = (new AppData("api.hao.360.cn", a)).get(u.api, !0) || [],
    l = f[0];
    t.receive("loulou-show",
    function(e) {
        e.data && (l = e.data.cate)
    }),
    hao360.loulouLoaded = function(e) {
        e && e({
            cate: l
        }),
        n.show()
    };
    var c = function() {
        t.tweet("scrollChange", {
            height: o
        })
    },
    h = function() {
        t.tweet("scrollChange", {
            height: Dom.getDocRect().height
        })
    };
    t.receive("scrollChange",
    function(t) {
        if (e("#loulou-iframe").length) return;
        var n = Dom.getDocRect().scrollY,
        r = t.data.height;
        n >= i - r - s && p()
    }),
    t.receive("loulou-show",
    function(e) {
        p()
    }),
    e(window).on("scroll", c).on("resize", h),
    setTimeout(function() {
        t.tweet("scrollChange", {
            height: o
        })
    },
    1e3)
});
M("#mysite",
function(e, t) {
    function g() {}
    function w(e) {
        var t = QW.W,
        n = t("body").getRect().height + "px";
        t(".mask-panel,.mask-iframe").css({
            height: n
        })
    }
    function E(e) {
        var t = QW.W,
        n = t("body").getRect().width + "px";
        t(".mask-panel,.mask-iframe").css({
            width: n
        })
    }
    function S() {
        var e = QW.W,
        t = e(".mask-panel");
        if (t.length) t.show(),
        e(".mask-iframe").show();
        else {
            var n = e("#doc-view-front");
            if (Browser.ie6) {
                var r = document.createElement("iframe");
                r.className = "mask-iframe",
                n.appendChild(r)
            }
            var i = document.createElement("div");
            i.className = "mask-panel",
            n.appendChild(i)
        }
        w(),
        e(window).on("scroll", w),
        Browser.ie6 && e(window).on("resize", E)
    }
    function x() {
        var e = QW.W;
        e(".mask-panel,.mask-iframe").hide(),
        e(window).un("scroll", w).un("resize", E)
    }
    function C(e) {
        e.keyCode == 27 && N()
    }
    function k() {
        R("mysite-list").reRender(),
        setTimeout(function() {
            t.tweet("page-height-resize")
        },
        100)
    }
    function L() {
        if (hao360.g("reco-site")) {
            var e = "recoSite_tips",
            n = escape(hao360.g("tips-reco-comment").innerHTML.trim());
            qboot.cookie.set(e, [3, n].join("|"), {
                expires: 2592e6
            }),
            QW.W("#tips-reco-site").hide(),
            t.tweet("page-height-resize")
        }
    }
    function A() {
        var e = QW.W("#mysite-list li").length - 1;
        e && LogHub && LogHub.behavior("mysite", "hasData")
    }
    var n = new MysiteSvc,
    r = ObjectH.mix,
    i = ObjectH.isArray,
    s = ObjectH.isFunction,
    o = "add-success",
    u = "site-input-error",
    a = QW.W("#mysite-list").attr("data-key"),
    f = 24,
    l = '<div class="g-tips g-tips-right tips-reco {$display}" style="right:-{$right}px"><div class="cont">{$tip}</div><!--[if lte IE 7]><span class="arrow-border"></span><span class="arrow-background"></span><![endif]--></div>',
    c = '<li class="{$className} {$type}" data-key="{$key}"><span class="split">\u2022</span><a href="" onclick="return false;">{$tab}<span class="mark">{$type}</span></a></li>',
    h = '<div class="line"><h3 class="title {$type}"><span class="cont">{$title}<span class="mark">{$type}</span></span></h3></div>',
    p = '<li data-sid="{$sid}" class="{$className}"><a href="{$url}" class="{$color}"><span class="name">{$name}</span>' + l + "</a></li>",
    d = '<li><div class="item"><a href="{$url}" class="site">{$name}</a><a href="###" class="btn delete-site" data-sid="{$sid}" title="\u5220\u9664">\u5220\u9664</a></div></li>',
    v = n.ERRORCODE,
    m = !0;
    g.prototype = {
        cache: {},
        renderAllSites: function(i, s, o) {
            var u = [],
            a = !1,
            f = null,
            l = o && o.sid || null,
            c = o && o.type || null;
            n.getAll(function(n) {
                var o = 0;
                if (n.errCode == "0") {
                    var a = n.res;
                    o = a.length;
                    for (var h = 0; h < o; h++) l == a[h].sid && c == "add" ? (f = h, u.push(s.tmpl(r({
                        display: "none"
                    },
                    a[h])))) : u.push(s.tmpl(a[h]));
                    t.tweet("mysite-add-or-delete", {
                        length: o
                    })
                }
                o ? (e(".mysite-list-null").hide(), e(".edit-mysite").show()) : (e(".mysite-list-null").show(), e(".edit-mysite").hide());
                var p = u.join("");
                i.html(p);
                if (f != null) {
                    var d = i.query("li").item(f);
                    c == "add" && d.fadeIn()
                }
            })
        },
        getAllSites: function() {
            var e = [];
            return n.getAll(function(t) {
                t.errCode == "0" && (e = t.res)
            }),
            e
        },
        filter: function(e, t) {
            for (var n = 0,
            r = t.length; n < r; n++) {
                var s = t[n];
                if (i(s)) {
                    var u = s[2],
                    a = s[3];
                    s = new SiteEnt(s[0], s[1])
                }
                u && (s.color = u),
                e == s.sid && (s.className = o),
                a && (s.tip = a, s.display = "show", s.right = a.byteLen() * 6 + 16),
                s && (t[n] = s)
            }
            return t
        },
        reFilterRecoSites: function(e, t, n) {
            var r = function(e) {
                e.removeClass(o)
            };
            n && n == "add" && (r = function(e) {
                e.addClass(o)
            });
            for (var i = 0,
            s = t.length; i < s; i++) {
                var u = t.item(i);
                u.attr("data-sid") == e && r(u)
            }
        },
        renderRecommendSites: function(t, n) {
            var i = this,
            o = n.tmpl || "",
            u = Bus.register({},
            r({
                jsonp: "_callback",
                filter: function(e) {
                    return e
                }
            },
            HAO_CONFIG.mysite)),
            f = {
                key: t,
                ver: HAO_CONFIG.mysite.v
            };
            u.request(f,
            function(r) {
                if (n.preload) return;
                var u = n.el;
                u.query(".loading").show();
                var f = r.current,
                l = f && f.key,
                p = f && f.url;
                if (!i.cache.tab) {
                    var d = [];
                    tabs = r.category;
                    for (var v = 0,
                    m = tabs.length; v < m; v++) {
                        var g = {},
                        y = tabs[v];
                        if (!y[1]) continue;
                        g.key = y[0],
                        g.key == t && (g.className = "cur"),
                        g.type = y[2],
                        g.tab = y[1];
                        var b = c.tmpl(g);
                        g.key == a ? d.unshift(b) : d.push(b)
                    }
                    e("#tab-list").html(d.join("")),
                    i.cache.tab = !0
                }
                i.renderTablist(l);
                var w = i.getAllSites(),
                d = ['<div class="reco" data-type="' + l + '">'];
                for (var E = 0,
                m = p && p.length; E < m; E++) {
                    var S = p[E][0],
                    x = p[E][1];
                    if (!S[0]) continue;
                    var T = {};
                    T.type = S[1],
                    T.title = S[0];
                    var N = h.tmpl(T);
                    res = [N + '<ul class="gclearfix">'];
                    if (w.length == 0) i.filter(null, x);
                    else for (var v = 0,
                    C = w.length; v < C; v++) {
                        var k = SiteEnt.getSid(w[v].url);
                        i.filter(k, x)
                    }
                    for (var v = 0,
                    C = x.length; v < C; v++) {
                        if (!x[v].name) continue;
                        res.push(o.tmpl(x[v]))
                    }
                    res.push("</ul>"),
                    d.push(res.join(""))
                }
                d.push("</div>");
                var b = d.join("");
                u.query(".loading").hide(),
                u.html(u.html() + b),
                i.cache[t] = 'div[data-type="' + t + '"]',
                s(n.callback) && n.callback()
            })
        },
        initRecommendSites: function(t, n) {
            var r = e("#reco-list");
            r.query("ul[data-type]").hide();
            var i = t || a;
            r.query(".reco").hide(),
            r.query(".loading").show(),
            this.cache[i] ? (r.query(".loading").hide(), r.query(this.cache[i]).show()) : this.renderRecommendSites(i, {
                el: r,
                tmpl: p,
                callback: n
            })
        },
        renderTablist: function(t) {
            var n = e("#tab-list"),
            r = n.query("li");
            t = t || a;
            if (t) {
                r.removeClass("cur"),
                n.query("li[data-key=" + t + "]").addClass("cur");
                return
            }
            for (var i = 0,
            s = r.length; i < s; i++) {
                var o = r.item(i),
                u = o.attr("data-key");
                t == u ? o.addClass("cur") : o.removeClass("cur")
            }
        },
        renderPanel: function(t) {
            this.renderAllSites(e("#edit-mysite"), d),
            t = t || a,
            this.initRecommendSites(t)
        },
        init: function(r) {
            function w(t, n) {
                switch (t) {
                case v.NameIsNull:
                    l.addClass(u),
                    y.query(".cont").html("\u8bf7\u8f93\u5165\u7f51\u7ad9\u540d\u79f0"),
                    E(l, y, {
                        type: "click",
                        time: 3e3,
                        callback: function() {
                            l.removeClass(u)
                        }
                    });
                    break;
                case v.UrlIsNull:
                    c.addClass(u),
                    y.query(".cont").html("\u8bf7\u8f93\u5165\u7f51\u5740"),
                    E(c, y, {
                        type: "click",
                        time: 3e3,
                        callback: function() {
                            c.removeClass(u)
                        }
                    });
                    break;
                case v.NameLengthErr:
                    l.addClass(u),
                    y.query(".cont").html("\u60a8\u8f93\u5165\u7684\u540d\u79f0\u8fc7\u957f"),
                    E(l, y, {
                        type: "click",
                        time: 3e3,
                        callback: function() {
                            l.removeClass(u)
                        }
                    });
                    break;
                case v.UrlLengthErr:
                    c.addClass(u),
                    y.query(".cont").html("\u60a8\u8f93\u5165\u7684\u7f51\u5740\u8fc7\u957f"),
                    E(c, y, {
                        type: "click",
                        time: 3e3,
                        callback: function() {
                            c.removeClass(u)
                        }
                    });
                    break;
                case v.SiteIsExist:
                    b.query(".cont").html("\u8be5\u7f51\u5740\u5df2\u5b58\u5728"),
                    E(e(".mysite-bd"), b, {
                        height: 5,
                        width: 300,
                        type: "click",
                        time: 5e3
                    });
                    break;
                case v.SidIsNull:
                    alert("sid is null");
                    break;
                case v.SiteIsNotExist:
                    alert("site is not exist");
                    break;
                default:
                    alert("\u4fc4\u4e5f\u5e03\u5409\u5c9b\u662f\u80bf\u4e48\u56de\u4e8b\uff01")
                }
            }
            function E(t, n, r) {
                var i = e(".mysite-bd").getXY(),
                s = t.getXY(),
                o = s[0] - i[0] + (r && r.width || 0),
                u = s[1] - i[1] + (r && r.height || -27);
                n.css({
                    left: o + "px",
                    top: u + "px"
                }).show(),
                r && r.type == "click" && (clearTimeout(h), h = setTimeout(function() {
                    n.hide(),
                    r.callback && r.callback()
                },
                r.time || 2e3));
                if (t.query("input[type=text]")[0]) {
                    var a = t.query("input[type=text]")[0];
                    a.focus(),
                    setTimeout(function() {
                        a.select()
                    })
                }
            }
            function S(e) {
                var t = [].concat(e);
                for (var n = 0,
                r = t.length; n < r; n++) t[n].hide()
            }
            function x(t, n) {
                i.renderAllSites(a, d, {
                    type: n,
                    sid: t
                }),
                siteList = e("#reco-list li"),
                i.reFilterRecoSites(t, siteList, n)
            }
            function T(t) {
                var n = a.query("li");
                if (n.length >= f) {
                    b.query(".cont").html("\u6682\u65f6\u53ea\u80fd\u6dfb\u52a0\u8fd9\u4e48\u591a\u7f51\u5740\u4e86"),
                    E(e(".mysite-bd"), b, {
                        height: 5,
                        width: 300,
                        type: "click",
                        time: 5e3
                    });
                    return
                }
                s(t) && t()
            }
            m = !1;
            var i = this;
            this.renderPanel(r);
            var a = e("#edit-mysite"),
            l = t.query(".site-name"),
            c = t.query(".site-url");
            t.delegate(".mysite-add .site-input", "keydown",
            function(t) {
                e(this).hasClass(u) && (S(y), e(this).removeClass(u))
            });
            var h = null,
            p = t.query(".tips-success"),
            g = t.query(".tips-cancel"),
            y = t.query(".tips-error"),
            b = t.query(".tips-warning");
            t.delegate(".close-mysite", "click",
            function(e) {
                e.preventDefault(),
                N()
            }).delegate(".reco-list li a", "click",
            function(t) {
                t.preventDefault(),
                LogHub.behavior("mysite", "add-by-tuijian");
                var r = e(this),
                i = r.parentNode("li");
                if (i.hasClass(o)) {
                    var s = i.attr("data-sid");
                    n.remove(s,
                    function(e) {
                        e.errCode == v.NoError && (x(s, "delete"), S([p, g, b]))
                    })
                } else {
                    var u = {
                        name: r.query(".name").html(),
                        url: r.attr("href")
                    };
                    T(function() {
                        n.add(u.name, u.url,
                        function(e) {
                            e.errCode == v.NoError && (u.sid = e.res.sid, x(u.sid, "add"), S([b, y]), E(r, p, {
                                type: "click"
                            }))
                        })
                    })
                }
            }).delegate(".reco-list li", "mouseenter",
            function(t) {
                var n = e(this);
                n.hasClass(o) && (S([p]), E(n, g, {
                    width: n.query("a").getRect().width / 2 - 50
                }))
            }).delegate(".reco-list li", "mouseleave",
            function(t) {
                var n = e(this);
                n.hasClass(o) && S(g)
            }).delegate(".tips-success", "mouseenter",
            function(t) {
                t.preventDefault(),
                e(this).hide()
            }).delegate("#tab-list li", "mouseenter",
            function(t) {
                var n = e(this),
                r = n.attr("data-key");
                n.addClass("hover"),
                i.renderRecommendSites(r, {
                    preload: !0
                })
            }).delegate("#tab-list li", "mouseleave",
            function(t) {
                e(this).removeClass("hover")
            }).delegate("#tab-list li", "click",
            function(t) {
                t.preventDefault();
                var n = e(this).attr("data-key");
                i.renderTablist(n),
                i.initRecommendSites(n)
            }),
            e("form").on("submit",
            function(e) {
                e.preventDefault(),
                LogHub.behavior("mysite", "add-by-user");
                var t = this,
                r = {
                    name: placeholderHook(this.sitename).getVal().trim(),
                    url: placeholderHook(this.siteurl).getVal().trim()
                };
                T(function() {
                    n.add(r.name, r.url,
                    function(e) {
                        e.errCode == v.NoError ? (r.sid = e.res.sid, placeholderHook(t.sitename).setVal(""), placeholderHook(t.siteurl).setVal(""), t.sitename.focus(), x(r.sid, "add"), S([p, b, y])) : w(e.errCode)
                    })
                })
            }),
            t.query("#btn-site-add").hover(function(t) {
                e(this).addClass("hover")
            },
            function(t) {
                e(this).removeClass("hover").removeClass("mousedown")
            }).on("mousedown",
            function(t) {
                e(this).addClass("mousedown")
            }).on("mouseup",
            function(t) {
                e(this).removeClass("hover").removeClass("mousedown")
            }),
            a.delegate("li .delete-site", "click",
            function(t) {
                t.preventDefault();
                var r = e(this).attr("data-sid");
                n.remove(r,
                function(e) {
                    e.errCode == v.NoError && (x(r, "delete"), S([p, b, y]))
                })
            })
        }
    };
    var y = new g,
    b = function() {
        qboot.load(function() {
            QW.W("#doc-view-front").insertAdjacentHTML("beforeend", '<ul class="mysite-suggest" id="mysite-url-suggest" style="visibility:hidden;" width="461"></ul>'),
            QW.W("#doc-view-front").insertAdjacentHTML("beforeend", '<ul class="mysite-suggest" id="mysite-name-suggest" style="visibility:hidden;" width="461"></ul>')
        },
        "mysitequery"),
        b = function() {}
    };
    t.receive("mysite-panel-turn-on",
    function() {
        S()
    }),
    t.receive("mysite-panel-turn-off",
    function() {
        x()
    });
    var T = function() {
        QW.W(document).on("keydown", C);
        var n = QW.W("#hot-site").getRect().top;
        t.css("top", n + "px").show(),
        e("form")[0].sitename.focus(),
        QW.W(".btn-add-site").hide();
        var r = QW.W("#hot-site");
        r.query("#mynav").hide(),
        t.tweet("mysite-panel-turn-on")
    },
    N = function() {
        e(".tips-warning,.tips-error").hide(),
        e(".site-input").removeClass(u),
        t.hide(),
        QW.W(document).un("keydown", C),
        QW.W(".btn-add-site").show();
        var n = QW.W("#hot-site");
        n.query("#mynav").show(),
        t.tweet("mysite-panel-turn-off"),
        k()
    };
    QW.W("#hot-site").delegate(".btn-add-site .btn,.btn-add-site .hxd", "click",
    function(e) {
        e.preventDefault(),
        L(),
        t.tweet("mysite-editpanel-open")
    }).delegate(".btn-add-site", "mouseenter",
    function(e) {
        m && y.renderRecommendSites(a, {
            preload: !0
        })
    }).delegate("#tips-reco-site .close", "click",
    function(e) {
        e.preventDefault(),
        L()
    }).delegate("#tips-reco-site .btn-reco-site", "click",
    function(n) {
        n.preventDefault(),
        L();
        var r = e(this).attr("data-type");
        t.tweet("mysite-editpanel-open", {
            recoType: r
        })
    }).delegate("#tips-reco-site", "mouseenter",
    function(e) {
        var t = QW.W("#reco-site").attr("data-type");
        y.renderRecommendSites(t, {
            preload: !0
        })
    }),
    t.receive("mysite-editpanel-open",
    function(e) {
        m && y.init(e.data && e.data.recoType),
        T(),
        b()
    }),
    A()
}); (function() {
    var e = function() {
        var e = function(e) {
            return document.getElementById(e)
        },
        t = {},
        n = "_Flash_Storage_",
        r = "http://s2.qhimg.com/static/002735e0619ae0d8.swf",
        i = function(e) {
            var t = document.createElement("div"),
            r = [];
            window.ActiveXObject ? r.push('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"', 'codebase="http://download.macromedia.com/pub/shockwave/cabs', '/flash/swflash.cab#version=10,0,0,0" width="1" height="1" id="', n, '">', '<param name="allowScriptAccess" value="always" />', '<param name="movie" value="', e, '" /></object>') : r.push('<embed src="', e, '" width="1" height="1" id="', n, '" ', 'align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" ', 'pluginspage="http://www.adobe.com/go/getflashplayer_cn"/>');
            var i = t.style;
            i.position = "absolute",
            i.top = "-9999px";
            var s = document.body;
            s.insertBefore(t, s.firstChild),
            t.innerHTML = r.join(""),
            document.title = document.title.split("#")[0]
        },
        s = function(e, t) {
            t = t ||
            function() {};
            var n = setInterval(function() {
                try {
                    var r = e();
                    clearInterval(n),
                    n = null,
                    t(r)
                } catch(i) {}
            },
            50);
            setTimeout(function() {
                if (!n) return;
                clearInterval(n),
                t("")
            },
            5e3)
        };
        return t.init = function() {
            try {
                external.max_language_id != undefined && (r += "?random=" + Math.random())
            } catch(e) {}
            DomU.ready(function() {
                i(r)
            })
        },
        t.set = function(t, r) {
            s(function() {
                e(n).set(t, r)
            })
        },
        t.get = function(t, r) {
            s(function() {
                return e(n).get(t)
            },
            function(e) {
                return r && r.call(this, e),
                e
            })
        },
        t.remove = function(t) {
            s(function() {
                e(n).remove(t)
            })
        },
        t
    } ();
    e.init(),
    window.FlashStorage = e
})();