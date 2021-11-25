! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";

    function n(t, e) {
        e = e || et;
        var n = e.createElement("script");
        n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(t) {
        var e = !!t && "length" in t && t.length,
            n = ft.type(t);
        return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function r(t, e, n) {
        return ft.isFunction(e) ? ft.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? ft.grep(t, function(t) {
            return t === e !== n
        }) : "string" != typeof e ? ft.grep(t, function(t) {
            return ot.call(e, t) > -1 !== n
        }) : Tt.test(e) ? ft.filter(e, t, n) : (e = ft.filter(e, t), ft.grep(t, function(t) {
            return ot.call(e, t) > -1 !== n && 1 === t.nodeType
        }))
    }

    function s(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return ft.each(t.match(jt) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function a(t) {
        return t
    }

    function l(t) {
        throw t
    }

    function c(t, e, n) {
        var i;
        try {
            t && ft.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && ft.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
        } catch (t) {
            n.call(void 0, t)
        }
    }

    function u() {
        et.removeEventListener("DOMContentLoaded", u), t.removeEventListener("load", u), ft.ready()
    }

    function p() {
        this.expando = ft.expando + p.uid++
    }

    function d(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Lt.test(t) ? JSON.parse(t) : t)
    }

    function h(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Ot, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = d(n)
                } catch (r) {}
                qt.set(t, e, n)
            } else n = void 0;
        return n
    }

    function f(t, e, n, i) {
        var r, s = 1,
            o = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return ft.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
            u = (ft.cssNumber[e] || "px" !== c && +l) && Ft.exec(ft.css(t, e));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do s = s || ".5", u /= s, ft.style(t, e, u + c); while (s !== (s = a() / l) && 1 !== s && --o)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function g(t) {
        var e, n = t.ownerDocument,
            i = t.nodeName,
            r = Wt[i];
        return r ? r : (e = n.body.appendChild(n.createElement(i)), r = ft.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), Wt[i] = r, r)
    }

    function m(t, e) {
        for (var n, i, r = [], s = 0, o = t.length; s < o; s++) i = t[s], i.style && (n = i.style.display, e ? ("none" === n && (r[s] = Ht.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && It(i) && (r[s] = g(i))) : "none" !== n && (r[s] = "none", Ht.set(i, "display", n)));
        for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
        return t
    }

    function v(t, e) {
        var n;
        return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], n) : n
    }

    function y(t, e) {
        for (var n = 0, i = t.length; n < i; n++) Ht.set(t[n], "globalEval", !e || Ht.get(e[n], "globalEval"))
    }

    function w(t, e, n, i, r) {
        for (var s, o, a, l, c, u, p = e.createDocumentFragment(), d = [], h = 0, f = t.length; h < f; h++)
            if (s = t[h], s || 0 === s)
                if ("object" === ft.type(s)) ft.merge(d, s.nodeType ? [s] : s);
                else if (Gt.test(s)) {
            for (o = o || p.appendChild(e.createElement("div")), a = (Vt.exec(s) || ["", ""])[1].toLowerCase(), l = Qt[a] || Qt._default, o.innerHTML = l[1] + ft.htmlPrefilter(s) + l[2], u = l[0]; u--;) o = o.lastChild;
            ft.merge(d, o.childNodes), o = p.firstChild, o.textContent = ""
        } else d.push(e.createTextNode(s));
        for (p.textContent = "", h = 0; s = d[h++];)
            if (i && ft.inArray(s, i) > -1) r && r.push(s);
            else if (c = ft.contains(s.ownerDocument, s), o = v(p.appendChild(s), "script"), c && y(o), n)
            for (u = 0; s = o[u++];) Xt.test(s.type || "") && n.push(s);
        return p
    }

    function x() {
        return !0
    }

    function b() {
        return !1
    }

    function _() {
        try {
            return et.activeElement
        } catch (t) {}
    }

    function C(t, e, n, i, r, s) {
        var o, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) C(t, a, n, i, e[a], s);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = b;
        else if (!r) return t;
        return 1 === s && (o = r, r = function(t) {
            return ft().off(t), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = ft.guid++)), t.each(function() {
            ft.event.add(this, e, r, i, n)
        })
    }

    function T(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
    }

    function k(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function $(t) {
        var e = ie.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function E(t, e) {
        var n, i, r, s, o, a, l, c;
        if (1 === e.nodeType) {
            if (Ht.hasData(t) && (s = Ht.access(t), o = Ht.set(e, s), c = s.events)) {
                delete o.handle, o.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; n < i; n++) ft.event.add(e, r, c[r][n])
            }
            qt.hasData(t) && (a = qt.access(t), l = ft.extend({}, a), qt.set(e, l))
        }
    }

    function S(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Ut.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function D(t, e, i, r) {
        e = rt.apply([], e);
        var s, o, a, l, c, u, p = 0,
            d = t.length,
            h = d - 1,
            f = e[0],
            g = ft.isFunction(f);
        if (g || d > 1 && "string" == typeof f && !dt.checkClone && ne.test(f)) return t.each(function(n) {
            var s = t.eq(n);
            g && (e[0] = f.call(this, n, s.html())), D(s, e, i, r)
        });
        if (d && (s = w(e, t[0].ownerDocument, !1, t, r), o = s.firstChild, 1 === s.childNodes.length && (s = o), o || r)) {
            for (a = ft.map(v(s, "script"), k), l = a.length; p < d; p++) c = s, p !== h && (c = ft.clone(c, !0, !0), l && ft.merge(a, v(c, "script"))), i.call(t[p], c, p);
            if (l)
                for (u = a[a.length - 1].ownerDocument, ft.map(a, $), p = 0; p < l; p++) c = a[p], Xt.test(c.type || "") && !Ht.access(c, "globalEval") && ft.contains(u, c) && (c.src ? ft._evalUrl && ft._evalUrl(c.src) : n(c.textContent.replace(re, ""), u))
        }
        return t
    }

    function j(t, e, n) {
        for (var i, r = e ? ft.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || ft.cleanData(v(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function N(t, e, n) {
        var i, r, s, o, a = t.style;
        return n = n || ae(t), n && (o = n.getPropertyValue(e) || n[e], "" !== o || ft.contains(t.ownerDocument, t) || (o = ft.style(t, e)), !dt.pixelMarginRight() && oe.test(o) && se.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function z(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function A(t) {
        if (t in de) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = pe.length; n--;)
            if (t = pe[n] + e, t in de) return t
    }

    function P(t, e, n) {
        var i = Ft.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function H(t, e, n, i, r) {
        var s, o = 0;
        for (s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2) "margin" === n && (o += ft.css(t, n + Rt[s], !0, r)), i ? ("content" === n && (o -= ft.css(t, "padding" + Rt[s], !0, r)), "margin" !== n && (o -= ft.css(t, "border" + Rt[s] + "Width", !0, r))) : (o += ft.css(t, "padding" + Rt[s], !0, r), "padding" !== n && (o += ft.css(t, "border" + Rt[s] + "Width", !0, r)));
        return o
    }

    function q(t, e, n) {
        var i, r = !0,
            s = ae(t),
            o = "border-box" === ft.css(t, "boxSizing", !1, s);
        if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), i <= 0 || null == i) {
            if (i = N(t, e, s), (i < 0 || null == i) && (i = t.style[e]), oe.test(i)) return i;
            r = o && (dt.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + H(t, e, n || (o ? "border" : "content"), r, s) + "px"
    }

    function L(t, e, n, i, r) {
        return new L.prototype.init(t, e, n, i, r)
    }

    function O() {
        fe && (t.requestAnimationFrame(O), ft.fx.tick())
    }

    function M() {
        return t.setTimeout(function() {
            he = void 0
        }), he = ft.now()
    }

    function F(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Rt[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function R(t, e, n) {
        for (var i, r = (W.tweeners[e] || []).concat(W.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (i = r[s].call(n, e, t)) return i
    }

    function I(t, e, n) {
        var i, r, s, o, a, l, c, u, p = "width" in e || "height" in e,
            d = this,
            h = {},
            f = t.style,
            g = t.nodeType && It(t),
            v = Ht.get(t, "fxshow");
        n.queue || (o = ft._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
            o.unqueued || a()
        }), o.unqueued++, d.always(function() {
            d.always(function() {
                o.unqueued--, ft.queue(t, "fx").length || o.empty.fire()
            })
        }));
        for (i in e)
            if (r = e[i], ge.test(r)) {
                if (delete e[i], s = s || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[i]) continue;
                    g = !0
                }
                h[i] = v && v[i] || ft.style(t, i)
            }
        if (l = !ft.isEmptyObject(e), l || !ft.isEmptyObject(h)) {
            p && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = v && v.display, null == c && (c = Ht.get(t, "display")), u = ft.css(t, "display"), "none" === u && (c ? u = c : (m([t], !0), c = t.style.display || c, u = ft.css(t, "display"), m([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === ft.css(t, "float") && (l || (d.done(function() {
                f.display = c
            }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), l = !1;
            for (i in h) l || (v ? "hidden" in v && (g = v.hidden) : v = Ht.access(t, "fxshow", {
                display: c
            }), s && (v.hidden = !g), g && m([t], !0), d.done(function() {
                g || m([t]), Ht.remove(t, "fxshow");
                for (i in h) ft.style(t, i, h[i])
            })), l = R(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function B(t, e) {
        var n, i, r, s, o;
        for (n in t)
            if (i = ft.camelCase(n), r = e[i], s = t[n], ft.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = ft.cssHooks[i], o && "expand" in o) {
                s = o.expand(s), delete t[i];
                for (n in s) n in t || (t[n] = s[n], e[n] = r)
            } else e[i] = r
    }

    function W(t, e, n) {
        var i, r, s = 0,
            o = W.prefilters.length,
            a = ft.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = he || M(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, s = 1 - i, o = 0, l = c.tweens.length; o < l; o++) c.tweens[o].run(s);
                return a.notifyWith(t, [c, s, n]), s < 1 && l ? n : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: ft.extend({}, e),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: he || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = ft.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (B(u, c.opts.specialEasing); s < o; s++)
            if (i = W.prefilters[s].call(c, t, u, c.opts)) return ft.isFunction(i.stop) && (ft._queueHooks(c.elem, c.opts.queue).stop = ft.proxy(i.stop, i)), i;
        return ft.map(u, R, c), ft.isFunction(c.opts.start) && c.opts.start.call(t, c), ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function U(t) {
        var e = t.match(jt) || [];
        return e.join(" ")
    }

    function V(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function X(t, e, n, i) {
        var r;
        if (ft.isArray(e)) ft.each(e, function(e, r) {
            n || $e.test(t) ? i(t, r) : X(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== ft.type(e)) i(t, e);
        else
            for (r in e) X(t + "[" + r + "]", e[r], n, i)
    }

    function Q(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                s = e.toLowerCase().match(jt) || [];
            if (ft.isFunction(n))
                for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function G(t, e, n, i) {
        function r(a) {
            var l;
            return s[a] = !0, ft.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var s = {},
            o = t === Oe;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function Y(t, e) {
        var n, i, r = ft.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ft.extend(!0, t, i), t
    }

    function Z(t, e, n) {
        for (var i, r, s, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) s = l[0];
        else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                o || (o = r)
            }
            s = s || o
        }
        if (s) return s !== l[0] && l.unshift(s), n[s]
    }

    function J(t, e, n, i) {
        var r, s, o, a, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
        for (s = u.shift(); s;)
            if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (o = c[l + " " + s] || c["* " + s], !o)
                for (r in c)
                    if (a = r.split(" "), a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                        o === !0 ? o = c[r] : c[r] !== !0 && (s = a[0], u.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: o ? p : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function K(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var tt = [],
        et = t.document,
        nt = Object.getPrototypeOf,
        it = tt.slice,
        rt = tt.concat,
        st = tt.push,
        ot = tt.indexOf,
        at = {},
        lt = at.toString,
        ct = at.hasOwnProperty,
        ut = ct.toString,
        pt = ut.call(Object),
        dt = {},
        ht = "3.1.1",
        ft = function(t, e) {
            return new ft.fn.init(t, e)
        },
        gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        vt = /-([a-z])/g,
        yt = function(t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: ht,
        constructor: ft,
        length: 0,
        toArray: function() {
            return it.call(this)
        },
        get: function(t) {
            return null == t ? it.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return ft.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ft.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: st,
        sort: tt.sort,
        splice: tt.splice
    }, ft.extend = ft.fn.extend = function() {
        var t, e, n, i, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || ft.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = o[e], i = t[e], o !== i && (c && i && (ft.isPlainObject(i) || (r = ft.isArray(i))) ? (r ? (r = !1, s = n && ft.isArray(n) ? n : []) : s = n && ft.isPlainObject(n) ? n : {}, o[e] = ft.extend(c, s, i)) : void 0 !== i && (o[e] = i));
        return o
    }, ft.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = ft.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== lt.call(t) || (e = nt(t)) && (n = ct.call(e, "constructor") && e.constructor, "function" != typeof n || ut.call(n) !== pt))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[lt.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            n(t)
        },
        camelCase: function(t) {
            return t.replace(mt, "ms-").replace(vt, yt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, r = 0;
            if (i(t))
                for (n = t.length; r < n && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(gt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : ot.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], s = 0, o = t.length, a = !n; s < o; s++) i = !e(t[s], s), i !== a && r.push(t[s]);
            return r
        },
        map: function(t, e, n) {
            var r, s, o = 0,
                a = [];
            if (i(t))
                for (r = t.length; o < r; o++) s = e(t[o], o, n), null != s && a.push(s);
            else
                for (o in t) s = e(t[o], o, n), null != s && a.push(s);
            return rt.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e], e = t, t = n), ft.isFunction(t)) return i = it.call(arguments, 2), r = function() {
                return t.apply(e || this, i.concat(it.call(arguments)))
            }, r.guid = t.guid = t.guid || ft.guid++, r
        },
        now: Date.now,
        support: dt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = tt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        at["[object " + e + "]"] = e.toLowerCase()
    });
    var wt = function(t) {
        function e(t, e, n, i) {
            var r, s, o, a, l, c, u, d = e && e.ownerDocument,
                f = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((e ? e.ownerDocument || e : R) !== A && z(e), e = e || A, H)) {
                if (11 !== f && (l = vt.exec(t)))
                    if (r = l[1]) {
                        if (9 === f) {
                            if (!(o = e.getElementById(r))) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (d && (o = d.getElementById(r)) && M(e, o) && o.id === r) return n.push(o), n
                    } else {
                        if (l[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = l[3]) && _.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(r)), n
                    }
                if (_.qsa && !V[t + " "] && (!q || !q.test(t))) {
                    if (1 !== f) d = e, u = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, _t) : e.setAttribute("id", a = F), c = $(t), s = c.length; s--;) c[s] = "#" + a + " " + h(c[s]);
                        u = c.join(","), d = yt.test(t) && p(e.parentNode) || e
                    }
                    if (u) try {
                        return J.apply(n, d.querySelectorAll(u)), n
                    } catch (g) {} finally {
                        a === F && e.removeAttribute("id")
                    }
                }
            }
            return S(t.replace(at, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[F] = !0, t
        }

        function r(t) {
            var e = A.createElement("fieldset");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = e
        }

        function o(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return function(e) {
                return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Tt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function u(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function p(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {}

        function h(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = e.next,
                s = r || i,
                o = n && "parentNode" === s,
                a = B++;
            return e.first ? function(e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o) return t(e, n, r);
                return !1
            } : function(e, n, l) {
                var c, u, p, d = [I, a];
                if (l) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, l)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o)
                            if (p = e[F] || (e[F] = {}), u = p[e.uniqueID] || (p[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((c = u[s]) && c[0] === I && c[1] === a) return d[2] = c[2];
                                if (u[s] = d, d[2] = t(e, n, l)) return !0
                            } return !1
            }
        }

        function g(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function m(t, n, i) {
            for (var r = 0, s = n.length; r < s; r++) e(t, n[r], i);
            return i
        }

        function v(t, e, n, i, r) {
            for (var s, o = [], a = 0, l = t.length, c = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), c && e.push(a)));
            return o
        }

        function y(t, e, n, r, s, o) {
            return r && !r[F] && (r = y(r)), s && !s[F] && (s = y(s, o)), i(function(i, o, a, l) {
                var c, u, p, d = [],
                    h = [],
                    f = o.length,
                    g = i || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? g : v(g, d, t, a, l),
                    w = n ? s || (i ? t : f || r) ? [] : o : y;
                if (n && n(y, w, a, l), r)
                    for (c = v(w, h), r(c, [], a, l), u = c.length; u--;)(p = c[u]) && (w[h[u]] = !(y[h[u]] = p));
                if (i) {
                    if (s || t) {
                        if (s) {
                            for (c = [], u = w.length; u--;)(p = w[u]) && c.push(y[u] = p);
                            s(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(p = w[u]) && (c = s ? tt(i, p) : d[u]) > -1 && (i[c] = !(o[c] = p))
                    }
                } else w = v(w === o ? w.splice(f, w.length) : w), s ? s(null, o, w, l) : J.apply(o, w)
            })
        }

        function w(t) {
            for (var e, n, i, r = t.length, s = C.relative[t[0].type], o = s || C.relative[" "], a = s ? 1 : 0, l = f(function(t) {
                    return t === e
                }, o, !0), c = f(function(t) {
                    return tt(e, t) > -1
                }, o, !0), u = [function(t, n, i) {
                    var r = !s && (i || n !== D) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, r
                }]; a < r; a++)
                if (n = C.relative[t[a].type]) u = [f(g(u), n)];
                else {
                    if (n = C.filter[t[a].type].apply(null, t[a].matches), n[F]) {
                        for (i = ++a; i < r && !C.relative[t[i].type]; i++);
                        return y(a > 1 && g(u), a > 1 && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, a < i && w(t.slice(a, i)), i < r && w(t = t.slice(i)), i < r && h(t))
                    }
                    u.push(n)
                }
            return g(u)
        }

        function x(t, n) {
            var r = n.length > 0,
                s = t.length > 0,
                o = function(i, o, a, l, c) {
                    var u, p, d, h = 0,
                        f = "0",
                        g = i && [],
                        m = [],
                        y = D,
                        w = i || s && C.find.TAG("*", c),
                        x = I += null == y ? 1 : Math.random() || .1,
                        b = w.length;
                    for (c && (D = o === A || o || c); f !== b && null != (u = w[f]); f++) {
                        if (s && u) {
                            for (p = 0, o || u.ownerDocument === A || (z(u), a = !H); d = t[p++];)
                                if (d(u, o || A, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (I = x)
                        }
                        r && ((u = !d && u) && h--, i && g.push(u))
                    }
                    if (h += f, r && f !== h) {
                        for (p = 0; d = n[p++];) d(g, m, o, a);
                        if (i) {
                            if (h > 0)
                                for (; f--;) g[f] || m[f] || (m[f] = Y.call(l));
                            m = v(m)
                        }
                        J.apply(l, m), c && !i && m.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (I = x, D = y), g
                };
            return r ? i(o) : o
        }
        var b, _, C, T, k, $, E, S, D, j, N, z, A, P, H, q, L, O, M, F = "sizzle" + 1 * new Date,
            R = t.document,
            I = 0,
            B = 0,
            W = n(),
            U = n(),
            V = n(),
            X = function(t, e) {
                return t === e && (N = !0), 0
            },
            Q = {}.hasOwnProperty,
            G = [],
            Y = G.pop,
            Z = G.push,
            J = G.push,
            K = G.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            ot = new RegExp(nt + "+", "g"),
            at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            pt = new RegExp(st),
            dt = new RegExp("^" + it + "$"),
            ht = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            ft = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            xt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            _t = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            Ct = function() {
                z()
            },
            Tt = f(function(t) {
                return t.disabled === !0 && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(G = K.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
        } catch (kt) {
            J = {
                apply: G.length ? function(t, e) {
                    Z.apply(t, K.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        _ = e.support = {}, k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, z = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : R;
            return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, P = A.documentElement, H = !k(A), R !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), _.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), _.getElementsByTagName = r(function(t) {
                return t.appendChild(A.createComment("")), !t.getElementsByTagName("*").length
            }), _.getElementsByClassName = mt.test(A.getElementsByClassName), _.getById = r(function(t) {
                return P.appendChild(t).id = F, !A.getElementsByName || !A.getElementsByName(F).length
            }), _.getById ? (C.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }, C.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && H) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }, C.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && H) {
                    var n, i, r, s = e.getElementById(t);
                    if (s) {
                        if (n = s.getAttributeNode("id"), n && n.value === t) return [s];
                        for (r = e.getElementsByName(t), i = 0; s = r[i++];)
                            if (n = s.getAttributeNode("id"), n && n.value === t) return [s]
                    }
                    return []
                }
            }), C.find.TAG = _.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, C.find.CLASS = _.getElementsByClassName && function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && H) return e.getElementsByClassName(t)
            }, L = [], q = [], (_.qsa = mt.test(A.querySelectorAll)) && (r(function(t) {
                P.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || q.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || q.push("~="), t.querySelectorAll(":checked").length || q.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || q.push(".#.+[+~]")
            }), r(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = A.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && q.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), P.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), q.push(",.*:")
            })), (_.matchesSelector = mt.test(O = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(t) {
                _.disconnectedMatch = O.call(t, "*"), O.call(t, "[s!='']:x"), L.push("!=", st)
            }), q = q.length && new RegExp(q.join("|")), L = L.length && new RegExp(L.join("|")), e = mt.test(P.compareDocumentPosition), M = e || mt.test(P.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, X = e ? function(t, e) {
                if (t === e) return N = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === A || t.ownerDocument === R && M(R, t) ? -1 : e === A || e.ownerDocument === R && M(R, e) ? 1 : j ? tt(j, t) - tt(j, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return N = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    s = e.parentNode,
                    a = [t],
                    l = [e];
                if (!r || !s) return t === A ? -1 : e === A ? 1 : r ? -1 : s ? 1 : j ? tt(j, t) - tt(j, e) : 0;
                if (r === s) return o(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? o(a[i], l[i]) : a[i] === R ? -1 : l[i] === R ? 1 : 0
            }, A) : A
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== A && z(t), n = n.replace(ut, "='$1']"), _.matchesSelector && H && !V[n + " "] && (!L || !L.test(n)) && (!q || !q.test(n))) try {
                var i = O.call(t, n);
                if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, A, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== A && z(t), M(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== A && z(t);
            var n = C.attrHandle[e.toLowerCase()],
                i = n && Q.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !H) : void 0;
            return void 0 !== i ? i : _.attributes || !H ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.escape = function(t) {
            return (t + "").replace(bt, _t)
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (N = !_.detectDuplicates, j = !_.sortStable && t.slice(0), t.sort(X), N) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return j = null, t
        }, T = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += T(e);
            return n
        }, C = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = $(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, xt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var s = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var c, u, p, d, h, f, g = s !== o ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            w = !1;
                        if (m) {
                            if (s) {
                                for (; g;) {
                                    for (d = e; d = d[g];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? m.firstChild : m.lastChild], o && y) {
                                for (d = m, p = d[F] || (d[F] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[t] || [], h = c[0] === I && c[1], w = h && c[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (w = h = 0) || f.pop();)
                                    if (1 === d.nodeType && ++w && d === e) {
                                        u[t] = [I, h, w];
                                        break
                                    }
                            } else if (y && (d = e, p = d[F] || (d[F] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[t] || [], h = c[0] === I && c[1], w = h), w === !1)
                                for (;
                                    (d = ++h && d && d[g] || (w = h = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (y && (p = d[F] || (d[F] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), u[t] = [I, w]), d !== e)););
                            return w -= r, w === i || w % i === 0 && w / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, s = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[F] ? s(n) : s.length > 1 ? (r = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = s(t, n), o = r.length; o--;) i = tt(t, r[o]), t[i] = !(e[i] = r[o])
                    }) : function(t) {
                        return s(t, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = E(t.replace(at, "$1"));
                    return r[F] ? i(function(t, e, n, i) {
                        for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, i, s) {
                        return e[0] = t, r(e, null, s, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(wt, xt),
                        function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === P
                },
                focus: function(t) {
                    return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: c(!1),
                disabled: c(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !C.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return ft.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) C.pseudos[b] = l(b);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, $ = e.tokenize = function(t, n) {
            var i, r, s, o, a, l, c, u = U[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, l = [], c = C.preFilter; a;) {
                i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ct.exec(a)) && (i = r.shift(), s.push({
                    value: i,
                    type: r[0].replace(at, " ")
                }), a = a.slice(i.length));
                for (o in C.filter) !(r = ht[o].exec(a)) || c[o] && !(r = c[o](r)) || (i = r.shift(), s.push({
                    value: i,
                    type: o,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
        }, E = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                s = V[t + " "];
            if (!s) {
                for (e || (e = $(t)), n = e.length; n--;) s = w(e[n]), s[F] ? i.push(s) : r.push(s);
                s = V(t, x(r, i)), s.selector = t
            }
            return s
        }, S = e.select = function(t, e, n, i) {
            var r, s, o, a, l, c = "function" == typeof t && t,
                u = !i && $(t = c.selector || t);
            if (n = n || [], 1 === u.length) {
                if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && 9 === e.nodeType && H && C.relative[s[1].type]) {
                    if (e = (C.find.ID(o.matches[0].replace(wt, xt), e) || [])[0], !e) return n;
                    c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = ht.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !C.relative[a = o.type]);)
                    if ((l = C.find[a]) && (i = l(o.matches[0].replace(wt, xt), yt.test(s[0].type) && p(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = i.length && h(s), !t) return J.apply(n, i), n;
                        break
                    }
            }
            return (c || E(t, u))(i, e, !H, n, !e || yt.test(t) && p(e.parentNode) || e), n
        }, _.sortStable = F.split("").sort(X).join("") === F, _.detectDuplicates = !!N, z(), _.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(A.createElement("fieldset"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(et, function(t, e, n) {
            var i;
            if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    ft.find = wt, ft.expr = wt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = wt.uniqueSort, ft.text = wt.getText, ft.isXMLDoc = wt.isXML, ft.contains = wt.contains, ft.escapeSelector = wt.escape;
    var xt = function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && ft(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        bt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        _t = ft.expr.match.needsContext,
        Ct = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Tt = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function(t) {
            var e, n, i = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                for (e = 0; e < i; e++)
                    if (ft.contains(r[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) ft.find(t, r[e], n);
            return i > 1 ? ft.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && _t.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var kt, $t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Et = ft.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || kt, "string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : $t.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), Ct.test(i[1]) && ft.isPlainObject(e))
                        for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = et.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ft) : ft.makeArray(t, this)
        };
    Et.prototype = ft.fn, kt = ft(et);
    var St = /^(?:parents|prev(?:Until|All))/,
        Dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function(t) {
            var e = ft(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (ft.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0,
                r = this.length,
                s = [],
                o = "string" != typeof t && ft(t);
            if (!_t.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                            s.push(n);
                            break
                        }
            return this.pushStack(s.length > 1 ? ft.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ot.call(ft(t), this[0]) : ot.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return xt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return xt(t, "parentNode", n)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return xt(t, "nextSibling")
        },
        prevAll: function(t) {
            return xt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return xt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return xt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return bt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return bt(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || ft.merge([], t.childNodes)
        }
    }, function(t, e) {
        ft.fn[t] = function(n, i) {
            var r = ft.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ft.filter(i, r)), this.length > 1 && (Dt[t] || ft.uniqueSort(r), St.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var jt = /[^\x20\t\r\n\f]+/g;
    ft.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : ft.extend({}, t);
        var e, n, i, r, s = [],
            a = [],
            l = -1,
            c = function() {
                for (r = t.once, i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
            },
            u = {
                add: function() {
                    return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                        ft.each(e, function(e, n) {
                            ft.isFunction(n) ? t.unique && u.has(n) || s.push(n) : n && n.length && "string" !== ft.type(n) && i(n)
                        })
                    }(arguments), n && !e && c()), this
                },
                remove: function() {
                    return ft.each(arguments, function(t, e) {
                        for (var n;
                            (n = ft.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(t) {
                    return t ? ft.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return r = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = a = [], n || e || (s = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, ft.extend({
        Deferred: function(e) {
            var n = [
                    ["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2],
                    ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(t) {
                        return r.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return ft.Deferred(function(e) {
                            ft.each(n, function(n, i) {
                                var r = ft.isFunction(t[i[4]]) && t[i[4]];
                                s[i[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, i, r) {
                        function s(e, n, i, r) {
                            return function() {
                                var c = this,
                                    u = arguments,
                                    p = function() {
                                        var t, p;
                                        if (!(e < o)) {
                                            if (t = i.apply(c, u), t === n.promise()) throw new TypeError("Thenable self-resolution");
                                            p = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(p) ? r ? p.call(t, s(o, n, a, r), s(o, n, l, r)) : (o++, p.call(t, s(o, n, a, r), s(o, n, l, r), s(o, n, a, n.notifyWith))) : (i !== a && (c = void 0, u = [t]), (r || n.resolveWith)(c, u))
                                        }
                                    },
                                    d = r ? p : function() {
                                        try {
                                            p()
                                        } catch (t) {
                                            ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= o && (i !== l && (c = void 0, u = [t]), n.rejectWith(c, u))
                                        }
                                    };
                                e ? d() : (ft.Deferred.getStackHook && (d.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(d))
                            }
                        }
                        var o = 0;
                        return ft.Deferred(function(t) {
                            n[0][3].add(s(0, t, ft.isFunction(r) ? r : a, t.notifyWith)), n[1][3].add(s(0, t, ft.isFunction(e) ? e : a)), n[2][3].add(s(0, t, ft.isFunction(i) ? i : l))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ft.extend(t, r) : r
                    }
                },
                s = {};
            return ft.each(n, function(t, e) {
                var o = e[2],
                    a = e[5];
                r[e[1]] = o.add, a && o.add(function() {
                    i = a
                }, n[3 - t][2].disable, n[0][2].lock), o.add(e[3].fire), s[e[0]] = function() {
                    return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[e[0] + "With"] = o.fireWith
            }), r.promise(s), e && e.call(s, s), s
        },
        when: function(t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                r = it.call(arguments),
                s = ft.Deferred(),
                o = function(t) {
                    return function(n) {
                        i[t] = this, r[t] = arguments.length > 1 ? it.call(arguments) : n, --e || s.resolveWith(i, r)
                    }
                };
            if (e <= 1 && (c(t, s.done(o(n)).resolve, s.reject), "pending" === s.state() || ft.isFunction(r[n] && r[n].then))) return s.then();
            for (; n--;) c(r[n], o(n), s.reject);
            return s.promise()
        }
    });
    var Nt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ft.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && Nt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, ft.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var zt = ft.Deferred();
    ft.fn.ready = function(t) {
        return zt.then(t)["catch"](function(t) {
            ft.readyException(t)
        }), this
    }, ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || zt.resolveWith(et, [ft]))
        }
    }), ft.ready.then = zt.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(ft.ready) : (et.addEventListener("DOMContentLoaded", u), t.addEventListener("load", u));
    var At = function(t, e, n, i, r, s, o) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === ft.type(n)) {
                r = !0;
                for (a in n) At(t, e, a, n[a], !0, s, o)
            } else if (void 0 !== i && (r = !0, ft.isFunction(i) || (o = !0), c && (o ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(ft(t), n)
                })), e))
                for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : s
        },
        Pt = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    p.uid = 1, p.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, Pt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[ft.camelCase(e)] = n;
            else
                for (i in e) r[ft.camelCase(i)] = e[i];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    ft.isArray(e) ? e = e.map(ft.camelCase) : (e = ft.camelCase(e), e = e in i ? [e] : e.match(jt) || []), n = e.length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || ft.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !ft.isEmptyObject(e)
        }
    };
    var Ht = new p,
        qt = new p,
        Lt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ot = /[A-Z]/g;
    ft.extend({
        hasData: function(t) {
            return qt.hasData(t) || Ht.hasData(t)
        },
        data: function(t, e, n) {
            return qt.access(t, e, n)
        },
        removeData: function(t, e) {
            qt.remove(t, e)
        },
        _data: function(t, e, n) {
            return Ht.access(t, e, n)
        },
        _removeData: function(t, e) {
            Ht.remove(t, e)
        }
    }), ft.fn.extend({
        data: function(t, e) {
            var n, i, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = qt.get(s), 1 === s.nodeType && !Ht.get(s, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = ft.camelCase(i.slice(5)), h(s, i, r[i])));
                    Ht.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                qt.set(this, t)
            }) : At(this, function(e) {
                var n;
                if (s && void 0 === e) {
                    if (n = qt.get(s, t), void 0 !== n) return n;
                    if (n = h(s, t), void 0 !== n) return n
                } else this.each(function() {
                    qt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                qt.remove(this, t)
            })
        }
    }), ft.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = Ht.get(t, e), n && (!i || ft.isArray(n) ? i = Ht.access(t, e, ft.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ft.queue(t, e),
                i = n.length,
                r = n.shift(),
                s = ft._queueHooks(t, e),
                o = function() {
                    ft.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Ht.get(t, n) || Ht.access(t, n, {
                empty: ft.Callbacks("once memory").add(function() {
                    Ht.remove(t, [e + "queue", n])
                })
            })
        }
    }), ft.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = ft.queue(this, t, e);
                ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ft.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = ft.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --i || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = Ht.get(s[o], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Mt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ft = new RegExp("^(?:([+-])=|)(" + Mt + ")([a-z%]*)$", "i"),
        Rt = ["Top", "Right", "Bottom", "Left"],
        It = function(t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")
        },
        Bt = function(t, e, n, i) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            r = n.apply(t, i || []);
            for (s in e) t.style[s] = o[s];
            return r
        },
        Wt = {};
    ft.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                It(this) ? ft(this).show() : ft(this).hide()
            })
        }
    });
    var Ut = /^(?:checkbox|radio)$/i,
        Vt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Xt = /^$|\/(?:java|ecma)script/i,
        Qt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td;
    var Gt = /<|&#?\w+;/;
    ! function() {
        var t = et.createDocumentFragment(),
            e = t.appendChild(et.createElement("div")),
            n = et.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), dt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Yt = et.documentElement,
        Zt = /^key/,
        Jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Kt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var s, o, a, l, c, u, p, d, h, f, g, m = Ht.get(t);
            if (m)
                for (n.handler && (s = n, n = s.handler, r = s.selector), r && ft.find.matchesSelector(Yt, r), n.guid || (n.guid = ft.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function(e) {
                        return "undefined" != typeof ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(jt) || [""], c = e.length; c--;) a = Kt.exec(e[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h && (p = ft.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, p = ft.event.special[h] || {}, u = ft.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ft.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, s), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(t, i, f, o) !== !1 || t.addEventListener && t.addEventListener(h, o)), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), ft.event.global[h] = !0)
        },
        remove: function(t, e, n, i, r) {
            var s, o, a, l, c, u, p, d, h, f, g, m = Ht.hasData(t) && Ht.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(jt) || [""], c = e.length; c--;)
                    if (a = Kt.exec(e[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (p = ft.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, d = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) u = d[s], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(s, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(t, u));
                        o && !d.length && (p.teardown && p.teardown.call(t, f, m.handle) !== !1 || ft.removeEvent(t, h, m.handle), delete l[h])
                    } else
                        for (h in l) ft.event.remove(t, h + e[c], n, i, !0);
                ft.isEmptyObject(l) && Ht.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, r, s, o, a = ft.event.fix(t),
                l = new Array(arguments.length),
                c = (Ht.get(this, "events") || {})[a.type] || [],
                u = ft.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, a) !== !1) {
                for (o = ft.event.handlers.call(this, a, c), e = 0;
                    (r = o[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, i = ((ft.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, s, o, a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || c.disabled !== !0)) {
                        for (s = [], o = {}, n = 0; n < l; n++) i = e[n], r = i.selector + " ", void 0 === o[r] && (o[r] = i.needsContext ? ft(r, this).index(c) > -1 : ft.find(r, this, null, [c]).length), o[r] && s.push(i);
                        s.length && a.push({
                            elem: c,
                            handlers: s
                        })
                    }
            return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(ft.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ft.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[ft.expando] ? t : new ft.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== _() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === _() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ft.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ft.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, ft.Event = function(t, e) {
        return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? x : b, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = x, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = x, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = x, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && Zt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Jt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, ft.event.addProp), ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                return r && (r === i || ft.contains(i, r)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ft.fn.extend({
        on: function(t, e, n, i) {
            return C(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return C(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = b), this.each(function() {
                ft.event.remove(this, t, n, e)
            })
        }
    });
    var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ee = /<script|<style|<link/i,
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ie = /^true\/(.*)/,
        re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(te, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, s, o, a = t.cloneNode(!0),
                l = ft.contains(t.ownerDocument, t);
            if (!(dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (o = v(a), s = v(t), i = 0, r = s.length; i < r; i++) S(s[i], o[i]);
            if (e)
                if (n)
                    for (s = s || v(t), o = o || v(a), i = 0, r = s.length; i < r; i++) E(s[i], o[i]);
                else E(t, a);
            return o = v(a, "script"), o.length > 0 && y(o, !l && v(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, n, i, r = ft.event.special, s = 0; void 0 !== (n = t[s]); s++)
                if (Pt(n)) {
                    if (e = n[Ht.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, e.handle);
                        n[Ht.expando] = void 0
                    }
                    n[qt.expando] && (n[qt.expando] = void 0)
                }
        }
    }), ft.fn.extend({
        detach: function(t) {
            return j(this, t, !0)
        },
        remove: function(t) {
            return j(this, t)
        },
        text: function(t) {
            return At(this, function(t) {
                return void 0 === t ? ft.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return D(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return D(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return D(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return D(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ft.clone(this, t, e)
            })
        },
        html: function(t) {
            return At(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !ee.test(t) && !Qt[(Vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return D(this, arguments, function(e) {
                var n = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(v(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ft.fn[t] = function(t) {
            for (var n, i = [], r = ft(t), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), ft(r[o])[e](n), st.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var se = /^margin/,
        oe = new RegExp("^(" + Mt + ")(?!px)[a-z%]+$", "i"),
        ae = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        };
    ! function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Yt.appendChild(o);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Yt.removeChild(o), a = null
            }
        }
        var n, i, r, s, o = et.createElement("div"),
            a = et.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), ft.extend(dt, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return e(), i
            },
            pixelMarginRight: function() {
                return e(), r
            },
            reliableMarginLeft: function() {
                return e(), s
            }
        }))
    }();
    var le = /^(none|table(?!-c[ea]).+)/,
        ce = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ue = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pe = ["Webkit", "Moz", "ms"],
        de = et.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = N(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = ft.camelCase(e),
                    l = t.style;
                return e = ft.cssProps[a] || (ft.cssProps[a] = A(a) || a), o = ft.cssHooks[e] || ft.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : l[e] : (s = typeof n, "string" === s && (r = Ft.exec(n)) && r[1] && (n = f(t, e, r), s = "number"), void(null != n && n === n && ("number" === s && (n += r && r[3] || (ft.cssNumber[a] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var r, s, o, a = ft.camelCase(e);
            return e = ft.cssProps[a] || (ft.cssProps[a] = A(a) || a), o = ft.cssHooks[e] || ft.cssHooks[a], o && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = N(t, e, i)), "normal" === r && e in ue && (r = ue[e]), "" === n || n ? (s = parseFloat(r), n === !0 || isFinite(s) ? s || 0 : r) : r
        }
    }), ft.each(["height", "width"], function(t, e) {
        ft.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return !le.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? q(t, e, i) : Bt(t, ce, function() {
                    return q(t, e, i)
                })
            },
            set: function(t, n, i) {
                var r, s = i && ae(t),
                    o = i && H(t, e, i, "border-box" === ft.css(t, "boxSizing", !1, s), s);
                return o && (r = Ft.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = ft.css(t, e)), P(t, n, o)
            }
        }
    }), ft.cssHooks.marginLeft = z(dt.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - Bt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ft.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + Rt[i] + e] = s[i] || s[i - 2] || s[0];
                return r
            }
        }, se.test(t) || (ft.cssHooks[t + e].set = P)
    }), ft.fn.extend({
        css: function(t, e) {
            return At(this, function(t, e, n) {
                var i, r, s = {},
                    o = 0;
                if (ft.isArray(e)) {
                    for (i = ae(t), r = e.length; o < r; o++) s[e[o]] = ft.css(t, e[o], !1, i);
                    return s
                }
                return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), ft.Tween = L, L.prototype = {
        constructor: L,
        init: function(t, e, n, i, r, s) {
            this.elem = t, this.prop = n, this.easing = r || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ft.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = L.propHooks[this.prop];
            return t && t.get ? t.get(this) : L.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = L.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = L.prototype.init, ft.fx.step = {};
    var he, fe, ge = /^(?:toggle|show|hide)$/,
        me = /queueHooks$/;
    ft.Animation = ft.extend(W, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return f(n.elem, t, Ft.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(jt);
                for (var n, i = 0, r = t.length; i < r; i++) n = t[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(e)
            },
            prefilters: [I],
            prefilter: function(t, e) {
                e ? W.prefilters.unshift(t) : W.prefilters.push(t)
            }
        }), ft.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? ft.extend({}, t) : {
                complete: n || !n && e || ft.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ft.isFunction(e) && e
            };
            return ft.fx.off || et.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ft.fx.speeds ? i.duration = ft.fx.speeds[i.duration] : i.duration = ft.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
            }, i
        }, ft.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(It).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = ft.isEmptyObject(t),
                    s = ft.speed(e, n, i),
                    o = function() {
                        var e = W(this, ft.extend({}, t), s);
                        (r || Ht.get(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        s = ft.timers,
                        o = Ht.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && me.test(r) && i(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                    !e && n || ft.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = Ht.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        s = ft.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, ft.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ft.each(["toggle", "show", "hide"], function(t, e) {
            var n = ft.fn[e];
            ft.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, i, r)
            }
        }), ft.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ft.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ft.timers = [], ft.fx.tick = function() {
            var t, e = 0,
                n = ft.timers;
            for (he = ft.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || ft.fx.stop(), he = void 0
        }, ft.fx.timer = function(t) {
            ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
        }, ft.fx.interval = 13, ft.fx.start = function() {
            fe || (fe = t.requestAnimationFrame ? t.requestAnimationFrame(O) : t.setInterval(ft.fx.tick, ft.fx.interval))
        }, ft.fx.stop = function() {
            t.cancelAnimationFrame ? t.cancelAnimationFrame(fe) : t.clearInterval(fe), fe = null
        }, ft.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ft.fn.delay = function(e, n) {
            return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(r)
                }
            })
        },
        function() {
            var t = et.createElement("input"),
                e = et.createElement("select"),
                n = e.appendChild(et.createElement("option"));
            t.type = "checkbox", dt.checkOn = "" !== t.value, dt.optSelected = n.selected, t = et.createElement("input"), t.value = "t", t.type = "radio", dt.radioValue = "t" === t.value
        }();
    var ve, ye = ft.expr.attrHandle;
    ft.fn.extend({
        attr: function(t, e) {
            return At(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function(t, e, n) {
            var i, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === s && ft.isXMLDoc(t) || (r = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? ve : void 0)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ft.find.attr(t, e), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0,
                r = e && e.match(jt);
            if (r && 1 === t.nodeType)
                for (; n = r[i++];) t.removeAttribute(n)
        }
    }), ve = {
        set: function(t, e, n) {
            return e === !1 ? ft.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ye[e] || ft.find.attr;
        ye[e] = function(t, e, i) {
            var r, s, o = e.toLowerCase();
            return i || (s = ye[o], ye[o] = r, r = null != n(t, e, i) ? o : null, ye[o] = s), r
        }
    });
    var we = /^(?:input|select|textarea|button)$/i,
        xe = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return At(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[ft.propFix[t] || t]
            })
        }
    }), ft.extend({
        prop: function(t, e, n) {
            var i, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, r = ft.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : we.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), dt.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ft.propFix[this.toLowerCase()] = this
    }), ft.fn.extend({
        addClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).addClass(t.call(this, e, V(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(jt) || []; n = this[l++];)
                    if (r = V(n), i = 1 === n.nodeType && " " + U(r) + " ") {
                        for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        a = U(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).removeClass(t.call(this, e, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(jt) || []; n = this[l++];)
                    if (r = V(n), i = 1 === n.nodeType && " " + U(r) + " ") {
                        for (o = 0; s = e[o++];)
                            for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                        a = U(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                ft(this).toggleClass(t.call(this, n, V(this), e), e)
            }) : this.each(function() {
                var e, i, r, s;
                if ("string" === n)
                    for (i = 0, r = ft(this), s = t.match(jt) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== n || (e = V(this), e && Ht.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Ht.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + U(V(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var be = /\r/g;
    ft.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = ft.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, ft(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ft.isArray(r) && (r = ft.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = ft.valHooks[r.type] || ft.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(be, "") : null == n ? "" : n)) : void 0
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : U(ft.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, r = t.options,
                        s = t.selectedIndex,
                        o = "select-one" === t.type,
                        a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                        if (n = r[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, s = ft.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = ft.inArray(ft.valHooks.option.get(i), s) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), s
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                if (ft.isArray(e)) return t.checked = ft.inArray(ft(t).val(), e) > -1
            }
        }, dt.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var _e = /^(?:focusinfocus|focusoutblur)$/;
    ft.extend(ft.event, {
        trigger: function(e, n, i, r) {
            var s, o, a, l, c, u, p, d = [i || et],
                h = ct.call(e, "type") ? e.type : e,
                f = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = i = i || et, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(h + ft.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[ft.expando] ? e : new ft.Event(h, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ft.makeArray(n, [e]), p = ft.event.special[h] || {}, r || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                if (!r && !p.noBubble && !ft.isWindow(i)) {
                    for (l = p.delegateType || h, _e.test(l + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (i.ownerDocument || et) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0;
                    (o = d[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : p.bindType || h, u = (Ht.get(o, "events") || {})[e.type] && Ht.get(o, "handle"), u && u.apply(o, n), u = c && o[c], u && u.apply && Pt(o) && (e.result = u.apply(o, n), e.result === !1 && e.preventDefault());
                return e.type = h, r || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !Pt(i) || c && ft.isFunction(i[h]) && !ft.isWindow(i) && (a = i[c], a && (i[c] = null), ft.event.triggered = h, i[h](), ft.event.triggered = void 0, a && (i[c] = a)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = ft.extend(new ft.Event, n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(i, null, e)
        }
    }), ft.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return ft.event.trigger(t, e, n, !0)
        }
    }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        ft.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), dt.focusin = "onfocusin" in t, dt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Ht.access(i, e);
                r || i.addEventListener(t, n, !0), Ht.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Ht.access(i, e) - 1;
                r ? Ht.access(i, e, r) : (i.removeEventListener(t, n, !0), Ht.remove(i, e))
            }
        }
    });
    var Ce = t.location,
        Te = ft.now(),
        ke = /\?/;
    ft.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
    };
    var $e = /\[\]$/,
        Ee = /\r?\n/g,
        Se = /^(?:submit|button|image|reset|file)$/i,
        De = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                var n = ft.isFunction(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) X(n, t[n], e, r);
        return i.join("&")
    }, ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && De.test(this.nodeName) && !Se.test(t) && (this.checked || !Ut.test(t))
            }).map(function(t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ee, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ee, "\r\n")
                }
            }).get()
        }
    });
    var je = /%20/g,
        Ne = /#.*$/,
        ze = /([?&])_=[^&]*/,
        Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        He = /^(?:GET|HEAD)$/,
        qe = /^\/\//,
        Le = {},
        Oe = {},
        Me = "*/".concat("*"),
        Fe = et.createElement("a");
    Fe.href = Ce.href, ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ce.href,
            type: "GET",
            isLocal: Pe.test(Ce.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Me,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Y(Y(t, ft.ajaxSettings), e) : Y(ft.ajaxSettings, t)
        },
        ajaxPrefilter: Q(Le),
        ajaxTransport: Q(Oe),
        ajax: function(e, n) {
            function i(e, n, i, a) {
                var c, d, h, x, b, _ = n;
                u || (u = !0, l && t.clearTimeout(l), r = void 0, o = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (x = Z(f, C, i)), x = J(f, x, C, c), c ? (f.ifModified && (b = C.getResponseHeader("Last-Modified"), b && (ft.lastModified[s] = b), b = C.getResponseHeader("etag"), b && (ft.etag[s] = b)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state, d = x.data, h = x.error, c = !h)) : (h = _, !e && _ || (_ = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || _) + "", c ? v.resolveWith(g, [d, _, C]) : v.rejectWith(g, [C, _, h]), C.statusCode(w), w = void 0, p && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? d : h]), y.fireWith(g, [C, _]), p && (m.trigger("ajaxComplete", [C, f]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, s, o, a, l, c, u, p, d, h, f = ft.ajaxSetup({}, n),
                g = f.context || f,
                m = f.context && (g.nodeType || g.jquery) ? ft(g) : ft.event,
                v = ft.Deferred(),
                y = ft.Callbacks("once memory"),
                w = f.statusCode || {},
                x = {},
                b = {},
                _ = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = Ae.exec(o);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return u ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = b[t.toLowerCase()] = b[t.toLowerCase()] || t, x[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u) C.always(t[C.status]);
                            else
                                for (e in t) w[e] = [w[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return r && r.abort(e), i(0, e), this
                    }
                };
            if (v.promise(C), f.url = ((e || f.url || Ce.href) + "").replace(qe, Ce.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(jt) || [""], null == f.crossDomain) {
                c = et.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Fe.protocol + "//" + Fe.host != c.protocol + "//" + c.host
                } catch (T) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = ft.param(f.data, f.traditional)), G(Le, f, n, C), u) return C;
            p = ft.event && f.global, p && 0 === ft.active++ && ft.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !He.test(f.type), s = f.url.replace(Ne, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(je, "+")) : (h = f.url.slice(s.length), f.data && (s += (ke.test(s) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (s = s.replace(ze, "$1"), h = (ke.test(s) ? "&" : "?") + "_=" + Te++ + h), f.url = s + h), f.ifModified && (ft.lastModified[s] && C.setRequestHeader("If-Modified-Since", ft.lastModified[s]), ft.etag[s] && C.setRequestHeader("If-None-Match", ft.etag[s])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (f.beforeSend.call(g, C, f) === !1 || u)) return C.abort();
            if (_ = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), r = G(Oe, f, n, C)) {
                if (C.readyState = 1, p && m.trigger("ajaxSend", [C, f]), u) return C;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    u = !1, r.send(x, i)
                } catch (T) {
                    if (u) throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function(t, e, n) {
            return ft.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function(t, e) {
        ft[e] = function(t, n, i, r) {
            return ft.isFunction(n) && (r = r || i, i = n, n = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ft.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return ft.isFunction(t) ? this.each(function(e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ft(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ft.isFunction(t);
            return this.each(function(n) {
                ft(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                ft(this).replaceWith(this.childNodes)
            }), this
        }
    }), ft.expr.pseudos.hidden = function(t) {
        return !ft.expr.pseudos.visible(t)
    }, ft.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, ft.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    };
    var Re = {
            0: 200,
            1223: 204
        },
        Ie = ft.ajaxSettings.xhr();
    dt.cors = !!Ie && "withCredentials" in Ie, dt.ajax = Ie = !!Ie, ft.ajaxTransport(function(e) {
        var n, i;
        if (dt.cors || Ie && !e.crossDomain) return {
            send: function(r, s) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) a.setRequestHeader(o, r[o]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Re[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), ft.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ft.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = ft("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), et.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Be = [],
        We = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Be.pop() || ft.expando + "_" + Te++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, s, o, a = e.jsonp !== !1 && (We.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && We.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(We, "$1" + r) : e.jsonp !== !1 && (e.url += (ke.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || ft.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
            o = arguments
        }, i.always(function() {
            void 0 === s ? ft(t).removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, Be.push(r)), o && ft.isFunction(s) && s(o[0]), o = s = void 0
        }), "script"
    }), dt.createHTMLDocument = function() {
        var t = et.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), ft.parseHTML = function(t, e, n) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (n = e, e = !1);
        var i, r, s;
        return e || (dt.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = et.location.href, e.head.appendChild(i)) : e = et), r = Ct.exec(t), s = !n && [], r ? [e.createElement(r[1])] : (r = w([t], e, s), s && s.length && ft(s).remove(), ft.merge([], r.childNodes))
    }, ft.fn.load = function(t, e, n) {
        var i, r, s, o = this,
            a = t.indexOf(" ");
        return a > -1 && (i = U(t.slice(a)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && ft.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, o.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            o.each(function() {
                n.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ft.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ft.expr.pseudos.animated = function(t) {
        return ft.grep(ft.timers, function(e) {
            return t === e.elem
        }).length
    }, ft.offset = {
        setOffset: function(t, e, n) {
            var i, r, s, o, a, l, c, u = ft.css(t, "position"),
                p = ft(t),
                d = {};
            "static" === u && (t.style.position = "relative"), a = p.offset(), s = ft.css(t, "top"), l = ft.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1, c ? (i = p.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : p.css(d)
        }
    }, ft.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ft.offset.setOffset(this, t, e)
            });
            var e, n, i, r, s = this[0];
            return s ? s.getClientRects().length ? (i = s.getBoundingClientRect(), i.width || i.height ? (r = s.ownerDocument, n = K(r), e = r.documentElement, {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ft.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (i = t.offset()), i = {
                    top: i.top + ft.css(t[0], "borderTopWidth", !0),
                    left: i.left + ft.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - i.top - ft.css(n, "marginTop", !0),
                    left: e.left - i.left - ft.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || Yt
            })
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        ft.fn[t] = function(i) {
            return At(this, function(t, i, r) {
                var s = K(t);
                return void 0 === r ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }), ft.each(["top", "left"], function(t, e) {
        ft.cssHooks[e] = z(dt.pixelPosition, function(t, n) {
            if (n) return n = N(t, e), oe.test(n) ? ft(t).position()[e] + "px" : n
        })
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            ft.fn[i] = function(r, s) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || s === !0 ? "margin" : "border");
                return At(this, function(e, n, r) {
                    var s;
                    return ft.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? ft.css(e, n, a) : ft.style(e, n, r, a)
                }, e, o ? r : void 0, o)
            }
        })
    }), ft.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), ft.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ft
    });
    var Ue = t.jQuery,
        Ve = t.$;
    return ft.noConflict = function(e) {
        return t.$ === ft && (t.$ = Ve), e && t.jQuery === ft && (t.jQuery = Ue), ft
    }, e || (t.jQuery = t.$ = ft), ft
}), ! function(t, e, n, i) {
    function r(e, n) {
        this.settings = null, this.options = t.extend({}, r.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, n) {
            this._handlers[n] = t.proxy(this[n], this)
        }, this)), t.each(r.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(r.Workers, t.proxy(function(e, n) {
            this._pipe.push({
                filter: n.filter,
                run: t.proxy(n.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
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
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, r.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, r.Type = {
        Event: "event",
        State: "state"
    }, r.Plugins = {}, r.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                n = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = {
                    width: "auto",
                    "margin-left": i ? e : "",
                    "margin-right": i ? "" : e
                };
            !n && this.$stage.children().css(r), t.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                n = null,
                i = this._items.length,
                r = !this.settings.autoWidth,
                s = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, s[i] = r ? e * n : this._items[i].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                n = this._items,
                i = this.settings,
                r = Math.max(2 * i.items, 4),
                s = 2 * Math.ceil(n.length / 2),
                o = i.loop && n.length ? i.rewind ? r : Math.max(r, s) : 0,
                a = "",
                l = "";
            for (o /= 2; o--;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, s = []; ++n < e;) i = s[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, s.push(i + r * t);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                n = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                n = !this.settings.autoWidth,
                i = this.$stage.children();
            if (n && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
            else n && (t.css.width = t.items.width, i.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, n, i, r = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + s,
                a = o + this.width() * r,
                l = [];
            for (n = 0, i = this._coordinates.length; i > n; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + s * r, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], r.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var e, n, r;
            e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, r = this.$element.children(n).width(), e.length && 0 >= r && this.preloadAutoWidthImages(e)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, r.prototype.setup = function() {
        var e = this.viewport(),
            n = this.options.responsive,
            i = -1,
            r = null;
        n ? (t.each(n, function(t) {
            e >= t && t > i && (i = Number(t))
        }), r = t.extend({}, this.options, n[i]), "function" == typeof r.stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, r.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, r.prototype.prepare = function(e) {
        var n = this.trigger("prepare", {
            content: e
        });
        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: n.data
        }), n.data
    }, r.prototype.update = function() {
        for (var e = 0, n = this._pipe.length, i = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), r = {}; n > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, r.prototype.width = function(t) {
        switch (t = t || r.Width.Default) {
            case r.Width.Inner:
            case r.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, r.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, r.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, r.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, r.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, r.prototype.onDragStart = function(e) {
        var i = null;
        3 !== e.which && (t.support.transform ? (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), i = {
            x: i[16 === i.length ? 12 : 4],
            y: i[16 === i.length ? 13 : 5]
        }) : (i = this.$stage.position(), i = {
            x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
            y: i.top
        }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var i = this.difference(this._drag.pointer, this.pointer(e));
            t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, r.prototype.onDragMove = function(t) {
        var e = null,
            n = null,
            i = null,
            r = this.difference(this._drag.pointer, this.pointer(t)),
            s = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + i), n + i)), this._drag.stage.current = s, this.animate(s.x))
    }, r.prototype.onDragEnd = function(e) {
        var i = this.difference(this._drag.pointer, this.pointer(e)),
            r = this._drag.stage.current,
            s = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== i.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, r.prototype.closest = function(e, n) {
        var i = -1,
            r = 30,
            s = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, a) {
            return "left" === n && e > a - r && a + r > e ? i = t : "right" === n && e > a - s - r && a - s + r > e ? i = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] || a - s) && (i = "left" === n ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
    }, r.prototype.animate = function(e) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : n ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, r.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, r.prototype.current = function(t) {
        if (t === i) return this._current;
        if (0 === this._items.length) return i;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, r.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
            return e
        })
    }, r.prototype.reset = function(t) {
        t = this.normalize(t), t !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, r.prototype.normalize = function(t, e) {
        var n = this._items.length,
            r = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || 1 > n ? t = i : (0 > t || t >= n + r) && (t = ((t - r / 2) % n + n) % n + r / 2), t
    }, r.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, r.prototype.maximum = function(t) {
        var e, n, i, r = this.settings,
            s = this._coordinates.length;
        if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
        else if (r.autoWidth || r.merge) {
            for (e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && (n += this._items[e].width() + this.settings.margin, !(n > i)););
            s = e + 1
        } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0)
    }, r.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, r.prototype.items = function(t) {
        return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, r.prototype.mergers = function(t) {
        return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, r.prototype.clones = function(e) {
        var n = this._clones.length / 2,
            r = n + this._items.length,
            s = function(t) {
                return t % 2 === 0 ? r + t / 2 : n - (t + 1) / 2
            };
        return e === i ? t.map(this._clones, function(t, e) {
            return s(e)
        }) : t.map(this._clones, function(t, n) {
            return t === e ? s(n) : null
        })
    }, r.prototype.speed = function(t) {
        return t !== i && (this._speed = t), this._speed
    }, r.prototype.coordinates = function(e) {
        var n, r = 1,
            s = e - 1;
        return e === i ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, s = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[s] || 0)) / 2 * r) : n = this._coordinates[s] || 0, n = Math.ceil(n))
    }, r.prototype.duration = function(t, e, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, r.prototype.to = function(t, e) {
        var n = this.current(),
            i = null,
            r = t - this.relative(n),
            s = (r > 0) - (0 > r),
            o = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o), t = n + r, i = ((t - a) % o + o) % o + a, i !== t && l >= i - r && i - r > 0 && (n = i - r, t = i, this.reset(n))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, r.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, r.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, r.prototype.onTransitionEnd = function(t) {
        return (t === i || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
    }, r.prototype.viewport = function() {
        var i;
        if (this.options.responsiveBaseElement !== e) i = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) i = e.innerWidth;
        else {
            if (!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
            i = n.documentElement.clientWidth
        }
        return i
    }, r.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, r.prototype.add = function(e, n) {
        var r = this.relative(this._current);
        n = n === i ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: n
        }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: n
        })
    }, r.prototype.remove = function(t) {
        t = this.normalize(t, !0), t !== i && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, r.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, n) {
            this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy(function(t) {
                n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }, this))
    }, r.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), this.settings.responsive !== !1 && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var i in this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, r.prototype.op = function(t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
            case "<":
                return i ? t > n : n > t;
            case ">":
                return i ? n > t : t > n;
            case ">=":
                return i ? n >= t : t >= n;
            case "<=":
                return i ? t >= n : n >= t
        }
    }, r.prototype.on = function(t, e, n, i) {
        t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
    }, r.prototype.off = function(t, e, n, i) {
        t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
    }, r.prototype.trigger = function(e, n, i, s, o) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = t.camelCase(t.grep(["on", e, i], function(t) {
                return t
            }).join("-").toLowerCase()),
            c = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, a, n));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(c)
        }), this.register({
            type: r.Type.Event,
            name: e
        }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, r.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, r.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, r.prototype.register = function(e) {
        if (e.type === r.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var n = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(n, i) {
            return t.inArray(n, this._states.tags[e.name]) === i
        }, this)))
    }, r.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, r.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, r.prototype.pointer = function(t) {
        var n = {
            x: null,
            y: null
        };
        return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
    }, r.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, r.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var i = t(this),
                s = i.data("owl.carousel");
            s || (s = new r(this, "object" == typeof e && e), i.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, n) {
                s.register({
                    type: r.Type.Event,
                    name: n
                }), s.$element.on(n + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([n]), s[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }, s))
            })), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, n)
        })
    }, t.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, r.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, r.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, r.prototype.destroy = function() {
        var t, n;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var n = this._core.settings, r = n.center && Math.ceil(n.items / 2) || n.items, s = n.center && -1 * r || 0, o = (e.property && e.property.value !== i ? e.property.value : this._core.current()) + s, a = this._core.clones().length, l = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); s++ < r;) this.load(a / 2 + this._core.relative(o)), a && t.each(this._core.clones(this._core.relative(o)), l), o++
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        lazyLoad: !1
    }, r.prototype.load = function(n) {
        var i = this._core.$stage.children().eq(n),
            r = i && i.find(".owl-lazy");
        !r || t.inArray(i.get(0), this._loaded) > -1 || (r.each(t.proxy(function(n, i) {
            var r, s = t(i),
                o = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", {
                element: s,
                url: o
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() {
                s.css("opacity", 1), this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }, this)).attr("src", o) : (r = new Image, r.onload = t.proxy(function() {
                s.css({
                    "background-image": "url(" + o + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }, this), r.src = o)
        }, this)), this._loaded.push(i.get(0)))
    }, r.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, r.prototype.update = function() {
        var e = this._core._current,
            n = e + this._core.settings.items,
            i = this._core.$stage.children().toArray().slice(e, n),
            r = [],
            s = 0;
        t.each(i, function(e, n) {
            r.push(t(n).height())
        }), s = Math.max.apply(null, r), this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
    }, r.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var n = t(e.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    r.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, r.prototype.fetch = function(t, e) {
        var n = function() {
                return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            r = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight,
            o = t.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if (i = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
        else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[o] = {
            type: n,
            id: i,
            width: r,
            height: s
        }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
    }, r.prototype.thumbnail = function(e, n) {
        var i, r, s, o = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
            a = e.find("img"),
            l = "src",
            c = "",
            u = this._core.settings,
            p = function(t) {
                r = '<div class="owl-video-play-icon"></div>', i = u.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after(r)
            };
        return e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (p(a.attr(l)), a.remove(), !1) : void("youtube" === n.type ? (s = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", p(s)) : "vimeo" === n.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                s = t[0].thumbnail_large, p(s)
            }
        }) : "vzaar" === n.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                s = t.framegrab_url, p(s)
            }
        }))
    }, r.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, r.prototype.play = function(e) {
        var n, i = t(e.target),
            r = i.closest("." + this._core.settings.itemClass),
            s = this._videos[r.attr("data-video")],
            o = s.width || "100%",
            a = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), "youtube" === s.type ? n = '<iframe width="' + o + '" height="' + a + '" src="//www.youtube.com/embed/' + s.id + "?autoplay=1&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type ? n = '<iframe src="//player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + o + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === s.type && (n = '<iframe frameborder="0"height="' + a + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + s.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + n + "</div>").insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
    }, r.prototype.isInFullScreen = function() {
        var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, r.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    r.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, r.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, n = t.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                r = this.core.$stage.children().eq(this.next),
                s = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(o)), s && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(s))
        }
    }, r.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, r.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, n) {
                t.namespace && this.play(e, n)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, r.prototype.play = function(t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, r.prototype._getNextTimeout = function(i, r) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
        }, this), i || this._core.settings.autoplayTimeout)
    }, r.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, r.prototype.stop = function() {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, r.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, r.prototype.destroy = function() {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    "use strict";
    var r = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    r.Defaults = {
        nav: !1,
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
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, r.prototype.initialize = function() {
        var e, n = this._core.settings;
        this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.prev(n.navSpeed)
        }, this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.next(n.navSpeed)
        }, this)), n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
            var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, n.dotsSpeed)
        }, this));
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
    }, r.prototype.destroy = function() {
        var t, e, n, i;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, r.prototype.update = function() {
        var t, e, n, i = this._core.clones().length / 2,
            r = i + this._core.items().length,
            s = this._core.maximum(!0),
            o = this._core.settings,
            a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = i, e = 0, n = 0; r > t; t++) {
                if (e >= a || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(s, t - i),
                            end: t - i + a - 1
                        }), Math.min(s, t - i) === s) break;
                    e = 0, ++n
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, r.prototype.draw = function() {
        var e, n = this._core.settings,
            i = this._core.items().length <= n.items,
            r = this._core.relative(this._core.current()),
            s = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : 0 > e && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, r.prototype.onTrigger = function(e) {
        var n = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }, r.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, n) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, r.prototype.getPosition = function(e) {
        var n, i, r = this._core.settings;
        return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += r.slideBy : n -= r.slideBy), n
    }, r.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, r.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, r.prototype.to = function(e, n, i) {
        var r;
        !i && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    "use strict";
    var r = function(n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(n) {
                    n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!n) return;
                        this._hashes[n] = e.content
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(n) {
                    if (n.namespace && "position" === n.property.name) {
                        var i = this._core.items(this._core.relative(this._core.current())),
                            r = t.map(this._hashes, function(t, e) {
                                return t === i ? e : null
                            }).join();
                        if (!r || e.location.hash.slice(1) === r) return;
                        e.location.hash = r
                    }
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options),
            this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                var n = e.location.hash.substring(1),
                    r = this._core.$stage.children(),
                    s = this._hashes[n] && r.index(this._hashes[n]);
                s !== i && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
            }, this))
    };
    r.Defaults = {
        URLhashListener: !1
    }, r.prototype.destroy = function() {
        var n, i;
        t(e).off("hashchange.owl.navigation");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    function r(e, n) {
        var r = !1,
            s = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(s + " ") + s).split(" "), function(t, e) {
            return o[e] !== i ? (r = !n || e, !1) : void 0
        }), r
    }

    function s(t) {
        return r(t, !0)
    }
    var o = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        c = {
            csstransforms: function() {
                return !!r("transform")
            },
            csstransforms3d: function() {
                return !!r("perspective")
            },
            csstransitions: function() {
                return !!r("transition")
            },
            cssanimations: function() {
                return !!r("animation")
            }
        };
    c.csstransitions() && (t.support.transition = new String(s("transition")), t.support.transition.end = l.transition.end[t.support.transition]), c.cssanimations() && (t.support.animation = new String(s("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c.csstransforms() && (t.support.transform = new String(s("transform")), t.support.transform3d = c.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? exports.Handlebars = e() : t.Handlebars = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function(t, e, n) {
        "use strict";

        function i() {
            var t = new o.HandlebarsEnvironment;
            return d.extend(t, o), t.SafeString = l["default"], t.Exception = u["default"], t.Utils = d, t.escapeExpression = d.escapeExpression, t.VM = f, t.template = function(e) {
                return f.template(e, t)
            }, t
        }
        var r = n(7)["default"];
        e.__esModule = !0;
        var s = n(1),
            o = r(s),
            a = n(2),
            l = r(a),
            c = n(3),
            u = r(c),
            p = n(4),
            d = r(p),
            h = n(5),
            f = r(h),
            g = n(6),
            m = r(g),
            v = i();
        v.create = i, m["default"](v), v["default"] = v, e["default"] = v, t.exports = e["default"]
    }, function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.helpers = t || {}, this.partials = e || {}, r(this)
        }

        function r(t) {
            t.registerHelper("helperMissing", function() {
                if (1 !== arguments.length) throw new u["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            }), t.registerHelper("blockHelperMissing", function(e, n) {
                var i = n.inverse,
                    r = n.fn;
                if (e === !0) return r(this);
                if (e === !1 || null == e) return i(this);
                if (f(e)) return e.length > 0 ? (n.ids && (n.ids = [n.name]), t.helpers.each(e, n)) : i(this);
                if (n.data && n.ids) {
                    var o = s(n.data);
                    o.contextPath = l.appendContextPath(n.data.contextPath, n.name), n = {
                        data: o
                    }
                }
                return r(e, n)
            }), t.registerHelper("each", function(t, e) {
                function n(e, n, r) {
                    c && (c.key = e, c.index = n, c.first = 0 === n, c.last = !!r, p && (c.contextPath = p + e)), a += i(t[e], {
                        data: c,
                        blockParams: l.blockParams([t[e], e], [p + e, null])
                    })
                }
                if (!e) throw new u["default"]("Must pass iterator to #each");
                var i = e.fn,
                    r = e.inverse,
                    o = 0,
                    a = "",
                    c = void 0,
                    p = void 0;
                if (e.data && e.ids && (p = l.appendContextPath(e.data.contextPath, e.ids[0]) + "."), g(t) && (t = t.call(this)), e.data && (c = s(e.data)), t && "object" == typeof t)
                    if (f(t))
                        for (var d = t.length; o < d; o++) n(o, o, o === t.length - 1);
                    else {
                        var h = void 0;
                        for (var m in t) t.hasOwnProperty(m) && (h && n(h, o - 1), h = m, o++);
                        h && n(h, o - 1, !0)
                    }
                return 0 === o && (a = r(this)), a
            }), t.registerHelper("if", function(t, e) {
                return g(t) && (t = t.call(this)), !e.hash.includeZero && !t || l.isEmpty(t) ? e.inverse(this) : e.fn(this)
            }), t.registerHelper("unless", function(e, n) {
                return t.helpers["if"].call(this, e, {
                    fn: n.inverse,
                    inverse: n.fn,
                    hash: n.hash
                })
            }), t.registerHelper("with", function(t, e) {
                g(t) && (t = t.call(this));
                var n = e.fn;
                if (l.isEmpty(t)) return e.inverse(this);
                if (e.data && e.ids) {
                    var i = s(e.data);
                    i.contextPath = l.appendContextPath(e.data.contextPath, e.ids[0]), e = {
                        data: i
                    }
                }
                return n(t, e)
            }), t.registerHelper("log", function(e, n) {
                var i = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
                t.log(i, e)
            }), t.registerHelper("lookup", function(t, e) {
                return t && t[e]
            })
        }

        function s(t) {
            var e = l.extend({}, t);
            return e._parent = t, e
        }
        var o = n(7)["default"];
        e.__esModule = !0, e.HandlebarsEnvironment = i, e.createFrame = s;
        var a = n(4),
            l = o(a),
            c = n(3),
            u = o(c),
            p = "3.0.1";
        e.VERSION = p;
        var d = 6;
        e.COMPILER_REVISION = d;
        var h = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1"
        };
        e.REVISION_CHANGES = h;
        var f = l.isArray,
            g = l.isFunction,
            m = l.toString,
            v = "[object Object]";
        i.prototype = {
            constructor: i,
            logger: y,
            log: w,
            registerHelper: function(t, e) {
                if (m.call(t) === v) {
                    if (e) throw new u["default"]("Arg not supported with multiple helpers");
                    l.extend(this.helpers, t)
                } else this.helpers[t] = e
            },
            unregisterHelper: function(t) {
                delete this.helpers[t]
            },
            registerPartial: function(t, e) {
                if (m.call(t) === v) l.extend(this.partials, t);
                else {
                    if ("undefined" == typeof e) throw new u["default"]("Attempting to register a partial as undefined");
                    this.partials[t] = e
                }
            },
            unregisterPartial: function(t) {
                delete this.partials[t]
            }
        };
        var y = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 1,
            log: function(t, e) {
                if ("undefined" != typeof console && y.level <= t) {
                    var n = y.methodMap[t];
                    (console[n] || console.log).call(console, e)
                }
            }
        };
        e.logger = y;
        var w = y.log;
        e.log = w
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            this.string = t
        }
        e.__esModule = !0, i.prototype.toString = i.prototype.toHTML = function() {
            return "" + this.string
        }, e["default"] = i, t.exports = e["default"]
    }, function(t, e, n) {
        "use strict";

        function i(t, e) {
            var n = e && e.loc,
                s = void 0,
                o = void 0;
            n && (s = n.start.line, o = n.start.column, t += " - " + s + ":" + o);
            for (var a = Error.prototype.constructor.call(this, t), l = 0; l < r.length; l++) this[r[l]] = a[r[l]];
            Error.captureStackTrace && Error.captureStackTrace(this, i), n && (this.lineNumber = s, this.column = o)
        }
        e.__esModule = !0;
        var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        i.prototype = new Error, e["default"] = i, t.exports = e["default"]
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return u[t]
        }

        function r(t) {
            for (var e = 1; e < arguments.length; e++)
                for (var n in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], n) && (t[n] = arguments[e][n]);
            return t
        }

        function s(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e) return n;
            return -1
        }

        function o(t) {
            if ("string" != typeof t) {
                if (t && t.toHTML) return t.toHTML();
                if (null == t) return "";
                if (!t) return t + "";
                t = "" + t
            }
            return d.test(t) ? t.replace(p, i) : t
        }

        function a(t) {
            return !t && 0 !== t || !(!g(t) || 0 !== t.length)
        }

        function l(t, e) {
            return t.path = e, t
        }

        function c(t, e) {
            return (t ? t + "." : "") + e
        }
        e.__esModule = !0, e.extend = r, e.indexOf = s, e.escapeExpression = o, e.isEmpty = a, e.blockParams = l, e.appendContextPath = c;
        var u = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            p = /[&<>"'`]/g,
            d = /[&<>"'`]/,
            h = Object.prototype.toString;
        e.toString = h;
        var f = function(t) {
            return "function" == typeof t
        };
        f(/x/) && (e.isFunction = f = function(t) {
            return "function" == typeof t && "[object Function]" === h.call(t)
        });
        var f;
        e.isFunction = f;
        var g = Array.isArray || function(t) {
            return !(!t || "object" != typeof t) && "[object Array]" === h.call(t)
        };
        e.isArray = g
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            var e = t && t[0] || 1,
                n = g.COMPILER_REVISION;
            if (e !== n) {
                if (e < n) {
                    var i = g.REVISION_CHANGES[n],
                        r = g.REVISION_CHANGES[e];
                    throw new f["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
                }
                throw new f["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
            }
        }

        function r(t, e) {
            function n(n, i, r) {
                r.hash && (i = d.extend({}, i, r.hash)), n = e.VM.resolvePartial.call(this, n, i, r);
                var s = e.VM.invokePartial.call(this, n, i, r);
                if (null == s && e.compile && (r.partials[r.name] = e.compile(n, t.compilerOptions, e), s = r.partials[r.name](i, r)), null != s) {
                    if (r.indent) {
                        for (var o = s.split("\n"), a = 0, l = o.length; a < l && (o[a] || a + 1 !== l); a++) o[a] = r.indent + o[a];
                        s = o.join("\n")
                    }
                    return s
                }
                throw new f["default"]("The partial " + r.name + " could not be compiled when running in runtime-only mode")
            }

            function i(e) {
                var n = void 0 === arguments[1] ? {} : arguments[1],
                    s = n.data;
                i._setup(n), !n.partial && t.useData && (s = c(e, s));
                var o = void 0,
                    a = t.useBlockParams ? [] : void 0;
                return t.useDepths && (o = n.depths ? [e].concat(n.depths) : [e]), t.main.call(r, e, r.helpers, r.partials, s, a, o)
            }
            if (!e) throw new f["default"]("No environment passed to template");
            if (!t || !t.main) throw new f["default"]("Unknown template object: " + typeof t);
            e.VM.checkRevision(t.compiler);
            var r = {
                strict: function(t, e) {
                    if (!(e in t)) throw new f["default"]('"' + e + '" not defined in ' + t);
                    return t[e]
                },
                lookup: function(t, e) {
                    for (var n = t.length, i = 0; i < n; i++)
                        if (t[i] && null != t[i][e]) return t[i][e]
                },
                lambda: function(t, e) {
                    return "function" == typeof t ? t.call(e) : t
                },
                escapeExpression: d.escapeExpression,
                invokePartial: n,
                fn: function(e) {
                    return t[e]
                },
                programs: [],
                program: function(t, e, n, i, r) {
                    var o = this.programs[t],
                        a = this.fn(t);
                    return e || r || i || n ? o = s(this, t, a, e, n, i, r) : o || (o = this.programs[t] = s(this, t, a)), o
                },
                data: function(t, e) {
                    for (; t && e--;) t = t._parent;
                    return t
                },
                merge: function(t, e) {
                    var n = t || e;
                    return t && e && t !== e && (n = d.extend({}, e, t)), n
                },
                noop: e.VM.noop,
                compilerInfo: t.compiler
            };
            return i.isTop = !0, i._setup = function(n) {
                n.partial ? (r.helpers = n.helpers, r.partials = n.partials) : (r.helpers = r.merge(n.helpers, e.helpers), t.usePartial && (r.partials = r.merge(n.partials, e.partials)))
            }, i._child = function(e, n, i, o) {
                if (t.useBlockParams && !i) throw new f["default"]("must pass block params");
                if (t.useDepths && !o) throw new f["default"]("must pass parent depths");
                return s(r, e, t[e], n, 0, i, o)
            }, i
        }

        function s(t, e, n, i, r, s, o) {
            function a(e) {
                var r = void 0 === arguments[1] ? {} : arguments[1];
                return n.call(t, e, t.helpers, t.partials, r.data || i, s && [r.blockParams].concat(s), o && [e].concat(o))
            }
            return a.program = e, a.depth = o ? o.length : 0, a.blockParams = r || 0, a
        }

        function o(t, e, n) {
            return t ? t.call || n.name || (n.name = t, t = n.partials[t]) : t = n.partials[n.name], t
        }

        function a(t, e, n) {
            if (n.partial = !0, void 0 === t) throw new f["default"]("The partial " + n.name + " could not be found");
            if (t instanceof Function) return t(e, n)
        }

        function l() {
            return ""
        }

        function c(t, e) {
            return e && "root" in e || (e = e ? g.createFrame(e) : {}, e.root = t), e
        }
        var u = n(7)["default"];
        e.__esModule = !0, e.checkRevision = i, e.template = r, e.wrapProgram = s, e.resolvePartial = o, e.invokePartial = a, e.noop = l;
        var p = n(4),
            d = u(p),
            h = n(3),
            f = u(h),
            g = n(1)
    }, function(t, e, n) {
        (function(n) {
            "use strict";
            e.__esModule = !0, e["default"] = function(t) {
                var e = "undefined" != typeof n ? n : window,
                    i = e.Handlebars;
                t.noConflict = function() {
                    e.Handlebars === t && (e.Handlebars = i)
                }
            }, t.exports = e["default"]
        }).call(e, function() {
            return this
        }())
    }, function(t, e, n) {
        "use strict";
        e["default"] = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }, e.__esModule = !0
    }])
}), this.templates = this.templates || {}, this.templates.popups = Handlebars.template({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(t, e, n, i) {
        return '<div class="popup-container" data-popup="login">\n\t<div class="popup-header">\n\t\t<span class="fw-thin">Üye</span> <span class="fw-bold">Girişi</span>\n\t</div>\n\t<div class="popup-content">\n\t\t<p class="input-group m-b-1">\n\t\t\t<input type="text" placeholder="kullanıcı adı veya e-posta adresiniz..." class="form-control form-control-l" data-form="login-mail">\n\t\t\t<input type="password" placeholder="parolanız..." class="form-control form-control-l" data-form="login-pass">\n\t\t</p>\n\n\t\t<p class="remember checkbox full-width pull-left m-b-2">\n\t\t\t<input type="checkbox" id="rememberme" class="form-control"><label for="rememberme" class="form-control-label">Beni hatırla</label>\n\t\t</p>\n\t\t\n\t\t<button class="btn btn-primary full-width text-center" data-action="dizist-popup-login"><i class="fa fa-sign-in"></i> GİRİŞ YAPIN</button>\n\t\t<hr class="m-y-2">\n\t\t<div class="full-width text-right">\n\t\t\t<a data-action="dizist-popup-to-lostpass">Parolamı unuttum?</a>\n\t\t</div>\n\t</div>\n</div>\n\n<div class="popup-container" data-popup="register">\n\t<div class="popup-header">\n\t\t<span class="fw-thin">Üye</span> <span class="fw-bold">Kaydı</span>\n\t</div>\n\t<div class="popup-content">\n\t\t<p class="input-group m-b-1">\n\t\t\t<input type="text" placeholder="kullanıcı adınız" class="form-control form-control-l" data-form="register-username">\n\t\t\t<input type="text" placeholder="e-posta adresiniz" class="form-control form-control-l" data-form="register-mail">\n\t\t\t<input type="password" placeholder="parolanız" class="form-control form-control-l" data-form="register-pass">\n\t\t\t<input type="password" placeholder="tekrar parolanız" class="form-control form-control-l" data-form="register-pass2">\n\t\t</p>\n\n\t\t<button class="btn btn-primary full-width text-center" data-action="dizist-popup-register"><i class="fa fa-sign-in"></i> KAYIT OLUN</button>\n\t\t<hr class="m-y-2">\n\t\t<div class="full-width text-right">\n\t\t\t<a data-action="dizist-popup-to-login">Hesabınız var mı?</a>\n\t\t</div>\n\t</div>\n</div>\n\n<div class="popup-container" data-popup="lostpass">\n\t<div class="popup-header">\n\t\t<span class="fw-thin">Şifremi</span> <span class="fw-bold">Unuttum</span>\n\t</div>\n\t<div class="popup-content">\n\t\t<p class="input-group m-b-1">\n\t\t\t<input type="text" placeholder="kullanıcı adı veya e-posta adresiniz..." class="form-control form-control-l" data-form="lostpass-mail">\n\t\t</p>\n\n\t\t<button class="btn btn-primary full-width text-center" data-action="dizist-popup-lostpass"><i class="fa fa-sign-in"></i> ŞİFREMİ YENİLE</button>\n\t</div>\n</div>'
    },
    useData: !0
}), this.templates.searchresult = Handlebars.template({
    1: function(t, e, n, i) {
        var r;
        return null != (r = e.each.call(t, null != t ? t.search : t, {
            name: "each",
            hash: {},
            fn: this.program(2, i, 0),
            inverse: this.noop,
            data: i
        })) ? r : ""
    },
    2: function(t, e, n, i) {
        var r = this.lambda,
            s = this.escapeExpression;
        return '\t\t<div class="search-result">\n\t\t\t<a href="/dizi/' + s(r(null != t ? t.link : t, t)) + '">\n\t\t\t\t<figure class="small-thumbnail">\n\t\t\t\t\t<img src="/upload/dizikuturesim/' + s(r(null != t ? t.img : t, t)) + '" class="full-width">\n\t\t\t\t</figure>\n\t\t\t\t<span class="s-info ff-2">\n\t\t\t\t\t<span class="s-title fw-medium text-overflow">' + s(r(null != t ? t.title : t, t)) + '</span>\n\t\t\t\t\t<span class="s-genre text-overflow">' + s(r(null != t ? t.genres : t, t)) + "</span>\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t</div>\n"
    },
    4: function(t, e, n, i) {
        return '\t<div class="search-result">\n\t\t<div class="alert alert-danger m-b-0">Hiç sonuç bulunamadı.</div>\n\t</div>\n'
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(t, e, n, i) {
        var r;
        return null != (r = e["if"].call(t, null != t ? t.search : t, {
            name: "if",
            hash: {},
            fn: this.program(1, i, 0),
            inverse: this.program(4, i, 0),
            data: i
        })) ? r : ""
    },
    useData: !0
}), $(document).ready(function() {
    var t = {
        init: function() {
            t.initLayout(), t.initPages()
        },
        initLayout: function() {
            function e(e) {
                var n = a.val().trim();
                return !e && n.length < 3 ? l.removeClass("active") : void t.request("/api/search", {
                    search: n
                }, function(t) {
                    t.success && l.addClass("active").html(templates.searchresult(t))
                })
            }
            $(".popup-wrapper").append(templates.popups()), $("[data-action=dizist-register]").click(function() {
                t.popups.show("register")
            }), $("[data-action=dizist-login]").click(function() {
                t.popups.show("login")
            });
            var n = $("#site-header"),
                i = $("#burger-button");
            $(window).resize(function() {
                if (window.matchMedia("(max-width: 1024px)").matches ? (n.addClass("responsive-menu"), $("#header-nav", n).attr("class", "menu-vertical")) : n.hasClass("responsive-menu") && (n.removeClass("responsive-menu"), $("#header-nav", n).attr("class", "menu-horizontal pull-left")), s) {
                    var t = $(window).width();
                    t >= 1670 ? r.css("background-image", 'url("' + r.data("responsive-big") + '")') : r.css("background-image", 'url("' + r.data("responsive-small") + '")')
                }
            });
            var r = $("#pageskin"),
                s = r.length > 0 && r.data("responsive-small");
            s || r.css("background-image", 'url("' + r.data("responsive-big") + '")'), $(window).trigger("resize");
            var o = 0;
            i.click(function() {
                0 == o ? ($(".responsive-menu").addClass("open"), o = 1) : ($(".responsive-menu").removeClass("open"), o = 0)
            });
            var a = $("[data-form=search]"),
                l = $("#search-results");
            a.keypress(function(t) {
                13 == t.which && (window.location = "/arsiv?q=" + a.val().trim())
            }), $("[data-action=dizist-search]").click(function() {
                window.location = "/arsiv?q=" + a.val().trim()
            }), a.blur(function() {
                l.removeClass("active")
            }), a.focus(function() {
                l.addClass("active")
            });
            var c;
            a.keyup(function(t) {
                clearTimeout(c), 13 == t.keyCode ? e(!0) : c = setTimeout(e, 500)
            }), $("[data-action=dizist-user-dropdown]").click(function() {
                var t = $(".user-dropdown");
                t.hasClass("active") ? t.removeClass("active") : t.addClass("active")
            }), $("[data-action=dizist-logout]").click(function() {
                t.request("/api/logout", {}, function(t) {
                    t.success && location.reload(!0)
                })
            }), $(document).on("click", "[data-action=dizist-popup-to-lostpass]", function(e) {
                t.popups.hide("login"), t.popups.show("lostpass")
            }), $(document).on("click", "[data-action=dizist-popup-to-login]", function(e) {
                t.popups.hide("register"), t.popups.show("login")
            }), $(document).on("click", "[data-action=dizist-popup-login]", function(e) {
                var n = t.parseForm("login", ["mail", "pass"]);
                t.request("/api/login", n, function(e) {
                    e.success ? (t.popups.hide("login"), window.location.reload()) : e.pass ? alert("Yanlış Şifre") : alert("Bir hata oldu.")
                })
            }), $(document).on("click", "[data-action=dizist-popup-register]", function(e) {
                var n = t.parseForm("register", ["username", "mail", "pass", "pass2"]);
                t.request("/api/registersite", n, function(e) {
                    e.success ? (t.popups.hide("register"), window.location.reload()) : e.error.length ? alert(e.error) : alert("Bir hata oldu.")
                })
            }), $(document).on("click", "[data-action=dizist-popup-lostpass]", function(e) {
                var n = t.parseForm("lostpass", ["mail"]);
                t.request("/api/passreset", n, function(t) {
                    t.success ? (alert("Şifreni sıfırlamak için bir bağlantı gönderdik."), window.location.reload()) : t.wrong ? alert("Böyle bir kullanıcı yok") : alert("Bir hata oldu.")
                })
            }), $(document).on("click", "[data-action=dizist-popup-newpass]", function(e) {
                var n = t.parseForm("newpass", ["pass", "pass2"]);
                n.id = $("[data-action=dizist-popup-newpass]").data("action-id"), t.request("/api/newpass", n, function(e) {
                    e.success ? (alert("Şifreniz değiştirildi, şimdi giriş yapabilirsiniz!"), t.popups.hide("newpass"), t.popups.show("login"), $("[data-popup=newpass]").remove()) : e.error.length ? alert(e.error) : alert("Bir hata oldu.")
                })
            }), $(document).on("click", function(e) {
                $(".popup-wrapper").is(e.target) && 0 === $(".popup-wrapper").has(e.target).length && !$(".popup-wrapper").hasClass("no-close") ? t.popups.hideAll() : $(".user-dropdown").hasClass("active") && !$("#user-area").is(e.target) && 0 === $("#user-area").has(e.target).length && $(".user-dropdown").removeClass("active")
            })
        },
        initPages: function() {
            for (var e in t.pages) t.pages[e]()
        },
        pages: {
            ads: function() {
                if ($(".adv-sticky-bottom").length > 0) {
                    var t = localStorage.getItem("dizistStickyAdShowAgain");
                    t = parseInt(t);
                    var e = (new Date).getTime();
                    t >= e && $(".adv-sticky-bottom").remove(), $("[data-action=dizist-close-sticky]").click(function() {
                        var t = (new Date).getTime();
                        t += 36e5, localStorage.setItem("dizistStickyAdShowAgain", t), $(".adv-sticky-bottom").remove()
                    })
                }
            },
            serieProfile: function() {
                if ($(".tv-seasons-container").length > 0) {
                    var e = $(".tv-seasons-eplists").owlCarousel({
                        items: 1,
                        autoHeight: !0,
                        mouseDrag: !1,
                        touchDrag: !1
                    });
                    $(".tv-seasons-container .season-tab").click(function() {
                        var t = $(this).attr("data-season");
                        e.trigger("to.owl.carousel", t, 50)
                    })
                }
                $("[data-action=dizist-favorite-serie]").click(function() {
                    var e = $(this);
                    t.request("/api/series/favorite", {
                        serieid: e.data("id")
                    }, function(t) {
                        t.success ? t.favorited ? (e.addClass("btn-orange").removeClass("btn-red"), e.children("span").text("Favorilerimden çıkar")) : (e.addClass("btn-red").removeClass("btn-orange"), e.children("span").text("Favorilerime ekle")) : alert("Bir hata oldu.")
                    })
                }), $("[data-action=dizist-mark-watched-serie]").click(function() {
                    var e = $(this);
                    t.request("/api/episodes/mark-watched-serie", {
                        serieid: $("[data-action=dizist-favorite-serie]").data("id"),
                        mark: !e.hasClass("btn-purple")
                    }, function(t) {
                        t.success ? t.favorited ? (e.addClass("btn-purple").removeClass("btn-default"), e.children("i").addClass("fa-check-square-o").removeClass("fa-square-o"), $(".tv-episode-tables .episode-row .mark-watched").addClass("active"), $(".season-tab .mark-watched").addClass("active")) : (e.addClass("btn-default").removeClass("btn-purple"), e.children("i").addClass("fa-square-o").removeClass("fa-check-square-o"), $(".tv-episode-tables .episode-row .mark-watched").removeClass("active"), $(".season-tab .mark-watched").removeClass("active")) : alert("Bir hata oldu.")
                    })
                }), $("[data-action=dizist-mark-watched-season]").click(function() {
                    var e = $(this),
                        n = e.parent().data("season");
                    t.request("/api/episodes/mark-watched-season", {
                        serieid: $("[data-action=dizist-favorite-serie]").data("id"),
                        season: n + 1,
                        mark: !e.hasClass("active")
                    }, function(t) {
                        t.success ? t.favorited ? (e.addClass("active"), $(".tv-episode-tables[data-season=" + n + "] .episode-row .mark-watched").addClass("active")) : (e.removeClass("active"), $(".tv-episode-tables[data-season=" + n + "] .episode-row .mark-watched").removeClass("active")) : alert("Bir hata oldu.")
                    })
                }), $("[data-action=dizist-mark-watched]").click(function() {
                    var e = $(this);
                    t.request("/api/episodes/mark-watched", {
                        serieid: $("[data-action=dizist-favorite-serie]").data("id"),
                        episodeid: e.data("id")
                    }, function(t) {
                        t.success ? t.favorited ? e.addClass("active") : e.removeClass("active") : alert("Bir hata oldu.")
                    })
                })
            },
            episodeWatch: function() {
                function e() {
                    $("#other-episodes .active-season").text($(".widget-seasons .owl-item.active").index() + 1)
                }

                function n() {
                    if ($(".ad-player").length > 0 && $(window).width() > 900) {
                        var t = $(".ad-player")[$(".ad-player").length - 1];
                        setTimeout(function() {
                            $(t).addClass("skip")
                        }, 1e3 * parseInt($(t).attr("data-timeout"))), setTimeout(function() {
                            $(t).remove(), n()
                        }, 1e3 * parseInt($(t).attr("data-remove"))), $(t).find("video").length > 0 && $(t).find("video").get(0).play()
                    }
                }
                if ($("#single-page").length > 0) {
                    var i = $(".widget-seasons").owlCarousel({
                        items: 1,
                        autoHeight: !0,
                        mouseDrag: !1,
                        touchDrag: !1
                    });
                    "1" != i.data("season") && i.trigger("to.owl.carousel", parseInt(i.data("season")) - 1), $("#other-episodes .fa-angle-double-left").click(function() {
                        i.trigger("prev.owl.carousel"), e()
                    }), $("#other-episodes .fa-angle-double-right").click(function() {
                        i.trigger("next.owl.carousel"), e()
                    }), 1 == $("[data-action=dizist-watch-later]").data("login") && setTimeout(function() {
                        t.request("/api/episodes/mark-watched-forced", {
                            serieid: $("[data-action=dizist-watch-later]").data("serie-id"),
                            episodeid: $("[data-action=dizist-watch-later]").data("id")
                        }, function(t) {
                            t.success ? t.favorited ? me.addClass("active") : me.removeClass("active") : alert("Bir hata oldu.")
                        })
                    }, 3e5)
                }
                $("[data-action=dizist-cinema]").click(function() {
                    var t = $(this);
                    t.hasClass("btn-purple") ? (t.addClass("btn-grey").removeClass("btn-purple"), $(".video-col").removeClass("full-width").addClass("col-1"), $(".widget-col").removeClass("hidden"), $(".darker").removeClass("active")) : (t.addClass("btn-purple").removeClass("btn-grey"), $(".video-col").addClass("full-width").removeClass("col-1"), $(".widget-col").addClass("hidden"), $(".darker").addClass("active"))
                }), $("[data-action=dizist-watch-later]").click(function() {
                    var e = $(this),
                        n = e.hasClass("btn-grey");
                    t.request("/api/episodes/watch-later", {
                        episodeid: e.data("id"),
                        add: n
                    }, function(t) {
                        t.success ? t.favorited ? (e.addClass("btn-red").removeClass("btn-grey"), e.children("span").text("İzleme listesinden çıkar")) : (e.addClass("btn-grey").removeClass("btn-red"), e.children("span").text("Daha sonra izle")) : alert("Bir sorun oluştu.")
                    })
                }), $("[data-action=dizist-like]").click(function() {
                    var e = $(this);
                    e.hasClass("hover") || t.request("/api/episodes/like", {
                        episodeid: e.data("id"),
                        like: !0
                    }, function(t) {
                        t.success ? (e.addClass("hover"), $("[data-action=dizist-dislike]").removeClass("hover")) : alert("Bir hata oldu.")
                    })
                }), $("[data-action=dizist-dislike]").click(function() {
                    var e = $(this);
                    e.hasClass("hover") || t.request("/api/episodes/like", {
                        episodeid: e.data("id"),
                        like: !1
                    }, function(t) {
                        t.success ? (e.addClass("hover"), $("[data-action=dizist-like]").removeClass("hover")) : alert("Bir hata oldu.")
                    })
                }), $(".ad-content video").length > 0 && ($(".ad-content video").get(0).volume = .1), n(), $(".ad-player .ad-skip").click(function() {
                    $(this).parent(".ad-player").remove(), n()
                })
            },
            archive: function() {
                function e() {
                    var e = t.parseForm("archive", ["year-min", "year-max", "imdbmin"]);
                    e.genre = $("[data-action=dizist-archive-genre].btn-primary").text(), e.sort = $("select[data-action=dizist-archive-sort]").val();
                    for (var n in e) e[n] || delete e[n];
                    $("[data-form=search]").val().trim().length > 0 && (e.q = $("[data-form=search]").val().trim());
                    var i = $("[data-form=archive-type]").val();
                    i = "asia" == i ? "/asyadizileri" : "animes" == i ? "/animeler" : "/arsiv", window.location = i + "?" + $.param(e)
                }
                $("[data-action=dizist-archive-genre]").click(function() {
                    var t = $(this);
                    t.hasClass("btn-primary") ? t.removeClass("btn-primary").addClass("btn-default") : ($("[data-action=dizist-archive-genre]").removeClass("btn-primary").addClass("btn-default"), t.removeClass("btn-default").addClass("btn-primary"))
                }), $("[data-action=dizist-archive-search]").click(function() {
                    e()
                }), $("select[data-action=dizist-archive-sort]").change(function() {
                    e()
                }), $("select[data-form=archive-type]").change(function() {
                    e()
                })
            },
            contact: function() {
                $("[data-action=dizist-send-message]").click(function() {
                    var e = ($(this), t.parseForm("contact", ["name", "mail", "message"]));
                    t.request("/api/message", e, function(t) {
                        t.success ? (alert("Mesajınız gönderildi!"), window.location.replace("/")) : alert("Bir hata oldu.")
                    })
                })
            },
            userProfile: function() {
                if ($("[data-action=dizist-follow]").click(function() {
                        var e = $(this);
                        t.request("/api/social/follow", {
                            userid: e.data("user-id")
                        }, function(t) {
                            t.success ? t.favorited ? e.html('<i class="fa fa-times"></i> Takibi bırak') : e.html('<i class="fa fa-plus"></i> Takip et') : alert("Bir hata oldu.")
                        })
                    }), $("[data-file-input=pp]").length > 0) {
                    var e, n;
                    $("[data-file-input=pp]").on("change", function(t) {
                        var i = new FileReader;
                        i.readAsDataURL(t.target.files[0]), e = t.target.files[0].name, i.onload = function() {
                            n = i.result
                        }
                    })
                }
                $("[data-action=dizist-update-profile]").click(function() {
                    var i = ($(this), t.parseForm("settings", ["username", "pass", "pass2", "hobi", "city"]));
                    e && (i.filename = e, i.file = n), t.request("/api/social/settings", i, function(t) {
                        t.success ? window.location.replace("/profil/" + t.username) : t.error.length ? alert(t.error) : alert("Bir hata oldu.")
                    })
                })
            },
            comments: function() {
                $("[data-action=dizist-send-comment]").click(function() {
                    var e = $(this),
                        n = t.parseForm("comment", ["content", "username"]);
                    n.username && (n.misafiradi = n.username, delete n.username), n.spoiler = $("[data-checkbox=spoiler]").prop("checked"), n.type = e.data("type"), n.feedid = e.data("feed-id"), t.request("/api/feed/post", n, function(e) {
                        e.success ? (alert("Yorumunuz yönetici onayından sonra görünecek"), t.clearForm("comment", ["content", "username"]), $("[data-checkbox=spoiler]").prop("checked", !1)) : alert("Bir hata oldu.")
                    })
                }), $("[data-action=dizist-delete-comment]").click(function() {
                    var e = confirm("Bu yorumu silmek istediğinize emin misiniz?");
                    if (e) {
                        var n = $(this);
                        t.request("/api/delete-post", {
                            id: n.data("action-id")
                        }, function(t) {
                            t.success ? n.parents("li.comment").remove() : alert("Bir hata oldu.")
                        })
                    }
                }), $("[data-action=dizist-remove-spoiler]").click(function() {
                    $(this).remove()
                })
            }
        },
        popups: {
            show: function(t) {
                $(".popup-wrapper").addClass("active"), $("[data-popup=" + t + "]").addClass("active")
            },
            hide: function(t) {
                $(".popup-wrapper").removeClass("active"), $("[data-popup=" + t + "]").removeClass("active")
            },
            hideAll: function() {
                $(".popup-wrapper").removeClass("active"), $(".popup-container").removeClass("active")
            }
        },
        request: function(t, e, n, i) {
            i || (i = function(t) {
                alert("Bir bağlantı hatası oldu")
            }), $.post(t, e).done(n).fail(i)
        },
        parseForm: function(t, e) {
            var n = {};
            for (i = 0; i < e.length; i++) {
                var r = $("[data-form=" + t + "-" + e[i] + "]").val();
                n[e[i]] = r
            }
            return n
        },
        clearForm: function(t, e) {
            var n = {};
            for (i = 0; i < e.length; i++) $("[data-form=" + t + "-" + e[i] + "]").val("");
            return n
        }
    };
    t.init()
}), Handlebars.registerHelper("nl2br", function(t) {
    var e = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=\-_~:@\/?]*)?)(\S+|$)/gi;
    return t = Handlebars.Utils.escapeExpression(t), t = (t + "").replace(e, function(t) {
        var e = /[a-z]+:\/\//.test(t) ? t : "http://" + t;
        return t = t.replace(/^https?:\/\//, ""), '<a class="outlink" href="' + e + '" target="_blank">' + t + "</a>"
    }), t = new Handlebars.SafeString(t), t = (t + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br>"), t = new Handlebars.SafeString(t)
});