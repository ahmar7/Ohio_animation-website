/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright � 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright � 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */




/*global jQuery */
/*!
 * FitVids 1.0
 *
 * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 * Date: Thu Sept 01 18:00:00 2011 -0500
 */

(function (a) {
    "use strict";
    a.fn.fitVids = function (b) {
        var c = {customSelector: null}, d = document.createElement("div"), e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
        return d.className = "fit-vids-style", d.innerHTML = "&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>", e.parentNode.insertBefore(d, e), b && a.extend(c, b), this.each(function () {
            var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.youtube-nocookie.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
            c.customSelector && b.push(c.customSelector);
            var d = a(this).find(b.join(","));
            d.each(function () {
                var b = a(this);
                if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                    var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(), d = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10), e = c / d;
                    if (!b.attr("id")) {
                        var f = "fitvid" + Math.floor(999999 * Math.random());
                        b.attr("id", f)
                    }
                    b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
})(jQuery);


/*
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;
(function (e) {
    "use strict";
    var s = function () {
        var s = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows"
        }, o = function () {
            var s = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            return s && e(window).load(function () {
                e("body").children().on("click", e.noop)
            }), s
        }(), n = function () {
            var e = document.documentElement.style;
            return "behavior"in e && "fill"in e && /iemobile/i.test(navigator.userAgent)
        }(), t = function (e, o) {
            var n = s.menuClass;
            o.cssArrows && (n += " " + s.menuArrowClass), e.toggleClass(n)
        }, i = function (o, n) {
            return o.find("li." + n.pathClass).slice(0, n.pathLevels).addClass(n.hoverClass + " " + s.bcClass).filter(function () {
                return e(this).children(n.popUpSelector).hide().show().length
            }).removeClass(n.pathClass)
        }, r = function (e) {
            e.children("a").toggleClass(s.anchorClass)
        }, a = function (e) {
            var s = e.css("ms-touch-action");
            s = "pan-y" === s ? "auto" : "pan-y", e.css("ms-touch-action", s)
        }, l = function (s, t) {
            var i = "li:has(" + t.popUpSelector + ")";
            e.fn.hoverIntent && !t.disableHI ? s.hoverIntent(u, p, i) : s.on("mouseenter.superfish", i, u).on("mouseleave.superfish", i, p);
            var r = "MSPointerDown.superfish";
            o || (r += " touchend.superfish"), n && (r += " mousedown.superfish"), s.on("focusin.superfish", "li", u).on("focusout.superfish", "li", p).on(r, "a", t, h)
        }, h = function (s) {
            var o = e(this), n = o.siblings(s.data.popUpSelector);
            n.length > 0 && n.is(":hidden") && (o.one("click.superfish", !1), "MSPointerDown" === s.type ? o.trigger("focus") : e.proxy(u, o.parent("li"))())
        }, u = function () {
            var s = e(this), o = d(s);
            clearTimeout(o.sfTimer), s.siblings().superfish("hide").end().superfish("show")
        }, p = function () {
            var s = e(this), n = d(s);
            o ? e.proxy(f, s, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(f, s, n), n.delay))
        }, f = function (s) {
            s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(c(this)), s.$path.length && e.proxy(u, s.$path)())
        }, c = function (e) {
            return e.closest("." + s.menuClass)
        }, d = function (e) {
            return c(e).data("sf-options")
        };
        return {
            hide: function (s) {
                if (this.length) {
                    var o = this, n = d(o);
                    if (!n)return this;
                    var t = n.retainPath === !0 ? n.$path : "", i = o.find("li." + n.hoverClass).add(this).not(t).removeClass(n.hoverClass).children(n.popUpSelector), r = n.speedOut;
                    s && (i.show(), r = 0), n.retainPath = !1, n.onBeforeHide.call(i), i.stop(!0, !0).animate(n.animationOut, r, function () {
                        var s = e(this);
                        n.onHide.call(s)
                    })
                }
                return this
            }, show: function () {
                var e = d(this);
                if (!e)return this;
                var s = this.addClass(e.hoverClass), o = s.children(e.popUpSelector);
                return e.onBeforeShow.call(o), o.stop(!0, !0).animate(e.animation, e.speed, function () {
                    e.onShow.call(o)
                }), this
            }, destroy: function () {
                return this.each(function () {
                    var o, n = e(this), i = n.data("sf-options");
                    return i ? (o = n.find(i.popUpSelector).parent("li"), clearTimeout(i.sfTimer), t(n, i), r(o), a(n), n.off(".superfish").off(".hoverIntent"), o.children(i.popUpSelector).attr("style", function (e, s) {
                        return s.replace(/display[^;]+;?/g, "")
                    }), i.$path.removeClass(i.hoverClass + " " + s.bcClass).addClass(i.pathClass), n.find("." + i.hoverClass).removeClass(i.hoverClass), i.onDestroy.call(n), n.removeData("sf-options"), void 0) : !1
                })
            }, init: function (o) {
                return this.each(function () {
                    var n = e(this);
                    if (n.data("sf-options"))return !1;
                    var h = e.extend({}, e.fn.superfish.defaults, o), u = n.find(h.popUpSelector).parent("li");
                    h.$path = i(n, h), n.data("sf-options", h), t(n, h), r(u), a(n), l(n, h), u.not("." + s.bcClass).superfish("hide", !0), h.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function (o) {
        return s[o] ? s[o].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof o && o ? e.error("Method " + o + " does not exist on jQuery.fn.superfish") : s.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {opacity: "show"},
        animationOut: {opacity: "hide"},
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop
    }, e.fn.extend({hideSuperfishUl: s.hide, showSuperfishUl: s.show})
})(jQuery);

(function ($) {
    $.fn.hoverIntent = function (handlerIn, handlerOut, selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if (typeof handlerIn === "object") {
            cfg = $.extend(cfg, handlerIn);
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, {over: handlerIn, out: handlerOut, selector: selector});
        } else {
            cfg = $.extend(cfg, {over: handlerIn, out: handlerIn, selector: handlerOut});
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function (ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if (( Math.abs(pX - cX) + Math.abs(pY - cY) ) < cfg.sensitivity) {
                $(ob).off("mousemove.hoverIntent", track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev]);
            } else {
                // set previous coordinates for next time
                pX = cX;
                pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout(function () {
                    compare(ev, ob);
                }, cfg.interval);
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function (e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({}, e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX;
                pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent", track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        compare(ev, ob);
                    }, cfg.interval);
                }

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent", track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        delay(ev, ob);
                    }, cfg.timeout);
                }
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent': handleHover, 'mouseleave.hoverIntent': handleHover}, cfg.selector);
    };
})(jQuery);


/**
 *
 * Twitter Feed Fetcher
 *
 */


function sm_format_twitter(twitters) {
    var statusHTML = [];
    for (var i = 0; i < twitters.length; i++) {
        var username = twitters[i].user.screen_name;
        var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (url) {
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        }).replace(/\B@([_a-z0-9]+)/ig, function (reply) {
            return reply.charAt(0) + '<a href="http://twitter.com/' + reply.substring(1) + '" target="_blank">' + reply.substring(1) + '</a>';
        });
        statusHTML.push('<li><i class="icon-twitter"></i><span>' + status + '</span><small><a href="http://twitter.com/' + username + '/statuses/' + twitters[i].id_str + '" target="_blank">' + relative_time(twitters[i].created_at) + '</a></small></li>');
    }
    return statusHTML.join('');
}

function sm_format_twitter2(twitters) {
    var statusHTML = [];
    for (var i = 0; i < twitters.length; i++) {
        var username = twitters[i].user.screen_name;
        var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (url) {
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        }).replace(/\B@([_a-z0-9]+)/ig, function (reply) {
            return reply.charAt(0) + '<a href="http://twitter.com/' + reply.substring(1) + '" target="_blank">' + reply.substring(1) + '</a>';
        });
        statusHTML.push('<div class="slide"><span>' + status + '</span><small><a href="http://twitter.com/' + username + '/statuses/' + twitters[i].id_str + '" target="_blank">' + relative_time(twitters[i].created_at) + '</a></small></div>');
    }
    return statusHTML.join('');
}

function sm_format_twitter3(twitters) {
    var statusHTML = [];
    for (var i = 0; i < twitters.length; i++) {
        var username = twitters[i].user.screen_name;
        var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (url) {
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        }).replace(/\B@([_a-z0-9]+)/ig, function (reply) {
            return reply.charAt(0) + '<a href="http://twitter.com/' + reply.substring(1) + '" target="_blank">' + reply.substring(1) + '</a>';
        });
        statusHTML.push('<div class="slide"><div class="testi-content"><p>' + status + '</p><div class="testi-meta"><span><a href="http://twitter.com/' + username + '/statuses/' + twitters[i].id_str + '" target="_blank">' + relative_time(twitters[i].created_at) + '</a></span></div></div></div>');
    }
    return statusHTML.join('');
}

function relative_time(time_value) {
    var values = time_value.split(" ");
    time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
    var parsed_date = Date.parse(time_value);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
    delta = delta + (relative_to.getTimezoneOffset() * 60);

    if (delta < 60) {
        return 'less than a minute ago';
    } else if (delta < 120) {
        return 'about a minute ago';
    } else if (delta < (60 * 60)) {
        return (parseInt(delta / 60)).toString() + ' minutes ago';
    } else if (delta < (120 * 60)) {
        return 'about an hour ago';
    } else if (delta < (24 * 60 * 60)) {
        return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
    } else if (delta < (48 * 60 * 60)) {
        return '1 day ago';
    } else {
        return (parseInt(delta / 86400)).toString() + ' days ago';
    }
}


/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
!function (a, b, c) {
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = c : (a[b] = c, "function" == typeof define && define.amd && define(b, [], function () {
        return c
    }))
}(this, "jRespond", function (a, b, c) {
    "use strict";
    return function (a) {
        var b = [], d = [], e = a, f = "", g = "", i = 0, j = 100, k = 500, l = k, m = function () {
            var a = 0;
            return a = "number" != typeof window.innerWidth ? 0 !== document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth : window.innerWidth
        }, n = function (a) {
            if (a.length === c)o(a); else for (var b = 0; b < a.length; b++)o(a[b])
        }, o = function (a) {
            var e = a.breakpoint, h = a.enter || c;
            b.push(a), d.push(!1), r(e) && (h !== c && h.call(null, {entering: f, exiting: g}), d[b.length - 1] = !0)
        }, p = function () {
            for (var a = [], e = [], h = 0; h < b.length; h++) {
                var i = b[h].breakpoint, j = b[h].enter || c, k = b[h].exit || c;
                "*" === i ? (j !== c && a.push(j), k !== c && e.push(k)) : r(i) ? (j === c || d[h] || a.push(j), d[h] = !0) : (k !== c && d[h] && e.push(k), d[h] = !1)
            }
            for (var l = {entering: f, exiting: g}, m = 0; m < e.length; m++)e[m].call(null, l);
            for (var n = 0; n < a.length; n++)a[n].call(null, l)
        }, q = function (a) {
            for (var b = !1, c = 0; c < e.length; c++)if (a >= e[c].enter && a <= e[c].exit) {
                b = !0;
                break
            }
            b && f !== e[c].label ? (g = f, f = e[c].label, p()) : b || "" === f || (f = "", p())
        }, r = function (a) {
            if ("object" == typeof a) {
                if (a.join().indexOf(f) >= 0)return !0
            } else {
                if ("*" === a)return !0;
                if ("string" == typeof a && f === a)return !0
            }
        }, s = function () {
            var a = m();
            a !== i ? (l = j, q(a)) : l = k, i = a, setTimeout(s, l)
        };
        return s(), {
            addFunc: function (a) {
                n(a)
            }, getBreakpoint: function () {
                return f
            }
        }
    }
}(this, this.document));


// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm
if (navigator.platform.toUpperCase().indexOf('MAC') === -1 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini|BlackBerry)/) && jQuery(window).width() > 991) {
    function ssc_init() {
        if (!document.body)return;
        var e = document.body;
        var t = document.documentElement;
        var n = window.innerHeight;
        var r = e.scrollHeight;
        ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e;
        ssc_activeElement = e;
        ssc_initdone = true;
        if (top != self) {
            ssc_frame = true
        } else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
            ssc_root.style.height = "auto";
            if (ssc_root.offsetHeight <= n) {
                var i = document.createElement("div");
                i.style.clear = "both";
                e.appendChild(i)
            }
        }
        if (!ssc_fixedback) {
            e.style.backgroundAttachment = "scroll";
            t.style.backgroundAttachment = "scroll"
        }
        if (ssc_keyboardsupport) {
            ssc_addEvent("keydown", ssc_keydown)
        }
    }

    function ssc_scrollArray(e, t, n, r) {
        r || (r = 1e3);
        ssc_directionCheck(t, n);
        ssc_que.push({x: t, y: n, lastX: t < 0 ? .99 : -.99, lastY: n < 0 ? .99 : -.99, start: +(new Date)});
        if (ssc_pending) {
            return
        }
        var i = function () {
            var s = +(new Date);
            var o = 0;
            var u = 0;
            for (var a = 0; a < ssc_que.length; a++) {
                var f = ssc_que[a];
                var l = s - f.start;
                var c = l >= ssc_animtime;
                var h = c ? 1 : l / ssc_animtime;
                if (ssc_pulseAlgorithm) {
                    h = ssc_pulse(h)
                }
                var p = f.x * h - f.lastX >> 0;
                var d = f.y * h - f.lastY >> 0;
                o += p;
                u += d;
                f.lastX += p;
                f.lastY += d;
                if (c) {
                    ssc_que.splice(a, 1);
                    a--
                }
            }
            if (t) {
                var v = e.scrollLeft;
                e.scrollLeft += o;
                if (o && e.scrollLeft === v) {
                    t = 0
                }
            }
            if (n) {
                var m = e.scrollTop;
                e.scrollTop += u;
                if (u && e.scrollTop === m) {
                    n = 0
                }
            }
            if (!t && !n) {
                ssc_que = []
            }
            if (ssc_que.length) {
                setTimeout(i, r / ssc_framerate + 1)
            } else {
                ssc_pending = false
            }
        };
        setTimeout(i, 0);
        ssc_pending = true
    }

    function ssc_wheel(e) {
        if (!ssc_initdone) {
            ssc_init()
        }
        var t = e.target;
        var n = ssc_overflowingAncestor(t);
        if (!n || e.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
            return true
        }
        var r = e.wheelDeltaX || 0;
        var i = e.wheelDeltaY || 0;
        if (!r && !i) {
            i = e.wheelDelta || 0
        }
        if (Math.abs(r) > 1.2) {
            r *= ssc_stepsize / 120
        }
        if (Math.abs(i) > 1.2) {
            i *= ssc_stepsize / 120
        }
        ssc_scrollArray(n, -r, -i);
        e.preventDefault()
    }

    function ssc_keydown(e) {
        var t = e.target;
        var n = e.ctrlKey || e.altKey || e.metaKey;
        if (/input|textarea|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
            return true
        }
        if (ssc_isNodeName(t, "button") && e.keyCode === ssc_key.spacebar) {
            return true
        }
        var r, i = 0, s = 0;
        var o = ssc_overflowingAncestor(ssc_activeElement);
        var u = o.clientHeight;
        if (o == document.body) {
            u = window.innerHeight
        }
        switch (e.keyCode) {
            case ssc_key.up:
                s = -ssc_arrowscroll;
                break;
            case ssc_key.down:
                s = ssc_arrowscroll;
                break;
            case ssc_key.spacebar:
                r = e.shiftKey ? 1 : -1;
                s = -r * u * .9;
                break;
            case ssc_key.pageup:
                s = -u * .9;
                break;
            case ssc_key.pagedown:
                s = u * .9;
                break;
            case ssc_key.home:
                s = -o.scrollTop;
                break;
            case ssc_key.end:
                var a = o.scrollHeight - o.scrollTop - u;
                s = a > 0 ? a + 10 : 0;
                break;
            case ssc_key.left:
                i = -ssc_arrowscroll;
                break;
            case ssc_key.right:
                i = ssc_arrowscroll;
                break;
            default:
                return true
        }
        ssc_scrollArray(o, i, s);
        e.preventDefault()
    }

    function ssc_mousedown(e) {
        ssc_activeElement = e.target
    }

    function ssc_setCache(e, t) {
        for (var n = e.length; n--;)ssc_cache[ssc_uniqueID(e[n])] = t;
        return t
    }

    function ssc_overflowingAncestor(e) {
        var t = [];
        var n = ssc_root.scrollHeight;
        do {
            var r = ssc_cache[ssc_uniqueID(e)];
            if (r) {
                return ssc_setCache(t, r)
            }
            t.push(e);
            if (n === e.scrollHeight) {
                if (!ssc_frame || ssc_root.clientHeight + 10 < n) {
                    return ssc_setCache(t, document.body)
                }
            } else if (e.clientHeight + 10 < e.scrollHeight) {
                overflow = getComputedStyle(e, "").getPropertyValue("overflow");
                if (overflow === "scroll" || overflow === "auto") {
                    return ssc_setCache(t, e)
                }
            }
        } while (e = e.parentNode)
    }

    function ssc_addEvent(e, t, n) {
        window.addEventListener(e, t, n || false)
    }

    function ssc_removeEvent(e, t, n) {
        window.removeEventListener(e, t, n || false)
    }

    function ssc_isNodeName(e, t) {
        return e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function ssc_directionCheck(e, t) {
        e = e > 0 ? 1 : -1;
        t = t > 0 ? 1 : -1;
        if (ssc_direction.x !== e || ssc_direction.y !== t) {
            ssc_direction.x = e;
            ssc_direction.y = t;
            ssc_que = []
        }
    }

    function ssc_pulse_(e) {
        var t, n, r;
        e = e * ssc_pulseScale;
        if (e < 1) {
            t = e - (1 - Math.exp(-e))
        } else {
            n = Math.exp(-1);
            e -= 1;
            r = 1 - Math.exp(-e);
            t = n + r * (1 - n)
        }
        return t * ssc_pulseNormalize
    }

    function ssc_pulse(e) {
        if (e >= 1)return 1;
        if (e <= 0)return 0;
        if (ssc_pulseNormalize == 1) {
            ssc_pulseNormalize /= ssc_pulse_(1)
        }
        return ssc_pulse_(e)
    }

    var ssc_framerate = 150;
    var ssc_animtime = 500;
    var ssc_stepsize = 150;
    var ssc_pulseAlgorithm = true;
    var ssc_pulseScale = 6;
    var ssc_pulseNormalize = 1;
    var ssc_keyboardsupport = true;
    var ssc_arrowscroll = 50;
    var ssc_frame = false;
    var ssc_direction = {x: 0, y: 0};
    var ssc_initdone = false;
    var ssc_fixedback = true;
    var ssc_root = document.documentElement;
    var ssc_activeElement;
    var ssc_key = {left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36};
    var ssc_que = [];
    var ssc_pending = false;
    var ssc_cache = {};
    setInterval(function () {
        ssc_cache = {}
    }, 10 * 1e3);
    var ssc_uniqueID = function () {
        var e = 0;
        return function (t) {
            return t.ssc_uniqueID || (t.ssc_uniqueID = e++)
        }
    }();
    var ischrome = /chrome/.test(navigator.userAgent.toLowerCase());
    if (ischrome) {
        ssc_addEvent("mousedown", ssc_mousedown);
        ssc_addEvent("mousewheel", ssc_wheel);
        ssc_addEvent("load", ssc_init)
    }
}


!function (t) {
    var o = 0;
    t.fn.scrolled = function (a, n) {
        "function" == typeof a && (n = a, a = 300);
        var c = "scrollTimer" + o++;
        this.scroll(function () {
            var o = t(this), e = o.data(c);
            e && clearTimeout(e), e = setTimeout(function () {
                o.removeData(c), n.call(o[0])
            }, a), o.data(c, e)
        })
    }
}(jQuery);


/*
 * Copyright (C) 2009 Joel Sutherland
 * Licenced under the MIT license
 * http://www.newmediacampaigns.com/page/jquery-flickr-plugin
 *
 * Available tags for templates:
 * title, link, date_taken, description, published, author, author_id, tags, image*
 */
(function ($) {
    $.fn.jflickrfeed = function (settings, callback) {
        settings = $.extend(true, {
            flickrbase: 'http://api.flickr.com/services/feeds/',
            feedapi: 'photos_public.gne',
            limit: 20,
            qstrings: {lang: 'en-us', format: 'json', jsoncallback: '?'},
            cleanDescription: true,
            useTemplate: true,
            itemTemplate: '',
            itemCallback: function () {
            }
        }, settings);
        var url = settings.flickrbase + settings.feedapi + '?';
        var first = true;
        for (var key in settings.qstrings) {
            if (!first)
                url += '&';
            url += key + '=' + settings.qstrings[key];
            first = false;
        }
        return $(this).each(function () {
            var $container = $(this);
            var container = this;
            $.getJSON(url, function (data) {
                $.each(data.items, function (i, item) {
                    if (i < settings.limit) {
                        if (settings.cleanDescription) {
                            var regex = /<p>(.*?)<\/p>/g;
                            var input = item.description;
                            if (regex.test(input)) {
                                item.description = input.match(regex)[2]
                                if (item.description != undefined)
                                    item.description = item.description.replace('<p>', '').replace('</p>', '');
                            }
                        }
                        item['image_s'] = item.media.m.replace('_m', '_s');
                        item['image_t'] = item.media.m.replace('_m', '_t');
                        item['image_m'] = item.media.m.replace('_m', '_m');
                        item['image'] = item.media.m.replace('_m', '');
                        item['image_b'] = item.media.m.replace('_m', '_b');
                        delete item.media;
                        if (settings.useTemplate) {
                            var template = settings.itemTemplate;
                            for (var key in item) {
                                var rgx = new RegExp('{{' + key + '}}', 'g');
                                template = template.replace(rgx, item[key]);
                            }
                            $container.append(template)
                        }
                        settings.itemCallback.call(container, item);
                    }
                });
                if ($.isFunction(callback)) {
                    callback.call(container, data);
                }
            });
        });
    }
})(jQuery);


/*!
 * jQuery - Spectragram by Adrian Quevedo
 * http://adrianquevedo.com/  - http://lab.adrianquevedo.com/ - http://elnucleo.com.co/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * You are free to use this plugin in commercial projects as long as the copyright header is left intact.
 *
 * This plugin uses the Instagram(tm) API and is not endorsed or certified by Instagram or Burbn, inc.
 * All Instagram(tm) logos and trademarks displayed on this plugin are property of Burbn, Inc.
 *
 * Date: Thu Jul 15 14:05:02 2012 -0500
 */

if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() {
        };
        F.prototype = obj;
        return new F()
    }
}
(function ($, window, document, undefined) {
    var Instagram = {
        init: function (options, elem) {
            var self = this;
            self.elem = elem;
            self.$elem = $(elem);
            self.api = 'https://api.instagram.com/v1', self.accessData = $.fn.spectragram.accessData, self.options = $.extend({}, $.fn.spectragram.options, options)
        }, getRecentMedia: function (userID) {
            var self = this, getData = '/users/' + userID + '/media/recent/?' + self.accessData.clientID + '&access_token=' + self.accessData.accessToken + '';
            self.fetch(getData).done(function (results) {
                self.display(results)
            })
        }, getUserFeed: function () {
            var self = this, getData = '/users/search?q=' + self.options.query + '&count=' + self.options.max + '&client_id=' + self.accessData.clientID + '';
            self.fetch(getData).done(function (results) {
                if (results.data.length) {
                    self.getRecentMedia(results.data[0].id)
                } else {
                    $.error('Spectagram.js - Error: the username ' + self.options.query + ' does not exist.')
                }
            })
        }, getPopular: function () {
            var self = this, getData = '/media/popular?client_id=' + self.accessData.clientID + '&access_token=' + self.accessData.accessToken + '';
            self.fetch(getData).done(function (results) {
                self.display(results)
            })
        }, getRecentTagged: function () {
            var self = this, getData = '/tags/' + self.options.query + '/media/recent?client_id=' + self.accessData.clientID + '&access_token=' + self.accessData.accessToken + '';
            self.fetch(getData).done(function (results) {
                if (results.data.length) {
                    self.display(results)
                } else {
                    $.error('Spectagram.js - Error: the tag ' + self.options.query + ' does not have results.')
                }
            })
        }, fetch: function (getData) {
            var self = this, getUrl = self.api + getData;
            return $.ajax({type: "GET", dataType: "jsonp", cache: false, url: getUrl})
        }, display: function (results) {
            var self = this, setSize = self.options.size, size, max = (self.options.max >= results.data.length) ? results.data.length : self.options.max;
            if (results.data.length === 0) {
                self.$elem.append($(self.options.wrapEachWith).append(self.options.notFoundMsg))
            } else {
                for (var i = 0; i < max; i++) {
                    if (setSize == "small") {
                        size = results.data[i].images.thumbnail.url
                    } else if (setSize == "medium") {
                        size = results.data[i].images.low_resolution.url
                    } else {
                        size = results.data[i].images.standard_resolution.url
                    }
                    self.$elem.append("<a target='_blank' href='" + results.data[i].link + "'><img src='" + size + "'></img></a>")
                }
            }
        }
    };
    jQuery.fn.spectragram = function (method, options) {
        if (jQuery.fn.spectragram.accessData.clientID) {
            this.each(function () {
                var instagram = Object.create(Instagram);
                instagram.init(options, this);
                if (instagram[method]) {
                    return instagram[method](this)
                } else {
                    $.error('Method ' + method + ' does not exist on jQuery.spectragram')
                }
            })
        } else {
            $.error('You must define an accessToken and a clientID on jQuery.spectragram')
        }
    };
    jQuery.fn.spectragram.options = {max: 10, query: 'coffee', size: 'medium', wrapEachWith: '<li></li>'};
    jQuery.fn.spectragram.accessData = {accessToken: null, clientID: null}
})(jQuery, window, document);


/**
 * jQuery Plugin - Jribbble v@VERSION
 * A jQuery plugin to fetch shot and player data from the Dribbble API,
 * http://dribbble.com/api
 *
 * Copyright (c) 2011 Tyler Gaw
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * Date: @DATE
 *
 */

(function ($) {
    'use strict';

    // @return OBJ
    $.fn.jribbble = function () {

        // Make a request to the API
        // @param STRING url
        // @param FUNCTION callback
        // @param OBJ OPTIONAL options
        this.makeRequest = function (url, callback, options) {
            var successHandler = function (data) {
                    if ($.isFunction(callback)) {
                        callback(data);
                    }
                },

            // Catch any double '/' that may be caused by our pathname storage
                cleanURL = url.replace('//', '/');

            $.ajax({
                data: options,
                dataType: 'jsonp',
                success: successHandler,
                type: 'GET',
                url: $.jribbble.baseUrl + cleanURL
            });
        };

        // Returning "this", allows this plugin to be chainable
        return this;
    };

    // Create a public object for jribbble
    $.jribbble = {};

    // Public Static Members
    // Can be set globally for all jquery.jribbble requests

    // @member STRING baseUrl - Will be prepended to all API requests
    $.jribbble.baseUrl = 'http://api.dribbble.com';

    // @member OBJ paths - Pathnames to resourses
    $.jribbble.paths = {
        shots: '/shots/',
        rebounds: '/rebounds/',
        following: '/following/',
        players: '/players/',
        followers: '/followers/',
        draftees: '/draftees/',
        comments: '/comments/',
        likes: '/likes/'
    };

    // Public Static Methods
    // These are available at any time, you do not have to
    // instantiate the jribbble plugin on an element to use

    // Retrieve the shot specified by shotId
    // @param INT shotId - The id of the shot you want.
    // @param FUNCTION callback - Function that will be called once the
    //                            request has successfully completed. The data
    //                            from the request will be passed to the callback
    $.jribbble.getShotById = function (shotId, callback) {
        var resource = $.jribbble.paths.shots + shotId;
        $.fn.jribbble().makeRequest(resource, callback);
    };

    // Retrieve the rebounds of a shot specified by shotId
    // @param INT shotId - The id of the shot you want rebounds for.
    // @param FUNCTION callback - Function that will be called once the
    //                            request has successfully completed. The data
    //                            from the request will be passed to the callback
    // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
    //                                  @see http://dribbble.com/api#pagination
    $.jribbble.getReboundsOfShot = function (shotId, callback, pagingOpts) {
        var resource = $.jribbble.paths.shots + shotId + $.jribbble.paths.rebounds;
        $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
    };

    // @param STRING listName - One of the following: 'debuts', 'everyone', 'popular'
    // @param FUNCTION callback  - Function that will be called once the
    //                             request has successfully completed. The data
    //                             from the request will be passed to the callback
    // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
    //                                  @see http://dribbble.com/api#pagination
    $.jribbble.getShotsByList = function (listName, callback, pagingOpts) {
        var resource = $.jribbble.paths.shots + listName;
        $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
    };

    // Retrieve the most recent shots for the player specified by playerId
    // @param STRING | INT playerId - Can be 'username' or 2318
    // @param FUNCTION callback - Function that will be called once the
    //                            request has successfully completed. The data
    //                            from the request will be passed to the callback.
    // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
    //                                  @see http://dribbble.com/api#pagination
    $.jribbble.getShotsByPlayerId = function (playerId, callback, pagingOpts) {
        var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots;
        $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
    };

    // Retrieve the most recent shots published by those the player, specified by playerId, follows
    // @param STRING | INT playerId - Can be 'username' or 2318
    // @param FUNCTION callback - Function that will be called once the
    //                            request has successfully completed. The data
    //                            from the request will be passed to the callback.
    // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
    //                                  @see http://dribbble.com/api#pagination
    $.jribbble.getShotsThatPlayerFollows = function (playerId, callback, pagingOpts) {
        var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots + $.jribbble.paths.following;
        $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
    };

    // Retrieve profile details for the player specified by playerId
    // @param STRING | INT playerId - Can be 'username' or 2318
    // @param FUNCTION callback - Function that will be called once the
    //                            request has successfully completed. The data
    //                            from the request will be passed to the callback.
    $.jribbble.getPlayerById = function (playerId, callback) {
        var resource = $.jribbble.paths.players + playerId;
        $.fn.jribbble().makeRequest(resource, callback);
    };

    // Retrieve followers of a player by the playerId
    // @param STRING | INT playerId - Can be 'username' or 2318
    // @param FUNCTION callback - Function that will be called once the
    //                            request has successfully completed. The data
    //                            from the request will be passed to the callback.
    $.jribbble.getPlayerFollowers = function (playerId, callback, pagingOpts) {
        var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.followers;
        $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
    };

    // Retrieve the list of players that are following playerId
    // @param STRING | INT playerId - Can be 'username' or 2318
    // @param FUNCTION callback - Function that will be called once the
    //                            request has successfully completed. The data
    //                            from the request will be passed to the callback.
    $.jribbble.getPlayerFollowing = function (playerId, callback, pagingOpts) {
        var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.following;
        $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
    };

    // Retrieve the list of players drafted by the playerId
    // @param STRING | INT playerId - Can be 'username' or 2318
    // @param FUNCTION callback - Function that will be called once the
    //                            request has successfully completed. The data
    //                            from the request will be passed to the callback.
    $.jribbble.getPlayerDraftees = function (playerId, callback, pagingOpts) {
        var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.draftees;
        $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
    };

    // Retrieve the set of comments for the shot specified by shotId
    // @param INT shotId - The id of the shot you want comments for.
    // @param FUNCTION callback - Function that will be called once the
    //                            request has successfully completed. The data
    //                            from the request will be passed to the callback.
    // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
    //                                  @see http://dribbble.com/api#pagination
    $.jribbble.getCommentsOfShot = function (shotId, callback, pagingOpts) {
        var resource = $.jribbble.paths.shots + shotId + $.jribbble.paths.comments;
        $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
    };

    // Retrieve the set of likes of the player specified by playerID
    // @param INT playerId - The id of the player whose likes you want
    // @param FUNCTION callback - Function that will be called once the
    //                            request has successfully completed. The data
    //                            from the request will be passed to the callback.
    // @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
    //                                  @see http://dribbble.com/api#pagination
    $.jribbble.getShotsThatPlayerLikes = function (playerId, callback, pagingOpts) {
        var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots + $.jribbble.paths.likes;
        $.fn.jribbble().makeRequest(resource, callback, pagingOpts);
    };

}(jQuery));


// jquery.mb.YTPlayer v2.7.2

function onYouTubePlayerAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
var ytp = ytp || {};
!function (jQuery, ytp) {
    var nAgt = navigator.userAgent;
    if (!jQuery.browser) {
        jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        if (-1 != (verOffset = nAgt.indexOf("Opera")))jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("MSIE")))jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
            jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
            var start = nAgt.indexOf("rv:") + 3, end = start + 4;
            jQuery.browser.fullVersion = nAgt.substring(start, end)
        } else-1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
        -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
    }
    jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, ytp.isDevice = jQuery.browser.mobile, jQuery.fn.CSSAnimate = function (e, r, t, a, o) {
        function n(e) {
            return e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            })
        }

        function i(e, r) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + r : e
        }

        return jQuery.support.CSStransition = function () {
            var e = (document.body || document.documentElement).style;
            return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
        }(), this.each(function () {
            var l = this, s = jQuery(this);
            l.id = l.id || "CSSA_" + (new Date).getTime();
            var y = y || {type: "noEvent"};
            if (l.CSSAIsRunning && l.eventType == y.type)l.CSSqueue = function () {
                s.CSSAnimate(e, r, t, a, o)
            }; else if (l.CSSqueue = null, l.eventType = y.type, 0 !== s.length && e) {
                if (l.CSSAIsRunning = !0, "function" == typeof r && (o = r, r = jQuery.fx.speeds._default), "function" == typeof t && (o = t, t = 0), "function" == typeof a && (o = a, a = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof r)for (var u in jQuery.fx.speeds) {
                    if (r == u) {
                        r = jQuery.fx.speeds[u];
                        break
                    }
                    r = jQuery.fx.speeds._default
                }
                if (r || (r = jQuery.fx.speeds._default), jQuery.support.CSStransition) {
                    y = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    }, y[a] && (a = y[a]);
                    var p = "", d = "transitionEnd";
                    jQuery.browser.webkit ? (p = "-webkit-", d = "webkitTransitionEnd") : jQuery.browser.mozilla ? (p = "-moz-", d = "transitionend") : jQuery.browser.opera ? (p = "-o-", d = "otransitionend") : jQuery.browser.msie && (p = "-ms-", d = "msTransitionEnd"), y = [];
                    for (c in e)u = c, "transform" === u && (u = p + "transform", e[u] = e[c], delete e[c]), "filter" === u && (u = p + "filter", e[u] = e[c], delete e[c]), ("transform-origin" === u || "origin" === u) && (u = p + "transform-origin", e[u] = e[c], delete e[c]), "x" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " translateX(" + i(e[c], "px") + ")", delete e[c]), "y" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " translateY(" + i(e[c], "px") + ")", delete e[c]), "z" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " translateZ(" + i(e[c], "px") + ")", delete e[c]), "rotate" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotate(" + i(e[c], "deg") + ")", delete e[c]), "rotateX" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotateX(" + i(e[c], "deg") + ")", delete e[c]), "rotateY" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotateY(" + i(e[c], "deg") + ")", delete e[c]), "rotateZ" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " rotateZ(" + i(e[c], "deg") + ")", delete e[c]), "scale" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scale(" + i(e[c], "") + ")", delete e[c]), "scaleX" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scaleX(" + i(e[c], "") + ")", delete e[c]), "scaleY" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scaleY(" + i(e[c], "") + ")", delete e[c]), "scaleZ" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " scaleZ(" + i(e[c], "") + ")", delete e[c]), "skew" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " skew(" + i(e[c], "deg") + ")", delete e[c]), "skewX" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " skewX(" + i(e[c], "deg") + ")", delete e[c]), "skewY" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " skewY(" + i(e[c], "deg") + ")", delete e[c]), "perspective" === u && (u = p + "transform", e[u] = e[u] || "", e[u] += " perspective(" + i(e[c], "px") + ")", delete e[c]), 0 > y.indexOf(u) && y.push(n(u));
                    var c = y.join(","), T = function () {
                        s.off(d + "." + l.id), clearTimeout(l.timeout), s.css(p + "transition", ""), "function" == typeof o && o(s), l.called = !0, l.CSSAIsRunning = !1, "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null)
                    }, P = {};
                    jQuery.extend(P, e), P[p + "transition-property"] = c, P[p + "transition-duration"] = r + "ms", P[p + "transition-delay"] = t + "ms", P[p + "transition-style"] = "preserve-3d", P[p + "transition-timing-function"] = a, setTimeout(function () {
                        s.one(d + "." + l.id, T), s.css(P)
                    }, 1), l.timeout = setTimeout(function () {
                        s.called || !o ? (s.called = !1, l.CSSAIsRunning = !1) : (s.css(p + "transition", ""), o(s), l.CSSAIsRunning = !1, "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null))
                    }, r + t + 100)
                } else {
                    for (var c in e)"transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c];
                    o && "string" != typeof o || (o = "linear"), s.animate(e, r, o)
                }
            }
        })
    };
    var getYTPVideoID = function (e) {
        var r;
        return r = "http://youtu.be/" == e.substr(0, 16) ? e.replace("http://youtu.be/", "") : "https://youtu.be/" == e.substr(0, 17) ? e.replace("https://youtu.be/", "") : e.indexOf("http") > -1 ? e.match(/[\\?&]v=([^&#]*)/)[1] : e
    };
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.7.2",
        author: "Matteo Bicocchi",
        defaults: {
            containment: "body",
            ratio: "16/9",
            videoURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 100,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnClick: !1,
            realfullscreen: !0,
            gaTrack: !0,
            onReady: function () {
            },
            onStateChange: function () {
            },
            onPlaybackQualityChange: function () {
            },
            onError: function () {
            }
        },
        controls: {play: "P", pause: "p", mute: "M", unmute: "A", onlyYT: "O", showSite: "R", ytLogo: "Y"},
        rasterImg: "images/raster.png",
        rasterImgRetina: "images/raster@2x.png",
        locationProtocol: "https:",
        buildPlayer: function (options) {
            return this.each(function () {
                var YTPlayer = this, $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, $YTPlayer.addClass("mb_YTVPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 == property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
                var canGoFullscreen = !(jQuery.browser.msie || jQuery.browser.opera || self.location.href != top.location.href);
                canGoFullscreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "YTP_" + (new Date).getTime()), YTPlayer.opt.id = YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
                var playerID = "mbYTP_" + YTPlayer.id, videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL) : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")) : !1;
                YTPlayer.videoID = videoID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                }, canPlayHTML5 = !1, v = document.createElement("video");
                v.canPlayType && (canPlayHTML5 = !0), canPlayHTML5 && jQuery.extend(playerVars, {html5: 1}), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"), overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    if (YTPlayer.opt.containment.is(jQuery(this)) ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), ytp.isDevice && YTPlayer.isBackground)return void $YTPlayer.remove();
                    if (YTPlayer.opt.addRaster) {
                        var classN = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster", retina = window.retina || window.devicePixelRatio > 1;
                        overlay.addClass(retina ? classN + " retina" : classN)
                    } else overlay.removeClass(function (e, r) {
                        var t = r.split(" "), a = [];
                        return jQuery.each(t, function (e, r) {
                            /raster-.*/.test(r) && a.push(r)
                        }), a.push("retina"), a.join(" ")
                    });
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    if (wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }), playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden",
                            opacity: this.opt.opacity
                        }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function () {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({
                            position: "absolute",
                            minWidth: "100%",
                            minHeight: "100%",
                            zIndex: 1,
                            boxSizing: "border-box"
                        }), wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0,
                            webkitTransform: "translateZ(0)"
                        }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({position: "relative"}), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({opacity: 1}), ytp.isDevice || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () {
                            $YTPlayer.find(".mb_YTVPBar").addClass("visible")
                        }).on("mouseleave", function () {
                            $YTPlayer.find(".mb_YTVPBar").removeClass("visible")
                        }), ytp.YTAPIReady)setTimeout(function () {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100); else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script></script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head title").after(tag)
                    }
                    jQuery(document).on("YTAPIReady", function () {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick && jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function (e) {
                            var r = jQuery(e.target);
                            (r.is("a") || r.parents().is("a")) && $YTPlayer.pauseYTP()
                        }), YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
                            return YTPlayer.isInit ? void 0 : (YTPlayer.isInit = !0, ytp.isDevice && !YTPlayer.isBackground ? void new YT.Player(playerID, {
                                videoId: YTPlayer.videoID.toString(),
                                height: "100%",
                                width: "100%",
                                videoId: YTPlayer.videoID,
                                events: {
                                    onReady: function (e) {
                                        YTPlayer.player = e.target, playerBox.css({opacity: 1}), YTPlayer.wrapper.css({opacity: YTPlayer.opt.opacity}), $YTPlayer.optimizeDisplay()
                                    }, onStateChange: function () {
                                    }
                                }
                            }) : void new YT.Player(playerID, {
                                videoId: YTPlayer.videoID.toString(),
                                playerVars: playerVars,
                                events: {
                                    onReady: function (e) {
                                        if (YTPlayer.player = e.target, !YTPlayer.isReady) {
                                            YTPlayer.isReady = !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function () {
                                                $YTPlayer.optimizeDisplay()
                                            }), YTPlayer.opt.showControls && jQuery(YTPlayer).buildYTPControls();
                                            var r = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                            YTPlayer.player.setVolume(0), jQuery(YTPlayer).muteYTPVolume(), jQuery.mbYTPlayer.checkForState(YTPlayer), YTPlayer.checkForStartAt = setInterval(function () {
                                                var e = YTPlayer.player.getVideoLoadedFraction() > r / YTPlayer.player.getDuration();
                                                YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= r && e ? (clearInterval(YTPlayer.checkForStartAt), YTPlayer.player.setVolume(0), jQuery(YTPlayer).muteYTPVolume(), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady($YTPlayer), YTPlayer.opt.mute || jQuery(YTPlayer).unmuteYTPVolume(), jQuery.mbYTPlayer.checkForState(YTPlayer), YTPlayer.player.pauseVideo(), setTimeout(function () {
                                                    YTPlayer.opt.autoPlay ? ($YTPlayer.playYTP(), $YTPlayer.css("background-image", "none")) : YTPlayer.player.pauseVideo(), YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, 2e3)
                                                }, 100)) : (YTPlayer.player.playVideo(), YTPlayer.player.seekTo(r, !0))
                                            }, jQuery.browser.chrome ? 1e3 : 1)
                                        }
                                    }, onStateChange: function (event) {
                                        if ("function" == typeof event.target.getPlayerState) {
                                            var state = event.target.getPlayerState();
                                            "function" == typeof YTPlayer.opt.onStateChange && YTPlayer.opt.onStateChange($YTPlayer, state);
                                            var controls = jQuery("#controlBar_" + YTPlayer.id), data = YTPlayer.opt;
                                            if (0 == state) {
                                                if (YTPlayer.state == state)return;
                                                YTPlayer.state = state, YTPlayer.player.pauseVideo();
                                                var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                                data.loop ? (YTPlayer.wrapper.css({opacity: 0}), $YTPlayer.playYTP(), YTPlayer.player.seekTo(startAt, !0)) : YTPlayer.isBackground || (YTPlayer.player.seekTo(startAt, !0), $YTPlayer.playYTP(), setTimeout(function () {
                                                    $YTPlayer.pauseYTP()
                                                }, 10)), !data.loop && YTPlayer.isBackground ? YTPlayer.wrapper.CSSAnimate({opacity: 0}, 2e3) : data.loop && (YTPlayer.wrapper.css({opacity: 0}), YTPlayer.loop++), controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPEnd")
                                            }
                                            if (3 == state) {
                                                if (YTPlayer.state == state)return;
                                                YTPlayer.state = state, jQuery.browser.chrome || YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPBuffering")
                                            }
                                            if (-1 == state) {
                                                if (YTPlayer.state == state)return;
                                                YTPlayer.state = state, jQuery(YTPlayer).trigger("YTPUnstarted")
                                            }
                                            if (1 == state) {
                                                if (YTPlayer.state == state)return;
                                                YTPlayer.state = state, jQuery.browser.chrome || YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause), jQuery(YTPlayer).trigger("YTPStart"), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.title || YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.title || YTPlayer.videoID.toString())
                                            }
                                            if (2 == state) {
                                                if (YTPlayer.state == state)return;
                                                YTPlayer.state = state, controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPPause")
                                            }
                                        }
                                    }, onPlaybackQualityChange: function () {
                                        "function" == typeof YTPlayer.opt.onPlaybackQualityChange && YTPlayer.opt.onPlaybackQualityChange($YTPlayer)
                                    }, onError: function (e) {
                                        150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                    }
                                }
                            }))
                        }))
                    })
                }
            })
        },
        getDataFromFeed: function (e, r) {
            r.videoID = e, jQuery.browser.msie ? ("auto" == r.opt.ratio ? r.opt.ratio = "16/9" : r.opt.ratio, r.hasData || (r.hasData = !0, setTimeout(function () {
                jQuery(r).trigger("YTPChanged")
            }, 100))) : (jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//gdata.youtube.com/feeds/api/videos/" + e + "?v=2&alt=jsonc", function (e) {
                r.dataReceived = !0;
                var t = e.data;
                if (r.title = t.title, r.videoData = t, "auto" == r.opt.ratio && (r.opt.ratio = t.aspectRatio && "widescreen" === t.aspectRatio ? "16/9" : "4/3"), !r.hasData && (r.hasData = !0, r.isPlayer)) {
                    var a = r.videoData.thumbnail.hqDefault;
                    r.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + a + ") center center",
                        backgroundSize: "cover"
                    })
                }
                jQuery(r).trigger("YTPChanged")
            }), setTimeout(function () {
                r.dataReceived || r.hasData || (r.hasData = !0, jQuery(r).trigger("YTPChanged"))
            }, 1500))
        },
        getVideoID: function () {
            var e = this.get(0);
            return e.videoID || !1
        },
        setVideoQuality: function (e) {
            var r = this.get(0);
            jQuery.browser.chrome || r.player.setPlaybackQuality(e)
        },
        YTPlaylist: function (e, r, t) {
            var a = this.get(0);
            a.isPlayList = !0, r && (e = jQuery.shuffle(e)), a.videoID || (a.videos = e, a.videoCounter = 0, a.videoLength = e.length, jQuery(a).data("property", e[0]), jQuery(a).mb_YTPlayer()), "function" == typeof t && jQuery(a).on("YTPChanged", function () {
                t(a)
            }), jQuery(a).on("YTPEnd", function () {
                jQuery(a).playNext()
            })
        },
        playNext: function () {
            var e = this.get(0);
            e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e.playerEl).css({opacity: 0}), jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        playPrev: function () {
            var e = this.get(0);
            e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e.playerEl).css({opacity: 0}), jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        changeMovie: function (e) {
            var r = this.get(0);
            r.opt.startAt = 0, r.opt.stopAt = 0, r.opt.mute = !0, e && jQuery.extend(r.opt, e), r.videoID = getYTPVideoID(r.opt.videoURL), jQuery(r).pauseYTP();
            var t = jQuery.browser.msie ? 1e3 : 0;
            if (jQuery(r.playerEl).CSSAnimate({opacity: 0}, t), setTimeout(function () {
                    var e = jQuery.browser.chrome ? "default" : r.opt.quality;
                    jQuery(r).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + r.videoID), 1, e), jQuery(r).playYTP(), jQuery(r).one("YTPStart", function () {
                        r.wrapper.CSSAnimate({opacity: r.isAlone ? 1 : r.opt.opacity}, 1e3), jQuery(r.playerEl).CSSAnimate({opacity: 1}, t), r.opt.startAt && r.player.seekTo(r.opt.startAt), jQuery.mbYTPlayer.checkForState(r), r.opt.autoPlay || jQuery(r).pauseYTP()
                    }), r.opt.mute ? jQuery(r).muteYTPVolume() : jQuery(r).unmuteYTPVolume()
                }, t), r.opt.addRaster) {
                var a = window.retina || window.devicePixelRatio > 1;
                r.overlay.addClass(a ? "raster retina" : "raster")
            } else r.overlay.removeClass("raster"), r.overlay.removeClass("retina");
            jQuery("#controlBar_" + r.id).remove(), r.opt.showControls && jQuery(r).buildYTPControls(), jQuery.mbYTPlayer.getDataFromFeed(r.videoID, r), jQuery(r).optimizeDisplay()
        },
        getPlayer: function () {
            return jQuery(this).get(0).player
        },
        playerDestroy: function () {
            var e = this.get(0);
            ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null;
            var r = e.wrapper;
            r.remove(), jQuery("#controlBar_" + e.id).remove()
        },
        fullscreen: function (real) {
            function RunPrefixMethod(e, r) {
                for (var t, a, o = ["webkit", "moz", "ms", "o", ""], n = 0; n < o.length && !e[t];) {
                    if (t = r, "" == o[n] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)), t = o[n] + t, a = typeof e[t], "undefined" != a)return o = [o[n]], "function" == a ? e[t]() : e[t];
                    n++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }

            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id), fullScreenBtn = controls.find(".mb_OnlyYT"), videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
                    var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    e ? (jQuery(YTPlayer).setVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500), videoWrapper.css({zIndex: 0}), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            if (YTPlayer.isAlone)real ? cancelFullscreen() : (videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500), videoWrapper.css({zIndex: 0})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1; else {
                if (real) {
                    var playerState = YTPlayer.player.getPlayerState();
                    videoWrapper.css({opacity: 0}), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
                        videoWrapper.CSSAnimate({opacity: 1}, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
                    }, 500)
                } else videoWrapper.css({zIndex: 1e4}).CSSAnimate({opacity: 1}, 1e3);
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0
            }
        },
        playYTP: function () {
            var e = this.get(0);
            if ("undefined" != typeof e.player) {
                var r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTVPPlaypause");
                t.html(jQuery.mbYTPlayer.controls.pause), e.player.playVideo(), e.wrapper.CSSAnimate({opacity: e.isAlone ? 1 : e.opt.opacity}, 2e3), jQuery(e).on("YTPStart", function () {
                    jQuery(e).css("background-image", "none")
                })
            }
        },
        toggleLoops: function () {
            var e = this.get(0), r = e.opt;
            1 == r.loop ? r.loop = 0 : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(), r.loop = 1)
        },
        stopYTP: function () {
            var e = this.get(0), r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTVPPlaypause");
            t.html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo()
        },
        pauseYTP: function () {
            var e = this.get(0), r = (e.opt, jQuery("#controlBar_" + e.id)), t = r.find(".mb_YTVPPlaypause");
            t.html(jQuery.mbYTPlayer.controls.play), e.player.pauseVideo()
        },
        seekToYTP: function (e) {
            var r = this.get(0);
            r.player.seekTo(e, !0)
        },
        setYTPVolume: function (e) {
            var r = this.get(0);
            e || r.opt.vol || 0 != r.player.getVolume() ? !e && r.player.getVolume() > 0 || e && r.player.getVolume() == e ? jQuery(r).muteYTPVolume() : r.opt.vol = e : jQuery(r).unmuteYTPVolume(), r.player.setVolume(r.opt.vol)
        },
        muteYTPVolume: function () {
            var e = this.get(0);
            e.player.mute(), e.player.setVolume(0);
            var r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTVPMuteUnmute");
            t.html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), jQuery(e).trigger("YTPMuted")
        },
        unmuteYTPVolume: function () {
            var e = this.get(0);
            e.player.unMute(), e.player.setVolume(e.opt.vol);
            var r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTVPMuteUnmute");
            t.html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), jQuery(e).trigger("YTPUnmuted")
        },
        manageYTPProgress: function () {
            var e = this.get(0), r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTVPProgress"), a = r.find(".mb_YTVPLoaded"), o = r.find(".mb_YTVTime"), n = t.outerWidth(), i = Math.floor(e.player.getCurrentTime()), l = Math.floor(e.player.getDuration()), s = i * n / l, y = 0, u = 100 * e.player.getVideoLoadedFraction();
            return a.css({left: y, width: u + "%"}), o.css({left: 0, width: s}), {totalTime: l, currentTime: i}
        },
        buildYTPControls: function () {
            var YTPlayer = this.get(0), data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                var controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTVPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide(), buttonBar = jQuery("<div/>").addClass("buttonBar"), playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTVPPlaypause ytpicon").click(function () {
                    1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).pauseYTP() : jQuery(YTPlayer).playYTP()
                }), MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function () {
                    0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).unmuteYTPVolume() : jQuery(YTPlayer).muteYTPVolume()
                }), idx = jQuery("<span/>").addClass("mb_YTVPTime"), vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                    window.open(vURL, "viewOnYT")
                }), onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
                    jQuery(YTPlayer).fullscreen(data.realfullscreen)
                }), progressBar = jQuery("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function (e) {
                    timeBar.css({width: e.clientX - timeBar.offset().left}), YTPlayer.timeW = e.clientX - timeBar.offset().left, controlBar.find(".mb_YTVPLoaded").css({width: 0});
                    var r = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer.goto = timeBar.outerWidth() * r / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), controlBar.find(".mb_YTVPLoaded").css({width: 0})
                }), loadedBar = jQuery("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute"), timeBar = jQuery("<div/>").addClass("mb_YTVTime").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(controlBar) : (controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(controlBar)), controlBar.fadeIn()
            }
        },
        checkForState: function (e) {
            var r = e.opt.showControls ? 10 : 1e3;
            clearInterval(e.getState), e.getState = setInterval(function () {
                var r = jQuery(e).manageYTPProgress(), t = jQuery(e), a = jQuery("#controlBar_" + e.id), o = e.opt, n = e.opt.startAt ? e.opt.startAt : 1, i = e.opt.stopAt > e.opt.startAt ? e.opt.stopAt : 0;
                if (i = i < e.player.getDuration() ? i : 0, 0 == e.player.getVolume() ? t.addClass("isMuted") : t.removeClass("isMuted"), e.opt.showControls && a.find(".mb_YTVPTime").html(r.totalTime ? jQuery.mbYTPlayer.formatTime(r.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(r.totalTime) : "-- : -- / -- : --"), document.hasFocus() ? document.hasFocus() && !e.hasFocus && (e.hasFocus = !0, t.playYTP()) : (e.hasFocus = !1, t.pauseYTP()), 1 == e.player.getPlayerState() && (parseFloat(e.player.getDuration() - 3) < e.player.getCurrentTime() || i > 0 && parseFloat(e.player.getCurrentTime()) > i)) {
                    if (e.isEnded)return;
                    if (e.isEnded = !0, setTimeout(function () {
                            e.isEnded = !1
                        }, 2e3), e.isPlayList)return clearInterval(e.getState), void jQuery(e).trigger("YTPEnd");
                    o.loop ? e.player.seekTo(n, !0) : (e.player.pauseVideo(), e.wrapper.CSSAnimate({opacity: 0}, 1e3, function () {
                        if (jQuery(e).trigger("YTPEnd"), e.player.seekTo(n, !0), !e.isBackground) {
                            var r = e.videoData.thumbnail.hqDefault;
                            jQuery(e).css({
                                background: "rgba(0,0,0,0.5) url(" + r + ") center center",
                                backgroundSize: "cover"
                            })
                        }
                    }))
                }
            }, r)
        },
        formatTime: function (e) {
            var r = Math.floor(e / 60), t = Math.floor(e - 60 * r);
            return (9 >= r ? "0" + r : r) + " : " + (9 >= t ? "0" + t : t)
        }
    }, jQuery.fn.toggleVolume = function () {
        var e = this.get(0);
        if (e)return e.player.isMuted() ? (jQuery(e).unmuteYTPVolume(), !0) : (jQuery(e).muteYTPVolume(), !1)
    }, jQuery.fn.optimizeDisplay = function () {
        var e = this.get(0), r = e.opt, t = jQuery(e.playerEl), a = {}, o = e.wrapper;
        a.width = o.outerWidth(), a.height = o.outerHeight();
        var n = 24, i = 100, l = {};
        l.width = a.width + a.width * n / 100, l.height = Math.ceil("16/9" == r.ratio ? 9 * a.width / 16 : 3 * a.width / 4), l.marginTop = -((l.height - a.height) / 2), l.marginLeft = -(a.width * (n / 2) / 100), l.height < a.height && (l.height = a.height + a.height * n / 100, l.width = Math.floor("16/9" == r.ratio ? 16 * a.height / 9 : 4 * a.height / 3), l.marginTop = -(a.height * (n / 2) / 100), l.marginLeft = -((l.width - a.width) / 2)), l.width += i, l.height += i, l.marginTop -= i / 2, l.marginLeft -= i / 2, t.css({
            width: l.width,
            height: l.height,
            marginTop: l.marginTop,
            marginLeft: l.marginLeft
        })
    }, jQuery.shuffle = function (e) {
        for (var r = e.slice(), t = r.length, a = t; a--;) {
            var o = parseInt(Math.random() * t), n = r[a];
            r[a] = r[o], r[o] = n
        }
        return r
    }, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTPVolume, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTPVolume, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress
}(jQuery, ytp);


/*
 Easy pie chart is a jquery plugin to display simple animated pie charts for only one value

 Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.

 Built on top of the jQuery library (http://jquery.com)

 @source: http://github.com/rendro/easy-pie-chart/
 @autor: Robert Fleischmann
 @version: 1.2.5

 Inspired by: http://dribbble.com/shots/631074-Simple-Pie-Charts-II?list=popular&offset=210
 Thanks to Philip Thrasher for the jquery plugin boilerplate for coffee script
 */

(function (e) {
    e.easyPieChart = function (t, n) {
        var r, i, s, o, u, a, f, l, c = this;
        this.el = t;
        this.$el = e(t);
        this.$el.data("easyPieChart", this);
        this.init = function () {
            var t, r;
            c.options = e.extend({}, e.easyPieChart.defaultOptions, n);
            t = parseInt(c.$el.data("percent"), 10);
            c.percentage = 0;
            c.canvas = e("<canvas width='" + c.options.size + "' height='" + c.options.size + "'></canvas>").get(0);
            c.$el.append(c.canvas);
            if (typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
                G_vmlCanvasManager.initElement(c.canvas)
            }
            c.ctx = c.canvas.getContext("2d");
            if (window.devicePixelRatio > 1) {
                r = window.devicePixelRatio;
                e(c.canvas).css({width: c.options.size, height: c.options.size});
                c.canvas.width *= r;
                c.canvas.height *= r;
                c.ctx.scale(r, r)
            }
            c.ctx.translate(c.options.size / 2, c.options.size / 2);
            c.ctx.rotate(c.options.rotate * Math.PI / 180);
            c.$el.addClass("easyPieChart");
            c.$el.css({width: c.options.size, height: c.options.size, lineHeight: "" + c.options.size + "px"});
            c.update(t);
            return c
        };
        this.update = function (e) {
            e = parseFloat(e) || 0;
            if (c.options.animate === false) {
                s(e)
            } else {
                if (c.options.delay) {
                    i(c.percentage, 0);
                    setTimeout(function () {
                        return i(c.percentage, e)
                    }, c.options.delay)
                } else {
                    i(c.percentage, e)
                }
            }
            return c
        };
        f = function () {
            var e, t, n;
            c.ctx.fillStyle = c.options.scaleColor;
            c.ctx.lineWidth = 1;
            n = [];
            for (e = t = 0; t <= 24; e = ++t) {
                n.push(r(e))
            }
            return n
        };
        r = function (e) {
            var t;
            t = e % 6 === 0 ? 0 : c.options.size * .017;
            c.ctx.save();
            c.ctx.rotate(e * Math.PI / 12);
            c.ctx.fillRect(c.options.size / 2 - t, 0, -c.options.size * .05 + t, 1);
            c.ctx.restore()
        };
        l = function () {
            var e;
            e = c.options.size / 2 - c.options.lineWidth / 2;
            if (c.options.scaleColor !== false) {
                e -= c.options.size * .08
            }
            c.ctx.beginPath();
            c.ctx.arc(0, 0, e, 0, Math.PI * 2, true);
            c.ctx.closePath();
            c.ctx.strokeStyle = c.options.trackColor;
            c.ctx.lineWidth = c.options.lineWidth;
            c.ctx.stroke()
        };
        a = function () {
            if (c.options.scaleColor !== false) {
                f()
            }
            if (c.options.trackColor !== false) {
                l()
            }
        };
        s = function (t) {
            var n;
            a();
            c.ctx.strokeStyle = e.isFunction(c.options.barColor) ? c.options.barColor(t) : c.options.barColor;
            c.ctx.lineCap = c.options.lineCap;
            c.ctx.lineWidth = c.options.lineWidth;
            n = c.options.size / 2 - c.options.lineWidth / 2;
            if (c.options.scaleColor !== false) {
                n -= c.options.size * .08
            }
            c.ctx.save();
            c.ctx.rotate(-Math.PI / 2);
            c.ctx.beginPath();
            c.ctx.arc(0, 0, n, 0, Math.PI * 2 * t / 100, false);
            c.ctx.stroke();
            c.ctx.restore()
        };
        u = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                return window.setTimeout(e, 1e3 / 60)
            }
        }();
        i = function (e, t) {
            var n, r;
            c.options.onStart.call(c);
            c.percentage = t;
            Date.now || (Date.now = function () {
                return +(new Date)
            });
            r = Date.now();
            n = function () {
                var i, f;
                f = Math.min(Date.now() - r, c.options.animate);
                c.ctx.clearRect(-c.options.size / 2, -c.options.size / 2, c.options.size, c.options.size);
                a.call(c);
                i = [o(f, e, t - e, c.options.animate)];
                c.options.onStep.call(c, i);
                s.call(c, i);
                if (f >= c.options.animate) {
                    return c.options.onStop.call(c, i, t)
                } else {
                    return u(n)
                }
            };
            u(n)
        };
        o = function (e, t, n, r) {
            var i, s;
            i = function (e) {
                return Math.pow(e, 2)
            };
            s = function (e) {
                if (e < 1) {
                    return i(e)
                } else {
                    return 2 - i(e / 2 * -2 + 2)
                }
            };
            e /= r / 2;
            return n / 2 * s(e) + t
        };
        return this.init()
    };
    e.easyPieChart.defaultOptions = {
        barColor: "#ef1e25",
        trackColor: "#f2f2f2",
        scaleColor: "#dfe0e0",
        lineCap: "round",
        rotate: 0,
        size: 110,
        lineWidth: 3,
        animate: false,
        delay: false,
        onStart: e.noop,
        onStop: e.noop,
        onStep: e.noop
    };
    e.fn.easyPieChart = function (t) {
        return e.each(this, function (n, r) {
            var i, s;
            i = e(r);
            if (!i.data("easyPieChart")) {
                s = e.extend({}, t, i.data());
                return i.data("easyPieChart", new e.easyPieChart(r, s))
            }
        })
    };
    return void 0
})(jQuery);


/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function (e) {
    e.fn.appear = function (t, n) {
        var r = e.extend({data: undefined, one: true, accX: 0, accY: 0}, n);
        return this.each(function () {
            var n = e(this);
            n.appeared = false;
            if (!t) {
                n.trigger("appear", r.data);
                return
            }
            var i = e(window);
            var s = function () {
                if (!n.is(":visible")) {
                    n.appeared = false;
                    return
                }
                var e = i.scrollLeft();
                var t = i.scrollTop();
                var s = n.offset();
                var o = s.left;
                var u = s.top;
                var a = r.accX;
                var f = r.accY;
                var l = n.height();
                var c = i.height();
                var h = n.width();
                var p = i.width();
                if (u + l + f >= t && u <= t + c + f && o + h + a >= e && o <= e + p + a) {
                    if (!n.appeared)n.trigger("appear", r.data)
                } else {
                    n.appeared = false
                }
            };
            var o = function () {
                n.appeared = true;
                if (r.one) {
                    i.unbind("scroll", s);
                    var o = e.inArray(s, e.fn.appear.checks);
                    if (o >= 0)e.fn.appear.checks.splice(o, 1)
                }
                t.apply(this, arguments)
            };
            if (r.one)n.one("appear", r.data, o); else n.bind("appear", r.data, o);
            i.scroll(s);
            e.fn.appear.checks.push(s);
            s()
        })
    };
    e.extend(e.fn.appear, {
        checks: [], timeout: null, checkAll: function () {
            var t = e.fn.appear.checks.length;
            if (t > 0)while (t--)e.fn.appear.checks[t]()
        }, run: function () {
            if (e.fn.appear.timeout)clearTimeout(e.fn.appear.timeout);
            e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    });
    e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (t, n) {
        var r = e.fn[n];
        if (r) {
            e.fn[n] = function () {
                var t = r.apply(this, arguments);
                e.fn.appear.run();
                return t
            }
        }
    })
})(jQuery);


/*!
 * animsition v3.4.1
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
!function (n) {
    "use strict";
    var a = "animsition", i = {
        init: function (t) {
            t = n.extend({
                inClass: "fade-in",
                outClass: "fade-out",
                inDuration: 1500,
                outDuration: 800,
                linkElement: ".animsition-link",
                loading: !0,
                loadingParentElement: "body",
                loadingClass: "animsition-loading",
                loadingHtml: '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>',
                unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"],
                overlay: !1,
                overlayClass: "animsition-overlay-slide",
                overlayParentElement: "body"
            }, t);
            var o = i.supportCheck.call(this, t);
            if (!o)return "console"in window || (window.console = {}, window.console.log = function (n) {
                return n
            }), console.log("Animsition does not support this browser."), i.destroy.call(this);
            var e = i.optionCheck.call(this, t);
            return e && i.addOverlay.call(this, t), t.loading && i.addLoading.call(this, t), this.each(function () {
                var o = this, e = n(this), s = n(window), l = e.data(a);
                l || (t = n.extend({}, t), e.data(a, {options: t}), s.on("load." + a + " pageshow." + a, function () {
                    i.pageIn.call(o)
                }), s.on("unload." + a, function () {
                }), n(t.linkElement).on("click." + a, function (a) {
                    a.preventDefault();
                    var t = n(this);
                    i.pageOut.call(o, t)
                }))
            })
        }, addOverlay: function (a) {
            n(a.overlayParentElement).prepend('<div class="' + a.overlayClass + '"></div>')
        }, addLoading: function (a) {
            n(a.loadingParentElement).append('<div class="' + a.loadingClass + '">' + a.loadingHtml + "</div>")
        }, removeLoading: function () {
            var i = n(this), t = i.data(a).options, o = n(t.loadingParentElement).children("." + t.loadingClass);
            o.fadeOut().remove()
        }, supportCheck: function (a) {
            var i = n(this), t = a.unSupportCss, o = t.length, e = !1;
            0 === o && (e = !0);
            for (var s = 0; o > s; s++)if ("string" == typeof i.css(t[s])) {
                e = !0;
                break
            }
            return e
        }, optionCheck: function (a) {
            var i, t = n(this);
            return i = a.overlay || t.data("animsition-overlay") ? !0 : !1
        }, animationCheck: function (i, t, o) {
            var e = n(this), s = e.data(a).options, l = typeof i, r = !t && "number" === l, c = t && "string" === l && i.length > 0;
            return r || c ? i = i : t && o ? i = s.inClass : !t && o ? i = s.inDuration : t && !o ? i = s.outClass : t || o || (i = s.outDuration), i
        }, pageIn: function () {
            var t = this, o = n(this), e = o.data(a).options, s = o.data("animsition-in-duration"), l = o.data("animsition-in"), r = i.animationCheck.call(t, s, !1, !0), c = i.animationCheck.call(t, l, !0, !0), d = i.optionCheck.call(t, e);
            e.loading && i.removeLoading.call(t), d ? i.pageInOverlay.call(t, c, r) : i.pageInBasic.call(t, c, r)
        }, pageInBasic: function (a, i) {
            var t = n(this);
            t.css({"animation-duration": i / 1e3 + "s"}).addClass(a).animateCallback(function () {
                t.removeClass(a).css({opacity: 1})
            })
        }, pageInOverlay: function (i, t) {
            var o = n(this), e = o.data(a).options;
            o.css({opacity: 1}), n(e.overlayParentElement).children("." + e.overlayClass).css({"animation-duration": t / 1e3 + "s"}).addClass(i)
        }, pageOut: function (t) {
            var o = this, e = n(this), s = e.data(a).options, l = t.data("animsition-out"), r = e.data("animsition-out"), c = t.data("animsition-out-duration"), d = e.data("animsition-out-duration"), u = l ? l : r, m = c ? c : d, h = i.animationCheck.call(o, u, !0, !1), p = i.animationCheck.call(o, m, !1, !1), v = i.optionCheck.call(o, s), f = t.attr("href");
            v ? i.pageOutOverlay.call(o, h, p, f) : i.pageOutBasic.call(o, h, p, f)
        }, pageOutBasic: function (a, i, t) {
            var o = n(this);
            o.css({"animation-duration": i / 1e3 + "s"}).addClass(a).animateCallback(function () {
                location.href = t
            })
        }, pageOutOverlay: function (t, o, e) {
            var s = this, l = n(this), r = l.data(a).options, c = l.data("animsition-in"), d = i.animationCheck.call(s, c, !0, !0);
            n(r.overlayParentElement).children("." + r.overlayClass).css({"animation-duration": o / 1e3 + "s"}).removeClass(d).addClass(t).animateCallback(function () {
                l.css({opacity: 0}), location.href = e
            })
        }, destroy: function () {
            return this.each(function () {
                var i = n(this);
                n(window).unbind("." + a), i.css({opacity: 1}).removeData(a)
            })
        }
    };
    n.fn.animateCallback = function (a) {
        var i = "animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";
        return this.each(function () {
            n(this).bind(i, function () {
                return n(this).unbind(i), a.call(this)
            })
        })
    }, n.fn.animsition = function (t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void n.error("Method " + t + " does not exist on jQuery." + a) : i.init.apply(this, arguments)
    }
}(jQuery);


/*! Stellar.js v0.6.2 | Copyright 2013, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
(function (e, t, n, r) {
    function d(t, n) {
        this.element = t, this.options = e.extend({}, s, n), this._defaults = s, this._name = i, this.init()
    }

    var i = "stellar", s = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function (e) {
            e.hide()
        },
        showElement: function (e) {
            e.show()
        }
    }, o = {
        scroll: {
            getLeft: function (e) {
                return e.scrollLeft()
            }, setLeft: function (e, t) {
                e.scrollLeft(t)
            }, getTop: function (e) {
                return e.scrollTop()
            }, setTop: function (e, t) {
                e.scrollTop(t)
            }
        }, position: {
            getLeft: function (e) {
                return parseInt(e.css("left"), 10) * -1
            }, getTop: function (e) {
                return parseInt(e.css("top"), 10) * -1
            }
        }, margin: {
            getLeft: function (e) {
                return parseInt(e.css("margin-left"), 10) * -1
            }, getTop: function (e) {
                return parseInt(e.css("margin-top"), 10) * -1
            }
        }, transform: {
            getLeft: function (e) {
                var t = getComputedStyle(e[0])[f];
                return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
            }, getTop: function (e) {
                var t = getComputedStyle(e[0])[f];
                return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
            }
        }
    }, u = {
        position: {
            setLeft: function (e, t) {
                e.css("left", t)
            }, setTop: function (e, t) {
                e.css("top", t)
            }
        }, transform: {
            setPosition: function (e, t, n, r, i) {
                e[0].style[f] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
            }
        }
    }, a = function () {
        var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, n = e("script")[0].style, r = "", i;
        for (i in n)if (t.test(i)) {
            r = i.match(t)[0];
            break
        }
        return "WebkitOpacity"in n && (r = "Webkit"), "KhtmlOpacity"in n && (r = "Khtml"), function (e) {
            return r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
        }
    }(), f = a("transform"), l = e("<div />", {style: "background:#fff"}).css("background-position-x") !== r, c = l ? function (e, t, n) {
        e.css({"background-position-x": t, "background-position-y": n})
    } : function (e, t, n) {
        e.css("background-position", t + " " + n)
    }, h = l ? function (e) {
        return [e.css("background-position-x"), e.css("background-position-y")]
    } : function (e) {
        return e.css("background-position").split(" ")
    }, p = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        };
    d.prototype = {
        init: function () {
            this.options.name = i + "_" + Math.floor(Math.random() * 1e9), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), this.options.scrollProperty === "scroll" ? this._handleScrollEvent() : this._startAnimationLoop()
        }, _defineElements: function () {
            this.element === n.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = this.element === t ? e("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || this.options.scrollProperty === "scroll" ? this.$scrollElement : this.$scrollElement.parent()
        }, _defineGetters: function () {
            var e = this, t = o[e.options.scrollProperty];
            this._getScrollLeft = function () {
                return t.getLeft(e.$scrollElement)
            }, this._getScrollTop = function () {
                return t.getTop(e.$scrollElement)
            }
        }, _defineSetters: function () {
            var t = this, n = o[t.options.scrollProperty], r = u[t.options.positionProperty], i = n.setLeft, s = n.setTop;
            this._setScrollLeft = typeof i == "function" ? function (e) {
                i(t.$scrollElement, e)
            } : e.noop, this._setScrollTop = typeof s == "function" ? function (e) {
                s(t.$scrollElement, e)
            } : e.noop, this._setPosition = r.setPosition || function (e, n, i, s, o) {
                t.options.horizontalScrolling && r.setLeft(e, n, i), t.options.verticalScrolling && r.setTop(e, s, o)
            }
        }, _handleWindowLoadAndResize: function () {
            var n = this, r = e(t);
            n.options.responsive && r.bind("load." + this.name, function () {
                n.refresh()
            }), r.bind("resize." + this.name, function () {
                n._detectViewport(), n.options.responsive && n.refresh()
            })
        }, refresh: function (n) {
            var r = this, i = r._getScrollLeft(), s = r._getScrollTop();
            (!n || !n.firstLoad) && this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function () {
                var e = r._getScrollLeft(), t = r._getScrollTop();
                r._setScrollLeft(e + 1), r._setScrollTop(t + 1), r._setScrollLeft(e), r._setScrollTop(t)
            }), this._setScrollLeft(i), this._setScrollTop(s)
        }, _detectViewport: function () {
            var e = this.$viewportElement.offset(), t = e !== null && e !== r;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
        }, _findParticles: function () {
            var t = this, n = this._getScrollLeft(), i = this._getScrollTop();
            if (this.particles !== r)for (var s = this.particles.length - 1; s >= 0; s--)this.particles[s].$element.data("stellar-elementIsActive", r);
            this.particles = [];
            if (!this.options.parallaxElements)return;
            this.$element.find("[data-stellar-ratio]").each(function (n) {
                var i = e(this), s, o, u, a, f, l, c, h, p, d = 0, v = 0, m = 0, g = 0;
                if (!i.data("stellar-elementIsActive"))i.data("stellar-elementIsActive", this); else if (i.data("stellar-elementIsActive") !== this)return;
                t.options.showElement(i), i.data("stellar-startingLeft") ? (i.css("left", i.data("stellar-startingLeft")), i.css("top", i.data("stellar-startingTop"))) : (i.data("stellar-startingLeft", i.css("left")), i.data("stellar-startingTop", i.css("top"))), u = i.position().left, a = i.position().top, f = i.css("margin-left") === "auto" ? 0 : parseInt(i.css("margin-left"), 10), l = i.css("margin-top") === "auto" ? 0 : parseInt(i.css("margin-top"), 10), h = i.offset().left - f, p = i.offset().top - l, i.parents().each(function () {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === !0)return d = m, v = g, c = t, !1;
                    m += t.position().left, g += t.position().top
                }), s = i.data("stellar-horizontal-offset") !== r ? i.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : t.horizontalOffset, o = i.data("stellar-vertical-offset") !== r ? i.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({
                    $element: i,
                    $offsetParent: c,
                    isFixed: i.css("position") === "fixed",
                    horizontalOffset: s,
                    verticalOffset: o,
                    startingPositionLeft: u,
                    startingPositionTop: a,
                    startingOffsetLeft: h,
                    startingOffsetTop: p,
                    parentOffsetLeft: d,
                    parentOffsetTop: v,
                    stellarRatio: i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1,
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0),
                    isHidden: !1
                })
            })
        }, _findBackgrounds: function () {
            var t = this, n = this._getScrollLeft(), i = this._getScrollTop(), s;
            this.backgrounds = [];
            if (!this.options.parallaxBackgrounds)return;
            s = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (s = s.add(this.$element)), s.each(function () {
                var s = e(this), o = h(s), u, a, f, l, p, d, v, m, g, y = 0, b = 0, w = 0, E = 0;
                if (!s.data("stellar-backgroundIsActive"))s.data("stellar-backgroundIsActive", this); else if (s.data("stellar-backgroundIsActive") !== this)return;
                s.data("stellar-backgroundStartingLeft") ? c(s, s.data("stellar-backgroundStartingLeft"), s.data("stellar-backgroundStartingTop")) : (s.data("stellar-backgroundStartingLeft", o[0]), s.data("stellar-backgroundStartingTop", o[1])), p = s.css("margin-left") === "auto" ? 0 : parseInt(s.css("margin-left"), 10), d = s.css("margin-top") === "auto" ? 0 : parseInt(s.css("margin-top"), 10), v = s.offset().left - p - n, m = s.offset().top - d - i, s.parents().each(function () {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === !0)return y = w, b = E, g = t, !1;
                    w += t.position().left, E += t.position().top
                }), u = s.data("stellar-horizontal-offset") !== r ? s.data("stellar-horizontal-offset") : g !== r && g.data("stellar-horizontal-offset") !== r ? g.data("stellar-horizontal-offset") : t.horizontalOffset, a = s.data("stellar-vertical-offset") !== r ? s.data("stellar-vertical-offset") : g !== r && g.data("stellar-vertical-offset") !== r ? g.data("stellar-vertical-offset") : t.verticalOffset, t.backgrounds.push({
                    $element: s,
                    $offsetParent: g,
                    isFixed: s.css("background-attachment") === "fixed",
                    horizontalOffset: u,
                    verticalOffset: a,
                    startingValueLeft: o[0],
                    startingValueTop: o[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(o[0], 10)) ? 0 : parseInt(o[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(o[1], 10)) ? 0 : parseInt(o[1], 10),
                    startingPositionLeft: s.position().left,
                    startingPositionTop: s.position().top,
                    startingOffsetLeft: v,
                    startingOffsetTop: m,
                    parentOffsetLeft: y,
                    parentOffsetTop: b,
                    stellarRatio: s.data("stellar-background-ratio") === r ? 1 : s.data("stellar-background-ratio")
                })
            })
        }, _reset: function () {
            var e, t, n, r, i;
            for (i = this.particles.length - 1; i >= 0; i--)e = this.particles[i], t = e.$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (i = this.backgrounds.length - 1; i >= 0; i--)r = this.backgrounds[i], r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), c(r.$element, r.startingValueLeft, r.startingValueTop)
        }, destroy: function () {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name)
        }, _setOffsets: function () {
            var n = this, r = e(t);
            r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), typeof this.options.horizontalOffset == "function" ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name, function () {
                n.horizontalOffset = n.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, typeof this.options.verticalOffset == "function" ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name, function () {
                n.verticalOffset = n.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        }, _repositionElements: function () {
            var e = this._getScrollLeft(), t = this._getScrollTop(), n, r, i, s, o, u, a, f = !0, l = !0, h, p, d, v, m;
            if (this.currentScrollLeft === e && this.currentScrollTop === t && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight)return;
            this.currentScrollLeft = e, this.currentScrollTop = t, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight;
            for (m = this.particles.length - 1; m >= 0; m--)i = this.particles[m], s = i.isFixed ? 1 : 0, this.options.horizontalScrolling ? (h = (e + i.horizontalOffset + this.viewportOffsetLeft + i.startingPositionLeft - i.startingOffsetLeft + i.parentOffsetLeft) * -(i.stellarRatio + s - 1) + i.startingPositionLeft, d = h - i.startingPositionLeft + i.startingOffsetLeft) : (h = i.startingPositionLeft, d = i.startingOffsetLeft), this.options.verticalScrolling ? (p = (t + i.verticalOffset + this.viewportOffsetTop + i.startingPositionTop - i.startingOffsetTop + i.parentOffsetTop) * -(i.stellarRatio + s - 1) + i.startingPositionTop, v = p - i.startingPositionTop + i.startingOffsetTop) : (p = i.startingPositionTop, v = i.startingOffsetTop), this.options.hideDistantElements && (l = !this.options.horizontalScrolling || d + i.width > (i.isFixed ? 0 : e) && d < (i.isFixed ? 0 : e) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || v + i.height > (i.isFixed ? 0 : t) && v < (i.isFixed ? 0 : t) + this.viewportHeight + this.viewportOffsetTop), l && f ? (i.isHidden && (this.options.showElement(i.$element), i.isHidden = !1), this._setPosition(i.$element, h, i.startingPositionLeft, p, i.startingPositionTop)) : i.isHidden || (this.options.hideElement(i.$element), i.isHidden = !0);
            for (m = this.backgrounds.length - 1; m >= 0; m--)o = this.backgrounds[m], s = o.isFixed ? 0 : 1, u = this.options.horizontalScrolling ? (e + o.horizontalOffset - this.viewportOffsetLeft - o.startingOffsetLeft + o.parentOffsetLeft - o.startingBackgroundPositionLeft) * (s - o.stellarRatio) + "px" : o.startingValueLeft, a = this.options.verticalScrolling ? (t + o.verticalOffset - this.viewportOffsetTop - o.startingOffsetTop + o.parentOffsetTop - o.startingBackgroundPositionTop) * (s - o.stellarRatio) + "px" : o.startingValueTop, c(o.$element, u, a)
        }, _handleScrollEvent: function () {
            var e = this, t = !1, n = function () {
                e._repositionElements(), t = !1
            }, r = function () {
                t || (p(n), t = !0)
            };
            this.$scrollElement.bind("scroll." + this.name, r), r()
        }, _startAnimationLoop: function () {
            var e = this;
            this._animationLoop = function () {
                p(e._animationLoop), e._repositionElements()
            }, this._animationLoop()
        }
    }, e.fn[i] = function (t) {
        var n = arguments;
        if (t === r || typeof t == "object")return this.each(function () {
            e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new d(this, t))
        });
        if (typeof t == "string" && t[0] !== "_" && t !== "init")return this.each(function () {
            var r = e.data(this, "plugin_" + i);
            r instanceof d && typeof r[t] == "function" && r[t].apply(r, Array.prototype.slice.call(n, 1)), t === "destroy" && e.data(this, "plugin_" + i, null)
        })
    }, e[i] = function (n) {
        var r = e(t);
        return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0))
    }, e[i].scrollProperty = o, e[i].positionProperty = u, t.Stellar = d
})(jQuery, this, document);


/** Abstract base class for collection plugins.
 Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
 Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. */
(function () {
    var j = false;
    window.JQClass = function () {
    };
    JQClass.classes = {};
    JQClass.extend = function extender(f) {
        var g = this.prototype;
        j = true;
        var h = new this();
        j = false;
        for (var i in f) {
            h[i] = typeof f[i] == 'function' && typeof g[i] == 'function' ? (function (d, e) {
                return function () {
                    var b = this._super;
                    this._super = function (a) {
                        return g[d].apply(this, a)
                    };
                    var c = e.apply(this, arguments);
                    this._super = b;
                    return c
                }
            })(i, f[i]) : f[i]
        }
        function JQClass() {
            if (!j && this._init) {
                this._init.apply(this, arguments)
            }
        }

        JQClass.prototype = h;
        JQClass.prototype.constructor = JQClass;
        JQClass.extend = extender;
        return JQClass
    }
})();
(function ($) {
    JQClass.classes.JQPlugin = JQClass.extend({
        name: 'plugin',
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function () {
            return 'is-' + this.name
        },
        _init: function () {
            $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
            var c = camelCase(this.name);
            $[c] = this;
            $.fn[c] = function (a) {
                var b = Array.prototype.slice.call(arguments, 1);
                if ($[c]._isNotChained(a, b)) {
                    return $[c][a].apply($[c], [this[0]].concat(b))
                }
                return this.each(function () {
                    if (typeof a === 'string') {
                        if (a[0] === '_' || !$[c][a]) {
                            throw'Unknown method: ' + a;
                        }
                        $[c][a].apply($[c], [this].concat(b))
                    } else {
                        $[c]._attach(this, a)
                    }
                })
            }
        },
        setDefaults: function (a) {
            $.extend(this.defaultOptions, a || {})
        },
        _isNotChained: function (a, b) {
            if (a === 'option' && (b.length === 0 || (b.length === 1 && typeof b[0] === 'string'))) {
                return true
            }
            return $.inArray(a, this._getters) > -1
        },
        _attach: function (a, b) {
            a = $(a);
            if (a.hasClass(this._getMarker())) {
                return
            }
            a.addClass(this._getMarker());
            b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
            var c = $.extend({name: this.name, elem: a, options: b}, this._instSettings(a, b));
            a.data(this.name, c);
            this._postAttach(a, c);
            this.option(a, b)
        },
        _instSettings: function (a, b) {
            return {}
        },
        _postAttach: function (a, b) {
        },
        _getMetadata: function (d) {
            try {
                var f = d.data(this.name.toLowerCase()) || '';
                f = f.replace(/'/g, '"');
                f = f.replace(/([a-zA-Z0-9]+):/g, function (a, b, i) {
                    var c = f.substring(0, i).match(/"/g);
                    return (!c || c.length % 2 === 0 ? '"' + b + '":' : b + ':')
                });
                f = $.parseJSON('{' + f + '}');
                for (var g in f) {
                    var h = f[g];
                    if (typeof h === 'string' && h.match(/^new Date\((.*)\)$/)) {
                        f[g] = eval(h)
                    }
                }
                return f
            } catch (e) {
                return {}
            }
        },
        _getInst: function (a) {
            return $(a).data(this.name) || {}
        },
        option: function (a, b, c) {
            a = $(a);
            var d = a.data(this.name);
            if (!b || (typeof b === 'string' && c == null)) {
                var e = (d || {}).options;
                return (e && b ? e[b] : e)
            }
            if (!a.hasClass(this._getMarker())) {
                return
            }
            var e = b || {};
            if (typeof b === 'string') {
                e = {};
                e[b] = c
            }
            this._optionsChanged(a, d, e);
            $.extend(d.options, e)
        },
        _optionsChanged: function (a, b, c) {
        },
        destroy: function (a) {
            a = $(a);
            if (!a.hasClass(this._getMarker())) {
                return
            }
            this._preDestroy(a, this._getInst(a));
            a.removeData(this.name).removeClass(this._getMarker())
        },
        _preDestroy: function (a, b) {
        }
    });
    function camelCase(c) {
        return c.replace(/-([a-z])/g, function (a, b) {
            return b.toUpperCase()
        })
    }

    $.JQPlugin = {
        createPlugin: function (a, b) {
            if (typeof a === 'object') {
                b = a;
                a = 'JQPlugin'
            }
            a = camelCase(a);
            var c = camelCase(b.name);
            JQClass.classes[c] = JQClass.classes[a].extend(b);
            new JQClass.classes[c]()
        }
    }
})(jQuery);


/* http://keith-wood.name/countdown.html
 Countdown for jQuery v2.0.0.
 Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
 Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.
 Please attribute the author if you use it. */
(function ($) {
    var w = 'countdown';
    var Y = 0;
    var O = 1;
    var W = 2;
    var D = 3;
    var H = 4;
    var M = 5;
    var S = 6;
    $.JQPlugin.createPlugin({
        name: w,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: 'dHMS',
            layout: '',
            compact: false,
            padZeroes: false,
            significant: 0,
            description: '',
            expiryUrl: '',
            expiryText: '',
            alwaysExpire: false,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            '': {
                labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
                labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
                compactLabels: ['y', 'm', 'w', 'd'],
                whichLabels: null,
                digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                timeSeparator: ':',
                isRTL: false
            }
        },
        _getters: ['getTimes'],
        _rtlClass: w + '-rtl',
        _sectionClass: w + '-section',
        _amountClass: w + '-amount',
        _periodClass: w + '-period',
        _rowClass: w + '-row',
        _holdingClass: w + '-holding',
        _showClass: w + '-show',
        _descrClass: w + '-descr',
        _timerElems: [],
        _init: function () {
            var c = this;
            this._super();
            this._serverSyncs = [];
            var d = (typeof Date.now == 'function' ? Date.now : function () {
                return new Date().getTime()
            });
            var e = (window.performance && typeof window.performance.now == 'function');

            function timerCallBack(a) {
                var b = (a < 1e12 ? (e ? (performance.now() + performance.timing.navigationStart) : d()) : a || d());
                if (b - g >= 1000) {
                    c._updateElems();
                    g = b
                }
                f(timerCallBack)
            }

            var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
            var g = 0;
            if (!f || $.noRequestAnimationFrame) {
                $.noRequestAnimationFrame = null;
                setInterval(function () {
                    c._updateElems()
                }, 980)
            } else {
                g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d();
                f(timerCallBack)
            }
        },
        UTCDate: function (a, b, c, e, f, g, h, i) {
            if (typeof b == 'object' && b.constructor == Date) {
                i = b.getMilliseconds();
                h = b.getSeconds();
                g = b.getMinutes();
                f = b.getHours();
                e = b.getDate();
                c = b.getMonth();
                b = b.getFullYear()
            }
            var d = new Date();
            d.setUTCFullYear(b);
            d.setUTCDate(1);
            d.setUTCMonth(c || 0);
            d.setUTCDate(e || 1);
            d.setUTCHours(f || 0);
            d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
            d.setUTCSeconds(h || 0);
            d.setUTCMilliseconds(i || 0);
            return d
        },
        periodsToSeconds: function (a) {
            return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6]
        },
        _instSettings: function (a, b) {
            return {_periods: [0, 0, 0, 0, 0, 0, 0]}
        },
        _addElem: function (a) {
            if (!this._hasElem(a)) {
                this._timerElems.push(a)
            }
        },
        _hasElem: function (a) {
            return ($.inArray(a, this._timerElems) > -1)
        },
        _removeElem: function (b) {
            this._timerElems = $.map(this._timerElems, function (a) {
                return (a == b ? null : a)
            })
        },
        _updateElems: function () {
            for (var i = this._timerElems.length - 1; i >= 0; i--) {
                this._updateCountdown(this._timerElems[i])
            }
        },
        _optionsChanged: function (a, b, c) {
            if (c.layout) {
                c.layout = c.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            }
            this._resetExtraLabels(b.options, c);
            var d = (b.options.timezone != c.timezone);
            $.extend(b.options, c);
            this._adjustSettings(a, b, c.until != null || c.since != null || d);
            var e = new Date();
            if ((b._since && b._since < e) || (b._until && b._until > e)) {
                this._addElem(a[0])
            }
            this._updateCountdown(a, b)
        },
        _updateCountdown: function (a, b) {
            a = a.jquery ? a : $(a);
            b = b || a.data(this.name);
            if (!b) {
                return
            }
            a.html(this._generateHTML(b)).toggleClass(this._rtlClass, b.options.isRTL);
            if ($.isFunction(b.options.onTick)) {
                var c = b._hold != 'lap' ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date());
                if (b.options.tickInterval == 1 || this.periodsToSeconds(c) % b.options.tickInterval == 0) {
                    b.options.onTick.apply(a[0], [c])
                }
            }
            var d = b._hold != 'pause' && (b._since ? b._now.getTime() < b._since.getTime() : b._now.getTime() >= b._until.getTime());
            if (d && !b._expiring) {
                b._expiring = true;
                if (this._hasElem(a[0]) || b.options.alwaysExpire) {
                    this._removeElem(a[0]);
                    if ($.isFunction(b.options.onExpiry)) {
                        b.options.onExpiry.apply(a[0], [])
                    }
                    if (b.options.expiryText) {
                        var e = b.options.layout;
                        b.options.layout = b.options.expiryText;
                        this._updateCountdown(a[0], b);
                        b.options.layout = e
                    }
                    if (b.options.expiryUrl) {
                        window.location = b.options.expiryUrl
                    }
                }
                b._expiring = false
            } else if (b._hold == 'pause') {
                this._removeElem(a[0])
            }
        },
        _resetExtraLabels: function (a, b) {
            var c = false;
            for (var n in b) {
                if (n != 'whichLabels' && n.match(/[Ll]abels/)) {
                    c = true;
                    break
                }
            }
            if (c) {
                for (var n in a) {
                    if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
                        a[n] = null
                    }
                }
            }
        },
        _adjustSettings: function (a, b, c) {
            var d;
            var e = 0;
            var f = null;
            for (var i = 0; i < this._serverSyncs.length; i++) {
                if (this._serverSyncs[i][0] == b.options.serverSync) {
                    f = this._serverSyncs[i][1];
                    break
                }
            }
            if (f != null) {
                e = (b.options.serverSync ? f : 0);
                d = new Date()
            } else {
                var g = ($.isFunction(b.options.serverSync) ? b.options.serverSync.apply(a[0], []) : null);
                d = new Date();
                e = (g ? d.getTime() - g.getTime() : 0);
                this._serverSyncs.push([b.options.serverSync, e])
            }
            var h = b.options.timezone;
            h = (h == null ? -d.getTimezoneOffset() : h);
            if (c || (!c && b._until == null && b._since == null)) {
                b._since = b.options.since;
                if (b._since != null) {
                    b._since = this.UTCDate(h, this._determineTime(b._since, null));
                    if (b._since && e) {
                        b._since.setMilliseconds(b._since.getMilliseconds() + e)
                    }
                }
                b._until = this.UTCDate(h, this._determineTime(b.options.until, d));
                if (e) {
                    b._until.setMilliseconds(b._until.getMilliseconds() + e)
                }
            }
            b._show = this._determineShow(b)
        },
        _preDestroy: function (a, b) {
            this._removeElem(a[0]);
            a.empty()
        },
        pause: function (a) {
            this._hold(a, 'pause')
        },
        lap: function (a) {
            this._hold(a, 'lap')
        },
        resume: function (a) {
            this._hold(a, null)
        },
        toggle: function (a) {
            var b = $.data(a, this.name) || {};
            this[!b._hold ? 'pause' : 'resume'](a)
        },
        toggleLap: function (a) {
            var b = $.data(a, this.name) || {};
            this[!b._hold ? 'lap' : 'resume'](a)
        },
        _hold: function (a, b) {
            var c = $.data(a, this.name);
            if (c) {
                if (c._hold == 'pause' && !b) {
                    c._periods = c._savePeriods;
                    var d = (c._since ? '-' : '+');
                    c[c._since ? '_since' : '_until'] = this._determineTime(d + c._periods[0] + 'y' + d + c._periods[1] + 'o' + d + c._periods[2] + 'w' + d + c._periods[3] + 'd' + d + c._periods[4] + 'h' + d + c._periods[5] + 'm' + d + c._periods[6] + 's');
                    this._addElem(a)
                }
                c._hold = b;
                c._savePeriods = (b == 'pause' ? c._periods : null);
                $.data(a, this.name, c);
                this._updateCountdown(a, c)
            }
        },
        getTimes: function (a) {
            var b = $.data(a, this.name);
            return (!b ? null : (b._hold == 'pause' ? b._savePeriods : (!b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date()))))
        },
        _determineTime: function (k, l) {
            var m = this;
            var n = function (a) {
                var b = new Date();
                b.setTime(b.getTime() + a * 1000);
                return b
            };
            var o = function (a) {
                a = a.toLowerCase();
                var b = new Date();
                var c = b.getFullYear();
                var d = b.getMonth();
                var e = b.getDate();
                var f = b.getHours();
                var g = b.getMinutes();
                var h = b.getSeconds();
                var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
                var j = i.exec(a);
                while (j) {
                    switch (j[2] || 's') {
                        case's':
                            h += parseInt(j[1], 10);
                            break;
                        case'm':
                            g += parseInt(j[1], 10);
                            break;
                        case'h':
                            f += parseInt(j[1], 10);
                            break;
                        case'd':
                            e += parseInt(j[1], 10);
                            break;
                        case'w':
                            e += parseInt(j[1], 10) * 7;
                            break;
                        case'o':
                            d += parseInt(j[1], 10);
                            e = Math.min(e, m._getDaysInMonth(c, d));
                            break;
                        case'y':
                            c += parseInt(j[1], 10);
                            e = Math.min(e, m._getDaysInMonth(c, d));
                            break
                    }
                    j = i.exec(a)
                }
                return new Date(c, d, e, f, g, h, 0)
            };
            var p = (k == null ? l : (typeof k == 'string' ? o(k) : (typeof k == 'number' ? n(k) : k)));
            if (p)p.setMilliseconds(0);
            return p
        },
        _getDaysInMonth: function (a, b) {
            return 32 - new Date(a, b, 32).getDate()
        },
        _normalLabels: function (a) {
            return a
        },
        _generateHTML: function (c) {
            var d = this;
            c._periods = (c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date()));
            var e = false;
            var f = 0;
            var g = c.options.significant;
            var h = $.extend({}, c._show);
            for (var i = Y; i <= S; i++) {
                e |= (c._show[i] == '?' && c._periods[i] > 0);
                h[i] = (c._show[i] == '?' && !e ? null : c._show[i]);
                f += (h[i] ? 1 : 0);
                g -= (c._periods[i] > 0 ? 1 : 0)
            }
            var j = [false, false, false, false, false, false, false];
            for (var i = S; i >= Y; i--) {
                if (c._show[i]) {
                    if (c._periods[i]) {
                        j[i] = true
                    } else {
                        j[i] = g > 0;
                        g--
                    }
                }
            }
            var k = (c.options.compact ? c.options.compactLabels : c.options.labels);
            var l = c.options.whichLabels || this._normalLabels;
            var m = function (a) {
                var b = c.options['compactLabels' + l(c._periods[a])];
                return (h[a] ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + ' ' : '')
            };
            var n = (c.options.padZeroes ? 2 : 1);
            var o = function (a) {
                var b = c.options['labels' + l(c._periods[a])];
                return ((!c.options.significant && h[a]) || (c.options.significant && j[a]) ? '<span class="' + d._sectionClass + '">' + '<span class="' + d._amountClass + '">' + d._minDigits(c, c._periods[a], n) + '</span>' + '<span class="' + d._periodClass + '">' + (b ? b[a] : k[a]) + '</span></span>' : '')
            };
            return (c.options.layout ? this._buildLayout(c, h, c.options.layout, c.options.compact, c.options.significant, j) : ((c.options.compact ? '<span class="' + this._rowClass + ' ' + this._amountClass + (c._hold ? ' ' + this._holdingClass : '') + '">' + m(Y) + m(O) + m(W) + m(D) + (h[H] ? this._minDigits(c, c._periods[H], 2) : '') + (h[M] ? (h[H] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[M], 2) : '') + (h[S] ? (h[H] || h[M] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[S], 2) : '') : '<span class="' + this._rowClass + ' ' + this._showClass + (c.options.significant || f) + (c._hold ? ' ' + this._holdingClass : '') + '">' + o(Y) + o(O) + o(W) + o(D) + o(H) + o(M) + o(S)) + '</span>' + (c.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' + c.options.description + '</span>' : '')))
        },
        _buildLayout: function (c, d, e, f, g, h) {
            var j = c.options[f ? 'compactLabels' : 'labels'];
            var k = c.options.whichLabels || this._normalLabels;
            var l = function (a) {
                return (c.options[(f ? 'compactLabels' : 'labels') + k(c._periods[a])] || j)[a]
            };
            var m = function (a, b) {
                return c.options.digits[Math.floor(a / b) % 10]
            };
            var o = {
                desc: c.options.description,
                sep: c.options.timeSeparator,
                yl: l(Y),
                yn: this._minDigits(c, c._periods[Y], 1),
                ynn: this._minDigits(c, c._periods[Y], 2),
                ynnn: this._minDigits(c, c._periods[Y], 3),
                y1: m(c._periods[Y], 1),
                y10: m(c._periods[Y], 10),
                y100: m(c._periods[Y], 100),
                y1000: m(c._periods[Y], 1000),
                ol: l(O),
                on: this._minDigits(c, c._periods[O], 1),
                onn: this._minDigits(c, c._periods[O], 2),
                onnn: this._minDigits(c, c._periods[O], 3),
                o1: m(c._periods[O], 1),
                o10: m(c._periods[O], 10),
                o100: m(c._periods[O], 100),
                o1000: m(c._periods[O], 1000),
                wl: l(W),
                wn: this._minDigits(c, c._periods[W], 1),
                wnn: this._minDigits(c, c._periods[W], 2),
                wnnn: this._minDigits(c, c._periods[W], 3),
                w1: m(c._periods[W], 1),
                w10: m(c._periods[W], 10),
                w100: m(c._periods[W], 100),
                w1000: m(c._periods[W], 1000),
                dl: l(D),
                dn: this._minDigits(c, c._periods[D], 1),
                dnn: this._minDigits(c, c._periods[D], 2),
                dnnn: this._minDigits(c, c._periods[D], 3),
                d1: m(c._periods[D], 1),
                d10: m(c._periods[D], 10),
                d100: m(c._periods[D], 100),
                d1000: m(c._periods[D], 1000),
                hl: l(H),
                hn: this._minDigits(c, c._periods[H], 1),
                hnn: this._minDigits(c, c._periods[H], 2),
                hnnn: this._minDigits(c, c._periods[H], 3),
                h1: m(c._periods[H], 1),
                h10: m(c._periods[H], 10),
                h100: m(c._periods[H], 100),
                h1000: m(c._periods[H], 1000),
                ml: l(M),
                mn: this._minDigits(c, c._periods[M], 1),
                mnn: this._minDigits(c, c._periods[M], 2),
                mnnn: this._minDigits(c, c._periods[M], 3),
                m1: m(c._periods[M], 1),
                m10: m(c._periods[M], 10),
                m100: m(c._periods[M], 100),
                m1000: m(c._periods[M], 1000),
                sl: l(S),
                sn: this._minDigits(c, c._periods[S], 1),
                snn: this._minDigits(c, c._periods[S], 2),
                snnn: this._minDigits(c, c._periods[S], 3),
                s1: m(c._periods[S], 1),
                s10: m(c._periods[S], 10),
                s100: m(c._periods[S], 100),
                s1000: m(c._periods[S], 1000)
            };
            var p = e;
            for (var i = Y; i <= S; i++) {
                var q = 'yowdhms'.charAt(i);
                var r = new RegExp('\\{' + q + '<\\}([\\s\\S]*)\\{' + q + '>\\}', 'g');
                p = p.replace(r, ((!g && d[i]) || (g && h[i]) ? '$1' : ''))
            }
            $.each(o, function (n, v) {
                var a = new RegExp('\\{' + n + '\\}', 'g');
                p = p.replace(a, v)
            });
            return p
        },
        _minDigits: function (a, b, c) {
            b = '' + b;
            if (b.length >= c) {
                return this._translateDigits(a, b)
            }
            b = '0000000000' + b;
            return this._translateDigits(a, b.substr(b.length - c))
        },
        _translateDigits: function (b, c) {
            return ('' + c).replace(/[0-9]/g, function (a) {
                return b.options.digits[a]
            })
        },
        _determineShow: function (a) {
            var b = a.options.format;
            var c = [];
            c[Y] = (b.match('y') ? '?' : (b.match('Y') ? '!' : null));
            c[O] = (b.match('o') ? '?' : (b.match('O') ? '!' : null));
            c[W] = (b.match('w') ? '?' : (b.match('W') ? '!' : null));
            c[D] = (b.match('d') ? '?' : (b.match('D') ? '!' : null));
            c[H] = (b.match('h') ? '?' : (b.match('H') ? '!' : null));
            c[M] = (b.match('m') ? '?' : (b.match('M') ? '!' : null));
            c[S] = (b.match('s') ? '?' : (b.match('S') ? '!' : null));
            return c
        },
        _calculatePeriods: function (c, d, e, f) {
            c._now = f;
            c._now.setMilliseconds(0);
            var g = new Date(c._now.getTime());
            if (c._since) {
                if (f.getTime() < c._since.getTime()) {
                    c._now = f = g
                } else {
                    f = c._since
                }
            } else {
                g.setTime(c._until.getTime());
                if (f.getTime() > c._until.getTime()) {
                    c._now = f = g
                }
            }
            var h = [0, 0, 0, 0, 0, 0, 0];
            if (d[Y] || d[O]) {
                var i = this._getDaysInMonth(f.getFullYear(), f.getMonth());
                var j = this._getDaysInMonth(g.getFullYear(), g.getMonth());
                var k = (g.getDate() == f.getDate() || (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j)));
                var l = function (a) {
                    return (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds()
                };
                var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 + g.getMonth() - f.getMonth() + ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0));
                h[Y] = (d[Y] ? Math.floor(m / 12) : 0);
                h[O] = (d[O] ? m - h[Y] * 12 : 0);
                f = new Date(f.getTime());
                var n = (f.getDate() == i);
                var o = this._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
                if (f.getDate() > o) {
                    f.setDate(o)
                }
                f.setFullYear(f.getFullYear() + h[Y]);
                f.setMonth(f.getMonth() + h[O]);
                if (n) {
                    f.setDate(o)
                }
            }
            var p = Math.floor((g.getTime() - f.getTime()) / 1000);
            var q = function (a, b) {
                h[a] = (d[a] ? Math.floor(p / b) : 0);
                p -= h[a] * b
            };
            q(W, 604800);
            q(D, 86400);
            q(H, 3600);
            q(M, 60);
            q(S, 1);
            if (p > 0 && !c._since) {
                var r = [1, 12, 4.3482, 7, 24, 60, 60];
                var s = S;
                var t = 1;
                for (var u = S; u >= Y; u--) {
                    if (d[u]) {
                        if (h[s] >= t) {
                            h[s] = 0;
                            p = 1
                        }
                        if (p > 0) {
                            h[u]++;
                            p = 0;
                            s = u;
                            t = 1
                        }
                    }
                    t *= r[u]
                }
            }
            if (e) {
                for (var u = Y; u <= S; u++) {
                    if (e && h[u]) {
                        e--
                    } else if (!e) {
                        h[u] = 0
                    }
                }
            }
            return h
        }
    })
})(jQuery);


/* https://github.com/mhuggins/jquery-countTo
 CountTo */
(function (e) {
    function t(e, t) {
        return e.toFixed(t.decimals)
    }

    e.fn.countTo = function (t) {
        t = t || {};
        return e(this).each(function () {
            function l() {
                a += i;
                u++;
                c(a);
                if (typeof n.onUpdate == "function") {
                    n.onUpdate.call(s, a)
                }
                if (u >= r) {
                    o.removeData("countTo");
                    clearInterval(f.interval);
                    a = n.to;
                    if (typeof n.onComplete == "function") {
                        n.onComplete.call(s, a)
                    }
                }
            }

            function c(e) {
                var t = n.formatter.call(s, e, n);
                o.text(t)
            }

            var n = e.extend({}, e.fn.countTo.defaults, {
                from: e(this).data("from"),
                to: e(this).data("to"),
                speed: e(this).data("speed"),
                refreshInterval: e(this).data("refresh-interval"),
                decimals: e(this).data("decimals")
            }, t);
            var r = Math.ceil(n.speed / n.refreshInterval), i = (n.to - n.from) / r;
            var s = this, o = e(this), u = 0, a = n.from, f = o.data("countTo") || {};
            o.data("countTo", f);
            if (f.interval) {
                clearInterval(f.interval)
            }
            f.interval = setInterval(l, n.refreshInterval);
            c(a)
        })
    };
    e.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: t,
        onUpdate: null,
        onComplete: null
    }
})(jQuery);


/* Own Carousel 2.0.0.beta.2.4 */
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function (b, c) {
            this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d)return {x: a.touches[0].pageX, y: a.touches[0].pageY};
        if (a.touches === d) {
            if (a.pageX !== d)return {x: a.pageX, y: a.pageY};
            if (a.pageX === d)return {x: a.clientX, y: a.clientY}
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"), f = a;
        for (b in f)if (d = f[b], "undefined" != typeof e.style[d])return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart"in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }

    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1}, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var a = this._clones, b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var a, b, c = this._clones, d = this._items, e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++)e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var a, b, c, d = this.settings.rtl ? 1 : -1, e = (this.width() / this.settings.items).toFixed(3), f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++)a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var b, c, d = (this.width() / this.settings.items).toFixed(3), e = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            if (this.$stage.css(e), e = {width: this.settings.autoWidth ? "auto" : d - this.settings.margin}, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function (a) {
                    return a > 1
                }).length > 0)for (b = 0, c = this._coordinates.length; c > b; b++)e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e); else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++)a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function () {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e)return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function () {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function (a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function (a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", {content: b});
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a]
        }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function () {
        if (0 === this._items.length)return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function () {
        this.e._onDragStart = a.proxy(function (a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function (a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function (a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function (a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function (a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function (a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function () {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function (a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function () {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function (a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function () {
            return !1
        }), this.$stage.get(0).onselectstart = function () {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function (a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function (d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch)return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d)i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0; else if (this.state.inMotion && !this.support3d)return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function (a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function (a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function (b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0)return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function (c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function () {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function () {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function (b) {
        var c = -1, d = 30, e = this.width(), f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function (a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function (b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({left: b + "px"}) : this.$stage.animate({left: b}, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function () {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function (a) {
        if (a === d)return this._current;
        if (0 === this._items.length)return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {property: {name: "position", value: a}});
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function (a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function (b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function (a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function (a) {
        var b, c, d, e = 0, f = this.settings;
        if (a)return this._items.length - 1;
        if (!f.loop && f.center)b = this._items.length - 1; else if (f.loop || f.center)if (f.loop || f.center)b = this._items.length + f.items; else {
            if (!f.autoWidth && !f.merge)throw"Can not detect maximum absolute position.";
            for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c);)b = ++e
        } else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function (a, b) {
            return f(b)
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function (b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function (a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function (c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()), f = this.current(), g = this.current(), h = this.current() + e, i = 0 > g - h ? !0 : !1, j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function () {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function (a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function () {
        var d;
        if (this.options.responsiveBaseElement !== b)d = a(this.options.responsiveBaseElement).width(); else if (b.innerWidth)d = b.innerWidth; else {
            if (!c.documentElement || !c.documentElement.clientWidth)throw"Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function (a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function () {
        var b = a.proxy(function (b, c) {
            return a.proxy(function (a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function (a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function () {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }

        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function (b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function (g, h) {
            e = a(h), f = new Image, f.onload = function () {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function () {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins)this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {
        }, this.$stage.off("dragstart", function () {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case"<":
                return d ? a > c : c > a;
            case">":
                return d ? c > a : a > c;
            case">=":
                return d ? c >= a : a >= c;
            case"<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function (b, c, d) {
        var e = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }, f = a.camelCase(a.grep(["on", b, d], function (a) {
            return a
        }).join("-").toLowerCase()), g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, e, c));
        return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function () {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function (b) {
        return this.each(function () {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b) {
    var c = function (b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function (a, b) {
                    this.load(b)
                }, this); e++ < d;)this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {lazyLoad: !1}, c.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
                f.css({"background-image": "url(" + g + ")", opacity: "1"}), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers)this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document), function (a) {
    var b = function (c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function () {
                this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, b.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers)this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document), function (a, b, c) {
    var d = function (b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function (a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
                this._playing && this.stop()
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, d.prototype.fetch = function (a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube", d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
        if (!g)throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1)c = "youtube"; else {
            if (!(d[3].indexOf("vimeo") > -1))throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function (b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
        };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function (b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement), f = e.closest("." + this._core.settings.itemClass), g = this._videos[f.attr("data-video")], h = g.width || "100%", i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function () {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                this.swapping = "translated" == a.type
            }, this), "translate.owl.carousel": a.proxy(function () {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers)this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c) {
    var d = function (b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
                this.autoplay()
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                this.play(b, c)
            }, this), "stop.owl.autoplay": a.proxy(function () {
                this.stop()
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function () {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function () {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function () {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function () {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers)this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this))"function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document), function (a) {
    "use strict";
    var b = function (c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function (b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "add.owl.carousel": a.proxy(function (b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this), "change.owl.carousel": a.proxy(function (a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(), c = this._core.maximum(), d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && this.draw()
            }, this), "refreshed.owl.carousel": a.proxy(function () {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function () {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function (b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function () {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function () {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides)this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers)this.$element.off(a, this._handlers[a]);
        for (b in this._controls)this._controls[b].remove();
        for (d in this.overides)this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))"function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function () {
        var a, b, c, d = this._core.settings, e = this._core.clones().length / 2, f = e + this._core.items().length, g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
            start: a - e,
            end: a - e + g - 1
        }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function () {
        var b, c, d = "", e = this._core.settings, f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++)d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function (a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function (b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function (b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document), function (a, b) {
    "use strict";
    var c = function (d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function () {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function () {
            var a = b.location.hash.substring(1), c = this._core.$stage.children(), d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {URLhashListener: !1}, c.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))"function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);


/*! Morphext - v2.3.2 - 2014-10-10 */
!function (a) {
    "use strict";
    function b(b, c) {
        this.element = a(b), this.settings = a.extend({}, d, c), this._defaults = d, this._init()
    }

    var c = "Morphext", d = {animation: "bounceIn", separator: ",", speed: 2e3, complete: a.noop};
    b.prototype = {
        _init: function () {
            var b = this;
            this.phrases = [], a.each(this.element.text().split(this.settings.separator), function (a, c) {
                b.phrases.push(c.trim())
            }), this.index = -1, this.animate(), this.start()
        }, animate: function () {
            this.index + 1 === this.phrases.length && (this.index = -1), ++this.index, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", a.isFunction(this.settings.complete) && this.settings.complete.call(this)
        }, start: function () {
            var a = this;
            this._interval = setInterval(function () {
                a.animate()
            }, this.settings.speed)
        }, stop: function () {
            this._interval = clearInterval(this._interval)
        }
    }, a.fn[c] = function (d) {
        return this.each(function () {
            a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d))
        })
    }
}(jQuery);


/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function (t) {
    function e() {
    }

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function n(e, i) {
            t.fn[e] = function (n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a], h = t.data(p, e);
                        if (h)if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                            var f = h[n].apply(h, s);
                            if (void 0 !== f)return f
                        } else r("no such method '" + n + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }

        if (t) {
            var r = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), n(t, e)
            }, t.bridget
        }
    }

    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
})(window), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, o = function () {
    };
    i.addEventListener ? o = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (o = function (t, i, o) {
        t[i + o] = o.handleEvent ? function () {
            var i = e(t);
            o.handleEvent.call(o, i)
        } : function () {
            var i = e(t);
            o.call(t, i)
        }, t.attachEvent("on" + i, t[i + o])
    });
    var n = function () {
    };
    i.removeEventListener ? n = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (n = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = {bind: o, unbind: n};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== n.readyState;
        if (!e.isReady && !i) {
            e.isReady = !0;
            for (var o = 0, s = r.length; s > o; o++) {
                var a = r[o];
                a()
            }
        }
    }

    function o(o) {
        return o.bind(n, "DOMContentLoaded", i), o.bind(n, "readystatechange", i), o.bind(t, "load", i), e
    }

    var n = t.document, r = [];
    e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
}(this), function () {
    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;)if (t[i].listener === e)return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var o = t.prototype, n = this, r = n.EventEmitter;
    o.getListeners = function (t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o)o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else e = o[t] || (o[t] = []);
        return e
    }, o.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1)i.push(t[e].listener);
        return i
    }, o.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, o.addListener = function (t, i) {
        var o, n = this.getListenersAsObject(t), r = "object" == typeof i;
        for (o in n)n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {listener: i, once: !1});
        return this
    }, o.on = i("addListener"), o.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, o.once = i("addOnceListener"), o.defineEvent = function (t) {
        return this.getListeners(t), this
    }, o.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1)this.defineEvent(t[e]);
        return this
    }, o.removeListener = function (t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r)r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
        return this
    }, o.off = i("removeListener"), o.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, o.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, o.manipulateListeners = function (t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)for (o = i.length; o--;)r.call(this, e, i[o]); else for (o in e)e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }, o.removeEvent = function (t) {
        var e, i = typeof t, o = this._getEvents();
        if ("string" === i)delete o[t]; else if (t instanceof RegExp)for (e in o)o.hasOwnProperty(e) && t.test(e) && delete o[e]; else delete this._events;
        return this
    }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function (t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s)if (s.hasOwnProperty(n))for (o = s[n].length; o--;)i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, o.trigger = i("emitEvent"), o.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, o.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, o._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, o._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return n.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof o[t])return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, n = 0, r = i.length; r > n; n++)if (e = i[n] + t, "string" == typeof o[e])return e
        }
    }

    var i = "Webkit Moz ms Ms O".split(" "), o = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t) {
    function e(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, i = s.length; i > e; e++) {
            var o = s[e];
            t[o] = 0
        }
        return t
    }

    function o(t) {
        function o(t) {
            if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var o = r(t);
                if ("none" === o.display)return i();
                var n = {};
                n.width = t.offsetWidth, n.height = t.offsetHeight;
                for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, c = s.length; c > f; f++) {
                    var d = s[f], l = o[d];
                    l = a(t, l);
                    var y = parseFloat(l);
                    n[d] = isNaN(y) ? 0 : y
                }
                var m = n.paddingLeft + n.paddingRight, g = n.paddingTop + n.paddingBottom, v = n.marginLeft + n.marginRight, _ = n.marginTop + n.marginBottom, I = n.borderLeftWidth + n.borderRightWidth, L = n.borderTopWidth + n.borderBottomWidth, z = h && u, S = e(o.width);
                S !== !1 && (n.width = S + (z ? 0 : m + I));
                var b = e(o.height);
                return b !== !1 && (n.height = b + (z ? 0 : g + L)), n.innerWidth = n.width - (m + I), n.innerHeight = n.height - (g + L), n.outerWidth = n.width + v, n.outerHeight = n.height + _, n
            }
        }

        function a(t, e) {
            if (n || -1 === e.indexOf("%"))return e;
            var i = t.style, o = i.left, r = t.runtimeStyle, s = r && r.left;
            return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = o, s && (r.left = s), e
        }

        var u, p = t("boxSizing");
        return function () {
            if (p) {
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[p] = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(t);
                var o = r(t);
                u = 200 === e(o.width), i.removeChild(t)
            }
        }(), o
    }

    var n = t.getComputedStyle, r = n ? function (t) {
        return n(t, null)
    } : function (t) {
        return t.currentStyle
    }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window), function (t, e) {
    function i(t, e) {
        return t[a](e)
    }

    function o(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }

    function n(t, e) {
        o(t);
        for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)if (i[n] === t)return !0;
        return !1
    }

    function r(t, e) {
        return o(t), i(t, e)
    }

    var s, a = function () {
        if (e.matchesSelector)return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
            var n = t[i], r = n + "MatchesSelector";
            if (e[r])return r
        }
    }();
    if (a) {
        var u = document.createElement("div"), p = i(u, "div");
        s = p ? i : r
    } else s = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return s
    }) : window.matchesSelector = s
}(this, Element.prototype), function (t) {
    function e(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }

    function i(t) {
        for (var e in t)return !1;
        return e = null, !0
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    function n(t, n, r) {
        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
        }

        var u = r("transition"), p = r("transform"), h = u && p, f = !!r("perspective"), c = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[u], d = ["transform", "transition", "transitionDuration", "transitionProperty"], l = function () {
            for (var t = {}, e = 0, i = d.length; i > e; e++) {
                var o = d[e], n = r(o);
                n && n !== o && (t[o] = n)
            }
            return t
        }();
        e(a.prototype, t.prototype), a.prototype._create = function () {
            this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
        }, a.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.getSize = function () {
            this.size = n(this.element)
        }, a.prototype.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                var o = l[i] || i;
                e[o] = t[i]
            }
        }, a.prototype.getPosition = function () {
            var t = s(this.element), e = this.layout.options, i = e.isOriginLeft, o = e.isOriginTop, n = parseInt(t[i ? "left" : "right"], 10), r = parseInt(t[o ? "top" : "bottom"], 10);
            n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
            var a = this.layout.size;
            n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
        }, a.prototype.layoutPosition = function () {
            var t = this.layout.size, e = this.layout.options, i = {};
            e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
        };
        var y = f ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function (t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        a.prototype._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x, o = this.position.y, n = parseInt(t, 10), r = parseInt(e, 10), s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning)return this.layoutPosition(), void 0;
            var a = t - i, u = e - o, p = {}, h = this.layout.options;
            a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
                to: p,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        }, a.prototype.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, a.prototype._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)
        }, a.prototype._transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t), void 0;
            var e = this._transn;
            for (var i in t.onTransitionEnd)e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var m = p && o(p) + ",opacity";
        a.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: m,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(c, this, !1))
        }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, a.prototype.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var g = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
        a.prototype.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn, o = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, a.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1
        }, a.prototype._removeStyles = function (t) {
            var e = {};
            for (var i in t)e[i] = "";
            this.css(e)
        };
        var v = {transitionProperty: "", transitionDuration: ""};
        return a.prototype.removeTransitionStyles = function () {
            this.css(v)
        }, a.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, a.prototype.remove = function () {
            if (!u || !parseFloat(this.layout.options.transitionDuration))return this.removeElem(), void 0;
            var t = this;
            this.on("transitionEnd", function () {
                return t.removeElem(), !0
            }), this.hide()
        }, a.prototype.reveal = function () {
            delete this.isHidden, this.css({display: ""});
            var t = this.layout.options;
            this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0})
        }, a.prototype.hide = function () {
            this.isHidden = !0, this.css({display: ""});
            var t = this.layout.options;
            this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function () {
                        this.isHidden && this.css({display: "none"})
                    }
                }
            })
        }, a.prototype.destroy = function () {
            this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
        }, a
    }

    var r = t.getComputedStyle, s = r ? function (t) {
        return r(t, null)
    } : function (t) {
        return t.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function (t) {
    function e(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }

    function i(t) {
        return "[object Array]" === f.call(t)
    }

    function o(t) {
        var e = [];
        if (i(t))e = t; else if (t && "number" == typeof t.length)for (var o = 0, n = t.length; n > o; o++)e.push(t[o]); else e.push(t);
        return e
    }

    function n(t, e) {
        var i = d(e, t);
        -1 !== i && e.splice(i, 1)
    }

    function r(t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }

    function s(i, s, f, d, l, y) {
        function m(t, i) {
            if ("string" == typeof t && (t = a.querySelector(t)), !t || !c(t))return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
            this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
            var o = ++g;
            this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
        }

        var g = 0, v = {};
        return m.namespace = "outlayer", m.Item = y, m.defaults = {
            containerStyle: {position: "relative"},
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
            visibleStyle: {opacity: 1, transform: "scale(1)"}
        }, e(m.prototype, f.prototype), m.prototype.option = function (t) {
            e(this.options, t)
        }, m.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, m.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, m.prototype._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                var s = e[n], a = new i(s, this);
                o.push(a)
            }
            return o
        }, m.prototype._filterFindItemElements = function (t) {
            t = o(t);
            for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                var s = t[n];
                if (c(s))if (e) {
                    l(s, e) && i.push(s);
                    for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++)i.push(a[u])
                } else i.push(s)
            }
            return i
        }, m.prototype.getItemElements = function () {
            for (var t = [], e = 0, i = this.items.length; i > e; e++)t.push(this.items[e].element);
            return t
        }, m.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function () {
            this.getSize()
        }, m.prototype.getSize = function () {
            this.size = d(this.element)
        }, m.prototype._getMeasurement = function (t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : c(o) && (i = o), this[t] = i ? d(i)[e] : o) : this[t] = 0
        }, m.prototype.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, m.prototype._getItemsForLayout = function (t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }, m.prototype._layoutItems = function (t, e) {
            function i() {
                o.emitEvent("layoutComplete", [o, t])
            }

            var o = this;
            if (!t || !t.length)return i(), void 0;
            this._itemsOn(t, "layout", i);
            for (var n = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r], u = this._getItemLayoutPosition(a);
                u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
            }
            this._processLayoutQueue(n)
        }, m.prototype._getItemLayoutPosition = function () {
            return {x: 0, y: 0}
        }, m.prototype._processLayoutQueue = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }, m.prototype._positionItem = function (t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }, m.prototype._postLayout = function () {
            this.resizeContainer()
        }, m.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, m.prototype._itemsOn = function (t, e, i) {
            function o() {
                return n++, n === r && i.call(s), !0
            }

            for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                p.on(e, o)
            }
        }, m.prototype.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, m.prototype.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, m.prototype.stamp = function (t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }, m.prototype.unstamp = function (t) {
            if (t = this._find(t))for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                n(o, this.stamps), this.unignore(o)
            }
        }, m.prototype._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
        }, m.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, m.prototype._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(), e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(), i = this._boundingRect, o = d(t), n = {
                left: e.left - i.left - o.marginLeft,
                top: e.top - i.top - o.marginTop,
                right: i.right - e.right - o.marginRight,
                bottom: i.bottom - e.bottom - o.marginBottom
            };
            return n
        }, m.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, m.prototype.bindResize = function () {
            this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
        }, m.prototype.unbindResize = function () {
            this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
        }, m.prototype.onresize = function () {
            function t() {
                e.resize(), delete e.resizeTimeout
            }

            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, m.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, m.prototype.needsResizeLayout = function () {
            var t = d(this.element), e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, m.prototype.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, m.prototype.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, m.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, m.prototype.reveal = function (t) {
            var e = t && t.length;
            if (e)for (var i = 0; e > i; i++) {
                var o = t[i];
                o.reveal()
            }
        }, m.prototype.hide = function (t) {
            var e = t && t.length;
            if (e)for (var i = 0; e > i; i++) {
                var o = t[i];
                o.hide()
            }
        }, m.prototype.getItem = function (t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                if (o.element === t)return o
            }
        }, m.prototype.getItems = function (t) {
            if (t && t.length) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i], r = this.getItem(n);
                    r && e.push(r)
                }
                return e
            }
        }, m.prototype.remove = function (t) {
            t = o(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function () {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    s.remove(), n(s, this.items)
                }
            }
        }, m.prototype.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                o.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
        }, m.data = function (t) {
            var e = t && t.outlayerGUID;
            return e && v[e]
        }, m.create = function (t, i) {
            function o() {
                m.apply(this, arguments)
            }

            return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function () {
                y.apply(this, arguments)
            }, o.Item.prototype = new y, s(function () {
                for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                    var f, c = i[s], d = c.getAttribute(n);
                    try {
                        f = d && JSON.parse(d)
                    } catch (l) {
                        u && u.error("Error parsing " + n + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
                        continue
                    }
                    var y = new o(c, f);
                    p && p.data(c, t, y)
                }
            }), p && p.bridget && p.bridget(t, o), o
        }, m.Item = y, m
    }

    var a = t.document, u = t.console, p = t.jQuery, h = function () {
    }, f = Object.prototype.toString, c = "object" == typeof HTMLElement ? function (t) {
        return t instanceof HTMLElement
    } : function (t) {
        return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
    }, d = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, o = t.length; o > i; i++)if (t[i] === e)return i;
        return -1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function (t) {
    function e(t) {
        function e() {
            t.Item.apply(this, arguments)
        }

        return e.prototype = new t.Item, e.prototype._create = function () {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData, e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        }, e
    }

    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window), function (t) {
    function e(t, e) {
        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }

        return function () {
            function t(t) {
                return function () {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }

            for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                var s = o[n];
                i.prototype[s] = t(s)
            }
        }(), i.prototype.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element), i = this.isotope.size && e;
            return i && e.innerHeight !== this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function (t, e) {
            var i = t + e, o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function (t, e) {
            function o() {
                i.apply(this, arguments)
            }

            return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window), function (t) {
    function e(t, e) {
        var o = t.create("masonry");
        return o.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;)this.colYs.push(0);
            this.maxY = 0
        }, o.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0], i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, o.prototype.getContainerWidth = function () {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
            this.containerWidth = i && i.innerWidth
        }, o.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth, o = e && 1 > e ? "round" : "ceil", n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
                x: this.columnWidth * a,
                y: s
            }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)this.colYs[a + f] = p;
            return u
        }, o.prototype._getColGroup = function (t) {
            if (2 > t)return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }, o.prototype._manageStamp = function (t) {
            var i = e(t), o = this._getElementOffset(t), n = this.options.isOriginLeft ? o.left : o.right, r = n + i.outerWidth, s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++)this.colYs[p] = Math.max(u, this.colYs[p])
        }, o.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {height: this.maxY};
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, o.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, o.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, o
    }

    var i = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            if (n === e)return i
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), function (t) {
    function e(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }

    function i(t, i) {
        var o = t.create("masonry"), n = o.prototype._getElementOffset, r = o.prototype.layout, s = o.prototype._getMeasurement;
        e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
        }, o
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
}(window), function (t) {
    function e(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0
        }, e.prototype._getItemLayoutPosition = function (t) {
            t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
            var e = {x: this.x, y: this.y};
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
        }, e.prototype._getContainerSize = function () {
            return {height: this.maxY}
        }, e
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function (t) {
    function e(t) {
        var e = t.create("vertical", {horizontalAlignment: 0});
        return e.prototype._resetLayout = function () {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
            return this.y += t.size.outerHeight, {x: e, y: i}
        }, e.prototype._getContainerSize = function () {
            return {height: this.y}
        }, e
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function (t) {
    function e(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }

    function i(t) {
        return "[object Array]" === h.call(t)
    }

    function o(t) {
        var e = [];
        if (i(t))e = t; else if (t && "number" == typeof t.length)for (var o = 0, n = t.length; n > o; o++)e.push(t[o]); else e.push(t);
        return e
    }

    function n(t, e) {
        var i = f(e, t);
        -1 !== i && e.splice(i, 1)
    }

    function r(t, i, r, u, h) {
        function f(t, e) {
            return function (i, o) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var s = t[n], a = i.sortData[s], u = o.sortData[s];
                    if (a > u || u > a) {
                        var p = void 0 !== e[s] ? e[s] : e, h = p ? 1 : -1;
                        return (a > u ? 1 : -1) * h
                    }
                }
                return 0
            }
        }

        var c = t.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
        c.Item = u, c.LayoutMode = h, c.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var e in h.modes)this._initLayoutMode(e)
        }, c.prototype.reloadItems = function () {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, c.prototype._itemize = function () {
            for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                var n = e[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        }, c.prototype._initLayoutMode = function (t) {
            var i = h.modes[t], o = this.options[t] || {};
            this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
        }, c.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
        }, c.prototype._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, c.prototype.arrange = function (t) {
            this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
        }, c.prototype._init = c.prototype.arrange, c.prototype._getIsInstant = function () {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, c.prototype._filter = function (t) {
            function e() {
                f.reveal(n), f.hide(r)
            }

            var i = this.options.filter;
            i = i || "*";
            for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                if (!p.isIgnored) {
                    var h = s(p);
                    h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
                }
            }
            var f = this;
            return this._isInstant ? this._noTransition(e) : e(), o
        }, c.prototype._getFilterTest = function (t) {
            return s && this.options.isJQueryFiltering ? function (e) {
                return s(e.element).is(t)
            } : "function" == typeof t ? function (e) {
                return t(e.element)
            } : function (e) {
                return r(e.element, t)
            }
        }, c.prototype.updateSortData = function (t) {
            this._getSorters(), t = o(t);
            var e = this.getItems(t);
            e = e.length ? e : this.items, this._updateItemsSortData(e)
        }, c.prototype._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = d(i)
            }
        }, c.prototype._updateItemsSortData = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                o.updateSortData()
            }
        };
        var d = function () {
            function t(t) {
                if ("string" != typeof t)return t;
                var i = a(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), r = n && n[1], s = e(r, o), u = c.sortDataParsers[i[1]];
                return t = u ? function (t) {
                    return t && u(s(t))
                } : function (t) {
                    return t && s(t)
                }
            }

            function e(t, e) {
                var i;
                return i = t ? function (e) {
                    return e.getAttribute(t)
                } : function (t) {
                    var i = t.querySelector(e);
                    return i && p(i)
                }
            }

            return t
        }();
        c.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            }, parseFloat: function (t) {
                return parseFloat(t)
            }
        }, c.prototype._sort = function () {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory), i = f(e, this.options.sortAscending);
                this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, c.prototype._mode = function () {
            var t = this.options.layoutMode, e = this.modes[t];
            if (!e)throw Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, c.prototype._resetLayout = function () {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, c.prototype._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t)
        }, c.prototype._manageStamp = function (t) {
            this._mode()._manageStamp(t)
        }, c.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, c.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, c.prototype.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, c.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps();
                var o = this._filterRevealAdded(e);
                this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
            }
        }, c.prototype._filterRevealAdded = function (t) {
            var e = this._noTransition(function () {
                return this._filter(t)
            });
            return this.layoutItems(e, !0), this.reveal(e), t
        }, c.prototype.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; n > i; i++)o = e[i], this.element.appendChild(o.element);
                var r = this._filter(e);
                for (this._noTransition(function () {
                    this.hide(r)
                }), i = 0; n > i; i++)e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; n > i; i++)delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var l = c.prototype.remove;
        return c.prototype.remove = function (t) {
            t = o(t);
            var e = this.getItems(t);
            if (l.call(this, t), e && e.length)for (var i = 0, r = e.length; r > i; i++) {
                var s = e[i];
                n(s, this.filteredItems)
            }
        }, c.prototype._noTransition = function (t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, c
    }

    var s = t.jQuery, a = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, u = document.documentElement, p = u.textContent ? function (t) {
        return t.textContent
    } : function (t) {
        return t.innerText
    }, h = Object.prototype.toString, f = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, o = t.length; o > i; i++)if (t[i] === e)return i;
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);


/*
 * Swiper 2.7.0
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: August 30, 2014
 */
var Swiper = function (a, b) {
    "use strict";
    function c(a, b) {
        return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b)
    }

    function d(a) {
        return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1
    }

    function e() {
        var a = F - I;
        return b.freeMode && (a = F - I), b.slidesPerView > C.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a
    }

    function f() {
        function a(a) {
            var c = new Image;
            c.onload = function () {
                "undefined" != typeof C && null !== C && (void 0 !== C.imagesLoaded && C.imagesLoaded++, C.imagesLoaded === C.imagesToLoad.length && (C.reInit(), b.onImagesReady && C.fireCallback(b.onImagesReady, C)))
            }, c.src = a
        }

        var d = C.h.addEventListener, e = "wrapper" === b.eventTarget ? C.wrapper : C.container;
        if (C.browser.ie10 || C.browser.ie11 ? (d(e, C.touchEvents.touchStart, p), d(document, C.touchEvents.touchMove, q), d(document, C.touchEvents.touchEnd, r)) : (C.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", C.resizeFix), g(), C._wheelEvent = !1, b.mousewheelControl) {
            if (void 0 !== document.onmousewheel && (C._wheelEvent = "mousewheel"), !C._wheelEvent)try {
                new WheelEvent("wheel"), C._wheelEvent = "wheel"
            } catch (f) {
            }
            C._wheelEvent || (C._wheelEvent = "DOMMouseScroll"), C._wheelEvent && d(C.container, C._wheelEvent, j)
        }
        if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
            C.imagesToLoad = c("img", C.container);
            for (var h = 0; h < C.imagesToLoad.length; h++)a(C.imagesToLoad[h].getAttribute("src"))
        }
    }

    function g() {
        var a, d = C.h.addEventListener;
        if (b.preventLinks) {
            var e = c("a", C.container);
            for (a = 0; a < e.length; a++)d(e[a], "click", n)
        }
        if (b.releaseFormElements) {
            var f = c("input, textarea, select", C.container);
            for (a = 0; a < f.length; a++)d(f[a], C.touchEvents.touchStart, o, !0)
        }
        if (b.onSlideClick)for (a = 0; a < C.slides.length; a++)d(C.slides[a], "click", k);
        if (b.onSlideTouch)for (a = 0; a < C.slides.length; a++)d(C.slides[a], C.touchEvents.touchStart, l)
    }

    function h() {
        var a, d = C.h.removeEventListener;
        if (b.onSlideClick)for (a = 0; a < C.slides.length; a++)d(C.slides[a], "click", k);
        if (b.onSlideTouch)for (a = 0; a < C.slides.length; a++)d(C.slides[a], C.touchEvents.touchStart, l);
        if (b.releaseFormElements) {
            var e = c("input, textarea, select", C.container);
            for (a = 0; a < e.length; a++)d(e[a], C.touchEvents.touchStart, o, !0)
        }
        if (b.preventLinks) {
            var f = c("a", C.container);
            for (a = 0; a < f.length; a++)d(f[a], "click", n)
        }
    }

    function i(a) {
        var b = a.keyCode || a.charCode;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
            if (37 === b || 39 === b || 38 === b || 40 === b) {
                for (var c = !1, d = C.h.getOffset(C.container), e = C.h.windowScroll().left, f = C.h.windowScroll().top, g = C.h.windowWidth(), h = C.h.windowHeight(), i = [[d.left, d.top], [d.left + C.width, d.top], [d.left, d.top + C.height], [d.left + C.width, d.top + C.height]], j = 0; j < i.length; j++) {
                    var k = i[j];
                    k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0)
                }
                if (!c)return
            }
            M ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && C.swipeNext(), 37 === b && C.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && C.swipeNext(), 38 === b && C.swipePrev())
        }
    }

    function j(a) {
        var c = C._wheelEvent, d = 0;
        if (a.detail)d = -a.detail; else if ("mousewheel" === c)if (b.mousewheelControlForceToAxis)if (M) {
            if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY)))return;
            d = a.wheelDeltaX
        } else {
            if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX)))return;
            d = a.wheelDeltaY
        } else d = a.wheelDelta; else if ("DOMMouseScroll" === c)d = -a.detail; else if ("wheel" === c)if (b.mousewheelControlForceToAxis)if (M) {
            if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY)))return;
            d = -a.deltaX
        } else {
            if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX)))return;
            d = -a.deltaY
        } else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
        if (b.freeMode) {
            var f = C.getWrapperTranslate() + d;
            if (f > 0 && (f = 0), f < -e() && (f = -e()), C.setWrapperTransition(0), C.setWrapperTranslate(f), C.updateActiveSlide(f), 0 === f || f === -e())return
        } else(new Date).getTime() - U > 60 && (0 > d ? C.swipeNext() : C.swipePrev()), U = (new Date).getTime();
        return b.autoplay && C.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
    }

    function k(a) {
        C.allowSlideClick && (m(a), C.fireCallback(b.onSlideClick, C, a))
    }

    function l(a) {
        m(a), C.fireCallback(b.onSlideTouch, C, a)
    }

    function m(a) {
        if (a.currentTarget)C.clickedSlide = a.currentTarget; else {
            var c = a.srcElement;
            do {
                if (c.className.indexOf(b.slideClass) > -1)break;
                c = c.parentNode
            } while (c);
            C.clickedSlide = c
        }
        C.clickedSlideIndex = C.slides.indexOf(C.clickedSlide), C.clickedSlideLoopIndex = C.clickedSlideIndex - (C.loopedSlides || 0)
    }

    function n(a) {
        return C.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation"in a && a.stopPropagation(), !1)
    }

    function o(a) {
        return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1
    }

    function p(a) {
        if (b.preventLinks && (C.allowLinks = !0), C.isTouched || b.onlyExternal)return !1;
        var c = a.target || a.srcElement;
        document.activeElement && document.activeElement !== c && document.activeElement.blur();
        var d = "input select textarea".split(" ");
        if (b.noSwiping && c && s(c))return !1;
        if ($ = !1, C.isTouched = !0, Z = "touchstart" === a.type, !Z && "which"in a && 3 === a.which)return !1;
        if (!Z || 1 === a.targetTouches.length) {
            C.callPlugins("onTouchStartBegin"), !Z && !C.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            var e = Z ? a.targetTouches[0].pageX : a.pageX || a.clientX, f = Z ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            C.touches.startX = C.touches.currentX = e, C.touches.startY = C.touches.currentY = f, C.touches.start = C.touches.current = M ? e : f, C.setWrapperTransition(0), C.positions.start = C.positions.current = C.getWrapperTranslate(), C.setWrapperTranslate(C.positions.start), C.times.start = (new Date).getTime(), H = void 0, b.moveStartThreshold > 0 && (W = !1), b.onTouchStart && C.fireCallback(b.onTouchStart, C, a), C.callPlugins("onTouchStartEnd")
        }
    }

    function q(a) {
        if (C.isTouched && !b.onlyExternal && (!Z || "mousemove" !== a.type)) {
            var c = Z ? a.targetTouches[0].pageX : a.pageX || a.clientX, d = Z ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            if ("undefined" == typeof H && M && (H = !!(H || Math.abs(d - C.touches.startY) > Math.abs(c - C.touches.startX))), "undefined" != typeof H || M || (H = !!(H || Math.abs(d - C.touches.startY) < Math.abs(c - C.touches.startX))), H)return void(C.isTouched = !1);
            if (M) {
                if (!b.swipeToNext && c < C.touches.startX || !b.swipeToPrev && c > C.touches.startX)return
            } else if (!b.swipeToNext && d < C.touches.startY || !b.swipeToPrev && d > C.touches.startY)return;
            if (a.assignedToSwiper)return void(C.isTouched = !1);
            if (a.assignedToSwiper = !0, b.preventLinks && (C.allowLinks = !1), b.onSlideClick && (C.allowSlideClick = !1), b.autoplay && C.stopAutoplay(!0), !Z || 1 === a.touches.length) {
                if (C.isMoved || (C.callPlugins("onTouchMoveStart"), b.loop && (C.fixLoop(), C.positions.start = C.getWrapperTranslate()), b.onTouchMoveStart && C.fireCallback(b.onTouchMoveStart, C)), C.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, C.touches.current = M ? c : d, C.positions.current = (C.touches.current - C.touches.start) * b.touchRatio + C.positions.start, C.positions.current > 0 && b.onResistanceBefore && C.fireCallback(b.onResistanceBefore, C, C.positions.current), C.positions.current < -e() && b.onResistanceAfter && C.fireCallback(b.onResistanceAfter, C, Math.abs(C.positions.current + e())), b.resistance && "100%" !== b.resistance) {
                    var f;
                    if (C.positions.current > 0 && (f = 1 - C.positions.current / I / 2, C.positions.current = .5 > f ? I / 2 : C.positions.current * f), C.positions.current < -e()) {
                        var g = (C.touches.current - C.touches.start) * b.touchRatio + (e() + C.positions.start);
                        f = (I + g) / I;
                        var h = C.positions.current - g * (1 - f) / 2, i = -e() - I / 2;
                        C.positions.current = i > h || 0 >= f ? i : h
                    }
                }
                if (b.resistance && "100%" === b.resistance && (C.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (C.positions.current = 0), C.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (C.positions.current = -e())), !b.followFinger)return;
                if (b.moveStartThreshold)if (Math.abs(C.touches.current - C.touches.start) > b.moveStartThreshold || W) {
                    if (!W)return W = !0, void(C.touches.start = C.touches.current);
                    C.setWrapperTranslate(C.positions.current)
                } else C.positions.current = C.positions.start; else C.setWrapperTranslate(C.positions.current);
                return (b.freeMode || b.watchActiveIndex) && C.updateActiveSlide(C.positions.current), b.grabCursor && (C.container.style.cursor = "move", C.container.style.cursor = "grabbing", C.container.style.cursor = "-moz-grabbin", C.container.style.cursor = "-webkit-grabbing"), X || (X = C.touches.current), Y || (Y = (new Date).getTime()), C.velocity = (C.touches.current - X) / ((new Date).getTime() - Y) / 2, Math.abs(C.touches.current - X) < 2 && (C.velocity = 0), X = C.touches.current, Y = (new Date).getTime(), C.callPlugins("onTouchMoveEnd"), b.onTouchMove && C.fireCallback(b.onTouchMove, C, a), !1
            }
        }
    }

    function r(a) {
        if (H && C.swipeReset(), !b.onlyExternal && C.isTouched) {
            C.isTouched = !1, b.grabCursor && (C.container.style.cursor = "move", C.container.style.cursor = "grab", C.container.style.cursor = "-moz-grab", C.container.style.cursor = "-webkit-grab"), C.positions.current || 0 === C.positions.current || (C.positions.current = C.positions.start), b.followFinger && C.setWrapperTranslate(C.positions.current), C.times.end = (new Date).getTime(), C.touches.diff = C.touches.current - C.touches.start, C.touches.abs = Math.abs(C.touches.diff), C.positions.diff = C.positions.current - C.positions.start, C.positions.abs = Math.abs(C.positions.diff);
            var c = C.positions.diff, d = C.positions.abs, f = C.times.end - C.times.start;
            5 > d && 300 > f && C.allowLinks === !1 && (b.freeMode || 0 === d || C.swipeReset(), b.preventLinks && (C.allowLinks = !0), b.onSlideClick && (C.allowSlideClick = !0)), setTimeout(function () {
                "undefined" != typeof C && null !== C && (b.preventLinks && (C.allowLinks = !0), b.onSlideClick && (C.allowSlideClick = !0))
            }, 100);
            var g = e();
            if (!C.isMoved && b.freeMode)return C.isMoved = !1, b.onTouchEnd && C.fireCallback(b.onTouchEnd, C, a), void C.callPlugins("onTouchEnd");
            if (!C.isMoved || C.positions.current > 0 || C.positions.current < -g)return C.swipeReset(), b.onTouchEnd && C.fireCallback(b.onTouchEnd, C, a), void C.callPlugins("onTouchEnd");
            if (C.isMoved = !1, b.freeMode) {
                if (b.freeModeFluid) {
                    var h, i = 1e3 * b.momentumRatio, j = C.velocity * i, k = C.positions.current + j, l = !1, m = 20 * Math.abs(C.velocity) * b.momentumBounceRatio;
                    -g > k && (b.momentumBounce && C.support.transitions ? (-m > k + g && (k = -g - m), h = -g, l = !0, $ = !0) : k = -g), k > 0 && (b.momentumBounce && C.support.transitions ? (k > m && (k = m), h = 0, l = !0, $ = !0) : k = 0), 0 !== C.velocity && (i = Math.abs((k - C.positions.current) / C.velocity)), C.setWrapperTranslate(k), C.setWrapperTransition(i), b.momentumBounce && l && C.wrapperTransitionEnd(function () {
                        $ && (b.onMomentumBounce && C.fireCallback(b.onMomentumBounce, C), C.callPlugins("onMomentumBounce"), C.setWrapperTranslate(h), C.setWrapperTransition(300))
                    }), C.updateActiveSlide(k)
                }
                return (!b.freeModeFluid || f >= 300) && C.updateActiveSlide(C.positions.current), b.onTouchEnd && C.fireCallback(b.onTouchEnd, C, a), void C.callPlugins("onTouchEnd")
            }
            G = 0 > c ? "toNext" : "toPrev", "toNext" === G && 300 >= f && (30 > d || !b.shortSwipes ? C.swipeReset() : C.swipeNext(!0)), "toPrev" === G && 300 >= f && (30 > d || !b.shortSwipes ? C.swipeReset() : C.swipePrev(!0));
            var n = 0;
            if ("auto" === b.slidesPerView) {
                for (var o, p = Math.abs(C.getWrapperTranslate()), q = 0, r = 0; r < C.slides.length; r++)if (o = M ? C.slides[r].getWidth(!0, b.roundLengths) : C.slides[r].getHeight(!0, b.roundLengths), q += o, q > p) {
                    n = o;
                    break
                }
                n > I && (n = I)
            } else n = E * b.slidesPerView;
            "toNext" === G && f > 300 && (d >= n * b.longSwipesRatio ? C.swipeNext(!0) : C.swipeReset()), "toPrev" === G && f > 300 && (d >= n * b.longSwipesRatio ? C.swipePrev(!0) : C.swipeReset()), b.onTouchEnd && C.fireCallback(b.onTouchEnd, C, a), C.callPlugins("onTouchEnd")
        }
    }

    function s(a) {
        var c = !1;
        do a.className.indexOf(b.noSwipingClass) > -1 && (c = !0), a = a.parentElement; while (!c && a.parentElement && -1 === a.className.indexOf(b.wrapperClass));
        return !c && a.className.indexOf(b.wrapperClass) > -1 && a.className.indexOf(b.noSwipingClass) > -1 && (c = !0), c
    }

    function t(a, b) {
        var c, d = document.createElement("div");
        return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML
    }

    function u(a, c, d) {
        function e() {
            var f = +new Date, l = f - g;
            h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (C.setWrapperTranslate(Math.ceil(h)), C._DOMAnimating = !0, window.setTimeout(function () {
                e()
            }, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && C.fireCallback(b.onSlideChangeEnd, C, j) : C.fireCallback(b.onSlideChangeEnd, C, j)), C.setWrapperTranslate(a), C._DOMAnimating = !1)
        }

        var f = "to" === c && d.speed >= 0 ? d.speed : b.speed, g = +new Date;
        if (C.support.transitions || !b.DOMAnimation)C.setWrapperTranslate(a), C.setWrapperTransition(f); else {
            var h = C.getWrapperTranslate(), i = Math.ceil((a - h) / f * (1e3 / 60)), j = h > a ? "toNext" : "toPrev", k = "toNext" === j ? h > a : a > h;
            if (C._DOMAnimating)return;
            e()
        }
        C.updateActiveSlide(a), b.onSlideNext && "next" === c && C.fireCallback(b.onSlideNext, C, a), b.onSlidePrev && "prev" === c && C.fireCallback(b.onSlidePrev, C, a), b.onSlideReset && "reset" === c && C.fireCallback(b.onSlideReset, C, a), ("next" === c || "prev" === c || "to" === c && d.runCallbacks === !0) && v(c)
    }

    function v(a) {
        if (C.callPlugins("onSlideChangeStart"), b.onSlideChangeStart)if (b.queueStartCallbacks && C.support.transitions) {
            if (C._queueStartCallbacks)return;
            C._queueStartCallbacks = !0, C.fireCallback(b.onSlideChangeStart, C, a), C.wrapperTransitionEnd(function () {
                C._queueStartCallbacks = !1
            })
        } else C.fireCallback(b.onSlideChangeStart, C, a);
        if (b.onSlideChangeEnd)if (C.support.transitions)if (b.queueEndCallbacks) {
            if (C._queueEndCallbacks)return;
            C._queueEndCallbacks = !0, C.wrapperTransitionEnd(function (c) {
                C.fireCallback(b.onSlideChangeEnd, c, a)
            })
        } else C.wrapperTransitionEnd(function (c) {
            C.fireCallback(b.onSlideChangeEnd, c, a)
        }); else b.DOMAnimation || setTimeout(function () {
            C.fireCallback(b.onSlideChangeEnd, C, a)
        }, 10)
    }

    function w() {
        var a = C.paginationButtons;
        if (a)for (var b = 0; b < a.length; b++)C.h.removeEventListener(a[b], "click", y)
    }

    function x() {
        var a = C.paginationButtons;
        if (a)for (var b = 0; b < a.length; b++)C.h.addEventListener(a[b], "click", y)
    }

    function y(a) {
        for (var c, d = a.target || a.srcElement, e = C.paginationButtons, f = 0; f < e.length; f++)d === e[f] && (c = f);
        b.autoplay && C.stopAutoplay(!0), C.swipeTo(c)
    }

    function z() {
        _ = setTimeout(function () {
            b.loop ? (C.fixLoop(), C.swipeNext(!0)) : C.swipeNext(!0) || (b.autoplayStopOnLast ? (clearTimeout(_), _ = void 0) : C.swipeTo(0)), C.wrapperTransitionEnd(function () {
                "undefined" != typeof _ && z()
            })
        }, b.autoplay)
    }

    function A() {
        C.calcSlides(), b.loader.slides.length > 0 && 0 === C.slides.length && C.loadSlides(), b.loop && C.createLoop(), C.init(), f(), b.pagination && C.createPagination(!0), b.loop || b.initialSlide > 0 ? C.swipeTo(b.initialSlide, 0, !1) : C.updateActiveSlide(0), b.autoplay && C.startAutoplay(), C.centerIndex = C.activeIndex, b.onSwiperCreated && C.fireCallback(b.onSwiperCreated, C), C.callPlugins("onSwiperCreated")
    }

    if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
        var B = HTMLElement.prototype;
        B.__defineGetter__ && B.__defineGetter__("outerHTML", function () {
            return (new XMLSerializer).serializeToString(this)
        })
    }
    if (window.getComputedStyle || (window.getComputedStyle = function (a) {
            return this.el = a, this.getPropertyValue = function (b) {
                var c = /(\-([a-z]){1})/g;
                return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function () {
                    return arguments[2].toUpperCase()
                })), a.currentStyle[b] ? a.currentStyle[b] : null
            }, this
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
            for (var c = b || 0, d = this.length; d > c; c++)if (this[c] === a)return c;
            return -1
        }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
        var C = this;
        C.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        }, C.positions = {start: 0, abs: 0, diff: 0, current: 0}, C.times = {
            start: 0,
            end: 0
        }, C.id = (new Date).getTime(), C.container = a.nodeType ? a : c(a)[0], C.isTouched = !1, C.isMoved = !1, C.activeIndex = 0, C.centerIndex = 0, C.activeLoaderIndex = 0, C.activeLoopIndex = 0, C.previousIndex = null, C.velocity = 0, C.snapGrid = [], C.slidesGrid = [], C.imagesToLoad = [], C.imagesLoaded = 0, C.wrapperLeft = 0, C.wrapperRight = 0, C.wrapperTop = 0, C.wrapperBottom = 0, C.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
        var D, E, F, G, H, I, J = {
            eventTarget: "wrapper",
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerViewFit: !0,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            longSwipesRatio: .5,
            moveStartThreshold: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            preventLinksPropagation: !1,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelControlForceToAxis: !1,
            useCSS3Transforms: !0,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            roundLengths: !1,
            calculateHeight: !1,
            cssWidthAndHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1},
            swipeToPrev: !0,
            swipeToNext: !0,
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        b = b || {};
        for (var K in J)if (K in b && "object" == typeof b[K])for (var L in J[K])L in b[K] || (b[K][L] = J[K][L]); else K in b || (b[K] = J[K]);
        C.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");
        var M = "horizontal" === b.mode, N = ["mousedown", "mousemove", "mouseup"];
        C.browser.ie10 && (N = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), C.browser.ie11 && (N = ["pointerdown", "pointermove", "pointerup"]), C.touchEvents = {
            touchStart: C.support.touch || !b.simulateTouch ? "touchstart" : N[0],
            touchMove: C.support.touch || !b.simulateTouch ? "touchmove" : N[1],
            touchEnd: C.support.touch || !b.simulateTouch ? "touchend" : N[2]
        };
        for (var O = C.container.childNodes.length - 1; O >= 0; O--)if (C.container.childNodes[O].className)for (var P = C.container.childNodes[O].className.split(/\s+/), Q = 0; Q < P.length; Q++)P[Q] === b.wrapperClass && (D = C.container.childNodes[O]);
        C.wrapper = D, C._extendSwiperSlide = function (a) {
            return a.append = function () {
                return b.loop ? a.insertAfter(C.slides.length - C.loopedSlides) : (C.wrapper.appendChild(a), C.reInit()), a
            }, a.prepend = function () {
                return b.loop ? (C.wrapper.insertBefore(a, C.slides[C.loopedSlides]), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : C.wrapper.insertBefore(a, C.wrapper.firstChild), C.reInit(), a
            }, a.insertAfter = function (c) {
                if ("undefined" == typeof c)return !1;
                var d;
                return b.loop ? (d = C.slides[c + 1 + C.loopedSlides], d ? C.wrapper.insertBefore(a, d) : C.wrapper.appendChild(a), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : (d = C.slides[c + 1], C.wrapper.insertBefore(a, d)), C.reInit(), a
            }, a.clone = function () {
                return C._extendSwiperSlide(a.cloneNode(!0))
            }, a.remove = function () {
                C.wrapper.removeChild(a), C.reInit()
            }, a.html = function (b) {
                return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a)
            }, a.index = function () {
                for (var b, c = C.slides.length - 1; c >= 0; c--)a === C.slides[c] && (b = c);
                return b
            }, a.isActive = function () {
                return a.index() === C.activeIndex ? !0 : !1
            }, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function (b) {
                return a.swiperSlideDataStorage[b]
            }, a.setData = function (b, c) {
                return a.swiperSlideDataStorage[b] = c, a
            }, a.data = function (b, c) {
                return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a)
            }, a.getWidth = function (b, c) {
                return C.h.getWidth(a, b, c)
            }, a.getHeight = function (b, c) {
                return C.h.getHeight(a, b, c)
            }, a.getOffset = function () {
                return C.h.getOffset(a)
            }, a
        }, C.calcSlides = function (a) {
            var c = C.slides ? C.slides.length : !1;
            C.slides = [], C.displaySlides = [];
            for (var d = 0; d < C.wrapper.childNodes.length; d++)if (C.wrapper.childNodes[d].className)for (var e = C.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++)f[i] === b.slideClass && C.slides.push(C.wrapper.childNodes[d]);
            for (d = C.slides.length - 1; d >= 0; d--)C._extendSwiperSlide(C.slides[d]);
            c !== !1 && (c !== C.slides.length || a) && (h(), g(), C.updateActiveSlide(), C.params.pagination && C.createPagination(), C.callPlugins("numberOfSlidesChanged"))
        }, C.createSlide = function (a, c, d) {
            c = c || C.params.slideClass, d = d || b.slideElement;
            var e = document.createElement(d);
            return e.innerHTML = a || "", e.className = c, C._extendSwiperSlide(e)
        }, C.appendSlide = function (a, b, c) {
            return a ? a.nodeType ? C._extendSwiperSlide(a).append() : C.createSlide(a, b, c).append() : void 0
        }, C.prependSlide = function (a, b, c) {
            return a ? a.nodeType ? C._extendSwiperSlide(a).prepend() : C.createSlide(a, b, c).prepend() : void 0
        }, C.insertSlideAfter = function (a, b, c, d) {
            return "undefined" == typeof a ? !1 : b.nodeType ? C._extendSwiperSlide(b).insertAfter(a) : C.createSlide(b, c, d).insertAfter(a)
        }, C.removeSlide = function (a) {
            if (C.slides[a]) {
                if (b.loop) {
                    if (!C.slides[a + C.loopedSlides])return !1;
                    C.slides[a + C.loopedSlides].remove(), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()
                } else C.slides[a].remove();
                return !0
            }
            return !1
        }, C.removeLastSlide = function () {
            return C.slides.length > 0 ? (b.loop ? (C.slides[C.slides.length - 1 - C.loopedSlides].remove(), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : C.slides[C.slides.length - 1].remove(), !0) : !1
        }, C.removeAllSlides = function () {
            for (var a = C.slides.length - 1; a >= 0; a--)C.slides[a].remove()
        }, C.getSlide = function (a) {
            return C.slides[a]
        }, C.getLastSlide = function () {
            return C.slides[C.slides.length - 1]
        }, C.getFirstSlide = function () {
            return C.slides[0]
        }, C.activeSlide = function () {
            return C.slides[C.activeIndex]
        }, C.fireCallback = function () {
            var a = arguments[0];
            if ("[object Array]" === Object.prototype.toString.call(a))for (var c = 0; c < a.length; c++)"function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]); else"[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && C.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
        }, C.addCallback = function (a, b) {
            var c, e = this;
            return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b))
        }, C.removeCallbacks = function (a) {
            C.params["on" + a] && (C.params["on" + a] = null)
        };
        var R = [];
        for (var S in C.plugins)if (b[S]) {
            var T = C.plugins[S](C, b[S]);
            T && R.push(T)
        }
        C.callPlugins = function (a, b) {
            b || (b = {});
            for (var c = 0; c < R.length; c++)a in R[c] && R[c][a](b)
        }, !C.browser.ie10 && !C.browser.ie11 || b.onlyExternal || C.wrapper.classList.add("swiper-wp8-" + (M ? "horizontal" : "vertical")), b.freeMode && (C.container.className += " swiper-free-mode"), C.initialized = !1, C.init = function (a, c) {
            var d = C.h.getWidth(C.container, !1, b.roundLengths), e = C.h.getHeight(C.container, !1, b.roundLengths);
            if (d !== C.width || e !== C.height || a) {
                C.width = d, C.height = e;
                var f, g, h, i, j, k, l;
                I = M ? d : e;
                var m = C.wrapper;
                if (a && C.calcSlides(c), "auto" === b.slidesPerView) {
                    var n = 0, o = 0;
                    b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (M ? C.wrapperLeft = b.offsetPxBefore : C.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (M ? C.wrapperRight = b.offsetPxAfter : C.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (M ? (C.wrapperLeft = (I - this.slides[0].getWidth(!0, b.roundLengths)) / 2, C.wrapperRight = (I - C.slides[C.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (C.wrapperTop = (I - C.slides[0].getHeight(!0, b.roundLengths)) / 2, C.wrapperBottom = (I - C.slides[C.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), M ? (C.wrapperLeft >= 0 && (m.style.paddingLeft = C.wrapperLeft + "px"), C.wrapperRight >= 0 && (m.style.paddingRight = C.wrapperRight + "px")) : (C.wrapperTop >= 0 && (m.style.paddingTop = C.wrapperTop + "px"), C.wrapperBottom >= 0 && (m.style.paddingBottom = C.wrapperBottom + "px")), k = 0;
                    var p = 0;
                    for (C.snapGrid = [], C.slidesGrid = [], h = 0, l = 0; l < C.slides.length; l++) {
                        f = C.slides[l].getWidth(!0, b.roundLengths), g = C.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));
                        var q = M ? f : g;
                        if (b.centeredSlides) {
                            var r = l === C.slides.length - 1 ? 0 : C.slides[l + 1].getWidth(!0, b.roundLengths), s = l === C.slides.length - 1 ? 0 : C.slides[l + 1].getHeight(!0, b.roundLengths), t = M ? r : s;
                            if (q > I) {
                                if (b.slidesPerViewFit)C.snapGrid.push(k + C.wrapperLeft), C.snapGrid.push(k + q - I + C.wrapperLeft); else for (var u = 0; u <= Math.floor(q / (I + C.wrapperLeft)); u++)C.snapGrid.push(0 === u ? k + C.wrapperLeft : k + C.wrapperLeft + I * u);
                                C.slidesGrid.push(k + C.wrapperLeft)
                            } else C.snapGrid.push(p), C.slidesGrid.push(p);
                            p += q / 2 + t / 2
                        } else {
                            if (q > I)if (b.slidesPerViewFit)C.snapGrid.push(k), C.snapGrid.push(k + q - I); else if (0 !== I)for (var v = 0; v <= Math.floor(q / I); v++)C.snapGrid.push(k + I * v); else C.snapGrid.push(k); else C.snapGrid.push(k);
                            C.slidesGrid.push(k)
                        }
                        k += q, n += f, o += g
                    }
                    b.calculateHeight && (C.height = h), M ? (F = n + C.wrapperRight + C.wrapperLeft, m.style.width = n + "px", m.style.height = C.height + "px") : (F = o + C.wrapperTop + C.wrapperBottom, m.style.width = C.width + "px", m.style.height = o + "px")
                } else if (b.scrollContainer)m.style.width = "", m.style.height = "", i = C.slides[0].getWidth(!0, b.roundLengths), j = C.slides[0].getHeight(!0, b.roundLengths), F = M ? i : j, m.style.width = i + "px", m.style.height = j + "px", E = M ? i : j; else {
                    if (b.calculateHeight) {
                        for (h = 0, j = 0, M || (C.container.style.height = ""), m.style.height = "", l = 0; l < C.slides.length; l++)C.slides[l].style.height = "", h = Math.max(C.slides[l].getHeight(!0), h), M || (j += C.slides[l].getHeight(!0));
                        g = h, C.height = g, M ? j = g : (I = g, C.container.style.height = I + "px")
                    } else g = M ? C.height : C.height / b.slidesPerView, b.roundLengths && (g = Math.ceil(g)), j = M ? C.height : C.slides.length * g;
                    for (f = M ? C.width / b.slidesPerView : C.width, b.roundLengths && (f = Math.ceil(f)), i = M ? C.slides.length * f : C.width, E = M ? f : g, b.offsetSlidesBefore > 0 && (M ? C.wrapperLeft = E * b.offsetSlidesBefore : C.wrapperTop = E * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (M ? C.wrapperRight = E * b.offsetSlidesAfter : C.wrapperBottom = E * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (M ? C.wrapperLeft = b.offsetPxBefore : C.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (M ? C.wrapperRight = b.offsetPxAfter : C.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (M ? (C.wrapperLeft = (I - E) / 2, C.wrapperRight = (I - E) / 2) : (C.wrapperTop = (I - E) / 2, C.wrapperBottom = (I - E) / 2)), M ? (C.wrapperLeft > 0 && (m.style.paddingLeft = C.wrapperLeft + "px"), C.wrapperRight > 0 && (m.style.paddingRight = C.wrapperRight + "px")) : (C.wrapperTop > 0 && (m.style.paddingTop = C.wrapperTop + "px"), C.wrapperBottom > 0 && (m.style.paddingBottom = C.wrapperBottom + "px")), F = M ? i + C.wrapperRight + C.wrapperLeft : j + C.wrapperTop + C.wrapperBottom, parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"), parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"), k = 0, C.snapGrid = [], C.slidesGrid = [], l = 0; l < C.slides.length; l++)C.snapGrid.push(k), C.slidesGrid.push(k), k += E, parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (C.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (C.slides[l].style.height = g + "px")
                }
                C.initialized ? (C.callPlugins("onInit"), b.onInit && C.fireCallback(b.onInit, C)) : (C.callPlugins("onFirstInit"), b.onFirstInit && C.fireCallback(b.onFirstInit, C)), C.initialized = !0
            }
        }, C.reInit = function (a) {
            C.init(!0, a)
        }, C.resizeFix = function (a) {
            C.callPlugins("beforeResizeFix"), C.init(b.resizeReInit || a), b.freeMode ? C.getWrapperTranslate() < -e() && (C.setWrapperTransition(0), C.setWrapperTranslate(-e())) : (C.swipeTo(b.loop ? C.activeLoopIndex : C.activeIndex, 0, !1), b.autoplay && (C.support.transitions && "undefined" != typeof _ ? "undefined" != typeof _ && (clearTimeout(_), _ = void 0, C.startAutoplay()) : "undefined" != typeof ab && (clearInterval(ab), ab = void 0, C.startAutoplay()))), C.callPlugins("afterResizeFix")
        }, C.destroy = function () {
            var a = C.h.removeEventListener, c = "wrapper" === b.eventTarget ? C.wrapper : C.container;
            C.browser.ie10 || C.browser.ie11 ? (a(c, C.touchEvents.touchStart, p), a(document, C.touchEvents.touchMove, q), a(document, C.touchEvents.touchEnd, r)) : (C.support.touch && (a(c, "touchstart", p), a(c, "touchmove", q), a(c, "touchend", r)), b.simulateTouch && (a(c, "mousedown", p), a(document, "mousemove", q), a(document, "mouseup", r))), b.autoResize && a(window, "resize", C.resizeFix), h(), b.paginationClickable && w(), b.mousewheelControl && C._wheelEvent && a(C.container, C._wheelEvent, j), b.keyboardControl && a(document, "keydown", i), b.autoplay && C.stopAutoplay(), C.callPlugins("onDestroy"), C = null
        }, C.disableKeyboardControl = function () {
            b.keyboardControl = !1, C.h.removeEventListener(document, "keydown", i)
        }, C.enableKeyboardControl = function () {
            b.keyboardControl = !0, C.h.addEventListener(document, "keydown", i)
        };
        var U = (new Date).getTime();
        if (C.disableMousewheelControl = function () {
                return C._wheelEvent ? (b.mousewheelControl = !1, C.h.removeEventListener(C.container, C._wheelEvent, j), !0) : !1
            }, C.enableMousewheelControl = function () {
                return C._wheelEvent ? (b.mousewheelControl = !0, C.h.addEventListener(C.container, C._wheelEvent, j), !0) : !1
            }, b.grabCursor) {
            var V = C.container.style;
            V.cursor = "move", V.cursor = "grab", V.cursor = "-moz-grab", V.cursor = "-webkit-grab"
        }
        C.allowSlideClick = !0, C.allowLinks = !0;
        var W, X, Y, Z = !1, $ = !0;
        C.swipeNext = function (a) {
            !a && b.loop && C.fixLoop(), !a && b.autoplay && C.stopAutoplay(!0), C.callPlugins("onSwipeNext");
            var c = C.getWrapperTranslate(), d = c;
            if ("auto" === b.slidesPerView) {
                for (var f = 0; f < C.snapGrid.length; f++)if (-c >= C.snapGrid[f] && -c < C.snapGrid[f + 1]) {
                    d = -C.snapGrid[f + 1];
                    break
                }
            } else {
                var g = E * b.slidesPerGroup;
                d = -(Math.floor(Math.abs(c) / Math.floor(g)) * g + g)
            }
            return d < -e() && (d = -e()), d === c ? !1 : (u(d, "next"), !0)
        }, C.swipePrev = function (a) {
            !a && b.loop && C.fixLoop(), !a && b.autoplay && C.stopAutoplay(!0), C.callPlugins("onSwipePrev");
            var c, d = Math.ceil(C.getWrapperTranslate());
            if ("auto" === b.slidesPerView) {
                c = 0;
                for (var e = 1; e < C.snapGrid.length; e++) {
                    if (-d === C.snapGrid[e]) {
                        c = -C.snapGrid[e - 1];
                        break
                    }
                    if (-d > C.snapGrid[e] && -d < C.snapGrid[e + 1]) {
                        c = -C.snapGrid[e];
                        break
                    }
                }
            } else {
                var f = E * b.slidesPerGroup;
                c = -(Math.ceil(-d / f) - 1) * f
            }
            return c > 0 && (c = 0), c === d ? !1 : (u(c, "prev"), !0)
        }, C.swipeReset = function () {
            C.callPlugins("onSwipeReset");
            {
                var a, c = C.getWrapperTranslate(), d = E * b.slidesPerGroup;
                -e()
            }
            if ("auto" === b.slidesPerView) {
                a = 0;
                for (var f = 0; f < C.snapGrid.length; f++) {
                    if (-c === C.snapGrid[f])return;
                    if (-c >= C.snapGrid[f] && -c < C.snapGrid[f + 1]) {
                        a = C.positions.diff > 0 ? -C.snapGrid[f + 1] : -C.snapGrid[f];
                        break
                    }
                }
                -c >= C.snapGrid[C.snapGrid.length - 1] && (a = -C.snapGrid[C.snapGrid.length - 1]), c <= -e() && (a = -e())
            } else a = 0 > c ? Math.round(c / d) * d : 0, c <= -e() && (a = -e());
            return b.scrollContainer && (a = 0 > c ? c : 0), a < -e() && (a = -e()), b.scrollContainer && I > E && (a = 0), a === c ? !1 : (u(a, "reset"), !0)
        }, C.swipeTo = function (a, c, d) {
            a = parseInt(a, 10), C.callPlugins("onSwipeTo", {index: a, speed: c}), b.loop && (a += C.loopedSlides);
            var f = C.getWrapperTranslate();
            if (!(a > C.slides.length - 1 || 0 > a)) {
                var g;
                return g = "auto" === b.slidesPerView ? -C.slidesGrid[a] : -a * E, g < -e() && (g = -e()), g === f ? !1 : (d = d === !1 ? !1 : !0, u(g, "to", {
                    index: a,
                    speed: c,
                    runCallbacks: d
                }), !0)
            }
        }, C._queueStartCallbacks = !1, C._queueEndCallbacks = !1, C.updateActiveSlide = function (a) {
            if (C.initialized && 0 !== C.slides.length) {
                C.previousIndex = C.activeIndex, "undefined" == typeof a && (a = C.getWrapperTranslate()), a > 0 && (a = 0);
                var c;
                if ("auto" === b.slidesPerView) {
                    if (C.activeIndex = C.slidesGrid.indexOf(-a), C.activeIndex < 0) {
                        for (c = 0; c < C.slidesGrid.length - 1 && !(-a > C.slidesGrid[c] && -a < C.slidesGrid[c + 1]); c++);
                        var d = Math.abs(C.slidesGrid[c] + a), e = Math.abs(C.slidesGrid[c + 1] + a);
                        C.activeIndex = e >= d ? c : c + 1
                    }
                } else C.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / E);
                if (C.activeIndex === C.slides.length && (C.activeIndex = C.slides.length - 1), C.activeIndex < 0 && (C.activeIndex = 0), C.slides[C.activeIndex]) {
                    if (C.calcVisibleSlides(a), C.support.classList) {
                        var f;
                        for (c = 0; c < C.slides.length; c++)f = C.slides[c], f.classList.remove(b.slideActiveClass), C.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
                        C.slides[C.activeIndex].classList.add(b.slideActiveClass)
                    } else {
                        var g = new RegExp("\\s*" + b.slideActiveClass), h = new RegExp("\\s*" + b.slideVisibleClass);
                        for (c = 0; c < C.slides.length; c++)C.slides[c].className = C.slides[c].className.replace(g, "").replace(h, ""), C.visibleSlides.indexOf(C.slides[c]) >= 0 && (C.slides[c].className += " " + b.slideVisibleClass);
                        C.slides[C.activeIndex].className += " " + b.slideActiveClass
                    }
                    if (b.loop) {
                        var i = C.loopedSlides;
                        C.activeLoopIndex = C.activeIndex - i, C.activeLoopIndex >= C.slides.length - 2 * i && (C.activeLoopIndex = C.slides.length - 2 * i - C.activeLoopIndex), C.activeLoopIndex < 0 && (C.activeLoopIndex = C.slides.length - 2 * i + C.activeLoopIndex), C.activeLoopIndex < 0 && (C.activeLoopIndex = 0)
                    } else C.activeLoopIndex = C.activeIndex;
                    b.pagination && C.updatePagination(a)
                }
            }
        }, C.createPagination = function (a) {
            if (b.paginationClickable && C.paginationButtons && w(), C.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
                var d = "", e = C.slides.length, f = e;
                b.loop && (f -= 2 * C.loopedSlides);
                for (var g = 0; f > g; g++)d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
                C.paginationContainer.innerHTML = d
            }
            C.paginationButtons = c("." + b.paginationElementClass, C.paginationContainer), a || C.updatePagination(), C.callPlugins("onCreatePagination"), b.paginationClickable && x()
        }, C.updatePagination = function (a) {
            if (b.pagination && !(C.slides.length < 1)) {
                var d = c("." + b.paginationActiveClass, C.paginationContainer);
                if (d) {
                    var e = C.paginationButtons;
                    if (0 !== e.length) {
                        for (var f = 0; f < e.length; f++)e[f].className = b.paginationElementClass;
                        var g = b.loop ? C.loopedSlides : 0;
                        if (b.paginationAsRange) {
                            C.visibleSlides || C.calcVisibleSlides(a);
                            var h, i = [];
                            for (h = 0; h < C.visibleSlides.length; h++) {
                                var j = C.slides.indexOf(C.visibleSlides[h]) - g;
                                b.loop && 0 > j && (j = C.slides.length - 2 * C.loopedSlides + j), b.loop && j >= C.slides.length - 2 * C.loopedSlides && (j = C.slides.length - 2 * C.loopedSlides - j, j = Math.abs(j)), i.push(j)
                            }
                            for (h = 0; h < i.length; h++)e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
                            b.loop ? void 0 !== e[C.activeLoopIndex] && (e[C.activeLoopIndex].className += " " + b.paginationActiveClass) : e[C.activeIndex].className += " " + b.paginationActiveClass
                        } else b.loop ? e[C.activeLoopIndex] && (e[C.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[C.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass
                    }
                }
            }
        }, C.calcVisibleSlides = function (a) {
            var c = [], d = 0, e = 0, f = 0;
            M && C.wrapperLeft > 0 && (a += C.wrapperLeft), !M && C.wrapperTop > 0 && (a += C.wrapperTop);
            for (var g = 0; g < C.slides.length; g++) {
                d += e, e = "auto" === b.slidesPerView ? M ? C.h.getWidth(C.slides[g], !0, b.roundLengths) : C.h.getHeight(C.slides[g], !0, b.roundLengths) : E, f = d + e;
                var h = !1;
                b.visibilityFullFit ? (d >= -a && -a + I >= f && (h = !0), -a >= d && f >= -a + I && (h = !0)) : (f > -a && -a + I >= f && (h = !0), d >= -a && -a + I > d && (h = !0), -a > d && f > -a + I && (h = !0)), h && c.push(C.slides[g])
            }
            0 === c.length && (c = [C.slides[C.activeIndex]]), C.visibleSlides = c
        };
        var _, ab;
        C.startAutoplay = function () {
            if (C.support.transitions) {
                if ("undefined" != typeof _)return !1;
                if (!b.autoplay)return;
                C.callPlugins("onAutoplayStart"), b.onAutoplayStart && C.fireCallback(b.onAutoplayStart, C), z()
            } else {
                if ("undefined" != typeof ab)return !1;
                if (!b.autoplay)return;
                C.callPlugins("onAutoplayStart"), b.onAutoplayStart && C.fireCallback(b.onAutoplayStart, C), ab = setInterval(function () {
                    b.loop ? (C.fixLoop(), C.swipeNext(!0)) : C.swipeNext(!0) || (b.autoplayStopOnLast ? (clearInterval(ab), ab = void 0) : C.swipeTo(0))
                }, b.autoplay)
            }
        }, C.stopAutoplay = function (a) {
            if (C.support.transitions) {
                if (!_)return;
                _ && clearTimeout(_), _ = void 0, a && !b.autoplayDisableOnInteraction && C.wrapperTransitionEnd(function () {
                    z()
                }), C.callPlugins("onAutoplayStop"), b.onAutoplayStop && C.fireCallback(b.onAutoplayStop, C)
            } else ab && clearInterval(ab), ab = void 0, C.callPlugins("onAutoplayStop"), b.onAutoplayStop && C.fireCallback(b.onAutoplayStop, C)
        }, C.loopCreated = !1, C.removeLoopedSlides = function () {
            if (C.loopCreated)for (var a = 0; a < C.slides.length; a++)C.slides[a].getData("looped") === !0 && C.wrapper.removeChild(C.slides[a])
        }, C.createLoop = function () {
            if (0 !== C.slides.length) {
                C.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : b.slidesPerView + b.loopAdditionalSlides, C.loopedSlides > C.slides.length && (C.loopedSlides = C.slides.length);
                var a, c = "", d = "", e = "", f = C.slides.length, g = Math.floor(C.loopedSlides / f), h = C.loopedSlides % f;
                for (a = 0; g * f > a; a++) {
                    var i = a;
                    if (a >= f) {
                        var j = Math.floor(a / f);
                        i = a - f * j
                    }
                    e += C.slides[i].outerHTML
                }
                for (a = 0; h > a; a++)d += t(b.slideDuplicateClass, C.slides[a].outerHTML);
                for (a = f - h; f > a; a++)c += t(b.slideDuplicateClass, C.slides[a].outerHTML);
                var k = c + e + D.innerHTML + e + d;
                for (D.innerHTML = k, C.loopCreated = !0, C.calcSlides(), a = 0; a < C.slides.length; a++)(a < C.loopedSlides || a >= C.slides.length - C.loopedSlides) && C.slides[a].setData("looped", !0);
                C.callPlugins("onCreateLoop")
            }
        }, C.fixLoop = function () {
            var a;
            C.activeIndex < C.loopedSlides ? (a = C.slides.length - 3 * C.loopedSlides + C.activeIndex, C.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && C.activeIndex >= 2 * C.loopedSlides || C.activeIndex > C.slides.length - 2 * b.slidesPerView) && (a = -C.slides.length + C.activeIndex + C.loopedSlides, C.swipeTo(a, 0, !1))
        }, C.loadSlides = function () {
            var a = "";
            C.activeLoaderIndex = 0;
            for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++)a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
            C.wrapper.innerHTML = a, C.calcSlides(!0), b.loader.loadAllSlides || C.wrapperTransitionEnd(C.reloadSlides, !0)
        }, C.reloadSlides = function () {
            var a = b.loader.slides, c = parseInt(C.activeSlide().data("swiperindex"), 10);
            if (!(0 > c || c > a.length - 1)) {
                C.activeLoaderIndex = c;
                var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups), e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
                if (c > 0) {
                    var f = -E * (c - d);
                    C.setWrapperTranslate(f), C.setWrapperTransition(0)
                }
                var g;
                if ("reload" === b.loader.logic) {
                    C.wrapper.innerHTML = "";
                    var h = "";
                    for (g = d; e >= g; g++)h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
                    C.wrapper.innerHTML = h
                } else {
                    var i = 1e3, j = 0;
                    for (g = 0; g < C.slides.length; g++) {
                        var k = C.slides[g].data("swiperindex");
                        d > k || k > e ? C.wrapper.removeChild(C.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j))
                    }
                    for (g = d; e >= g; g++) {
                        var l;
                        i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], C.wrapper.insertBefore(l, C.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], C.wrapper.appendChild(l))
                    }
                }
                C.reInit(!0)
            }
        }, A()
    }
};
Swiper.prototype = {
    plugins: {}, wrapperTransitionEnd: function (a, b) {
        "use strict";
        function c(h) {
            if (h.target === f && (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b))for (d = 0; d < g.length; d++)e.h.removeEventListener(f, g[d], c)
        }

        var d, e = this, f = e.wrapper, g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (a)for (d = 0; d < g.length; d++)e.h.addEventListener(f, g[d], c)
    }, getWrapperTranslate: function (a) {
        "use strict";
        var b, c, d, e, f = this.wrapper;
        return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0
    }, setWrapperTranslate: function (a, b, c) {
        "use strict";
        var d, e = this.wrapper.style, f = {x: 0, y: 0, z: 0};
        3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f)
    }, setWrapperTransition: function (a) {
        "use strict";
        var b = this.wrapper.style;
        b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {duration: a}), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a)
    }, h: {
        getWidth: function (a, b, c) {
            "use strict";
            var d = window.getComputedStyle(a, null).getPropertyValue("width"), e = parseFloat(d);
            return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.ceil(e) : e
        }, getHeight: function (a, b, c) {
            "use strict";
            if (b)return a.offsetHeight;
            var d = window.getComputedStyle(a, null).getPropertyValue("height"), e = parseFloat(d);
            return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.ceil(e) : e
        }, getOffset: function (a) {
            "use strict";
            var b = a.getBoundingClientRect(), c = document.body, d = a.clientTop || c.clientTop || 0, e = a.clientLeft || c.clientLeft || 0, f = window.pageYOffset || a.scrollTop, g = window.pageXOffset || a.scrollLeft;
            return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), {
                top: b.top + f - d,
                left: b.left + g - e
            }
        }, windowWidth: function () {
            "use strict";
            return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
        }, windowHeight: function () {
            "use strict";
            return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
        }, windowScroll: function () {
            "use strict";
            return "undefined" != typeof pageYOffset ? {
                left: window.pageXOffset,
                top: window.pageYOffset
            } : document.documentElement ? {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            } : void 0
        }, addEventListener: function (a, b, c, d) {
            "use strict";
            "undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, removeEventListener: function (a, b, c, d) {
            "use strict";
            "undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    }, setTransform: function (a, b) {
        "use strict";
        var c = a.style;
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b
    }, setTranslate: function (a, b) {
        "use strict";
        var c = a.style, d = {
            x: b.x || 0,
            y: b.y || 0,
            z: b.z || 0
        }, e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px")
    }, setTransition: function (a, b) {
        "use strict";
        var c = a.style;
        c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms"
    }, support: {
        touch: window.Modernizr && Modernizr.touch === !0 || function () {
            "use strict";
            return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
            "use strict";
            var a = document.createElement("div").style;
            return "webkitPerspective"in a || "MozPerspective"in a || "OPerspective"in a || "MsPerspective"in a || "perspective"in a
        }(), transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
            "use strict";
            var a = document.createElement("div").style;
            return "transform"in a || "WebkitTransform"in a || "MozTransform"in a || "msTransform"in a || "MsTransform"in a || "OTransform"in a
        }(), transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
            "use strict";
            var a = document.createElement("div").style;
            return "transition"in a || "WebkitTransition"in a || "MozTransition"in a || "msTransition"in a || "MsTransition"in a || "OTransition"in a
        }(), classList: function () {
            "use strict";
            var a = document.createElement("div");
            return "classList"in a
        }()
    }, browser: {
        ie8: function () {
            "use strict";
            var a = -1;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var b = navigator.userAgent, c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                null !== c.exec(b) && (a = parseFloat(RegExp.$1))
            }
            return -1 !== a && 9 > a
        }(), ie10: window.navigator.msPointerEnabled, ie11: window.navigator.pointerEnabled
    }
}, (window.jQuery || window.Zepto) && !function (a) {
    "use strict";
    a.fn.swiper = function (b) {
        var c;
        return this.each(function (d) {
            var e = a(this);
            if (!e.data("swiper")) {
                var f = new Swiper(e[0], b);
                d || (c = f), e.data("swiper", f)
            }
        }), c
    }
}(window.jQuery || window.Zepto), "undefined" != typeof module && (module.exports = Swiper), "function" == typeof define && define.amd && define([], function () {
    "use strict";
    return Swiper
});


/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($, r) {
    var h, n = Array.prototype.slice, t = decodeURIComponent, a = $.param, j, c, m, y, b = $.bbq = $.bbq || {}, s, x, k, e = $.event.special, d = "hashchange", B = "querystring", F = "fragment", z = "elemUrlAttr", l = "href", w = "src", p = /^.*\?|#.*$/g, u, H, g, i, C, E = {};

    function G(I) {
        return typeof I === "string"
    }

    function D(J) {
        var I = n.call(arguments, 1);
        return function () {
            return J.apply(this, I.concat(n.call(arguments)))
        }
    }

    function o(I) {
        return I.replace(H, "$2")
    }

    function q(I) {
        return I.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    }

    function f(K, P, I, L, J) {
        var R, O, N, Q, M;
        if (L !== h) {
            N = I.match(K ? H : /^([^#?]*)\??([^#]*)(#?.*)/);
            M = N[3] || "";
            if (J === 2 && G(L)) {
                O = L.replace(K ? u : p, "")
            } else {
                Q = m(N[2]);
                L = G(L) ? m[K ? F : B](L) : L;
                O = J === 2 ? L : J === 1 ? $.extend({}, L, Q) : $.extend({}, Q, L);
                O = j(O);
                if (K) {
                    O = O.replace(g, t)
                }
            }
            R = N[1] + (K ? C : O || !N[1] ? "?" : "") + O + M
        } else {
            R = P(I !== h ? I : location.href)
        }
        return R
    }

    a[B] = D(f, 0, q);
    a[F] = c = D(f, 1, o);
    a.sorted = j = function (J, K) {
        var I = [], L = {};
        $.each(a(J, K).split("&"), function (P, M) {
            var O = M.replace(/(?:%5B|=).*$/, ""), N = L[O];
            if (!N) {
                N = L[O] = [];
                I.push(O)
            }
            N.push(M)
        });
        return $.map(I.sort(), function (M) {
            return L[M]
        }).join("&")
    };
    c.noEscape = function (J) {
        J = J || "";
        var I = $.map(J.split(""), encodeURIComponent);
        g = new RegExp(I.join("|"), "g")
    };
    c.noEscape(",/");
    c.ajaxCrawlable = function (I) {
        if (I !== h) {
            if (I) {
                u = /^.*(?:#!|#)/;
                H = /^([^#]*)(?:#!|#)?(.*)$/;
                C = "#!"
            } else {
                u = /^.*#/;
                H = /^([^#]*)#?(.*)$/;
                C = "#"
            }
            i = !!I
        }
        return i
    };
    c.ajaxCrawlable(0);
    $.deparam = m = function (L, I) {
        var K = {}, J = {"true": !0, "false": !1, "null": null};
        $.each(L.replace(/\+/g, " ").split("&"), function (O, T) {
            var N = T.split("="), S = t(N[0]), M, R = K, P = 0, U = S.split("]["), Q = U.length - 1;
            if (/\[/.test(U[0]) && /\]$/.test(U[Q])) {
                U[Q] = U[Q].replace(/\]$/, "");
                U = U.shift().split("[").concat(U);
                Q = U.length - 1
            } else {
                Q = 0
            }
            if (N.length === 2) {
                M = t(N[1]);
                if (I) {
                    M = M && !isNaN(M) ? +M : M === "undefined" ? h : J[M] !== h ? J[M] : M
                }
                if (Q) {
                    for (; P <= Q; P++) {
                        S = U[P] === "" ? R.length : U[P];
                        R = R[S] = P < Q ? R[S] || (U[P + 1] && isNaN(U[P + 1]) ? {} : []) : M
                    }
                } else {
                    if ($.isArray(K[S])) {
                        K[S].push(M)
                    } else {
                        if (K[S] !== h) {
                            K[S] = [K[S], M]
                        } else {
                            K[S] = M
                        }
                    }
                }
            } else {
                if (S) {
                    K[S] = I ? h : ""
                }
            }
        });
        return K
    };
    function A(K, I, J) {
        if (I === h || typeof I === "boolean") {
            J = I;
            I = a[K ? F : B]()
        } else {
            I = G(I) ? I.replace(K ? u : p, "") : I
        }
        return m(I, J)
    }

    m[B] = D(A, 0);
    m[F] = y = D(A, 1);
    $[z] || ($[z] = function (I) {
        return $.extend(E, I)
    })({a: l, base: l, iframe: w, img: w, input: w, form: "action", link: l, script: w});
    k = $[z];
    function v(L, J, K, I) {
        if (!G(K) && typeof K !== "object") {
            I = K;
            K = J;
            J = h
        }
        return this.each(function () {
            var O = $(this), M = J || k()[(this.nodeName || "").toLowerCase()] || "", N = M && O.attr(M) || "";
            O.attr(M, a[L](N, K, I))
        })
    }

    $.fn[B] = D(v, B);
    $.fn[F] = D(v, F);
    b.pushState = s = function (L, I) {
        if (G(L) && /^#/.test(L) && I === h) {
            I = 2
        }
        var K = L !== h, J = c(location.href, K ? L : {}, K ? I : 2);
        location.href = J
    };
    b.getState = x = function (I, J) {
        return I === h || typeof I === "boolean" ? y(I) : y(J)[I]
    };
    b.removeState = function (I) {
        var J = {};
        if (I !== h) {
            J = x();
            $.each($.isArray(I) ? I : arguments, function (L, K) {
                delete J[K]
            })
        }
        s(J, 2)
    };
    e[d] = $.extend(e[d], {
        add: function (I) {
            var K;

            function J(M) {
                var L = M[F] = c();
                M.getState = function (N, O) {
                    return N === h || typeof N === "boolean" ? m(L, N) : m(L, O)[N]
                };
                K.apply(this, arguments)
            }

            if ($.isFunction(I)) {
                K = I;
                return J
            } else {
                K = I.handler;
                I.handler = J
            }
        }
    })
})(jQuery, this);
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function (e, t, n) {
    "$:nomunge";
    function f(e) {
        e = e || location.href;
        return "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
    }

    var r = "hashchange", i = document, s, o = e.event.special, u = i.documentMode, a = "on" + r in t && (u === n || u > 7);
    e.fn[r] = function (e) {
        return e ? this.bind(r, e) : this.trigger(r)
    };
    e.fn[r].delay = 50;
    o[r] = e.extend(o[r], {
        setup: function () {
            if (a) {
                return false
            }
            e(s.start)
        }, teardown: function () {
            if (a) {
                return false
            }
            e(s.stop)
        }
    });
    s = function () {
        function p() {
            var n = f(), i = h(u);
            if (n !== u) {
                c(u = n, i);
                e(t).trigger(r)
            } else if (i !== u) {
                location.href = location.href.replace(/#.*/, "") + i
            }
            o = setTimeout(p, e.fn[r].delay)
        }

        var s = {}, o, u = f(), l = function (e) {
            return e
        }, c = l, h = l;
        s.start = function () {
            o || p()
        };
        s.stop = function () {
            o && clearTimeout(o);
            o = n
        };
        navigator.appName === "Microsoft Internet Explorer" && !a && function () {
            var t, n;
            s.start = function () {
                if (!t) {
                    n = e.fn[r].src;
                    n = n && n + f();
                    t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                        n || c(f());
                        p()
                    }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow;
                    i.onpropertychange = function () {
                        try {
                            if (event.propertyName === "title") {
                                t.document.title = i.title
                            }
                        } catch (e) {
                        }
                    }
                }
            };
            s.stop = l;
            h = function () {
                return f(t.location.href)
            };
            c = function (n, s) {
                var o = t.document, u = e.fn[r].domain;
                if (n !== s) {
                    o.title = i.title;
                    o.open();
                    u && o.write('<script>document.domain="' + u + '"</script>');
                    o.close();
                    t.location.hash = n
                }
            }
        }();
        return s
    }()
})(jQuery, this);


// Toastr v2.1.0
(function (e) {
    e(["jquery"], function (e) {
        return function () {
            function u(e, t, n) {
                return w({type: i.error, iconClass: E().iconClasses.error, message: e, optionsOverride: n, title: t})
            }

            function a(n, r) {
                if (!n) {
                    n = E()
                }
                t = e("#" + n.containerId);
                if (t.length) {
                    return t
                }
                if (r) {
                    t = g(n)
                }
                return t
            }

            function f(e, t, n) {
                return w({type: i.info, iconClass: E().iconClasses.info, message: e, optionsOverride: n, title: t})
            }

            function l(e) {
                n = e
            }

            function c(e, t, n) {
                return w({
                    type: i.success,
                    iconClass: E().iconClasses.success,
                    message: e,
                    optionsOverride: n,
                    title: t
                })
            }

            function h(e, t, n) {
                return w({
                    type: i.warning,
                    iconClass: E().iconClasses.warning,
                    message: e,
                    optionsOverride: n,
                    title: t
                })
            }

            function p(e) {
                var n = E();
                if (!t) {
                    a(n)
                }
                if (!m(e, n)) {
                    v(n)
                }
            }

            function d(n) {
                var r = E();
                if (!t) {
                    a(r)
                }
                if (n && e(":focus", n).length === 0) {
                    S(n);
                    return
                }
                if (t.children().length) {
                    t.remove()
                }
            }

            function v(n) {
                var r = t.children();
                for (var i = r.length - 1; i >= 0; i--) {
                    m(e(r[i]), n)
                }
            }

            function m(t, n) {
                if (t && e(":focus", t).length === 0) {
                    t[n.hideMethod]({
                        duration: n.hideDuration, easing: n.hideEasing, complete: function () {
                            S(t)
                        }
                    });
                    return true
                }
                return false
            }

            function g(n) {
                t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass).attr("aria-live", "polite").attr("role", "alert");
                t.appendTo(e(n.target));
                return t
            }

            function y() {
                return {
                    tapToDismiss: true,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: false,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: undefined,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: undefined,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    target: "body",
                    closeHtml: "<button>&times;</button>",
                    newestOnTop: true,
                    preventDuplicates: false
                }
            }

            function b(e) {
                if (!n) {
                    return
                }
                n(e)
            }

            function w(n) {
                function d(t) {
                    if (e(":focus", f).length && !t) {
                        return
                    }
                    return f[i.hideMethod]({
                        duration: i.hideDuration, easing: i.hideEasing, complete: function () {
                            S(f);
                            if (i.onHidden && p.state !== "hidden") {
                                i.onHidden()
                            }
                            p.state = "hidden";
                            p.endTime = new Date;
                            b(p)
                        }
                    })
                }

                function v() {
                    if (i.timeOut > 0 || i.extendedTimeOut > 0) {
                        u = setTimeout(d, i.extendedTimeOut)
                    }
                }

                function m() {
                    clearTimeout(u);
                    f.stop(true, true)[i.showMethod]({duration: i.showDuration, easing: i.showEasing})
                }

                var i = E(), s = n.iconClass || i.iconClass;
                if (i.preventDuplicates) {
                    if (n.message === o) {
                        return
                    } else {
                        o = n.message
                    }
                }
                if (typeof n.optionsOverride !== "undefined") {
                    i = e.extend(i, n.optionsOverride);
                    s = n.optionsOverride.iconClass || s
                }
                r++;
                t = a(i, true);
                var u = null, f = e("<div/>"), l = e("<div/>"), c = e("<div/>"), h = e(i.closeHtml), p = {
                    toastId: r,
                    state: "visible",
                    startTime: new Date,
                    options: i,
                    map: n
                };
                if (n.iconClass) {
                    f.addClass(i.toastClass).addClass(s)
                }
                if (n.title) {
                    l.append(n.title).addClass(i.titleClass);
                    f.append(l)
                }
                if (n.message) {
                    c.append(n.message).addClass(i.messageClass);
                    f.append(c)
                }
                if (i.closeButton) {
                    h.addClass("toast-close-button").attr("role", "button");
                    f.prepend(h)
                }
                f.hide();
                if (i.newestOnTop) {
                    t.prepend(f)
                } else {
                    t.append(f)
                }
                f[i.showMethod]({duration: i.showDuration, easing: i.showEasing, complete: i.onShown});
                if (i.timeOut > 0) {
                    u = setTimeout(d, i.timeOut)
                }
                f.hover(m, v);
                if (!i.onclick && i.tapToDismiss) {
                    f.click(d)
                }
                if (i.closeButton && h) {
                    h.click(function (e) {
                        if (e.stopPropagation) {
                            e.stopPropagation()
                        } else if (e.cancelBubble !== undefined && e.cancelBubble !== true) {
                            e.cancelBubble = true
                        }
                        d(true)
                    })
                }
                if (i.onclick) {
                    f.click(function () {
                        i.onclick();
                        d()
                    })
                }
                b(p);
                if (i.debug && console) {
                    console.log(p)
                }
                return f
            }

            function E() {
                return e.extend({}, y(), s.options)
            }

            function S(e) {
                if (!t) {
                    t = a()
                }
                if (e.is(":visible")) {
                    return
                }
                e.remove();
                e = null;
                if (t.children().length === 0) {
                    t.remove()
                }
            }

            var t;
            var n;
            var r = 0;
            var i = {error: "error", info: "info", success: "success", warning: "warning"};
            var s = {
                clear: p,
                remove: d,
                error: u,
                getContainer: a,
                info: f,
                options: {},
                subscribe: l,
                success: c,
                version: "2.1.0",
                warning: h
            };
            var o;
            return s
        }()
    })
})(typeof define === "function" && define.amd ? define : function (e, t) {
    if (typeof module !== "undefined" && module.exports) {
        module.exports = t(require("jquery"))
    } else {
        window["toastr"] = t(window["jQuery"])
    }
});


// ChartJS.org
var Chart = function (e) {
    function t(e, t, n) {
        e = s((e - t.graphMin) / (t.steps * t.stepValue), 1, 0);
        return n * t.steps * e
    }

    function n(e, t, n, r) {
        function i() {
            a += o;
            var f = e.animation ? s(u(a), null, 0) : 1;
            r.clearRect(0, 0, l, c);
            e.scaleOverlay ? (n(f), t()) : (t(), n(f));
            if (1 >= a)y(i); else if ("function" == typeof e.onAnimationComplete)e.onAnimationComplete()
        }

        var o = e.animation ? 1 / s(e.animationSteps, Number.MAX_VALUE, 1) : 1, u = f[e.animationEasing], a = e.animation ? 0 : 1;
        "function" !== typeof t && (t = function () {
        });
        y(i)
    }

    function r(e, t, n, r, s, o) {
        var u;
        e = Math.floor(Math.log(r - s) / Math.LN10);
        s = Math.floor(s / (1 * Math.pow(10, e))) * Math.pow(10, e);
        r = Math.ceil(r / (1 * Math.pow(10, e))) * Math.pow(10, e) - s;
        e = Math.pow(10, e);
        for (u = Math.round(r / e); u < n || u > t;)e = u < n ? e / 2 : 2 * e, u = Math.round(r / e);
        t = [];
        i(o, t, u, s, e);
        return {steps: u, stepValue: e, graphMin: s, labels: t}
    }

    function i(e, t, n, r, i) {
        if (e)for (var s = 1; s < n + 1; s++)t.push(u(e, {value: (r + i * s).toFixed(0 != i % 1 ? i.toString().split(".")[1].length : 0)}))
    }

    function s(e, t, n) {
        return !isNaN(parseFloat(t)) && isFinite(t) && e > t ? t : !isNaN(parseFloat(n)) && isFinite(n) && e < n ? n : e
    }

    function o(e, t) {
        var n = {}, r;
        for (r in e)n[r] = e[r];
        for (r in t)n[r] = t[r];
        return n
    }

    function u(e, t) {
        var n = !/\W/.test(e) ? b[e] = b[e] || u(document.getElementById(e).innerHTML) : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
        return t ? n(t) : n
    }

    var a = this, f = {
        linear: function (e) {
            return e
        }, easeInQuad: function (e) {
            return e * e
        }, easeOutQuad: function (e) {
            return -1 * e * (e - 2)
        }, easeInOutQuad: function (e) {
            return 1 > (e /= .5) ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
        }, easeInCubic: function (e) {
            return e * e * e
        }, easeOutCubic: function (e) {
            return 1 * ((e = e / 1 - 1) * e * e + 1)
        }, easeInOutCubic: function (e) {
            return 1 > (e /= .5) ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        }, easeInQuart: function (e) {
            return e * e * e * e
        }, easeOutQuart: function (e) {
            return -1 * ((e = e / 1 - 1) * e * e * e - 1)
        }, easeInOutQuart: function (e) {
            return 1 > (e /= .5) ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
        }, easeInQuint: function (e) {
            return 1 * (e /= 1) * e * e * e * e
        }, easeOutQuint: function (e) {
            return 1 * ((e = e / 1 - 1) * e * e * e * e + 1)
        }, easeInOutQuint: function (e) {
            return 1 > (e /= .5) ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        }, easeInSine: function (e) {
            return -1 * Math.cos(e / 1 * (Math.PI / 2)) + 1
        }, easeOutSine: function (e) {
            return 1 * Math.sin(e / 1 * (Math.PI / 2))
        }, easeInOutSine: function (e) {
            return -.5 * (Math.cos(Math.PI * e / 1) - 1)
        }, easeInExpo: function (e) {
            return 0 == e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1))
        }, easeOutExpo: function (e) {
            return 1 == e ? 1 : 1 * (-Math.pow(2, -10 * e / 1) + 1)
        }, easeInOutExpo: function (e) {
            return 0 == e ? 0 : 1 == e ? 1 : 1 > (e /= .5) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }, easeInCirc: function (e) {
            return 1 <= e ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1)
        }, easeOutCirc: function (e) {
            return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e)
        }, easeInOutCirc: function (e) {
            return 1 > (e /= .5) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }, easeInElastic: function (e) {
            var t = 1.70158, n = 0, r = 1;
            if (0 == e)return 0;
            if (1 == (e /= 1))return 1;
            n || (n = .3);
            r < Math.abs(1) ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * 2 * Math.PI / n))
        }, easeOutElastic: function (e) {
            var t = 1.70158, n = 0, r = 1;
            if (0 == e)return 0;
            if (1 == (e /= 1))return 1;
            n || (n = .3);
            r < Math.abs(1) ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r);
            return r * Math.pow(2, -10 * e) * Math.sin((1 * e - t) * 2 * Math.PI / n) + 1
        }, easeInOutElastic: function (e) {
            var t = 1.70158, n = 0, r = 1;
            if (0 == e)return 0;
            if (2 == (e /= .5))return 1;
            n || (n = 1 * .3 * 1.5);
            r < Math.abs(1) ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r);
            return 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * 2 * Math.PI / n) : .5 * r * Math.pow(2, -10 * (e -= 1)) * Math.sin((1 * e - t) * 2 * Math.PI / n) + 1
        }, easeInBack: function (e) {
            return 1 * (e /= 1) * e * (2.70158 * e - 1.70158)
        }, easeOutBack: function (e) {
            return 1 * ((e = e / 1 - 1) * e * (2.70158 * e + 1.70158) + 1)
        }, easeInOutBack: function (e) {
            var t = 1.70158;
            return 1 > (e /= .5) ? .5 * e * e * (((t *= 1.525) + 1) * e - t) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }, easeInBounce: function (e) {
            return 1 - f.easeOutBounce(1 - e)
        }, easeOutBounce: function (e) {
            return (e /= 1) < 1 / 2.75 ? 1 * 7.5625 * e * e : e < 2 / 2.75 ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }, easeInOutBounce: function (e) {
            return .5 > e ? .5 * f.easeInBounce(2 * e) : .5 * f.easeOutBounce(2 * e - 1) + .5
        }
    }, l = e.canvas.width, c = e.canvas.height;
    window.devicePixelRatio && (e.canvas.style.width = l + "px", e.canvas.style.height = c + "px", e.canvas.height = c * window.devicePixelRatio, e.canvas.width = l * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio));
    this.PolarArea = function (t, n) {
        a.PolarArea.defaults = {
            scaleOverlay: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var r = n ? o(a.PolarArea.defaults, n) : a.PolarArea.defaults;
        return new h(t, r, e)
    };
    this.Radar = function (t, n) {
        a.Radar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !1,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            angleShowLineOut: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 12,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var r = n ? o(a.Radar.defaults, n) : a.Radar.defaults;
        return new p(t, r, e)
    };
    this.Pie = function (t, n) {
        a.Pie.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var r = n ? o(a.Pie.defaults, n) : a.Pie.defaults;
        return new d(t, r, e)
    };
    this.Doughnut = function (t, n) {
        a.Doughnut.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var r = n ? o(a.Doughnut.defaults, n) : a.Doughnut.defaults;
        return new v(t, r, e)
    };
    this.Line = function (t, n) {
        a.Line.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            bezierCurve: !0,
            pointDot: !0,
            pointDotRadius: 4,
            pointDotStrokeWidth: 2,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var r = n ? o(a.Line.defaults, n) : a.Line.defaults;
        return new m(t, r, e)
    };
    this.Bar = function (t, n) {
        a.Bar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            barShowStroke: !0,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 1,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var r = n ? o(a.Bar.defaults, n) : a.Bar.defaults;
        return new g(t, r, e)
    };
    var h = function (e, s, o) {
        var u, a, f, h, p, d, v, m, g;
        p = Math.min.apply(Math, [l, c]) / 2;
        p -= Math.max.apply(Math, [.5 * s.scaleFontSize, .5 * s.scaleLineWidth]);
        h = 2 * s.scaleFontSize;
        s.scaleShowLabelBackdrop && (h += 2 * s.scaleBackdropPaddingY, p -= 1.5 * s.scaleBackdropPaddingY);
        m = p;
        h = h ? h : 5;
        u = Number.MIN_VALUE;
        a = Number.MAX_VALUE;
        for (f = 0; f < e.length; f++)e[f].value > u && (u = e[f].value), e[f].value < a && (a = e[f].value);
        f = Math.floor(m / (.66 * h));
        h = Math.floor(.5 * (m / h));
        g = s.scaleShowLabels ? s.scaleLabel : null;
        s.scaleOverride ? (v = {
            steps: s.scaleSteps,
            stepValue: s.scaleStepWidth,
            graphMin: s.scaleStartValue,
            labels: []
        }, i(g, v.labels, v.steps, s.scaleStartValue, s.scaleStepWidth)) : v = r(m, f, h, u, a, g);
        d = p / v.steps;
        n(s, function () {
            for (var e = 0; e < v.steps; e++)if (s.scaleShowLine && (o.beginPath(), o.arc(l / 2, c / 2, d * (e + 1), 0, 2 * Math.PI, !0), o.strokeStyle = s.scaleLineColor, o.lineWidth = s.scaleLineWidth, o.stroke()), s.scaleShowLabels) {
                o.textAlign = "center";
                o.font = s.scaleFontStyle + " " + s.scaleFontSize + "px " + s.scaleFontFamily;
                var t = v.labels[e];
                if (s.scaleShowLabelBackdrop) {
                    var n = o.measureText(t).width;
                    o.fillStyle = s.scaleBackdropColor;
                    o.beginPath();
                    o.rect(Math.round(l / 2 - n / 2 - s.scaleBackdropPaddingX), Math.round(c / 2 - d * (e + 1) - .5 * s.scaleFontSize - s.scaleBackdropPaddingY), Math.round(n + 2 * s.scaleBackdropPaddingX), Math.round(s.scaleFontSize + 2 * s.scaleBackdropPaddingY));
                    o.fill()
                }
                o.textBaseline = "middle";
                o.fillStyle = s.scaleFontColor;
                o.fillText(t, l / 2, c / 2 - d * (e + 1))
            }
        }, function (n) {
            var r = -Math.PI / 2, i = 2 * Math.PI / e.length, u = 1, a = 1;
            s.animation && (s.animateScale && (u = n), s.animateRotate && (a = n));
            for (n = 0; n < e.length; n++)o.beginPath(), o.arc(l / 2, c / 2, u * t(e[n].value, v, d), r, r + a * i, !1), o.lineTo(l / 2, c / 2), o.closePath(), o.fillStyle = e[n].color, o.fill(), s.segmentShowStroke && (o.strokeStyle = s.segmentStrokeColor, o.lineWidth = s.segmentStrokeWidth, o.stroke()), r += a * i
        }, o)
    }, p = function (e, o, u) {
        var a, f, h, p, d, v, m, g, y;
        e.labels || (e.labels = []);
        d = Math.min.apply(Math, [l, c]) / 2;
        p = 2 * o.scaleFontSize;
        for (a = g = 0; a < e.labels.length; a++)u.font = o.pointLabelFontStyle + " " + o.pointLabelFontSize + "px " + o.pointLabelFontFamily, f = u.measureText(e.labels[a]).width, f > g && (g = f);
        d -= Math.max.apply(Math, [g, 1.5 * (o.pointLabelFontSize / 2)]);
        d -= o.pointLabelFontSize;
        g = d = s(d, null, 0);
        p = p ? p : 5;
        a = Number.MIN_VALUE;
        f = Number.MAX_VALUE;
        for (h = 0; h < e.datasets.length; h++)for (y = 0; y < e.datasets[h].data.length; y++)e.datasets[h].data[y] > a && (a = e.datasets[h].data[y]), e.datasets[h].data[y] < f && (f = e.datasets[h].data[y]);
        h = Math.floor(g / (.66 * p));
        p = Math.floor(.5 * (g / p));
        y = o.scaleShowLabels ? o.scaleLabel : null;
        o.scaleOverride ? (m = {
            steps: o.scaleSteps,
            stepValue: o.scaleStepWidth,
            graphMin: o.scaleStartValue,
            labels: []
        }, i(y, m.labels, m.steps, o.scaleStartValue, o.scaleStepWidth)) : m = r(g, h, p, a, f, y);
        v = d / m.steps;
        n(o, function () {
            var t = 2 * Math.PI / e.datasets[0].data.length;
            u.save();
            u.translate(l / 2, c / 2);
            if (o.angleShowLineOut) {
                u.strokeStyle = o.angleLineColor;
                u.lineWidth = o.angleLineWidth;
                for (var n = 0; n < e.datasets[0].data.length; n++)u.rotate(t), u.beginPath(), u.moveTo(0, 0), u.lineTo(0, -d), u.stroke()
            }
            for (n = 0; n < m.steps; n++) {
                u.beginPath();
                if (o.scaleShowLine) {
                    u.strokeStyle = o.scaleLineColor;
                    u.lineWidth = o.scaleLineWidth;
                    u.moveTo(0, -v * (n + 1));
                    for (var r = 0; r < e.datasets[0].data.length; r++)u.rotate(t), u.lineTo(0, -v * (n + 1));
                    u.closePath();
                    u.stroke()
                }
                o.scaleShowLabels && (u.textAlign = "center", u.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily, u.textBaseline = "middle", o.scaleShowLabelBackdrop && (r = u.measureText(m.labels[n]).width, u.fillStyle = o.scaleBackdropColor, u.beginPath(), u.rect(Math.round(-r / 2 - o.scaleBackdropPaddingX), Math.round(-v * (n + 1) - .5 * o.scaleFontSize - o.scaleBackdropPaddingY), Math.round(r + 2 * o.scaleBackdropPaddingX), Math.round(o.scaleFontSize + 2 * o.scaleBackdropPaddingY)), u.fill()), u.fillStyle = o.scaleFontColor, u.fillText(m.labels[n], 0, -v * (n + 1)))
            }
            for (n = 0; n < e.labels.length; n++) {
                u.font = o.pointLabelFontStyle + " " + o.pointLabelFontSize + "px " + o.pointLabelFontFamily;
                u.fillStyle = o.pointLabelFontColor;
                var r = Math.sin(t * n) * (d + o.pointLabelFontSize), i = Math.cos(t * n) * (d + o.pointLabelFontSize);
                u.textAlign = t * n == Math.PI || 0 == t * n ? "center" : t * n > Math.PI ? "right" : "left";
                u.textBaseline = "middle";
                u.fillText(e.labels[n], r, -i)
            }
            u.restore()
        }, function (n) {
            var r = 2 * Math.PI / e.datasets[0].data.length;
            u.save();
            u.translate(l / 2, c / 2);
            for (var i = 0; i < e.datasets.length; i++) {
                u.beginPath();
                u.moveTo(0, n * -1 * t(e.datasets[i].data[0], m, v));
                for (var s = 1; s < e.datasets[i].data.length; s++)u.rotate(r), u.lineTo(0, n * -1 * t(e.datasets[i].data[s], m, v));
                u.closePath();
                u.fillStyle = e.datasets[i].fillColor;
                u.strokeStyle = e.datasets[i].strokeColor;
                u.lineWidth = o.datasetStrokeWidth;
                u.fill();
                u.stroke();
                if (o.pointDot) {
                    u.fillStyle = e.datasets[i].pointColor;
                    u.strokeStyle = e.datasets[i].pointStrokeColor;
                    u.lineWidth = o.pointDotStrokeWidth;
                    for (s = 0; s < e.datasets[i].data.length; s++)u.rotate(r), u.beginPath(), u.arc(0, n * -1 * t(e.datasets[i].data[s], m, v), o.pointDotRadius, 2 * Math.PI, !1), u.fill(), u.stroke()
                }
                u.rotate(r)
            }
            u.restore()
        }, u)
    }, d = function (e, t, r) {
        for (var i = 0, s = Math.min.apply(Math, [c / 2, l / 2]) - 5, o = 0; o < e.length; o++)i += e[o].value;
        n(t, null, function (n) {
            var o = -Math.PI / 2, u = 1, a = 1;
            t.animation && (t.animateScale && (u = n), t.animateRotate && (a = n));
            for (n = 0; n < e.length; n++) {
                var f = a * e[n].value / i * 2 * Math.PI;
                r.beginPath();
                r.arc(l / 2, c / 2, u * s, o, o + f);
                r.lineTo(l / 2, c / 2);
                r.closePath();
                r.fillStyle = e[n].color;
                r.fill();
                t.segmentShowStroke && (r.lineWidth = t.segmentStrokeWidth, r.strokeStyle = t.segmentStrokeColor, r.stroke());
                o += f
            }
        }, r)
    }, v = function (e, t, r) {
        for (var i = 0, s = Math.min.apply(Math, [c / 2, l / 2]) - 5, o = s * (t.percentageInnerCutout / 100), u = 0; u < e.length; u++)i += e[u].value;
        n(t, null, function (n) {
            var u = -Math.PI / 2, a = 1, f = 1;
            t.animation && (t.animateScale && (a = n), t.animateRotate && (f = n));
            for (n = 0; n < e.length; n++) {
                var h = f * e[n].value / i * 2 * Math.PI;
                r.beginPath();
                r.arc(l / 2, c / 2, a * s, u, u + h, !1);
                r.arc(l / 2, c / 2, a * o, u + h, u, !0);
                r.closePath();
                r.fillStyle = e[n].color;
                r.fill();
                t.segmentShowStroke && (r.lineWidth = t.segmentStrokeWidth, r.strokeStyle = t.segmentStrokeColor, r.stroke());
                u += h
            }
        }, r)
    }, m = function (e, s, o) {
        var u, a, f, h, p, d, v, m, g, y, b, w, E, S = 0;
        p = c;
        o.font = s.scaleFontStyle + " " + s.scaleFontSize + "px " + s.scaleFontFamily;
        y = 1;
        for (h = 0; h < e.labels.length; h++)u = o.measureText(e.labels[h]).width, y = u > y ? u : y;
        l / e.labels.length < y ? (S = 45, l / e.labels.length < Math.cos(S) * y ? (S = 90, p -= y) : p -= Math.sin(S) * y) : p -= s.scaleFontSize;
        h = s.scaleFontSize;
        p = p - 5 - h;
        u = Number.MIN_VALUE;
        a = Number.MAX_VALUE;
        for (f = 0; f < e.datasets.length; f++)for (m = 0; m < e.datasets[f].data.length; m++)e.datasets[f].data[m] > u && (u = e.datasets[f].data[m]), e.datasets[f].data[m] < a && (a = e.datasets[f].data[m]);
        f = Math.floor(p / (.66 * h));
        h = Math.floor(.5 * (p / h));
        m = s.scaleShowLabels ? s.scaleLabel : "";
        s.scaleOverride ? (v = {
            steps: s.scaleSteps,
            stepValue: s.scaleStepWidth,
            graphMin: s.scaleStartValue,
            labels: []
        }, i(m, v.labels, v.steps, s.scaleStartValue, s.scaleStepWidth)) : v = r(p, f, h, u, a, m);
        d = Math.floor(p / v.steps);
        h = 1;
        if (s.scaleShowLabels) {
            o.font = s.scaleFontStyle + " " + s.scaleFontSize + "px " + s.scaleFontFamily;
            for (u = 0; u < v.labels.length; u++)a = o.measureText(v.labels[u]).width, h = a > h ? a : h;
            h += 10
        }
        b = l - h - y;
        g = Math.floor(b / (e.labels.length - 1));
        w = l - y / 2 - b;
        E = p + s.scaleFontSize / 2;
        n(s, function () {
            o.lineWidth = s.scaleLineWidth;
            o.strokeStyle = s.scaleLineColor;
            o.beginPath();
            o.moveTo(l - y / 2 + 5, E);
            o.lineTo(l - y / 2 - b - 5, E);
            o.stroke();
            0 < S ? (o.save(), o.textAlign = "right") : o.textAlign = "center";
            o.fillStyle = s.scaleFontColor;
            for (var t = 0; t < e.labels.length; t++)o.save(), 0 < S ? (o.translate(w + t * g, E + s.scaleFontSize), o.rotate(-(S * (Math.PI / 180))), o.fillText(e.labels[t], 0, 0), o.restore()) : o.fillText(e.labels[t], w + t * g, E + s.scaleFontSize + 3), o.beginPath(), o.moveTo(w + t * g, E + 3), s.scaleShowGridLines && 0 < t ? (o.lineWidth = s.scaleGridLineWidth, o.strokeStyle = s.scaleGridLineColor, o.lineTo(w + t * g, 5)) : o.lineTo(w + t * g, E + 3), o.stroke();
            o.lineWidth = s.scaleLineWidth;
            o.strokeStyle = s.scaleLineColor;
            o.beginPath();
            o.moveTo(w, E + 5);
            o.lineTo(w, 5);
            o.stroke();
            o.textAlign = "right";
            o.textBaseline = "middle";
            for (t = 0; t < v.steps; t++)o.beginPath(), o.moveTo(w - 3, E - (t + 1) * d), s.scaleShowGridLines ? (o.lineWidth = s.scaleGridLineWidth, o.strokeStyle = s.scaleGridLineColor, o.lineTo(w + b + 5, E - (t + 1) * d)) : o.lineTo(w - .5, E - (t + 1) * d), o.stroke(), s.scaleShowLabels && o.fillText(v.labels[t], w - 8, E - (t + 1) * d)
        }, function (n) {
            function r(r, i) {
                return E - n * t(e.datasets[r].data[i], v, d)
            }

            for (var i = 0; i < e.datasets.length; i++) {
                o.strokeStyle = e.datasets[i].strokeColor;
                o.lineWidth = s.datasetStrokeWidth;
                o.beginPath();
                o.moveTo(w, E - n * t(e.datasets[i].data[0], v, d));
                for (var u = 1; u < e.datasets[i].data.length; u++)s.bezierCurve ? o.bezierCurveTo(w + g * (u - .5), r(i, u - 1), w + g * (u - .5), r(i, u), w + g * u, r(i, u)) : o.lineTo(w + g * u, r(i, u));
                o.stroke();
                s.datasetFill ? (o.lineTo(w + g * (e.datasets[i].data.length - 1), E), o.lineTo(w, E), o.closePath(), o.fillStyle = e.datasets[i].fillColor, o.fill()) : o.closePath();
                if (s.pointDot) {
                    o.fillStyle = e.datasets[i].pointColor;
                    o.strokeStyle = e.datasets[i].pointStrokeColor;
                    o.lineWidth = s.pointDotStrokeWidth;
                    for (u = 0; u < e.datasets[i].data.length; u++)o.beginPath(), o.arc(w + g * u, E - n * t(e.datasets[i].data[u], v, d), s.pointDotRadius, 0, 2 * Math.PI, !0), o.fill(), o.stroke()
                }
            }
        }, o)
    }, g = function (e, s, o) {
        var u, a, f, h, p, d, v, m, g, y, b, w, E, S, T = 0;
        p = c;
        o.font = s.scaleFontStyle + " " + s.scaleFontSize + "px " + s.scaleFontFamily;
        y = 1;
        for (h = 0; h < e.labels.length; h++)u = o.measureText(e.labels[h]).width, y = u > y ? u : y;
        l / e.labels.length < y ? (T = 45, l / e.labels.length < Math.cos(T) * y ? (T = 90, p -= y) : p -= Math.sin(T) * y) : p -= s.scaleFontSize;
        h = s.scaleFontSize;
        p = p - 5 - h;
        u = Number.MIN_VALUE;
        a = Number.MAX_VALUE;
        for (f = 0; f < e.datasets.length; f++)for (m = 0; m < e.datasets[f].data.length; m++)e.datasets[f].data[m] > u && (u = e.datasets[f].data[m]), e.datasets[f].data[m] < a && (a = e.datasets[f].data[m]);
        f = Math.floor(p / (.66 * h));
        h = Math.floor(.5 * (p / h));
        m = s.scaleShowLabels ? s.scaleLabel : "";
        s.scaleOverride ? (v = {
            steps: s.scaleSteps,
            stepValue: s.scaleStepWidth,
            graphMin: s.scaleStartValue,
            labels: []
        }, i(m, v.labels, v.steps, s.scaleStartValue, s.scaleStepWidth)) : v = r(p, f, h, u, a, m);
        d = Math.floor(p / v.steps);
        h = 1;
        if (s.scaleShowLabels) {
            o.font = s.scaleFontStyle + " " + s.scaleFontSize + "px " + s.scaleFontFamily;
            for (u = 0; u < v.labels.length; u++)a = o.measureText(v.labels[u]).width, h = a > h ? a : h;
            h += 10
        }
        b = l - h - y;
        g = Math.floor(b / e.labels.length);
        S = (g - 2 * s.scaleGridLineWidth - 2 * s.barValueSpacing - (s.barDatasetSpacing * e.datasets.length - 1) - (s.barStrokeWidth / 2 * e.datasets.length - 1)) / e.datasets.length;
        w = l - y / 2 - b;
        E = p + s.scaleFontSize / 2;
        n(s, function () {
            o.lineWidth = s.scaleLineWidth;
            o.strokeStyle = s.scaleLineColor;
            o.beginPath();
            o.moveTo(l - y / 2 + 5, E);
            o.lineTo(l - y / 2 - b - 5, E);
            o.stroke();
            0 < T ? (o.save(), o.textAlign = "right") : o.textAlign = "center";
            o.fillStyle = s.scaleFontColor;
            for (var t = 0; t < e.labels.length; t++)o.save(), 0 < T ? (o.translate(w + t * g, E + s.scaleFontSize), o.rotate(-(T * (Math.PI / 180))), o.fillText(e.labels[t], 0, 0), o.restore()) : o.fillText(e.labels[t], w + t * g + g / 2, E + s.scaleFontSize + 3), o.beginPath(), o.moveTo(w + (t + 1) * g, E + 3), o.lineWidth = s.scaleGridLineWidth, o.strokeStyle = s.scaleGridLineColor, o.lineTo(w + (t + 1) * g, 5), o.stroke();
            o.lineWidth = s.scaleLineWidth;
            o.strokeStyle = s.scaleLineColor;
            o.beginPath();
            o.moveTo(w, E + 5);
            o.lineTo(w, 5);
            o.stroke();
            o.textAlign = "right";
            o.textBaseline = "middle";
            for (t = 0; t < v.steps; t++)o.beginPath(), o.moveTo(w - 3, E - (t + 1) * d), s.scaleShowGridLines ? (o.lineWidth = s.scaleGridLineWidth, o.strokeStyle = s.scaleGridLineColor, o.lineTo(w + b + 5, E - (t + 1) * d)) : o.lineTo(w - .5, E - (t + 1) * d), o.stroke(), s.scaleShowLabels && o.fillText(v.labels[t], w - 8, E - (t + 1) * d)
        }, function (n) {
            o.lineWidth = s.barStrokeWidth;
            for (var r = 0; r < e.datasets.length; r++) {
                o.fillStyle = e.datasets[r].fillColor;
                o.strokeStyle = e.datasets[r].strokeColor;
                for (var i = 0; i < e.datasets[r].data.length; i++) {
                    var u = w + s.barValueSpacing + g * i + S * r + s.barDatasetSpacing * r + s.barStrokeWidth * r;
                    o.beginPath();
                    o.moveTo(u, E);
                    o.lineTo(u, E - n * t(e.datasets[r].data[i], v, d) + s.barStrokeWidth / 2);
                    o.lineTo(u + S, E - n * t(e.datasets[r].data[i], v, d) + s.barStrokeWidth / 2);
                    o.lineTo(u + S, E);
                    s.barShowStroke && o.stroke();
                    o.closePath();
                    o.fill()
                }
            }
        }, o)
    }, y = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
        }, b = {}
};
window.Modernizr = function (e, t, n) {
    function r(e) {
        p.cssText = e
    }

    function i(e, t) {
        return r(prefixes.join(e + ";") + (t || ""))
    }

    function s(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e, t, r) {
        for (var i in e) {
            var o = t[e[i]];
            if (o !== n)return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
        }
        return !1
    }

    var a = "2.6.2", f = {}, l = t.documentElement, c = "modernizr", h = t.createElement(c), p = h.style, d, v = {}.toString, m = {}, g = {}, y = {}, b = [], w = b.slice, E, S = {}.hasOwnProperty, x;
    !s(S, "undefined") && !s(S.call, "undefined") ? x = function (e, t) {
        return S.call(e, t)
    } : x = function (e, t) {
        return t in e && s(e.constructor.prototype[t], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if (typeof t != "function")throw new TypeError;
        var n = w.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var i = function () {
                };
                i.prototype = t.prototype;
                var s = new i, o = t.apply(s, n.concat(w.call(arguments)));
                return Object(o) === o ? o : s
            }
            return t.apply(e, n.concat(w.call(arguments)))
        };
        return r
    }), m.canvas = function () {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d")
    };
    for (var T in m)x(m, T) && (E = T.toLowerCase(), f[E] = m[T](), b.push((f[E] ? "" : "no-") + E));
    return f.addTest = function (e, t) {
        if (typeof e == "object")for (var r in e)x(e, r) && f.addTest(r, e[r]); else {
            e = e.toLowerCase();
            if (f[e] !== n)return f;
            t = typeof t == "function" ? t() : t, typeof enableClasses != "undefined" && enableClasses && (l.className += " " + (t ? "" : "no-") + e), f[e] = t
        }
        return f
    }, r(""), h = d = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = g.elements;
            return typeof e == "string" ? e.split(" ") : e
        }

        function i(e) {
            var t = v[e[p]];
            return t || (t = {}, d++, e[p] = d, v[d] = t), t
        }

        function s(e, n, r) {
            n || (n = t);
            if (m)return n.createElement(e);
            r || (r = i(n));
            var s;
            return r.cache[e] ? s = r.cache[e].cloneNode() : c.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !l.test(e) ? r.frag.appendChild(s) : s
        }

        function o(e, n) {
            e || (e = t);
            if (m)return e.createDocumentFragment();
            n = n || i(e);
            var s = n.frag.cloneNode(), o = 0, u = r(), a = u.length;
            for (; o < a; o++)s.createElement(u[o]);
            return s
        }

        function u(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return g.shivMethods ? s(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(g, t.frag)
        }

        function a(e) {
            e || (e = t);
            var r = i(e);
            return g.shivCSS && !h && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || u(e, r), e
        }

        var f = e.html5 || {}, l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h, p = "_html5shiv", d = 0, v = {}, m;
        (function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", h = "hidden"in e, m = e.childNodes.length == 1 || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                }()
            } catch (n) {
                h = !0, m = !0
            }
        })();
        var g = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: m,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: a,
            createElement: s,
            createDocumentFragment: o
        };
        e.html5 = g, a(t)
    }(this, t), f._version = a, f
}(this, this.document), function (e, t, n) {
    function r(e) {
        return "[object Function]" == d.call(e)
    }

    function i(e) {
        return "string" == typeof e
    }

    function s() {
    }

    function o(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function u() {
        var e = v.shift();
        m = 1, e ? e.t ? h(function () {
            ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), u()) : m = 0
    }

    function a(e, n, r, i, s, a, f) {
        function l(t) {
            if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                "img" != e && h(function () {
                    b.removeChild(c)
                }, 50);
                for (var r in T[n])T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }

        var f = f || k.errorTimeout, c = t.createElement(e), d = 0, g = 0, w = {t: r, s: n, e: s, a: a, x: f};
        1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function () {
            l.call(this, g)
        }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
    }

    function f(e, t, n, r, s) {
        return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
    }

    function l() {
        var e = k;
        return e.loader = {load: f, i: 0}, e
    }

    var c = t.documentElement, h = e.setTimeout, p = t.getElementsByTagName("script")[0], d = {}.toString, v = [], m = 0, g = "MozAppearance"in c.style, y = g && !!t.createRange().compareNode, b = y ? c : p.parentNode, c = e.opera && "[object Opera]" == d.call(e.opera), c = !!t.attachEvent && !c, w = g ? "object" : c ? "script" : "img", E = c ? "script" : w, S = Array.isArray || function (e) {
            return "[object Array]" == d.call(e)
        }, x = [], T = {}, N = {
        timeout: function (e, t) {
            return t.length && (e.timeout = t[0]), e
        }
    }, C, k;
    k = function (e) {
        function t(e) {
            var e = e.split("!"), t = x.length, n = e.pop(), r = e.length, n = {
                url: n,
                origUrl: n,
                prefixes: e
            }, i, s, o;
            for (s = 0; s < r; s++)o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
            for (s = 0; s < t; s++)n = x[s](n);
            return n
        }

        function o(e, i, s, o, u) {
            var a = t(e), f = a.autoCallback;
            a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function () {
                l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
            })))
        }

        function u(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e))n || (f = function () {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c()
                    }), o(e, f, t, 0, u); else if (Object(e) === e)for (p in h = function () {
                        var t = 0, n;
                        for (n in e)e.hasOwnProperty(n) && t++;
                        return t
                    }(), e)e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function () {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c()
                    } : f[p] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), c()
                        }
                    }(l[p])), o(e[p], f, t, p, u))
                } else!n && c()
            }

            var u = !!e.test, a = e.load || e.both, f = e.callback || s, l = f, c = e.complete || s, h, p;
            n(u ? e.yep : e.nope, !!a), a && n(a)
        }

        var a, f, c = this.yepnope.loader;
        if (i(e))o(e, 0, c, 0); else if (S(e))for (a = 0; a < e.length; a++)f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c); else Object(e) === e && u(e, c)
    }, k.addPrefix = function (e, t) {
        N[e] = t
    }, k.addFilter = function (e) {
        x.push(e)
    }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function () {
        t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
    }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function (e, n, r, i, a, f) {
        var l = t.createElement("script"), c, d, i = i || k.errorTimeout;
        l.src = e;
        for (d in r)l.setAttribute(d, r[d]);
        n = f ? u : n || s, l.onreadystatechange = l.onload = function () {
            !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
        }, h(function () {
            c || (c = 1, n(1))
        }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
    }, e.yepnope.injectCss = function (e, n, r, i, o, a) {
        var i = t.createElement("link"), f, n = a ? u : n || s;
        i.href = e, i.rel = "stylesheet", i.type = "text/css";
        for (f in r)i.setAttribute(f, r[f]);
        o || (p.parentNode.insertBefore(i, p), h(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};


/*
 * jQuery Form Plugin; v20131228
 * http://jquery.malsup.com/form/
 * Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
 * https://github.com/malsup/form#copyright-and-license
 */
;
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (a) {
    "use strict";
    function b(b) {
        var c = b.data;
        b.isDefaultPrevented() || (b.preventDefault(), a(b.target).ajaxSubmit(c))
    }

    function c(b) {
        var c = b.target, d = a(c);
        if (!d.is("[type=submit],[type=image]")) {
            var e = d.closest("[type=submit]");
            if (0 === e.length)return;
            c = e[0]
        }
        var f = this;
        if (f.clk = c, "image" == c.type)if (void 0 !== b.offsetX)f.clk_x = b.offsetX, f.clk_y = b.offsetY; else if ("function" == typeof a.fn.offset) {
            var g = d.offset();
            f.clk_x = b.pageX - g.left, f.clk_y = b.pageY - g.top
        } else f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop;
        setTimeout(function () {
            f.clk = f.clk_x = f.clk_y = null
        }, 100)
    }

    function d() {
        if (a.fn.ajaxSubmit.debug) {
            var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b)
        }
    }

    var e = {};
    e.fileapi = void 0 !== a("<input type='file'/>").get(0).files, e.formdata = void 0 !== window.FormData;
    var f = !!a.fn.prop;
    a.fn.attr2 = function () {
        if (!f)return this.attr.apply(this, arguments);
        var a = this.prop.apply(this, arguments);
        return a && a.jquery || "string" == typeof a ? a : this.attr.apply(this, arguments)
    }, a.fn.ajaxSubmit = function (b) {
        function c(c) {
            var d, e, f = a.param(c, b.traditional).split("&"), g = f.length, h = [];
            for (d = 0; g > d; d++)f[d] = f[d].replace(/\+/g, " "), e = f[d].split("="), h.push([decodeURIComponent(e[0]), decodeURIComponent(e[1])]);
            return h
        }

        function g(d) {
            for (var e = new FormData, f = 0; f < d.length; f++)e.append(d[f].name, d[f].value);
            if (b.extraData) {
                var g = c(b.extraData);
                for (f = 0; f < g.length; f++)g[f] && e.append(g[f][0], g[f][1])
            }
            b.data = null;
            var h = a.extend(!0, {}, a.ajaxSettings, b, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: i || "POST"
            });
            b.uploadProgress && (h.xhr = function () {
                var c = a.ajaxSettings.xhr();
                return c.upload && c.upload.addEventListener("progress", function (a) {
                    var c = 0, d = a.loaded || a.position, e = a.total;
                    a.lengthComputable && (c = Math.ceil(d / e * 100)), b.uploadProgress(a, d, e, c)
                }, !1), c
            }), h.data = null;
            var j = h.beforeSend;
            return h.beforeSend = function (a, c) {
                c.data = b.formData ? b.formData : e, j && j.call(this, a, c)
            }, a.ajax(h)
        }

        function h(c) {
            function e(a) {
                var b = null;
                try {
                    a.contentWindow && (b = a.contentWindow.document)
                } catch (c) {
                    d("cannot get iframe.contentWindow document: " + c)
                }
                if (b)return b;
                try {
                    b = a.contentDocument ? a.contentDocument : a.document
                } catch (c) {
                    d("cannot get iframe.contentDocument: " + c), b = a.document
                }
                return b
            }

            function g() {
                function b() {
                    try {
                        var a = e(r).readyState;
                        d("state = " + a), a && "uninitialized" == a.toLowerCase() && setTimeout(b, 50)
                    } catch (c) {
                        d("Server abort: ", c, " (", c.name, ")"), h(A), w && clearTimeout(w), w = void 0
                    }
                }

                var c = l.attr2("target"), f = l.attr2("action"), g = "multipart/form-data", j = l.attr("enctype") || l.attr("encoding") || g;
                x.setAttribute("target", o), (!i || /post/i.test(i)) && x.setAttribute("method", "POST"), f != m.url && x.setAttribute("action", m.url), m.skipEncodingOverride || i && !/post/i.test(i) || l.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (w = setTimeout(function () {
                    v = !0, h(z)
                }, m.timeout));
                var k = [];
                try {
                    if (m.extraData)for (var n in m.extraData)m.extraData.hasOwnProperty(n) && (a.isPlainObject(m.extraData[n]) && m.extraData[n].hasOwnProperty("name") && m.extraData[n].hasOwnProperty("value") ? k.push(a('<input type="hidden" name="' + m.extraData[n].name + '">').val(m.extraData[n].value).appendTo(x)[0]) : k.push(a('<input type="hidden" name="' + n + '">').val(m.extraData[n]).appendTo(x)[0]));
                    m.iframeTarget || q.appendTo("body"), r.attachEvent ? r.attachEvent("onload", h) : r.addEventListener("load", h, !1), setTimeout(b, 15);
                    try {
                        x.submit()
                    } catch (p) {
                        var s = document.createElement("form").submit;
                        s.apply(x)
                    }
                } finally {
                    x.setAttribute("action", f), x.setAttribute("enctype", j), c ? x.setAttribute("target", c) : l.removeAttr("target"), a(k).remove()
                }
            }

            function h(b) {
                if (!s.aborted && !F) {
                    if (E = e(r), E || (d("cannot access response document"), b = A), b === z && s)return s.abort("timeout"), y.reject(s, "timeout"), void 0;
                    if (b == A && s)return s.abort("server abort"), y.reject(s, "error", "server abort"), void 0;
                    if (E && E.location.href != m.iframeSrc || v) {
                        r.detachEvent ? r.detachEvent("onload", h) : r.removeEventListener("load", h, !1);
                        var c, f = "success";
                        try {
                            if (v)throw"timeout";
                            var g = "xml" == m.dataType || E.XMLDocument || a.isXMLDoc(E);
                            if (d("isXml=" + g), !g && window.opera && (null === E.body || !E.body.innerHTML) && --G)return d("requeing onLoad callback, DOM not available"), setTimeout(h, 250), void 0;
                            var i = E.body ? E.body : E.documentElement;
                            s.responseText = i ? i.innerHTML : null, s.responseXML = E.XMLDocument ? E.XMLDocument : E, g && (m.dataType = "xml"), s.getResponseHeader = function (a) {
                                var b = {"content-type": m.dataType};
                                return b[a.toLowerCase()]
                            }, i && (s.status = Number(i.getAttribute("status")) || s.status, s.statusText = i.getAttribute("statusText") || s.statusText);
                            var j = (m.dataType || "").toLowerCase(), k = /(json|script|text)/.test(j);
                            if (k || m.textarea) {
                                var l = E.getElementsByTagName("textarea")[0];
                                if (l)s.responseText = l.value, s.status = Number(l.getAttribute("status")) || s.status, s.statusText = l.getAttribute("statusText") || s.statusText; else if (k) {
                                    var o = E.getElementsByTagName("pre")[0], p = E.getElementsByTagName("body")[0];
                                    o ? s.responseText = o.textContent ? o.textContent : o.innerText : p && (s.responseText = p.textContent ? p.textContent : p.innerText)
                                }
                            } else"xml" == j && !s.responseXML && s.responseText && (s.responseXML = H(s.responseText));
                            try {
                                D = J(s, j, m)
                            } catch (t) {
                                f = "parsererror", s.error = c = t || f
                            }
                        } catch (t) {
                            d("error caught: ", t), f = "error", s.error = c = t || f
                        }
                        s.aborted && (d("upload aborted"), f = null), s.status && (f = s.status >= 200 && s.status < 300 || 304 === s.status ? "success" : "error"), "success" === f ? (m.success && m.success.call(m.context, D, "success", s), y.resolve(s.responseText, "success", s), n && a.event.trigger("ajaxSuccess", [s, m])) : f && (void 0 === c && (c = s.statusText), m.error && m.error.call(m.context, s, f, c), y.reject(s, "error", c), n && a.event.trigger("ajaxError", [s, m, c])), n && a.event.trigger("ajaxComplete", [s, m]), n && !--a.active && a.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, s, f), F = !0, m.timeout && clearTimeout(w), setTimeout(function () {
                            m.iframeTarget ? q.attr("src", m.iframeSrc) : q.remove(), s.responseXML = null
                        }, 100)
                    }
                }
            }

            var j, k, m, n, o, q, r, s, t, u, v, w, x = l[0], y = a.Deferred();
            if (y.abort = function (a) {
                    s.abort(a)
                }, c)for (k = 0; k < p.length; k++)j = a(p[k]), f ? j.prop("disabled", !1) : j.removeAttr("disabled");
            if (m = a.extend(!0, {}, a.ajaxSettings, b), m.context = m.context || m, o = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (q = a(m.iframeTarget), u = q.attr2("name"), u ? o = u : q.attr2("name", o)) : (q = a('<iframe name="' + o + '" src="' + m.iframeSrc + '" />'), q.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), r = q[0], s = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {
                    },
                    getResponseHeader: function () {
                    },
                    setRequestHeader: function () {
                    },
                    abort: function (b) {
                        var c = "timeout" === b ? "timeout" : "aborted";
                        d("aborting upload... " + c), this.aborted = 1;
                        try {
                            r.contentWindow.document.execCommand && r.contentWindow.document.execCommand("Stop")
                        } catch (e) {
                        }
                        q.attr("src", m.iframeSrc), s.error = c, m.error && m.error.call(m.context, s, c, b), n && a.event.trigger("ajaxError", [s, m, c]), m.complete && m.complete.call(m.context, s, c)
                    }
                }, n = m.global, n && 0 === a.active++ && a.event.trigger("ajaxStart"), n && a.event.trigger("ajaxSend", [s, m]), m.beforeSend && m.beforeSend.call(m.context, s, m) === !1)return m.global && a.active--, y.reject(), y;
            if (s.aborted)return y.reject(), y;
            t = x.clk, t && (u = t.name, u && !t.disabled && (m.extraData = m.extraData || {}, m.extraData[u] = t.value, "image" == t.type && (m.extraData[u + ".x"] = x.clk_x, m.extraData[u + ".y"] = x.clk_y)));
            var z = 1, A = 2, B = a("meta[name=csrf-token]").attr("content"), C = a("meta[name=csrf-param]").attr("content");
            C && B && (m.extraData = m.extraData || {}, m.extraData[C] = B), m.forceSync ? g() : setTimeout(g, 10);
            var D, E, F, G = 50, H = a.parseXML || function (a, b) {
                    return window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"), b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null
                }, I = a.parseJSON || function (a) {
                    return window.eval("(" + a + ")")
                }, J = function (b, c, d) {
                var e = b.getResponseHeader("content-type") || "", f = "xml" === c || !c && e.indexOf("xml") >= 0, g = f ? b.responseXML : b.responseText;
                return f && "parsererror" === g.documentElement.nodeName && a.error && a.error("parsererror"), d && d.dataFilter && (g = d.dataFilter(g, c)), "string" == typeof g && ("json" === c || !c && e.indexOf("json") >= 0 ? g = I(g) : ("script" === c || !c && e.indexOf("javascript") >= 0) && a.globalEval(g)), g
            };
            return y
        }

        if (!this.length)return d("ajaxSubmit: skipping submit process - no element selected"), this;
        var i, j, k, l = this;
        "function" == typeof b ? b = {success: b} : void 0 === b && (b = {}), i = b.type || this.attr2("method"), j = b.url || this.attr2("action"), k = "string" == typeof j ? a.trim(j) : "", k = k || window.location.href || "", k && (k = (k.match(/^([^#]+)/) || [])[1]), b = a.extend(!0, {
            url: k,
            success: a.ajaxSettings.success,
            type: i || a.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, b);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, b, m]), m.veto)return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (b.beforeSerialize && b.beforeSerialize(this, b) === !1)return d("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var n = b.traditional;
        void 0 === n && (n = a.ajaxSettings.traditional);
        var o, p = [], q = this.formToArray(b.semantic, p);
        if (b.data && (b.extraData = b.data, o = a.param(b.data, n)), b.beforeSubmit && b.beforeSubmit(q, this, b) === !1)return d("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [q, this, b, m]), m.veto)return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var r = a.param(q, n);
        o && (r = r ? r + "&" + o : o), "GET" == b.type.toUpperCase() ? (b.url += (b.url.indexOf("?") >= 0 ? "&" : "?") + r, b.data = null) : b.data = r;
        var s = [];
        if (b.resetForm && s.push(function () {
                l.resetForm()
            }), b.clearForm && s.push(function () {
                l.clearForm(b.includeHidden)
            }), !b.dataType && b.target) {
            var t = b.success || function () {
                };
            s.push(function (c) {
                var d = b.replaceTarget ? "replaceWith" : "html";
                a(b.target)[d](c).each(t, arguments)
            })
        } else b.success && s.push(b.success);
        if (b.success = function (a, c, d) {
                for (var e = b.context || this, f = 0, g = s.length; g > f; f++)s[f].apply(e, [a, c, d || l, l])
            }, b.error) {
            var u = b.error;
            b.error = function (a, c, d) {
                var e = b.context || this;
                u.apply(e, [a, c, d, l])
            }
        }
        if (b.complete) {
            var v = b.complete;
            b.complete = function (a, c) {
                var d = b.context || this;
                v.apply(d, [a, c, l])
            }
        }
        var w = a("input[type=file]:enabled", this).filter(function () {
            return "" !== a(this).val()
        }), x = w.length > 0, y = "multipart/form-data", z = l.attr("enctype") == y || l.attr("encoding") == y, A = e.fileapi && e.formdata;
        d("fileAPI :" + A);
        var B, C = (x || z) && !A;
        b.iframe !== !1 && (b.iframe || C) ? b.closeKeepAlive ? a.get(b.closeKeepAlive, function () {
            B = h(q)
        }) : B = h(q) : B = (x || z) && A ? g(q) : a.ajax(b), l.removeData("jqxhr").data("jqxhr", B);
        for (var D = 0; D < p.length; D++)p[D] = null;
        return this.trigger("form-submit-notify", [this, b]), this
    }, a.fn.ajaxForm = function (e) {
        if (e = e || {}, e.delegation = e.delegation && a.isFunction(a.fn.on), !e.delegation && 0 === this.length) {
            var f = {s: this.selector, c: this.context};
            return !a.isReady && f.s ? (d("DOM not ready, queuing ajaxForm"), a(function () {
                a(f.s, f.c).ajaxForm(e)
            }), this) : (d("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")), this)
        }
        return e.delegation ? (a(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, c).on("submit.form-plugin", this.selector, e, b).on("click.form-plugin", this.selector, e, c), this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, b).bind("click.form-plugin", e, c)
    }, a.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, a.fn.formToArray = function (b, c) {
        var d = [];
        if (0 === this.length)return d;
        var f, g = this[0], h = this.attr("id"), i = b ? g.getElementsByTagName("*") : g.elements;
        if (i && (i = a(i).get()), h && (f = a(":input[form=" + h + "]").get(), f.length && (i = (i || []).concat(f))), !i || !i.length)return d;
        var j, k, l, m, n, o, p;
        for (j = 0, o = i.length; o > j; j++)if (n = i[j], l = n.name, l && !n.disabled)if (b && g.clk && "image" == n.type)g.clk == n && (d.push({
            name: l,
            value: a(n).val(),
            type: n.type
        }), d.push({name: l + ".x", value: g.clk_x}, {
            name: l + ".y",
            value: g.clk_y
        })); else if (m = a.fieldValue(n, !0), m && m.constructor == Array)for (c && c.push(n), k = 0, p = m.length; p > k; k++)d.push({
            name: l,
            value: m[k]
        }); else if (e.fileapi && "file" == n.type) {
            c && c.push(n);
            var q = n.files;
            if (q.length)for (k = 0; k < q.length; k++)d.push({
                name: l,
                value: q[k],
                type: n.type
            }); else d.push({name: l, value: "", type: n.type})
        } else null !== m && "undefined" != typeof m && (c && c.push(n), d.push({
            name: l,
            value: m,
            type: n.type,
            required: n.required
        }));
        if (!b && g.clk) {
            var r = a(g.clk), s = r[0];
            l = s.name, l && !s.disabled && "image" == s.type && (d.push({
                name: l,
                value: r.val()
            }), d.push({name: l + ".x", value: g.clk_x}, {name: l + ".y", value: g.clk_y}))
        }
        return d
    }, a.fn.formSerialize = function (b) {
        return a.param(this.formToArray(b))
    }, a.fn.fieldSerialize = function (b) {
        var c = [];
        return this.each(function () {
            var d = this.name;
            if (d) {
                var e = a.fieldValue(this, b);
                if (e && e.constructor == Array)for (var f = 0, g = e.length; g > f; f++)c.push({
                    name: d,
                    value: e[f]
                }); else null !== e && "undefined" != typeof e && c.push({name: this.name, value: e})
            }
        }), a.param(c)
    }, a.fn.fieldValue = function (b) {
        for (var c = [], d = 0, e = this.length; e > d; d++) {
            var f = this[d], g = a.fieldValue(f, b);
            null === g || "undefined" == typeof g || g.constructor == Array && !g.length || (g.constructor == Array ? a.merge(c, g) : c.push(g))
        }
        return c
    }, a.fieldValue = function (b, c) {
        var d = b.name, e = b.type, f = b.tagName.toLowerCase();
        if (void 0 === c && (c = !0), c && (!d || b.disabled || "reset" == e || "button" == e || ("checkbox" == e || "radio" == e) && !b.checked || ("submit" == e || "image" == e) && b.form && b.form.clk != b || "select" == f && -1 == b.selectedIndex))return null;
        if ("select" == f) {
            var g = b.selectedIndex;
            if (0 > g)return null;
            for (var h = [], i = b.options, j = "select-one" == e, k = j ? g + 1 : i.length, l = j ? g : 0; k > l; l++) {
                var m = i[l];
                if (m.selected) {
                    var n = m.value;
                    if (n || (n = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), j)return n;
                    h.push(n)
                }
            }
            return h
        }
        return a(b).val()
    }, a.fn.clearForm = function (b) {
        return this.each(function () {
            a("input,select,textarea", this).clearFields(b)
        })
    }, a.fn.clearFields = a.fn.clearInputs = function (b) {
        var c = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var d = this.type, e = this.tagName.toLowerCase();
            c.test(d) || "textarea" == e ? this.value = "" : "checkbox" == d || "radio" == d ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == d ? /MSIE/.test(navigator.userAgent) ? a(this).replaceWith(a(this).clone(!0)) : a(this).val("") : b && (b === !0 && /hidden/.test(d) || "string" == typeof b && a(this).is(b)) && (this.value = "")
        })
    }, a.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, a.fn.enable = function (a) {
        return void 0 === a && (a = !0), this.each(function () {
            this.disabled = !a
        })
    }, a.fn.selected = function (b) {
        return void 0 === b && (b = !0), this.each(function () {
            var c = this.type;
            if ("checkbox" == c || "radio" == c)this.checked = b; else if ("option" == this.tagName.toLowerCase()) {
                var d = a(this).parent("select");
                b && d[0] && "select-one" == d[0].type && d.find("option").selected(!1), this.selected = b
            }
        })
    }, a.fn.ajaxSubmit.debug = !1
});


/*! Magnific Popup - v0.9.5 - 2013-08-21
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function (e) {
    var t = "Close", n = "BeforeClose", r = "AfterClose", i = "BeforeAppend", s = "MarkupParse", o = "Open", u = "Change", a = "mfp", f = "." + a, l = "mfp-ready", c = "mfp-removing", h = "mfp-prevent-close";
    var p, d = function () {
    }, v = !!window.jQuery, m, g = e(window), y, b, w, E, S;
    var x = function (e, t) {
        p.ev.on(a + e + f, t)
    }, T = function (t, n, r, i) {
        var s = document.createElement("div");
        s.className = "mfp-" + t;
        if (r) {
            s.innerHTML = r
        }
        if (!i) {
            s = e(s);
            if (n) {
                s.appendTo(n)
            }
        } else if (n) {
            n.appendChild(s)
        }
        return s
    }, N = function (t, n) {
        p.ev.triggerHandler(a + t, n);
        if (p.st.callbacks) {
            t = t.charAt(0).toLowerCase() + t.slice(1);
            if (p.st.callbacks[t]) {
                p.st.callbacks[t].apply(p, e.isArray(n) ? n : [n])
            }
        }
    }, C = function () {
        (p.st.focus ? p.content.find(p.st.focus).eq(0) : p.wrap).focus()
    }, k = function (t) {
        if (t !== S || !p.currTemplate.closeBtn) {
            p.currTemplate.closeBtn = e(p.st.closeMarkup.replace("%title%", p.st.tClose));
            S = t
        }
        return p.currTemplate.closeBtn
    }, L = function () {
        if (!e.magnificPopup.instance) {
            p = new d;
            p.init();
            e.magnificPopup.instance = p
        }
    }, A = function (t) {
        if (e(t).hasClass(h)) {
            return
        }
        var n = p.st.closeOnContentClick;
        var r = p.st.closeOnBgClick;
        if (n && r) {
            return true
        } else {
            if (!p.content || e(t).hasClass("mfp-close") || p.preloader && t === p.preloader[0]) {
                return true
            }
            if (t !== p.content[0] && !e.contains(p.content[0], t)) {
                if (r) {
                    if (e.contains(document, t)) {
                        return true
                    }
                }
            } else if (n) {
                return true
            }
        }
        return false
    }, O = function () {
        var e = document.createElement("p").style, t = ["ms", "O", "Moz", "Webkit"];
        if (e["transition"] !== undefined) {
            return true
        }
        while (t.length) {
            if (t.pop() + "Transition"in e) {
                return true
            }
        }
        return false
    };
    d.prototype = {
        constructor: d, init: function () {
            var t = navigator.appVersion;
            p.isIE7 = t.indexOf("MSIE 7.") !== -1;
            p.isIE8 = t.indexOf("MSIE 8.") !== -1;
            p.isLowIE = p.isIE7 || p.isIE8;
            p.isAndroid = /android/gi.test(t);
            p.isIOS = /iphone|ipad|ipod/gi.test(t);
            p.supportsTransition = O();
            p.probablyMobile = p.isAndroid || p.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            y = e(document.body);
            b = e(document);
            p.popupsCache = {}
        }, open: function (t) {
            var n;
            if (t.isObj === false) {
                p.items = t.items.toArray();
                p.index = 0;
                var r = t.items, i;
                for (n = 0; n < r.length; n++) {
                    i = r[n];
                    if (i.parsed) {
                        i = i.el[0]
                    }
                    if (i === t.el[0]) {
                        p.index = n;
                        break
                    }
                }
            } else {
                p.items = e.isArray(t.items) ? t.items : [t.items];
                p.index = t.index || 0
            }
            if (p.isOpen) {
                p.updateItemHTML();
                return
            }
            p.types = [];
            E = "";
            if (t.mainEl && t.mainEl.length) {
                p.ev = t.mainEl.eq(0)
            } else {
                p.ev = b
            }
            if (t.key) {
                if (!p.popupsCache[t.key]) {
                    p.popupsCache[t.key] = {}
                }
                p.currTemplate = p.popupsCache[t.key]
            } else {
                p.currTemplate = {}
            }
            p.st = e.extend(true, {}, e.magnificPopup.defaults, t);
            p.fixedContentPos = p.st.fixedContentPos === "auto" ? !p.probablyMobile : p.st.fixedContentPos;
            if (p.st.modal) {
                p.st.closeOnContentClick = false;
                p.st.closeOnBgClick = false;
                p.st.showCloseBtn = false;
                p.st.enableEscapeKey = false
            }
            if (!p.bgOverlay) {
                p.bgOverlay = T("bg").on("click" + f, function () {
                    p.close()
                });
                p.wrap = T("wrap").attr("tabindex", -1).on("click" + f, function (e) {
                    if (A(e.target)) {
                        p.close()
                    }
                });
                p.container = T("container", p.wrap)
            }
            p.contentContainer = T("content");
            if (p.st.preloader) {
                p.preloader = T("preloader", p.container, p.st.tLoading)
            }
            var u = e.magnificPopup.modules;
            for (n = 0; n < u.length; n++) {
                var a = u[n];
                a = a.charAt(0).toUpperCase() + a.slice(1);
                p["init" + a].call(p)
            }
            N("BeforeOpen");
            if (p.st.showCloseBtn) {
                if (!p.st.closeBtnInside) {
                    p.wrap.append(k())
                } else {
                    x(s, function (e, t, n, r) {
                        n.close_replaceWith = k(r.type)
                    });
                    E += " mfp-close-btn-in"
                }
            }
            if (p.st.alignTop) {
                E += " mfp-align-top"
            }
            if (p.fixedContentPos) {
                p.wrap.css({overflow: p.st.overflowY, overflowX: "hidden", overflowY: p.st.overflowY})
            } else {
                p.wrap.css({top: g.scrollTop(), position: "absolute"})
            }
            if (p.st.fixedBgPos === false || p.st.fixedBgPos === "auto" && !p.fixedContentPos) {
                p.bgOverlay.css({height: b.height(), position: "absolute"})
            }
            if (p.st.enableEscapeKey) {
                b.on("keyup" + f, function (e) {
                    if (e.keyCode === 27) {
                        p.close()
                    }
                })
            }
            g.on("resize" + f, function () {
                p.updateSize()
            });
            if (!p.st.closeOnContentClick) {
                E += " mfp-auto-cursor"
            }
            if (E)p.wrap.addClass(E);
            var c = p.wH = g.height();
            var h = {};
            var d = p.st.mainClass;
            if (p.isIE7) {
                d += " mfp-ie7"
            }
            if (d) {
                p._addClassToMFP(d)
            }
            p.updateItemHTML();
            N("BuildControls");
            e("html").css(h);
            p.bgOverlay.add(p.wrap).prependTo(document.body);
            p._lastFocusedEl = document.activeElement;
            setTimeout(function () {
                if (p.content) {
                    p._addClassToMFP(l);
                    C()
                } else {
                    p.bgOverlay.addClass(l)
                }
                b.on("focusin" + f, function (t) {
                    if (t.target !== p.wrap[0] && !e.contains(p.wrap[0], t.target)) {
                        C();
                        return false
                    }
                })
            }, 16);
            p.isOpen = true;
            p.updateSize(c);
            N(o)
        }, close: function () {
            if (!p.isOpen)return;
            N(n);
            p.isOpen = false;
            if (p.st.removalDelay && !p.isLowIE && p.supportsTransition) {
                p._addClassToMFP(c);
                setTimeout(function () {
                    p._close()
                }, p.st.removalDelay)
            } else {
                p._close()
            }
        }, _close: function () {
            N(t);
            var n = c + " " + l + " ";
            p.bgOverlay.detach();
            p.wrap.detach();
            p.container.empty();
            if (p.st.mainClass) {
                n += p.st.mainClass + " "
            }
            p._removeClassFromMFP(n);
            b.off("keyup" + f + " focusin" + f);
            p.ev.off(f);
            p.wrap.attr("class", "mfp-wrap").removeAttr("style");
            p.bgOverlay.attr("class", "mfp-bg");
            p.container.attr("class", "mfp-container");
            if (p.st.showCloseBtn && (!p.st.closeBtnInside || p.currTemplate[p.currItem.type] === true)) {
                if (p.currTemplate.closeBtn)p.currTemplate.closeBtn.detach()
            }
            if (p._lastFocusedEl) {
                e(p._lastFocusedEl).focus()
            }
            p.currItem = null;
            p.content = null;
            p.currTemplate = null;
            p.prevHeight = 0;
            N(r)
        }, updateSize: function (e) {
            if (p.isIOS) {
                var t = document.documentElement.clientWidth / window.innerWidth;
                var n = window.innerHeight * t;
                p.wrap.css("height", n);
                p.wH = n
            } else {
                p.wH = e || g.height()
            }
            if (!p.fixedContentPos) {
                p.wrap.css("height", p.wH)
            }
            N("Resize")
        }, updateItemHTML: function () {
            var t = p.items[p.index];
            p.contentContainer.detach();
            if (p.content)p.content.detach();
            if (!t.parsed) {
                t = p.parseEl(p.index)
            }
            var n = t.type;
            N("BeforeChange", [p.currItem ? p.currItem.type : "", n]);
            p.currItem = t;
            if (!p.currTemplate[n]) {
                var r = p.st[n] ? p.st[n].markup : false;
                N("FirstMarkupParse", r);
                if (r) {
                    p.currTemplate[n] = e(r)
                } else {
                    p.currTemplate[n] = true
                }
            }
            if (w && w !== t.type) {
                p.container.removeClass("mfp-" + w + "-holder")
            }
            var i = p["get" + n.charAt(0).toUpperCase() + n.slice(1)](t, p.currTemplate[n]);
            p.appendContent(i, n);
            t.preloaded = true;
            N(u, t);
            w = t.type;
            p.container.prepend(p.contentContainer);
            N("AfterChange")
        }, appendContent: function (e, t) {
            p.content = e;
            if (e) {
                if (p.st.showCloseBtn && p.st.closeBtnInside && p.currTemplate[t] === true) {
                    if (!p.content.find(".mfp-close").length) {
                        p.content.append(k())
                    }
                } else {
                    p.content = e
                }
            } else {
                p.content = ""
            }
            N(i);
            p.container.addClass("mfp-" + t + "-holder");
            p.contentContainer.append(p.content)
        }, parseEl: function (t) {
            var n = p.items[t], r = n.type;
            if (n.tagName) {
                n = {el: e(n)}
            } else {
                n = {data: n, src: n.src}
            }
            if (n.el) {
                var i = p.types;
                for (var s = 0; s < i.length; s++) {
                    if (n.el.hasClass("mfp-" + i[s])) {
                        r = i[s];
                        break
                    }
                }
                n.src = n.el.attr("data-mfp-src");
                if (!n.src) {
                    n.src = n.el.attr("href")
                }
            }
            n.type = r || p.st.type || "inline";
            n.index = t;
            n.parsed = true;
            p.items[t] = n;
            N("ElementParse", n);
            return p.items[t]
        }, addGroup: function (e, t) {
            var n = function (n) {
                n.mfpEl = this;
                p._openClick(n, e, t)
            };
            if (!t) {
                t = {}
            }
            var r = "click.magnificPopup";
            t.mainEl = e;
            if (t.items) {
                t.isObj = true;
                e.off(r).on(r, n)
            } else {
                t.isObj = false;
                if (t.delegate) {
                    e.off(r).on(r, t.delegate, n)
                } else {
                    t.items = e;
                    e.off(r).on(r, n)
                }
            }
        }, _openClick: function (t, n, r) {
            var i = r.midClick !== undefined ? r.midClick : e.magnificPopup.defaults.midClick;
            if (!i && (t.which === 2 || t.ctrlKey || t.metaKey)) {
                return
            }
            var s = r.disableOn !== undefined ? r.disableOn : e.magnificPopup.defaults.disableOn;
            if (s) {
                if (e.isFunction(s)) {
                    if (!s.call(p)) {
                        return true
                    }
                } else {
                    if (g.width() < s) {
                        return true
                    }
                }
            }
            if (t.type) {
                t.preventDefault();
                if (p.isOpen) {
                    t.stopPropagation()
                }
            }
            r.el = e(t.mfpEl);
            if (r.delegate) {
                r.items = n.find(r.delegate)
            }
            p.open(r)
        }, updateStatus: function (e, t) {
            if (p.preloader) {
                if (m !== e) {
                    p.container.removeClass("mfp-s-" + m)
                }
                if (!t && e === "loading") {
                    t = p.st.tLoading
                }
                var n = {status: e, text: t};
                N("UpdateStatus", n);
                e = n.status;
                t = n.text;
                p.preloader.html(t);
                p.preloader.find("a").on("click", function (e) {
                    e.stopImmediatePropagation()
                });
                p.container.addClass("mfp-s-" + e);
                m = e
            }
        }, _addClassToMFP: function (e) {
            p.bgOverlay.addClass(e);
            p.wrap.addClass(e)
        }, _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e);
            p.wrap.removeClass(e)
        }, _hasScrollBar: function (e) {
            return (p.isIE7 ? b.height() : document.body.scrollHeight) > (e || g.height())
        }, _parseMarkup: function (t, n, r) {
            var i;
            if (r.data) {
                n = e.extend(r.data, n)
            }
            N(s, [t, n, r]);
            e.each(n, function (e, n) {
                if (n === undefined || n === false) {
                    return true
                }
                i = e.split("_");
                if (i.length > 1) {
                    var r = t.find(f + "-" + i[0]);
                    if (r.length > 0) {
                        var s = i[1];
                        if (s === "replaceWith") {
                            if (r[0] !== n[0]) {
                                r.replaceWith(n)
                            }
                        } else if (s === "img") {
                            if (r.is("img")) {
                                r.attr("src", n)
                            } else {
                                r.replaceWith('<img src="' + n + '" class="' + r.attr("class") + '" />')
                            }
                        } else {
                            r.attr(i[1], n)
                        }
                    }
                } else {
                    t.find(f + "-" + e).html(n)
                }
            })
        }, _getScrollbarSize: function () {
            if (p.scrollbarSize === undefined) {
                var e = document.createElement("div");
                e.id = "mfp-sbm";
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(e);
                p.scrollbarSize = e.offsetWidth - e.clientWidth;
                document.body.removeChild(e)
            }
            return p.scrollbarSize
        }
    };
    e.magnificPopup = {
        instance: null,
        proto: d.prototype,
        modules: [],
        open: function (e, t) {
            L();
            if (!e)e = {};
            e.isObj = true;
            e.index = t || 0;
            return this.instance.open(e)
        },
        close: function () {
            return e.magnificPopup.instance.close()
        },
        registerModule: function (t, n) {
            if (n.options) {
                e.magnificPopup.defaults[t] = n.options
            }
            e.extend(this.proto, n.proto);
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: false,
            mainClass: "",
            preloader: true,
            focus: "",
            closeOnContentClick: false,
            closeOnBgClick: true,
            closeBtnInside: true,
            showCloseBtn: true,
            enableEscapeKey: true,
            modal: false,
            alignTop: false,
            removalDelay: 0,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    };
    e.fn.magnificPopup = function (t) {
        L();
        var n = e(this);
        if (typeof t === "string") {
            if (t === "open") {
                var r, i = v ? n.data("magnificPopup") : n[0].magnificPopup, s = parseInt(arguments[1], 10) || 0;
                if (i.items) {
                    r = i.items[s]
                } else {
                    r = n;
                    if (i.delegate) {
                        r = r.find(i.delegate)
                    }
                    r = r.eq(s)
                }
                p._openClick({mfpEl: r}, n, i)
            } else {
                if (p.isOpen)p[t].apply(p, Array.prototype.slice.call(arguments, 1))
            }
        } else {
            if (v) {
                n.data("magnificPopup", t)
            } else {
                n[0].magnificPopup = t
            }
            p.addGroup(n, t)
        }
        return n
    };
    var M = "inline", _, D, P, H = function () {
        if (P) {
            D.after(P.addClass(_)).detach();
            P = null
        }
    };
    e.magnificPopup.registerModule(M, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                p.types.push(M);
                x(t + "." + M, function () {
                    H()
                })
            }, getInline: function (t, n) {
                H();
                if (t.src) {
                    var r = p.st.inline, i = e(t.src);
                    if (i.length) {
                        var s = i[0].parentNode;
                        if (s && s.tagName) {
                            if (!D) {
                                _ = r.hiddenClass;
                                D = T(_);
                                _ = "mfp-" + _
                            }
                            P = i.after(D).detach().removeClass(_)
                        }
                        p.updateStatus("ready")
                    } else {
                        p.updateStatus("error", r.tNotFound);
                        i = e("<div>")
                    }
                    t.inlineElement = i;
                    return i
                }
                p.updateStatus("ready");
                p._parseMarkup(n, {}, t);
                return n
            }
        }
    });
    var B = "ajax", j, F = function () {
        if (j) {
            y.removeClass(j)
        }
    };
    e.magnificPopup.registerModule(B, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                p.types.push(B);
                j = p.st.ajax.cursor;
                x(t + "." + B, function () {
                    F();
                    if (p.req) {
                        p.req.abort()
                    }
                })
            }, getAjax: function (t) {
                if (j)y.addClass(j);
                p.updateStatus("loading");
                var n = e.extend({
                    url: t.src, success: function (n, r, i) {
                        var s = {data: n, xhr: i};
                        N("ParseAjax", s);
                        p.appendContent(e(s.data), B);
                        t.finished = true;
                        F();
                        C();
                        setTimeout(function () {
                            p.wrap.addClass(l)
                        }, 16);
                        p.updateStatus("ready");
                        N("AjaxContentAdded")
                    }, error: function () {
                        F();
                        t.finished = t.loadError = true;
                        p.updateStatus("error", p.st.ajax.tError.replace("%url%", t.src))
                    }
                }, p.st.ajax.settings);
                p.req = e.ajax(n);
                return ""
            }
        }
    });
    var I, q = function (t) {
        if (t.data && t.data.title !== undefined)return t.data.title;
        var n = p.st.image.titleSrc;
        if (n) {
            if (e.isFunction(n)) {
                return n.call(p, t)
            } else if (t.el) {
                return t.el.attr(n) || ""
            }
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + "</div>" + "</div>",
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var e = p.st.image, n = ".image";
                p.types.push("image");
                x(o + n, function () {
                    if (p.currItem.type === "image" && e.cursor) {
                        y.addClass(e.cursor)
                    }
                });
                x(t + n, function () {
                    if (e.cursor) {
                        y.removeClass(e.cursor)
                    }
                    g.off("resize" + f)
                });
                x("Resize" + n, p.resizeImage);
                if (p.isLowIE) {
                    x("AfterChange", p.resizeImage)
                }
            }, resizeImage: function () {
                var e = p.currItem;
                if (!e || !e.img)return;
                if (p.st.image.verticalFit) {
                    var t = 0;
                    if (p.isLowIE) {
                        t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)
                    }
                    e.img.css("max-height", p.wH - t)
                }
            }, _onImageHasSize: function (e) {
                if (e.img) {
                    e.hasSize = true;
                    if (I) {
                        clearInterval(I)
                    }
                    e.isCheckingImgSize = false;
                    N("ImageHasSize", e);
                    if (e.imgHidden) {
                        if (p.content)p.content.removeClass("mfp-loading");
                        e.imgHidden = false
                    }
                }
            }, findImageSize: function (e) {
                var t = 0, n = e.img[0], r = function (i) {
                    if (I) {
                        clearInterval(I)
                    }
                    I = setInterval(function () {
                        if (n.naturalWidth > 0) {
                            p._onImageHasSize(e);
                            return
                        }
                        if (t > 200) {
                            clearInterval(I)
                        }
                        t++;
                        if (t === 3) {
                            r(10)
                        } else if (t === 40) {
                            r(50)
                        } else if (t === 100) {
                            r(500)
                        }
                    }, i)
                };
                r(1)
            }, getImage: function (t, n) {
                var r = 0, i = function () {
                    if (t) {
                        if (t.img[0].complete) {
                            t.img.off(".mfploader");
                            if (t === p.currItem) {
                                p._onImageHasSize(t);
                                p.updateStatus("ready")
                            }
                            t.hasSize = true;
                            t.loaded = true;
                            N("ImageLoadComplete")
                        } else {
                            r++;
                            if (r < 200) {
                                setTimeout(i, 100)
                            } else {
                                s()
                            }
                        }
                    }
                }, s = function () {
                    if (t) {
                        t.img.off(".mfploader");
                        if (t === p.currItem) {
                            p._onImageHasSize(t);
                            p.updateStatus("error", o.tError.replace("%url%", t.src))
                        }
                        t.hasSize = true;
                        t.loaded = true;
                        t.loadError = true
                    }
                }, o = p.st.image;
                var u = n.find(".mfp-img");
                if (u.length) {
                    var a = document.createElement("img");
                    a.className = "mfp-img";
                    t.img = e(a).on("load.mfploader", i).on("error.mfploader", s);
                    a.src = t.src;
                    if (u.is("img")) {
                        t.img = t.img.clone()
                    }
                    if (t.img[0].naturalWidth > 0) {
                        t.hasSize = true
                    }
                }
                p._parseMarkup(n, {title: q(t), img_replaceWith: t.img}, t);
                p.resizeImage();
                if (t.hasSize) {
                    if (I)clearInterval(I);
                    if (t.loadError) {
                        n.addClass("mfp-loading");
                        p.updateStatus("error", o.tError.replace("%url%", t.src))
                    } else {
                        n.removeClass("mfp-loading");
                        p.updateStatus("ready")
                    }
                    return n
                }
                p.updateStatus("loading");
                t.loading = true;
                if (!t.hasSize) {
                    t.imgHidden = true;
                    n.addClass("mfp-loading");
                    p.findImageSize(t)
                }
                return n
            }
        }
    });
    var R, U = function () {
        if (R === undefined) {
            R = document.createElement("p").style.MozTransform !== undefined
        }
        return R
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: false,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        }, proto: {
            initZoom: function () {
                var e = p.st.zoom, r = ".zoom";
                if (!e.enabled || !p.supportsTransition) {
                    return
                }
                var i = e.duration, s = function (t) {
                    var n = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), r = "all " + e.duration / 1e3 + "s " + e.easing, i = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden"
                    }, s = "transition";
                    i["-webkit-" + s] = i["-moz-" + s] = i["-o-" + s] = i[s] = r;
                    n.css(i);
                    return n
                }, o = function () {
                    p.content.css("visibility", "visible")
                }, u, a;
                x("BuildControls" + r, function () {
                    if (p._allowZoom()) {
                        clearTimeout(u);
                        p.content.css("visibility", "hidden");
                        image = p._getItemToZoom();
                        if (!image) {
                            o();
                            return
                        }
                        a = s(image);
                        a.css(p._getOffset());
                        p.wrap.append(a);
                        u = setTimeout(function () {
                            a.css(p._getOffset(true));
                            u = setTimeout(function () {
                                o();
                                setTimeout(function () {
                                    a.remove();
                                    image = a = null;
                                    N("ZoomAnimationEnded")
                                }, 16)
                            }, i)
                        }, 16)
                    }
                });
                x(n + r, function () {
                    if (p._allowZoom()) {
                        clearTimeout(u);
                        p.st.removalDelay = i;
                        if (!image) {
                            image = p._getItemToZoom();
                            if (!image) {
                                return
                            }
                            a = s(image)
                        }
                        a.css(p._getOffset(true));
                        p.wrap.append(a);
                        p.content.css("visibility", "hidden");
                        setTimeout(function () {
                            a.css(p._getOffset())
                        }, 16)
                    }
                });
                x(t + r, function () {
                    if (p._allowZoom()) {
                        o();
                        if (a) {
                            a.remove()
                        }
                    }
                })
            }, _allowZoom: function () {
                return p.currItem.type === "image"
            }, _getItemToZoom: function () {
                if (p.currItem.hasSize) {
                    return p.currItem.img
                } else {
                    return false
                }
            }, _getOffset: function (t) {
                var n;
                if (t) {
                    n = p.currItem.img
                } else {
                    n = p.st.zoom.opener(p.currItem.el || p.currItem)
                }
                var r = n.offset();
                var i = parseInt(n.css("padding-top"), 10);
                var s = parseInt(n.css("padding-bottom"), 10);
                r.top -= e(window).scrollTop() - i;
                var o = {width: n.width(), height: (v ? n.innerHeight() : n[0].offsetHeight) - s - i};
                if (U()) {
                    o["-moz-transform"] = o["transform"] = "translate(" + r.left + "px," + r.top + "px)"
                } else {
                    o.left = r.left;
                    o.top = r.top
                }
                return o
            }
        }
    });
    var z = "iframe", W = "//about:blank", X = function (e) {
        if (p.currTemplate[z]) {
            var t = p.currTemplate[z].find("iframe");
            if (t.length) {
                if (!e) {
                    t[0].src = W
                }
                if (p.isIE8) {
                    t.css("display", e ? "block" : "none")
                }
            }
        }
    };
    e.magnificPopup.registerModule(z, {
        options: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + "</div>",
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                p.types.push(z);
                x("BeforeChange", function (e, t, n) {
                    if (t !== n) {
                        if (t === z) {
                            X()
                        } else if (n === z) {
                            X(true)
                        }
                    }
                });
                x(t + "." + z, function () {
                    X()
                })
            }, getIframe: function (t, n) {
                var r = t.src;
                var i = p.st.iframe;
                e.each(i.patterns, function () {
                    if (r.indexOf(this.index) > -1) {
                        if (this.id) {
                            if (typeof this.id === "string") {
                                r = r.substr(r.lastIndexOf(this.id) + this.id.length, r.length)
                            } else {
                                r = this.id.call(this, r)
                            }
                        }
                        r = this.src.replace("%id%", r);
                        return false
                    }
                });
                var s = {};
                if (i.srcAction) {
                    s[i.srcAction] = r
                }
                p._parseMarkup(n, s, t);
                p.updateStatus("ready");
                return n
            }
        }
    });
    var V = function (e) {
        var t = p.items.length;
        if (e > t - 1) {
            return e - t
        } else if (e < 0) {
            return t + e
        }
        return e
    }, $ = function (e, t, n) {
        return e.replace("%curr%", t + 1).replace("%total%", n)
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: true,
            arrows: true,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var n = p.st.gallery, r = ".mfp-gallery", i = Boolean(e.fn.mfpFastClick);
                p.direction = true;
                if (!n || !n.enabled)return false;
                E += " mfp-gallery";
                x(o + r, function () {
                    if (n.navigateByImgClick) {
                        p.wrap.on("click" + r, ".mfp-img", function () {
                            if (p.items.length > 1) {
                                p.next();
                                return false
                            }
                        })
                    }
                    b.on("keydown" + r, function (e) {
                        if (e.keyCode === 37) {
                            p.prev()
                        } else if (e.keyCode === 39) {
                            p.next()
                        }
                    })
                });
                x("UpdateStatus" + r, function (e, t) {
                    if (t.text) {
                        t.text = $(t.text, p.currItem.index, p.items.length)
                    }
                });
                x(s + r, function (e, t, r, i) {
                    var s = p.items.length;
                    r.counter = s > 1 ? $(n.tCounter, i.index, s) : ""
                });
                x("BuildControls" + r, function () {
                    if (p.items.length > 1 && n.arrows && !p.arrowLeft) {
                        var t = n.arrowMarkup, r = p.arrowLeft = e(t.replace("%title%", n.tPrev).replace("%dir%", "left")).addClass(h), s = p.arrowRight = e(t.replace("%title%", n.tNext).replace("%dir%", "right")).addClass(h);
                        var o = i ? "mfpFastClick" : "click";
                        r[o](function () {
                            p.prev()
                        });
                        s[o](function () {
                            p.next()
                        });
                        if (p.isIE7) {
                            T("b", r[0], false, true);
                            T("a", r[0], false, true);
                            T("b", s[0], false, true);
                            T("a", s[0], false, true)
                        }
                        p.container.append(r.add(s))
                    }
                });
                x(u + r, function () {
                    if (p._preloadTimeout)clearTimeout(p._preloadTimeout);
                    p._preloadTimeout = setTimeout(function () {
                        p.preloadNearbyImages();
                        p._preloadTimeout = null
                    }, 16)
                });
                x(t + r, function () {
                    b.off(r);
                    p.wrap.off("click" + r);
                    if (p.arrowLeft && i) {
                        p.arrowLeft.add(p.arrowRight).destroyMfpFastClick()
                    }
                    p.arrowRight = p.arrowLeft = null
                })
            }, next: function () {
                p.direction = true;
                p.index = V(p.index + 1);
                p.updateItemHTML()
            }, prev: function () {
                p.direction = false;
                p.index = V(p.index - 1);
                p.updateItemHTML()
            }, goTo: function (e) {
                p.direction = e >= p.index;
                p.index = e;
                p.updateItemHTML()
            }, preloadNearbyImages: function () {
                var e = p.st.gallery.preload, t = Math.min(e[0], p.items.length), n = Math.min(e[1], p.items.length), r;
                for (r = 1; r <= (p.direction ? n : t); r++) {
                    p._preloadItem(p.index + r)
                }
                for (r = 1; r <= (p.direction ? t : n); r++) {
                    p._preloadItem(p.index - r)
                }
            }, _preloadItem: function (t) {
                t = V(t);
                if (p.items[t].preloaded) {
                    return
                }
                var n = p.items[t];
                if (!n.parsed) {
                    n = p.parseEl(t)
                }
                N("LazyLoad", n);
                if (n.type === "image") {
                    n.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                        n.hasSize = true
                    }).on("error.mfploader", function () {
                        n.hasSize = true;
                        n.loadError = true;
                        N("LazyLoadError", n)
                    }).attr("src", n.src)
                }
                n.preloaded = true
            }
        }
    });
    var J = "retina";
    e.magnificPopup.registerModule(J, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = p.st.retina, t = e.ratio;
                    t = !isNaN(t) ? t : t();
                    if (t > 1) {
                        x("ImageHasSize" + "." + J, function (e, n) {
                            n.img.css({"max-width": n.img[0].naturalWidth / t, width: "100%"})
                        });
                        x("ElementParse" + "." + J, function (n, r) {
                            r.src = e.replaceSrc(r, t)
                        })
                    }
                }
            }
        }
    });
    (function () {
        var t = 1e3, n = "ontouchstart"in window, r = function () {
            g.off("touchmove" + s + " touchend" + s)
        }, i = "mfpFastClick", s = "." + i;
        e.fn.mfpFastClick = function (i) {
            return e(this).each(function () {
                var o = e(this), u;
                if (n) {
                    var a, f, l, c, h, p;
                    o.on("touchstart" + s, function (e) {
                        c = false;
                        p = 1;
                        h = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
                        f = h.clientX;
                        l = h.clientY;
                        g.on("touchmove" + s, function (e) {
                            h = e.originalEvent ? e.originalEvent.touches : e.touches;
                            p = h.length;
                            h = h[0];
                            if (Math.abs(h.clientX - f) > 10 || Math.abs(h.clientY - l) > 10) {
                                c = true;
                                r()
                            }
                        }).on("touchend" + s, function (e) {
                            r();
                            if (c || p > 1) {
                                return
                            }
                            u = true;
                            e.preventDefault();
                            clearTimeout(a);
                            a = setTimeout(function () {
                                u = false
                            }, t);
                            i()
                        })
                    })
                }
                o.on("click" + s, function () {
                    if (!u) {
                        i()
                    }
                })
            })
        };
        e.fn.destroyMfpFastClick = function () {
            e(this).off("touchstart" + s + " click" + s);
            if (n)g.off("touchmove" + s + " touchend" + s)
        }
    })()
})(window.jQuery || window.Zepto);


/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function (e) {
    e.flexslider = function (t, a) {
        var n = e(t);
        n.vars = e.extend({}, e.flexslider.defaults, a);
        var i, s = n.vars.namespace, r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, o = ("ontouchstart"in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch, l = "click touchend MSPointerUp keyup", c = "", d = "vertical" === n.vars.direction, u = n.vars.reverse, v = n.vars.itemWidth > 0, p = "fade" === n.vars.animation, m = "" !== n.vars.asNavFor, f = {}, g = !0;
        e.data(t, "flexslider", n), f = {
            init: function () {
                n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = e(n.vars.selector, n), n.container = e(n.containerSelector, n), n.count = n.slides.length, n.syncExists = e(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function () {
                    var e = document.createElement("div"), t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var a in t)if (void 0 !== e.style[t[a]])return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                    return !1
                }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = e(n.vars.controlsContainer).length > 0 && e(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = e(n.vars.manualControls).length > 0 && e(n.vars.manualControls)), n.vars.randomize && (n.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === e(n.containerSelector).length || n.vars.multipleKeyboard) && e(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!n.animating && (39 === t || 37 === t)) {
                        var a = 39 === t ? n.getTarget("next") : 37 === t ? n.getTarget("prev") : !1;
                        n.flexAnimate(a, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function (e, t) {
                    e.preventDefault();
                    var a = n.getTarget(0 > t ? "next" : "prev");
                    n.flexAnimate(a, n.vars.pauseOnAction)
                }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
                    n.manualPlay || n.manualPause || n.pause()
                }, function () {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), o && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && e(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
                    n.vars.start(n)
                }, 200)
            }, asNav: {
                setup: function () {
                    n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(s + "active-slide").eq(n.currentItem).addClass(s + "active-slide"), r ? (t._slider = n, n.slides.each(function () {
                        var t = this;
                        t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function (e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), t.addEventListener("MSGestureTap", function (t) {
                            t.preventDefault();
                            var a = e(this), i = a.index();
                            e(n.vars.asNavFor).data("flexslider").animating || a.hasClass("active") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(l, function (t) {
                        t.preventDefault();
                        var a = e(this), i = a.index(), r = a.offset().left - e(n).scrollLeft();
                        0 >= r && a.hasClass(s + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : e(n.vars.asNavFor).data("flexslider").animating || a.hasClass(s + "active-slide") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            }, controlNav: {
                setup: function () {
                    n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                }, setupPaging: function () {
                    var t, a, i = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging", r = 1;
                    if (n.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + i + '"></ol>'), n.pagingCount > 1)for (var o = 0; o < n.pagingCount; o++) {
                        if (a = n.slides.eq(o), t = "thumbnails" === n.vars.controlNav ? '<img src="' + a.attr("data-thumb") + '"/>' : "<a>" + r + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                            var d = a.attr("data-thumbcaption");
                            "" != d && void 0 != d && (t += '<span class="' + s + 'caption">' + d + "</span>")
                        }
                        n.controlNavScaffold.append('<li data-animate="zoomIn" data-delay="' + 200 * o + '">' + t + "</li>"), r++
                    }
                    n.controlsContainer ? e(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", l, function (t) {
                        if (t.preventDefault(), "" === c || c === t.type) {
                            var a = e(this), i = n.controlNav.index(a);
                            a.hasClass(s + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
                        }
                        "" === c && (c = t.type), f.setToClearWatchedEvent()
                    })
                }, setupManual: function () {
                    n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(l, function (t) {
                        if (t.preventDefault(), "" === c || c === t.type) {
                            var a = e(this), i = n.controlNav.index(a);
                            a.hasClass(s + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
                        }
                        "" === c && (c = t.type), f.setToClearWatchedEvent()
                    })
                }, set: function () {
                    var t = "thumbnails" === n.vars.controlNav ? "img" : "a";
                    n.controlNav = e("." + s + "control-nav li " + t, n.controlsContainer ? n.controlsContainer : n)
                }, active: function () {
                    n.controlNav.removeClass(s + "active").eq(n.animatingTo).addClass(s + "active")
                }, update: function (t, a) {
                    n.pagingCount > 1 && "add" === t ? n.controlNavScaffold.append(e("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(a).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(a, t) : f.controlNav.active()
                }
            }, directionNav: {
                setup: function () {
                    var t = e('<ul class="' + s + 'direction-nav"><li><a class="' + s + 'prev" href="#">' + n.vars.prevText + '</a></li><li><a class="' + s + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.controlsContainer ? (e(n.controlsContainer).append(t), n.directionNav = e("." + s + "direction-nav li a", n.controlsContainer)) : (n.append(t), n.directionNav = e("." + s + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(l, function (t) {
                        t.preventDefault();
                        var a;
                        ("" === c || c === t.type) && (a = n.getTarget(e(this).hasClass(s + "next") ? "next" : "prev"), n.flexAnimate(a, n.vars.pauseOnAction)), "" === c && (c = t.type), f.setToClearWatchedEvent()
                    })
                }, update: function () {
                    var e = s + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + s + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + s + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
                }
            }, pausePlay: {
                setup: function () {
                    var t = e('<div class="' + s + 'pauseplay"><a></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(t), n.pausePlay = e("." + s + "pauseplay a", n.controlsContainer)) : (n.append(t), n.pausePlay = e("." + s + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? s + "pause" : s + "play"), n.pausePlay.bind(l, function (t) {
                        t.preventDefault(), ("" === c || c === t.type) && (e(this).hasClass(s + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === c && (c = t.type), f.setToClearWatchedEvent()
                    })
                }, update: function (e) {
                    "play" === e ? n.pausePlay.removeClass(s + "pause").addClass(s + "play").html(n.vars.playText) : n.pausePlay.removeClass(s + "play").addClass(s + "pause").html(n.vars.pauseText)
                }
            }, touch: function () {
                function e(e) {
                    n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), g = d ? n.h : n.w, S = Number(new Date), x = e.touches[0].pageX, b = e.touches[0].pageY, f = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * g : (n.currentSlide + n.cloneOffset) * g, c = d ? b : x, m = d ? x : b, t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", i, !1))
                }

                function a(e) {
                    x = e.touches[0].pageX, b = e.touches[0].pageY, h = d ? c - b : c - x, y = d ? Math.abs(h) < Math.abs(x - m) : Math.abs(h) < Math.abs(b - m);
                    var t = 500;
                    (!y || Number(new Date) - S > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (h /= 0 === n.currentSlide && 0 > h || n.currentSlide === n.last && h > 0 ? Math.abs(h) / g + 2 : 1), n.setProps(f + h, "setTouch")))
                }

                function i() {
                    if (t.removeEventListener("touchmove", a, !1), n.animatingTo === n.currentSlide && !y && null !== h) {
                        var e = u ? -h : h, s = n.getTarget(e > 0 ? "next" : "prev");
                        n.canAdvance(s) && (Number(new Date) - S < 550 && Math.abs(e) > 50 || Math.abs(e) > g / 2) ? n.flexAnimate(s, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", i, !1), c = null, m = null, h = null, f = null
                }

                function s(e) {
                    e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), w = 0, g = d ? n.h : n.w, S = Number(new Date), f = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * g : (n.currentSlide + n.cloneOffset) * g)
                }

                function o(e) {
                    e.stopPropagation();
                    var a = e.target._slider;
                    if (a) {
                        var n = -e.translationX, i = -e.translationY;
                        return w += d ? i : n, h = w, y = d ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                            t._gesture.stop()
                        }) : void((!y || Number(new Date) - S > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (h = w / (0 === a.currentSlide && 0 > w || a.currentSlide === a.last && w > 0 ? Math.abs(w) / g + 2 : 1)), a.setProps(f + h, "setTouch"))))
                    }
                }

                function l(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !y && null !== h) {
                            var a = u ? -h : h, n = t.getTarget(a > 0 ? "next" : "prev");
                            t.canAdvance(n) && (Number(new Date) - S < 550 && Math.abs(a) > 50 || Math.abs(a) > g / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        c = null, m = null, h = null, f = null, w = 0
                    }
                }

                var c, m, f, g, h, S, y = !1, x = 0, b = 0, w = 0;
                r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", s, !1), t._slider = n, t.addEventListener("MSGestureChange", o, !1), t.addEventListener("MSGestureEnd", l, !1)) : t.addEventListener("touchstart", e, !1)
            }, resize: function () {
                !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            }, smoothHeight: function (e) {
                if (!d || p) {
                    var t = p ? n : n.viewport;
                    e ? t.animate({height: n.slides.eq(n.animatingTo).height()}, e) : t.height(n.slides.eq(n.animatingTo).height())
                }
            }, sync: function (t) {
                var a = e(n.vars.sync).data("flexslider"), i = n.animatingTo;
                switch (t) {
                    case"animate":
                        a.flexAnimate(i, n.vars.pauseOnAction, !1, !0);
                        break;
                    case"play":
                        a.playing || a.asNav || a.play();
                        break;
                    case"pause":
                        a.pause()
                }
            }, uniqueID: function (t) {
                return t.filter("[id]").add(t.find("[id]")).each(function () {
                    var t = e(this);
                    t.attr("id", t.attr("id") + "_clone")
                }), t
            }, pauseInvisible: {
                visProp: null, init: function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden"in document)return "hidden";
                    for (var t = 0; t < e.length; t++)e[t] + "Hidden"in document && (f.pauseInvisible.visProp = e[t] + "Hidden");
                    if (f.pauseInvisible.visProp) {
                        var a = f.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(a, function () {
                            f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                }, isHidden: function () {
                    return document[f.pauseInvisible.visProp] || !1
                }
            }, setToClearWatchedEvent: function () {
                clearTimeout(i), i = setTimeout(function () {
                    c = ""
                }, 3e3)
            }
        }, n.flexAnimate = function (t, a, i, r, l) {
            if (n.vars.animationLoop || t === n.currentSlide || (n.direction = t > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < t ? "next" : "prev"), !n.animating && (n.canAdvance(t, l) || i) && n.is(":visible")) {
                if (m && r) {
                    var c = e(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === t || t === n.count - 1, c.flexAnimate(t, !0, !1, !0, l), n.direction = n.currentItem < t ? "next" : "prev", c.direction = n.direction, Math.ceil((t + 1) / n.visible) - 1 === n.currentSlide || 0 === t)return n.currentItem = t, n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), !1;
                    n.currentItem = t, n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), t = Math.floor(t / n.visible)
                }
                if (n.animating = !0, n.animatingTo = t, a && n.pause(), n.vars.before(n), n.syncExists && !l && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), n.atEnd = 0 === t || t === n.last, n.vars.directionNav && f.directionNav.update(), t === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p)o ? (n.slides.eq(n.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), n.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }), n.wrapup(y)) : (n.slides.eq(n.currentSlide).css({zIndex: 1}).animate({opacity: 0}, n.vars.animationSpeed, n.vars.easing), n.slides.eq(t).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing, n.wrapup)); else {
                    var g, h, S, y = d ? n.slides.filter(":first").height() : n.computedW;
                    v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && t === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * y : 0 : n.currentSlide === n.last && 0 === t && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * y : u ? (n.count - 1 - t + n.cloneOffset) * y : (t + n.cloneOffset) * y, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(n.ensureAnimationEnd), n.wrapup(y)
                    }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
                        n.wrapup(y)
                    }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
                        n.wrapup(y)
                    })
                }
                n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function (e) {
            p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function () {
            !n.animating && g && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function () {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
        }, n.play = function () {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
        }, n.stop = function () {
            n.pause(), n.stopped = !0
        }, n.canAdvance = function (e, t) {
            var a = m ? n.pagingCount - 1 : n.last;
            return t ? !0 : m && n.currentItem === n.count - 1 && 0 === e && "prev" === n.direction ? !0 : m && 0 === n.currentItem && e === n.pagingCount - 1 && "next" !== n.direction ? !1 : e !== n.currentSlide || m ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && e === a && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === a && 0 === e && "next" === n.direction ? !1 : !0 : !1
        }, n.getTarget = function (e) {
            return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function (e, t, a) {
            var i = function () {
                var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo, i = function () {
                    if (v)return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
                    switch (t) {
                        case"setTotal":
                            return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
                        case"setTouch":
                            return u ? e : e;
                        case"jumpEnd":
                            return u ? e : n.count * e;
                        case"jumpStart":
                            return u ? n.count * e : e;
                        default:
                            return e
                    }
                }();
                return -1 * i + "px"
            }();
            n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
        }, n.setup = function (t) {
            if (p)n.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === t && (o ? n.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(n.currentSlide).css({opacity: 1, zIndex: 2}) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({zIndex: 2}).css({opacity: 1}) : n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight(); else {
                var a, i;
                "init" === t && (n.viewport = e('<div class="' + s + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (i = e.makeArray(n.slides).reverse(), n.slides = e(i), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== t && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = e(n.vars.selector, n), a = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    n.newSlides.css({display: "block"}), n.doMath(), n.viewport.height(n.h), n.setProps(a * n.h, "init")
                }, "init" === t ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(a * n.computedW, "init"), setTimeout(function () {
                    n.doMath(), n.newSlides.css({
                        width: n.computedW,
                        "float": "left",
                        display: "block"
                    }), n.vars.smoothHeight && f.smoothHeight()
                }, "init" === t ? 100 : 0))
            }
            v || n.slides.removeClass(s + "active-slide").eq(n.currentSlide).addClass(s + "active-slide"), n.vars.init(n)
        }, n.doMath = function () {
            var e = n.slides.first(), t = n.vars.itemMargin, a = n.vars.minItems, i = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
        }, n.update = function (e, t) {
            n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
        }, n.addSlide = function (t, a) {
            var i = e(t);
            n.count += 1, n.last = n.count - 1, d && u ? void 0 !== a ? n.slides.eq(n.count - a).after(i) : n.container.prepend(i) : void 0 !== a ? n.slides.eq(a).before(i) : n.container.append(i), n.update(a, "add"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function (t) {
            var a = isNaN(t) ? n.slides.index(e(t)) : t;
            n.count -= 1, n.last = n.count - 1, isNaN(t) ? e(t, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(t).remove(), n.doMath(), n.update(a, "remove"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, f.init()
    }, e(window).blur(function () {
        focused = !1
    }).focus(function () {
        focused = !0
    }), e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {
        },
        before: function () {
        },
        after: function () {
        },
        end: function () {
        },
        added: function () {
        },
        removed: function () {
        },
        init: function () {
        }
    }, e.fn.flexslider = function (t) {
        if (void 0 === t && (t = {}), "object" == typeof t)return this.each(function () {
            var a = e(this), n = t.selector ? t.selector : ".slides > li", i = a.find(n);
            1 === i.length && t.allowOneSlide === !0 || 0 === i.length ? (i.fadeIn(400), t.start && t.start(a)) : void 0 === a.data("flexslider") && new e.flexslider(this, t)
        });
        var a = e(this).data("flexslider");
        switch (t) {
            case"play":
                a.play();
                break;
            case"pause":
                a.pause();
                break;
            case"stop":
                a.stop();
                break;
            case"next":
                a.flexAnimate(a.getTarget("next"), !0);
                break;
            case"prev":
            case"previous":
                a.flexAnimate(a.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof t && a.flexAnimate(t, !0)
        }
    }
}(jQuery);


// jQuery Paginate v0.4
;
(function ($) {
    $.fn.pajinate = function (options) {
        var current_page = "current_page";
        var items_per_page = "items_per_page";
        var meta;
        var defaults = {
            item_container_id: ".content",
            items_per_page: 10,
            nav_panel_id: ".page_navigation",
            nav_info_id: ".info_text",
            num_page_links_to_display: 20,
            start_page: 0,
            wrap_around: false,
            nav_label_first: "First",
            nav_label_prev: "Prev",
            nav_label_next: "Next",
            nav_label_last: "Last",
            nav_order: ["first", "prev", "num", "next", "last"],
            nav_label_info: "Showing {0}-{1} of {2} results",
            show_first_last: true,
            abort_on_small_lists: false,
            jquery_ui: false,
            jquery_ui_active: "ui-state-highlight",
            jquery_ui_default: "ui-state-default",
            jquery_ui_disabled: "ui-state-disabled"
        };
        var options = $.extend(defaults, options);
        var $item_container;
        var $page_container;
        var $items;
        var $nav_panels;
        var total_page_no_links;
        var jquery_ui_default_class = options.jquery_ui ? options.jquery_ui_default : "";
        var jquery_ui_active_class = options.jquery_ui ? options.jquery_ui_active : "";
        var jquery_ui_disabled_class = options.jquery_ui ? options.jquery_ui_disabled : "";
        return this.each(function () {
            $page_container = $(this);
            $item_container = $(this).find(options.item_container_id);
            $items = $page_container.find(options.item_container_id).children();
            if (options.abort_on_small_lists && options.items_per_page >= $items.size()) {
                return $page_container
            }
            meta = $page_container;
            meta.data(current_page, 0);
            meta.data(items_per_page, options.items_per_page);
            var total_items = $item_container.children().size();
            var number_of_pages = Math.ceil(total_items / options.items_per_page);
            var more = '<li class="disabled ellipse more"><span>...</span></li>';
            var less = '<li class="disabled ellipse less"><span>...</span></li>';
            var first = !options.show_first_last ? "" : '<li class="first_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_first + "</a></li>";
            var last = !options.show_first_last ? "" : '<li class="last_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_last + "</a></li>";
            var navigation_html = "";
            for (var i = 0; i < options.nav_order.length; i++) {
                switch (options.nav_order[i]) {
                    case"first":
                        navigation_html += first;
                        break;
                    case"last":
                        navigation_html += last;
                        break;
                    case"next":
                        navigation_html += '<li class="next_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_next + "</a></li>";
                        break;
                    case"prev":
                        navigation_html += '<li class="previous_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_prev + "</a></li>";
                        break;
                    case"num":
                        navigation_html += less;
                        var current_link = 0;
                        while (number_of_pages > current_link) {
                            navigation_html += '<li class="page_link ' + jquery_ui_default_class + '" longdesc="' + current_link + '"><a href="#">' + (current_link + 1) + "</a></li>";
                            current_link++
                        }
                        navigation_html += more;
                        break;
                    default:
                        break
                }
            }
            $nav_panels = $page_container.find(options.nav_panel_id);
            $nav_panels.html(navigation_html).each(function () {
                $(this).find(".page_link:first").addClass("first");
                $(this).find(".page_link:last").addClass("last")
            });
            $nav_panels.children(".ellipse").hide();
            $nav_panels.find(".previous_link").next().next().addClass("active " + jquery_ui_active_class);
            $items.hide();
            $items.slice(0, meta.data(items_per_page)).show();
            total_page_no_links = $page_container.find(options.nav_panel_id + ":first").children(".page_link").size();
            options.num_page_links_to_display = Math.min(options.num_page_links_to_display, total_page_no_links);
            $nav_panels.children(".page_link").hide();
            $nav_panels.each(function () {
                $(this).children(".page_link").slice(0, options.num_page_links_to_display).show()
            });
            $page_container.find(".first_link").click(function (e) {
                e.preventDefault();
                movePageNumbersRight($(this), 0);
                gotopage(0)
            });
            $page_container.find(".last_link").click(function (e) {
                e.preventDefault();
                var lastPage = total_page_no_links - 1;
                movePageNumbersLeft($(this), lastPage);
                gotopage(lastPage)
            });
            $page_container.find(".previous_link").click(function (e) {
                e.preventDefault();
                showPrevPage($(this))
            });
            $page_container.find(".next_link").click(function (e) {
                e.preventDefault();
                showNextPage($(this))
            });
            $page_container.find(".page_link").click(function (e) {
                e.preventDefault();
                gotopage($(this).attr("longdesc"))
            });
            gotopage(parseInt(options.start_page));
            toggleMoreLess();
            if (!options.wrap_around) {
                tagNextPrev()
            }
        });
        function showPrevPage(e) {
            new_page = parseInt(meta.data(current_page)) - 1;
            if ($(e).siblings(".active").prev(".page_link").length == true) {
                movePageNumbersRight(e, new_page);
                gotopage(new_page)
            } else {
                if (options.wrap_around) {
                    gotopage(total_page_no_links - 1)
                }
            }
        }

        function showNextPage(e) {
            new_page = parseInt(meta.data(current_page)) + 1;
            if ($(e).siblings(".active").next(".page_link").length == true) {
                movePageNumbersLeft(e, new_page);
                gotopage(new_page)
            } else {
                if (options.wrap_around) {
                    gotopage(0)
                }
            }
        }

        function gotopage(page_num) {
            page_num = parseInt(page_num, 10);
            var ipp = parseInt(meta.data(items_per_page));
            start_from = page_num * ipp;
            end_on = start_from + ipp;
            var items = $items.hide().slice(start_from, end_on);
            items.fadeIn(700);
            $page_container.find(options.nav_panel_id).children(".page_link[longdesc=" + page_num + "]").addClass("active " + jquery_ui_active_class).siblings(".active").removeClass("active " + jquery_ui_active_class);
            meta.data(current_page, page_num);
            var $current_page = parseInt(meta.data(current_page) + 1);
            var total_items = $item_container.children().size();
            var $number_of_pages = Math.ceil(total_items / options.items_per_page);
            $page_container.find(options.nav_info_id).html(options.nav_label_info.replace("{0}", start_from + 1).replace("{1}", start_from + items.length).replace("{2}", $items.length).replace("{3}", $current_page).replace("{4}", $number_of_pages));
            toggleMoreLess();
            tagNextPrev();
            if (typeof(options.onPageDisplayed) !== "undefined") {
                options.onPageDisplayed.call(this, page_num + 1)
            }
        }

        function movePageNumbersLeft(e, new_p) {
            var new_page = new_p;
            var $current_active_link = $(e).siblings(".active");
            if ($current_active_link.siblings(".page_link[longdesc=" + new_page + "]").css("display") == "none") {
                $nav_panels.each(function () {
                    $(this).children(".page_link").hide().slice(parseInt(new_page - options.num_page_links_to_display + 1), new_page + 1).show()
                })
            }
        }

        function movePageNumbersRight(e, new_p) {
            var new_page = new_p;
            var $current_active_link = $(e).siblings(".active");
            if ($current_active_link.siblings(".page_link[longdesc=" + new_page + "]").css("display") == "none") {
                $nav_panels.each(function () {
                    $(this).children(".page_link").hide().slice(new_page, new_page + parseInt(options.num_page_links_to_display)).show()
                })
            }
        }

        function toggleMoreLess() {
        }

        function tagNextPrev() {
            if ($nav_panels.children(".last").hasClass("active")) {
                $nav_panels.children(".next_link").add(".last_link").addClass("no_more " + jquery_ui_disabled_class)
            } else {
                $nav_panels.children(".next_link").add(".last_link").removeClass("no_more " + jquery_ui_disabled_class)
            }
            if ($nav_panels.children(".first").hasClass("active")) {
                $nav_panels.children(".previous_link").add(".first_link").addClass("no_more " + jquery_ui_disabled_class)
            } else {
                $nav_panels.children(".previous_link").add(".first_link").removeClass("no_more " + jquery_ui_disabled_class)
            }
        }
    }
})(jQuery);


/*!
 --------------------------------
 Infinite Scroll
 --------------------------------
 + https://github.com/paulirish/infinite-scroll
 + version 2.0.2
 + Copyright 2011/12 Paul Irish & Luke Shumard
 + Licensed under the MIT license

 + Documentation: http://infinite-scroll.com/
 */
(function (e, t, n) {
    "use strict";
    t.infinitescroll = function (n, r, i) {
        this.element = t(i);
        if (!this._create(n, r)) {
            this.failed = true
        }
    };
    t.infinitescroll.defaults = {
        loading: {
            finished: n,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            img: "",
            msg: null,
            msgText: "<em>Loading the next set of posts...</em>",
            selector: null,
            speed: "fast",
            start: n
        },
        state: {
            isDuringAjax: false,
            isInvalidPage: false,
            isDestroyed: false,
            isDone: false,
            isPaused: false,
            isBeyondMaxPage: false,
            currPage: 1
        },
        debug: false,
        behavior: n,
        binder: t(e),
        nextSelector: "div.navigation a:first",
        navSelector: "div.navigation",
        contentSelector: null,
        extraScrollPx: 150,
        itemSelector: "div.post",
        animate: false,
        pathParse: n,
        dataType: "html",
        appendCallback: true,
        bufferPx: 40,
        errorCallback: function () {
        },
        infid: 0,
        pixelsFromNavToBottom: n,
        path: n,
        prefill: false,
        maxPage: n
    };
    t.infinitescroll.prototype = {
        _binding: function (t) {
            var r = this, i = r.options;
            i.v = "2.0b2.120520";
            if (!!i.behavior && this["_binding_" + i.behavior] !== n) {
                this["_binding_" + i.behavior].call(this);
                return
            }
            if (t !== "bind" && t !== "unbind") {
                this._debug("Binding value  " + t + " not valid");
                return false
            }
            if (t === "unbind") {
                this.options.binder.unbind("smartscroll.infscr." + r.options.infid)
            } else {
                this.options.binder[t]("smartscroll.infscr." + r.options.infid, function () {
                    r.scroll()
                })
            }
            this._debug("Binding", t)
        }, _create: function (i, s) {
            var o = t.extend(true, {}, t.infinitescroll.defaults, i);
            this.options = o;
            var u = t(e);
            var a = this;
            if (!a._validate(i)) {
                return false
            }
            var f = t(o.nextSelector).attr("href");
            if (!f) {
                this._debug("Navigation selector not found");
                return false
            }
            o.path = o.path || this._determinepath(f);
            o.contentSelector = o.contentSelector || this.element;
            o.loading.selector = o.loading.selector || o.contentSelector;
            o.loading.msg = o.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + o.loading.img + '" /><div>' + o.loading.msgText + "</div></div>");
            (new Image).src = o.loading.img;
            if (o.pixelsFromNavToBottom === n) {
                o.pixelsFromNavToBottom = t(document).height() - t(o.navSelector).offset().top;
                this._debug("pixelsFromNavToBottom: " + o.pixelsFromNavToBottom)
            }
            var l = this;
            o.loading.start = o.loading.start || function () {
                t(o.navSelector).hide();
                o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed, t.proxy(function () {
                    this.beginAjax(o)
                }, l))
            };
            o.loading.finished = o.loading.finished || function () {
                if (!o.state.isBeyondMaxPage)o.loading.msg.fadeOut(o.loading.speed)
            };
            o.callback = function (e, r, i) {
                if (!!o.behavior && e["_callback_" + o.behavior] !== n) {
                    e["_callback_" + o.behavior].call(t(o.contentSelector)[0], r, i)
                }
                if (s) {
                    s.call(t(o.contentSelector)[0], r, o, i)
                }
                if (o.prefill) {
                    u.bind("resize.infinite-scroll", e._prefill)
                }
            };
            if (i.debug) {
                if (Function.prototype.bind && (typeof console === "object" || typeof console === "function") && typeof console.log === "object") {
                    ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function (e) {
                        console[e] = this.call(console[e], console)
                    }, Function.prototype.bind)
                }
            }
            this._setup();
            if (o.prefill) {
                this._prefill()
            }
            return true
        }, _prefill: function () {
            function s() {
                return r.options.contentSelector.height() <= i.height()
            }

            var r = this;
            var i = t(e);
            this._prefill = function () {
                if (s()) {
                    r.scroll()
                }
                i.bind("resize.infinite-scroll", function () {
                    if (s()) {
                        i.unbind("resize.infinite-scroll");
                        r.scroll()
                    }
                })
            };
            this._prefill()
        }, _debug: function () {
            if (true !== this.options.debug) {
                return
            }
            if (typeof console !== "undefined" && typeof console.log === "function") {
                if (Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === "string") {
                    console.log(Array.prototype.slice.call(arguments).toString())
                } else {
                    console.log(Array.prototype.slice.call(arguments))
                }
            } else if (!Function.prototype.bind && typeof console !== "undefined" && typeof console.log === "object") {
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
            }
        }, _determinepath: function (t) {
            var r = this.options;
            if (!!r.behavior && this["_determinepath_" + r.behavior] !== n) {
                return this["_determinepath_" + r.behavior].call(this, t)
            }
            if (!!r.pathParse) {
                this._debug("pathParse manual");
                return r.pathParse(t, this.options.state.currPage + 1)
            } else if (t.match(/^(.*?)\b2\b(.*?$)/)) {
                t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1)
            } else if (t.match(/^(.*?)2(.*?$)/)) {
                if (t.match(/^(.*?page=)2(\/.*|$)/)) {
                    t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    return t
                }
                t = t.match(/^(.*?)2(.*?$)/).slice(1)
            } else {
                if (t.match(/^(.*?page=)1(\/.*|$)/)) {
                    t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    return t
                } else {
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
                    r.state.isInvalidPage = true
                }
            }
            this._debug("determinePath", t);
            return t
        }, _error: function (t) {
            var r = this.options;
            if (!!r.behavior && this["_error_" + r.behavior] !== n) {
                this["_error_" + r.behavior].call(this, t);
                return
            }
            if (t !== "destroy" && t !== "end") {
                t = "unknown"
            }
            this._debug("Error", t);
            if (t === "end" || r.state.isBeyondMaxPage) {
                this._showdonemsg()
            }
            r.state.isDone = true;
            r.state.currPage = 1;
            r.state.isPaused = false;
            r.state.isBeyondMaxPage = false;
            this._binding("unbind")
        }, _loadcallback: function (i, s, o) {
            var u = this.options, a = this.options.callback, f = u.state.isDone ? "done" : !u.appendCallback ? "no-append" : "append", l;
            if (!!u.behavior && this["_loadcallback_" + u.behavior] !== n) {
                this["_loadcallback_" + u.behavior].call(this, i, s);
                return
            }
            switch (f) {
                case"done":
                    this._showdonemsg();
                    return false;
                case"no-append":
                    if (u.dataType === "html") {
                        s = "<div>" + s + "</div>";
                        s = t(s).find(u.itemSelector)
                    }
                    break;
                case"append":
                    var c = i.children();
                    if (c.length === 0) {
                        return this._error("end")
                    }
                    l = document.createDocumentFragment();
                    while (i[0].firstChild) {
                        l.appendChild(i[0].firstChild)
                    }
                    this._debug("contentSelector", t(u.contentSelector)[0]);
                    t(u.contentSelector)[0].appendChild(l);
                    s = c.get();
                    break
            }
            u.loading.finished.call(t(u.contentSelector)[0], u);
            if (u.animate) {
                var h = t(e).scrollTop() + t(u.loading.msg).height() + u.extraScrollPx + "px";
                t("html,body").animate({scrollTop: h}, 800, function () {
                    u.state.isDuringAjax = false
                })
            }
            if (!u.animate) {
                u.state.isDuringAjax = false
            }
            a(this, s, o);
            if (u.prefill) {
                this._prefill()
            }
        }, _nearbottom: function () {
            var i = this.options, s = 0 + t(document).height() - i.binder.scrollTop() - t(e).height();
            if (!!i.behavior && this["_nearbottom_" + i.behavior] !== n) {
                return this["_nearbottom_" + i.behavior].call(this)
            }
            this._debug("math:", s, i.pixelsFromNavToBottom);
            return s - i.bufferPx < i.pixelsFromNavToBottom
        }, _pausing: function (t) {
            var r = this.options;
            if (!!r.behavior && this["_pausing_" + r.behavior] !== n) {
                this["_pausing_" + r.behavior].call(this, t);
                return
            }
            if (t !== "pause" && t !== "resume" && t !== null) {
                this._debug("Invalid argument. Toggling pause value instead")
            }
            t = t && (t === "pause" || t === "resume") ? t : "toggle";
            switch (t) {
                case"pause":
                    r.state.isPaused = true;
                    break;
                case"resume":
                    r.state.isPaused = false;
                    break;
                case"toggle":
                    r.state.isPaused = !r.state.isPaused;
                    break
            }
            this._debug("Paused", r.state.isPaused);
            return false
        }, _setup: function () {
            var t = this.options;
            if (!!t.behavior && this["_setup_" + t.behavior] !== n) {
                this["_setup_" + t.behavior].call(this);
                return
            }
            this._binding("bind");
            return false
        }, _showdonemsg: function () {
            var r = this.options;
            if (!!r.behavior && this["_showdonemsg_" + r.behavior] !== n) {
                this["_showdonemsg_" + r.behavior].call(this);
                return
            }
            r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({opacity: 1}, 2e3, function () {
                t(this).parent().fadeOut(r.loading.speed)
            });
            r.errorCallback.call(t(r.contentSelector)[0], "done")
        }, _validate: function (n) {
            for (var r in n) {
                if (r.indexOf && r.indexOf("Selector") > -1 && t(n[r]).length === 0) {
                    this._debug("Your " + r + " found no elements.");
                    return false
                }
            }
            return true
        }, bind: function () {
            this._binding("bind")
        }, destroy: function () {
            this.options.state.isDestroyed = true;
            this.options.loading.finished();
            return this._error("destroy")
        }, pause: function () {
            this._pausing("pause")
        }, resume: function () {
            this._pausing("resume")
        }, beginAjax: function (r) {
            var i = this, s = r.path, o, u, a, f;
            r.state.currPage++;
            if (r.maxPage != n && r.state.currPage > r.maxPage) {
                r.state.isBeyondMaxPage = true;
                this.destroy();
                return
            }
            o = t(r.contentSelector).is("table, tbody") ? t("<tbody/>") : t("<div/>");
            u = typeof s === "function" ? s(r.state.currPage) : s.join(r.state.currPage);
            i._debug("heading into ajax", u);
            a = r.dataType === "html" || r.dataType === "json" ? r.dataType : "html+callback";
            if (r.appendCallback && r.dataType === "html") {
                a += "+callback"
            }
            switch (a) {
                case"html+callback":
                    i._debug("Using HTML via .load() method");
                    o.load(u + " " + r.itemSelector, n, function (t) {
                        i._loadcallback(o, t, u)
                    });
                    break;
                case"html":
                    i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
                    t.ajax({
                        url: u, dataType: r.dataType, complete: function (t, n) {
                            f = typeof t.isResolved !== "undefined" ? t.isResolved() : n === "success" || n === "notmodified";
                            if (f) {
                                i._loadcallback(o, t.responseText, u)
                            } else {
                                i._error("end")
                            }
                        }
                    });
                    break;
                case"json":
                    i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
                    t.ajax({
                        dataType: "json", type: "GET", url: u, success: function (e, t, s) {
                            f = typeof s.isResolved !== "undefined" ? s.isResolved() : t === "success" || t === "notmodified";
                            if (r.appendCallback) {
                                if (r.template !== n) {
                                    var a = r.template(e);
                                    o.append(a);
                                    if (f) {
                                        i._loadcallback(o, a)
                                    } else {
                                        i._error("end")
                                    }
                                } else {
                                    i._debug("template must be defined.");
                                    i._error("end")
                                }
                            } else {
                                if (f) {
                                    i._loadcallback(o, e, u)
                                } else {
                                    i._error("end")
                                }
                            }
                        }, error: function () {
                            i._debug("JSON ajax request failed.");
                            i._error("end")
                        }
                    });
                    break
            }
        }, retrieve: function (r) {
            r = r || null;
            var i = this, s = i.options;
            if (!!s.behavior && this["retrieve_" + s.behavior] !== n) {
                this["retrieve_" + s.behavior].call(this, r);
                return
            }
            if (s.state.isDestroyed) {
                this._debug("Instance is destroyed");
                return false
            }
            s.state.isDuringAjax = true;
            s.loading.start.call(t(s.contentSelector)[0], s)
        }, scroll: function () {
            var t = this.options, r = t.state;
            if (!!t.behavior && this["scroll_" + t.behavior] !== n) {
                this["scroll_" + t.behavior].call(this);
                return
            }
            if (r.isDuringAjax || r.isInvalidPage || r.isDone || r.isDestroyed || r.isPaused) {
                return
            }
            if (!this._nearbottom()) {
                return
            }
            this.retrieve()
        }, toggle: function () {
            this._pausing()
        }, unbind: function () {
            this._binding("unbind")
        }, update: function (n) {
            if (t.isPlainObject(n)) {
                this.options = t.extend(true, this.options, n)
            }
        }
    };
    t.fn.infinitescroll = function (n, r) {
        var i = typeof n;
        switch (i) {
            case"string":
                var s = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    var e = t.data(this, "infinitescroll");
                    if (!e) {
                        return false
                    }
                    if (!t.isFunction(e[n]) || n.charAt(0) === "_") {
                        return false
                    }
                    e[n].apply(e, s)
                });
                break;
            case"object":
                this.each(function () {
                    var e = t.data(this, "infinitescroll");
                    if (e) {
                        e.update(n)
                    } else {
                        e = new t.infinitescroll(n, r, this);
                        if (!e.failed) {
                            t.data(this, "infinitescroll", e)
                        }
                    }
                });
                break
        }
        return this
    };
    var r = t.event, i;
    r.special.smartscroll = {
        setup: function () {
            t(this).bind("scroll", r.special.smartscroll.handler)
        }, teardown: function () {
            t(this).unbind("scroll", r.special.smartscroll.handler)
        }, handler: function (e, n) {
            var r = this, s = arguments;
            e.type = "smartscroll";
            if (i) {
                clearTimeout(i)
            }
            i = setTimeout(function () {
                t(r).trigger("smartscroll", s)
            }, n === "execAsap" ? 0 : 100)
        }
    };
    t.fn.smartscroll = function (e) {
        return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"])
    }
})(window, jQuery);


/*! jQuery UI - v1.10.3 - 2013-10-16
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.tabs.js, jquery.ui.effect.js, jquery.ui.effect-fade.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

(function (e, t) {
    function i(t, i) {
        var s, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    var s = 0, a = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function (t) {
            return function (i, n) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), n && n.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus), scrollParent: function () {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        }, zIndex: function (i) {
            if (i !== t)return this.css("zIndex", i);
            if (this.length)for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
                if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s))return s;
                a = a.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++s)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                a.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, n) {
            return !!e.data(t, n[3])
        }, focusable: function (t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        }, tabbable: function (t) {
            var n = e.attr(t, "tabindex"), s = isNaN(n);
            return (s || n >= 0) && i(t, !s)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
        function s(t, i, n, s) {
            return e.each(a, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }

        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], o = n.toLowerCase(), r = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + n] = function (i) {
            return i === t ? r["inner" + n].call(this) : this.each(function () {
                e(this).css(o, s(this, i) + "px")
            })
        }, e.fn["outer" + n] = function (t, i) {
            return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function () {
                e(this).css(o, s(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, i, n) {
                var s, a = e.ui[t].prototype;
                for (s in n)a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
            }, call: function (e, t, i) {
                var n, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)for (n = 0; s.length > n; n++)e.options[s[n][0]] && s[n][1].apply(e.element, i)
            }
        }, hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow"))return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
        }
    })
})(jQuery);
(function (t, e) {
    var i = 0, s = Array.prototype.slice, n = t.cleanData;
    t.cleanData = function (e) {
        for (var i, s = 0; null != (i = e[s]); s++)try {
            t(i).triggerHandler("remove")
        } catch (o) {
        }
        n(e)
    }, t.widget = function (i, s, n) {
        var o, a, r, h, l = {}, c = i.split(".")[0];
        i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
            return !!t.data(e, o)
        }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function (t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
        }, t.extend(r, a, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function (i, n) {
            return t.isFunction(n) ? (l[i] = function () {
                var t = function () {
                    return s.prototype[i].apply(this, arguments)
                }, e = function (t) {
                    return s.prototype[i].apply(this, t)
                };
                return function () {
                    var i, s = this._super, o = this._superApply;
                    return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
                }
            }(), e) : (l[i] = n, e)
        }), r.prototype = t.widget.extend(h, {widgetEventPrefix: a ? h.widgetEventPrefix : i}, l, {
            constructor: r,
            namespace: c,
            widgetName: i,
            widgetFullName: o
        }), a ? (t.each(a._childConstructors, function (e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
    }, t.widget.extend = function (i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)for (n in a[r])o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function (i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function (a) {
            var r = "string" == typeof a, h = s.call(arguments, 1), l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function () {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function () {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
            }), l
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (i, s) {
            var n, o, a, r = i;
            if (0 === arguments.length)return t.widget.extend({}, this.options);
            if ("string" == typeof i)if (r = {}, n = i.split("."), i = n.shift(), n.length) {
                for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++)o[n[a]] = o[n[a]] || {}, o = o[n[a]];
                if (i = n.pop(), s === e)return o[i] === e ? null : o[i];
                o[i] = s
            } else {
                if (s === e)return this.options[i] === e ? null : this.options[i];
                r[i] = s
            }
            return this._setOptions(r), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t)this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (i, s, n) {
            var o, a = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function (n, r) {
                function h() {
                    return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
                }

                "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + a.eventNamespace, u = l[2];
                u ? o.delegate(u, c, h) : s.bind(c, h)
            })
        },
        _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function (t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                }, focusout: function (e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)for (n in o)n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
            "string" == typeof n && (n = {effect: n});
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {duration: n}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function (t) {
    var e = !1;
    t(document).mouseup(function () {
        e = !1
    }), t.widget("ui.mouse", {
        version: "1.10.3",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this, n = 1 === i.which, a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return s._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return s._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function (e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function (e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    })
})(jQuery);
(function (t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {top: 0, left: 0}
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {top: e.scrollTop(), left: e.scrollLeft()}
        } : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }

    t.ui = t.ui || {};
    var a, o = Math.max, r = Math.abs, l = Math.round, h = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position;
    t.position = {
        scrollbarWidth: function () {
            if (a !== e)return a;
            var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
            return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
        }, getScrollInfo: function (e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x"), s = e.isWindow ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
            return {width: a ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (e) {
            var i = t(e || window), s = t.isWindow(i[0]);
            return {
                element: i,
                isWindow: s,
                offset: i.offset() || {left: 0, top: 0},
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: s ? i.width() : i.outerWidth(),
                height: s ? i.height() : i.outerHeight()
            }
        }
    }, t.fn.position = function (e) {
        if (!e || !e.of)return f.apply(this, arguments);
        e = t.extend({}, e);
        var a, p, g, m, v, _, b = t(e.of), y = t.position.getWithinInfo(e.within), k = t.position.getScrollInfo(y), w = (e.collision || "flip").split(" "), D = {};
        return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function () {
            var t, i, s = (e[this] || "").split(" ");
            1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), D[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this.each(function () {
            var n, h, c = t(this), u = c.outerWidth(), d = c.outerHeight(), f = s(this, "marginLeft"), _ = s(this, "marginTop"), x = u + f + s(this, "marginRight") + k.width, C = d + _ + s(this, "marginBottom") + k.height, M = t.extend({}, v), T = i(D.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2), "bottom" === e.my[1] ? M.top -= d : "center" === e.my[1] && (M.top -= d / 2), M.left += T[0], M.top += T[1], t.support.offsetFractions || (M.left = l(M.left), M.top = l(M.top)), n = {
                marginLeft: f,
                marginTop: _
            }, t.each(["left", "top"], function (i, s) {
                t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {
                    targetWidth: p,
                    targetHeight: g,
                    elemWidth: u,
                    elemHeight: d,
                    collisionPosition: n,
                    collisionWidth: x,
                    collisionHeight: C,
                    offset: [a[0] + T[0], a[1] + T[1]],
                    my: e.my,
                    at: e.at,
                    within: y,
                    elem: c
                })
            }), e.using && (h = function (t) {
                var i = m.left - M.left, s = i + p - u, n = m.top - M.top, a = n + g - d, l = {
                    target: {
                        element: b,
                        left: m.left,
                        top: m.top,
                        width: p,
                        height: g
                    },
                    element: {element: c, left: M.left, top: M.top, width: u, height: d},
                    horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                    vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                };
                u > p && p > r(i + s) && (l.horizontal = "center"), d > g && g > r(n + a) && (l.vertical = "middle"), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, l)
            }), c.offset(t.extend(M, {using: h}))
        })
    }, t.ui.position = {
        fit: {
            left: function (t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
                e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
            }, top: function (t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
                e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
            }
        }, flip: {
            left: function (t, e) {
                var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l, u = h + e.collisionWidth - o - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f))
            }, top: function (t, e) {
                var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l, u = h + e.collisionHeight - o - l, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
                0 > c ? (s = t.top + p + f + g + e.collisionHeight - o - a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
            }
        }, flipfit: {
            left: function () {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function () {
        var e, i, s, n, a, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
        e = document.createElement(o ? "div" : "body"), s = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, o && t.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (a in s)e.style[a] = s[a];
        e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
    }()
})(jQuery);
(function (t, e) {
    function i() {
        return ++n
    }

    function s(t) {
        return t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
    }

    var n = 0, a = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function () {
            var e = this, i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var i = this.options.active, s = this.options.collapsible, n = location.hash.substring(1);
            return null === i && (n && this.tabs.each(function (s, a) {
                return t(a).attr("aria-controls") === n ? (i = s, !1) : e
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
        },
        _tabKeydown: function (i) {
            var s = t(this.document[0].activeElement).closest("li"), n = this.tabs.index(s), a = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        a = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
                    case t.ui.keyCode.ENTER:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
                    default:
                        return
                }
                i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function (e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (i) {
            return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
        },
        _findNextTab: function (e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e
            }

            for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);)e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function (t, i) {
            return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
        },
        _tabId: function (t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function () {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function (i, n) {
                var a, o, r, h = t(n).uniqueId().attr("id"), l = t(n).closest("li"), c = l.attr("aria-controls");
                s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                    "aria-controls": a.substring(1),
                    "aria-labelledby": h
                }), o.attr("aria-labelledby", h)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function () {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, s = 0; i = this.tabs[s]; s++)e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function (e) {
            var i = {
                click: function (t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (e) {
            var i = this.options, s = this.active, n = t(e.currentTarget), a = n.closest("li"), o = a[0] === s[0], r = o && i.collapsible, h = r ? t() : this._getPanelForTab(a), l = s.length ? this._getPanelForTab(s) : t(), c = {
                oldTab: s,
                oldPanel: l,
                newTab: r ? t() : a,
                newPanel: h
            };
            e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, c))
        },
        _toggle: function (e, i) {
            function s() {
                a.running = !1, a._trigger("activate", e, i)
            }

            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
            }

            var a = this, o = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({"aria-selected": "true", tabIndex: 0})
        },
        _activate: function (e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (i) {
            var s = this.options.disabled;
            s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function (t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(s))
        },
        disable: function (i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === e)s = !0; else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, s))return;
                    s = t.isArray(s) ? t.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },
        load: function (e, i) {
            e = this._getIndex(e);
            var n = this, a = this.tabs.eq(e), o = a.find(".ui-tabs-anchor"), r = this._getPanelForTab(a), h = {
                tab: a,
                panel: r
            };
            s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) {
                setTimeout(function () {
                    r.html(t), n._trigger("load", i, h)
                }, 1)
            }).complete(function (t, e) {
                setTimeout(function () {
                    "abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function (e, i, s) {
            var n = this;
            return {
                url: e.attr("href"), beforeSend: function (e, a) {
                    return n._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: a}, s))
                }
            }
        },
        _getPanelForTab: function (e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
})(jQuery);
(function (t, e) {
    var i = "ui-effects-";
    t.effects = {effect: {}}, function (t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }

        function s(i) {
            var s = h(), n = s._rgba = [];
            return i = i.toLowerCase(), f(l, function (t, a) {
                var o, r = a.re.exec(i), l = r && a.parse(r), h = a.space || "rgba";
                return l ? (o = s[h](l), s[c[h].cache] = o[c[h].cache], n = s._rgba = o._rgba, !1) : e
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
        }

        function n(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }], h = t.Color = function (e, i, s, n) {
            return new t.Color.fn.parse(e, i, s, n)
        }, c = {
            rgba: {
                props: {
                    red: {idx: 0, type: "byte"},
                    green: {idx: 1, type: "byte"},
                    blue: {idx: 2, type: "byte"}
                }
            },
            hsla: {
                props: {
                    hue: {idx: 0, type: "degrees"},
                    saturation: {idx: 1, type: "percent"},
                    lightness: {idx: 2, type: "percent"}
                }
            }
        }, u = {
            "byte": {floor: !0, max: 255},
            percent: {max: 1},
            degrees: {mod: 360, floor: !0}
        }, d = h.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), h.fn = t.extend(h.prototype, {
            parse: function (n, o, r, l) {
                if (n === e)return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
                var u = this, d = t.type(n), p = this._rgba = [];
                return o !== e && (n = [n, o, r, l], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
                    p[e.idx] = i(n[e.idx], e)
                }), this) : "object" === d ? (n instanceof h ? f(c, function (t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                }) : f(c, function (e, s) {
                    var a = s.cache;
                    f(s.props, function (t, e) {
                        if (!u[a] && s.to) {
                            if ("alpha" === t || null == n[t])return;
                            u[a] = s.to(u._rgba)
                        }
                        u[a][e.idx] = i(n[t], e, !0)
                    }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
                }), this) : e
            }, is: function (t) {
                var i = h(t), s = !0, n = this;
                return f(c, function (t, a) {
                    var o, r = i[a.cache];
                    return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                    })), s
                }), s
            }, _space: function () {
                var t = [], e = this;
                return f(c, function (i, s) {
                    e[s.cache] && t.push(i)
                }), t.pop()
            }, transition: function (t, e) {
                var s = h(t), n = s._space(), a = c[n], o = 0 === this.alpha() ? h("transparent") : this, r = o[a.cache] || a.to(o._rgba), l = r.slice();
                return s = s[a.cache], f(a.props, function (t, n) {
                    var a = n.idx, o = r[a], h = s[a], c = u[n.type] || {};
                    null !== h && (null === o ? l[a] = h : (c.mod && (h - o > c.mod / 2 ? o += c.mod : o - h > c.mod / 2 && (o -= c.mod)), l[a] = i((h - o) * e + o, n)))
                }), this[n](l)
            }, blend: function (e) {
                if (1 === this._rgba[3])return this;
                var i = this._rgba.slice(), s = i.pop(), n = h(e)._rgba;
                return h(t.map(i, function (t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            }, toRgbaString: function () {
                var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            }, toHslaString: function () {
                var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            }, toHexString: function (e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), h.fn.parse.prototype = h.fn, c.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), l = Math.min(s, n, a), h = r - l, c = r + l, u = .5 * c;
            return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
        }, c.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], a = t[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o;
            return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
        }, f(c, function (s, n) {
            var a = n.props, o = n.cache, l = n.to, c = n.from;
            h.fn[s] = function (s) {
                if (l && !this[o] && (this[o] = l(this._rgba)), s === e)return this[o].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[o].slice();
                return f(a, function (t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                }), c ? (n = h(c(d)), n[o] = d, n) : h(d)
            }, f(a, function (e, i) {
                h.fn[e] || (h.fn[e] = function (n) {
                    var a, o = t.type(n), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, h = this[l](), c = h[i.idx];
                    return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                })
            })
        }), h.hook = function (e) {
            var i = e.split(" ");
            f(i, function (e, i) {
                t.cssHooks[i] = {
                    set: function (e, n) {
                        var a, o, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                            if (n = h(a || n), !d.rgba && 1 !== n._rgba[3]) {
                                for (o = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && o && o.style;)try {
                                    r = t.css(o, "backgroundColor"), o = o.parentNode
                                } catch (l) {
                                }
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (l) {
                        }
                    }
                }, t.fx.step[i] = function (e) {
                    e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, h.hook(o), t.cssHooks.borderColor = {
            expand: function (t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                    e["border" + s + "Color"] = t
                }), e
            }
        }, a = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), function () {
        function i(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, a = {};
            if (n && n.length && n[0] && n[n[0]])for (s = n.length; s--;)i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]); else for (i in n)"string" == typeof n[i] && (a[i] = n[i]);
            return a
        }

        function s(e, i) {
            var s, n, o = {};
            for (s in i)n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
            return o
        }

        var n = ["add", "remove", "toggle"], a = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
            t.fx.step[i] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.effects.animateClass = function (e, a, o, r) {
            var l = t.speed(a, o, r);
            return this.queue(function () {
                var a, o = t(this), r = o.attr("class") || "", h = l.children ? o.find("*").addBack() : o;
                h = h.map(function () {
                    var e = t(this);
                    return {el: e, start: i(this)}
                }), a = function () {
                    t.each(n, function (t, i) {
                        e[i] && o[i + "Class"](e[i])
                    })
                }, a(), h = h.map(function () {
                    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                }), o.attr("class", r), h = h.map(function () {
                    var e = this, i = t.Deferred(), s = t.extend({}, l, {
                        queue: !1, complete: function () {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise()
                }), t.when.apply(t, h.get()).done(function () {
                    a(), t.each(arguments, function () {
                        var e = this.el;
                        t.each(this.diff, function (t) {
                            e.css(t, "")
                        })
                    }), l.complete.call(o[0])
                })
            })
        }, t.fn.extend({
            addClass: function (e) {
                return function (i, s, n, a) {
                    return s ? t.effects.animateClass.call(this, {add: i}, s, n, a) : e.apply(this, arguments)
                }
            }(t.fn.addClass), removeClass: function (e) {
                return function (i, s, n, a) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, a) : e.apply(this, arguments)
                }
            }(t.fn.removeClass), toggleClass: function (i) {
                return function (s, n, a, o, r) {
                    return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {add: s} : {remove: s}, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: s}, n, a, o)
                }
            }(t.fn.toggleClass), switchClass: function (e, i, s, n, a) {
                return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, a)
            }
        })
    }(), function () {
        function s(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
        }

        function n(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }

        t.extend(t.effects, {
            version: "1.10.3", save: function (t, e) {
                for (var s = 0; e.length > s; s++)null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
            }, restore: function (t, s) {
                var n, a;
                for (a = 0; s.length > a; a++)null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
            }, setMode: function (t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            }, getBaseline: function (t, e) {
                var i, s;
                switch (t[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case"left":
                        s = 0;
                        break;
                    case"center":
                        s = .5;
                        break;
                    case"right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {x: s, y: i}
            }, createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper"))return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    "float": e.css("float")
                }, s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), n = {width: e.width(), height: e.height()}, a = document.activeElement;
                try {
                    a.id
                } catch (o) {
                    a = document.body
                }
                return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], function (t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(n), s.css(i).show()
            }, removeWrapper: function (e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
            }, setTransition: function (e, i, s, n) {
                return n = n || {}, t.each(i, function (t, i) {
                    var a = e.cssUnit(i);
                    a[0] > 0 && (n[i] = a[0] * s + a[1])
                }), n
            }
        }), t.fn.extend({
            effect: function () {
                function e(e) {
                    function s() {
                        t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
                    }

                    var n = t(this), a = i.complete, r = i.mode;
                    (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
                }

                var i = s.apply(this, arguments), n = i.mode, a = i.queue, o = t.effects.effect[i.effect];
                return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function () {
                    i.complete && i.complete.call(this)
                }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
            }, show: function (t) {
                return function (e) {
                    if (n(e))return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "show", this.effect.call(this, i)
                }
            }(t.fn.show), hide: function (t) {
                return function (e) {
                    if (n(e))return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "hide", this.effect.call(this, i)
                }
            }(t.fn.hide), toggle: function (t) {
                return function (e) {
                    if (n(e) || "boolean" == typeof e)return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "toggle", this.effect.call(this, i)
                }
            }(t.fn.toggle), cssUnit: function (e) {
                var i = this.css(e), s = [];
                return t.each(["em", "px", "%", "pt"], function (t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            }
        })
    }(), function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
            e[i] = function (e) {
                return Math.pow(e, t + 2)
            }
        }), t.extend(e, {
            Sine: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, Circ: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, Elastic: function (t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            }, Back: function (t) {
                return t * t * (3 * t - 2)
            }, Bounce: function (t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), t.each(e, function (e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function (t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }()
})(jQuery);
(function (t) {
    t.effects.effect.fade = function (e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({opacity: n}, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
    }
})(jQuery);


/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), s = i.data("bs.alert");
            s || i.data("bs.alert", s = new o(this)), "string" == typeof e && s[e].call(i)
        })
    }

    var i = '[data-dismiss="alert"]', o = function (e) {
        t(e).on("click", i, this.close)
    };
    o.VERSION = "3.3.1", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }

        var s = t(this), n = s.attr("data-target");
        n || (n = s.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(n);
        e && e.preventDefault(), a.length || (a = s.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var s = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
        return t.fn.alert = s, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), s = o.data("bs.button"), n = "object" == typeof e && e;
            s || o.data("bs.button", s = new i(this, n)), "toggle" == e ? s.toggle() : e && s.setState(e)
        })
    }

    var i = function (e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.1", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
        var i = "disabled", o = this.$element, s = o.is("input") ? "val" : "html", n = o.data();
        e += "Text", null == n.resetText && o.data("resetText", o[s]()), setTimeout(t.proxy(function () {
            o[s](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), s = o.data("bs.carousel"), n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e), a = "string" == typeof e ? e : n.slide;
            s || o.data("bs.carousel", s = new i(this, n)), "number" == typeof e ? s.to(e) : a ? s[a]() : n.interval && s.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = "prev" == t ? -1 : 1, o = this.getItemIndex(e), s = (o + i) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function (t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function (e, o) {
        var s = this.$element.find(".item.active"), n = o || this.getItemForDirection(e, s), a = this.interval, r = "next" == e ? "left" : "right", l = "next" == e ? "first" : "last", h = this;
        if (!n.length) {
            if (!this.options.wrap)return;
            n = this.$element.find(".item")[l]()
        }
        if (n.hasClass("active"))return this.sliding = !1;
        var d = n[0], p = t.Event("slide.bs.carousel", {relatedTarget: d, direction: r});
        if (this.$element.trigger(p), !p.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(n)]);
                c && c.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", {relatedTarget: d, direction: r});
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, s.addClass(r), n.addClass(r), s.one("bsTransitionEnd", function () {
                n.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), h.sliding = !1, setTimeout(function () {
                    h.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(f)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var s = function (i) {
        var o, s = t(this), n = t(s.attr("data-target") || (o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var a = t.extend({}, n.data(), s.data()), r = s.attr("data-slide-to");
            r && (a.interval = !1), e.call(n, a), r && n.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        e && 3 === e.which || (t(s).remove(), t(n).each(function () {
            var o = t(this), s = i(o), n = {relatedTarget: this};
            s.hasClass("open") && (s.trigger(e = t.Event("hide.bs.dropdown", n)), e.isDefaultPrevented() || (o.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", n)))
        }))
    }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function o(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }

    var s = ".dropdown-backdrop", n = '[data-toggle="dropdown"]', a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.1", a.prototype.toggle = function (o) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var n = i(s), a = n.hasClass("open");
            if (e(), !a) {
                "ontouchstart"in document.documentElement && !n.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var r = {relatedTarget: this};
                if (n.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented())return;
                s.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, a.prototype.keydown = function (e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var o = t(this);
            if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
                var s = i(o), a = s.hasClass("open");
                if (!a && 27 != e.which || a && 27 == e.which)return 27 == e.which && s.find(n).trigger("focus"), o.trigger("click");
                var r = " li:not(.divider):visible a", l = s.find('[role="menu"]' + r + ', [role="listbox"]' + r);
                if (l.length) {
                    var h = l.index(e.target);
                    38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, a.prototype.toggle).on("keydown.bs.dropdown.data-api", n, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), s = o.data("bs.tooltip"), n = "object" == typeof e && e, a = n && n.selector;
            (s || "destroy" != e) && (a ? (s || o.data("bs.tooltip", s = {}), s[a] || (s[a] = new i(this, n))) : s || o.data("bs.tooltip", s = new i(this, n)), "string" == typeof e && s[e]())
        })
    }

    var i = function (t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, i.prototype.init = function (e, i, o) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var s = this.options.trigger.split(" "), n = s.length; n--;) {
            var a = s[n];
            if ("click" == a)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin", l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function (t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o)return;
            var s = this, n = this.tip(), a = this.getUID(this.type);
            this.setContent(), n.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, h = l.test(r);
            h && (r = r.replace(l, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var d = this.getPosition(), p = n[0].offsetWidth, c = n[0].offsetHeight;
            if (h) {
                var f = r, u = this.options.container ? t(this.options.container) : this.$element.parent(), g = this.getPosition(u);
                r = "bottom" == r && d.bottom + c > g.bottom ? "top" : "top" == r && d.top - c < g.top ? "bottom" : "right" == r && d.right + p > g.width ? "left" : "left" == r && d.left - p < g.left ? "right" : r, n.removeClass(f).addClass(r)
            }
            var v = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(v, r);
            var m = function () {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var o = this.tip(), s = o[0].offsetWidth, n = o[0].offsetHeight, a = parseInt(o.css("margin-top"), 10), r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top = e.top + a, e.left = e.left + r, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth, h = o[0].offsetHeight;
        "top" == i && h != n && (e.top = e.top + n - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i), c = p ? 2 * d.left - s + l : 2 * d.top - n + h, f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function o() {
            "in" != s.hoverState && n.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e()
        }

        var s = this, n = this.tip(), a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0], o = "BODY" == i.tagName, s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, {width: s.right - s.left, height: s.bottom - s.top}));
        var n = o ? {
            top: 0,
            left: 0
        } : e.offset(), a = {scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, r = o ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, s, a, r, n)
    }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {top: e.top + e.height / 2 - o / 2, left: e.left - i} : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var s = {top: 0, left: 0};
        if (!this.$viewport)return s;
        var n = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - n - a.scroll, l = e.top + n - a.scroll + o;
            r < a.top ? s.top = a.top - r : l > a.top + a.height && (s.top = a.top + a.height - l)
        } else {
            var h = e.left - n, d = e.left + n + i;
            h < a.left ? s.left = a.left - h : d > a.width && (s.left = a.left + a.width - d)
        }
        return s
    }, i.prototype.getTitle = function () {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = o, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), s = o.data("bs.popover"), n = "object" == typeof e && e, a = n && n.selector;
            (s || "destroy" != e) && (a ? (s || o.data("bs.popover", s = {}), s[a] || (s[a] = new i(this, n))) : s || o.data("bs.popover", s = new i(this, n)), "string" == typeof e && s[e]())
        })
    }

    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.1", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, i.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = o, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), s = o.data("bs.tab");
            s || o.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a"), n = t.Event("hide.bs.tab", {relatedTarget: e[0]}), a = t.Event("show.bs.tab", {relatedTarget: s[0]});
            if (s.trigger(n), e.trigger(a), !a.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                    s.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, o, s) {
        function n() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
        }

        var a = o.find("> .active"), r = s && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var s = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), s = o.data("bs.affix"), n = "object" == typeof e && e;
            s || o.data("bs.affix", s = new i(this, n)), "string" == typeof e && s[e]()
        })
    }

    var i = function (e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.1", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, o) {
        var s = this.$target.scrollTop(), n = this.$element.offset(), a = this.$target.height();
        if (null != i && "top" == this.affixed)return i > s ? "top" : !1;
        if ("bottom" == this.affixed)return null != i ? s + this.unpin <= n.top ? !1 : "bottom" : t - o >= s + a ? !1 : "bottom";
        var r = null == this.affixed, l = r ? s : n.top, h = r ? a : e;
        return null != i && i >= l ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), o = this.options.offset, s = o.top, n = o.bottom, a = t("body").height();
            "object" != typeof o && (n = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof n && (n = o.bottom(this.$element));
            var r = this.getState(a, e, s, n);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""), h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented())return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({top: a - e - n})
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this), o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), s = i.data("bs.collapse"), n = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !s && n.toggle && "show" == e && (n.toggle = !1), s || i.data("bs.collapse", s = new o(this, n)), "string" == typeof e && s[e]()
        })
    }

    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.1", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, o.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, s = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
            if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var s = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : s.call(this)
            }
        }
    }, o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
            var s = t(o);
            this.addAriaAndCollapsedClass(e(s), s)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var s = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = s, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
        var s = t(this);
        s.attr("data-target") || o.preventDefault();
        var n = e(s), a = n.data("bs.collapse"), r = a ? "toggle" : t.extend({}, s.data(), {trigger: this});
        i.call(n, r)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(i, o) {
        var s = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var o = t(this), s = o.data("bs.scrollspy"), n = "object" == typeof i && i;
            s || o.data("bs.scrollspy", s = new e(this, n)), "string" == typeof i && s[i]()
        })
    }

    e.VERSION = "3.3.1", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = "offset", i = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var o = this;
        this.$body.find(this.selector).map(function () {
            var o = t(this), s = o.data("target") || o.attr("href"), n = /^#./.test(s) && t(s);
            return n && n.length && n.is(":visible") && [[n[e]().top + i, s]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            o.offsets.push(this[0]), o.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), o = this.options.offset + i - this.$scrollElement.height(), s = this.offsets, n = this.targets, a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o)return a != (t = n[n.length - 1]) && this.activate(t);
        if (a && e < s[0])return this.activeTarget = null, this.clear();
        for (t = s.length; t--;)a != n[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(n[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e)if (void 0 !== t.style[i])return {end: e[i]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var i = !1, o = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var s = function () {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(s, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);


/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (!this.length)return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
                i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function (e) {
                function s() {
                    var s;
                    return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0
                }

                return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
            })), i)
        }, valid: function () {
            if (t(this[0]).is("form"))return this.validate().form();
            var e = !0, i = t(this[0].form).validate();
            return this.each(function () {
                e = e && i.element(this)
            }), e
        }, removeAttrs: function (e) {
            var i = {}, s = this;
            return t.each(e.split(/\s/), function (t, e) {
                i[e] = s.attr(e), s.removeAttr(e)
            }), i
        }, rules: function (e, i) {
            var s = this[0];
            if (e) {
                var r = t.data(s.form, "validator").settings, n = r.rules, a = t.validator.staticRules(s);
                switch (e) {
                    case"add":
                        t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
                        break;
                    case"remove":
                        if (!i)return delete n[s.name], a;
                        var u = {};
                        return t.each(i.split(/\s/), function (t, e) {
                            u[e] = a[e], delete a[e]
                        }), u
                }
            }
            var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
            if (o.required) {
                var l = o.required;
                delete o.required, o = t.extend({required: l}, o)
            }
            return o
        }
    }), t.extend(t.expr[":"], {
        blank: function (e) {
            return !t.trim("" + t(e).val())
        }, filled: function (e) {
            return !!t.trim("" + t(e).val())
        }, unchecked: function (e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function (e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function (e, i) {
        return 1 === arguments.length ? function () {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
            e = e.replace(RegExp("\\{" + t + "\\}", "g"), function () {
                return i
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (t) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function (t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function (t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function (t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function (e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
            },
            unhighlight: function (e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
            }
        },
        setDefaults: function (e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function e(e) {
                    var i = t.data(this[0].form, "validator"), s = "on" + e.type.replace(/^validate/, "");
                    i.settings[s] && i.settings[s].call(i, this[0], e)
                }

                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i = this.groups = {};
                t.each(this.settings.groups, function (e, s) {
                    "string" == typeof s && (s = s.split(/\s/)), t.each(s, function (t, s) {
                        i[s] = e
                    })
                });
                var s = this.settings.rules;
                t.each(s, function (e, i) {
                    s[e] = t.validator.normalizeRule(i)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)this.check(e[t]);
                return this.valid()
            }, element: function (e) {
                e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                var i = this.check(e) !== !1;
                return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            }, showErrors: function (e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e)this.errorList.push({message: e[i], element: this.findByName(i)[0]});
                    this.successList = t.grep(this.successList, function (t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (t) {
                var e = 0;
                for (var i in t)e++;
                return e
            }, hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid)try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {
                }
            }, findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function (t) {
                    return t.element.name === e.name
                }).length && e
            }, elements: function () {
                var e = this, i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            }, clean: function (e) {
                return t(e)[0]
            }, errors: function () {
                var e = this.settings.errorClass.replace(" ", ".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            }, reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            }, elementValue: function (e) {
                var i = t(e).attr("type"), s = t(e).val();
                return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
            }, check: function (e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s = t(e).rules(), r = !1, n = this.elementValue(e);
                for (var a in s) {
                    var u = {method: a, parameters: s[a]};
                    try {
                        if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
                            r = !0;
                            continue
                        }
                        if (r = !1, "pending" === i)return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
                        if (!i)return this.formatAndAdd(e, u), !1
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o
                    }
                }
                return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
            }, customDataMessage: function (e, i) {
                return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
            }, customMessage: function (t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            }, findDefined: function () {
                for (var t = 0; arguments.length > t; t++)if (void 0 !== arguments[t])return arguments[t];
                return void 0
            }, defaultMessage: function (e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            }, formatAndAdd: function (e, i) {
                var s = this.defaultMessage(e, i.method), r = /\$?\{(\d+)\}/g;
                "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
                    message: s,
                    element: e
                }), this.errorMap[e.name] = s, this.submitted[e.name] = s
            }, addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            }, defaultShowErrors: function () {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var i = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (t = 0; this.successList[t]; t++)this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)for (t = 0, e = this.validElements(); e[t]; t++)this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return t(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (e, i) {
                var s = this.errorsFor(e);
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
            }, errorsFor: function (e) {
                var i = this.idOrName(e);
                return this.errors().filter(function () {
                    return t(this).attr("for") === i
                })
            }, idOrName: function (t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            }, validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            }, checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            }, findByName: function (e) {
                return t(this.currentForm).find("[name='" + e + "']")
            }, getLength: function (e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case"select":
                        return t("option:selected", i).length;
                    case"input":
                        if (this.checkable(i))return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            }, depend: function (t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            }, dependTypes: {
                "boolean": function (t) {
                    return t
                }, string: function (e, i) {
                    return !!t(e, i.form).length
                }, "function": function (t, e) {
                    return t(e)
                }
            }, optional: function (e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            }, startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            }, stopRequest: function (e, i) {
                this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function (e) {
            var i = {}, s = t(e).attr("class");
            return s && t.each(s.split(" "), function () {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function (e) {
            var i = {}, s = t(e), r = s[0].getAttribute("type");
            for (var n in t.validator.methods) {
                var a;
                "required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0)
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function (e) {
            var i, s, r = {}, n = t(e);
            for (i in t.validator.methods)s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
            return r
        },
        staticRules: function (e) {
            var i = {}, s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function (e, i) {
            return t.each(e, function (s, r) {
                if (r === !1)return delete e[s], void 0;
                if (r.param || r.depends) {
                    var n = !0;
                    switch (typeof r.depends) {
                        case"string":
                            n = !!t(r.depends, i.form).length;
                            break;
                        case"function":
                            n = r.depends.call(i, i)
                    }
                    n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
                }
            }), t.each(e, function (s, r) {
                e[s] = t.isFunction(r) ? r(i) : r
            }), t.each(["minlength", "maxlength"], function () {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function () {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function (e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function () {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function (e, i, s) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function (e, i, s) {
                if (!this.depend(s, i))return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            }, email: function (t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            }, url: function (t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            }, date: function (t, e) {
                return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
            }, dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
            }, number: function (t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            }, digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            }, creditcard: function (t, e) {
                if (this.optional(e))return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t))return !1;
                var i = 0, s = 0, r = !1;
                t = t.replace(/\D/g, "");
                for (var n = t.length - 1; n >= 0; n--) {
                    var a = t.charAt(n);
                    s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r
                }
                return 0 === i % 10
            }, minlength: function (e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s
            }, maxlength: function (e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || s >= r
            }, rangelength: function (e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s[0] && s[1] >= r
            }, min: function (t, e, i) {
                return this.optional(e) || t >= i
            }, max: function (t, e, i) {
                return this.optional(e) || i >= t
            }, range: function (t, e, i) {
                return this.optional(e) || t >= i[0] && i[1] >= t
            }, equalTo: function (e, i, s) {
                var r = t(s);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    t(i).valid()
                }), e === r.val()
            }, remote: function (e, i, s) {
                if (this.optional(i))return "dependency-mismatch";
                var r = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {url: s} || s, r.old === e)return r.valid;
                r.old = e;
                var n = this;
                this.startRequest(i);
                var a = {};
                return a[i.name] = e, t.ajax(t.extend(!0, {
                    url: s,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    success: function (s) {
                        n.settings.messages[i.name].remote = r.originalMessage;
                        var a = s === !0 || "true" === s;
                        if (a) {
                            var u = n.formSubmitted;
                            n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors()
                        } else {
                            var o = {}, l = s || n.defaultMessage(i, "remote");
                            o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o)
                        }
                        r.valid = a, n.stopRequest(i, a)
                    }
                }, s)), "pending"
            }
        }
    }), t.format = t.validator.format
})(jQuery), function (t) {
    var e = {};
    if (t.ajaxPrefilter)t.ajaxPrefilter(function (t, i, s) {
        var r = t.port;
        "abort" === t.mode && (e[r] && e[r].abort(), e[r] = s)
    }); else {
        var i = t.ajax;
        t.ajax = function (s) {
            var r = ("mode"in s ? s : t.ajaxSettings).mode, n = ("port"in s ? s : t.ajaxSettings).port;
            return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments)
        }
    }
}(jQuery), function (t) {
    t.extend(t.fn, {
        validateDelegate: function (e, i, s) {
            return this.bind(i, function (i) {
                var r = t(i.target);
                return r.is(e) ? s.apply(r, arguments) : void 0
            })
        }
    })
}(jQuery);