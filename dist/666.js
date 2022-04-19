'use strict';
(self.webpackChunkhiring_app = self.webpackChunkhiring_app || []).push([
  [666],
  {
    202: (e, t, o) => {
      o.d(t, { Z: () => f });
      var a = o(670),
        r = o.n(a),
        n = o(441),
        i = o.n(n),
        s = o(194),
        l = o.n(s),
        c = new URL(o(696), o.b),
        d = new URL(o(552), o.b),
        h = i()(r());
      h.push([
        e.id,
        '@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap);',
      ]);
      var p = l()(c),
        u = l()(d);
      h.push([
        e.id,
        'body{background-color:#f6f8fa;font-family:"Open Sans",sans-serif}.border-primary,.filter-chkbox{border-color:#e1e4e8}.border-green{border-color:#28a745}.text-gray-dark{color:#24292e}.text-gray-light{color:#6a737d}.bg-gray-dark{background-color:#24292e}.bg-gray-light,.sidemenu-dropdown-container{background-color:#fafbfc}.popup-bg{background:rgba(0,0,0,.2)}.bg-primary{background-color:#6f42c1}.bg-primary.bg-primary-hover:hover{background-color:#4c2888}.bg-green{background-color:#28a745}.text-purple{color:#6f42c1}.text-blue{color:#0366d6}.error-msg-bg{background-color:#ffdce0}.error-msg-border{border-color:#d73a49}.has-error{border-color:#d73a49}input:focus{border:1px solid #6f42c1;box-shadow:0px 0px 0px 3px #e6dcfd}.textarea-primary:focus{border:1px solid #6f42c1;box-shadow:0px 0px 0px 3px #e6dcfd}.textarea-primary::-webkit-scrollbar{width:5px}.textarea-primary::-webkit-scrollbar-track{background:rgba(0,0,0,0)}.textarea-primary::-webkit-scrollbar-thumb{background:#d1d5da;border-radius:24px}.textarea-primary::-webkit-scrollbar-thumb:hover{background:#bcbdbe}.focus-shadow-none:focus{box-shadow:none}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:fadeIn;animation-name:fadeIn}.fadeIn.delay-3{animation-delay:300ms}@keyframes fadeOut{from{opacity:1}to{opacity:0;visibility:hidden}}.fadeOut{-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:fadeOut;animation-name:fadeOut}.clearfix:after{content:"";width:100%;height:0px;display:block;visibility:hidden;clear:both}input.peer:checked+.filter-chkbox{background:url(' +
          p +
          ') no-repeat center center #6f42c1}.search-input{background:url(' +
          u +
          ') no-repeat left 8px center #fff}.scroll-bar-hide::-webkit-scrollbar{width:0px;height:0px}',
        '',
      ]);
      const f = h;
    },
    552: (e, t, o) => {
      e.exports = o.p + 'ca213e288cb951e290ff.svg';
    },
    696: (e, t, o) => {
      e.exports = o.p + 'fc6dcea20f8394bf514d.svg';
    },
    776: (e, t, o) => {
      o.r(t);
      var a = o(950);
      const r = () => {
        const e = (0, a.lazy)(() => o.e(401).then(o.bind(o, 401)));
        return a.createElement(e, null);
      };
      var n = o(597),
        i = o(587);
      const s = window.location.origin;
      let l = null;
      const c = function () {
          return i.parseUrl(window.location.href).query.code;
        },
        d = new (class {
          constructor() {
            c() || this.initRefreshCycle();
          }
          t;
          rt;
          te;
          sendRefreshBefore = 1e4;
          timeoutHandle;
          setToken(e) {
            (this.t = e), localStorage.setItem('_ab_t', e);
          }
          initRefreshCycle() {
            clearTimeout(this.timeoutHandle);
            let e = this.getExpiry();
            if ((console.log('expires in = ', e), !e)) return !1;
            e *= 1e3;
            let t = e - new Date().getTime();
            if (!t || t < this.sendRefreshBefore || isNaN(t))
              return (
                t || console.log('!timer'),
                t < this.sendRefreshBefore &&
                  console.log('less than', this.sendRefreshBefore),
                isNaN(t) && console.log('isNan'),
                console.log('invalid expiry time ', new Date().getTime(), e, t),
                null
              );
            (t = parseInt(t) - this.sendRefreshBefore),
              console.log('valid expiry time ', new Date().getTime(), e, t),
              (this.timeoutHandle = setTimeout(() => {
                h();
              }, t));
          }
          setExpiry(e) {
            (this.te = e), localStorage.setItem('_ab_t_e', e);
          }
          getExpiry() {
            return this.te || localStorage.getItem('_ab_t_e');
          }
          removeToken(e) {
            (this.t = e), localStorage.removeItem('_ab_t');
          }
          setRefreshToken(e) {
            (this.rt = e), localStorage.setItem('_ab_rt', e);
          }
          removeRefreshToken(e) {
            (this.rt = e), localStorage.removeItem('_ab_rt');
          }
          getToken() {
            return this.t || localStorage.getItem('_ab_t');
          }
          getRefreshToken() {
            return this.rt || localStorage.getItem('_ab_rt');
          }
          clearTokens() {
            this.removeRefreshToken(), this.removeToken();
          }
        })(),
        h = async () => {
          console.log('calling refresh access token');
          try {
            const e = await fetch(
                'https://shield-dev.appblox.io/refresh-token',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${d.getToken()} ${d.getRefreshToken()}`,
                  },
                }
              ),
              t = await e.json();
            t && t.data.AccessToken
              ? (console.log('data is ', t.data),
                d.setToken(t.data.AccessToken),
                d.setExpiry(t.data.AtExpires),
                d.setRefreshToken(t.data.RefreshToken),
                d.initRefreshCycle())
              : 401 === t.status &&
                (console.log('expired token'), d.clearTokens(), await p());
          } catch (e) {
            console.log('error in refreshing = ', e);
          }
        },
        p = async () => {
          if (d.getToken()) {
            const e = await u();
            if (!e) {
              const e = f();
              window.location = e;
            }
            return e;
          }
          {
            const e = f();
            window.location = e;
          }
        },
        u = async () => {
          try {
            const e = await fetch(
                'https://shield-dev.appblox.io/validate-appblox-acess-token',
                {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${d.getToken()}`,
                  },
                }
              ),
              t = await e.json();
            return t.data && 'valid' === t.data;
          } catch (e) {
            console.log(e);
          }
        },
        f = () => {
          const e = {
            response_type: 'code',
            scope: 'user private_repo',
            redirect_uri: s,
            client_id: l,
            state: 'state123',
          };
          return `https://shield-dev.appblox.io/login?${i.stringify(e)}`;
        },
        g = {
          init: async function (e) {
            l = e;
            const t = c();
            if (t) {
              const e = await (async function (e) {
                const t = `https://shield-dev.appblox.io/auth/get-token?grant_type=authorization_code&code=${e}&redirect_uri=${s}`;
                try {
                  const e = await fetch(t, {
                      method: 'GET',
                      headers: { 'Content-Type': 'application/json' },
                    }),
                    o = await e.json();
                  return (
                    location.href.includes('?') &&
                      history.pushState({}, null, location.href.split('?')[0]),
                    console.log(
                      '🚀  file: index.js  line 50  sendCodeToServer  data',
                      o
                    ),
                    o
                  );
                } catch (e) {
                  console.log(e);
                }
              })(t);
              e.success &&
                e.data &&
                (d.setToken(e.data.ab_at),
                d.setExpiry(e.data.expires_in),
                d.setRefreshToken(e.data.ab_rt),
                d.initRefreshCycle());
            }
          },
          verifyLogin: p,
          tokenStore: d,
          getAuthUrl: f,
          logout: async () => {
            await (async () => {
              try {
                const e = await fetch('https://shield-dev.appblox.io/logout', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${d.getToken()}`,
                  },
                });
                return await e.json();
              } catch (e) {
                console.log(e);
              }
            })(),
              d.removeRefreshToken(),
              d.removeToken(),
              await p();
          },
        };
      var b = o(278),
        m = o.n(b),
        y = o(391),
        k = o.n(y),
        w = o(547),
        x = o.n(w),
        T = o(604),
        v = o.n(T),
        _ = o(593),
        E = o.n(_),
        R = o(784),
        S = o.n(R),
        I = o(202),
        C = {};
      (C.styleTagTransform = S()),
        (C.setAttributes = v()),
        (C.insert = x().bind(null, 'head')),
        (C.domAPI = k()),
        (C.insertStyleElement = E()),
        m()(I.Z, C),
        I.Z && I.Z.locals && I.Z.locals;
      var A = o(709);
      const j = () => {
        const [e, t] = (0, a.useState)(void 0),
          [o, i] = a.useState(!1);
        g.getAuthUrl(), console.log(A);
        const { Component: s, errorLoading: l } = (0, n.DS)(
          e?.url,
          e?.scope,
          e?.module,
          a
        );
        return (
          (0, a.useEffect)(async () => {
            await g.init('pRntLlwaYV2OuN_1Kc3Ua-6255');
            const e = await g.verifyLogin();
            i(e),
              o &&
                t({
                  module: './layout',
                  scope: 'layout',
                  url: `${A.BLOX_ENV_URL_layout}/remoteEntry.js`,
                });
          }, [o]),
          a.createElement(
            a.Suspense,
            { fallback: '' },
            a.createElement(
              'div',
              { className: 'App' },
              o
                ? a.createElement(
                    'div',
                    null,
                    l
                      ? `Error loading module "${module}"`
                      : s &&
                          a.createElement(
                            s,
                            null,
                            a.createElement(r, { isLoggedIn: o })
                          )
                  )
                : a.createElement('div', null, 'Loading')
            )
          )
        );
      };
      o(362).render(a.createElement(j, null), document.getElementById('root'));
    },
  },
]);
