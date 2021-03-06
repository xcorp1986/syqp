!function(t, e) {
"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e();
}(this, function() {
return function(n) {
function r(t) {
if (o[t]) return o[t].exports;
var e = o[t] = {
exports: {},
id: t,
loaded: !1
};
return n[t].call(e.exports, e, e.exports, r), e.loaded = !0, e.exports;
}
var o = {};
return r.m = n, r.c = o, r.p = "", r(0);
}([ function(t, e, n) {
"use strict";
function r(t, e) {
"object" === ("undefined" == typeof t ? "undefined" : c(t)) && (e = t, t = void 0), 
e = e || {};
var n, r = p(t), o = r.source, i = r.id, s = r.path, a = f[i] && s in f[i].nsps;
return e.forceNew || e["force new connection"] || !1 === e.multiplex || a ? (h("ignoring socket cache for %s", o), 
n = u(o, e)) : (f[i] || (h("new io instance for %s", o), f[i] = u(o, e)), n = f[i]), 
r.query && !e.query && (e.query = r.query), n.socket(r.path, e);
}
var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, p = n(1), o = n(7), u = n(13), h = n(3)("socket.io-client");
t.exports = e = r;
var f = e.managers = {};
e.protocol = o.protocol, e.connect = r, e.Manager = n(13), e.Socket = n(37);
}, function(t, e, n) {
(function(o) {
"use strict";
var i = n(2), s = n(3)("socket.io-client:url");
t.exports = function(t, e) {
var n = t;
e = e || o.location, null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), 
/^(https?|wss?):\/\//.test(t) || (s("protocol-less url %s", t), t = "undefined" != typeof e ? e.protocol + "//" + t : "https://" + t), 
s("parse %s", t), n = i(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), 
n.path = n.path || "/";
var r = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
return n.id = n.protocol + "://" + r + ":" + n.port, n.href = n.protocol + "://" + r + (e && e.port === n.port ? "" : ":" + n.port), 
n;
};
}).call(e, function() {
return this;
}());
}, function(t, e) {
var a = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, c = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ];
t.exports = function(t) {
var e = t, n = t.indexOf("["), r = t.indexOf("]");
-1 != n && -1 != r && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
for (var o = a.exec(t || ""), i = {}, s = 14; s--; ) i[c[s]] = o[s] || "";
return -1 != n && -1 != r && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), 
i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), 
i.ipv6uri = !0), i;
};
}, function(n, i, r) {
(function(e) {
function t() {
var t;
try {
t = i.storage.debug;
} catch (t) {}
return !t && "undefined" != typeof e && "env" in e && (t = e.env.DEBUG), t;
}
(i = n.exports = r(5)).log = function() {
return "object" == typeof console && cc.log && Function.prototype.apply.call(cc.log, console, arguments);
}, i.formatArgs = function(t) {
var e = this.useColors;
if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + i.humanize(this.diff), 
e) {
var n = "color: " + this.color;
t.splice(1, 0, n, "color: inherit");
var r = 0, o = 0;
t[0].replace(/%[a-zA-Z%]/g, function(t) {
"%%" !== t && (r++, "%c" === t && (o = r));
}), t.splice(o, 0, n);
}
}, i.save = function(t) {
try {
null == t ? i.storage.removeItem("debug") : i.storage.debug = t;
} catch (t) {}
}, i.load = t, i.useColors = function() {
return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}, i.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function() {
try {
return window.localStorage;
} catch (t) {}
}(), i.colors = [ "lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson" ], 
i.formatters.j = function(t) {
try {
return JSON.stringify(t);
} catch (t) {
return "[UnexpectedJSONParseError]: " + t.message;
}
}, i.enable(t());
}).call(i, r(4));
}, function(t, e) {
function n() {
throw new Error("setTimeout has not been defined");
}
function r() {
throw new Error("clearTimeout has not been defined");
}
function o(e) {
if (p === setTimeout) return setTimeout(e, 0);
if ((p === n || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);
try {
return p(e, 0);
} catch (t) {
try {
return p.call(null, e, 0);
} catch (t) {
return p.call(this, e, 0);
}
}
}
function i() {
d && f && (d = !1, f.length ? l = f.concat(l) : y = -1, l.length && s());
}
function s() {
if (!d) {
var t = o(i);
d = !0;
for (var e = l.length; e; ) {
for (f = l, l = []; ++y < e; ) f && f[y].run();
y = -1, e = l.length;
}
f = null, d = !1, function(e) {
if (u === clearTimeout) return clearTimeout(e);
if ((u === r || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);
try {
u(e);
} catch (t) {
try {
return u.call(null, e);
} catch (t) {
return u.call(this, e);
}
}
}(t);
}
}
function a(t, e) {
this.fun = t, this.array = e;
}
function c() {}
var p, u, h = t.exports = {};
!function() {
try {
p = "function" == typeof setTimeout ? setTimeout : n;
} catch (t) {
p = n;
}
try {
u = "function" == typeof clearTimeout ? clearTimeout : r;
} catch (t) {
u = r;
}
}();
var f, l = [], d = !1, y = -1;
h.nextTick = function(t) {
var e = new Array(arguments.length - 1);
if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
l.push(new a(t, e)), 1 !== l.length || d || o(s);
}, a.prototype.run = function() {
this.fun.apply(null, this.array);
}, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", 
h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, 
h.removeAllListeners = c, h.emit = c, h.prependListener = c, h.prependOnceListener = c, 
h.listeners = function(t) {
return [];
}, h.binding = function(t) {
throw new Error("process.binding is not supported");
}, h.cwd = function() {
return "/";
}, h.chdir = function(t) {
throw new Error("process.chdir is not supported");
}, h.umask = function() {
return 0;
};
}, function(t, a, e) {
function n(t) {
function r() {
if (r.enabled) {
var o = r, t = +new Date(), e = t - (c || t);
o.diff = e, o.prev = c, o.curr = t, c = t;
for (var i = new Array(arguments.length), n = 0; n < i.length; n++) i[n] = arguments[n];
i[0] = a.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
var s = 0;
i[0] = i[0].replace(/%([a-zA-Z%])/g, function(t, e) {
if ("%%" === t) return t;
s++;
var n = a.formatters[e];
if ("function" == typeof n) {
var r = i[s];
t = n.call(o, r), i.splice(s, 1), s--;
}
return t;
}), a.formatArgs.call(o, i);
(r.log || a.log || cc.log.bind(console)).apply(o, i);
}
}
return r.namespace = t, r.enabled = a.enabled(t), r.useColors = a.useColors(), r.color = function(t) {
var e, n = 0;
for (e in t) n = (n << 5) - n + t.charCodeAt(e), n |= 0;
return a.colors[Math.abs(n) % a.colors.length];
}(t), "function" == typeof a.init && a.init(r), r;
}
(a = t.exports = n.debug = n.default = n).coerce = function(t) {
return t instanceof Error ? t.stack || t.message : t;
}, a.disable = function() {
a.enable("");
}, a.enable = function(t) {
a.save(t), a.names = [], a.skips = [];
for (var e = ("string" == typeof t ? t : "").split(/[\s,]+/), n = e.length, r = 0; r < n; r++) e[r] && ("-" === (t = e[r].replace(/\*/g, ".*?"))[0] ? a.skips.push(new RegExp("^" + t.substr(1) + "$")) : a.names.push(new RegExp("^" + t + "$")));
}, a.enabled = function(t) {
var e, n;
for (e = 0, n = a.skips.length; e < n; e++) if (a.skips[e].test(t)) return !1;
for (e = 0, n = a.names.length; e < n; e++) if (a.names[e].test(t)) return !0;
return !1;
}, a.humanize = e(6), a.names = [], a.skips = [], a.formatters = {};
var c;
}, function(t, e) {
function i(t, e, n) {
if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";
}
var s = 1e3, a = 60 * s, c = 60 * a, p = 24 * c, u = 365.25 * p;
t.exports = function(t, e) {
e = e || {};
var n, r, o = typeof t;
if ("string" === o && 0 < t.length) return function(t) {
if (!(100 < (t = String(t)).length)) {
var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
if (e) {
var n = parseFloat(e[1]);
switch ((e[2] || "ms").toLowerCase()) {
case "years":
case "year":
case "yrs":
case "yr":
case "y":
return n * u;

case "days":
case "day":
case "d":
return n * p;

case "hours":
case "hour":
case "hrs":
case "hr":
case "h":
return n * c;

case "minutes":
case "minute":
case "mins":
case "min":
case "m":
return n * a;

case "seconds":
case "second":
case "secs":
case "sec":
case "s":
return n * s;

case "milliseconds":
case "millisecond":
case "msecs":
case "msec":
case "ms":
return n;

default:
return;
}
}
}
}(t);
if ("number" === o && !1 === isNaN(t)) return e.long ? i(r = t, p, "day") || i(r, c, "hour") || i(r, a, "minute") || i(r, s, "second") || r + " ms" : p <= (n = t) ? Math.round(n / p) + "d" : c <= n ? Math.round(n / c) + "h" : a <= n ? Math.round(n / a) + "m" : s <= n ? Math.round(n / s) + "s" : n + "ms";
throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
};
}, function(t, s, e) {
function n() {}
function i(t) {
var e = "" + t.type;
return s.BINARY_EVENT !== t.type && s.BINARY_ACK !== t.type || (e += t.attachments + "-"), 
t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data)), 
p("encoded %j as %s", t, e), e;
}
function r() {
this.reconstructor = null;
}
function o(t) {
var e = 0, n = {
type: Number(t.charAt(0))
};
if (null == s.types[n.type]) return c();
if (s.BINARY_EVENT === n.type || s.BINARY_ACK === n.type) {
for (var r = ""; "-" !== t.charAt(++e) && (r += t.charAt(e), e != t.length); ) ;
if (r != Number(r) || "-" !== t.charAt(e)) throw new Error("Illegal attachments");
n.attachments = Number(r);
}
if ("/" === t.charAt(e + 1)) for (n.nsp = ""; ++e; ) {
if ("," === (i = t.charAt(e))) break;
if (n.nsp += i, e === t.length) break;
} else n.nsp = "/";
var o = t.charAt(e + 1);
if ("" !== o && Number(o) == o) {
for (n.id = ""; ++e; ) {
var i;
if (null == (i = t.charAt(e)) || Number(i) != i) {
--e;
break;
}
if (n.id += t.charAt(e), e === t.length) break;
}
n.id = Number(n.id);
}
return t.charAt(++e) && (n = function(t, e) {
try {
t.data = JSON.parse(e);
} catch (t) {
return c();
}
return t;
}(n, t.substr(e))), p("decoded %s as %j", t, n), n;
}
function a(t) {
this.reconPack = t, this.buffers = [];
}
function c() {
return {
type: s.ERROR,
data: "parser error"
};
}
var p = e(3)("socket.io-parser"), u = e(8), h = e(9), f = e(11), l = e(12);
s.protocol = 4, s.types = [ "CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK" ], 
s.CONNECT = 0, s.DISCONNECT = 1, s.EVENT = 2, s.ACK = 3, s.ERROR = 4, s.BINARY_EVENT = 5, 
s.BINARY_ACK = 6, s.Encoder = n, s.Decoder = r, n.prototype.encode = function(t, e) {
if (t.type !== s.EVENT && t.type !== s.ACK || !h(t.data) || (t.type = t.type === s.EVENT ? s.BINARY_EVENT : s.BINARY_ACK), 
p("encoding packet %j", t), s.BINARY_EVENT === t.type || s.BINARY_ACK === t.type) n = t, 
o = e, f.removeBlobs(n, function(t) {
var e = f.deconstructPacket(t), n = i(e.packet), r = e.buffers;
r.unshift(n), o(r);
}); else {
e([ i(t) ]);
}
var n, o;
}, u(r.prototype), r.prototype.add = function(t) {
var e;
if ("string" == typeof t) e = o(t), s.BINARY_EVENT === e.type || s.BINARY_ACK === e.type ? (this.reconstructor = new a(e), 
0 === this.reconstructor.reconPack.attachments && this.emit("decoded", e)) : this.emit("decoded", e); else {
if (!l(t) && !t.base64) throw new Error("Unknown type: " + t);
if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
(e = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", e));
}
}, r.prototype.destroy = function() {
this.reconstructor && this.reconstructor.finishedReconstruction();
}, a.prototype.takeBinaryData = function(t) {
if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
var e = f.reconstructPacket(this.reconPack, this.buffers);
return this.finishedReconstruction(), e;
}
return null;
}, a.prototype.finishedReconstruction = function() {
this.reconPack = null, this.buffers = [];
};
}, function(t, e, n) {
function r(t) {
if (t) return function(t) {
for (var e in r.prototype) t[e] = r.prototype[e];
return t;
}(t);
}
(t.exports = r).prototype.on = r.prototype.addEventListener = function(t, e) {
return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), 
this;
}, r.prototype.once = function(t, e) {
function n() {
this.off(t, n), e.apply(this, arguments);
}
return n.fn = e, this.on(t, n), this;
}, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
this;
var n = this._callbacks["$" + t];
if (!n) return this;
if (1 == arguments.length) return delete this._callbacks["$" + t], this;
for (var r, o = 0; o < n.length; o++) if ((r = n[o]) === e || r.fn === e) {
n.splice(o, 1);
break;
}
return this;
}, r.prototype.emit = function(t) {
this._callbacks = this._callbacks || {};
var e = [].slice.call(arguments, 1), n = this._callbacks["$" + t];
if (n) for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e);
return this;
}, r.prototype.listeners = function(t) {
return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
}, r.prototype.hasListeners = function(t) {
return !!this.listeners(t).length;
};
}, function(e, t, n) {
(function(i) {
var s = n(10), t = Object.prototype.toString, a = "function" == typeof i.Blob || "[object BlobConstructor]" === t.call(i.Blob), c = "function" == typeof i.File || "[object FileConstructor]" === t.call(i.File);
e.exports = function t(e) {
if (!e || "object" != typeof e) return !1;
if (s(e)) {
for (var n = 0, r = e.length; n < r; n++) if (t(e[n])) return !0;
return !1;
}
if ("function" == typeof i.Buffer && i.Buffer.isBuffer && i.Buffer.isBuffer(e) || "function" == typeof i.ArrayBuffer && e instanceof ArrayBuffer || a && e instanceof Blob || c && e instanceof File) return !0;
if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return t(e.toJSON(), !0);
for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o) && t(e[o])) return !0;
return !1;
};
}).call(t, function() {
return this;
}());
}, function(t, e) {
var n = {}.toString;
t.exports = Array.isArray || function(t) {
return "[object Array]" == n.call(t);
};
}, function(t, n, r) {
(function(t) {
var u = r(10), h = r(12), e = Object.prototype.toString, f = "function" == typeof t.Blob || "[object BlobConstructor]" === e.call(t.Blob), l = "function" == typeof t.File || "[object FileConstructor]" === e.call(t.File);
n.deconstructPacket = function(t) {
var e = [], n = t.data, r = t;
return r.data = function t(e, n) {
if (!e) return e;
if (h(e)) {
var r = {
_placeholder: !0,
num: n.length
};
return n.push(e), r;
}
if (u(e)) {
for (var o = new Array(e.length), i = 0; i < e.length; i++) o[i] = t(e[i], n);
return o;
}
if ("object" == typeof e && !(e instanceof Date)) {
o = {};
for (var s in e) o[s] = t(e[s], n);
return o;
}
return e;
}(n, e), r.attachments = e.length, {
packet: r,
buffers: e
};
}, n.reconstructPacket = function(t, e) {
return t.data = function t(e, n) {
if (!e) return e;
if (e && e._placeholder) return n[e.num];
if (u(e)) for (var r = 0; r < e.length; r++) e[r] = t(e[r], n); else if ("object" == typeof e) for (var o in e) e[o] = t(e[o], n);
return e;
}(t.data, e), t.attachments = void 0, t;
}, n.removeBlobs = function(t, a) {
var c = 0, p = t;
(function t(e, n, r) {
if (!e) return e;
if (f && e instanceof Blob || l && e instanceof File) {
c++;
var o = new FileReader();
o.onload = function() {
r ? r[n] = this.result : p = this.result, --c || a(p);
}, o.readAsArrayBuffer(e);
} else if (u(e)) for (var i = 0; i < e.length; i++) t(e[i], i, e); else if ("object" == typeof e && !h(e)) for (var s in e) t(e[s], s, e);
})(p), c || a(p);
};
}).call(n, function() {
return this;
}());
}, function(t, e) {
(function(e) {
t.exports = function(t) {
return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer;
};
}).call(e, function() {
return this;
}());
}, function(t, e, n) {
"use strict";
function r(t, e) {
if (!(this instanceof r)) return new r(t, e);
t && "object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t, t = void 0), 
(e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, 
this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), 
this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), 
this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new l({
min: this.reconnectionDelay(),
max: this.reconnectionDelayMax(),
jitter: this.randomizationFactor()
}), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", 
this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
var n = e.parser || a;
this.encoder = new n.Encoder(), this.decoder = new n.Decoder(), this.autoConnect = !1 !== e.autoConnect, 
this.autoConnect && this.open();
}
var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, c = n(14), i = n(37), s = n(8), a = n(7), p = n(39), u = n(40), h = n(3)("socket.io-client:manager"), f = n(36), l = n(41), d = Object.prototype.hasOwnProperty;
(t.exports = r).prototype.emitAll = function() {
this.emit.apply(this, arguments);
for (var t in this.nsps) d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
}, r.prototype.updateSocketIds = function() {
for (var t in this.nsps) d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
}, r.prototype.generateId = function(t) {
return ("/" === t ? "" : t + "#") + this.engine.id;
}, s(r.prototype), r.prototype.reconnection = function(t) {
return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
}, r.prototype.reconnectionAttempts = function(t) {
return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
}, r.prototype.reconnectionDelay = function(t) {
return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), 
this) : this._reconnectionDelay;
}, r.prototype.randomizationFactor = function(t) {
return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), 
this) : this._randomizationFactor;
}, r.prototype.reconnectionDelayMax = function(t) {
return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), 
this) : this._reconnectionDelayMax;
}, r.prototype.timeout = function(t) {
return arguments.length ? (this._timeout = t, this) : this._timeout;
}, r.prototype.maybeReconnectOnOpen = function() {
!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
}, r.prototype.open = r.prototype.connect = function(n, t) {
if (h("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
h("opening %s", this.uri), this.engine = c(this.uri, this.opts);
var e = this.engine, r = this;
this.readyState = "opening", this.skipReconnect = !1;
var o = p(e, "open", function() {
r.onopen(), n && n();
}), i = p(e, "error", function(t) {
if (h("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", t), 
n) {
var e = new Error("Connection error");
e.data = t, n(e);
} else r.maybeReconnectOnOpen();
});
if (!1 !== this._timeout) {
var s = this._timeout;
h("connect attempt will timeout after %d", s);
var a = setTimeout(function() {
h("connect attempt timed out after %d", s), o.destroy(), e.close(), e.emit("error", "timeout"), 
r.emitAll("connect_timeout", s);
}, s);
this.subs.push({
destroy: function() {
clearTimeout(a);
}
});
}
return this.subs.push(o), this.subs.push(i), this;
}, r.prototype.onopen = function() {
h("open"), this.cleanup(), this.readyState = "open", this.emit("open");
var t = this.engine;
this.subs.push(p(t, "data", u(this, "ondata"))), this.subs.push(p(t, "ping", u(this, "onping"))), 
this.subs.push(p(t, "pong", u(this, "onpong"))), this.subs.push(p(t, "error", u(this, "onerror"))), 
this.subs.push(p(t, "close", u(this, "onclose"))), this.subs.push(p(this.decoder, "decoded", u(this, "ondecoded")));
}, r.prototype.onping = function() {
this.lastPing = new Date(), this.emitAll("ping");
}, r.prototype.onpong = function() {
this.emitAll("pong", new Date() - this.lastPing);
}, r.prototype.ondata = function(t) {
this.decoder.add(t);
}, r.prototype.ondecoded = function(t) {
this.emit("packet", t);
}, r.prototype.onerror = function(t) {
h("error", t), this.emitAll("error", t);
}, r.prototype.socket = function(t, e) {
function n() {
~f(o.connecting, r) || o.connecting.push(r);
}
var r = this.nsps[t];
if (!r) {
r = new i(this, t, e), this.nsps[t] = r;
var o = this;
r.on("connecting", n), r.on("connect", function() {
r.id = o.generateId(t);
}), this.autoConnect && n();
}
return r;
}, r.prototype.destroy = function(t) {
var e = f(this.connecting, t);
~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
}, r.prototype.packet = function(n) {
h("writing packet %j", n);
var r = this;
n.query && 0 === n.type && (n.nsp += "?" + n.query), r.encoding ? r.packetBuffer.push(n) : (r.encoding = !0, 
this.encoder.encode(n, function(t) {
for (var e = 0; e < t.length; e++) r.engine.write(t[e], n.options);
r.encoding = !1, r.processPacketQueue();
}));
}, r.prototype.processPacketQueue = function() {
if (0 < this.packetBuffer.length && !this.encoding) {
var t = this.packetBuffer.shift();
this.packet(t);
}
}, r.prototype.cleanup = function() {
h("cleanup");
for (var t = this.subs.length, e = 0; e < t; e++) {
this.subs.shift().destroy();
}
this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
}, r.prototype.close = r.prototype.disconnect = function() {
h("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), 
this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
}, r.prototype.onclose = function(t) {
h("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", 
this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
}, r.prototype.reconnect = function() {
if (this.reconnecting || this.skipReconnect) return this;
var e = this;
if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), 
this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1; else {
var t = this.backoff.duration();
h("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
var n = setTimeout(function() {
e.skipReconnect || (h("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), 
e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open(function(t) {
t ? (h("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (h("reconnect success"), 
e.onreconnect());
}));
}, t);
this.subs.push({
destroy: function() {
clearTimeout(n);
}
});
}
}, r.prototype.onreconnect = function() {
var t = this.backoff.attempts;
this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
};
}, function(t, e, n) {
t.exports = n(15), t.exports.parser = n(22);
}, function(e, t, n) {
(function(r) {
function h(t, e) {
if (!(this instanceof h)) return new h(t, e);
e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = a(t), e.hostname = t.host, 
e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = a(e.host).host), 
this.secure = null != e.secure ? e.secure : r.location && "https:" === location.protocol, 
e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, 
this.hostname = e.hostname || (r.location ? location.hostname : "localhost"), this.port = e.port || (r.location && location.port ? location.port : this.secure ? 443 : 80), 
this.query = e.query || {}, "string" == typeof this.query && (this.query = c.decode(this.query)), 
this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", 
this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, 
this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", 
this.timestampRequests = e.timestampRequests, this.transports = e.transports || [ "polling", "websocket" ], 
this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], 
this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, 
this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), 
!0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), 
this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, 
this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, 
this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, 
this.forceNode = !!e.forceNode;
var n = "object" == typeof r && r;
n.global === n && (e.extraHeaders && 0 < Object.keys(e.extraHeaders).length && (this.extraHeaders = e.extraHeaders), 
e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, 
this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, 
this.pingTimeoutTimer = null, this.open();
}
var o = n(16), t = n(8), f = n(3)("engine.io-client:socket"), i = n(36), s = n(22), a = n(2), c = n(30);
(e.exports = h).priorWebsocketSuccess = !1, t(h.prototype), h.protocol = s.protocol, 
(h.Socket = h).Transport = n(21), h.transports = n(16), h.parser = n(22), h.prototype.createTransport = function(t) {
f('creating transport "%s"', t);
var e = function(t) {
var e = {};
for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
return e;
}(this.query);
e.EIO = s.protocol, e.transport = t;
var n = this.transportOptions[t] || {};
this.id && (e.sid = this.id);
return new o[t]({
query: e,
socket: this,
agent: n.agent || this.agent,
hostname: n.hostname || this.hostname,
port: n.port || this.port,
secure: n.secure || this.secure,
path: n.path || this.path,
forceJSONP: n.forceJSONP || this.forceJSONP,
jsonp: n.jsonp || this.jsonp,
forceBase64: n.forceBase64 || this.forceBase64,
enablesXDR: n.enablesXDR || this.enablesXDR,
timestampRequests: n.timestampRequests || this.timestampRequests,
timestampParam: n.timestampParam || this.timestampParam,
policyPort: n.policyPort || this.policyPort,
pfx: n.pfx || this.pfx,
key: n.key || this.key,
passphrase: n.passphrase || this.passphrase,
cert: n.cert || this.cert,
ca: n.ca || this.ca,
ciphers: n.ciphers || this.ciphers,
rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
extraHeaders: n.extraHeaders || this.extraHeaders,
forceNode: n.forceNode || this.forceNode,
localAddress: n.localAddress || this.localAddress,
requestTimeout: n.requestTimeout || this.requestTimeout,
protocols: n.protocols || void 0
});
}, h.prototype.open = function() {
var t;
if (this.rememberUpgrade && h.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket"; else {
if (0 === this.transports.length) {
var e = this;
return void setTimeout(function() {
e.emit("error", "No transports available");
}, 0);
}
t = this.transports[0];
}
this.readyState = "opening";
try {
t = this.createTransport(t);
} catch (t) {
return this.transports.shift(), void this.open();
}
t.open(), this.setTransport(t);
}, h.prototype.setTransport = function(t) {
f("setting transport %s", t.name);
var e = this;
this.transport && (f("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), 
(this.transport = t).on("drain", function() {
e.onDrain();
}).on("packet", function(t) {
e.onPacket(t);
}).on("error", function(t) {
e.onError(t);
}).on("close", function() {
e.onClose("transport close");
});
}, h.prototype.probe = function(n) {
function t() {
if (u.onlyBinaryUpgrades) {
var t = !this.supportsBinary && u.transport.supportsBinary;
p = p || t;
}
p || (f('probe transport "%s" opened', n), c.send([ {
type: "ping",
data: "probe"
} ]), c.once("packet", function(t) {
if (!p) if ("pong" === t.type && "probe" === t.data) {
if (f('probe transport "%s" pong', n), u.upgrading = !0, u.emit("upgrading", c), 
!c) return;
h.priorWebsocketSuccess = "websocket" === c.name, f('pausing current transport "%s"', u.transport.name), 
u.transport.pause(function() {
p || "closed" !== u.readyState && (f("changing transport and sending upgrade packet"), 
a(), u.setTransport(c), c.send([ {
type: "upgrade"
} ]), u.emit("upgrade", c), c = null, u.upgrading = !1, u.flush());
});
} else {
f('probe transport "%s" failed', n);
var e = new Error("probe error");
e.transport = c.name, u.emit("upgradeError", e);
}
}));
}
function r() {
p || (p = !0, a(), c.close(), c = null);
}
function e(t) {
var e = new Error("probe error: " + t);
e.transport = c.name, r(), f('probe transport "%s" failed because of error: %s', n, t), 
u.emit("upgradeError", e);
}
function o() {
e("transport closed");
}
function i() {
e("socket closed");
}
function s(t) {
c && t.name !== c.name && (f('"%s" works - aborting "%s"', t.name, c.name), r());
}
function a() {
c.removeListener("open", t), c.removeListener("error", e), c.removeListener("close", o), 
u.removeListener("close", i), u.removeListener("upgrading", s);
}
f('probing transport "%s"', n);
var c = this.createTransport(n, {
probe: 1
}), p = !1, u = this;
h.priorWebsocketSuccess = !1, c.once("open", t), c.once("error", e), c.once("close", o), 
this.once("close", i), this.once("upgrading", s), c.open();
}, h.prototype.onOpen = function() {
if (f("socket open"), this.readyState = "open", h.priorWebsocketSuccess = "websocket" === this.transport.name, 
this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
f("starting upgrade probes");
for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t]);
}
}, h.prototype.onPacket = function(t) {
if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (f('socket receive: type "%s", data "%s"', t.type, t.data), 
this.emit("packet", t), this.emit("heartbeat"), t.type) {
case "open":
this.onHandshake(JSON.parse(t.data));
break;

case "pong":
this.setPing(), this.emit("pong");
break;

case "error":
var e = new Error("server error");
e.code = t.data, this.onError(e);
break;

case "message":
this.emit("data", t.data), this.emit("message", t.data);
} else f('packet received with socket readyState "%s"', this.readyState);
}, h.prototype.onHandshake = function(t) {
this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), 
this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), 
"closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), 
this.on("heartbeat", this.onHeartbeat));
}, h.prototype.onHeartbeat = function(t) {
clearTimeout(this.pingTimeoutTimer);
var e = this;
e.pingTimeoutTimer = setTimeout(function() {
"closed" !== e.readyState && e.onClose("ping timeout");
}, t || e.pingInterval + e.pingTimeout);
}, h.prototype.setPing = function() {
var t = this;
clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function() {
f("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), 
t.onHeartbeat(t.pingTimeout);
}, t.pingInterval);
}, h.prototype.ping = function() {
var t = this;
this.sendPacket("ping", function() {
t.emit("ping");
});
}, h.prototype.onDrain = function() {
this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0) === this.writeBuffer.length ? this.emit("drain") : this.flush();
}, h.prototype.flush = function() {
"closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (f("flushing %d packets in socket", this.writeBuffer.length), 
this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, 
this.emit("flush"));
}, h.prototype.write = h.prototype.send = function(t, e, n) {
return this.sendPacket("message", t, e, n), this;
}, h.prototype.sendPacket = function(t, e, n, r) {
if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, 
n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
(n = n || {}).compress = !1 !== n.compress;
var o = {
type: t,
data: e,
options: n
};
this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), 
this.flush();
}
}, h.prototype.close = function() {
function t() {
r.onClose("forced close"), f("socket closing - telling transport to close"), r.transport.close();
}
function e() {
r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t();
}
function n() {
r.once("upgrade", e), r.once("upgradeError", e);
}
if ("opening" === this.readyState || "open" === this.readyState) {
this.readyState = "closing";
var r = this;
this.writeBuffer.length ? this.once("drain", function() {
this.upgrading ? n() : t();
}) : this.upgrading ? n() : t();
}
return this;
}, h.prototype.onError = function(t) {
f("socket error %j", t), h.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
}, h.prototype.onClose = function(t, e) {
if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
f('socket close with reason: "%s"', t);
clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), 
this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", 
this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0;
}
}, h.prototype.filterUpgrades = function(t) {
for (var e = [], n = 0, r = t.length; n < r; n++) ~i(this.transports, t[n]) && e.push(t[n]);
return e;
};
}).call(t, function() {
return this;
}());
}, function(t, e, n) {
(function(s) {
var a = n(17), c = n(19), p = n(33), t = n(34);
e.polling = function(t) {
var e = !1, n = !1, r = !1 !== t.jsonp;
if (s.location) {
var o = "https:" === location.protocol, i = location.port;
i || (i = o ? 443 : 80), e = t.hostname !== location.hostname || i !== t.port, n = t.secure !== o;
}
if (t.xdomain = e, t.xscheme = n, "open" in new a(t) && !t.forceJSONP) return new c(t);
if (!r) throw new Error("JSONP disabled");
return new p(t);
}, e.websocket = t;
}).call(e, function() {
return this;
}());
}, function(t, e, n) {
(function(o) {
var i = n(18);
t.exports = function(t) {
var e = t.xdomain, n = t.xscheme, r = t.enablesXDR;
try {
if ("undefined" != typeof XMLHttpRequest && (!e || i)) return new XMLHttpRequest();
} catch (t) {}
try {
if ("undefined" != typeof XDomainRequest && !n && r) return new XDomainRequest();
} catch (t) {}
if (!e) try {
return new (o[[ "Active" ].concat("Object").join("X")])("Microsoft.XMLHTTP");
} catch (t) {}
};
}).call(e, function() {
return this;
}());
}, function(e, t) {
try {
e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
} catch (t) {
e.exports = !1;
}
}, function(u, t, h) {
(function(o) {
function e() {}
function t(t) {
if (r.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, 
o.location) {
var e = "https:" === location.protocol, n = location.port;
n || (n = e ? 443 : 80), this.xd = t.hostname !== o.location.hostname || n !== t.port, 
this.xs = t.secure !== e;
}
}
function i(t) {
this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, 
this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, 
this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, 
this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, 
this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, 
this.extraHeaders = t.extraHeaders, this.create();
}
function n() {
for (var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort();
}
var s = h(17), r = h(20), a = h(8), c = h(31), p = h(3)("engine.io-client:polling-xhr");
u.exports = t, u.exports.Request = i, c(t, r), t.prototype.supportsBinary = !0, 
t.prototype.request = function(t) {
return (t = t || {}).uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, 
t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, 
t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, 
t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, 
t.extraHeaders = this.extraHeaders, new i(t);
}, t.prototype.doWrite = function(t, e) {
var n = "string" != typeof t && void 0 !== t, r = this.request({
method: "POST",
data: t,
isBinary: n
}), o = this;
r.on("success", e), r.on("error", function(t) {
o.onError("xhr post error", t);
}), this.sendXhr = r;
}, t.prototype.doPoll = function() {
p("xhr poll");
var t = this.request(), e = this;
t.on("data", function(t) {
e.onData(t);
}), t.on("error", function(t) {
e.onError("xhr poll error", t);
}), this.pollXhr = t;
}, a(i.prototype), i.prototype.create = function() {
var t = {
agent: this.agent,
xdomain: this.xd,
xscheme: this.xs,
enablesXDR: this.enablesXDR
};
t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, 
t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
var e = this.xhr = new s(t), n = this;
try {
p("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
try {
if (this.extraHeaders) {
e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0);
for (var r in this.extraHeaders) this.extraHeaders.hasOwnProperty(r) && e.setRequestHeader(r, this.extraHeaders[r]);
}
} catch (t) {}
if ("POST" === this.method) try {
this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
} catch (t) {}
try {
e.setRequestHeader("Accept", "*/*");
} catch (t) {}
"withCredentials" in e && (e.withCredentials = !0), this.requestTimeout && (e.timeout = this.requestTimeout), 
this.hasXDR() ? (e.onload = function() {
n.onLoad();
}, e.onerror = function() {
n.onError(e.responseText);
}) : e.onreadystatechange = function() {
if (2 === e.readyState) {
var t;
try {
t = e.getResponseHeader("Content-Type");
} catch (t) {}
"application/octet-stream" === t && (e.responseType = "arraybuffer");
}
4 === e.readyState && (200 === e.status || 1223 === e.status ? n.onLoad() : setTimeout(function() {
n.onError(e.status);
}, 0));
}, p("xhr data %s", this.data), e.send(this.data);
} catch (t) {
return void setTimeout(function() {
n.onError(t);
}, 0);
}
o.document && (this.index = i.requestsCount++, i.requests[this.index] = this);
}, i.prototype.onSuccess = function() {
this.emit("success"), this.cleanup();
}, i.prototype.onData = function(t) {
this.emit("data", t), this.onSuccess();
}, i.prototype.onError = function(t) {
this.emit("error", t), this.cleanup(!0);
}, i.prototype.cleanup = function(t) {
if ("undefined" != typeof this.xhr && null !== this.xhr) {
if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = e : this.xhr.onreadystatechange = e, 
t) try {
this.xhr.abort();
} catch (t) {}
o.document && delete i.requests[this.index], this.xhr = null;
}
}, i.prototype.onLoad = function() {
var t;
try {
var e;
try {
e = this.xhr.getResponseHeader("Content-Type");
} catch (t) {}
t = "application/octet-stream" === e && this.xhr.response || this.xhr.responseText;
} catch (t) {
this.onError(t);
}
null != t && this.onData(t);
}, i.prototype.hasXDR = function() {
return "undefined" != typeof o.XDomainRequest && !this.xs && this.enablesXDR;
}, i.prototype.abort = function() {
this.cleanup();
}, i.requestsCount = 0, i.requests = {}, o.document && (o.attachEvent ? o.attachEvent("onunload", n) : o.addEventListener && o.addEventListener("beforeunload", n, !1));
}).call(t, function() {
return this;
}());
}, function(t, e, n) {
function r(t) {
var e = t && t.forceBase64;
u && !e || (this.supportsBinary = !1), o.call(this, t);
}
var o = n(21), i = n(30), s = n(22), a = n(31), c = n(32), p = n(3)("engine.io-client:polling");
t.exports = r;
var u = null != new (n(17))({
xdomain: !1
}).responseType;
a(r, o), r.prototype.name = "polling", r.prototype.doOpen = function() {
this.poll();
}, r.prototype.pause = function(t) {
function e() {
p("paused"), n.readyState = "paused", t();
}
var n = this;
if (this.readyState = "pausing", this.polling || !this.writable) {
var r = 0;
this.polling && (p("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function() {
p("pre-pause polling complete"), --r || e();
})), this.writable || (p("we are currently writing - waiting to pause"), r++, this.once("drain", function() {
p("pre-pause writing complete"), --r || e();
}));
} else e();
}, r.prototype.poll = function() {
p("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
}, r.prototype.onData = function(t) {
var r = this;
p("polling got data %s", t);
s.decodePayload(t, this.socket.binaryType, function(t, e, n) {
return "opening" === r.readyState && r.onOpen(), "close" === t.type ? (r.onClose(), 
!1) : void r.onPacket(t);
}), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), 
"open" === this.readyState ? this.poll() : p('ignoring poll - transport state "%s"', this.readyState));
}, r.prototype.doClose = function() {
function t() {
p("writing close packet"), e.write([ {
type: "close"
} ]);
}
var e = this;
"open" === this.readyState ? (p("transport open - closing"), t()) : (p("transport not open - deferring close"), 
this.once("open", t));
}, r.prototype.write = function(t) {
var e = this;
this.writable = !1;
var n = function() {
e.writable = !0, e.emit("drain");
};
s.encodePayload(t, this.supportsBinary, function(t) {
e.doWrite(t, n);
});
}, r.prototype.uri = function() {
var t = this.query || {}, e = this.secure ? "https" : "http", n = "";
!1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), 
t = i.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), 
t.length && (t = "?" + t);
return e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t;
};
}, function(t, e, n) {
function r(t) {
this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, 
this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, 
this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, 
this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, 
this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, 
this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;
}
var o = n(22);
n(8)((t.exports = r).prototype), r.prototype.onError = function(t, e) {
var n = new Error(t);
return n.type = "TransportError", n.description = e, this.emit("error", n), this;
}, r.prototype.open = function() {
return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", 
this.doOpen()), this;
}, r.prototype.close = function() {
return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), 
this.onClose()), this;
}, r.prototype.send = function(t) {
if ("open" !== this.readyState) throw new Error("Transport not open");
this.write(t);
}, r.prototype.onOpen = function() {
this.readyState = "open", this.writable = !0, this.emit("open");
}, r.prototype.onData = function(t) {
var e = o.decodePacket(t, this.socket.binaryType);
this.onPacket(e);
}, r.prototype.onPacket = function(t) {
this.emit("packet", t);
}, r.prototype.onClose = function() {
this.readyState = "closed", this.emit("close");
};
}, function(t, g, r) {
(function(p) {
function a(t, e, n) {
if (!e) return g.encodeBase64Packet(t, n);
if (h) return function(t, e, n) {
if (!e) return g.encodeBase64Packet(t, n);
var r = new FileReader();
return r.onload = function() {
t.data = r.result, g.encodePacket(t, e, !0, n);
}, r.readAsArrayBuffer(t.data);
}(t, e, n);
var r = new Uint8Array(1);
r[0] = l[t.type];
return n(new m([ r.buffer, t.data ]));
}
function o(t, e, n) {
for (var o = new Array(t.length), r = c(t.length, n), i = function(n, t, r) {
e(t, function(t, e) {
o[n] = e, r(t, o);
});
}, s = 0; s < t.length; s++) i(s, t[s], r);
}
var i, t = r(23), s = r(9), f = r(24), c = r(25), u = r(26);
p && p.ArrayBuffer && (i = r(28));
var e = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), n = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), h = e || n;
g.protocol = 3;
var l = g.packets = {
open: 0,
close: 1,
ping: 2,
pong: 3,
message: 4,
upgrade: 5,
noop: 6
}, d = t(l), y = {
type: "error",
data: "parser error"
}, m = r(29);
g.encodePacket = function(t, e, n, r) {
"function" == typeof e && (r = e, e = !1), "function" == typeof n && (r = n, n = null);
var o, i = void 0 === t.data ? void 0 : t.data.buffer || t.data;
if (p.ArrayBuffer && i instanceof ArrayBuffer) return function(t, e, n) {
if (!e) return g.encodeBase64Packet(t, n);
var r = t.data, o = new Uint8Array(r), i = new Uint8Array(1 + r.byteLength);
i[0] = l[t.type];
for (var s = 0; s < o.length; s++) i[s + 1] = o[s];
return n(i.buffer);
}(t, e, r);
if (m && i instanceof p.Blob) return a(t, e, r);
if (i && i.base64) return o = t, r("b" + g.packets[o.type] + o.data.data);
var s = l[t.type];
return void 0 !== t.data && (s += n ? u.encode(String(t.data), {
strict: !1
}) : String(t.data)), r("" + s);
}, g.encodeBase64Packet = function(e, n) {
var r, o = "b" + g.packets[e.type];
if (m && e.data instanceof p.Blob) {
var i = new FileReader();
return i.onload = function() {
var t = i.result.split(",")[1];
n(o + t);
}, i.readAsDataURL(e.data);
}
try {
r = String.fromCharCode.apply(null, new Uint8Array(e.data));
} catch (t) {
for (var s = new Uint8Array(e.data), a = new Array(s.length), c = 0; c < s.length; c++) a[c] = s[c];
r = String.fromCharCode.apply(null, a);
}
return o += p.btoa(r), n(o);
}, g.decodePacket = function(t, e, n) {
if (void 0 === t) return y;
if ("string" == typeof t) {
if ("b" === t.charAt(0)) return g.decodeBase64Packet(t.substr(1), e);
if (n && !1 === (t = function(t) {
try {
t = u.decode(t, {
strict: !1
});
} catch (t) {
return !1;
}
return t;
}(t))) return y;
var r = t.charAt(0);
return Number(r) == r && d[r] ? 1 < t.length ? {
type: d[r],
data: t.substring(1)
} : {
type: d[r]
} : y;
}
r = new Uint8Array(t)[0];
var o = f(t, 1);
return m && "blob" === e && (o = new m([ o ])), {
type: d[r],
data: o
};
}, g.decodeBase64Packet = function(t, e) {
var n = d[t.charAt(0)];
if (!i) return {
type: n,
data: {
base64: !0,
data: t.substr(1)
}
};
var r = i.decode(t.substr(1));
return "blob" === e && m && (r = new m([ r ])), {
type: n,
data: r
};
}, g.encodePayload = function(t, e, n) {
"function" == typeof e && (n = e, e = null);
var r = s(t);
return e && r ? m && !h ? g.encodePayloadAsBlob(t, n) : g.encodePayloadAsArrayBuffer(t, n) : t.length ? void o(t, function(t, n) {
g.encodePacket(t, !!r && e, !1, function(t) {
n(null, (e = t).length + ":" + e);
var e;
});
}, function(t, e) {
return n(e.join(""));
}) : n("0:");
}, g.decodePayload = function(t, e, n) {
if ("string" != typeof t) return g.decodePayloadAsBinary(t, e, n);
"function" == typeof e && (n = e, e = null);
var r;
if ("" === t) return n(y, 0, 1);
for (var o, i, s = "", a = 0, c = t.length; a < c; a++) {
var p = t.charAt(a);
if (":" === p) {
if ("" === s || s != (o = Number(s))) return n(y, 0, 1);
if (s != (i = t.substr(a + 1, o)).length) return n(y, 0, 1);
if (i.length) {
if (r = g.decodePacket(i, e, !1), y.type === r.type && y.data === r.data) return n(y, 0, 1);
if (!1 === n(r, a + o, c)) return;
}
a += o, s = "";
} else s += p;
}
return "" !== s ? n(y, 0, 1) : void 0;
}, g.encodePayloadAsArrayBuffer = function(t, r) {
return t.length ? void o(t, function(t, e) {
g.encodePacket(t, !0, !0, function(t) {
return e(null, t);
});
}, function(t, e) {
var n = e.reduce(function(t, e) {
var n;
return t + (n = "string" == typeof e ? e.length : e.byteLength).toString().length + n + 2;
}, 0), s = new Uint8Array(n), a = 0;
return e.forEach(function(t) {
var e = "string" == typeof t, n = t;
if (e) {
for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
n = r.buffer;
}
s[a++] = e ? 0 : 1;
var i = n.byteLength.toString();
for (o = 0; o < i.length; o++) s[a++] = parseInt(i[o]);
s[a++] = 255;
for (r = new Uint8Array(n), o = 0; o < r.length; o++) s[a++] = r[o];
}), r(s.buffer);
}) : r(new ArrayBuffer(0));
}, g.encodePayloadAsBlob = function(t, n) {
o(t, function(t, a) {
g.encodePacket(t, !0, !0, function(t) {
var e = new Uint8Array(1);
if (e[0] = 1, "string" == typeof t) {
for (var n = new Uint8Array(t.length), r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
t = n.buffer, e[0] = 0;
}
var o = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(), i = new Uint8Array(o.length + 1);
for (r = 0; r < o.length; r++) i[r] = parseInt(o[r]);
if (i[o.length] = 255, m) {
var s = new m([ e.buffer, i.buffer, t ]);
a(null, s);
}
});
}, function(t, e) {
return n(new m(e));
});
}, g.decodePayloadAsBinary = function(t, n, r) {
"function" == typeof n && (r = n, n = null);
for (var e = t, o = []; 0 < e.byteLength; ) {
for (var i = new Uint8Array(e), s = 0 === i[0], a = "", c = 1; 255 !== i[c]; c++) {
if (310 < a.length) return r(y, 0, 1);
a += i[c];
}
e = f(e, 2 + a.length), a = parseInt(a);
var p = f(e, 0, a);
if (s) try {
p = String.fromCharCode.apply(null, new Uint8Array(p));
} catch (t) {
var u = new Uint8Array(p);
p = "";
for (c = 0; c < u.length; c++) p += String.fromCharCode(u[c]);
}
o.push(p), e = f(e, a);
}
var h = o.length;
o.forEach(function(t, e) {
r(g.decodePacket(t, n, !0), e, h);
});
};
}).call(g, function() {
return this;
}());
}, function(t, e) {
t.exports = Object.keys || function(t) {
var e = [], n = Object.prototype.hasOwnProperty;
for (var r in t) n.call(t, r) && e.push(r);
return e;
};
}, function(t, e) {
t.exports = function(t, e, n) {
var r = t.byteLength;
if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);
if (e < 0 && (e += r), n < 0 && (n += r), r < n && (n = r), r <= e || n <= e || 0 === r) return new ArrayBuffer(0);
for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, 
a++) i[a] = o[s];
return i.buffer;
};
}, function(t, e) {
function s() {}
t.exports = function(t, n, r) {
function o(t, e) {
if (o.count <= 0) throw new Error("after called too many times");
--o.count, t ? (i = !0, n(t), n = r) : 0 !== o.count || i || n(null, e);
}
var i = !1;
return r = r || s, 0 === (o.count = t) ? n() : o;
};
}, function(t, y, m) {
var g;
(function(l, d) {
!function(t) {
function a(t) {
for (var e, n, r = [], o = 0, i = t.length; o < i; ) 55296 <= (e = t.charCodeAt(o++)) && e <= 56319 && o < i ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), 
o--) : r.push(e);
return r;
}
function r(t, e) {
if (55296 <= t && t <= 57343) {
if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
return !1;
}
return !0;
}
function o(t, e) {
return f(t >> e & 63 | 128);
}
function c(t, e) {
if (0 == (4294967168 & t)) return f(t);
var n = "";
return 0 == (4294965248 & t) ? n = f(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (r(t, e) || (t = 65533), 
n = f(t >> 12 & 15 | 224), n += o(t, 6)) : 0 == (4292870144 & t) && (n = f(t >> 18 & 7 | 240), 
n += o(t, 12), n += o(t, 6)), n + f(63 & t | 128);
}
function i() {
if (u <= h) throw Error("Invalid byte index");
var t = 255 & p[h];
if (h++, 128 == (192 & t)) return 63 & t;
throw Error("Invalid continuation byte");
}
function s(t) {
var e, n;
if (u < h) throw Error("Invalid byte index");
if (h == u) return !1;
if (e = 255 & p[h], h++, 0 == (128 & e)) return e;
if (192 == (224 & e)) {
if (128 <= (n = (31 & e) << 6 | i())) return n;
throw Error("Invalid continuation byte");
}
if (224 == (240 & e)) {
if (2048 <= (n = (15 & e) << 12 | i() << 6 | i())) return r(n, t) ? n : 65533;
throw Error("Invalid continuation byte");
}
if (240 == (248 & e) && (65536 <= (n = (7 & e) << 18 | i() << 12 | i() << 6 | i()) && n <= 1114111)) return n;
throw Error("Invalid UTF-8 detected");
}
var e = ("object" == typeof l && l && l.exports, "object" == typeof d && d);
e.global !== e && e.window !== e || e;
var p, u, h, f = String.fromCharCode, n = {
version: "2.1.2",
encode: function(t, e) {
for (var n = !1 !== (e = e || {}).strict, r = a(t), o = r.length, i = -1, s = ""; ++i < o; ) s += c(r[i], n);
return s;
},
decode: function(t, e) {
var n = !1 !== (e = e || {}).strict;
p = a(t), u = p.length, h = 0;
for (var r, o = []; !1 !== (r = s(n)); ) o.push(r);
return function(t) {
for (var e, n = t.length, r = -1, o = ""; ++r < n; ) 65535 < (e = t[r]) && (o += f((e -= 65536) >>> 10 & 1023 | 55296), 
e = 56320 | 1023 & e), o += f(e);
return o;
}(o);
}
};
void 0 === (g = function() {
return n;
}.call(y, m, y, l)) || (l.exports = g);
}();
}).call(y, m(27)(t), function() {
return this;
}());
}, function(t, e) {
t.exports = function(t) {
return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], 
t.webpackPolyfill = 1), t;
};
}, function(t, e) {
!function() {
"use strict";
for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = new Uint8Array(256), t = 0; t < i.length; t++) h[i.charCodeAt(t)] = t;
e.encode = function(t) {
var e, n = new Uint8Array(t), r = n.length, o = "";
for (e = 0; e < r; e += 3) o += i[n[e] >> 2], o += i[(3 & n[e]) << 4 | n[e + 1] >> 4], 
o += i[(15 & n[e + 1]) << 2 | n[e + 2] >> 6], o += i[63 & n[e + 2]];
return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), 
o;
}, e.decode = function(t) {
var e, n, r, o, i, s = .75 * t.length, a = t.length, c = 0;
"=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--);
var p = new ArrayBuffer(s), u = new Uint8Array(p);
for (e = 0; e < a; e += 4) n = h[t.charCodeAt(e)], r = h[t.charCodeAt(e + 1)], o = h[t.charCodeAt(e + 2)], 
i = h[t.charCodeAt(e + 3)], u[c++] = n << 2 | r >> 4, u[c++] = (15 & r) << 4 | o >> 2, 
u[c++] = (3 & o) << 6 | 63 & i;
return p;
};
}();
}, function(c, t) {
(function(t) {
function o(t) {
for (var e = 0; e < t.length; e++) {
var n = t[e];
if (n.buffer instanceof ArrayBuffer) {
var r = n.buffer;
if (n.byteLength !== r.byteLength) {
var o = new Uint8Array(n.byteLength);
o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer;
}
t[e] = r;
}
}
}
function e(t, e) {
e = e || {};
var n = new i();
o(t);
for (var r = 0; r < t.length; r++) n.append(t[r]);
return e.type ? n.getBlob(e.type) : n.getBlob();
}
function n(t, e) {
return o(t), new Blob(t, e || {});
}
var i = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder, r = function() {
try {
return 2 === new Blob([ "hi" ]).size;
} catch (t) {
return !1;
}
}(), s = r && function() {
try {
return 2 === new Blob([ new Uint8Array([ 1, 2 ]) ]).size;
} catch (t) {
return !1;
}
}(), a = i && i.prototype.append && i.prototype.getBlob;
c.exports = r ? s ? t.Blob : n : a ? e : void 0;
}).call(t, function() {
return this;
}());
}, function(t, e) {
e.encode = function(t) {
var e = "";
for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
return e;
}, e.decode = function(t) {
for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
var i = n[r].split("=");
e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
}
return e;
};
}, function(t, e) {
t.exports = function(t, e) {
var n = function() {};
n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
};
}, function(t, e) {
"use strict";
function n(t) {
for (var e = ""; e = i[t % s] + e, 0 < (t = Math.floor(t / s)); ) ;
return e;
}
function r() {
var t = n(+new Date());
return t !== o ? (c = 0, o = t) : t + "." + n(c++);
}
for (var o, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = 64, a = {}, c = 0, p = 0; p < s; p++) a[i[p]] = p;
r.encode = n, r.decode = function(t) {
var e = 0;
for (p = 0; p < t.length; p++) e = e * s + a[t.charAt(p)];
return e;
}, t.exports = r;
}, function(s, t, a) {
(function(n) {
function r() {}
function t(t) {
o.call(this, t), this.query = this.query || {}, i || (n.___eio || (n.___eio = []), 
i = n.___eio), this.index = i.length;
var e = this;
i.push(function(t) {
e.onData(t);
}), this.query.j = this.index, n.document && n.addEventListener && n.addEventListener("beforeunload", function() {
e.script && (e.script.onerror = r);
}, !1);
}
var o = a(20), e = a(31);
s.exports = t;
var i, p = /\n/g, u = /\\n/g;
e(t, o), t.prototype.supportsBinary = !1, t.prototype.doClose = function() {
this.script && (this.script.parentNode.removeChild(this.script), this.script = null), 
this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), 
o.prototype.doClose.call(this);
}, t.prototype.doPoll = function() {
var e = this, t = document.createElement("script");
this.script && (this.script.parentNode.removeChild(this.script), this.script = null), 
t.async = !0, t.src = this.uri(), t.onerror = function(t) {
e.onError("jsonp poll error", t);
};
var n = document.getElementsByTagName("script")[0];
n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), 
this.script = t;
"undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
var t = document.createElement("iframe");
document.body.appendChild(t), document.body.removeChild(t);
}, 100);
}, t.prototype.doWrite = function(t, e) {
function n() {
r(), e();
}
function r() {
if (o.iframe) try {
o.form.removeChild(o.iframe);
} catch (t) {
o.onError("jsonp polling iframe removal error", t);
}
try {
var t = '<iframe src="javascript:0" name="' + o.iframeId + '">';
i = document.createElement(t);
} catch (t) {
(i = document.createElement("iframe")).name = o.iframeId, i.src = "javascript:0";
}
i.id = o.iframeId, o.form.appendChild(i), o.iframe = i;
}
var o = this;
if (!this.form) {
var i, s = document.createElement("form"), a = document.createElement("textarea"), c = this.iframeId = "eio_iframe_" + this.index;
s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", 
s.style.left = "-1000px", s.target = c, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), 
a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a;
}
this.form.action = this.uri(), r(), t = t.replace(u, "\\\n"), this.area.value = t.replace(p, "\\n");
try {
this.form.submit();
} catch (t) {}
this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
"complete" === o.iframe.readyState && n();
} : this.iframe.onload = n;
};
}).call(t, function() {
return this;
}());
}, function(h, t, f) {
(function(i) {
function t(t) {
t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, 
this.usingBrowserWebSocket = p && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (u = e), 
n.call(this, t);
}
var e, n = f(21), s = f(22), r = f(30), o = f(31), a = f(32), c = f(3)("engine.io-client:websocket"), p = i.WebSocket || i.MozWebSocket;
if ("undefined" == typeof window) try {
e = f(35);
} catch (t) {}
var u = p;
u || "undefined" != typeof window || (u = e), o(h.exports = t, n), t.prototype.name = "websocket", 
t.prototype.supportsBinary = !0, t.prototype.doOpen = function() {
if (this.check()) {
var t = this.uri(), e = this.protocols, n = {
agent: this.agent,
perMessageDeflate: this.perMessageDeflate
};
n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, 
n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, 
this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
try {
this.ws = this.usingBrowserWebSocket ? e ? new u(t, e) : new u(t) : new u(t, e, n);
} catch (t) {
return this.emit("error", t);
}
void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, 
this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
}
}, t.prototype.addEventListeners = function() {
var e = this;
this.ws.onopen = function() {
e.onOpen();
}, this.ws.onclose = function() {
e.onClose();
}, this.ws.onmessage = function(t) {
e.onData(t.data);
}, this.ws.onerror = function(t) {
e.onError("websocket error", t);
};
}, t.prototype.write = function(t) {
var r = this;
this.writable = !1;
for (var o = t.length, e = 0, n = o; e < n; e++) !function(n) {
s.encodePacket(n, r.supportsBinary, function(t) {
if (!r.usingBrowserWebSocket) {
var e = {};
if (n.options && (e.compress = n.options.compress), r.perMessageDeflate) {
("string" == typeof t ? i.Buffer.byteLength(t) : t.length) < r.perMessageDeflate.threshold && (e.compress = !1);
}
}
try {
r.usingBrowserWebSocket ? r.ws.send(t) : r.ws.send(t, e);
} catch (t) {
c("websocket closed before onclose event");
}
--o || (r.emit("flush"), setTimeout(function() {
r.writable = !0, r.emit("drain");
}, 0));
});
}(t[e]);
}, t.prototype.onClose = function() {
n.prototype.onClose.call(this);
}, t.prototype.doClose = function() {
"undefined" != typeof this.ws && this.ws.close();
}, t.prototype.uri = function() {
var t = this.query || {}, e = this.secure ? "wss" : "ws", n = "";
this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), 
this.timestampRequests && (t[this.timestampParam] = a()), this.supportsBinary || (t.b64 = 1), 
(t = r.encode(t)).length && (t = "?" + t);
return e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t;
}, t.prototype.check = function() {
return !(!u || "__initialize" in u && this.name === t.prototype.name);
};
}).call(t, function() {
return this;
}());
}, function(t, e) {}, function(t, e) {
var r = [].indexOf;
t.exports = function(t, e) {
if (r) return t.indexOf(e);
for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
return -1;
};
}, function(t, e, n) {
"use strict";
function r(t, e, n) {
this.io = t, this.nsp = e, (this.json = this).ids = 0, this.acks = {}, this.receiveBuffer = [], 
this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), 
this.io.autoConnect && this.open();
}
var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, i = n(7), s = n(8), a = n(38), c = n(39), p = n(40), u = n(3)("socket.io-client:socket"), h = n(30);
t.exports = r;
var f = {
connect: 1,
connect_error: 1,
connect_timeout: 1,
connecting: 1,
disconnect: 1,
error: 1,
reconnect: 1,
reconnect_attempt: 1,
reconnect_failed: 1,
reconnect_error: 1,
reconnecting: 1,
ping: 1,
pong: 1
}, l = s.prototype.emit;
s(r.prototype), r.prototype.subEvents = function() {
if (!this.subs) {
var t = this.io;
this.subs = [ c(t, "open", p(this, "onopen")), c(t, "packet", p(this, "onpacket")), c(t, "close", p(this, "onclose")) ];
}
}, r.prototype.open = r.prototype.connect = function() {
return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), 
this.emit("connecting")), this;
}, r.prototype.send = function() {
var t = a(arguments);
return t.unshift("message"), this.emit.apply(this, t), this;
}, r.prototype.emit = function(t) {
if (f.hasOwnProperty(t)) return l.apply(this, arguments), this;
var e = a(arguments), n = {
type: i.EVENT,
data: e,
options: {}
};
return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids), 
this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), 
delete this.flags, this;
}, r.prototype.packet = function(t) {
t.nsp = this.nsp, this.io.packet(t);
}, r.prototype.onopen = function() {
if (u("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
var t = "object" === o(this.query) ? h.encode(this.query) : this.query;
u("sending connect packet with query %s", t), this.packet({
type: i.CONNECT,
query: t
});
} else this.packet({
type: i.CONNECT
});
}, r.prototype.onclose = function(t) {
u("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, 
this.emit("disconnect", t);
}, r.prototype.onpacket = function(t) {
if (t.nsp === this.nsp) switch (t.type) {
case i.CONNECT:
this.onconnect();
break;

case i.EVENT:
case i.BINARY_EVENT:
this.onevent(t);
break;

case i.ACK:
case i.BINARY_ACK:
this.onack(t);
break;

case i.DISCONNECT:
this.ondisconnect();
break;

case i.ERROR:
this.emit("error", t.data);
}
}, r.prototype.onevent = function(t) {
var e = t.data || [];
u("emitting event %j", e), null != t.id && (u("attaching ack callback to event"), 
e.push(this.ack(t.id))), this.connected ? l.apply(this, e) : this.receiveBuffer.push(e);
}, r.prototype.ack = function(e) {
var n = this, r = !1;
return function() {
if (!r) {
r = !0;
var t = a(arguments);
u("sending ack %j", t), n.packet({
type: i.ACK,
id: e,
data: t
});
}
};
}, r.prototype.onack = function(t) {
var e = this.acks[t.id];
"function" == typeof e ? (u("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), 
delete this.acks[t.id]) : u("bad ack %s", t.id);
}, r.prototype.onconnect = function() {
this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
}, r.prototype.emitBuffered = function() {
var t;
for (t = 0; t < this.receiveBuffer.length; t++) l.apply(this, this.receiveBuffer[t]);
for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
this.sendBuffer = [];
}, r.prototype.ondisconnect = function() {
u("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
}, r.prototype.destroy = function() {
if (this.subs) {
for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
this.subs = null;
}
this.io.destroy(this);
}, r.prototype.close = r.prototype.disconnect = function() {
return this.connected && (u("performing disconnect (%s)", this.nsp), this.packet({
type: i.DISCONNECT
})), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
}, r.prototype.compress = function(t) {
return this.flags = this.flags || {}, this.flags.compress = t, this;
};
}, function(t, e) {
t.exports = function(t, e) {
for (var n = [], r = (e = e || 0) || 0; r < t.length; r++) n[r - e] = t[r];
return n;
};
}, function(t, e) {
"use strict";
t.exports = function(t, e, n) {
return t.on(e, n), {
destroy: function() {
t.removeListener(e, n);
}
};
};
}, function(t, e) {
var r = [].slice;
t.exports = function(t, e) {
if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
var n = r.call(arguments, 2);
return function() {
return e.apply(t, n.concat(r.call(arguments)));
};
};
}, function(t, e) {
function n(t) {
t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, 
this.jitter = 0 < t.jitter && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
(t.exports = n).prototype.duration = function() {
var t = this.ms * Math.pow(this.factor, this.attempts++);
if (this.jitter) {
var e = Math.random(), n = Math.floor(e * this.jitter * t);
t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
}
return 0 | Math.min(t, this.max);
}, n.prototype.reset = function() {
this.attempts = 0;
}, n.prototype.setMin = function(t) {
this.ms = t;
}, n.prototype.setMax = function(t) {
this.max = t;
}, n.prototype.setJitter = function(t) {
this.jitter = t;
};
} ]);
});