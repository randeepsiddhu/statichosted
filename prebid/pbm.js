/* mbpb.js v0.0.2 Updated : 2017-09-26 */ ! function(e) {
    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
    }
    var t = {};
    return n.m = e, n.c = t, n.p = "", n(0)
}([function(e, n, t) {
    t(1), e.exports = t(2)
}, function(e, n, t) {
    function i(e) {
        var n = e,
            t = null,
            i = new XMLHttpRequest;
            /*https://www.dropbox.com/s/5i3avs2xq4y4og6/appnexus_ad.json?dl=0*/
            
        /*return i.open("GET", "http://54.187.76.151:2424/cache?uuid=" + n, !1), i.withCredentials = "true", E.logTimestamp("Adm is requested"), i.send(null), 200 === i.status ? t = i.responseText : E.logError("Error request adm cache id"), t */
        /*return i.open("GET", "https://prebid.adnxs.com/pbc/v1/cache?uuid=402a864e-bd4e-464b-8a21-a37d4cdd39a2" , !1), i.withCredentials = "true", E.logTimestamp("Adm is requested"), i.send(null), 200 === i.status ? t = i.responseText : E.logError("Error request adm cache id"), t */
        /*return i.open("GET", "https://dl.dropboxusercontent.com/s/nkmd5w5c4n26qu0/simplerubibanner.json" , !1), i.withCredentials = "true", E.logTimestamp("Adm is requested"), i.send(null), 200 === i.status ? t = i.responseText : E.logError("Error request adm cache id"), t */
    	return i.open("GET", "https://raw.githubusercontent.com/randeepsiddhu/statichosted/master/prebid/simplerubibanner.json" , !1), i.withCredentials = "true", E.logTimestamp("Adm is requested"), i.send(null), 200 === i.status ? t = i.responseText : E.logError("Error request adm cache id"), t
        
    }

    function o(e, n, t) {
        var i = E.getUUID();
        return '<div id="' + i + '" style="border-style: none; position: absolute; width:100%; height:100%;">\n    <div id="' + i + '_inner" style="margin: 0 auto; width:' + n + "; height:" + t + '">' + e + "</div>\n    </div>"
    }

    function r(e) {
        var n;
        try {
            n = JSON.parse(e)
        } catch (t) {
            return void E.logError("Issue writing iframe into document :" + t.message)
        }
        if (n) {
            if (n.error) return void E.logError("Issue writing iframe into document :" + n.error);
            var i, r = n.width,
                a = n.height;
            if (n.adm) return i = o(n.adm, r, a), window.document.write(i), void(n.nurl && E.loadPixelUrl(m, n.nurl, E.getUUID()));
            if (n.nurl) {
                var d = E.loadScript(m, n.nurl);
                i = o(d.outerHTML, r, a), window.document.write(i)
            }
        }
    }

    function a() {
        window.mraid.removeEventListener("ready", a), u()
    }

    function d() {
        "loading" === window.mraid.getState() ? window.mraid.addEventListener("ready", a) : u()
    }

    function s(e) {
        e && (window.mraid.removeEventListener("viewableChange", s), c())
    }

    function u() {
        window.mraid.useCustomClose(!0), window.mraid.isViewable() ? c() : window.mraid.addEventListener("viewableChange", s)
    }

    function l(e) {
        e && (window.mraid.removeEventListener("viewableChange", l), window.mraid.close())
    }

    function c() {
        E.loadScript(window, "https://acdn.adnxs.com/mobile/pricecheck/MobileVastPlayer.js", function() {
            try {
                var e = window.innerWidth,
                    n = window.innerHeight,
                    t = "video-content",
                    i = window.document.createElement("div");
                i.id = t, i.style.width = e + "px", i.style.height = n + "px", i.style.top = "0px", i.style.left = "0px", i.style.position = "absolute", document.body.appendChild(i);
                var o = {
                    autoInitialSize: !1,
                    aspectRatio: "16:9",
                    delayExpandUntilVPAIDImpression: !1,
                    delayExpandUntilVPAIDInit: !0,
                    initialAudio: "on",
                    initialPlayback: "auto",
                    showMute: !0,
                    showProgressBar: !0,
                    showPlayToggle: !1,
                    showBigPlayButton: !1,
                    allowFullscreen: !1,
                    forceAdInFullscreen: !1,
                    disableCollapse: !1,
                    fitInContainer: !0,
                    shouldResizeVideoToFillMobileWebview: !0,
                    enableInlineVideoForIos: !1,
                    preloadInlineAudioForIos: !1,
                    enableNativeInline: !0,
                    fixedSizePlayer: !1,
                    controlBarPosition: "below",
                    terminateUnresponsiveVPAIDCreative: !1,
                    vpaidTimeout: 2e4,
                    waterfallTimeout: 15e3,
                    waterfallSteps: -1,
                    useCustomOpenForClickthrough: !0,
                    vpaidEnvironmentVars: {
                        rhythmone: !0
                    },
                    playerSkin: {
                        dividerColor: "black",
                        controlBarColor: "black"
                    },
                    skippable: {
                        skipLocation: "top-right",
                        skipText: "Video can be skipped in %%TIME%% seconds",
                        skipButtonText: "SKIP"
                    }
                };
                o.targetElementId = t, top.window.options = o, window.APNVideo_MobileVastPlayer.playVast(i, o, window.videoContent, function(e) {
                    "video-complete" !== e && "video-skip" !== e || window.mraid && window.mraid.close();
                    var n = e;
                    "undefined" != typeof e && "undefined" != typeof e.name && "undefined" != typeof e.url && "video_click_open_url" === n.name && (window.mraid ? (window.mraid.open(n.url), window.mraid.addEventListener("viewableChange", l)) : window.open(n.url))
                })
            } catch (r) {
                E.logError("Issue loading video into document :", r)
            }
        })
    }
    var E = t(2),
        f = t(3),
        m = (f.AD.NOTIFY, E.getWindow());
    m.pbm = {}, pbm.debug = pbm.debug || !1, pbm.enableDebug = function() {
        pbm.debug = !0, E.logInfo("Invoking pbm.enableDebug", arguments)
    }, pbm.disableDebug = function() {
        E.logInfo("Invoking pbm.disableDebug", arguments), pbm.debug = !1
    }, pbm.showAdFromCacheId = function(e) {
        E.logInfo("Invoking pbm.showAdFromCacheId", arguments);
        var n = e.admCacheID,
            t = i(n);
        r(t)
    }, n.pbmLoadVideo = function(e) {
        window.videoContent = e, window.mraid ? d() : c()
    }, window.apn_testonly = {};
    var p = window.apn_testonly;
    p.makeGetRequestForCachedBid = function(e) {
        return i(e)
    }, p.showAdFromResponse = function(e) {
        return r(e)
    }
}, function(e, n, t) {
    function i() {
        return !(typeof $sf === f || !$sf.ext) && !!$sf.ext.debug
    }
    var o = t(3),
        r = o.TYPE.ARRAY,
        a = o.TYPE.STRING,
        d = o.TYPE.FUNC,
        s = o.TYPE.NUM,
        u = o.TYPE.OBJ,
        l = Object.prototype.hasOwnProperty,
        c = !1,
        E = o.DEBUG.DEBUG_MODE,
        f = o.OBJECT_TYPE.UNDEFINED,
        m = o.CONTENT_SOURCE.RTB,
        p = o.CONTENT_SOURCE.CSM,
        g = o.CONTENT_SOURCE.SSM,
        h = null;
    try {
        h = "object" == typeof console.info ? console.info : console.info.bind(window.console)
    } catch (v) {}
    n.addEventHandler = function(e, n, t, i) {
        e.addEventListener ? e.addEventListener(n, t, i) : e.attachEvent && e.attachEvent("on" + n, t)
    }, n.removeEventHandler = function(e, n, t, i) {
        e.removeEventListener ? e.removeEventListener(n, t, i) : e.detachEvent && e.detachEvent("on" + n, t)
    }, n.isA = function(e, n) {
        return Object.prototype.toString.call(e) === "[object " + n + "]"
    }, n.isObj = function(e) {
        return this.isA(e, u)
    }, n.isFn = function(e) {
        return this.isA(e, d)
    }, n.isStr = function(e) {
        return this.isA(e, a)
    }, n.isArray = function(e) {
        return this.isA(e, r)
    }, n.isNumber = function(e) {
        return this.isA(e, s)
    }, n.isEmpty = function(e) {
        if (!e) return !0;
        if (this.isArray(e) || this.isStr(e)) return 0 === e.length;
        for (var n in e)
            if (l.call(e, n)) return !1;
        return !0
    }, n.logMessage = function(e) {
        var n = A();
        if (this.debugTurnedOn() && w()) {
            var t = i() ? "SAFEFRAME MESSAGE: " : "MESSAGE: ";
            console.log(n + t + e)
        }
    }, n.logWarn = function(e) {
        var n = A();
        if (this.debugTurnedOn() && w()) {
            var t = i() ? "SAFEFRAME WARN: " : "WARN: ";
            console.warn ? console.warn(n + t + e) : console.log(n + t + e)
        }
    }, n.logError = function(e, n) {
        var t = n || "GENERAL_ERROR",
            o = A();
        if (this.debugTurnedOn() && w()) {
            var r = i() ? "SAFEFRAME " : "";
            console.error ? console.error(o + r + t + ": " + e) : console.log(o + r + t + ": " + e)
        }
    }, n.logTimestamp = function(e) {
        this.debugTurnedOn() && w() && console.timeStamp && console.timeStamp(e)
    }, n.logInfo = function(e, n) {
        if (this.debugTurnedOn() && w()) {
            var t = A();
            if (h) {
                n && 0 !== n.length || (n = "");
                var o = i() ? "SAFEFRAME INFO: " : "INFO: ";
                h(t + o + e + ("" === n ? "" : " : params : "), n)
            }
        }
    }, n.loadScript = function(e, n, t) {
        var i = e.document,
            o = i.createElement("script");
        o.type = "text/javascript", t && "function" == typeof t && (o.readyState ? o.onreadystatechange = function() {
            "loaded" !== o.readyState && "complete" !== o.readyState || (o.onreadystatechange = null, t())
        } : o.onload = function() {
            t()
        }), o.src = n;
        var r = i.getElementsByTagName("head");
        return r = r.length ? r : i.getElementsByTagName("body"), r.length && (r = r[0], r.insertBefore(o, r.firstChild)), o
    }, n.getUUID = function() {
        var e = (new Date).getTime(),
            n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
                var t = (e + 16 * Math.random()) % 16 | 0;
                return e = Math.floor(e / 16), ("x" === n ? t : 3 & t | 8).toString(16)
            });
        return n
    }, n.loadPixelUrl = function(e, n, t) {
        var i, o = e.document.getElementsByTagName("head");
        if (e && o && n) {
            i = new Image, i.id = t, i.src = n, i.height = 0, i.width = 0, i.style.display = "none", i.onload = function() {
                try {
                    this.parentNode.removeChild(this)
                } catch (e) {}
            };
            try {
                o = o.length ? o : e.document.getElementsByTagName("body"), o.length && (o = o[0], o.insertBefore(i, o.firstChild))
            } catch (r) {
                this.logError("Error logging impression for tag: " + t + " :" + r.message)
            }
        }
    }, n._each = function(e, n) {
        if (!this.isEmpty(e)) {
            if (this.isFn(e.forEach)) return e.forEach(n);
            var t = 0,
                i = e.length;
            if (i > 0)
                for (; t < i; t++) n(e[t], t, e);
            else
                for (t in e) l.call(e, t) && n(e[t], t, e)
        }
    }, n.contains = function(e, n) {
        if (this.isEmpty(e)) return !1;
        for (var t = e.length; t--;)
            if (e[t] === n) return !0;
        return !1
    };
    var w = function() {
        return window.console && window.console.log
    };
    n.debugTurnedOn = function() {
        return !!i() || (this.getWindow().pbm = this.getWindow().pbm || {}, pbm && pbm.debug === !1 && c === !1 && (pbm.debug = "TRUE" === this.getParameterByName(E).toUpperCase(), c = !0), !(!pbm || !pbm.debug))
    }, n.stringContains = function(e, n) {
        return !!e && e.indexOf(n) !== -1
    }, n.getSearchQuery = function() {
        try {
            return window.top.location.search
        } catch (e) {
            try {
                return window.location.search
            } catch (e) {
                return ""
            }
        }
    }, n.getParameterByName = function(e, n) {
        var t = "[\\?&]" + e + "=([^&#]*)",
            i = new RegExp(t),
            o = i.exec(n || this.getSearchQuery());
        return null === o ? "" : decodeURIComponent(o[1].replace(/\+/g, " "))
    }, n.hasOwn = function(e, n) {
        return e.hasOwnProperty ? e.hasOwnProperty(n) : typeof e[n] !== f && e.constructor.prototype[n] !== e[n]
    };
    var A = function() {
        var e = new Date,
            n = "[" + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + ":" + e.getMilliseconds() + "] ";
        return n
    };
    n.getTargetArrayforRefresh = function(e) {
        var n = [];
        return this.isArray(e) ? n = e : this.isStr(e) && n.push(e), n
    }, n._map = function(e, n) {
        if (this.isEmpty(e)) return [];
        if (this.isFn(e.map)) return e.map(n);
        var t = [];
        return this._each(e, function(i, o) {
            t.push(n(i, o, e))
        }), t
    }, n.getValueString = function(e, n, t) {
        return void 0 === n || null === n ? t : this.isStr(n) ? n : this.isNumber(n) ? n.toString() : void this.logWarn("Unsuported type for param: " + e + " required type: String")
    }, n.getValueAsType = function(e, n, t, i) {
        return void 0 === n || null === n ? i : this.isA(n, t) ? n : (this.logWarn("Unsuported type for param: " + e + " required type: " + t), t === s && (n = Number(n)), isNaN(n) ? i : n)
    }, n.getWindow = function() {
        return window
    }, n.getAdObjFromAdsArray = function(e) {
        if (e && e.length > 0) {
            if (e[0][m]) return e[0][m];
            if (e[0][p]) return e[0][p];
            if (e[0][g]) return e[0][g]
        }
    }, n.cloneAsObject = function(e) {
        if (null === e || !(e instanceof Object)) return e;
        var n = e instanceof Array ? [] : {};
        for (var t in e) n[t] = this.cloneAsObject(e[t]);
        return n
    }, n.getCdnOrigin = function() {
        return this.getWindow().document.location.protocol + "//" + o.EXTERNAL_LIB.CDN_ORIGIN
    }
}, function(e, n) {
    e.exports = {
        PREFIX: {
            UT_IFRAME: "utif_",
            UT_DIV: "div_utif_"
        },
        LOG: {
            WARN: "WARN"
        },
        DEBUG: {
            DEBUG_MODE: "ast_debug",
            AST_DONGLE: "ast_dongle",
            AST_DEBUG_MEMBER: "ast_debug_member",
            AST_DEBUG_BIDDER: "ast_debug_bidder",
            AST_TEST: "ast_test",
            AST_TOOLKIT: "ast_toolkit",
            AST_OVERRIDE: {
                BASE: "ast_override_",
                DIV: "div",
                INDEX: "index",
                TAG_ID: "tag_id",
                INV_CODE: "inv_code"
            }
        },
        OBJECT_TYPE: {
            UNDEFINED: "undefined",
            OBJECT: "object",
            STRING: "string",
            NUMBER: "number"
        },
        BROWSER_TYPE: {
            IE: "msie",
            OPERA: "opera"
        },
        RENDERER_EVENTS: {
            LOADED: "loaded",
            IMPRESSION: "impression"
        },
        ENDPOINT: {
            UT_BASE: "/ut/v2",
            IMPBUS: "ib.adnxs.com",
            UT_PREBID: "/ut/v2/prebid"
        },
        UT_RESPONSE_PROP: {
            MEDIA_TYPE: "media_type",
            CREATIVE_ID: "creative_id",
            AD_TYPE: "ad_type",
            BANNER: "banner",
            VIDEO: "video",
            CONTENT: "content",
            UUID: "uuid"
        },
        MEDIA_TYPE: {
            BANNER: "banner",
            NATIVE: "native",
            VIDEO: "video"
        },
        AD: {
            CREATIVE_ID: "creative_id",
            NOTIFY: "notify_url",
            NOAD: "no_ad_url",
            IMP_URLS: "impression_urls",
            TRACKERS: "trackers"
        },
        CONTENT_SOURCE: {
            RTB: "rtb",
            CSM: "csm",
            SSM: "ssm"
        },
        AD_TYPE: {
            BANNER: "banner",
            NATIVE: "native",
            VIDEO: "video"
        },
        EXTERNAL_LIB: {
            VIDEO_MEDIATION_JS: "https://acdn.adnxs.com/video/astMediation/AstMediationManager.js",
            BANNER_MEDIATION_JS: "//acdn.adnxs.com/mediation/v2/mediation.js",
            SAFE_FRAME_URL: "//acdn.adnxs.com/ast/safeframe/1-0-0/html/safeframe-v2.html",
            CDN_ORIGIN: "acdn.adnxs.com"
        },
        EVENTS: {
            REQUEST: "adRequested",
            AVAILABLE: "adAvailable",
            LOADED: "adLoaded",
            REQUEST_FAIL: "adRequestFailure",
            NO_BID: "adNoBid",
            DEFAULT: "adDefault",
            ERROR: "adError",
            COLLAPSE: "adCollapse",
            BAD_REQUEST: "adBadRequest"
        },
        TYPE: {
            ARRAY: "Array",
            STRING: "String",
            FUNC: "Function",
            NUM: "Number",
            OBJ: "Object",
            BOOL: "Boolean"
        },
        SAFEFRAME: {
            DEFAULT_ZINDEX: 3e3,
            STATUS: {
                READY: "ready",
                NOTIFY_EXPANDED: "expanded",
                NOTIFY_COLLAPSED: "collapsed",
                NOTIFY_ERROR: "error",
                FOCUS_CHANGE: "focus-change",
                GEOM_UPDATE: "geom-update"
            }
        }
    }
}]);