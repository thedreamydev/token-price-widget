function g0(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var hf = { exports: {} }, wn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xd;
function y0() {
  if (xd) return wn;
  xd = 1;
  var f = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function z(r, U, H) {
    var w = null;
    if (H !== void 0 && (w = "" + H), U.key !== void 0 && (w = "" + U.key), "key" in U) {
      H = {};
      for (var k in U)
        k !== "key" && (H[k] = U[k]);
    } else H = U;
    return U = H.ref, {
      $$typeof: f,
      type: r,
      key: w,
      ref: U !== void 0 ? U : null,
      props: H
    };
  }
  return wn.Fragment = x, wn.jsx = z, wn.jsxs = z, wn;
}
var Td;
function v0() {
  return Td || (Td = 1, hf.exports = y0()), hf.exports;
}
var it = v0(), gf = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zd;
function b0() {
  if (zd) return $;
  zd = 1;
  var f = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), w = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), J = Symbol.iterator;
  function lt(s) {
    return s === null || typeof s != "object" ? null : (s = J && s[J] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var W = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Z = Object.assign, K = {};
  function F(s, A, N) {
    this.props = s, this.context = A, this.refs = K, this.updater = N || W;
  }
  F.prototype.isReactComponent = {}, F.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, A, "setState");
  }, F.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function ht() {
  }
  ht.prototype = F.prototype;
  function Tt(s, A, N) {
    this.props = s, this.context = A, this.refs = K, this.updater = N || W;
  }
  var St = Tt.prototype = new ht();
  St.constructor = Tt, Z(St, F.prototype), St.isPureReactComponent = !0;
  var Ct = Array.isArray, I = { H: null, A: null, T: null, S: null, V: null }, Ot = Object.prototype.hasOwnProperty;
  function qt(s, A, N, O, q, at) {
    return N = at.ref, {
      $$typeof: f,
      type: s,
      key: A,
      ref: N !== void 0 ? N : null,
      props: at
    };
  }
  function G(s, A) {
    return qt(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function wt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === f;
  }
  function Nl(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(N) {
      return A[N];
    });
  }
  var dl = /\/+/g;
  function Dt(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? Nl("" + s.key) : A.toString(36);
  }
  function _l() {
  }
  function Tl(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(_l, _l) : (s.status = "pending", s.then(
          function(A) {
            s.status === "pending" && (s.status = "fulfilled", s.value = A);
          },
          function(A) {
            s.status === "pending" && (s.status = "rejected", s.reason = A);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Et(s, A, N, O, q) {
    var at = typeof s;
    (at === "undefined" || at === "boolean") && (s = null);
    var L = !1;
    if (s === null) L = !0;
    else
      switch (at) {
        case "bigint":
        case "string":
        case "number":
          L = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case f:
            case x:
              L = !0;
              break;
            case R:
              return L = s._init, Et(
                L(s._payload),
                A,
                N,
                O,
                q
              );
          }
      }
    if (L)
      return q = q(s), L = O === "" ? "." + Dt(s, 0) : O, Ct(q) ? (N = "", L != null && (N = L.replace(dl, "$&/") + "/"), Et(q, A, N, "", function(el) {
        return el;
      })) : q != null && (wt(q) && (q = G(
        q,
        N + (q.key == null || s && s.key === q.key ? "" : ("" + q.key).replace(
          dl,
          "$&/"
        ) + "/") + L
      )), A.push(q)), 1;
    L = 0;
    var ft = O === "" ? "." : O + ":";
    if (Ct(s))
      for (var bt = 0; bt < s.length; bt++)
        O = s[bt], at = ft + Dt(O, bt), L += Et(
          O,
          A,
          N,
          at,
          q
        );
    else if (bt = lt(s), typeof bt == "function")
      for (s = bt.call(s), bt = 0; !(O = s.next()).done; )
        O = O.value, at = ft + Dt(O, bt++), L += Et(
          O,
          A,
          N,
          at,
          q
        );
    else if (at === "object") {
      if (typeof s.then == "function")
        return Et(
          Tl(s),
          A,
          N,
          O,
          q
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return L;
  }
  function b(s, A, N) {
    if (s == null) return s;
    var O = [], q = 0;
    return Et(s, O, "", "", function(at) {
      return A.call(N, at, q++);
    }), O;
  }
  function D(s) {
    if (s._status === -1) {
      var A = s._result;
      A = A(), A.then(
        function(N) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = N);
        },
        function(N) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = N);
        }
      ), s._status === -1 && (s._status = 0, s._result = A);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var M = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function st() {
  }
  return $.Children = {
    map: b,
    forEach: function(s, A, N) {
      b(
        s,
        function() {
          A.apply(this, arguments);
        },
        N
      );
    },
    count: function(s) {
      var A = 0;
      return b(s, function() {
        A++;
      }), A;
    },
    toArray: function(s) {
      return b(s, function(A) {
        return A;
      }) || [];
    },
    only: function(s) {
      if (!wt(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, $.Component = F, $.Fragment = z, $.Profiler = U, $.PureComponent = Tt, $.StrictMode = r, $.Suspense = _, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, $.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return I.H.useMemoCache(s);
    }
  }, $.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, $.cloneElement = function(s, A, N) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var O = Z({}, s.props), q = s.key, at = void 0;
    if (A != null)
      for (L in A.ref !== void 0 && (at = void 0), A.key !== void 0 && (q = "" + A.key), A)
        !Ot.call(A, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && A.ref === void 0 || (O[L] = A[L]);
    var L = arguments.length - 2;
    if (L === 1) O.children = N;
    else if (1 < L) {
      for (var ft = Array(L), bt = 0; bt < L; bt++)
        ft[bt] = arguments[bt + 2];
      O.children = ft;
    }
    return qt(s.type, q, void 0, void 0, at, O);
  }, $.createContext = function(s) {
    return s = {
      $$typeof: w,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: H,
      _context: s
    }, s;
  }, $.createElement = function(s, A, N) {
    var O, q = {}, at = null;
    if (A != null)
      for (O in A.key !== void 0 && (at = "" + A.key), A)
        Ot.call(A, O) && O !== "key" && O !== "__self" && O !== "__source" && (q[O] = A[O]);
    var L = arguments.length - 2;
    if (L === 1) q.children = N;
    else if (1 < L) {
      for (var ft = Array(L), bt = 0; bt < L; bt++)
        ft[bt] = arguments[bt + 2];
      q.children = ft;
    }
    if (s && s.defaultProps)
      for (O in L = s.defaultProps, L)
        q[O] === void 0 && (q[O] = L[O]);
    return qt(s, at, void 0, void 0, null, q);
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(s) {
    return { $$typeof: k, render: s };
  }, $.isValidElement = wt, $.lazy = function(s) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: s },
      _init: D
    };
  }, $.memo = function(s, A) {
    return {
      $$typeof: p,
      type: s,
      compare: A === void 0 ? null : A
    };
  }, $.startTransition = function(s) {
    var A = I.T, N = {};
    I.T = N;
    try {
      var O = s(), q = I.S;
      q !== null && q(N, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(st, M);
    } catch (at) {
      M(at);
    } finally {
      I.T = A;
    }
  }, $.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, $.use = function(s) {
    return I.H.use(s);
  }, $.useActionState = function(s, A, N) {
    return I.H.useActionState(s, A, N);
  }, $.useCallback = function(s, A) {
    return I.H.useCallback(s, A);
  }, $.useContext = function(s) {
    return I.H.useContext(s);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(s, A) {
    return I.H.useDeferredValue(s, A);
  }, $.useEffect = function(s, A, N) {
    var O = I.H;
    if (typeof N == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return O.useEffect(s, A);
  }, $.useId = function() {
    return I.H.useId();
  }, $.useImperativeHandle = function(s, A, N) {
    return I.H.useImperativeHandle(s, A, N);
  }, $.useInsertionEffect = function(s, A) {
    return I.H.useInsertionEffect(s, A);
  }, $.useLayoutEffect = function(s, A) {
    return I.H.useLayoutEffect(s, A);
  }, $.useMemo = function(s, A) {
    return I.H.useMemo(s, A);
  }, $.useOptimistic = function(s, A) {
    return I.H.useOptimistic(s, A);
  }, $.useReducer = function(s, A, N) {
    return I.H.useReducer(s, A, N);
  }, $.useRef = function(s) {
    return I.H.useRef(s);
  }, $.useState = function(s) {
    return I.H.useState(s);
  }, $.useSyncExternalStore = function(s, A, N) {
    return I.H.useSyncExternalStore(
      s,
      A,
      N
    );
  }, $.useTransition = function() {
    return I.H.useTransition();
  }, $.version = "19.1.1", $;
}
var Ed;
function _f() {
  return Ed || (Ed = 1, gf.exports = b0()), gf.exports;
}
var Ua = _f();
const qd = /* @__PURE__ */ g0(Ua);
var yf = { exports: {} }, Nn = {}, vf = { exports: {} }, bf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad;
function p0() {
  return Ad || (Ad = 1, function(f) {
    function x(b, D) {
      var M = b.length;
      b.push(D);
      t: for (; 0 < M; ) {
        var st = M - 1 >>> 1, s = b[st];
        if (0 < U(s, D))
          b[st] = D, b[M] = s, M = st;
        else break t;
      }
    }
    function z(b) {
      return b.length === 0 ? null : b[0];
    }
    function r(b) {
      if (b.length === 0) return null;
      var D = b[0], M = b.pop();
      if (M !== D) {
        b[0] = M;
        t: for (var st = 0, s = b.length, A = s >>> 1; st < A; ) {
          var N = 2 * (st + 1) - 1, O = b[N], q = N + 1, at = b[q];
          if (0 > U(O, M))
            q < s && 0 > U(at, O) ? (b[st] = at, b[q] = M, st = q) : (b[st] = O, b[N] = M, st = N);
          else if (q < s && 0 > U(at, M))
            b[st] = at, b[q] = M, st = q;
          else break t;
        }
      }
      return D;
    }
    function U(b, D) {
      var M = b.sortIndex - D.sortIndex;
      return M !== 0 ? M : b.id - D.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var H = performance;
      f.unstable_now = function() {
        return H.now();
      };
    } else {
      var w = Date, k = w.now();
      f.unstable_now = function() {
        return w.now() - k;
      };
    }
    var _ = [], p = [], R = 1, J = null, lt = 3, W = !1, Z = !1, K = !1, F = !1, ht = typeof setTimeout == "function" ? setTimeout : null, Tt = typeof clearTimeout == "function" ? clearTimeout : null, St = typeof setImmediate < "u" ? setImmediate : null;
    function Ct(b) {
      for (var D = z(p); D !== null; ) {
        if (D.callback === null) r(p);
        else if (D.startTime <= b)
          r(p), D.sortIndex = D.expirationTime, x(_, D);
        else break;
        D = z(p);
      }
    }
    function I(b) {
      if (K = !1, Ct(b), !Z)
        if (z(_) !== null)
          Z = !0, Ot || (Ot = !0, Dt());
        else {
          var D = z(p);
          D !== null && Et(I, D.startTime - b);
        }
    }
    var Ot = !1, qt = -1, G = 5, wt = -1;
    function Nl() {
      return F ? !0 : !(f.unstable_now() - wt < G);
    }
    function dl() {
      if (F = !1, Ot) {
        var b = f.unstable_now();
        wt = b;
        var D = !0;
        try {
          t: {
            Z = !1, K && (K = !1, Tt(qt), qt = -1), W = !0;
            var M = lt;
            try {
              l: {
                for (Ct(b), J = z(_); J !== null && !(J.expirationTime > b && Nl()); ) {
                  var st = J.callback;
                  if (typeof st == "function") {
                    J.callback = null, lt = J.priorityLevel;
                    var s = st(
                      J.expirationTime <= b
                    );
                    if (b = f.unstable_now(), typeof s == "function") {
                      J.callback = s, Ct(b), D = !0;
                      break l;
                    }
                    J === z(_) && r(_), Ct(b);
                  } else r(_);
                  J = z(_);
                }
                if (J !== null) D = !0;
                else {
                  var A = z(p);
                  A !== null && Et(
                    I,
                    A.startTime - b
                  ), D = !1;
                }
              }
              break t;
            } finally {
              J = null, lt = M, W = !1;
            }
            D = void 0;
          }
        } finally {
          D ? Dt() : Ot = !1;
        }
      }
    }
    var Dt;
    if (typeof St == "function")
      Dt = function() {
        St(dl);
      };
    else if (typeof MessageChannel < "u") {
      var _l = new MessageChannel(), Tl = _l.port2;
      _l.port1.onmessage = dl, Dt = function() {
        Tl.postMessage(null);
      };
    } else
      Dt = function() {
        ht(dl, 0);
      };
    function Et(b, D) {
      qt = ht(function() {
        b(f.unstable_now());
      }, D);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, f.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : G = 0 < b ? Math.floor(1e3 / b) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return lt;
    }, f.unstable_next = function(b) {
      switch (lt) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = lt;
      }
      var M = lt;
      lt = D;
      try {
        return b();
      } finally {
        lt = M;
      }
    }, f.unstable_requestPaint = function() {
      F = !0;
    }, f.unstable_runWithPriority = function(b, D) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var M = lt;
      lt = b;
      try {
        return D();
      } finally {
        lt = M;
      }
    }, f.unstable_scheduleCallback = function(b, D, M) {
      var st = f.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? st + M : st) : M = st, b) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return s = M + s, b = {
        id: R++,
        callback: D,
        priorityLevel: b,
        startTime: M,
        expirationTime: s,
        sortIndex: -1
      }, M > st ? (b.sortIndex = M, x(p, b), z(_) === null && b === z(p) && (K ? (Tt(qt), qt = -1) : K = !0, Et(I, M - st))) : (b.sortIndex = s, x(_, b), Z || W || (Z = !0, Ot || (Ot = !0, Dt()))), b;
    }, f.unstable_shouldYield = Nl, f.unstable_wrapCallback = function(b) {
      var D = lt;
      return function() {
        var M = lt;
        lt = D;
        try {
          return b.apply(this, arguments);
        } finally {
          lt = M;
        }
      };
    };
  }(bf)), bf;
}
var _d;
function S0() {
  return _d || (_d = 1, vf.exports = p0()), vf.exports;
}
var pf = { exports: {} }, Wt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Md;
function x0() {
  if (Md) return Wt;
  Md = 1;
  var f = _f();
  function x(_) {
    var p = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        p += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return "Minified React error #" + _ + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function z() {
  }
  var r = {
    d: {
      f: z,
      r: function() {
        throw Error(x(522));
      },
      D: z,
      C: z,
      L: z,
      m: z,
      X: z,
      S: z,
      M: z
    },
    p: 0,
    findDOMNode: null
  }, U = Symbol.for("react.portal");
  function H(_, p, R) {
    var J = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: U,
      key: J == null ? null : "" + J,
      children: _,
      containerInfo: p,
      implementation: R
    };
  }
  var w = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function k(_, p) {
    if (_ === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Wt.createPortal = function(_, p) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(x(299));
    return H(_, p, null, R);
  }, Wt.flushSync = function(_) {
    var p = w.T, R = r.p;
    try {
      if (w.T = null, r.p = 2, _) return _();
    } finally {
      w.T = p, r.p = R, r.d.f();
    }
  }, Wt.preconnect = function(_, p) {
    typeof _ == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, r.d.C(_, p));
  }, Wt.prefetchDNS = function(_) {
    typeof _ == "string" && r.d.D(_);
  }, Wt.preinit = function(_, p) {
    if (typeof _ == "string" && p && typeof p.as == "string") {
      var R = p.as, J = k(R, p.crossOrigin), lt = typeof p.integrity == "string" ? p.integrity : void 0, W = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      R === "style" ? r.d.S(
        _,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: J,
          integrity: lt,
          fetchPriority: W
        }
      ) : R === "script" && r.d.X(_, {
        crossOrigin: J,
        integrity: lt,
        fetchPriority: W,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Wt.preinitModule = function(_, p) {
    if (typeof _ == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var R = k(
            p.as,
            p.crossOrigin
          );
          r.d.M(_, {
            crossOrigin: R,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && r.d.M(_);
  }, Wt.preload = function(_, p) {
    if (typeof _ == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var R = p.as, J = k(R, p.crossOrigin);
      r.d.L(_, R, {
        crossOrigin: J,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, Wt.preloadModule = function(_, p) {
    if (typeof _ == "string")
      if (p) {
        var R = k(p.as, p.crossOrigin);
        r.d.m(_, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: R,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else r.d.m(_);
  }, Wt.requestFormReset = function(_) {
    r.d.r(_);
  }, Wt.unstable_batchedUpdates = function(_, p) {
    return _(p);
  }, Wt.useFormState = function(_, p, R) {
    return w.H.useFormState(_, p, R);
  }, Wt.useFormStatus = function() {
    return w.H.useHostTransitionStatus();
  }, Wt.version = "19.1.1", Wt;
}
var Od;
function T0() {
  if (Od) return pf.exports;
  Od = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (x) {
        console.error(x);
      }
  }
  return f(), pf.exports = x0(), pf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd;
function z0() {
  if (Dd) return Nn;
  Dd = 1;
  var f = S0(), x = _f(), z = T0();
  function r(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function U(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function H(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function w(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function k(t) {
    if (H(t) !== t)
      throw Error(r(188));
  }
  function _(t) {
    var l = t.alternate;
    if (!l) {
      if (l = H(t), l === null) throw Error(r(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return k(n), t;
          if (u === a) return k(n), l;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (e.return !== a.return) e = n, a = u;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === e) {
            i = !0, e = n, a = u;
            break;
          }
          if (c === a) {
            i = !0, a = n, e = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === e) {
              i = !0, e = u, a = n;
              break;
            }
            if (c === a) {
              i = !0, a = u, e = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (e.alternate !== a) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
    return e.stateNode.current === e ? t : l;
  }
  function p(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = p(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var R = Object.assign, J = Symbol.for("react.element"), lt = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), ht = Symbol.for("react.provider"), Tt = Symbol.for("react.consumer"), St = Symbol.for("react.context"), Ct = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), Ot = Symbol.for("react.suspense_list"), qt = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), wt = Symbol.for("react.activity"), Nl = Symbol.for("react.memo_cache_sentinel"), dl = Symbol.iterator;
  function Dt(t) {
    return t === null || typeof t != "object" ? null : (t = dl && t[dl] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var _l = Symbol.for("react.client.reference");
  function Tl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === _l ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Z:
        return "Fragment";
      case F:
        return "Profiler";
      case K:
        return "StrictMode";
      case I:
        return "Suspense";
      case Ot:
        return "SuspenseList";
      case wt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case W:
          return "Portal";
        case St:
          return (t.displayName || "Context") + ".Provider";
        case Tt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Ct:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case qt:
          return l = t.displayName || null, l !== null ? l : Tl(t.type) || "Memo";
        case G:
          l = t._payload, t = t._init;
          try {
            return Tl(t(l));
          } catch {
          }
      }
    return null;
  }
  var Et = Array.isArray, b = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, st = [], s = -1;
  function A(t) {
    return { current: t };
  }
  function N(t) {
    0 > s || (t.current = st[s], st[s] = null, s--);
  }
  function O(t, l) {
    s++, st[s] = t.current, t.current = l;
  }
  var q = A(null), at = A(null), L = A(null), ft = A(null);
  function bt(t, l) {
    switch (O(L, l), O(at, t), O(q, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Ws(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Ws(l), t = $s(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    N(q), O(q, t);
  }
  function el() {
    N(q), N(at), N(L);
  }
  function Fl(t) {
    t.memoizedState !== null && O(ft, t);
    var l = q.current, e = $s(l, t.type);
    l !== e && (O(at, t), O(q, e));
  }
  function Il(t) {
    at.current === t && (N(q), N(at)), ft.current === t && (N(ft), Mn._currentValue = M);
  }
  var Pl = Object.prototype.hasOwnProperty, ti = f.unstable_scheduleCallback, li = f.unstable_cancelCallback, Kd = f.unstable_shouldYield, Jd = f.unstable_requestPaint, Ml = f.unstable_now, Wd = f.unstable_getCurrentPriorityLevel, Of = f.unstable_ImmediatePriority, Df = f.unstable_UserBlockingPriority, qn = f.unstable_NormalPriority, $d = f.unstable_LowPriority, Rf = f.unstable_IdlePriority, Fd = f.log, Id = f.unstable_setDisableYieldValue, Ha = null, al = null;
  function te(t) {
    if (typeof Fd == "function" && Id(t), al && typeof al.setStrictMode == "function")
      try {
        al.setStrictMode(Ha, t);
      } catch {
      }
  }
  var nl = Math.clz32 ? Math.clz32 : lm, Pd = Math.log, tm = Math.LN2;
  function lm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Pd(t) / tm | 0) | 0;
  }
  var Bn = 256, Yn = 4194304;
  function Ae(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function jn(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = Ae(a) : (i &= c, i !== 0 ? n = Ae(i) : e || (e = c & ~t, e !== 0 && (n = Ae(e))))) : (c = a & ~u, c !== 0 ? n = Ae(c) : i !== 0 ? n = Ae(i) : e || (e = a & ~t, e !== 0 && (n = Ae(e)))), n === 0 ? 0 : l !== 0 && l !== n && (l & u) === 0 && (u = n & -n, e = l & -l, u >= e || u === 32 && (e & 4194048) !== 0) ? l : n;
  }
  function qa(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function em(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Uf() {
    var t = Bn;
    return Bn <<= 1, (Bn & 4194048) === 0 && (Bn = 256), t;
  }
  function wf() {
    var t = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), t;
  }
  function ei(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ba(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function am(t, l, e, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, o = t.expirationTimes, g = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var S = 31 - nl(e), E = 1 << S;
      c[S] = 0, o[S] = -1;
      var y = g[S];
      if (y !== null)
        for (g[S] = null, S = 0; S < y.length; S++) {
          var v = y[S];
          v !== null && (v.lane &= -536870913);
        }
      e &= ~E;
    }
    a !== 0 && Nf(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~l));
  }
  function Nf(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - nl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 4194090;
  }
  function Hf(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - nl(e), n = 1 << a;
      n & l | t[a] & l && (t[a] |= l), e &= ~n;
    }
  }
  function ai(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ni(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function qf() {
    var t = D.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : gd(t.type));
  }
  function nm(t, l) {
    var e = D.p;
    try {
      return D.p = t, l();
    } finally {
      D.p = e;
    }
  }
  var le = Math.random().toString(36).slice(2), Kt = "__reactFiber$" + le, Ft = "__reactProps$" + le, Le = "__reactContainer$" + le, ui = "__reactEvents$" + le, um = "__reactListeners$" + le, im = "__reactHandles$" + le, Bf = "__reactResources$" + le, Ya = "__reactMarker$" + le;
  function ii(t) {
    delete t[Kt], delete t[Ft], delete t[ui], delete t[um], delete t[im];
  }
  function ke(t) {
    var l = t[Kt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Le] || e[Kt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = td(t); t !== null; ) {
            if (e = t[Kt]) return e;
            t = td(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Ke(t) {
    if (t = t[Kt] || t[Le]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function ja(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Je(t) {
    var l = t[Bf];
    return l || (l = t[Bf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Gt(t) {
    t[Ya] = !0;
  }
  var Yf = /* @__PURE__ */ new Set(), jf = {};
  function _e(t, l) {
    We(t, l), We(t + "Capture", l);
  }
  function We(t, l) {
    for (jf[t] = l, t = 0; t < l.length; t++)
      Yf.add(l[t]);
  }
  var cm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cf = {}, Gf = {};
  function fm(t) {
    return Pl.call(Gf, t) ? !0 : Pl.call(Cf, t) ? !1 : cm.test(t) ? Gf[t] = !0 : (Cf[t] = !0, !1);
  }
  function Cn(t, l, e) {
    if (fm(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Gn(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Hl(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  var ci, Xf;
  function $e(t) {
    if (ci === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        ci = l && l[1] || "", Xf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ci + t + Xf;
  }
  var fi = !1;
  function oi(t, l) {
    if (!t || fi) return "";
    fi = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (v) {
                  var y = v;
                }
                Reflect.construct(t, [], E);
              } else {
                try {
                  E.call();
                } catch (v) {
                  y = v;
                }
                t.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (v) {
                y = v;
              }
              (E = t()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (v) {
            if (v && y && typeof v.stack == "string")
              return [v.stack, y.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var o = i.split(`
`), g = c.split(`
`);
        for (n = a = 0; a < o.length && !o[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < g.length && !g[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === o.length || n === g.length)
          for (a = o.length - 1, n = g.length - 1; 1 <= a && 0 <= n && o[a] !== g[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (o[a] !== g[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || o[a] !== g[n]) {
                  var S = `
` + o[a].replace(" at new ", " at ");
                  return t.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", t.displayName)), S;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      fi = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? $e(e) : "";
  }
  function om(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return $e(t.type);
      case 16:
        return $e("Lazy");
      case 13:
        return $e("Suspense");
      case 19:
        return $e("SuspenseList");
      case 0:
      case 15:
        return oi(t.type, !1);
      case 11:
        return oi(t.type.render, !1);
      case 1:
        return oi(t.type, !0);
      case 31:
        return $e("Activity");
      default:
        return "";
    }
  }
  function Qf(t) {
    try {
      var l = "";
      do
        l += om(t), t = t.return;
      while (t);
      return l;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  function ml(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Zf(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function rm(t) {
    var l = Zf(t) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    ), a = "" + t[l];
    if (!t.hasOwnProperty(l) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var n = e.get, u = e.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          a = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, l, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function Xn(t) {
    t._valueTracker || (t._valueTracker = rm(t));
  }
  function Vf(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = Zf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  function Qn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var sm = /[\n"\\]/g;
  function hl(t) {
    return t.replace(
      sm,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ri(t, l, e, a, n, u, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + ml(l)) : t.value !== "" + ml(l) && (t.value = "" + ml(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? si(t, i, ml(l)) : e != null ? si(t, i, ml(e)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + ml(c) : t.removeAttribute("name");
  }
  function Lf(t, l, e, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), l != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || l != null))
        return;
      e = e != null ? "" + ml(e) : "", l = l != null ? "" + ml(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i);
  }
  function si(t, l, e) {
    l === "number" && Qn(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function Fe(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var n = 0; n < e.length; n++)
        l["$" + e[n]] = !0;
      for (e = 0; e < t.length; e++)
        n = l.hasOwnProperty("$" + t[e].value), t[e].selected !== n && (t[e].selected = n), n && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + ml(e), l = null, n = 0; n < t.length; n++) {
        if (t[n].value === e) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        l !== null || t[n].disabled || (l = t[n]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function kf(t, l, e) {
    if (l != null && (l = "" + ml(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + ml(e) : "";
  }
  function Kf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(r(92));
        if (Et(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = ml(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a);
  }
  function Ie(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var dm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Jf(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || dm.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function Wf(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in l)
        a = l[n], l.hasOwnProperty(n) && e[n] !== a && Jf(t, n, a);
    } else
      for (var u in l)
        l.hasOwnProperty(u) && Jf(t, u, l[u]);
  }
  function di(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), hm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zn(t) {
    return hm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var mi = null;
  function hi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Pe = null, ta = null;
  function $f(t) {
    var l = Ke(t);
    if (l && (t = l.stateNode)) {
      var e = t[Ft] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (ri(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + hl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var n = a[Ft] || null;
                if (!n) throw Error(r(90));
                ri(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              a = e[l], a.form === t.form && Vf(a);
          }
          break t;
        case "textarea":
          kf(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Fe(t, !!e.multiple, l, !1);
      }
    }
  }
  var gi = !1;
  function Ff(t, l, e) {
    if (gi) return t(l, e);
    gi = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (gi = !1, (Pe !== null || ta !== null) && (Ou(), Pe && (l = Pe, t = ta, ta = Pe = null, $f(l), t)))
        for (l = 0; l < t.length; l++) $f(t[l]);
    }
  }
  function Ca(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[Ft] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        r(231, l, typeof e)
      );
    return e;
  }
  var ql = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yi = !1;
  if (ql)
    try {
      var Ga = {};
      Object.defineProperty(Ga, "passive", {
        get: function() {
          yi = !0;
        }
      }), window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga);
    } catch {
      yi = !1;
    }
  var ee = null, vi = null, Vn = null;
  function If() {
    if (Vn) return Vn;
    var t, l = vi, e = l.length, a, n = "value" in ee ? ee.value : ee.textContent, u = n.length;
    for (t = 0; t < e && l[t] === n[t]; t++) ;
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === n[u - a]; a++) ;
    return Vn = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ln(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function kn() {
    return !0;
  }
  function Pf() {
    return !1;
  }
  function It(t) {
    function l(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? kn : Pf, this.isPropagationStopped = Pf, this;
    }
    return R(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = kn);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = kn);
      },
      persist: function() {
      },
      isPersistent: kn
    }), l;
  }
  var Me = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Kn = It(Me), Xa = R({}, Me, { view: 0, detail: 0 }), gm = It(Xa), bi, pi, Qa, Jn = R({}, Xa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xi,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Qa && (Qa && t.type === "mousemove" ? (bi = t.screenX - Qa.screenX, pi = t.screenY - Qa.screenY) : pi = bi = 0, Qa = t), bi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : pi;
    }
  }), to = It(Jn), ym = R({}, Jn, { dataTransfer: 0 }), vm = It(ym), bm = R({}, Xa, { relatedTarget: 0 }), Si = It(bm), pm = R({}, Me, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sm = It(pm), xm = R({}, Me, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Tm = It(xm), zm = R({}, Me, { data: 0 }), lo = It(zm), Em = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Am = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, _m = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Mm(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = _m[t]) ? !!l[t] : !1;
  }
  function xi() {
    return Mm;
  }
  var Om = R({}, Xa, {
    key: function(t) {
      if (t.key) {
        var l = Em[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Ln(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Am[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xi,
    charCode: function(t) {
      return t.type === "keypress" ? Ln(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ln(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Dm = It(Om), Rm = R({}, Jn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), eo = It(Rm), Um = R({}, Xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xi
  }), wm = It(Um), Nm = R({}, Me, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Hm = It(Nm), qm = R({}, Jn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bm = It(qm), Ym = R({}, Me, {
    newState: 0,
    oldState: 0
  }), jm = It(Ym), Cm = [9, 13, 27, 32], Ti = ql && "CompositionEvent" in window, Za = null;
  ql && "documentMode" in document && (Za = document.documentMode);
  var Gm = ql && "TextEvent" in window && !Za, ao = ql && (!Ti || Za && 8 < Za && 11 >= Za), no = " ", uo = !1;
  function io(t, l) {
    switch (t) {
      case "keyup":
        return Cm.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function co(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var la = !1;
  function Xm(t, l) {
    switch (t) {
      case "compositionend":
        return co(l);
      case "keypress":
        return l.which !== 32 ? null : (uo = !0, no);
      case "textInput":
        return t = l.data, t === no && uo ? null : t;
      default:
        return null;
    }
  }
  function Qm(t, l) {
    if (la)
      return t === "compositionend" || !Ti && io(t, l) ? (t = If(), Vn = vi = ee = null, la = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return ao && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Zm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function fo(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!Zm[t.type] : l === "textarea";
  }
  function oo(t, l, e, a) {
    Pe ? ta ? ta.push(a) : ta = [a] : Pe = a, l = Hu(l, "onChange"), 0 < l.length && (e = new Kn(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var Va = null, La = null;
  function Vm(t) {
    Vs(t, 0);
  }
  function Wn(t) {
    var l = ja(t);
    if (Vf(l)) return t;
  }
  function ro(t, l) {
    if (t === "change") return l;
  }
  var so = !1;
  if (ql) {
    var zi;
    if (ql) {
      var Ei = "oninput" in document;
      if (!Ei) {
        var mo = document.createElement("div");
        mo.setAttribute("oninput", "return;"), Ei = typeof mo.oninput == "function";
      }
      zi = Ei;
    } else zi = !1;
    so = zi && (!document.documentMode || 9 < document.documentMode);
  }
  function ho() {
    Va && (Va.detachEvent("onpropertychange", go), La = Va = null);
  }
  function go(t) {
    if (t.propertyName === "value" && Wn(La)) {
      var l = [];
      oo(
        l,
        La,
        t,
        hi(t)
      ), Ff(Vm, l);
    }
  }
  function Lm(t, l, e) {
    t === "focusin" ? (ho(), Va = l, La = e, Va.attachEvent("onpropertychange", go)) : t === "focusout" && ho();
  }
  function km(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Wn(La);
  }
  function Km(t, l) {
    if (t === "click") return Wn(l);
  }
  function Jm(t, l) {
    if (t === "input" || t === "change")
      return Wn(l);
  }
  function Wm(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var ul = typeof Object.is == "function" ? Object.is : Wm;
  function ka(t, l) {
    if (ul(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Pl.call(l, n) || !ul(t[n], l[n]))
        return !1;
    }
    return !0;
  }
  function yo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function vo(t, l) {
    var e = yo(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l)
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = yo(e);
    }
  }
  function bo(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? bo(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function po(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Qn(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Qn(t.document);
    }
    return l;
  }
  function Ai(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var $m = ql && "documentMode" in document && 11 >= document.documentMode, ea = null, _i = null, Ka = null, Mi = !1;
  function So(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Mi || ea == null || ea !== Qn(a) || (a = ea, "selectionStart" in a && Ai(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ka && ka(Ka, a) || (Ka = a, a = Hu(_i, "onSelect"), 0 < a.length && (l = new Kn(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = ea)));
  }
  function Oe(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var aa = {
    animationend: Oe("Animation", "AnimationEnd"),
    animationiteration: Oe("Animation", "AnimationIteration"),
    animationstart: Oe("Animation", "AnimationStart"),
    transitionrun: Oe("Transition", "TransitionRun"),
    transitionstart: Oe("Transition", "TransitionStart"),
    transitioncancel: Oe("Transition", "TransitionCancel"),
    transitionend: Oe("Transition", "TransitionEnd")
  }, Oi = {}, xo = {};
  ql && (xo = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
  function De(t) {
    if (Oi[t]) return Oi[t];
    if (!aa[t]) return t;
    var l = aa[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in xo)
        return Oi[t] = l[e];
    return t;
  }
  var To = De("animationend"), zo = De("animationiteration"), Eo = De("animationstart"), Fm = De("transitionrun"), Im = De("transitionstart"), Pm = De("transitioncancel"), Ao = De("transitionend"), _o = /* @__PURE__ */ new Map(), Di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Di.push("scrollEnd");
  function zl(t, l) {
    _o.set(t, l), _e(l, [t]);
  }
  var Mo = /* @__PURE__ */ new WeakMap();
  function gl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Mo.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: Qf(l)
      }, Mo.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Qf(l)
    };
  }
  var yl = [], na = 0, Ri = 0;
  function $n() {
    for (var t = na, l = Ri = na = 0; l < t; ) {
      var e = yl[l];
      yl[l++] = null;
      var a = yl[l];
      yl[l++] = null;
      var n = yl[l];
      yl[l++] = null;
      var u = yl[l];
      if (yl[l++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && Oo(e, n, u);
    }
  }
  function Fn(t, l, e, a) {
    yl[na++] = t, yl[na++] = l, yl[na++] = e, yl[na++] = a, Ri |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Ui(t, l, e, a) {
    return Fn(t, l, e, a), In(t);
  }
  function ua(t, l) {
    return Fn(t, null, null, l), In(t);
  }
  function Oo(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && l !== null && (n = 31 - nl(e), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [l] : a.push(l), l.lane = e | 536870912), u) : null;
  }
  function In(t) {
    if (50 < pn)
      throw pn = 0, Yc = null, Error(r(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ia = {};
  function th(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function il(t, l, e, a) {
    return new th(t, l, e, a);
  }
  function wi(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Bl(t, l) {
    var e = t.alternate;
    return e === null ? (e = il(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Do(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Pn(t, l, e, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") wi(t) && (i = 1);
    else if (typeof t == "string")
      i = e0(
        t,
        e,
        q.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case wt:
          return t = il(31, e, l, n), t.elementType = wt, t.lanes = u, t;
        case Z:
          return Re(e.children, n, u, l);
        case K:
          i = 8, n |= 24;
          break;
        case F:
          return t = il(12, e, l, n | 2), t.elementType = F, t.lanes = u, t;
        case I:
          return t = il(13, e, l, n), t.elementType = I, t.lanes = u, t;
        case Ot:
          return t = il(19, e, l, n), t.elementType = Ot, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ht:
              case St:
                i = 10;
                break t;
              case Tt:
                i = 9;
                break t;
              case Ct:
                i = 11;
                break t;
              case qt:
                i = 14;
                break t;
              case G:
                i = 16, a = null;
                break t;
            }
          i = 29, e = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = il(i, e, l, n), l.elementType = t, l.type = a, l.lanes = u, l;
  }
  function Re(t, l, e, a) {
    return t = il(7, t, a, l), t.lanes = e, t;
  }
  function Ni(t, l, e) {
    return t = il(6, t, null, l), t.lanes = e, t;
  }
  function Hi(t, l, e) {
    return l = il(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var ca = [], fa = 0, tu = null, lu = 0, vl = [], bl = 0, Ue = null, Yl = 1, jl = "";
  function we(t, l) {
    ca[fa++] = lu, ca[fa++] = tu, tu = t, lu = l;
  }
  function Ro(t, l, e) {
    vl[bl++] = Yl, vl[bl++] = jl, vl[bl++] = Ue, Ue = t;
    var a = Yl;
    t = jl;
    var n = 32 - nl(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - nl(l) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Yl = 1 << 32 - nl(l) + n | e << n | a, jl = u + t;
    } else
      Yl = 1 << u | e << n | a, jl = t;
  }
  function qi(t) {
    t.return !== null && (we(t, 1), Ro(t, 1, 0));
  }
  function Bi(t) {
    for (; t === tu; )
      tu = ca[--fa], ca[fa] = null, lu = ca[--fa], ca[fa] = null;
    for (; t === Ue; )
      Ue = vl[--bl], vl[bl] = null, jl = vl[--bl], vl[bl] = null, Yl = vl[--bl], vl[bl] = null;
  }
  var $t = null, _t = null, rt = !1, Ne = null, Ol = !1, Yi = Error(r(519));
  function He(t) {
    var l = Error(r(418, ""));
    throw $a(gl(l, t)), Yi;
  }
  function Uo(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[Kt] = t, l[Ft] = a, e) {
      case "dialog":
        ut("cancel", l), ut("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < xn.length; e++)
          ut(xn[e], l);
        break;
      case "source":
        ut("error", l);
        break;
      case "img":
      case "image":
      case "link":
        ut("error", l), ut("load", l);
        break;
      case "details":
        ut("toggle", l);
        break;
      case "input":
        ut("invalid", l), Lf(
          l,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Xn(l);
        break;
      case "select":
        ut("invalid", l);
        break;
      case "textarea":
        ut("invalid", l), Kf(l, a.value, a.defaultValue, a.children), Xn(l);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || Js(l.textContent, e) ? (a.popover != null && (ut("beforetoggle", l), ut("toggle", l)), a.onScroll != null && ut("scroll", l), a.onScrollEnd != null && ut("scrollend", l), a.onClick != null && (l.onclick = qu), l = !0) : l = !1, l || He(t);
  }
  function wo(t) {
    for ($t = t.return; $t; )
      switch ($t.tag) {
        case 5:
        case 13:
          Ol = !1;
          return;
        case 27:
        case 3:
          Ol = !0;
          return;
        default:
          $t = $t.return;
      }
  }
  function Ja(t) {
    if (t !== $t) return !1;
    if (!rt) return wo(t), rt = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || Pc(t.type, t.memoizedProps)), e = !e), e && _t && He(t), wo(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (e = t.data, e === "/$") {
              if (l === 0) {
                _t = Al(t.nextSibling);
                break t;
              }
              l--;
            } else
              e !== "$" && e !== "$!" && e !== "$?" || l++;
          t = t.nextSibling;
        }
        _t = null;
      }
    } else
      l === 27 ? (l = _t, be(t.type) ? (t = af, af = null, _t = t) : _t = l) : _t = $t ? Al(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Wa() {
    _t = $t = null, rt = !1;
  }
  function No() {
    var t = Ne;
    return t !== null && (ll === null ? ll = t : ll.push.apply(
      ll,
      t
    ), Ne = null), t;
  }
  function $a(t) {
    Ne === null ? Ne = [t] : Ne.push(t);
  }
  var ji = A(null), qe = null, Cl = null;
  function ae(t, l, e) {
    O(ji, l._currentValue), l._currentValue = e;
  }
  function Gl(t) {
    t._currentValue = ji.current, N(ji);
  }
  function Ci(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Gi(t, l, e, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var o = 0; o < l.length; o++)
            if (c.context === l[o]) {
              u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), Ci(
                u.return,
                e,
                t
              ), a || (i = null);
              break t;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(r(341));
        i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Ci(i, e, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function Fa(t, l, e, a) {
    t = null;
    for (var n = l, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          ul(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (n === ft.current) {
        if (i = n.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Mn) : t = [Mn]);
      }
      n = n.return;
    }
    t !== null && Gi(
      l,
      t,
      e,
      a
    ), l.flags |= 262144;
  }
  function eu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ul(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Be(t) {
    qe = t, Cl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Jt(t) {
    return Ho(qe, t);
  }
  function au(t, l) {
    return qe === null && Be(t), Ho(t, l);
  }
  function Ho(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Cl === null) {
      if (t === null) throw Error(r(308));
      Cl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Cl = Cl.next = l;
    return e;
  }
  var lh = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, eh = f.unstable_scheduleCallback, ah = f.unstable_NormalPriority, Bt = {
    $$typeof: St,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Xi() {
    return {
      controller: new lh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ia(t) {
    t.refCount--, t.refCount === 0 && eh(ah, function() {
      t.controller.abort();
    });
  }
  var Pa = null, Qi = 0, oa = 0, ra = null;
  function nh(t, l) {
    if (Pa === null) {
      var e = Pa = [];
      Qi = 0, oa = Vc(), ra = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Qi++, l.then(qo, qo), l;
  }
  function qo() {
    if (--Qi === 0 && Pa !== null) {
      ra !== null && (ra.status = "fulfilled");
      var t = Pa;
      Pa = null, oa = 0, ra = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function uh(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        e.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var n = 0; n < e.length; n++) (0, e[n])(l);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
          (0, e[n])(void 0);
      }
    ), a;
  }
  var Bo = b.S;
  b.S = function(t, l) {
    typeof l == "object" && l !== null && typeof l.then == "function" && nh(t, l), Bo !== null && Bo(t, l);
  };
  var Ye = A(null);
  function Zi() {
    var t = Ye.current;
    return t !== null ? t : xt.pooledCache;
  }
  function nu(t, l) {
    l === null ? O(Ye, Ye.current) : O(Ye, l.pool);
  }
  function Yo() {
    var t = Zi();
    return t === null ? null : { parent: Bt._currentValue, pool: t };
  }
  var tn = Error(r(460)), jo = Error(r(474)), uu = Error(r(542)), Vi = { then: function() {
  } };
  function Co(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function iu() {
  }
  function Go(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(iu, iu), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Qo(t), t;
      default:
        if (typeof l.status == "string") l.then(iu, iu);
        else {
          if (t = xt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Qo(t), t;
        }
        throw ln = l, tn;
    }
  }
  var ln = null;
  function Xo() {
    if (ln === null) throw Error(r(459));
    var t = ln;
    return ln = null, t;
  }
  function Qo(t) {
    if (t === tn || t === uu)
      throw Error(r(483));
  }
  var ne = !1;
  function Li(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ki(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ue(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ie(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (dt & 2) !== 0) {
      var n = a.pending;
      return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = In(t), Oo(t, null, e), l;
    }
    return Fn(t, a, l, e), In(t);
  }
  function en(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Hf(t, e);
    }
  }
  function Ki(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null, u = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, e = e.next;
        } while (e !== null);
        u === null ? n = u = l : u = u.next = l;
      } else n = u = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var Ji = !1;
  function an() {
    if (Ji) {
      var t = ra;
      if (t !== null) throw t;
    }
  }
  function nn(t, l, e, a) {
    Ji = !1;
    var n = t.updateQueue;
    ne = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var o = c, g = o.next;
      o.next = null, i === null ? u = g : i.next = g, i = o;
      var S = t.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== i && (c === null ? S.firstBaseUpdate = g : c.next = g, S.lastBaseUpdate = o));
    }
    if (u !== null) {
      var E = n.baseState;
      i = 0, S = g = o = null, c = u;
      do {
        var y = c.lane & -536870913, v = y !== c.lane;
        if (v ? (ct & y) === y : (a & y) === y) {
          y !== 0 && y === oa && (Ji = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var V = t, X = c;
            y = l;
            var vt = e;
            switch (X.tag) {
              case 1:
                if (V = X.payload, typeof V == "function") {
                  E = V.call(vt, E, y);
                  break t;
                }
                E = V;
                break t;
              case 3:
                V.flags = V.flags & -65537 | 128;
              case 0:
                if (V = X.payload, y = typeof V == "function" ? V.call(vt, E, y) : V, y == null) break t;
                E = R({}, E, y);
                break t;
              case 2:
                ne = !0;
            }
          }
          y = c.callback, y !== null && (t.flags |= 64, v && (t.flags |= 8192), v = n.callbacks, v === null ? n.callbacks = [y] : v.push(y));
        } else
          v = {
            lane: y,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (g = S = v, o = E) : S = S.next = v, i |= y;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          v = c, c = v.next, v.next = null, n.lastBaseUpdate = v, n.shared.pending = null;
        }
      } while (!0);
      S === null && (o = E), n.baseState = o, n.firstBaseUpdate = g, n.lastBaseUpdate = S, u === null && (n.shared.lanes = 0), he |= i, t.lanes = i, t.memoizedState = E;
    }
  }
  function Zo(t, l) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(l);
  }
  function Vo(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        Zo(e[t], l);
  }
  var sa = A(null), cu = A(0);
  function Lo(t, l) {
    t = Kl, O(cu, t), O(sa, l), Kl = t | l.baseLanes;
  }
  function Wi() {
    O(cu, Kl), O(sa, sa.current);
  }
  function $i() {
    Kl = cu.current, N(sa), N(cu);
  }
  var ce = 0, P = null, gt = null, Nt = null, fu = !1, da = !1, je = !1, ou = 0, un = 0, ma = null, ih = 0;
  function Rt() {
    throw Error(r(321));
  }
  function Fi(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!ul(t[e], l[e])) return !1;
    return !0;
  }
  function Ii(t, l, e, a, n, u) {
    return ce = u, P = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, b.H = t === null || t.memoizedState === null ? Or : Dr, je = !1, u = e(a, n), je = !1, da && (u = Ko(
      l,
      e,
      a,
      n
    )), ko(t), u;
  }
  function ko(t) {
    b.H = gu;
    var l = gt !== null && gt.next !== null;
    if (ce = 0, Nt = gt = P = null, fu = !1, un = 0, ma = null, l) throw Error(r(300));
    t === null || Xt || (t = t.dependencies, t !== null && eu(t) && (Xt = !0));
  }
  function Ko(t, l, e, a) {
    P = t;
    var n = 0;
    do {
      if (da && (ma = null), un = 0, da = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Nt = gt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      b.H = mh, u = l(e, a);
    } while (da);
    return u;
  }
  function ch() {
    var t = b.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? cn(l) : l, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && (P.flags |= 1024), l;
  }
  function Pi() {
    var t = ou !== 0;
    return ou = 0, t;
  }
  function tc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function lc(t) {
    if (fu) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      fu = !1;
    }
    ce = 0, Nt = gt = P = null, da = !1, un = ou = 0, ma = null;
  }
  function Pt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Nt === null ? P.memoizedState = Nt = t : Nt = Nt.next = t, Nt;
  }
  function Ht() {
    if (gt === null) {
      var t = P.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var l = Nt === null ? P.memoizedState : Nt.next;
    if (l !== null)
      Nt = l, gt = t;
    else {
      if (t === null)
        throw P.alternate === null ? Error(r(467)) : Error(r(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, Nt === null ? P.memoizedState = Nt = t : Nt = Nt.next = t;
    }
    return Nt;
  }
  function ec() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cn(t) {
    var l = un;
    return un += 1, ma === null && (ma = []), t = Go(ma, t, l), l = P, (Nt === null ? l.memoizedState : Nt.next) === null && (l = l.alternate, b.H = l === null || l.memoizedState === null ? Or : Dr), t;
  }
  function ru(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return cn(t);
      if (t.$$typeof === St) return Jt(t);
    }
    throw Error(r(438, String(t)));
  }
  function ac(t) {
    var l = null, e = P.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = P.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = ec(), P.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = Nl;
    return l.index++, e;
  }
  function Xl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function su(t) {
    var l = Ht();
    return nc(l, gt, t);
  }
  function nc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      l.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      l = n.next;
      var c = i = null, o = null, g = l, S = !1;
      do {
        var E = g.lane & -536870913;
        if (E !== g.lane ? (ct & E) === E : (ce & E) === E) {
          var y = g.revertLane;
          if (y === 0)
            o !== null && (o = o.next = {
              lane: 0,
              revertLane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), E === oa && (S = !0);
          else if ((ce & y) === y) {
            g = g.next, y === oa && (S = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: g.revertLane,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, o === null ? (c = o = E, i = u) : o = o.next = E, P.lanes |= y, he |= y;
          E = g.action, je && e(u, E), u = g.hasEagerState ? g.eagerState : e(u, E);
        } else
          y = {
            lane: E,
            revertLane: g.revertLane,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, o === null ? (c = o = y, i = u) : o = o.next = y, P.lanes |= E, he |= E;
        g = g.next;
      } while (g !== null && g !== l);
      if (o === null ? i = u : o.next = c, !ul(u, t.memoizedState) && (Xt = !0, S && (e = ra, e !== null)))
        throw e;
      t.memoizedState = u, t.baseState = i, t.baseQueue = o, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function uc(t) {
    var l = Ht(), e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, n = e.pending, u = l.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      ul(u, l.memoizedState) || (Xt = !0), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), e.lastRenderedState = u;
    }
    return [u, a];
  }
  function Jo(t, l, e) {
    var a = P, n = Ht(), u = rt;
    if (u) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = l();
    var i = !ul(
      (gt || n).memoizedState,
      e
    );
    i && (n.memoizedState = e, Xt = !0), n = n.queue;
    var c = Fo.bind(null, a, n, t);
    if (fn(2048, 8, c, [t]), n.getSnapshot !== l || i || Nt !== null && Nt.memoizedState.tag & 1) {
      if (a.flags |= 2048, ha(
        9,
        du(),
        $o.bind(
          null,
          a,
          n,
          e,
          l
        ),
        null
      ), xt === null) throw Error(r(349));
      u || (ce & 124) !== 0 || Wo(a, l, e);
    }
    return e;
  }
  function Wo(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = P.updateQueue, l === null ? (l = ec(), P.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function $o(t, l, e, a) {
    l.value = e, l.getSnapshot = a, Io(l) && Po(t);
  }
  function Fo(t, l, e) {
    return e(function() {
      Io(l) && Po(t);
    });
  }
  function Io(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !ul(t, e);
    } catch {
      return !0;
    }
  }
  function Po(t) {
    var l = ua(t, 2);
    l !== null && sl(l, t, 2);
  }
  function ic(t) {
    var l = Pt();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), je) {
        te(!0);
        try {
          e();
        } finally {
          te(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xl,
      lastRenderedState: t
    }, l;
  }
  function tr(t, l, e, a) {
    return t.baseState = e, nc(
      t,
      gt,
      typeof a == "function" ? a : Xl
    );
  }
  function fh(t, l, e, a, n) {
    if (hu(t)) throw Error(r(485));
    if (t = l.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      b.T !== null ? e(!0) : u.isTransition = !1, a(u), e = l.pending, e === null ? (u.next = l.pending = u, lr(l, u)) : (u.next = e.next, l.pending = e.next = u);
    }
  }
  function lr(t, l) {
    var e = l.action, a = l.payload, n = t.state;
    if (l.isTransition) {
      var u = b.T, i = {};
      b.T = i;
      try {
        var c = e(n, a), o = b.S;
        o !== null && o(i, c), er(t, l, c);
      } catch (g) {
        cc(t, l, g);
      } finally {
        b.T = u;
      }
    } else
      try {
        u = e(n, a), er(t, l, u);
      } catch (g) {
        cc(t, l, g);
      }
  }
  function er(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        ar(t, l, a);
      },
      function(a) {
        return cc(t, l, a);
      }
    ) : ar(t, l, e);
  }
  function ar(t, l, e) {
    l.status = "fulfilled", l.value = e, nr(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, lr(t, e)));
  }
  function cc(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, nr(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function nr(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function ur(t, l) {
    return l;
  }
  function ir(t, l) {
    if (rt) {
      var e = xt.formState;
      if (e !== null) {
        t: {
          var a = P;
          if (rt) {
            if (_t) {
              l: {
                for (var n = _t, u = Ol; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break l;
                  }
                  if (n = Al(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break l;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                _t = Al(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            He(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = Pt(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ur,
      lastRenderedState: l
    }, e.queue = a, e = Ar.bind(
      null,
      P,
      a
    ), a.dispatch = e, a = ic(!1), u = dc.bind(
      null,
      P,
      !1,
      a.queue
    ), a = Pt(), n = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, e = fh.bind(
      null,
      P,
      n,
      u,
      e
    ), n.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function cr(t) {
    var l = Ht();
    return fr(l, gt, t);
  }
  function fr(t, l, e) {
    if (l = nc(
      t,
      l,
      ur
    )[0], t = su(Xl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = cn(l);
      } catch (i) {
        throw i === tn ? uu : i;
      }
    else a = l;
    l = Ht();
    var n = l.queue, u = n.dispatch;
    return e !== l.memoizedState && (P.flags |= 2048, ha(
      9,
      du(),
      oh.bind(null, n, e),
      null
    )), [a, u, t];
  }
  function oh(t, l) {
    t.action = l;
  }
  function or(t) {
    var l = Ht(), e = gt;
    if (e !== null)
      return fr(l, e, t);
    Ht(), l = l.memoizedState, e = Ht();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function ha(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = P.updateQueue, l === null && (l = ec(), P.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function du() {
    return { destroy: void 0, resource: void 0 };
  }
  function rr() {
    return Ht().memoizedState;
  }
  function mu(t, l, e, a) {
    var n = Pt();
    a = a === void 0 ? null : a, P.flags |= t, n.memoizedState = ha(
      1 | l,
      du(),
      e,
      a
    );
  }
  function fn(t, l, e, a) {
    var n = Ht();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    gt !== null && a !== null && Fi(a, gt.memoizedState.deps) ? n.memoizedState = ha(l, u, e, a) : (P.flags |= t, n.memoizedState = ha(
      1 | l,
      u,
      e,
      a
    ));
  }
  function sr(t, l) {
    mu(8390656, 8, t, l);
  }
  function dr(t, l) {
    fn(2048, 8, t, l);
  }
  function mr(t, l) {
    return fn(4, 2, t, l);
  }
  function hr(t, l) {
    return fn(4, 4, t, l);
  }
  function gr(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function yr(t, l, e) {
    e = e != null ? e.concat([t]) : null, fn(4, 4, gr.bind(null, l, t), e);
  }
  function fc() {
  }
  function vr(t, l) {
    var e = Ht();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Fi(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function br(t, l) {
    var e = Ht();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Fi(l, a[1]))
      return a[0];
    if (a = t(), je) {
      te(!0);
      try {
        t();
      } finally {
        te(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function oc(t, l, e) {
    return e === void 0 || (ce & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = xs(), P.lanes |= t, he |= t, e);
  }
  function pr(t, l, e, a) {
    return ul(e, l) ? e : sa.current !== null ? (t = oc(t, e, a), ul(t, l) || (Xt = !0), t) : (ce & 42) === 0 ? (Xt = !0, t.memoizedState = e) : (t = xs(), P.lanes |= t, he |= t, l);
  }
  function Sr(t, l, e, a, n) {
    var u = D.p;
    D.p = u !== 0 && 8 > u ? u : 8;
    var i = b.T, c = {};
    b.T = c, dc(t, !1, l, e);
    try {
      var o = n(), g = b.S;
      if (g !== null && g(c, o), o !== null && typeof o == "object" && typeof o.then == "function") {
        var S = uh(
          o,
          a
        );
        on(
          t,
          l,
          S,
          rl(t)
        );
      } else
        on(
          t,
          l,
          a,
          rl(t)
        );
    } catch (E) {
      on(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: E },
        rl()
      );
    } finally {
      D.p = u, b.T = i;
    }
  }
  function rh() {
  }
  function rc(t, l, e, a) {
    if (t.tag !== 5) throw Error(r(476));
    var n = xr(t).queue;
    Sr(
      t,
      n,
      l,
      M,
      e === null ? rh : function() {
        return Tr(t), e(a);
      }
    );
  }
  function xr(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: M,
      baseState: M,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xl,
        lastRenderedState: M
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xl,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function Tr(t) {
    var l = xr(t).next.queue;
    on(t, l, {}, rl());
  }
  function sc() {
    return Jt(Mn);
  }
  function zr() {
    return Ht().memoizedState;
  }
  function Er() {
    return Ht().memoizedState;
  }
  function sh(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = rl();
          t = ue(e);
          var a = ie(l, t, e);
          a !== null && (sl(a, l, e), en(a, l, e)), l = { cache: Xi() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function dh(t, l, e) {
    var a = rl();
    e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hu(t) ? _r(l, e) : (e = Ui(t, l, e, a), e !== null && (sl(e, t, a), Mr(e, l, a)));
  }
  function Ar(t, l, e) {
    var a = rl();
    on(t, l, e, a);
  }
  function on(t, l, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hu(t)) _r(l, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
        try {
          var i = l.lastRenderedState, c = u(i, e);
          if (n.hasEagerState = !0, n.eagerState = c, ul(c, i))
            return Fn(t, l, n, 0), xt === null && $n(), !1;
        } catch {
        } finally {
        }
      if (e = Ui(t, l, n, a), e !== null)
        return sl(e, t, a), Mr(e, l, a), !0;
    }
    return !1;
  }
  function dc(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: Vc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hu(t)) {
      if (l) throw Error(r(479));
    } else
      l = Ui(
        t,
        e,
        a,
        2
      ), l !== null && sl(l, t, 2);
  }
  function hu(t) {
    var l = t.alternate;
    return t === P || l !== null && l === P;
  }
  function _r(t, l) {
    da = fu = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Mr(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Hf(t, e);
    }
  }
  var gu = {
    readContext: Jt,
    use: ru,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useLayoutEffect: Rt,
    useInsertionEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useSyncExternalStore: Rt,
    useId: Rt,
    useHostTransitionStatus: Rt,
    useFormState: Rt,
    useActionState: Rt,
    useOptimistic: Rt,
    useMemoCache: Rt,
    useCacheRefresh: Rt
  }, Or = {
    readContext: Jt,
    use: ru,
    useCallback: function(t, l) {
      return Pt().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Jt,
    useEffect: sr,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, mu(
        4194308,
        4,
        gr.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return mu(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      mu(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = Pt();
      l = l === void 0 ? null : l;
      var a = t();
      if (je) {
        te(!0);
        try {
          t();
        } finally {
          te(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = Pt();
      if (e !== void 0) {
        var n = e(l);
        if (je) {
          te(!0);
          try {
            e(l);
          } finally {
            te(!1);
          }
        }
      } else n = l;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = dh.bind(
        null,
        P,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = Pt();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = ic(t);
      var l = t.queue, e = Ar.bind(null, P, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: fc,
    useDeferredValue: function(t, l) {
      var e = Pt();
      return oc(e, t, l);
    },
    useTransition: function() {
      var t = ic(!1);
      return t = Sr.bind(
        null,
        P,
        t.queue,
        !0,
        !1
      ), Pt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = P, n = Pt();
      if (rt) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = l(), xt === null)
          throw Error(r(349));
        (ct & 124) !== 0 || Wo(a, l, e);
      }
      n.memoizedState = e;
      var u = { value: e, getSnapshot: l };
      return n.queue = u, sr(Fo.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, ha(
        9,
        du(),
        $o.bind(
          null,
          a,
          u,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = Pt(), l = xt.identifierPrefix;
      if (rt) {
        var e = jl, a = Yl;
        e = (a & ~(1 << 32 - nl(a) - 1)).toString(32) + e, l = "«" + l + "R" + e, e = ou++, 0 < e && (l += "H" + e.toString(32)), l += "»";
      } else
        e = ih++, l = "«" + l + "r" + e.toString(32) + "»";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: sc,
    useFormState: ir,
    useActionState: ir,
    useOptimistic: function(t) {
      var l = Pt();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = dc.bind(
        null,
        P,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: ac,
    useCacheRefresh: function() {
      return Pt().memoizedState = sh.bind(
        null,
        P
      );
    }
  }, Dr = {
    readContext: Jt,
    use: ru,
    useCallback: vr,
    useContext: Jt,
    useEffect: dr,
    useImperativeHandle: yr,
    useInsertionEffect: mr,
    useLayoutEffect: hr,
    useMemo: br,
    useReducer: su,
    useRef: rr,
    useState: function() {
      return su(Xl);
    },
    useDebugValue: fc,
    useDeferredValue: function(t, l) {
      var e = Ht();
      return pr(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = su(Xl)[0], l = Ht().memoizedState;
      return [
        typeof t == "boolean" ? t : cn(t),
        l
      ];
    },
    useSyncExternalStore: Jo,
    useId: zr,
    useHostTransitionStatus: sc,
    useFormState: cr,
    useActionState: cr,
    useOptimistic: function(t, l) {
      var e = Ht();
      return tr(e, gt, t, l);
    },
    useMemoCache: ac,
    useCacheRefresh: Er
  }, mh = {
    readContext: Jt,
    use: ru,
    useCallback: vr,
    useContext: Jt,
    useEffect: dr,
    useImperativeHandle: yr,
    useInsertionEffect: mr,
    useLayoutEffect: hr,
    useMemo: br,
    useReducer: uc,
    useRef: rr,
    useState: function() {
      return uc(Xl);
    },
    useDebugValue: fc,
    useDeferredValue: function(t, l) {
      var e = Ht();
      return gt === null ? oc(e, t, l) : pr(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = uc(Xl)[0], l = Ht().memoizedState;
      return [
        typeof t == "boolean" ? t : cn(t),
        l
      ];
    },
    useSyncExternalStore: Jo,
    useId: zr,
    useHostTransitionStatus: sc,
    useFormState: or,
    useActionState: or,
    useOptimistic: function(t, l) {
      var e = Ht();
      return gt !== null ? tr(e, gt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: ac,
    useCacheRefresh: Er
  }, ga = null, rn = 0;
  function yu(t) {
    var l = rn;
    return rn += 1, ga === null && (ga = []), Go(ga, t, l);
  }
  function sn(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function vu(t, l) {
    throw l.$$typeof === J ? Error(r(525)) : (t = Object.prototype.toString.call(l), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function Rr(t) {
    var l = t._init;
    return l(t._payload);
  }
  function Ur(t) {
    function l(m, d) {
      if (t) {
        var h = m.deletions;
        h === null ? (m.deletions = [d], m.flags |= 16) : h.push(d);
      }
    }
    function e(m, d) {
      if (!t) return null;
      for (; d !== null; )
        l(m, d), d = d.sibling;
      return null;
    }
    function a(m) {
      for (var d = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? d.set(m.key, m) : d.set(m.index, m), m = m.sibling;
      return d;
    }
    function n(m, d) {
      return m = Bl(m, d), m.index = 0, m.sibling = null, m;
    }
    function u(m, d, h) {
      return m.index = h, t ? (h = m.alternate, h !== null ? (h = h.index, h < d ? (m.flags |= 67108866, d) : h) : (m.flags |= 67108866, d)) : (m.flags |= 1048576, d);
    }
    function i(m) {
      return t && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, d, h, T) {
      return d === null || d.tag !== 6 ? (d = Ni(h, m.mode, T), d.return = m, d) : (d = n(d, h), d.return = m, d);
    }
    function o(m, d, h, T) {
      var B = h.type;
      return B === Z ? S(
        m,
        d,
        h.props.children,
        T,
        h.key
      ) : d !== null && (d.elementType === B || typeof B == "object" && B !== null && B.$$typeof === G && Rr(B) === d.type) ? (d = n(d, h.props), sn(d, h), d.return = m, d) : (d = Pn(
        h.type,
        h.key,
        h.props,
        null,
        m.mode,
        T
      ), sn(d, h), d.return = m, d);
    }
    function g(m, d, h, T) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Hi(h, m.mode, T), d.return = m, d) : (d = n(d, h.children || []), d.return = m, d);
    }
    function S(m, d, h, T, B) {
      return d === null || d.tag !== 7 ? (d = Re(
        h,
        m.mode,
        T,
        B
      ), d.return = m, d) : (d = n(d, h), d.return = m, d);
    }
    function E(m, d, h) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = Ni(
          "" + d,
          m.mode,
          h
        ), d.return = m, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case lt:
            return h = Pn(
              d.type,
              d.key,
              d.props,
              null,
              m.mode,
              h
            ), sn(h, d), h.return = m, h;
          case W:
            return d = Hi(
              d,
              m.mode,
              h
            ), d.return = m, d;
          case G:
            var T = d._init;
            return d = T(d._payload), E(m, d, h);
        }
        if (Et(d) || Dt(d))
          return d = Re(
            d,
            m.mode,
            h,
            null
          ), d.return = m, d;
        if (typeof d.then == "function")
          return E(m, yu(d), h);
        if (d.$$typeof === St)
          return E(
            m,
            au(m, d),
            h
          );
        vu(m, d);
      }
      return null;
    }
    function y(m, d, h, T) {
      var B = d !== null ? d.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return B !== null ? null : c(m, d, "" + h, T);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case lt:
            return h.key === B ? o(m, d, h, T) : null;
          case W:
            return h.key === B ? g(m, d, h, T) : null;
          case G:
            return B = h._init, h = B(h._payload), y(m, d, h, T);
        }
        if (Et(h) || Dt(h))
          return B !== null ? null : S(m, d, h, T, null);
        if (typeof h.then == "function")
          return y(
            m,
            d,
            yu(h),
            T
          );
        if (h.$$typeof === St)
          return y(
            m,
            d,
            au(m, h),
            T
          );
        vu(m, h);
      }
      return null;
    }
    function v(m, d, h, T, B) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return m = m.get(h) || null, c(d, m, "" + T, B);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case lt:
            return m = m.get(
              T.key === null ? h : T.key
            ) || null, o(d, m, T, B);
          case W:
            return m = m.get(
              T.key === null ? h : T.key
            ) || null, g(d, m, T, B);
          case G:
            var et = T._init;
            return T = et(T._payload), v(
              m,
              d,
              h,
              T,
              B
            );
        }
        if (Et(T) || Dt(T))
          return m = m.get(h) || null, S(d, m, T, B, null);
        if (typeof T.then == "function")
          return v(
            m,
            d,
            h,
            yu(T),
            B
          );
        if (T.$$typeof === St)
          return v(
            m,
            d,
            h,
            au(d, T),
            B
          );
        vu(d, T);
      }
      return null;
    }
    function V(m, d, h, T) {
      for (var B = null, et = null, C = d, Q = d = 0, Zt = null; C !== null && Q < h.length; Q++) {
        C.index > Q ? (Zt = C, C = null) : Zt = C.sibling;
        var ot = y(
          m,
          C,
          h[Q],
          T
        );
        if (ot === null) {
          C === null && (C = Zt);
          break;
        }
        t && C && ot.alternate === null && l(m, C), d = u(ot, d, Q), et === null ? B = ot : et.sibling = ot, et = ot, C = Zt;
      }
      if (Q === h.length)
        return e(m, C), rt && we(m, Q), B;
      if (C === null) {
        for (; Q < h.length; Q++)
          C = E(m, h[Q], T), C !== null && (d = u(
            C,
            d,
            Q
          ), et === null ? B = C : et.sibling = C, et = C);
        return rt && we(m, Q), B;
      }
      for (C = a(C); Q < h.length; Q++)
        Zt = v(
          C,
          m,
          Q,
          h[Q],
          T
        ), Zt !== null && (t && Zt.alternate !== null && C.delete(
          Zt.key === null ? Q : Zt.key
        ), d = u(
          Zt,
          d,
          Q
        ), et === null ? B = Zt : et.sibling = Zt, et = Zt);
      return t && C.forEach(function(ze) {
        return l(m, ze);
      }), rt && we(m, Q), B;
    }
    function X(m, d, h, T) {
      if (h == null) throw Error(r(151));
      for (var B = null, et = null, C = d, Q = d = 0, Zt = null, ot = h.next(); C !== null && !ot.done; Q++, ot = h.next()) {
        C.index > Q ? (Zt = C, C = null) : Zt = C.sibling;
        var ze = y(m, C, ot.value, T);
        if (ze === null) {
          C === null && (C = Zt);
          break;
        }
        t && C && ze.alternate === null && l(m, C), d = u(ze, d, Q), et === null ? B = ze : et.sibling = ze, et = ze, C = Zt;
      }
      if (ot.done)
        return e(m, C), rt && we(m, Q), B;
      if (C === null) {
        for (; !ot.done; Q++, ot = h.next())
          ot = E(m, ot.value, T), ot !== null && (d = u(ot, d, Q), et === null ? B = ot : et.sibling = ot, et = ot);
        return rt && we(m, Q), B;
      }
      for (C = a(C); !ot.done; Q++, ot = h.next())
        ot = v(C, m, Q, ot.value, T), ot !== null && (t && ot.alternate !== null && C.delete(ot.key === null ? Q : ot.key), d = u(ot, d, Q), et === null ? B = ot : et.sibling = ot, et = ot);
      return t && C.forEach(function(h0) {
        return l(m, h0);
      }), rt && we(m, Q), B;
    }
    function vt(m, d, h, T) {
      if (typeof h == "object" && h !== null && h.type === Z && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case lt:
            t: {
              for (var B = h.key; d !== null; ) {
                if (d.key === B) {
                  if (B = h.type, B === Z) {
                    if (d.tag === 7) {
                      e(
                        m,
                        d.sibling
                      ), T = n(
                        d,
                        h.props.children
                      ), T.return = m, m = T;
                      break t;
                    }
                  } else if (d.elementType === B || typeof B == "object" && B !== null && B.$$typeof === G && Rr(B) === d.type) {
                    e(
                      m,
                      d.sibling
                    ), T = n(d, h.props), sn(T, h), T.return = m, m = T;
                    break t;
                  }
                  e(m, d);
                  break;
                } else l(m, d);
                d = d.sibling;
              }
              h.type === Z ? (T = Re(
                h.props.children,
                m.mode,
                T,
                h.key
              ), T.return = m, m = T) : (T = Pn(
                h.type,
                h.key,
                h.props,
                null,
                m.mode,
                T
              ), sn(T, h), T.return = m, m = T);
            }
            return i(m);
          case W:
            t: {
              for (B = h.key; d !== null; ) {
                if (d.key === B)
                  if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                    e(
                      m,
                      d.sibling
                    ), T = n(d, h.children || []), T.return = m, m = T;
                    break t;
                  } else {
                    e(m, d);
                    break;
                  }
                else l(m, d);
                d = d.sibling;
              }
              T = Hi(h, m.mode, T), T.return = m, m = T;
            }
            return i(m);
          case G:
            return B = h._init, h = B(h._payload), vt(
              m,
              d,
              h,
              T
            );
        }
        if (Et(h))
          return V(
            m,
            d,
            h,
            T
          );
        if (Dt(h)) {
          if (B = Dt(h), typeof B != "function") throw Error(r(150));
          return h = B.call(h), X(
            m,
            d,
            h,
            T
          );
        }
        if (typeof h.then == "function")
          return vt(
            m,
            d,
            yu(h),
            T
          );
        if (h.$$typeof === St)
          return vt(
            m,
            d,
            au(m, h),
            T
          );
        vu(m, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, d !== null && d.tag === 6 ? (e(m, d.sibling), T = n(d, h), T.return = m, m = T) : (e(m, d), T = Ni(h, m.mode, T), T.return = m, m = T), i(m)) : e(m, d);
    }
    return function(m, d, h, T) {
      try {
        rn = 0;
        var B = vt(
          m,
          d,
          h,
          T
        );
        return ga = null, B;
      } catch (C) {
        if (C === tn || C === uu) throw C;
        var et = il(29, C, null, m.mode);
        return et.lanes = T, et.return = m, et;
      } finally {
      }
    };
  }
  var ya = Ur(!0), wr = Ur(!1), pl = A(null), Dl = null;
  function fe(t) {
    var l = t.alternate;
    O(Yt, Yt.current & 1), O(pl, t), Dl === null && (l === null || sa.current !== null || l.memoizedState !== null) && (Dl = t);
  }
  function Nr(t) {
    if (t.tag === 22) {
      if (O(Yt, Yt.current), O(pl, t), Dl === null) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (Dl = t);
      }
    } else oe();
  }
  function oe() {
    O(Yt, Yt.current), O(pl, pl.current);
  }
  function Ql(t) {
    N(pl), Dl === t && (Dl = null), N(Yt);
  }
  var Yt = A(0);
  function bu(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || ef(e)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  function mc(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : R({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var hc = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = rl(), n = ue(a);
      n.payload = l, e != null && (n.callback = e), l = ie(t, n, a), l !== null && (sl(l, t, a), en(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = rl(), n = ue(a);
      n.tag = 1, n.payload = l, e != null && (n.callback = e), l = ie(t, n, a), l !== null && (sl(l, t, a), en(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = rl(), a = ue(e);
      a.tag = 2, l != null && (a.callback = l), l = ie(t, a, e), l !== null && (sl(l, t, e), en(l, t, e));
    }
  };
  function Hr(t, l, e, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : l.prototype && l.prototype.isPureReactComponent ? !ka(e, a) || !ka(n, u) : !0;
  }
  function qr(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && hc.enqueueReplaceState(l, l.state, null);
  }
  function Ce(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = R({}, e));
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
    }
    return e;
  }
  var pu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Br(t) {
    pu(t);
  }
  function Yr(t) {
    console.error(t);
  }
  function jr(t) {
    pu(t);
  }
  function Su(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Cr(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function gc(t, l, e) {
    return e = ue(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Su(t, l);
    }, e;
  }
  function Gr(t) {
    return t = ue(t), t.tag = 3, t;
  }
  function Xr(t, l, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        Cr(l, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      Cr(l, e, a), typeof n != "function" && (ge === null ? ge = /* @__PURE__ */ new Set([this]) : ge.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function hh(t, l, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && Fa(
        l,
        e,
        n,
        !0
      ), e = pl.current, e !== null) {
        switch (e.tag) {
          case 13:
            return Dl === null ? Cc() : e.alternate === null && Mt === 0 && (Mt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === Vi ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Xc(t, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === Vi ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Xc(t, a, n)), !1;
        }
        throw Error(r(435, e.tag));
      }
      return Xc(t, a, n), Cc(), !1;
    }
    if (rt)
      return l = pl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Yi && (t = Error(r(422), { cause: a }), $a(gl(t, e)))) : (a !== Yi && (l = Error(r(423), {
        cause: a
      }), $a(
        gl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = gl(a, e), n = gc(
        t.stateNode,
        a,
        n
      ), Ki(t, n), Mt !== 4 && (Mt = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = gl(u, e), bn === null ? bn = [u] : bn.push(u), Mt !== 4 && (Mt = 2), l === null) return !0;
    a = gl(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = n & -n, e.lanes |= t, t = gc(e.stateNode, a, t), Ki(e, t), !1;
        case 1:
          if (l = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ge === null || !ge.has(u))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = Gr(n), Xr(
              n,
              t,
              e,
              a
            ), Ki(e, n), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Qr = Error(r(461)), Xt = !1;
  function Vt(t, l, e, a) {
    l.child = t === null ? wr(l, null, e, a) : ya(
      l,
      t.child,
      e,
      a
    );
  }
  function Zr(t, l, e, a, n) {
    e = e.render;
    var u = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return Be(l), a = Ii(
      t,
      l,
      e,
      i,
      u,
      n
    ), c = Pi(), t !== null && !Xt ? (tc(t, l, n), Zl(t, l, n)) : (rt && c && qi(l), l.flags |= 1, Vt(t, l, a, n), l.child);
  }
  function Vr(t, l, e, a, n) {
    if (t === null) {
      var u = e.type;
      return typeof u == "function" && !wi(u) && u.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = u, Lr(
        t,
        l,
        u,
        a,
        n
      )) : (t = Pn(
        e.type,
        null,
        a,
        l,
        l.mode,
        n
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (u = t.child, !zc(t, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : ka, e(i, a) && t.ref === l.ref)
        return Zl(t, l, n);
    }
    return l.flags |= 1, t = Bl(u, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Lr(t, l, e, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (ka(u, a) && t.ref === l.ref)
        if (Xt = !1, l.pendingProps = a = u, zc(t, n))
          (t.flags & 131072) !== 0 && (Xt = !0);
        else
          return l.lanes = t.lanes, Zl(t, l, n);
    }
    return yc(
      t,
      l,
      e,
      a,
      n
    );
  }
  function kr(t, l, e) {
    var a = l.pendingProps, n = a.children, u = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (a = u !== null ? u.baseLanes | e : e, t !== null) {
          for (n = l.child = t.child, u = 0; n !== null; )
            u = u | n.lanes | n.childLanes, n = n.sibling;
          l.childLanes = u & ~a;
        } else l.childLanes = 0, l.child = null;
        return Kr(
          t,
          l,
          a,
          e
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && nu(
          l,
          u !== null ? u.cachePool : null
        ), u !== null ? Lo(l, u) : Wi(), Nr(l);
      else
        return l.lanes = l.childLanes = 536870912, Kr(
          t,
          l,
          u !== null ? u.baseLanes | e : e,
          e
        );
    } else
      u !== null ? (nu(l, u.cachePool), Lo(l, u), oe(), l.memoizedState = null) : (t !== null && nu(l, null), Wi(), oe());
    return Vt(t, l, n, e), l.child;
  }
  function Kr(t, l, e, a) {
    var n = Zi();
    return n = n === null ? null : { parent: Bt._currentValue, pool: n }, l.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, t !== null && nu(l, null), Wi(), Nr(l), t !== null && Fa(t, l, a, !0), null;
  }
  function xu(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(r(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function yc(t, l, e, a, n) {
    return Be(l), e = Ii(
      t,
      l,
      e,
      a,
      void 0,
      n
    ), a = Pi(), t !== null && !Xt ? (tc(t, l, n), Zl(t, l, n)) : (rt && a && qi(l), l.flags |= 1, Vt(t, l, e, n), l.child);
  }
  function Jr(t, l, e, a, n, u) {
    return Be(l), l.updateQueue = null, e = Ko(
      l,
      a,
      e,
      n
    ), ko(t), a = Pi(), t !== null && !Xt ? (tc(t, l, u), Zl(t, l, u)) : (rt && a && qi(l), l.flags |= 1, Vt(t, l, e, u), l.child);
  }
  function Wr(t, l, e, a, n) {
    if (Be(l), l.stateNode === null) {
      var u = ia, i = e.contextType;
      typeof i == "object" && i !== null && (u = Jt(i)), u = new e(a, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = hc, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = a, u.state = l.memoizedState, u.refs = {}, Li(l), i = e.contextType, u.context = typeof i == "object" && i !== null ? Jt(i) : ia, u.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (mc(
        l,
        e,
        i,
        a
      ), u.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && hc.enqueueReplaceState(u, u.state, null), nn(l, a, u, n), an(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = l.stateNode;
      var c = l.memoizedProps, o = Ce(e, c);
      u.props = o;
      var g = u.context, S = e.contextType;
      i = ia, typeof S == "object" && S !== null && (i = Jt(S));
      var E = e.getDerivedStateFromProps;
      S = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, S || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || g !== i) && qr(
        l,
        u,
        a,
        i
      ), ne = !1;
      var y = l.memoizedState;
      u.state = y, nn(l, a, u, n), an(), g = l.memoizedState, c || y !== g || ne ? (typeof E == "function" && (mc(
        l,
        e,
        E,
        a
      ), g = l.memoizedState), (o = ne || Hr(
        l,
        e,
        o,
        a,
        y,
        g,
        i
      )) ? (S || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = g), u.props = a, u.state = g, u.context = i, a = o) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      u = l.stateNode, ki(t, l), i = l.memoizedProps, S = Ce(e, i), u.props = S, E = l.pendingProps, y = u.context, g = e.contextType, o = ia, typeof g == "object" && g !== null && (o = Jt(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== E || y !== o) && qr(
        l,
        u,
        a,
        o
      ), ne = !1, y = l.memoizedState, u.state = y, nn(l, a, u, n), an();
      var v = l.memoizedState;
      i !== E || y !== v || ne || t !== null && t.dependencies !== null && eu(t.dependencies) ? (typeof c == "function" && (mc(
        l,
        e,
        c,
        a
      ), v = l.memoizedState), (S = ne || Hr(
        l,
        e,
        S,
        a,
        y,
        v,
        o
      ) || t !== null && t.dependencies !== null && eu(t.dependencies)) ? (g || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, v, o), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        v,
        o
      )), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && y === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && y === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = v), u.props = a, u.state = v, u.context = o, a = S) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && y === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && y === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return u = a, xu(t, l), a = (l.flags & 128) !== 0, u || a ? (u = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, t !== null && a ? (l.child = ya(
      l,
      t.child,
      null,
      n
    ), l.child = ya(
      l,
      null,
      e,
      n
    )) : Vt(t, l, e, n), l.memoizedState = u.state, t = l.child) : t = Zl(
      t,
      l,
      n
    ), t;
  }
  function $r(t, l, e, a) {
    return Wa(), l.flags |= 256, Vt(t, l, e, a), l.child;
  }
  var vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function bc(t) {
    return { baseLanes: t, cachePool: Yo() };
  }
  function pc(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= Sl), t;
  }
  function Fr(t, l, e) {
    var a = l.pendingProps, n = !1, u = (l.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0), i && (n = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (rt) {
        if (n ? fe(l) : oe(), rt) {
          var c = _t, o;
          if (o = c) {
            t: {
              for (o = c, c = Ol; o.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break t;
                }
                if (o = Al(
                  o.nextSibling
                ), o === null) {
                  c = null;
                  break t;
                }
              }
              c = o;
            }
            c !== null ? (l.memoizedState = {
              dehydrated: c,
              treeContext: Ue !== null ? { id: Yl, overflow: jl } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, o = il(
              18,
              null,
              null,
              0
            ), o.stateNode = c, o.return = l, l.child = o, $t = l, _t = null, o = !0) : o = !1;
          }
          o || He(l);
        }
        if (c = l.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return ef(c) ? l.lanes = 32 : l.lanes = 536870912, null;
        Ql(l);
      }
      return c = a.children, a = a.fallback, n ? (oe(), n = l.mode, c = Tu(
        { mode: "hidden", children: c },
        n
      ), a = Re(
        a,
        n,
        e,
        null
      ), c.return = l, a.return = l, c.sibling = a, l.child = c, n = l.child, n.memoizedState = bc(e), n.childLanes = pc(
        t,
        i,
        e
      ), l.memoizedState = vc, a) : (fe(l), Sc(l, c));
    }
    if (o = t.memoizedState, o !== null && (c = o.dehydrated, c !== null)) {
      if (u)
        l.flags & 256 ? (fe(l), l.flags &= -257, l = xc(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (oe(), l.child = t.child, l.flags |= 128, l = null) : (oe(), n = a.fallback, c = l.mode, a = Tu(
          { mode: "visible", children: a.children },
          c
        ), n = Re(
          n,
          c,
          e,
          null
        ), n.flags |= 2, a.return = l, n.return = l, a.sibling = n, l.child = a, ya(
          l,
          t.child,
          null,
          e
        ), a = l.child, a.memoizedState = bc(e), a.childLanes = pc(
          t,
          i,
          e
        ), l.memoizedState = vc, l = n);
      else if (fe(l), ef(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var g = i.dgst;
        i = g, a = Error(r(419)), a.stack = "", a.digest = i, $a({ value: a, source: null, stack: null }), l = xc(
          t,
          l,
          e
        );
      } else if (Xt || Fa(t, l, e, !1), i = (e & t.childLanes) !== 0, Xt || i) {
        if (i = xt, i !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : ai(a), a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane))
          throw o.retryLane = a, ua(t, a), sl(i, t, a), Qr;
        c.data === "$?" || Cc(), l = xc(
          t,
          l,
          e
        );
      } else
        c.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = o.treeContext, _t = Al(
          c.nextSibling
        ), $t = l, rt = !0, Ne = null, Ol = !1, t !== null && (vl[bl++] = Yl, vl[bl++] = jl, vl[bl++] = Ue, Yl = t.id, jl = t.overflow, Ue = l), l = Sc(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return n ? (oe(), n = a.fallback, c = l.mode, o = t.child, g = o.sibling, a = Bl(o, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = o.subtreeFlags & 65011712, g !== null ? n = Bl(g, n) : (n = Re(
      n,
      c,
      e,
      null
    ), n.flags |= 2), n.return = l, a.return = l, a.sibling = n, l.child = a, a = n, n = l.child, c = t.child.memoizedState, c === null ? c = bc(e) : (o = c.cachePool, o !== null ? (g = Bt._currentValue, o = o.parent !== g ? { parent: g, pool: g } : o) : o = Yo(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: o
    }), n.memoizedState = c, n.childLanes = pc(
      t,
      i,
      e
    ), l.memoizedState = vc, a) : (fe(l), e = t.child, t = e.sibling, e = Bl(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Sc(t, l) {
    return l = Tu(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function Tu(t, l) {
    return t = il(22, t, null, l), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function xc(t, l, e) {
    return ya(l, t.child, null, e), t = Sc(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Ir(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Ci(t.return, l, e);
  }
  function Tc(t, l, e, a, n) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: n
    } : (u.isBackwards = l, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = e, u.tailMode = n);
  }
  function Pr(t, l, e) {
    var a = l.pendingProps, n = a.revealOrder, u = a.tail;
    if (Vt(t, l, a.children, e), a = Yt.current, (a & 2) !== 0)
      a = a & 1 | 2, l.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Ir(t, e, l);
          else if (t.tag === 19)
            Ir(t, e, l);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      a &= 1;
    }
    switch (O(Yt, a), n) {
      case "forwards":
        for (e = l.child, n = null; e !== null; )
          t = e.alternate, t !== null && bu(t) === null && (n = e), e = e.sibling;
        e = n, e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null), Tc(
          l,
          !1,
          n,
          e,
          u
        );
        break;
      case "backwards":
        for (e = null, n = l.child, l.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && bu(t) === null) {
            l.child = n;
            break;
          }
          t = n.sibling, n.sibling = e, e = n, n = t;
        }
        Tc(
          l,
          !0,
          e,
          null,
          u
        );
        break;
      case "together":
        Tc(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Zl(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), he |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (Fa(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(r(153));
    if (l.child !== null) {
      for (t = l.child, e = Bl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = Bl(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function zc(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && eu(t)));
  }
  function gh(t, l, e) {
    switch (l.tag) {
      case 3:
        bt(l, l.stateNode.containerInfo), ae(l, Bt, t.memoizedState.cache), Wa();
        break;
      case 27:
      case 5:
        Fl(l);
        break;
      case 4:
        bt(l, l.stateNode.containerInfo);
        break;
      case 10:
        ae(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (fe(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Fr(t, l, e) : (fe(l), t = Zl(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        fe(l);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (e & l.childLanes) !== 0, a || (Fa(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), n) {
          if (a)
            return Pr(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), O(Yt, Yt.current), a) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, kr(t, l, e);
      case 24:
        ae(l, Bt, t.memoizedState.cache);
    }
    return Zl(t, l, e);
  }
  function ts(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Xt = !0;
      else {
        if (!zc(t, e) && (l.flags & 128) === 0)
          return Xt = !1, gh(
            t,
            l,
            e
          );
        Xt = (t.flags & 131072) !== 0;
      }
    else
      Xt = !1, rt && (l.flags & 1048576) !== 0 && Ro(l, lu, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          t = l.pendingProps;
          var a = l.elementType, n = a._init;
          if (a = n(a._payload), l.type = a, typeof a == "function")
            wi(a) ? (t = Ce(a, t), l.tag = 1, l = Wr(
              null,
              l,
              a,
              t,
              e
            )) : (l.tag = 0, l = yc(
              null,
              l,
              a,
              t,
              e
            ));
          else {
            if (a != null) {
              if (n = a.$$typeof, n === Ct) {
                l.tag = 11, l = Zr(
                  null,
                  l,
                  a,
                  t,
                  e
                );
                break t;
              } else if (n === qt) {
                l.tag = 14, l = Vr(
                  null,
                  l,
                  a,
                  t,
                  e
                );
                break t;
              }
            }
            throw l = Tl(a) || a, Error(r(306, l, ""));
          }
        }
        return l;
      case 0:
        return yc(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return a = l.type, n = Ce(
          a,
          l.pendingProps
        ), Wr(
          t,
          l,
          a,
          n,
          e
        );
      case 3:
        t: {
          if (bt(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = l.pendingProps;
          var u = l.memoizedState;
          n = u.element, ki(t, l), nn(l, a, null, e);
          var i = l.memoizedState;
          if (a = i.cache, ae(l, Bt, a), a !== u.cache && Gi(
            l,
            [Bt],
            e,
            !0
          ), an(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = $r(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== n) {
              n = gl(
                Error(r(424)),
                l
              ), $a(n), l = $r(
                t,
                l,
                a,
                e
              );
              break t;
            } else {
              switch (t = l.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (_t = Al(t.firstChild), $t = l, rt = !0, Ne = null, Ol = !0, e = wr(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
            }
          else {
            if (Wa(), a === n) {
              l = Zl(
                t,
                l,
                e
              );
              break t;
            }
            Vt(
              t,
              l,
              a,
              e
            );
          }
          l = l.child;
        }
        return l;
      case 26:
        return xu(t, l), t === null ? (e = nd(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : rt || (e = l.type, t = l.pendingProps, a = Bu(
          L.current
        ).createElement(e), a[Kt] = l, a[Ft] = t, kt(a, e, t), Gt(a), l.stateNode = a) : l.memoizedState = nd(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Fl(l), t === null && rt && (a = l.stateNode = ld(
          l.type,
          l.pendingProps,
          L.current
        ), $t = l, Ol = !0, n = _t, be(l.type) ? (af = n, _t = Al(
          a.firstChild
        )) : _t = n), Vt(
          t,
          l,
          l.pendingProps.children,
          e
        ), xu(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && rt && ((n = a = _t) && (a = Zh(
          a,
          l.type,
          l.pendingProps,
          Ol
        ), a !== null ? (l.stateNode = a, $t = l, _t = Al(
          a.firstChild
        ), Ol = !1, n = !0) : n = !1), n || He(l)), Fl(l), n = l.type, u = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, Pc(n, u) ? a = null : i !== null && Pc(n, i) && (l.flags |= 32), l.memoizedState !== null && (n = Ii(
          t,
          l,
          ch,
          null,
          null,
          e
        ), Mn._currentValue = n), xu(t, l), Vt(t, l, a, e), l.child;
      case 6:
        return t === null && rt && ((t = e = _t) && (e = Vh(
          e,
          l.pendingProps,
          Ol
        ), e !== null ? (l.stateNode = e, $t = l, _t = null, t = !0) : t = !1), t || He(l)), null;
      case 13:
        return Fr(t, l, e);
      case 4:
        return bt(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = ya(
          l,
          null,
          a,
          e
        ) : Vt(
          t,
          l,
          a,
          e
        ), l.child;
      case 11:
        return Zr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return Vt(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return Vt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Vt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return a = l.pendingProps, ae(l, l.type, a.value), Vt(
          t,
          l,
          a.children,
          e
        ), l.child;
      case 9:
        return n = l.type._context, a = l.pendingProps.children, Be(l), n = Jt(n), a = a(n), l.flags |= 1, Vt(t, l, a, e), l.child;
      case 14:
        return Vr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return Lr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Pr(t, l, e);
      case 31:
        return a = l.pendingProps, e = l.mode, a = {
          mode: a.mode,
          children: a.children
        }, t === null ? (e = Tu(
          a,
          e
        ), e.ref = l.ref, l.child = e, e.return = l, l = e) : (e = Bl(t.child, a), e.ref = l.ref, l.child = e, e.return = l, l = e), l;
      case 22:
        return kr(t, l, e);
      case 24:
        return Be(l), a = Jt(Bt), t === null ? (n = Zi(), n === null && (n = xt, u = Xi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), l.memoizedState = {
          parent: a,
          cache: n
        }, Li(l), ae(l, Bt, n)) : ((t.lanes & e) !== 0 && (ki(t, l), nn(l, null, null, e), an()), n = t.memoizedState, u = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), ae(l, Bt, a)) : (a = u.cache, ae(l, Bt, a), a !== n.cache && Gi(
          l,
          [Bt],
          e,
          !0
        ))), Vt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(r(156, l.tag));
  }
  function Vl(t) {
    t.flags |= 4;
  }
  function ls(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !od(l)) {
      if (l = pl.current, l !== null && ((ct & 4194048) === ct ? Dl !== null : (ct & 62914560) !== ct && (ct & 536870912) === 0 || l !== Dl))
        throw ln = Vi, jo;
      t.flags |= 8192;
    }
  }
  function zu(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? wf() : 536870912, t.lanes |= l, Sa |= l);
  }
  function dn(t, l) {
    if (!rt)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function At(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function yh(t, l, e) {
    var a = l.pendingProps;
    switch (Bi(l), l.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return At(l), null;
      case 1:
        return At(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Gl(Bt), el(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Ja(l) ? Vl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, No())), At(l), null;
      case 26:
        return e = l.memoizedState, t === null ? (Vl(l), e !== null ? (At(l), ls(l, e)) : (At(l), l.flags &= -16777217)) : e ? e !== t.memoizedState ? (Vl(l), At(l), ls(l, e)) : (At(l), l.flags &= -16777217) : (t.memoizedProps !== a && Vl(l), At(l), l.flags &= -16777217), null;
      case 27:
        Il(l), e = L.current;
        var n = l.type;
        if (t !== null && l.stateNode != null)
          t.memoizedProps !== a && Vl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return At(l), null;
          }
          t = q.current, Ja(l) ? Uo(l) : (t = ld(n, a, e), l.stateNode = t, Vl(l));
        }
        return At(l), null;
      case 5:
        if (Il(l), e = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && Vl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return At(l), null;
          }
          if (t = q.current, Ja(l))
            Uo(l);
          else {
            switch (n = Bu(
              L.current
            ), t) {
              case 1:
                t = n.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                t = n.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    t = n.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    t = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    t = n.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? n.createElement("select", { is: a.is }) : n.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? n.createElement(e, { is: a.is }) : n.createElement(e);
                }
            }
            t[Kt] = l, t[Ft] = a;
            t: for (n = l.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6)
                t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === l) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === l)
                  break t;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
            l.stateNode = t;
            t: switch (kt(t, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Vl(l);
          }
        }
        return At(l), l.flags &= -16777217, null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && Vl(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(r(166));
          if (t = L.current, Ja(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, n = $t, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[Kt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Js(t.nodeValue, e)), t || He(l);
          } else
            t = Bu(t).createTextNode(
              a
            ), t[Kt] = l, l.stateNode = t;
        }
        return At(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Ja(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Kt] = l;
            } else
              Wa(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            At(l), n = !1;
          } else
            n = No(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (Ql(l), l) : (Ql(l), null);
        }
        if (Ql(l), (l.flags & 128) !== 0)
          return l.lanes = e, l;
        if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
          a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048);
        }
        return e !== t && e && (l.child.flags |= 8192), zu(l, l.updateQueue), At(l), null;
      case 4:
        return el(), t === null && Jc(l.stateNode.containerInfo), At(l), null;
      case 10:
        return Gl(l.type), At(l), null;
      case 19:
        if (N(Yt), n = l.memoizedState, n === null) return At(l), null;
        if (a = (l.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) dn(n, !1);
          else {
            if (Mt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (u = bu(t), u !== null) {
                  for (l.flags |= 128, dn(n, !1), t = u.updateQueue, l.updateQueue = t, zu(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Do(e, t), e = e.sibling;
                  return O(
                    Yt,
                    Yt.current & 1 | 2
                  ), l.child;
                }
                t = t.sibling;
              }
            n.tail !== null && Ml() > _u && (l.flags |= 128, a = !0, dn(n, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = bu(u), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, zu(l, t), dn(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !rt)
                return At(l), null;
            } else
              2 * Ml() - n.renderingStartTime > _u && e !== 536870912 && (l.flags |= 128, a = !0, dn(n, !1), l.lanes = 4194304);
          n.isBackwards ? (u.sibling = l.child, l.child = u) : (t = n.last, t !== null ? t.sibling = u : l.child = u, n.last = u);
        }
        return n.tail !== null ? (l = n.tail, n.rendering = l, n.tail = l.sibling, n.renderingStartTime = Ml(), l.sibling = null, t = Yt.current, O(Yt, a ? t & 1 | 2 : t & 1), l) : (At(l), null);
      case 22:
      case 23:
        return Ql(l), $i(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (At(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : At(l), e = l.updateQueue, e !== null && zu(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && N(Ye), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Gl(Bt), At(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function vh(t, l) {
    switch (Bi(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Gl(Bt), el(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Il(l), null;
      case 13:
        if (Ql(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          Wa();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return N(Yt), null;
      case 4:
        return el(), null;
      case 10:
        return Gl(l.type), null;
      case 22:
      case 23:
        return Ql(l), $i(), t !== null && N(Ye), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Gl(Bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function es(t, l) {
    switch (Bi(l), l.tag) {
      case 3:
        Gl(Bt), el();
        break;
      case 26:
      case 27:
      case 5:
        Il(l);
        break;
      case 4:
        el();
        break;
      case 13:
        Ql(l);
        break;
      case 19:
        N(Yt);
        break;
      case 10:
        Gl(l.type);
        break;
      case 22:
      case 23:
        Ql(l), $i(), t !== null && N(Ye);
        break;
      case 24:
        Gl(Bt);
    }
  }
  function mn(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var u = e.create, i = e.inst;
            a = u(), i.destroy = a;
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (c) {
      pt(l, l.return, c);
    }
  }
  function re(t, l, e) {
    try {
      var a = l.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = l;
              var o = e, g = c;
              try {
                g();
              } catch (S) {
                pt(
                  n,
                  o,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (S) {
      pt(l, l.return, S);
    }
  }
  function as(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Vo(l, e);
      } catch (a) {
        pt(t, t.return, a);
      }
    }
  }
  function ns(t, l, e) {
    e.props = Ce(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      pt(t, l, a);
    }
  }
  function hn(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (n) {
      pt(t, l, n);
    }
  }
  function Rl(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          pt(t, l, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          pt(t, l, n);
        }
      else e.current = null;
  }
  function us(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      pt(t, t.return, n);
    }
  }
  function Ec(t, l, e) {
    try {
      var a = t.stateNode;
      jh(a, t.type, e, l), a[Ft] = l;
    } catch (n) {
      pt(t, t.return, n);
    }
  }
  function is(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && be(t.type) || t.tag === 4;
  }
  function Ac(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || is(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && be(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function _c(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = qu));
    else if (a !== 4 && (a === 27 && be(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (_c(t, l, e), t = t.sibling; t !== null; )
        _c(t, l, e), t = t.sibling;
  }
  function Eu(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (a !== 4 && (a === 27 && be(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (Eu(t, l, e), t = t.sibling; t !== null; )
        Eu(t, l, e), t = t.sibling;
  }
  function cs(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, n = l.attributes; n.length; )
        l.removeAttributeNode(n[0]);
      kt(l, a, e), l[Kt] = t, l[Ft] = e;
    } catch (u) {
      pt(t, t.return, u);
    }
  }
  var Ll = !1, Ut = !1, Mc = !1, fs = typeof WeakSet == "function" ? WeakSet : Set, Qt = null;
  function bh(t, l) {
    if (t = t.containerInfo, Fc = Qu, t = po(t), Ai(t)) {
      if ("selectionStart" in t)
        var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0, c = -1, o = -1, g = 0, S = 0, E = t, y = null;
            l: for (; ; ) {
              for (var v; E !== e || n !== 0 && E.nodeType !== 3 || (c = i + n), E !== u || a !== 0 && E.nodeType !== 3 || (o = i + a), E.nodeType === 3 && (i += E.nodeValue.length), (v = E.firstChild) !== null; )
                y = E, E = v;
              for (; ; ) {
                if (E === t) break l;
                if (y === e && ++g === n && (c = i), y === u && ++S === a && (o = i), (v = E.nextSibling) !== null) break;
                E = y, y = E.parentNode;
              }
              E = v;
            }
            e = c === -1 || o === -1 ? null : { start: c, end: o };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Ic = { focusedElem: t, selectionRange: e }, Qu = !1, Qt = l; Qt !== null; )
      if (l = Qt, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = l, Qt = t;
      else
        for (; Qt !== null; ) {
          switch (l = Qt, u = l.alternate, t = l.flags, l.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, e = l, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
                try {
                  var V = Ce(
                    e.type,
                    n,
                    e.elementType === e.type
                  );
                  t = a.getSnapshotBeforeUpdate(
                    V,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (X) {
                  pt(
                    e,
                    e.return,
                    X
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                  lf(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, Qt = t;
            break;
          }
          Qt = l.return;
        }
  }
  function os(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        se(t, e), a & 4 && mn(5, e);
        break;
      case 1:
        if (se(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              pt(e, e.return, i);
            }
          else {
            var n = Ce(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              pt(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && as(e), a & 512 && hn(e, e.return);
        break;
      case 3:
        if (se(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Vo(t, l);
          } catch (i) {
            pt(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && cs(e);
      case 26:
      case 5:
        se(t, e), l === null && a & 4 && us(e), a & 512 && hn(e, e.return);
        break;
      case 12:
        se(t, e);
        break;
      case 13:
        se(t, e), a & 4 && ds(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Mh.bind(
          null,
          e
        ), Lh(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Ll, !a) {
          l = l !== null && l.memoizedState !== null || Ut, n = Ll;
          var u = Ut;
          Ll = a, (Ut = l) && !u ? de(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : se(t, e), Ll = n, Ut = u;
        }
        break;
      case 30:
        break;
      default:
        se(t, e);
    }
  }
  function rs(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, rs(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && ii(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var zt = null, tl = !1;
  function kl(t, l, e) {
    for (e = e.child; e !== null; )
      ss(t, l, e), e = e.sibling;
  }
  function ss(t, l, e) {
    if (al && typeof al.onCommitFiberUnmount == "function")
      try {
        al.onCommitFiberUnmount(Ha, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Ut || Rl(e, l), kl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Ut || Rl(e, l);
        var a = zt, n = tl;
        be(e.type) && (zt = e.stateNode, tl = !1), kl(
          t,
          l,
          e
        ), zn(e.stateNode), zt = a, tl = n;
        break;
      case 5:
        Ut || Rl(e, l);
      case 6:
        if (a = zt, n = tl, zt = null, kl(
          t,
          l,
          e
        ), zt = a, tl = n, zt !== null)
          if (tl)
            try {
              (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(e.stateNode);
            } catch (u) {
              pt(
                e,
                l,
                u
              );
            }
          else
            try {
              zt.removeChild(e.stateNode);
            } catch (u) {
              pt(
                e,
                l,
                u
              );
            }
        break;
      case 18:
        zt !== null && (tl ? (t = zt, Ps(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Un(t)) : Ps(zt, e.stateNode));
        break;
      case 4:
        a = zt, n = tl, zt = e.stateNode.containerInfo, tl = !0, kl(
          t,
          l,
          e
        ), zt = a, tl = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ut || re(2, e, l), Ut || re(4, e, l), kl(
          t,
          l,
          e
        );
        break;
      case 1:
        Ut || (Rl(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && ns(
          e,
          l,
          a
        )), kl(
          t,
          l,
          e
        );
        break;
      case 21:
        kl(
          t,
          l,
          e
        );
        break;
      case 22:
        Ut = (a = Ut) || e.memoizedState !== null, kl(
          t,
          l,
          e
        ), Ut = a;
        break;
      default:
        kl(
          t,
          l,
          e
        );
    }
  }
  function ds(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Un(t);
      } catch (e) {
        pt(l, l.return, e);
      }
  }
  function ph(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new fs()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new fs()), l;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Oc(t, l) {
    var e = ph(t);
    l.forEach(function(a) {
      var n = Oh.bind(null, t, a);
      e.has(a) || (e.add(a), a.then(n, n));
    });
  }
  function cl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], u = t, i = l, c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (be(c.type)) {
                zt = c.stateNode, tl = !1;
                break t;
              }
              break;
            case 5:
              zt = c.stateNode, tl = !1;
              break t;
            case 3:
            case 4:
              zt = c.stateNode.containerInfo, tl = !0;
              break t;
          }
          c = c.return;
        }
        if (zt === null) throw Error(r(160));
        ss(u, i, n), zt = null, tl = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; )
        ms(l, t), l = l.sibling;
  }
  var El = null;
  function ms(t, l) {
    var e = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        cl(l, t), fl(t), a & 4 && (re(3, t, t.return), mn(3, t), re(5, t, t.return));
        break;
      case 1:
        cl(l, t), fl(t), a & 512 && (Ut || e === null || Rl(e, e.return)), a & 64 && Ll && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = El;
        if (cl(l, t), fl(t), a & 512 && (Ut || e === null || Rl(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = t.memoizedState, e === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, e = t.memoizedProps, n = n.ownerDocument || n;
                  l: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Ya] || u[Kt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), kt(u, a, e), u[Kt] = t, Gt(u), a = u;
                      break t;
                    case "link":
                      var i = cd(
                        "link",
                        "href",
                        n
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      u = n.createElement(a), kt(u, a, e), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = cd(
                        "meta",
                        "content",
                        n
                      ).get(a + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      u = n.createElement(a), kt(u, a, e), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  u[Kt] = t, Gt(u), a = u;
                }
                t.stateNode = a;
              } else
                fd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = id(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? fd(
              n,
              t.type,
              t.stateNode
            ) : id(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Ec(
              t,
              t.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        cl(l, t), fl(t), a & 512 && (Ut || e === null || Rl(e, e.return)), e !== null && a & 4 && Ec(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (cl(l, t), fl(t), a & 512 && (Ut || e === null || Rl(e, e.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            Ie(n, "");
          } catch (v) {
            pt(t, t.return, v);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Ec(
          t,
          n,
          e !== null ? e.memoizedProps : n
        )), a & 1024 && (Mc = !0);
        break;
      case 6:
        if (cl(l, t), fl(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = a;
          } catch (v) {
            pt(t, t.return, v);
          }
        }
        break;
      case 3:
        if (Cu = null, n = El, El = Yu(l.containerInfo), cl(l, t), El = n, fl(t), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Un(l.containerInfo);
          } catch (v) {
            pt(t, t.return, v);
          }
        Mc && (Mc = !1, hs(t));
        break;
      case 4:
        a = El, El = Yu(
          t.stateNode.containerInfo
        ), cl(l, t), fl(t), El = a;
        break;
      case 12:
        cl(l, t), fl(t);
        break;
      case 13:
        cl(l, t), fl(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Hc = Ml()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Oc(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var o = e !== null && e.memoizedState !== null, g = Ll, S = Ut;
        if (Ll = g || n, Ut = S || o, cl(l, t), Ut = S, Ll = g, fl(t), a & 8192)
          t: for (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, n && (e === null || o || Ll || Ut || Ge(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                o = e = l;
                try {
                  if (u = o.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = o.stateNode;
                    var E = o.memoizedProps.style, y = E != null && E.hasOwnProperty("display") ? E.display : null;
                    c.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (v) {
                  pt(o, o.return, v);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                o = l;
                try {
                  o.stateNode.nodeValue = n ? "" : o.memoizedProps;
                } catch (v) {
                  pt(o, o.return, v);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Oc(t, e))));
        break;
      case 19:
        cl(l, t), fl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Oc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        cl(l, t), fl(t);
    }
  }
  function fl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (is(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode, u = Ac(t);
            Eu(t, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Ie(i, ""), e.flags &= -33);
            var c = Ac(t);
            Eu(t, c, i);
            break;
          case 3:
          case 4:
            var o = e.stateNode.containerInfo, g = Ac(t);
            _c(
              t,
              g,
              o
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (S) {
        pt(t, t.return, S);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function hs(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        hs(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function se(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        os(t, l.alternate, l), l = l.sibling;
  }
  function Ge(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          re(4, l, l.return), Ge(l);
          break;
        case 1:
          Rl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && ns(
            l,
            l.return,
            e
          ), Ge(l);
          break;
        case 27:
          zn(l.stateNode);
        case 26:
        case 5:
          Rl(l, l.return), Ge(l);
          break;
        case 22:
          l.memoizedState === null && Ge(l);
          break;
        case 30:
          Ge(l);
          break;
        default:
          Ge(l);
      }
      t = t.sibling;
    }
  }
  function de(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, n = t, u = l, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          de(
            n,
            u,
            e
          ), mn(4, u);
          break;
        case 1:
          if (de(
            n,
            u,
            e
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (g) {
              pt(a, a.return, g);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var o = n.shared.hiddenCallbacks;
              if (o !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++)
                  Zo(o[n], c);
            } catch (g) {
              pt(a, a.return, g);
            }
          }
          e && i & 64 && as(u), hn(u, u.return);
          break;
        case 27:
          cs(u);
        case 26:
        case 5:
          de(
            n,
            u,
            e
          ), e && a === null && i & 4 && us(u), hn(u, u.return);
          break;
        case 12:
          de(
            n,
            u,
            e
          );
          break;
        case 13:
          de(
            n,
            u,
            e
          ), e && i & 4 && ds(n, u);
          break;
        case 22:
          u.memoizedState === null && de(
            n,
            u,
            e
          ), hn(u, u.return);
          break;
        case 30:
          break;
        default:
          de(
            n,
            u,
            e
          );
      }
      l = l.sibling;
    }
  }
  function Dc(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Ia(e));
  }
  function Rc(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ia(t));
  }
  function Ul(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        gs(
          t,
          l,
          e,
          a
        ), l = l.sibling;
  }
  function gs(t, l, e, a) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ul(
          t,
          l,
          e,
          a
        ), n & 2048 && mn(9, l);
        break;
      case 1:
        Ul(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        Ul(
          t,
          l,
          e,
          a
        ), n & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ia(t)));
        break;
      case 12:
        if (n & 2048) {
          Ul(
            t,
            l,
            e,
            a
          ), t = l.stateNode;
          try {
            var u = l.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(
              i,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (o) {
            pt(l, l.return, o);
          }
        } else
          Ul(
            t,
            l,
            e,
            a
          );
        break;
      case 13:
        Ul(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = l.stateNode, i = l.alternate, l.memoizedState !== null ? u._visibility & 2 ? Ul(
          t,
          l,
          e,
          a
        ) : gn(t, l) : u._visibility & 2 ? Ul(
          t,
          l,
          e,
          a
        ) : (u._visibility |= 2, va(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0
        )), n & 2048 && Dc(i, l);
        break;
      case 24:
        Ul(
          t,
          l,
          e,
          a
        ), n & 2048 && Rc(l.alternate, l);
        break;
      default:
        Ul(
          t,
          l,
          e,
          a
        );
    }
  }
  function va(t, l, e, a, n) {
    for (n = n && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var u = t, i = l, c = e, o = a, g = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          va(
            u,
            i,
            c,
            o,
            n
          ), mn(8, i);
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          i.memoizedState !== null ? S._visibility & 2 ? va(
            u,
            i,
            c,
            o,
            n
          ) : gn(
            u,
            i
          ) : (S._visibility |= 2, va(
            u,
            i,
            c,
            o,
            n
          )), n && g & 2048 && Dc(
            i.alternate,
            i
          );
          break;
        case 24:
          va(
            u,
            i,
            c,
            o,
            n
          ), n && g & 2048 && Rc(i.alternate, i);
          break;
        default:
          va(
            u,
            i,
            c,
            o,
            n
          );
      }
      l = l.sibling;
    }
  }
  function gn(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            gn(e, a), n & 2048 && Dc(
              a.alternate,
              a
            );
            break;
          case 24:
            gn(e, a), n & 2048 && Rc(a.alternate, a);
            break;
          default:
            gn(e, a);
        }
        l = l.sibling;
      }
  }
  var yn = 8192;
  function ba(t) {
    if (t.subtreeFlags & yn)
      for (t = t.child; t !== null; )
        ys(t), t = t.sibling;
  }
  function ys(t) {
    switch (t.tag) {
      case 26:
        ba(t), t.flags & yn && t.memoizedState !== null && n0(
          El,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ba(t);
        break;
      case 3:
      case 4:
        var l = El;
        El = Yu(t.stateNode.containerInfo), ba(t), El = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = yn, yn = 16777216, ba(t), yn = l) : ba(t));
        break;
      default:
        ba(t);
    }
  }
  function vs(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function vn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Qt = a, ps(
            a,
            t
          );
        }
      vs(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        bs(t), t = t.sibling;
  }
  function bs(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        vn(t), t.flags & 2048 && re(9, t, t.return);
        break;
      case 3:
        vn(t);
        break;
      case 12:
        vn(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Au(t)) : vn(t);
        break;
      default:
        vn(t);
    }
  }
  function Au(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Qt = a, ps(
            a,
            t
          );
        }
      vs(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          re(8, l, l.return), Au(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Au(l));
          break;
        default:
          Au(l);
      }
      t = t.sibling;
    }
  }
  function ps(t, l) {
    for (; Qt !== null; ) {
      var e = Qt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          re(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ia(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Qt = a;
      else
        t: for (e = t; Qt !== null; ) {
          a = Qt;
          var n = a.sibling, u = a.return;
          if (rs(a), a === e) {
            Qt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, Qt = n;
            break t;
          }
          Qt = u;
        }
    }
  }
  var Sh = {
    getCacheForType: function(t) {
      var l = Jt(Bt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    }
  }, xh = typeof WeakMap == "function" ? WeakMap : Map, dt = 0, xt = null, nt = null, ct = 0, mt = 0, ol = null, me = !1, pa = !1, Uc = !1, Kl = 0, Mt = 0, he = 0, Xe = 0, wc = 0, Sl = 0, Sa = 0, bn = null, ll = null, Nc = !1, Hc = 0, _u = 1 / 0, Mu = null, ge = null, Lt = 0, ye = null, xa = null, Ta = 0, qc = 0, Bc = null, Ss = null, pn = 0, Yc = null;
  function rl() {
    if ((dt & 2) !== 0 && ct !== 0)
      return ct & -ct;
    if (b.T !== null) {
      var t = oa;
      return t !== 0 ? t : Vc();
    }
    return qf();
  }
  function xs() {
    Sl === 0 && (Sl = (ct & 536870912) === 0 || rt ? Uf() : 536870912);
    var t = pl.current;
    return t !== null && (t.flags |= 32), Sl;
  }
  function sl(t, l, e) {
    (t === xt && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (za(t, 0), ve(
      t,
      ct,
      Sl,
      !1
    )), Ba(t, e), ((dt & 2) === 0 || t !== xt) && (t === xt && ((dt & 2) === 0 && (Xe |= e), Mt === 4 && ve(
      t,
      ct,
      Sl,
      !1
    )), wl(t));
  }
  function Ts(t, l, e) {
    if ((dt & 6) !== 0) throw Error(r(327));
    var a = !e && (l & 124) === 0 && (l & t.expiredLanes) === 0 || qa(t, l), n = a ? Eh(t, l) : Gc(t, l, !0), u = a;
    do {
      if (n === 0) {
        pa && !a && ve(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, u && !Th(e)) {
          n = Gc(t, l, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = l, t.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              n = bn;
              var o = c.current.memoizedState.isDehydrated;
              if (o && (za(c, i).flags |= 256), i = Gc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Uc && !o) {
                  c.errorRecoveryDisabledLanes |= u, Xe |= u, n = 4;
                  break t;
                }
                u = ll, ll = n, u !== null && (ll === null ? ll = u : ll.push.apply(
                  ll,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          za(t, 0), ve(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              ve(
                a,
                l,
                Sl,
                !me
              );
              break t;
            case 2:
              ll = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (n = Hc + 300 - Ml(), 10 < n)) {
            if (ve(
              a,
              l,
              Sl,
              !me
            ), jn(a, 0, !0) !== 0) break t;
            a.timeoutHandle = Fs(
              zs.bind(
                null,
                a,
                e,
                ll,
                Mu,
                Nc,
                l,
                Sl,
                Xe,
                Sa,
                me,
                u,
                2,
                -0,
                0
              ),
              n
            );
            break t;
          }
          zs(
            a,
            e,
            ll,
            Mu,
            Nc,
            l,
            Sl,
            Xe,
            Sa,
            me,
            u,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    wl(t);
  }
  function zs(t, l, e, a, n, u, i, c, o, g, S, E, y, v) {
    if (t.timeoutHandle = -1, E = l.subtreeFlags, (E & 8192 || (E & 16785408) === 16785408) && (_n = { stylesheets: null, count: 0, unsuspend: a0 }, ys(l), E = u0(), E !== null)) {
      t.cancelPendingCommit = E(
        Rs.bind(
          null,
          t,
          l,
          u,
          e,
          a,
          n,
          i,
          c,
          o,
          S,
          1,
          y,
          v
        )
      ), ve(t, u, i, !g);
      return;
    }
    Rs(
      t,
      l,
      u,
      e,
      a,
      n,
      i,
      c,
      o
    );
  }
  function Th(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!ul(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function ve(t, l, e, a) {
    l &= ~wc, l &= ~Xe, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var n = l; 0 < n; ) {
      var u = 31 - nl(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    e !== 0 && Nf(t, e, l);
  }
  function Ou() {
    return (dt & 6) === 0 ? (Sn(0), !1) : !0;
  }
  function jc() {
    if (nt !== null) {
      if (mt === 0)
        var t = nt.return;
      else
        t = nt, Cl = qe = null, lc(t), ga = null, rn = 0, t = nt;
      for (; t !== null; )
        es(t.alternate, t), t = t.return;
      nt = null;
    }
  }
  function za(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, Gh(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), jc(), xt = t, nt = e = Bl(t.current, null), ct = l, mt = 0, ol = null, me = !1, pa = qa(t, l), Uc = !1, Sa = Sl = wc = Xe = he = Mt = 0, ll = bn = null, Nc = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var n = 31 - nl(a), u = 1 << n;
        l |= t[n], a &= ~u;
      }
    return Kl = l, $n(), e;
  }
  function Es(t, l) {
    P = null, b.H = gu, l === tn || l === uu ? (l = Xo(), mt = 3) : l === jo ? (l = Xo(), mt = 4) : mt = l === Qr ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, ol = l, nt === null && (Mt = 1, Su(
      t,
      gl(l, t.current)
    ));
  }
  function As() {
    var t = b.H;
    return b.H = gu, t === null ? gu : t;
  }
  function _s() {
    var t = b.A;
    return b.A = Sh, t;
  }
  function Cc() {
    Mt = 4, me || (ct & 4194048) !== ct && pl.current !== null || (pa = !0), (he & 134217727) === 0 && (Xe & 134217727) === 0 || xt === null || ve(
      xt,
      ct,
      Sl,
      !1
    );
  }
  function Gc(t, l, e) {
    var a = dt;
    dt |= 2;
    var n = As(), u = _s();
    (xt !== t || ct !== l) && (Mu = null, za(t, l)), l = !1;
    var i = Mt;
    t: do
      try {
        if (mt !== 0 && nt !== null) {
          var c = nt, o = ol;
          switch (mt) {
            case 8:
              jc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              pl.current === null && (l = !0);
              var g = mt;
              if (mt = 0, ol = null, Ea(t, c, o, g), e && pa) {
                i = 0;
                break t;
              }
              break;
            default:
              g = mt, mt = 0, ol = null, Ea(t, c, o, g);
          }
        }
        zh(), i = Mt;
        break;
      } catch (S) {
        Es(t, S);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Cl = qe = null, dt = a, b.H = n, b.A = u, nt === null && (xt = null, ct = 0, $n()), i;
  }
  function zh() {
    for (; nt !== null; ) Ms(nt);
  }
  function Eh(t, l) {
    var e = dt;
    dt |= 2;
    var a = As(), n = _s();
    xt !== t || ct !== l ? (Mu = null, _u = Ml() + 500, za(t, l)) : pa = qa(
      t,
      l
    );
    t: do
      try {
        if (mt !== 0 && nt !== null) {
          l = nt;
          var u = ol;
          l: switch (mt) {
            case 1:
              mt = 0, ol = null, Ea(t, l, u, 1);
              break;
            case 2:
            case 9:
              if (Co(u)) {
                mt = 0, ol = null, Os(l);
                break;
              }
              l = function() {
                mt !== 2 && mt !== 9 || xt !== t || (mt = 7), wl(t);
              }, u.then(l, l);
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              Co(u) ? (mt = 0, ol = null, Os(l)) : (mt = 0, ol = null, Ea(t, l, u, 7));
              break;
            case 5:
              var i = null;
              switch (nt.tag) {
                case 26:
                  i = nt.memoizedState;
                case 5:
                case 27:
                  var c = nt;
                  if (!i || od(i)) {
                    mt = 0, ol = null;
                    var o = c.sibling;
                    if (o !== null) nt = o;
                    else {
                      var g = c.return;
                      g !== null ? (nt = g, Du(g)) : nt = null;
                    }
                    break l;
                  }
              }
              mt = 0, ol = null, Ea(t, l, u, 5);
              break;
            case 6:
              mt = 0, ol = null, Ea(t, l, u, 6);
              break;
            case 8:
              jc(), Mt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        Ah();
        break;
      } catch (S) {
        Es(t, S);
      }
    while (!0);
    return Cl = qe = null, b.H = a, b.A = n, dt = e, nt !== null ? 0 : (xt = null, ct = 0, $n(), Mt);
  }
  function Ah() {
    for (; nt !== null && !Kd(); )
      Ms(nt);
  }
  function Ms(t) {
    var l = ts(t.alternate, t, Kl);
    t.memoizedProps = t.pendingProps, l === null ? Du(t) : nt = l;
  }
  function Os(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Jr(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          ct
        );
        break;
      case 11:
        l = Jr(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          ct
        );
        break;
      case 5:
        lc(l);
      default:
        es(e, l), l = nt = Do(l, Kl), l = ts(e, l, Kl);
    }
    t.memoizedProps = t.pendingProps, l === null ? Du(t) : nt = l;
  }
  function Ea(t, l, e, a) {
    Cl = qe = null, lc(l), ga = null, rn = 0;
    var n = l.return;
    try {
      if (hh(
        t,
        n,
        l,
        e,
        ct
      )) {
        Mt = 1, Su(
          t,
          gl(e, t.current)
        ), nt = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw nt = n, u;
      Mt = 1, Su(
        t,
        gl(e, t.current)
      ), nt = null;
      return;
    }
    l.flags & 32768 ? (rt || a === 1 ? t = !0 : pa || (ct & 536870912) !== 0 ? t = !1 : (me = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = pl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ds(l, t)) : Du(l);
  }
  function Du(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Ds(
          l,
          me
        );
        return;
      }
      t = l.return;
      var e = yh(
        l.alternate,
        l,
        Kl
      );
      if (e !== null) {
        nt = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        nt = l;
        return;
      }
      nt = l = t;
    } while (l !== null);
    Mt === 0 && (Mt = 5);
  }
  function Ds(t, l) {
    do {
      var e = vh(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, nt = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        nt = t;
        return;
      }
      nt = t = e;
    } while (t !== null);
    Mt = 6, nt = null;
  }
  function Rs(t, l, e, a, n, u, i, c, o) {
    t.cancelPendingCommit = null;
    do
      Ru();
    while (Lt !== 0);
    if ((dt & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === t.current) throw Error(r(177));
      if (u = l.lanes | l.childLanes, u |= Ri, am(
        t,
        e,
        u,
        i,
        c,
        o
      ), t === xt && (nt = xt = null, ct = 0), xa = l, ye = t, Ta = e, qc = u, Bc = n, Ss = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Dh(qn, function() {
        return qs(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, n = D.p, D.p = 2, i = dt, dt |= 4;
        try {
          bh(t, l, e);
        } finally {
          dt = i, D.p = n, b.T = a;
        }
      }
      Lt = 1, Us(), ws(), Ns();
    }
  }
  function Us() {
    if (Lt === 1) {
      Lt = 0;
      var t = ye, l = xa, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = b.T, b.T = null;
        var a = D.p;
        D.p = 2;
        var n = dt;
        dt |= 4;
        try {
          ms(l, t);
          var u = Ic, i = po(t.containerInfo), c = u.focusedElem, o = u.selectionRange;
          if (i !== c && c && c.ownerDocument && bo(
            c.ownerDocument.documentElement,
            c
          )) {
            if (o !== null && Ai(c)) {
              var g = o.start, S = o.end;
              if (S === void 0 && (S = g), "selectionStart" in c)
                c.selectionStart = g, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var E = c.ownerDocument || document, y = E && E.defaultView || window;
                if (y.getSelection) {
                  var v = y.getSelection(), V = c.textContent.length, X = Math.min(o.start, V), vt = o.end === void 0 ? X : Math.min(o.end, V);
                  !v.extend && X > vt && (i = vt, vt = X, X = i);
                  var m = vo(
                    c,
                    X
                  ), d = vo(
                    c,
                    vt
                  );
                  if (m && d && (v.rangeCount !== 1 || v.anchorNode !== m.node || v.anchorOffset !== m.offset || v.focusNode !== d.node || v.focusOffset !== d.offset)) {
                    var h = E.createRange();
                    h.setStart(m.node, m.offset), v.removeAllRanges(), X > vt ? (v.addRange(h), v.extend(d.node, d.offset)) : (h.setEnd(d.node, d.offset), v.addRange(h));
                  }
                }
              }
            }
            for (E = [], v = c; v = v.parentNode; )
              v.nodeType === 1 && E.push({
                element: v,
                left: v.scrollLeft,
                top: v.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < E.length; c++) {
              var T = E[c];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          Qu = !!Fc, Ic = Fc = null;
        } finally {
          dt = n, D.p = a, b.T = e;
        }
      }
      t.current = l, Lt = 2;
    }
  }
  function ws() {
    if (Lt === 2) {
      Lt = 0;
      var t = ye, l = xa, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = b.T, b.T = null;
        var a = D.p;
        D.p = 2;
        var n = dt;
        dt |= 4;
        try {
          os(t, l.alternate, l);
        } finally {
          dt = n, D.p = a, b.T = e;
        }
      }
      Lt = 3;
    }
  }
  function Ns() {
    if (Lt === 4 || Lt === 3) {
      Lt = 0, Jd();
      var t = ye, l = xa, e = Ta, a = Ss;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Lt = 5 : (Lt = 0, xa = ye = null, Hs(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (ge = null), ni(e), l = l.stateNode, al && typeof al.onCommitFiberRoot == "function")
        try {
          al.onCommitFiberRoot(
            Ha,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = b.T, n = D.p, D.p = 2, b.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = l, D.p = n;
        }
      }
      (Ta & 3) !== 0 && Ru(), wl(t), n = t.pendingLanes, (e & 4194090) !== 0 && (n & 42) !== 0 ? t === Yc ? pn++ : (pn = 0, Yc = t) : pn = 0, Sn(0);
    }
  }
  function Hs(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Ia(l)));
  }
  function Ru(t) {
    return Us(), ws(), Ns(), qs();
  }
  function qs() {
    if (Lt !== 5) return !1;
    var t = ye, l = qc;
    qc = 0;
    var e = ni(Ta), a = b.T, n = D.p;
    try {
      D.p = 32 > e ? 32 : e, b.T = null, e = Bc, Bc = null;
      var u = ye, i = Ta;
      if (Lt = 0, xa = ye = null, Ta = 0, (dt & 6) !== 0) throw Error(r(331));
      var c = dt;
      if (dt |= 4, bs(u.current), gs(
        u,
        u.current,
        i,
        e
      ), dt = c, Sn(0, !1), al && typeof al.onPostCommitFiberRoot == "function")
        try {
          al.onPostCommitFiberRoot(Ha, u);
        } catch {
        }
      return !0;
    } finally {
      D.p = n, b.T = a, Hs(t, l);
    }
  }
  function Bs(t, l, e) {
    l = gl(e, l), l = gc(t.stateNode, l, 2), t = ie(t, l, 2), t !== null && (Ba(t, 2), wl(t));
  }
  function pt(t, l, e) {
    if (t.tag === 3)
      Bs(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Bs(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ge === null || !ge.has(a))) {
            t = gl(e, t), e = Gr(2), a = ie(l, e, 2), a !== null && (Xr(
              e,
              a,
              l,
              t
            ), Ba(a, 2), wl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Xc(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new xh();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(e) || (Uc = !0, n.add(e), t = _h.bind(null, t, l, e), l.then(t, t));
  }
  function _h(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, xt === t && (ct & e) === e && (Mt === 4 || Mt === 3 && (ct & 62914560) === ct && 300 > Ml() - Hc ? (dt & 2) === 0 && za(t, 0) : wc |= e, Sa === ct && (Sa = 0)), wl(t);
  }
  function Ys(t, l) {
    l === 0 && (l = wf()), t = ua(t, l), t !== null && (Ba(t, l), wl(t));
  }
  function Mh(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Ys(t, e);
  }
  function Oh(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(l), Ys(t, e);
  }
  function Dh(t, l) {
    return ti(t, l);
  }
  var Uu = null, Aa = null, Qc = !1, wu = !1, Zc = !1, Qe = 0;
  function wl(t) {
    t !== Aa && t.next === null && (Aa === null ? Uu = Aa = t : Aa = Aa.next = t), wu = !0, Qc || (Qc = !0, Uh());
  }
  function Sn(t, l) {
    if (!Zc && wu) {
      Zc = !0;
      do
        for (var e = !1, a = Uu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              u = (1 << 31 - nl(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, Xs(a, u));
          } else
            u = ct, u = jn(
              a,
              a === xt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || qa(a, u) || (e = !0, Xs(a, u));
          a = a.next;
        }
      while (e);
      Zc = !1;
    }
  }
  function Rh() {
    js();
  }
  function js() {
    wu = Qc = !1;
    var t = 0;
    Qe !== 0 && (Ch() && (t = Qe), Qe = 0);
    for (var l = Ml(), e = null, a = Uu; a !== null; ) {
      var n = a.next, u = Cs(a, l);
      u === 0 ? (a.next = null, e === null ? Uu = n : e.next = n, n === null && (Aa = e)) : (e = a, (t !== 0 || (u & 3) !== 0) && (wu = !0)), a = n;
    }
    Sn(t);
  }
  function Cs(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - nl(u), c = 1 << i, o = n[i];
      o === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = em(c, l)) : o <= l && (t.expiredLanes |= c), u &= ~c;
    }
    if (l = xt, e = ct, e = jn(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && li(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || qa(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && li(a), ni(e)) {
        case 2:
        case 8:
          e = Df;
          break;
        case 32:
          e = qn;
          break;
        case 268435456:
          e = Rf;
          break;
        default:
          e = qn;
      }
      return a = Gs.bind(null, t), e = ti(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && li(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Gs(t, l) {
    if (Lt !== 0 && Lt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Ru() && t.callbackNode !== e)
      return null;
    var a = ct;
    return a = jn(
      t,
      t === xt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Ts(t, a, l), Cs(t, Ml()), t.callbackNode != null && t.callbackNode === e ? Gs.bind(null, t) : null);
  }
  function Xs(t, l) {
    if (Ru()) return null;
    Ts(t, l, !0);
  }
  function Uh() {
    Xh(function() {
      (dt & 6) !== 0 ? ti(
        Of,
        Rh
      ) : js();
    });
  }
  function Vc() {
    return Qe === 0 && (Qe = Uf()), Qe;
  }
  function Qs(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Zn("" + t);
  }
  function Zs(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function wh(t, l, e, a, n) {
    if (l === "submit" && e && e.stateNode === n) {
      var u = Qs(
        (n[Ft] || null).action
      ), i = a.submitter;
      i && (l = (l = i[Ft] || null) ? Qs(l.formAction) : i.getAttribute("formAction"), l !== null && (u = l, i = null));
      var c = new Kn(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Qe !== 0) {
                  var o = i ? Zs(n, i) : new FormData(n);
                  rc(
                    e,
                    {
                      pending: !0,
                      data: o,
                      method: n.method,
                      action: u
                    },
                    null,
                    o
                  );
                }
              } else
                typeof u == "function" && (c.preventDefault(), o = i ? Zs(n, i) : new FormData(n), rc(
                  e,
                  {
                    pending: !0,
                    data: o,
                    method: n.method,
                    action: u
                  },
                  u,
                  o
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Lc = 0; Lc < Di.length; Lc++) {
    var kc = Di[Lc], Nh = kc.toLowerCase(), Hh = kc[0].toUpperCase() + kc.slice(1);
    zl(
      Nh,
      "on" + Hh
    );
  }
  zl(To, "onAnimationEnd"), zl(zo, "onAnimationIteration"), zl(Eo, "onAnimationStart"), zl("dblclick", "onDoubleClick"), zl("focusin", "onFocus"), zl("focusout", "onBlur"), zl(Fm, "onTransitionRun"), zl(Im, "onTransitionStart"), zl(Pm, "onTransitionCancel"), zl(Ao, "onTransitionEnd"), We("onMouseEnter", ["mouseout", "mouseover"]), We("onMouseLeave", ["mouseout", "mouseover"]), We("onPointerEnter", ["pointerout", "pointerover"]), We("onPointerLeave", ["pointerout", "pointerover"]), _e(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _e(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _e("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _e(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _e(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _e(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var xn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), qh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn)
  );
  function Vs(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], o = c.instance, g = c.currentTarget;
            if (c = c.listener, o !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = g;
            try {
              u(n);
            } catch (S) {
              pu(S);
            }
            n.currentTarget = null, u = o;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], o = c.instance, g = c.currentTarget, c = c.listener, o !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = g;
            try {
              u(n);
            } catch (S) {
              pu(S);
            }
            n.currentTarget = null, u = o;
          }
      }
    }
  }
  function ut(t, l) {
    var e = l[ui];
    e === void 0 && (e = l[ui] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (Ls(l, t, 2, !1), e.add(a));
  }
  function Kc(t, l, e) {
    var a = 0;
    l && (a |= 4), Ls(
      e,
      t,
      a,
      l
    );
  }
  var Nu = "_reactListening" + Math.random().toString(36).slice(2);
  function Jc(t) {
    if (!t[Nu]) {
      t[Nu] = !0, Yf.forEach(function(e) {
        e !== "selectionchange" && (qh.has(e) || Kc(e, !1, t), Kc(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Nu] || (l[Nu] = !0, Kc("selectionchange", !1, l));
    }
  }
  function Ls(t, l, e, a) {
    switch (gd(l)) {
      case 2:
        var n = f0;
        break;
      case 8:
        n = o0;
        break;
      default:
        n = of;
    }
    e = n.bind(
      null,
      l,
      e,
      t
    ), n = void 0, !yi || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: n
    }) : t.addEventListener(l, e, !0) : n !== void 0 ? t.addEventListener(l, e, {
      passive: n
    }) : t.addEventListener(l, e, !1);
  }
  function Wc(t, l, e, a, n) {
    var u = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var o = i.tag;
              if ((o === 3 || o === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = ke(c), i === null) return;
            if (o = i.tag, o === 5 || o === 6 || o === 26 || o === 27) {
              a = u = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Ff(function() {
      var g = u, S = hi(e), E = [];
      t: {
        var y = _o.get(t);
        if (y !== void 0) {
          var v = Kn, V = t;
          switch (t) {
            case "keypress":
              if (Ln(e) === 0) break t;
            case "keydown":
            case "keyup":
              v = Dm;
              break;
            case "focusin":
              V = "focus", v = Si;
              break;
            case "focusout":
              V = "blur", v = Si;
              break;
            case "beforeblur":
            case "afterblur":
              v = Si;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = to;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = vm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = wm;
              break;
            case To:
            case zo:
            case Eo:
              v = Sm;
              break;
            case Ao:
              v = Hm;
              break;
            case "scroll":
            case "scrollend":
              v = gm;
              break;
            case "wheel":
              v = Bm;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = Tm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = eo;
              break;
            case "toggle":
            case "beforetoggle":
              v = jm;
          }
          var X = (l & 4) !== 0, vt = !X && (t === "scroll" || t === "scrollend"), m = X ? y !== null ? y + "Capture" : null : y;
          X = [];
          for (var d = g, h; d !== null; ) {
            var T = d;
            if (h = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || h === null || m === null || (T = Ca(d, m), T != null && X.push(
              Tn(d, T, h)
            )), vt) break;
            d = d.return;
          }
          0 < X.length && (y = new v(
            y,
            V,
            null,
            e,
            S
          ), E.push({ event: y, listeners: X }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (y = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout", y && e !== mi && (V = e.relatedTarget || e.fromElement) && (ke(V) || V[Le]))
            break t;
          if ((v || y) && (y = S.window === S ? S : (y = S.ownerDocument) ? y.defaultView || y.parentWindow : window, v ? (V = e.relatedTarget || e.toElement, v = g, V = V ? ke(V) : null, V !== null && (vt = H(V), X = V.tag, V !== vt || X !== 5 && X !== 27 && X !== 6) && (V = null)) : (v = null, V = g), v !== V)) {
            if (X = to, T = "onMouseLeave", m = "onMouseEnter", d = "mouse", (t === "pointerout" || t === "pointerover") && (X = eo, T = "onPointerLeave", m = "onPointerEnter", d = "pointer"), vt = v == null ? y : ja(v), h = V == null ? y : ja(V), y = new X(
              T,
              d + "leave",
              v,
              e,
              S
            ), y.target = vt, y.relatedTarget = h, T = null, ke(S) === g && (X = new X(
              m,
              d + "enter",
              V,
              e,
              S
            ), X.target = h, X.relatedTarget = vt, T = X), vt = T, v && V)
              l: {
                for (X = v, m = V, d = 0, h = X; h; h = _a(h))
                  d++;
                for (h = 0, T = m; T; T = _a(T))
                  h++;
                for (; 0 < d - h; )
                  X = _a(X), d--;
                for (; 0 < h - d; )
                  m = _a(m), h--;
                for (; d--; ) {
                  if (X === m || m !== null && X === m.alternate)
                    break l;
                  X = _a(X), m = _a(m);
                }
                X = null;
              }
            else X = null;
            v !== null && ks(
              E,
              y,
              v,
              X,
              !1
            ), V !== null && vt !== null && ks(
              E,
              vt,
              V,
              X,
              !0
            );
          }
        }
        t: {
          if (y = g ? ja(g) : window, v = y.nodeName && y.nodeName.toLowerCase(), v === "select" || v === "input" && y.type === "file")
            var B = ro;
          else if (fo(y))
            if (so)
              B = Jm;
            else {
              B = km;
              var et = Lm;
            }
          else
            v = y.nodeName, !v || v.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? g && di(g.elementType) && (B = ro) : B = Km;
          if (B && (B = B(t, g))) {
            oo(
              E,
              B,
              e,
              S
            );
            break t;
          }
          et && et(t, y, g), t === "focusout" && g && y.type === "number" && g.memoizedProps.value != null && si(y, "number", y.value);
        }
        switch (et = g ? ja(g) : window, t) {
          case "focusin":
            (fo(et) || et.contentEditable === "true") && (ea = et, _i = g, Ka = null);
            break;
          case "focusout":
            Ka = _i = ea = null;
            break;
          case "mousedown":
            Mi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mi = !1, So(E, e, S);
            break;
          case "selectionchange":
            if ($m) break;
          case "keydown":
          case "keyup":
            So(E, e, S);
        }
        var C;
        if (Ti)
          t: {
            switch (t) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break t;
              case "compositionend":
                Q = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break t;
            }
            Q = void 0;
          }
        else
          la ? io(t, e) && (Q = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (Q = "onCompositionStart");
        Q && (ao && e.locale !== "ko" && (la || Q !== "onCompositionStart" ? Q === "onCompositionEnd" && la && (C = If()) : (ee = S, vi = "value" in ee ? ee.value : ee.textContent, la = !0)), et = Hu(g, Q), 0 < et.length && (Q = new lo(
          Q,
          t,
          null,
          e,
          S
        ), E.push({ event: Q, listeners: et }), C ? Q.data = C : (C = co(e), C !== null && (Q.data = C)))), (C = Gm ? Xm(t, e) : Qm(t, e)) && (Q = Hu(g, "onBeforeInput"), 0 < Q.length && (et = new lo(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          S
        ), E.push({
          event: et,
          listeners: Q
        }), et.data = C)), wh(
          E,
          t,
          g,
          e,
          S
        );
      }
      Vs(E, l);
    });
  }
  function Tn(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Hu(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ca(t, e), n != null && a.unshift(
        Tn(t, n, u)
      ), n = Ca(t, l), n != null && a.push(
        Tn(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function _a(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ks(t, l, e, a, n) {
    for (var u = l._reactName, i = []; e !== null && e !== a; ) {
      var c = e, o = c.alternate, g = c.stateNode;
      if (c = c.tag, o !== null && o === a) break;
      c !== 5 && c !== 26 && c !== 27 || g === null || (o = g, n ? (g = Ca(e, u), g != null && i.unshift(
        Tn(e, g, o)
      )) : n || (g = Ca(e, u), g != null && i.push(
        Tn(e, g, o)
      ))), e = e.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var Bh = /\r\n?/g, Yh = /\u0000|\uFFFD/g;
  function Ks(t) {
    return (typeof t == "string" ? t : "" + t).replace(Bh, `
`).replace(Yh, "");
  }
  function Js(t, l) {
    return l = Ks(l), Ks(t) === l;
  }
  function qu() {
  }
  function yt(t, l, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || Ie(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && Ie(t, "" + a);
        break;
      case "className":
        Gn(t, "class", a);
        break;
      case "tabIndex":
        Gn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gn(t, e, a);
        break;
      case "style":
        Wf(t, a, u);
        break;
      case "data":
        if (l !== "object") {
          Gn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Zn("" + a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (e === "formAction" ? (l !== "input" && yt(t, l, "name", n.name, n, null), yt(
            t,
            l,
            "formEncType",
            n.formEncType,
            n,
            null
          ), yt(
            t,
            l,
            "formMethod",
            n.formMethod,
            n,
            null
          ), yt(
            t,
            l,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (yt(t, l, "encType", n.encType, n, null), yt(t, l, "method", n.method, n, null), yt(t, l, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Zn("" + a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = qu);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = Zn("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        ut("beforetoggle", t), ut("toggle", t), Cn(t, "popover", a);
        break;
      case "xlinkActuate":
        Hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Hl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Hl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Hl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Cn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = mm.get(e) || e, Cn(t, e, a));
    }
  }
  function $c(t, l, e, a, n, u) {
    switch (e) {
      case "style":
        Wf(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Ie(t, a) : (typeof a == "number" || typeof a == "bigint") && Ie(t, "" + a);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = qu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!jf.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), l = e.slice(2, n ? e.length - 7 : void 0), u = t[Ft] || null, u = u != null ? u[e] : null, typeof u == "function" && t.removeEventListener(l, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, n);
              break t;
            }
            e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : Cn(t, e, a);
          }
    }
  }
  function kt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ut("error", t), ut("load", t);
        var a = !1, n = !1, u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, l));
                default:
                  yt(t, l, u, i, e, null);
              }
          }
        n && yt(t, l, "srcSet", e.srcSet, e, null), a && yt(t, l, "src", e.src, e, null);
        return;
      case "input":
        ut("invalid", t);
        var c = u = i = n = null, o = null, g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var S = e[a];
            if (S != null)
              switch (a) {
                case "name":
                  n = S;
                  break;
                case "type":
                  i = S;
                  break;
                case "checked":
                  o = S;
                  break;
                case "defaultChecked":
                  g = S;
                  break;
                case "value":
                  u = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(r(137, l));
                  break;
                default:
                  yt(t, l, a, S, e, null);
              }
          }
        Lf(
          t,
          u,
          c,
          o,
          g,
          i,
          n,
          !1
        ), Xn(t);
        return;
      case "select":
        ut("invalid", t), a = i = u = null;
        for (n in e)
          if (e.hasOwnProperty(n) && (c = e[n], c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                yt(t, l, n, c, e, null);
            }
        l = u, e = i, t.multiple = !!a, l != null ? Fe(t, !!a, l, !1) : e != null && Fe(t, !!a, e, !0);
        return;
      case "textarea":
        ut("invalid", t), u = n = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                yt(t, l, i, c, e, null);
            }
        Kf(t, a, n, u), Xn(t);
        return;
      case "option":
        for (o in e)
          if (e.hasOwnProperty(o) && (a = e[o], a != null))
            switch (o) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                yt(t, l, o, a, e, null);
            }
        return;
      case "dialog":
        ut("beforetoggle", t), ut("toggle", t), ut("cancel", t), ut("close", t);
        break;
      case "iframe":
      case "object":
        ut("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < xn.length; a++)
          ut(xn[a], t);
        break;
      case "image":
        ut("error", t), ut("load", t);
        break;
      case "details":
        ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ut("error", t), ut("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (g in e)
          if (e.hasOwnProperty(g) && (a = e[g], a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, l));
              default:
                yt(t, l, g, a, e, null);
            }
        return;
      default:
        if (di(l)) {
          for (S in e)
            e.hasOwnProperty(S) && (a = e[S], a !== void 0 && $c(
              t,
              l,
              S,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && yt(t, l, c, a, e, null));
  }
  function jh(t, l, e, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, i = null, c = null, o = null, g = null, S = null;
        for (v in e) {
          var E = e[v];
          if (e.hasOwnProperty(v) && E != null)
            switch (v) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = E;
              default:
                a.hasOwnProperty(v) || yt(t, l, v, null, a, E);
            }
        }
        for (var y in a) {
          var v = a[y];
          if (E = e[y], a.hasOwnProperty(y) && (v != null || E != null))
            switch (y) {
              case "type":
                u = v;
                break;
              case "name":
                n = v;
                break;
              case "checked":
                g = v;
                break;
              case "defaultChecked":
                S = v;
                break;
              case "value":
                i = v;
                break;
              case "defaultValue":
                c = v;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(r(137, l));
                break;
              default:
                v !== E && yt(
                  t,
                  l,
                  y,
                  v,
                  a,
                  E
                );
            }
        }
        ri(
          t,
          i,
          c,
          o,
          g,
          S,
          u,
          n
        );
        return;
      case "select":
        v = i = c = y = null;
        for (u in e)
          if (o = e[u], e.hasOwnProperty(u) && o != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                v = o;
              default:
                a.hasOwnProperty(u) || yt(
                  t,
                  l,
                  u,
                  null,
                  a,
                  o
                );
            }
        for (n in a)
          if (u = a[n], o = e[n], a.hasOwnProperty(n) && (u != null || o != null))
            switch (n) {
              case "value":
                y = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== o && yt(
                  t,
                  l,
                  n,
                  u,
                  a,
                  o
                );
            }
        l = c, e = i, a = v, y != null ? Fe(t, !!e, y, !1) : !!a != !!e && (l != null ? Fe(t, !!e, l, !0) : Fe(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        v = y = null;
        for (c in e)
          if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(t, l, c, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                v = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && yt(t, l, i, n, a, u);
            }
        kf(t, y, v);
        return;
      case "option":
        for (var V in e)
          if (y = e[V], e.hasOwnProperty(V) && y != null && !a.hasOwnProperty(V))
            switch (V) {
              case "selected":
                t.selected = !1;
                break;
              default:
                yt(
                  t,
                  l,
                  V,
                  null,
                  a,
                  y
                );
            }
        for (o in a)
          if (y = a[o], v = e[o], a.hasOwnProperty(o) && y !== v && (y != null || v != null))
            switch (o) {
              case "selected":
                t.selected = y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                yt(
                  t,
                  l,
                  o,
                  y,
                  a,
                  v
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var X in e)
          y = e[X], e.hasOwnProperty(X) && y != null && !a.hasOwnProperty(X) && yt(t, l, X, null, a, y);
        for (g in a)
          if (y = a[g], v = e[g], a.hasOwnProperty(g) && y !== v && (y != null || v != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(r(137, l));
                break;
              default:
                yt(
                  t,
                  l,
                  g,
                  y,
                  a,
                  v
                );
            }
        return;
      default:
        if (di(l)) {
          for (var vt in e)
            y = e[vt], e.hasOwnProperty(vt) && y !== void 0 && !a.hasOwnProperty(vt) && $c(
              t,
              l,
              vt,
              void 0,
              a,
              y
            );
          for (S in a)
            y = a[S], v = e[S], !a.hasOwnProperty(S) || y === v || y === void 0 && v === void 0 || $c(
              t,
              l,
              S,
              y,
              a,
              v
            );
          return;
        }
    }
    for (var m in e)
      y = e[m], e.hasOwnProperty(m) && y != null && !a.hasOwnProperty(m) && yt(t, l, m, null, a, y);
    for (E in a)
      y = a[E], v = e[E], !a.hasOwnProperty(E) || y === v || y == null && v == null || yt(t, l, E, y, a, v);
  }
  var Fc = null, Ic = null;
  function Bu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ws(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $s(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Pc(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var tf = null;
  function Ch() {
    var t = window.event;
    return t && t.type === "popstate" ? t === tf ? !1 : (tf = t, !0) : (tf = null, !1);
  }
  var Fs = typeof setTimeout == "function" ? setTimeout : void 0, Gh = typeof clearTimeout == "function" ? clearTimeout : void 0, Is = typeof Promise == "function" ? Promise : void 0, Xh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Is < "u" ? function(t) {
    return Is.resolve(null).then(t).catch(Qh);
  } : Fs;
  function Qh(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function be(t) {
    return t === "head";
  }
  function Ps(t, l) {
    var e = l, a = 0, n = 0;
    do {
      var u = e.nextSibling;
      if (t.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$") {
          if (0 < a && 8 > a) {
            e = a;
            var i = t.ownerDocument;
            if (e & 1 && zn(i.documentElement), e & 2 && zn(i.body), e & 4)
              for (e = i.head, zn(e), i = e.firstChild; i; ) {
                var c = i.nextSibling, o = i.nodeName;
                i[Ya] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = c;
              }
          }
          if (n === 0) {
            t.removeChild(u), Un(l);
            return;
          }
          n--;
        } else
          e === "$" || e === "$?" || e === "$!" ? n++ : a = e.charCodeAt(0) - 48;
      else a = 0;
      e = u;
    } while (e);
    Un(l);
  }
  function lf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          lf(e), ii(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Zh(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var n = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Ya])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Al(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Vh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Al(t.nextSibling), t === null)) return null;
    return t;
  }
  function ef(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function Lh(t, l) {
    var e = t.ownerDocument;
    if (t.data !== "$?" || e.readyState === "complete")
      l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Al(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var af = null;
  function td(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ld(t, l, e) {
    switch (l = Bu(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function zn(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    ii(t);
  }
  var xl = /* @__PURE__ */ new Map(), ed = /* @__PURE__ */ new Set();
  function Yu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Jl = D.d;
  D.d = {
    f: kh,
    r: Kh,
    D: Jh,
    C: Wh,
    L: $h,
    m: Fh,
    X: Ph,
    S: Ih,
    M: t0
  };
  function kh() {
    var t = Jl.f(), l = Ou();
    return t || l;
  }
  function Kh(t) {
    var l = Ke(t);
    l !== null && l.tag === 5 && l.type === "form" ? Tr(l) : Jl.r(t);
  }
  var Ma = typeof document > "u" ? null : document;
  function ad(t, l, e) {
    var a = Ma;
    if (a && typeof l == "string" && l) {
      var n = hl(l);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), ed.has(n) || (ed.add(n), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), kt(l, "link", t), Gt(l), a.head.appendChild(l)));
    }
  }
  function Jh(t) {
    Jl.D(t), ad("dns-prefetch", t, null);
  }
  function Wh(t, l) {
    Jl.C(t, l), ad("preconnect", t, l);
  }
  function $h(t, l, e) {
    Jl.L(t, l, e);
    var a = Ma;
    if (a && t && l) {
      var n = 'link[rel="preload"][as="' + hl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + hl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + hl(
        e.imageSizes
      ) + '"]')) : n += '[href="' + hl(t) + '"]';
      var u = n;
      switch (l) {
        case "style":
          u = Oa(t);
          break;
        case "script":
          u = Da(t);
      }
      xl.has(u) || (t = R(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), xl.set(u, t), a.querySelector(n) !== null || l === "style" && a.querySelector(En(u)) || l === "script" && a.querySelector(An(u)) || (l = a.createElement("link"), kt(l, "link", t), Gt(l), a.head.appendChild(l)));
    }
  }
  function Fh(t, l) {
    Jl.m(t, l);
    var e = Ma;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + hl(a) + '"][href="' + hl(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Da(t);
      }
      if (!xl.has(u) && (t = R({ rel: "modulepreload", href: t }, l), xl.set(u, t), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(An(u)))
              return;
        }
        a = e.createElement("link"), kt(a, "link", t), Gt(a), e.head.appendChild(a);
      }
    }
  }
  function Ih(t, l, e) {
    Jl.S(t, l, e);
    var a = Ma;
    if (a && t) {
      var n = Je(a).hoistableStyles, u = Oa(t);
      l = l || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          En(u)
        ))
          c.loading = 5;
        else {
          t = R(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = xl.get(u)) && nf(t, e);
          var o = i = a.createElement("link");
          Gt(o), kt(o, "link", t), o._p = new Promise(function(g, S) {
            o.onload = g, o.onerror = S;
          }), o.addEventListener("load", function() {
            c.loading |= 1;
          }), o.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, ju(i, l, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i);
      }
    }
  }
  function Ph(t, l) {
    Jl.X(t, l);
    var e = Ma;
    if (e && t) {
      var a = Je(e).hoistableScripts, n = Da(t), u = a.get(n);
      u || (u = e.querySelector(An(n)), u || (t = R({ src: t, async: !0 }, l), (l = xl.get(n)) && uf(t, l), u = e.createElement("script"), Gt(u), kt(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function t0(t, l) {
    Jl.M(t, l);
    var e = Ma;
    if (e && t) {
      var a = Je(e).hoistableScripts, n = Da(t), u = a.get(n);
      u || (u = e.querySelector(An(n)), u || (t = R({ src: t, async: !0, type: "module" }, l), (l = xl.get(n)) && uf(t, l), u = e.createElement("script"), Gt(u), kt(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function nd(t, l, e, a) {
    var n = (n = L.current) ? Yu(n) : null;
    if (!n) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Oa(e.href), e = Je(
          n
        ).hoistableStyles, a = e.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = Oa(e.href);
          var u = Je(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            En(t)
          )) && !u._p && (i.instance = u, i.state.loading = 5), xl.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, xl.set(t, e), u || l0(
            n,
            t,
            e,
            i.state
          ))), l && a === null)
            throw Error(r(528, ""));
          return i;
        }
        if (l && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Da(e), e = Je(
          n
        ).hoistableScripts, a = e.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function Oa(t) {
    return 'href="' + hl(t) + '"';
  }
  function En(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ud(t) {
    return R({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function l0(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), kt(l, "link", e), Gt(l), t.head.appendChild(l));
  }
  function Da(t) {
    return '[src="' + hl(t) + '"]';
  }
  function An(t) {
    return "script[async]" + t;
  }
  function id(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + hl(e.href) + '"]'
          );
          if (a)
            return l.instance = a, Gt(a), a;
          var n = R({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Gt(a), kt(a, "style", n), ju(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          n = Oa(e.href);
          var u = t.querySelector(
            En(n)
          );
          if (u)
            return l.state.loading |= 4, l.instance = u, Gt(u), u;
          a = ud(e), (n = xl.get(n)) && nf(a, n), u = (t.ownerDocument || t).createElement("link"), Gt(u);
          var i = u;
          return i._p = new Promise(function(c, o) {
            i.onload = c, i.onerror = o;
          }), kt(u, "link", a), l.state.loading |= 4, ju(u, e.precedence, t), l.instance = u;
        case "script":
          return u = Da(e.src), (n = t.querySelector(
            An(u)
          )) ? (l.instance = n, Gt(n), n) : (a = e, (n = xl.get(u)) && (a = R({}, e), uf(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Gt(n), kt(n, "link", a), t.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, ju(a, e.precedence, t));
    return l.instance;
  }
  function ju(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === l) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function nf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function uf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Cu = null;
  function cd(t, l, e) {
    if (Cu === null) {
      var a = /* @__PURE__ */ new Map(), n = Cu = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = Cu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[Ya] || u[Kt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(l) || "";
        i = t + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function fd(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function e0(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        switch (l.rel) {
          case "stylesheet":
            return t = l.disabled, typeof l.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function od(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var _n = null;
  function a0() {
  }
  function n0(t, l, e) {
    if (_n === null) throw Error(r(475));
    var a = _n;
    if (l.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Oa(e.href), u = t.querySelector(
          En(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Gu.bind(a), t.then(a, a)), l.state.loading |= 4, l.instance = u, Gt(u);
          return;
        }
        u = t.ownerDocument || t, e = ud(e), (n = xl.get(n)) && nf(e, n), u = u.createElement("link"), Gt(u);
        var i = u;
        i._p = new Promise(function(c, o) {
          i.onload = c, i.onerror = o;
        }), kt(u, "link", e), l.instance = u;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (a.count++, l = Gu.bind(a), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  function u0() {
    if (_n === null) throw Error(r(475));
    var t = _n;
    return t.stylesheets && t.count === 0 && cf(t, t.stylesheets), 0 < t.count ? function(l) {
      var e = setTimeout(function() {
        if (t.stylesheets && cf(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a();
        }
      }, 6e4);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(e);
      };
    } : null;
  }
  function Gu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) cf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Xu = null;
  function cf(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Xu = /* @__PURE__ */ new Map(), l.forEach(i0, t), Xu = null, Gu.call(t));
  }
  function i0(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Xu.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Xu.set(t, e);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      n = l.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Gu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Mn = {
    $$typeof: St,
    Provider: null,
    Consumer: null,
    _currentValue: M,
    _currentValue2: M,
    _threadCount: 0
  };
  function c0(t, l, e, a, n, u, i, c) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ei(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ei(0), this.hiddenUpdates = ei(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function rd(t, l, e, a, n, u, i, c, o, g, S, E) {
    return t = new c0(
      t,
      l,
      e,
      i,
      c,
      o,
      g,
      E
    ), l = 1, u === !0 && (l |= 24), u = il(3, null, null, l), t.current = u, u.stateNode = t, l = Xi(), l.refCount++, t.pooledCache = l, l.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, Li(u), t;
  }
  function sd(t) {
    return t ? (t = ia, t) : ia;
  }
  function dd(t, l, e, a, n, u) {
    n = sd(n), a.context === null ? a.context = n : a.pendingContext = n, a = ue(l), a.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = ie(t, a, l), e !== null && (sl(e, t, l), en(e, t, l));
  }
  function md(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function ff(t, l) {
    md(t, l), (t = t.alternate) && md(t, l);
  }
  function hd(t) {
    if (t.tag === 13) {
      var l = ua(t, 67108864);
      l !== null && sl(l, t, 67108864), ff(t, 67108864);
    }
  }
  var Qu = !0;
  function f0(t, l, e, a) {
    var n = b.T;
    b.T = null;
    var u = D.p;
    try {
      D.p = 2, of(t, l, e, a);
    } finally {
      D.p = u, b.T = n;
    }
  }
  function o0(t, l, e, a) {
    var n = b.T;
    b.T = null;
    var u = D.p;
    try {
      D.p = 8, of(t, l, e, a);
    } finally {
      D.p = u, b.T = n;
    }
  }
  function of(t, l, e, a) {
    if (Qu) {
      var n = rf(a);
      if (n === null)
        Wc(
          t,
          l,
          a,
          Zu,
          e
        ), yd(t, a);
      else if (s0(
        n,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (yd(t, a), l & 4 && -1 < r0.indexOf(t)) {
        for (; n !== null; ) {
          var u = Ke(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Ae(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var o = 1 << 31 - nl(i);
                      c.entanglements[1] |= o, i &= ~o;
                    }
                    wl(u), (dt & 6) === 0 && (_u = Ml() + 500, Sn(0));
                  }
                }
                break;
              case 13:
                c = ua(u, 2), c !== null && sl(c, u, 2), Ou(), ff(u, 2);
            }
          if (u = rf(a), u === null && Wc(
            t,
            l,
            a,
            Zu,
            e
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Wc(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function rf(t) {
    return t = hi(t), sf(t);
  }
  var Zu = null;
  function sf(t) {
    if (Zu = null, t = ke(t), t !== null) {
      var l = H(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = w(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Zu = t, null;
  }
  function gd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Wd()) {
          case Of:
            return 2;
          case Df:
            return 8;
          case qn:
          case $d:
            return 32;
          case Rf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var df = !1, pe = null, Se = null, xe = null, On = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), Te = [], r0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function yd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        pe = null;
        break;
      case "dragenter":
      case "dragleave":
        Se = null;
        break;
      case "mouseover":
      case "mouseout":
        xe = null;
        break;
      case "pointerover":
      case "pointerout":
        On.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(l.pointerId);
    }
  }
  function Rn(t, l, e, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, l !== null && (l = Ke(l), l !== null && hd(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), t);
  }
  function s0(t, l, e, a, n) {
    switch (l) {
      case "focusin":
        return pe = Rn(
          pe,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return Se = Rn(
          Se,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return xe = Rn(
          xe,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return On.set(
          u,
          Rn(
            On.get(u) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Dn.set(
          u,
          Rn(
            Dn.get(u) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function vd(t) {
    var l = ke(t.target);
    if (l !== null) {
      var e = H(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = w(e), l !== null) {
            t.blockedOn = l, nm(t.priority, function() {
              if (e.tag === 13) {
                var a = rl();
                a = ai(a);
                var n = ua(e, a);
                n !== null && sl(n, e, a), ff(e, a);
              }
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Vu(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = rf(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        mi = a, e.target.dispatchEvent(a), mi = null;
      } else
        return l = Ke(e), l !== null && hd(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function bd(t, l, e) {
    Vu(t) && e.delete(l);
  }
  function d0() {
    df = !1, pe !== null && Vu(pe) && (pe = null), Se !== null && Vu(Se) && (Se = null), xe !== null && Vu(xe) && (xe = null), On.forEach(bd), Dn.forEach(bd);
  }
  function Lu(t, l) {
    t.blockedOn === l && (t.blockedOn = null, df || (df = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      d0
    )));
  }
  var ku = null;
  function pd(t) {
    ku !== t && (ku = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        ku === t && (ku = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], n = t[l + 2];
          if (typeof a != "function") {
            if (sf(a || e) === null)
              continue;
            break;
          }
          var u = Ke(e);
          u !== null && (t.splice(l, 3), l -= 3, rc(
            u,
            {
              pending: !0,
              data: n,
              method: e.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Un(t) {
    function l(o) {
      return Lu(o, t);
    }
    pe !== null && Lu(pe, t), Se !== null && Lu(Se, t), xe !== null && Lu(xe, t), On.forEach(l), Dn.forEach(l);
    for (var e = 0; e < Te.length; e++) {
      var a = Te[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Te.length && (e = Te[0], e.blockedOn === null); )
      vd(e), e.blockedOn === null && Te.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[Ft] || null;
        if (typeof u == "function")
          i || pd(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Ft] || null)
              c = i.formAction;
            else if (sf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), pd(e);
        }
      }
  }
  function mf(t) {
    this._internalRoot = t;
  }
  Ku.prototype.render = mf.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var e = l.current, a = rl();
    dd(e, a, t, l, null, null);
  }, Ku.prototype.unmount = mf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      dd(t.current, 2, null, t, null, null), Ou(), l[Le] = null;
    }
  };
  function Ku(t) {
    this._internalRoot = t;
  }
  Ku.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = qf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Te.length && l !== 0 && l < Te[e].priority; e++) ;
      Te.splice(e, 0, t), e === 0 && vd(t);
    }
  };
  var Sd = x.version;
  if (Sd !== "19.1.1")
    throw Error(
      r(
        527,
        Sd,
        "19.1.1"
      )
    );
  D.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = _(l), t = t !== null ? p(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var m0 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ju.isDisabled && Ju.supportsFiber)
      try {
        Ha = Ju.inject(
          m0
        ), al = Ju;
      } catch {
      }
  }
  return Nn.createRoot = function(t, l) {
    if (!U(t)) throw Error(r(299));
    var e = !1, a = "", n = Br, u = Yr, i = jr, c = null;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (c = l.unstable_transitionCallbacks)), l = rd(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      n,
      u,
      i,
      c,
      null
    ), t[Le] = l.current, Jc(t), new mf(l);
  }, Nn.hydrateRoot = function(t, l, e) {
    if (!U(t)) throw Error(r(299));
    var a = !1, n = "", u = Br, i = Yr, c = jr, o = null, g = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (o = e.unstable_transitionCallbacks), e.formState !== void 0 && (g = e.formState)), l = rd(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      n,
      u,
      i,
      c,
      o,
      g
    ), l.context = sd(null), e = l.current, a = rl(), a = ai(a), n = ue(a), n.callback = null, ie(e, n, a), e = a, l.current.lanes = e, Ba(l, e), wl(l), t[Le] = l.current, Jc(t), new Ku(l);
  }, Nn.version = "19.1.1", Nn;
}
var Rd;
function E0() {
  if (Rd) return yf.exports;
  Rd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (x) {
        console.error(x);
      }
  }
  return f(), yf.exports = z0(), yf.exports;
}
var A0 = E0(), _0 = Object.defineProperty, M0 = (f, x, z) => x in f ? _0(f, x, { enumerable: !0, configurable: !0, writable: !0, value: z }) : f[x] = z, Wu = (f, x, z) => M0(f, typeof x != "symbol" ? x + "" : x, z);
const O0 = {
  stringify: (f) => f ? "true" : "false",
  parse: (f) => /^[ty1-9]/i.test(f)
}, D0 = {
  stringify: (f) => f.name,
  parse: (f, x, z) => {
    const r = (() => {
      if (typeof window < "u" && f in window)
        return window[f];
      if (typeof global < "u" && f in global)
        return global[f];
    })();
    return typeof r == "function" ? r.bind(z) : void 0;
  }
}, R0 = {
  stringify: (f) => JSON.stringify(f),
  parse: (f) => JSON.parse(f)
}, U0 = {
  stringify: (f) => `${f}`,
  parse: (f) => parseFloat(f)
}, w0 = {
  stringify: (f) => f,
  parse: (f) => f
}, Sf = {
  string: w0,
  number: U0,
  boolean: O0,
  function: D0,
  json: R0
};
function N0(f) {
  return f.replace(
    /([a-z0-9])([A-Z])/g,
    (x, z, r) => `${z}-${r.toLowerCase()}`
  );
}
const $u = Symbol.for("r2wc.render"), Fu = Symbol.for("r2wc.connected"), Ze = Symbol.for("r2wc.context"), Wl = Symbol.for("r2wc.props");
function H0(f, x, z) {
  var r, U, H;
  x.props || (x.props = f.propTypes ? Object.keys(f.propTypes) : []), x.events || (x.events = []);
  const w = Array.isArray(x.props) ? x.props.slice() : Object.keys(x.props), k = Array.isArray(x.events) ? x.events.slice() : Object.keys(x.events), _ = {}, p = {}, R = {}, J = {};
  for (const W of w) {
    _[W] = Array.isArray(x.props) ? "string" : x.props[W];
    const Z = N0(W);
    R[W] = Z, J[Z] = W;
  }
  for (const W of k)
    p[W] = Array.isArray(x.events) ? {} : x.events[W];
  class lt extends HTMLElement {
    constructor() {
      super(), Wu(this, H, !0), Wu(this, U), Wu(this, r, {}), Wu(this, "container"), x.shadow ? this.container = this.attachShadow({
        mode: x.shadow
      }) : this.container = this, this[Wl].container = this.container;
      for (const Z of w) {
        const K = R[Z], F = this.getAttribute(K), ht = _[Z], Tt = ht ? Sf[ht] : null;
        Tt != null && Tt.parse && F && (this[Wl][Z] = Tt.parse(F, K, this));
      }
      for (const Z of k)
        this[Wl][Z] = (K) => {
          const F = Z.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(F, { detail: K, ...p[Z] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(J);
    }
    connectedCallback() {
      this[Fu] = !0, this[$u]();
    }
    disconnectedCallback() {
      this[Fu] = !1, this[Ze] && z.unmount(this[Ze]), delete this[Ze];
    }
    attributeChangedCallback(Z, K, F) {
      const ht = J[Z], Tt = _[ht], St = Tt ? Sf[Tt] : null;
      ht in _ && St != null && St.parse && F && (this[Wl][ht] = St.parse(F, Z, this), this[$u]());
    }
    [(H = Fu, U = Ze, r = Wl, $u)]() {
      this[Fu] && (this[Ze] ? z.update(this[Ze], this[Wl]) : this[Ze] = z.mount(
        this.container,
        f,
        this[Wl]
      ));
    }
  }
  for (const W of w) {
    const Z = R[W], K = _[W];
    Object.defineProperty(lt.prototype, W, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Wl][W];
      },
      set(F) {
        this[Wl][W] = F;
        const ht = K ? Sf[K] : null;
        if (ht != null && ht.stringify) {
          const Tt = ht.stringify(F, Z, this);
          this.getAttribute(Z) !== Tt && this.setAttribute(Z, Tt);
        } else
          this[$u]();
      }
    });
  }
  return lt;
}
function q0(f, x, z) {
  const r = A0.createRoot(f), U = qd.createElement(x, z);
  return r.render(U), {
    root: r,
    ReactComponent: x
  };
}
function B0({ root: f, ReactComponent: x }, z) {
  const r = qd.createElement(x, z);
  f.render(r);
}
function Y0({ root: f }) {
  f.unmount();
}
function j0(f, x = {}) {
  return H0(f, x, { mount: q0, update: B0, unmount: Y0 });
}
const C0 = '/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-green-500:oklch(72.3% .219 149.579);--color-gray-200:oklch(92.8% .006 264.531);--spacing:.25rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--radius-md:.375rem;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.mb-4{margin-bottom:calc(var(--spacing)*4)}.contents{display:contents}.flex{display:flex}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.h-4{height:calc(var(--spacing)*4)}.h-8{height:calc(var(--spacing)*8)}.min-h-screen{min-height:100vh}.w-12{width:calc(var(--spacing)*12)}.w-14{width:calc(var(--spacing)*14)}.w-24{width:calc(var(--spacing)*24)}.min-w-56{min-width:calc(var(--spacing)*56)}.shrink-0{flex-shrink:0}.animate-pulse{animation:var(--animate-pulse)}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.rounded-\\[var\\(--border-radius\\)\\]{border-radius:var(--border-radius)}.rounded-full{border-radius:3.40282e38px}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.bg-\\[var\\(--background-color\\)\\]{background-color:var(--background-color)}.bg-gray-200{background-color:var(--color-gray-200)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-4{padding-block:calc(var(--spacing)*4)}.text-center{text-align:center}.\\[font-family\\:var\\(--font-family\\)\\]{font-family:var(--font-family)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.leading-5{--tw-leading:calc(var(--spacing)*5);line-height:calc(var(--spacing)*5)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.text-\\[var\\(--text-color\\)\\]{color:var(--text-color)}.text-green-500{color:var(--color-green-500)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.uppercase{text-transform:uppercase}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.\\[box-shadow\\:0_4px_6px_-1px_rgb\\(0_0_0_\\/_0\\.1\\)\\,0_2px_4px_-2px_rgb\\(0_0_0_\\/_0\\.1\\)\\]{box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a}.\\[border\\:1px_solid_var\\(--border-color\\)\\]{border:1px solid var(--border-color)}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@keyframes pulse{50%{opacity:.5}}', G0 = ({ change24h: f }) => {
  if (f === null || isNaN(f))
    return /* @__PURE__ */ it.jsx("span", {});
  const x = f >= 0, z = x ? "text-green-500" : "text-red-500";
  return /* @__PURE__ */ it.jsxs("div", { className: `flex items-center gap-1 font-medium ${z}`, children: [
    /* @__PURE__ */ it.jsx("div", { className: "shrink-0", children: x ? /* @__PURE__ */ it.jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "size-5",
        children: [
          /* @__PURE__ */ it.jsx("path", { d: "M16 7h6v6" }),
          /* @__PURE__ */ it.jsx("path", { d: "m22 7-8.5 8.5-5-5L2 17" })
        ]
      }
    ) : /* @__PURE__ */ it.jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "size-5",
        children: [
          /* @__PURE__ */ it.jsx("path", { d: "M16 17h6v-6" }),
          /* @__PURE__ */ it.jsx("path", { d: "m22 17-8.5-8.5-5 5L2 7" })
        ]
      }
    ) }),
    /* @__PURE__ */ it.jsxs("span", { "aria-label": "24 Hour Change", className: "leading-5", children: [
      f.toFixed(2),
      "%"
    ] })
  ] });
};
function X0(f) {
  return isNaN(f) ? "-" : f.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 8
  });
}
const Q0 = ({ token: f }) => /* @__PURE__ */ it.jsxs(it.Fragment, { children: [
  /* @__PURE__ */ it.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "flex items-center gap-2", children: [
      f.image && /* @__PURE__ */ it.jsx(
        "img",
        {
          src: f.image || "",
          alt: `${f.name} logo`,
          className: "size-6 shrink-0"
        }
      ),
      /* @__PURE__ */ it.jsx("div", { children: /* @__PURE__ */ it.jsx(
        "p",
        {
          "aria-label": "Token Symbol",
          className: "uppercase text-base font-semibold",
          children: f.symbol
        }
      ) })
    ] }),
    /* @__PURE__ */ it.jsx(G0, { change24h: f.change24h })
  ] }),
  /* @__PURE__ */ it.jsx(
    "h1",
    {
      "aria-label": "Token Price",
      className: "text-2xl font-bold tracking-tight",
      children: f.priceUsd ? X0(f.priceUsd) : "$0.00"
    }
  )
] }), Z0 = () => /* @__PURE__ */ it.jsxs("div", { role: "status", "aria-label": "Loading Token Price", className: "animate-pulse", children: [
  /* @__PURE__ */ it.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ it.jsx("div", { className: "size-6 rounded-full bg-gray-200" }),
      /* @__PURE__ */ it.jsx("div", { children: /* @__PURE__ */ it.jsx("div", { className: "h-4 w-14 bg-gray-200 rounded-md" }) })
    ] }),
    /* @__PURE__ */ it.jsx("div", { className: "h-4 w-12 bg-gray-200 rounded-md" })
  ] }),
  /* @__PURE__ */ it.jsx("div", { className: "h-8 w-24 bg-gray-200 rounded-md" })
] }), V0 = ({ message: f }) => /* @__PURE__ */ it.jsx("div", { role: "alert", "aria-label": "Token Price Error", children: /* @__PURE__ */ it.jsx("p", { className: "text-center text-sm text-red-600", children: f }) });
function Bd(f) {
  var x, z, r = "";
  if (typeof f == "string" || typeof f == "number") r += f;
  else if (typeof f == "object") if (Array.isArray(f)) {
    var U = f.length;
    for (x = 0; x < U; x++) f[x] && (z = Bd(f[x])) && (r && (r += " "), r += z);
  } else for (z in f) f[z] && (r && (r += " "), r += z);
  return r;
}
function L0() {
  for (var f, x, z = 0, r = "", U = arguments.length; z < U; z++) (f = arguments[z]) && (x = Bd(f)) && (r && (r += " "), r += x);
  return r;
}
const Mf = "-", k0 = (f) => {
  const x = J0(f), {
    conflictingClassGroups: z,
    conflictingClassGroupModifiers: r
  } = f;
  return {
    getClassGroupId: (w) => {
      const k = w.split(Mf);
      return k[0] === "" && k.length !== 1 && k.shift(), Yd(k, x) || K0(w);
    },
    getConflictingClassGroupIds: (w, k) => {
      const _ = z[w] || [];
      return k && r[w] ? [..._, ...r[w]] : _;
    }
  };
}, Yd = (f, x) => {
  if (f.length === 0)
    return x.classGroupId;
  const z = f[0], r = x.nextPart.get(z), U = r ? Yd(f.slice(1), r) : void 0;
  if (U)
    return U;
  if (x.validators.length === 0)
    return;
  const H = f.join(Mf);
  return x.validators.find(({
    validator: w
  }) => w(H))?.classGroupId;
}, Ud = /^\[(.+)\]$/, K0 = (f) => {
  if (Ud.test(f)) {
    const x = Ud.exec(f)[1], z = x?.substring(0, x.indexOf(":"));
    if (z)
      return "arbitrary.." + z;
  }
}, J0 = (f) => {
  const {
    theme: x,
    classGroups: z
  } = f, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const U in z)
    zf(z[U], r, U, x);
  return r;
}, zf = (f, x, z, r) => {
  f.forEach((U) => {
    if (typeof U == "string") {
      const H = U === "" ? x : wd(x, U);
      H.classGroupId = z;
      return;
    }
    if (typeof U == "function") {
      if (W0(U)) {
        zf(U(r), x, z, r);
        return;
      }
      x.validators.push({
        validator: U,
        classGroupId: z
      });
      return;
    }
    Object.entries(U).forEach(([H, w]) => {
      zf(w, wd(x, H), z, r);
    });
  });
}, wd = (f, x) => {
  let z = f;
  return x.split(Mf).forEach((r) => {
    z.nextPart.has(r) || z.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), z = z.nextPart.get(r);
  }), z;
}, W0 = (f) => f.isThemeGetter, $0 = (f) => {
  if (f < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let x = 0, z = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const U = (H, w) => {
    z.set(H, w), x++, x > f && (x = 0, r = z, z = /* @__PURE__ */ new Map());
  };
  return {
    get(H) {
      let w = z.get(H);
      if (w !== void 0)
        return w;
      if ((w = r.get(H)) !== void 0)
        return U(H, w), w;
    },
    set(H, w) {
      z.has(H) ? z.set(H, w) : U(H, w);
    }
  };
}, Ef = "!", Af = ":", F0 = Af.length, I0 = (f) => {
  const {
    prefix: x,
    experimentalParseClassName: z
  } = f;
  let r = (U) => {
    const H = [];
    let w = 0, k = 0, _ = 0, p;
    for (let Z = 0; Z < U.length; Z++) {
      let K = U[Z];
      if (w === 0 && k === 0) {
        if (K === Af) {
          H.push(U.slice(_, Z)), _ = Z + F0;
          continue;
        }
        if (K === "/") {
          p = Z;
          continue;
        }
      }
      K === "[" ? w++ : K === "]" ? w-- : K === "(" ? k++ : K === ")" && k--;
    }
    const R = H.length === 0 ? U : U.substring(_), J = P0(R), lt = J !== R, W = p && p > _ ? p - _ : void 0;
    return {
      modifiers: H,
      hasImportantModifier: lt,
      baseClassName: J,
      maybePostfixModifierPosition: W
    };
  };
  if (x) {
    const U = x + Af, H = r;
    r = (w) => w.startsWith(U) ? H(w.substring(U.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: w,
      maybePostfixModifierPosition: void 0
    };
  }
  if (z) {
    const U = r;
    r = (H) => z({
      className: H,
      parseClassName: U
    });
  }
  return r;
}, P0 = (f) => f.endsWith(Ef) ? f.substring(0, f.length - 1) : f.startsWith(Ef) ? f.substring(1) : f, tg = (f) => {
  const x = Object.fromEntries(f.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const U = [];
    let H = [];
    return r.forEach((w) => {
      w[0] === "[" || x[w] ? (U.push(...H.sort(), w), H = []) : H.push(w);
    }), U.push(...H.sort()), U;
  };
}, lg = (f) => ({
  cache: $0(f.cacheSize),
  parseClassName: I0(f),
  sortModifiers: tg(f),
  ...k0(f)
}), eg = /\s+/, ag = (f, x) => {
  const {
    parseClassName: z,
    getClassGroupId: r,
    getConflictingClassGroupIds: U,
    sortModifiers: H
  } = x, w = [], k = f.trim().split(eg);
  let _ = "";
  for (let p = k.length - 1; p >= 0; p -= 1) {
    const R = k[p], {
      isExternal: J,
      modifiers: lt,
      hasImportantModifier: W,
      baseClassName: Z,
      maybePostfixModifierPosition: K
    } = z(R);
    if (J) {
      _ = R + (_.length > 0 ? " " + _ : _);
      continue;
    }
    let F = !!K, ht = r(F ? Z.substring(0, K) : Z);
    if (!ht) {
      if (!F) {
        _ = R + (_.length > 0 ? " " + _ : _);
        continue;
      }
      if (ht = r(Z), !ht) {
        _ = R + (_.length > 0 ? " " + _ : _);
        continue;
      }
      F = !1;
    }
    const Tt = H(lt).join(":"), St = W ? Tt + Ef : Tt, Ct = St + ht;
    if (w.includes(Ct))
      continue;
    w.push(Ct);
    const I = U(ht, F);
    for (let Ot = 0; Ot < I.length; ++Ot) {
      const qt = I[Ot];
      w.push(St + qt);
    }
    _ = R + (_.length > 0 ? " " + _ : _);
  }
  return _;
};
function ng() {
  let f = 0, x, z, r = "";
  for (; f < arguments.length; )
    (x = arguments[f++]) && (z = jd(x)) && (r && (r += " "), r += z);
  return r;
}
const jd = (f) => {
  if (typeof f == "string")
    return f;
  let x, z = "";
  for (let r = 0; r < f.length; r++)
    f[r] && (x = jd(f[r])) && (z && (z += " "), z += x);
  return z;
};
function ug(f, ...x) {
  let z, r, U, H = w;
  function w(_) {
    const p = x.reduce((R, J) => J(R), f());
    return z = lg(p), r = z.cache.get, U = z.cache.set, H = k, k(_);
  }
  function k(_) {
    const p = r(_);
    if (p)
      return p;
    const R = ag(_, z);
    return U(_, R), R;
  }
  return function() {
    return H(ng.apply(null, arguments));
  };
}
const jt = (f) => {
  const x = (z) => z[f] || [];
  return x.isThemeGetter = !0, x;
}, Cd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Gd = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ig = /^\d+\/\d+$/, cg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, fg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, og = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, rg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ra = (f) => ig.test(f), tt = (f) => !!f && !Number.isNaN(Number(f)), Ee = (f) => !!f && Number.isInteger(Number(f)), xf = (f) => f.endsWith("%") && tt(f.slice(0, -1)), $l = (f) => cg.test(f), dg = () => !0, mg = (f) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  fg.test(f) && !og.test(f)
), Xd = () => !1, hg = (f) => rg.test(f), gg = (f) => sg.test(f), yg = (f) => !Y(f) && !j(f), vg = (f) => wa(f, Vd, Xd), Y = (f) => Cd.test(f), Ve = (f) => wa(f, Ld, mg), Tf = (f) => wa(f, Tg, tt), Nd = (f) => wa(f, Qd, Xd), bg = (f) => wa(f, Zd, gg), Iu = (f) => wa(f, kd, hg), j = (f) => Gd.test(f), Hn = (f) => Na(f, Ld), pg = (f) => Na(f, zg), Hd = (f) => Na(f, Qd), Sg = (f) => Na(f, Vd), xg = (f) => Na(f, Zd), Pu = (f) => Na(f, kd, !0), wa = (f, x, z) => {
  const r = Cd.exec(f);
  return r ? r[1] ? x(r[1]) : z(r[2]) : !1;
}, Na = (f, x, z = !1) => {
  const r = Gd.exec(f);
  return r ? r[1] ? x(r[1]) : z : !1;
}, Qd = (f) => f === "position" || f === "percentage", Zd = (f) => f === "image" || f === "url", Vd = (f) => f === "length" || f === "size" || f === "bg-size", Ld = (f) => f === "length", Tg = (f) => f === "number", zg = (f) => f === "family-name", kd = (f) => f === "shadow", Eg = () => {
  const f = jt("color"), x = jt("font"), z = jt("text"), r = jt("font-weight"), U = jt("tracking"), H = jt("leading"), w = jt("breakpoint"), k = jt("container"), _ = jt("spacing"), p = jt("radius"), R = jt("shadow"), J = jt("inset-shadow"), lt = jt("text-shadow"), W = jt("drop-shadow"), Z = jt("blur"), K = jt("perspective"), F = jt("aspect"), ht = jt("ease"), Tt = jt("animate"), St = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ct = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], I = () => [...Ct(), j, Y], Ot = () => ["auto", "hidden", "clip", "visible", "scroll"], qt = () => ["auto", "contain", "none"], G = () => [j, Y, _], wt = () => [Ra, "full", "auto", ...G()], Nl = () => [Ee, "none", "subgrid", j, Y], dl = () => ["auto", {
    span: ["full", Ee, j, Y]
  }, Ee, j, Y], Dt = () => [Ee, "auto", j, Y], _l = () => ["auto", "min", "max", "fr", j, Y], Tl = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Et = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], b = () => ["auto", ...G()], D = () => [Ra, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...G()], M = () => [f, j, Y], st = () => [...Ct(), Hd, Nd, {
    position: [j, Y]
  }], s = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", Sg, vg, {
    size: [j, Y]
  }], N = () => [xf, Hn, Ve], O = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    j,
    Y
  ], q = () => ["", tt, Hn, Ve], at = () => ["solid", "dashed", "dotted", "double"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ft = () => [tt, xf, Hd, Nd], bt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    Z,
    j,
    Y
  ], el = () => ["none", tt, j, Y], Fl = () => ["none", tt, j, Y], Il = () => [tt, j, Y], Pl = () => [Ra, "full", ...G()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [$l],
      breakpoint: [$l],
      color: [dg],
      container: [$l],
      "drop-shadow": [$l],
      ease: ["in", "out", "in-out"],
      font: [yg],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [$l],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [$l],
      shadow: [$l],
      spacing: ["px", tt],
      text: [$l],
      "text-shadow": [$l],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ra, Y, j, F]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [tt, Y, j, k]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": St()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": St()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: I()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Ot()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Ot()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Ot()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: qt()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": qt()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": qt()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: wt()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": wt()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": wt()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: wt()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: wt()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: wt()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: wt()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: wt()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: wt()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ee, "auto", j, Y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ra, "full", "auto", k, ...G()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [tt, Ra, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", tt, j, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", tt, j, Y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ee, "first", "last", "none", j, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Nl()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: dl()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Dt()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Dt()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Nl()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: dl()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Dt()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Dt()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": _l()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": _l()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: G()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": G()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": G()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Tl(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Et(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Et()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Tl()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Et(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Et(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Tl()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Et(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Et()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: G()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: G()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: G()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: G()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: G()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: G()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: G()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: G()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: G()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: b()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: b()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: b()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: b()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: b()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: b()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: b()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: b()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: b()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": G()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": G()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: D()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [k, "screen", ...D()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          k,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...D()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          k,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [w]
          },
          ...D()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...D()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...D()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...D()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", z, Hn, Ve]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, j, Tf]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", xf, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [pg, Y, x]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [U, j, Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [tt, "none", j, Tf]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          H,
          ...G()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", j, Y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", j, Y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...at(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [tt, "from-font", "auto", j, Ve]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [tt, "auto", j, Y]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: G()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", j, Y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", j, Y]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: st()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: s()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: A()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ee, j, Y],
          radial: ["", j, Y],
          conic: [Ee, j, Y]
        }, xg, bg]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: N()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: O()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": O()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": O()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": O()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": O()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": O()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": O()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": O()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": O()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": O()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": O()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": O()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": O()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": O()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": O()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: q()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": q()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": q()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": q()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": q()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": q()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": q()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": q()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": q()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": q()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": q()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...at(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...at(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...at(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [tt, j, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", tt, Hn, Ve]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          R,
          Pu,
          Iu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", J, Pu, Iu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: q()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [tt, Ve]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": q()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", lt, Pu, Iu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [tt, j, Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...L(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": L()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [tt]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ft()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ft()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ft()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ft()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ft()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ft()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ft()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ft()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ft()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ft()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ft()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ft()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ft()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ft()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [j, Y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ft()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ft()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": Ct()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [tt]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ft()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ft()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: st()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: s()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: A()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", j, Y]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          j,
          Y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: bt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [tt, j, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [tt, j, Y]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          W,
          Pu,
          Iu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", tt, j, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [tt, j, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", tt, j, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [tt, j, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", tt, j, Y]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          j,
          Y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": bt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [tt, j, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [tt, j, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", tt, j, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [tt, j, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", tt, j, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [tt, j, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [tt, j, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", tt, j, Y]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": G()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": G()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": G()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", j, Y]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [tt, "initial", j, Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", ht, j, Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [tt, j, Y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Tt, j, Y]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [K, j, Y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": I()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: el()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": el()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": el()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": el()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Fl()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Fl()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Fl()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Fl()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Il()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Il()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Il()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [j, Y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: I()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Pl()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Pl()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Pl()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Pl()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: M()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: M()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", j, Y]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": G()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": G()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": G()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": G()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": G()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": G()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": G()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": G()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": G()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": G()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": G()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": G()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": G()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": G()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": G()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": G()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": G()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": G()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", j, Y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [tt, Hn, Ve, Tf]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Ag = /* @__PURE__ */ ug(Eg);
function _g(...f) {
  return Ag(L0(f));
}
function Mg() {
  return {
    "--primary-color": "#ffffff",
    "--background-color": "#ffffff",
    "--text-color": "#000000",
    "--border-color": "#d1d5db",
    "--border-radius": "0.5rem",
    "--font-family": "system-ui, sans-serif"
  };
}
function Og(f) {
  return {
    1: "ethereum",
    56: "binance-smart-chain"
  }[f] ?? null;
}
function Dg(f, x, z) {
  const [r, U] = Ua.useState(null), [H, w] = Ua.useState(!0), [k, _] = Ua.useState(null);
  return Ua.useEffect(() => {
    if (!f || !x) {
      w(!1), _("Chain id or token address cannot be empty.");
      return;
    }
    const p = Og(f);
    if (!p) {
      _(`Unsupported chain ID: ${f}`), w(!1);
      return;
    }
    let R = !0;
    const J = new AbortController(), lt = async (Z = !1) => {
      Z && w(!0), _(null);
      try {
        const K = await fetch(
          `https://api.coingecko.com/api/v3/coins/${p}/contract/${x}`,
          { signal: J.signal }
        );
        if (!K.ok)
          throw K.status === 429 ? new Error("Rate limit exceeded. Please try again later.") : K.status === 404 ? new Error("Token not found.") : new Error(`Error ${K.status}: ${K.statusText}`);
        const F = await K.json(), ht = {
          name: F.name ?? "",
          symbol: F.symbol?.toUpperCase() ?? "",
          image: F.image?.small ?? F.image?.thumb ?? null,
          priceUsd: F.market_data?.current_price?.usd ?? null,
          change24h: F.market_data?.price_change_percentage_24h ?? null
        };
        R && U(ht);
      } catch (K) {
        if (K instanceof DOMException && K.name === "AbortError")
          return;
        R && _(
          K instanceof Error ? K.message : "An unexpected error occurred."
        );
      } finally {
        R && w(!1);
      }
    };
    lt(!0);
    let W;
    return z > 0 && (W = window.setInterval(() => lt(!1), z)), () => {
      R = !1, J.abort(), W && clearInterval(W);
    };
  }, [f, x, z]), { token: r, loading: H, error: k };
}
const Rg = ({
  tokenAddress: f,
  chainId: x,
  refreshInterval: z = 6e4
  // default 60 seconds polling
}) => {
  const r = Ua.useMemo(() => Mg(), []), { token: U, loading: H, error: w } = Dg(
    x,
    f,
    z
  );
  return /* @__PURE__ */ it.jsxs(
    "div",
    {
      style: r,
      role: "region",
      "aria-label": "Token Price Widget",
      className: _g(
        "px-5 py-4 min-w-56",
        "bg-[var(--background-color)] [font-family:var(--font-family)] text-[var(--text-color)]",
        "[border:1px_solid_var(--border-color)] rounded-[var(--border-radius)]",
        "[box-shadow:0_4px_6px_-1px_rgb(0_0_0_/_0.1),0_2px_4px_-2px_rgb(0_0_0_/_0.1)]"
      ),
      children: [
        H && /* @__PURE__ */ it.jsx(Z0, {}),
        !H && (w || !U) && /* @__PURE__ */ it.jsx(V0, { message: w || "Failed to load token data." }),
        !H && U && /* @__PURE__ */ it.jsx(Q0, { token: U })
      ]
    }
  );
}, Ug = (f) => /* @__PURE__ */ it.jsxs(it.Fragment, { children: [
  /* @__PURE__ */ it.jsx("style", { dangerouslySetInnerHTML: { __html: C0 } }),
  /* @__PURE__ */ it.jsx(Rg, { ...f })
] }), wg = j0(Ug, {
  props: {
    chainId: "number",
    tokenAddress: "string",
    refreshInterval: "number"
  },
  shadow: "open"
  // Enable shadow DOM
});
customElements.get("token-price-widget") || customElements.define("token-price-widget", wg);
export {
  wg as default
};
