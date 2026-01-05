//Mon Jan 05 2026 06:37:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
console.log("\n[36m\n  █████╗ ██╗     ██╗     ██████╗ ██████╗ ██╗ ██████╗██╗  ██╗██╗      █████╗ ██╗   ██╗███████╗██████╗ ███████╗\n ██╔══██╗██║     ██║     ██╔══██╗██╔══██╗██║██╔════╝██║ ██╔╝██║     ██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗██╔════╝\n ███████║██║     ██║     ██████╔╝██████╔╝██║██║     █████╔╝ ██║     ███████║ ╚████╔╝ █████╗  ██████╔╝███████╗\n ██╔══██║██║     ██║     ██╔══██╗██╔══██╗██║██║     ██╔═██╗ ██║     ██╔══██║  ╚██╔╝  ██╔══╝  ██╔══██╗╚════██║\n ██║  ██║███████╗███████╗██████╔╝██║  ██║██║╚██████╗██║  ██╗███████╗██║  ██║   ██║   ███████╗██║  ██║███████║\n ╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝\n[0m\n[32m\n===========================================================================\n AllBricklayers V7.0.9.241127  | 科技改变生活 · 强撸金币 | 饭补 · 短剧 · AD\n===========================================================================\n[0m\n");
const crypto = require("crypto");
const os = require("os");
const axios = require("axios");
const qs = require("querystring");
const querystring = require("querystring");
const {
  SocksProxyAgent
} = require("socks-proxy-agent");
const fs = require("fs");
const path = require("path");
const https = require("https");
const DEFAULT_TASKS = ["food", "lookk", "dj"];
const TASK_CONFIG_STR = "lookk:99999,dj:99999,food:99999";
const TASK_CYCLE_ROUNDS = 0;
const KSCOIN_LIMIT = process.env.KS_MONEY_TOP ? parseInt(process.env.KS_MONEY_TOP) : 500000;
const AD_INFO_FAIL_LIMIT = 30;
const REQUEST_TIMEOUT = 30000;
const MAX_CONCURRENCY = 100;
const SEQUENTIAL_EXECUTION = false;
const zhiwen = os_km();
const km = process.env.KM_KSJS;
function isValidIP(_0x5da5c5) {
  if (!_0x5da5c5 || typeof _0x5da5c5 !== "string") {
    return false;
  }
  const _0x5317e7 = _0x5da5c5.split(".");
  if (_0x5317e7.length !== 4) {
    return false;
  }
  for (let _0x1d0e37 of _0x5317e7) {
    {
      const _0x13187a = parseInt(_0x1d0e37, 10);
      if (isNaN(_0x13187a) || _0x13187a < 0 || _0x13187a > 255 || String(_0x13187a) !== _0x1d0e37) {
        {
          return false;
        }
      }
    }
  }
  return true;
}
const params = {
  card: km,
  device_fingerprint: zhiwen
};
const a0_0x2b3cd4 = {
  "Content-Type": "application/x-www-form-urlencoded"
};
const a0_0x428467 = {
  headers: a0_0x2b3cd4
};
axios.post("http://175.178.244.159/kskm/verify_card.php", querystring.stringify(params), a0_0x428467).then(_0x1d3e5e => {
  const _0x3fba35 = _0x1d3e5e.data;
  if (_0x3fba35.code === 200) {
    const _0x207801 = _0x3fba35.aaa;
    const _0x13129c = _0x3fba35.user_url;
    const _0x582749 = _0x3fba35.ks_host;
    const _0x3f26c8 = _0x3fba35.report;
    const _0x2ef461 = _0x3fba35.ad_path;
    const _0x587702 = _0x3fba35.neoParamsBase64;
    const _0x57490e = _0x3fba35.packageName;
    const _0x1fb6de = _0x3fba35.pageId;
    const _0x1403fc = _0x3fba35.businessId;
    const _0x377cf4 = _0x3fba35.posId;
    const _0x48c7a4 = _0x3fba35.subPageId;
    const _0x499786 = _0x3fba35.search_pageId;
    const _0x530a3d = _0x3fba35.ad_businessId;
    const _0x1a4a01 = _0x3fba35.ad_posId;
    const _0x565704 = _0x3fba35.ad_subPageId;
    const _0x364361 = _0x3fba35.fb_businessId;
    const _0x3413c6 = _0x3fba35.fb_posId;
    const _0x3da49e = _0x3fba35.fb_subPageId;
    const _0x14cb79 = _0x3fba35.ad_follow_businessId;
    const _0x237132 = _0x3fba35.ad_follow_posId;
    const _0x4ca2b8 = _0x3fba35.ad_follow_subPageId;
    const _0x4f0b92 = _0x3fba35.search_businessId;
    const _0x140be3 = _0x3fba35.search_posId;
    const _0xd11793 = _0x3fba35.search_subPageId;
    const _0x487af9 = _0x3fba35.appId;
    const _0x1c2dba = _0x3fba35.width;
    const _0x49a42f = _0x3fba35.height;
    const _0x3aaee1 = _0x3fba35.all_url;
    const _0x4ea62d = _0x3fba35.bb;
    const _0x3e64de = _0x3fba35.cc;
    const _0x141716 = _0x3fba35.speed_max_fb_businessId;
    const _0x8645a = _0x3fba35.speed_max_fb_businessId_posId;
    const _0x3f2163 = _0x3fba35.speed_max_fb_businessId_subPageId;
    const _0x3c24d5 = _0x3fba35.speed_max_ad_businessId;
    const _0x46de56 = _0x3fba35.speed_max_dj_businessId;
    const _0x29c659 = _0x3fba35.num;
    const _0x72088f = _0x3fba35.ks_max_host;
    async function _0x37b64e() {
      const _0x2f3b32 = 20260104120230;
      try {
        {
          const _0x2bd315 = await axios.get("http://175.178.244.159/kskm/ks_ql_version.php");
          return _0x2f3b32 == _0x2bd315.data.version ? (console.log("✅ 已是最新版本，开始执行..."), true) : (console.log("❌ 不是最新版本，请联系作者获取最新版本"), false);
        }
      } catch (_0x4b56b9) {
        {
          console.error("❌ 版本检查失败:", _0x4b56b9.message);
          console.log("⚠️ 版本检查失败,请检查网络环境");
          return false;
        }
      }
    }
    !process.env.KM_KSJS && (console.error("❌ 错误：环境变量 KM_KSJS 未设置"), process.exit(1));
    const _0x4dd054 = process.env.KM_KSJS;
    const _0xcc9c64 = process.env.lun_num;
    const _0x5c5e97 = "http://175.178.244.159/kskm/verify_card.php";
    function _0x2a8d73() {
      const _0x53a4c4 = [os.type(), os.platform(), os.arch(), os.release(), os.totalmem().toString(), os.cpus().length.toString()];
      return crypto.createHash("sha256").update(_0x53a4c4.join("|")).digest("hex");
    }
    const _0x50caa = _0x2a8d73();
    async function _0x2e162b() {
      try {
        {
          console.log("🔐 开始验证卡密...");
          const _0x108ead = {
            card: _0x4dd054,
            device_fingerprint: _0x50caa
          };
          const _0x41d8de = {
            "Content-Type": "application/x-www-form-urlencoded"
          };
          const _0x302b93 = {
            headers: _0x41d8de
          };
          const _0x38e4fb = await axios.post(_0x5c5e97, querystring.stringify(_0x108ead), _0x302b93);
          const _0x390a72 = _0x38e4fb.data;
          if (_0x390a72.code === 200) {
            {
              console.log("✅ 卡密验证成功: " + _0x390a72.msg);
              if (_0x390a72.expire_time) {
                {
                  console.log("⏰ 卡密到期时间: " + _0x390a72.expire_time);
                }
              }
              return true;
            }
          } else {
            console.error("❌ 卡密验证失败: " + _0x390a72.msg);
            return false;
          }
        }
      } catch (_0x4ea3c3) {
        if (_0x4ea3c3.response) {
          console.error("❌ 卡密验证失败: " + (_0x4ea3c3.response.data.msg || "未知错误"));
        } else {
          {
            console.error("❌ 卡密验证请求异常: " + _0x4ea3c3.message);
          }
        }
        return false;
      }
    }
    const _0x312d01 = ["https://myip.ipip.net", "https://v4.ident.me", "https://api.ipify.org?format=json"];
    function _0x135bbf() {
      {
        const _0x44f4b9 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
        return _0x44f4b9[Math.floor(Math.random() * _0x44f4b9.length)];
      }
    }
    function _0x42a866() {
      {
        try {
          {
            const _0x1ebf51 = _0x4d6542 => {
              const _0x245f95 = "0123456789abcdef";
              let _0x5b1d0a = "";
              for (let _0x2a0df2 = 0; _0x2a0df2 < _0x4d6542; _0x2a0df2++) {
                _0x5b1d0a += _0x245f95.charAt(Math.floor(Math.random() * _0x245f95.length));
              }
              return _0x5b1d0a;
            };
            return "ANDROID_" + _0x1ebf51(16);
          }
        } catch (_0x2289d6) {
          return "ANDROID_" + Date.now().toString(16).toUpperCase().substring(0, 16);
        }
      }
    }
    function _0x4412a1() {
      const _0x273ce2 = {};
      const _0x38b25c = TASK_CONFIG_STR.split(",");
      _0x38b25c.forEach(_0x569715 => {
        const [_0x3454f8, _0x174fff] = _0x569715.split(":").map(_0x1dcf55 => _0x1dcf55.trim());
        _0x3454f8 && _0x174fff && !isNaN(parseInt(_0x174fff)) && (_0x273ce2[_0x3454f8] = parseInt(_0x174fff));
      });
      const _0x5330c2 = {
        dj: 99999,
        lookk: 99999,
        food: 99999
      };
      const _0x50a38c = {
        ..._0x5330c2,
        ..._0x273ce2
      };
      return _0x50a38c;
    }
    const _0x4c6f0f = _0x4412a1();
    class _0x4be2c9 {
      constructor() {
        this.apiUrls = _0x207801.split(",").map(_0x47d9de => _0x47d9de.trim()).filter(_0x2c8985 => _0x2c8985.length > 0);
        this.shuffleArray(this.apiUrls);
        this.currentApiIndex = 0;
        this.failedApis = new Set();
      }
      shuffleArray(_0x17f8ca) {
        {
          for (let _0x245dd6 = _0x17f8ca.length - 1; _0x245dd6 > 0; _0x245dd6--) {
            const _0x52698a = Math.floor(Math.random() * (_0x245dd6 + 1));
            [_0x17f8ca[_0x245dd6], _0x17f8ca[_0x52698a]] = [_0x17f8ca[_0x52698a], _0x17f8ca[_0x245dd6]];
          }
          return _0x17f8ca;
        }
      }
      async getAvailableApiUrls() {
        {
          return this.apiUrls.filter(_0x138685 => !this.failedApis.has(_0x138685));
        }
      }
      markApiAsFailed(_0x5957f1) {
        this.failedApis.add(_0x5957f1);
      }
      clearFailedMarks() {
        {
          this.failedApis.clear();
          console.log("🔄 清除所有接口失败标记");
        }
      }
      async getEncSign(_0x542582) {
        {
          const _0x4ba11a = await this.getAvailableApiUrls();
          if (_0x4ba11a.length === 0) {
            {
              console.log("❌ 没有可用的签名API地址，尝试重新激活所有接口");
              this.clearFailedMarks();
              return null;
            }
          }
          let _0x1e406a = Math.floor(Math.random() * _0x4ba11a.length);
          for (let _0x2b3311 = 0; _0x2b3311 < _0x4ba11a.length; _0x2b3311++) {
            const _0x259506 = (_0x1e406a + _0x2b3311) % _0x4ba11a.length;
            const _0x1c4b3e = _0x4ba11a[_0x259506];
            try {
              const _0x10257d = _0x1c4b3e + _0x4ea62d;
              const _0x2769c5 = {
                data: _0x542582
              };
              const _0x4bc5ab = {
                "Content-Type": "application/json"
              };
              const _0x2519ff = {
                timeout: 10000,
                headers: _0x4bc5ab
              };
              const _0x215ff1 = await axios.post(_0x10257d, _0x2769c5, _0x2519ff);
              if (_0x215ff1.status === 200 && _0x215ff1.data && _0x215ff1.data.status === true && _0x215ff1.data.data) {
                {
                  this.currentApiIndex = _0x259506;
                  return _0x215ff1.data.data;
                }
              } else {
                this.markApiAsFailed(_0x1c4b3e);
              }
            } catch (_0x3de140) {
              console.log("❌ 签名接口请求失败" + _0x3de140.message);
              this.markApiAsFailed(_0x1c4b3e);
            }
          }
          console.log("❌ 所有签名接口(encsign)请求失败，将在下次重试");
          return null;
        }
      }
      async getNsSig(_0x237624) {
        const _0x4c3df9 = await this.getAvailableApiUrls();
        if (_0x4c3df9.length === 0) {
          console.log("❌ 没有可用的签名API地址，尝试重新激活所有接口");
          this.clearFailedMarks();
          return null;
        }
        let _0x27f60b = Math.floor(Math.random() * _0x4c3df9.length);
        for (let _0x4adf81 = 0; _0x4adf81 < _0x4c3df9.length; _0x4adf81++) {
          {
            const _0x27af2e = (_0x27f60b + _0x4adf81) % _0x4c3df9.length;
            const _0x22bb8a = _0x4c3df9[_0x27af2e];
            try {
              const _0x5e02d3 = _0x22bb8a + _0x3e64de;
              const _0x221b8e = {
                "Content-Type": "application/json"
              };
              const _0x3182e6 = {
                timeout: 10000,
                headers: _0x221b8e
              };
              const _0x6feccd = await axios.post(_0x5e02d3, _0x237624, _0x3182e6);
              if (_0x6feccd.status === 200 && _0x6feccd.data && _0x6feccd.data.status === true && _0x6feccd.data.data) {
                this.currentApiIndex = _0x27af2e;
                return _0x6feccd.data.data;
              } else {
                this.markApiAsFailed(_0x22bb8a);
              }
            } catch (_0x292149) {
              console.log("❌ 出现签名失败接口");
              this.markApiAsFailed(_0x22bb8a);
            }
          }
        }
        console.log("❌ 所有签名接口(nssig)请求失败，将在下次重试");
        return null;
      }
      getApiInfo() {
        {
          const _0x53701d = this.apiUrls.filter(_0x5351e6 => !this.failedApis.has(_0x5351e6));
          const _0x5a5951 = {
            type: "多接口轮询",
            total: this.apiUrls.length,
            available: _0x53701d.length,
            urls: this.apiUrls
          };
          return _0x5a5951;
        }
      }
    }
    const _0x4a3cb4 = new _0x4be2c9();
    async function _0x86a184(_0x4e4625, _0x4a0771 = null, _0x4e8376 = "Unknown Request") {
      let _0x23e7ef = null;
      if (_0x4a0771) {
        {
          try {
            _0x23e7ef = new SocksProxyAgent(_0x4a0771);
          } catch (_0x245ae8) {
            {
              console.log("❌ " + _0x4e8376 + " 代理URL无效，尝试直连");
            }
          }
        }
      }
      const _0x4a92ac = {
        method: _0x4e4625.method || "GET",
        url: _0x4e4625.url,
        headers: _0x4e4625.headers || {},
        data: _0x4e4625.body || _0x4e4625.form,
        timeout: _0x4e4625.timeout || REQUEST_TIMEOUT
      };
      if (_0x23e7ef) {
        _0x4a92ac.httpAgent = _0x23e7ef;
        _0x4a92ac.httpsAgent = _0x23e7ef;
      } else {
        const _0x27e8f3 = {
          rejectUnauthorized: false
        };
        _0x4a92ac.httpsAgent = new https.Agent(_0x27e8f3);
      }
      try {
        const _0x56fd60 = await axios(_0x4a92ac);
        const _0x1070d3 = {
          response: _0x56fd60,
          body: _0x56fd60.data
        };
        return _0x1070d3;
      } catch (_0x57a400) {
        {
          const _0x5aaabc = {
            response: null,
            body: null
          };
          return _0x5aaabc;
        }
      }
    }
    async function _0x18f7b2(_0xefeaeb, _0x2e2333 = "代理检测", _0x58f94b = 3) {
      {
        if (!_0xefeaeb) {
          {
            const _0x518f4f = {
              ok: true,
              msg: "✅ 直连模式",
              ip: "localhost"
            };
            return _0x518f4f;
          }
        }
        let _0x51046d = null;
        const _0x5a2c3c = ["https://ip.3322.net", "https://api.ipify.org?format=json"];
        for (let _0x5a59dd = 1; _0x5a59dd <= _0x58f94b; _0x5a59dd++) {
          console.log("🔌 " + _0x2e2333 + " 测试代理连接中... (尝试 " + _0x5a59dd + "/" + _0x58f94b + ")");
          for (const _0x156103 of _0x5a2c3c) {
            {
              try {
                const {
                  response: _0x1e8824,
                  body: _0x559bbb
                } = await _0x86a184({
                  method: "GET",
                  url: _0x156103,
                  headers: {
                    "User-Agent": "ProxyTester/1.0"
                  },
                  timeout: 15000
                }, _0xefeaeb, _0x2e2333 + " → " + new URL(_0x156103).hostname);
                if (typeof _0x559bbb === "string" && (_0x559bbb.includes("<html>") || _0x559bbb.includes("503 Service Temporarily Unavailable") || _0x559bbb.includes("502 Bad Gateway") || _0x559bbb.includes("504 Gateway Timeout"))) {
                  {
                    continue;
                  }
                }
                if (_0x559bbb) {
                  let _0x5b3569 = null;
                  if (_0x156103.includes("httpbin.org") && _0x559bbb.origin) {
                    {
                      _0x5b3569 = _0x559bbb.origin;
                    }
                  } else {
                    if (_0x156103.includes("ipify.org") && _0x559bbb.ip) {
                      _0x5b3569 = _0x559bbb.ip;
                    } else {
                      typeof _0x559bbb === "string" && !_0x559bbb.includes("<") && (_0x5b3569 = _0x559bbb.trim());
                    }
                  }
                  if (_0x5b3569 && isValidIP(_0x5b3569)) {
                    console.log("✅ " + _0x2e2333 + " 代理测试成功，出口IP: " + _0x5b3569);
                    const _0x3fa25f = {
                      ok: true,
                      msg: "✅ SOCKS5代理正常，出口IP: " + _0x5b3569,
                      ip: _0x5b3569
                    };
                    return _0x3fa25f;
                  }
                }
              } catch (_0x571c31) {
                {
                  _0x51046d = _0x571c31;
                  continue;
                }
              }
              await new Promise(_0x4de32c => setTimeout(_0x4de32c, 500));
            }
          }
          if (_0x5a59dd < _0x58f94b) {
            const _0x58175e = _0x5a59dd * 2000;
            console.log("⏱️ " + _0x2e2333 + " 所有端点测试失败，" + _0x58175e / 1000 + "秒后重试...");
            await new Promise(_0x38517d => setTimeout(_0x38517d, _0x58175e));
          }
        }
        try {
          new URL(_0xefeaeb);
        } catch (_0x287b09) {
          const _0x23084e = {
            ok: false,
            msg: "❌ 代理URL格式错误: " + _0x287b09.message,
            ip: null
          };
          return _0x23084e;
        }
        const _0x25349c = {
          ok: false,
          msg: "❌ 代理测试失败: " + (_0x51046d?.["message"] || "所有测试端点均无法访问"),
          ip: null
        };
        return _0x25349c;
      }
    }
    class _0x333d68 {
      constructor({
        index: _0x5e3742,
        salt: _0x1ea3dc,
        cookie: _0x489c0f,
        nickname = "",
        proxyUrl = null,
        tasksToExecute = DEFAULT_TASKS,
        remark = ""
      }) {
        this.index = _0x5e3742;
        this.salt = _0x1ea3dc;
        this.cookie = _0x489c0f;
        this.nickname = nickname || remark || "账号" + _0x5e3742;
        this.remark = remark;
        this.proxyUrl = proxyUrl;
        this.coinLimit = KSCOIN_LIMIT;
        this.coinExceeded = false;
        this.tasksToExecute = tasksToExecute;
        this.accumulatedCoins = 0;
        this.adInfoFailCount = 0;
        this.maxAdInfoFailCount = AD_INFO_FAIL_LIMIT;
        this.extractCookieInfo();
        this.headers = {
          Host: _0x582749,
          Connection: "keep-alive",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
          Cookie: this.cookie,
          "content-type": "application/json"
        };
        this.reportPath = _0x3f26c8;
        this.startTime = Date.now();
        this.endTime = this.startTime - _0x29c659;
        this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
        const _0x23ffdb = {
          name: "饭补广告",
          pageId: _0x1fb6de,
          businessId: _0x141716,
          posId: _0x8645a,
          subPageId: _0x3f2163,
          requestSceneType: 7,
          taskType: 2
        };
        const _0x1b09f9 = {
          name: "看广告得金币",
          pageId: _0x1fb6de,
          businessId: _0x3c24d5,
          posId: _0x8645a,
          subPageId: _0x3f2163,
          requestSceneType: 7,
          taskType: 2
        };
        const _0x54efa1 = {
          name: "短剧广告",
          pageId: _0x1fb6de,
          businessId: _0x46de56,
          posId: _0x8645a,
          subPageId: _0x3f2163,
          requestSceneType: 7,
          taskType: 2
        };
        const _0x45a4fe = {
          food: _0x23ffdb,
          lookk: _0x1b09f9,
          dj: _0x54efa1
        };
        this.taskConfigs = _0x45a4fe;
        this.taskStats = {};
        this.tasksToExecute.forEach(_0x23ffc1 => {
          {
            if (this.taskConfigs[_0x23ffc1]) {
              const _0x1aad42 = {
                success: 0,
                failed: 0,
                totalReward: 0
              };
              this.taskStats[_0x23ffc1] = _0x1aad42;
            }
          }
        });
        this.stopAllTasks = false;
        this.taskLimitReached = {};
        this.isCycleMode = TASK_CYCLE_ROUNDS > 0;
        this.cycleRounds = TASK_CYCLE_ROUNDS;
      }
      extractCookieInfo() {
        try {
          const _0x31afdd = this.cookie.match(/egid=([^;]+)/);
          const _0x27fd03 = this.cookie.match(/did=([^;]+)/);
          const _0x2dbb10 = this.cookie.match(/userId=([^;]+)/);
          const _0x2a2716 = this.cookie.match(/kuaishou\.api_st=([^;]+)/);
          const _0x1ace9b = this.cookie.match(/appver=([^;]+)/);
          this.egid = _0x31afdd ? _0x31afdd[1] : "";
          this.did = _0x27fd03 ? _0x27fd03[1] : "";
          this.userId = _0x2dbb10 ? _0x2dbb10[1] : "";
          this.kuaishouApiSt = _0x2a2716 ? _0x2a2716[1] : "";
          this.appver = _0x1ace9b ? _0x1ace9b[1] : "13.7.20.10468";
          if (!this.egid || !this.did) {
            {
              console.log("⚠️ " + this.getAccountDisplayName() + " Cookie格式可能不完整 (缺少 egid 或 did)");
            }
          }
        } catch (_0x296e0e) {
          console.log("❌ " + this.getAccountDisplayName() + " 解析Cookie失败: " + _0x296e0e.message);
        }
      }
      getAccountDisplayName() {
        return "[账号" + this.nickname + "]" + (this.remark ? "(" + this.remark + ")" : "");
      }
      getTaskStats() {
        return this.taskStats;
      }
      printTaskStats() {
        console.log("\n📊 " + this.getAccountDisplayName() + " 任务统计:");
        for (const [_0xd8893, _0x2e88b1] of Object.entries(this.taskStats)) {
          {
            const _0x25db4f = this.taskConfigs[_0xd8893];
            console.log("  " + _0x25db4f.name + ": 成功 " + _0x2e88b1.success + " 次, 失败 " + _0x2e88b1.failed + " 次, 获得金币 " + _0x2e88b1.totalReward);
          }
        }
      }
      async checkCoinLimit() {
        try {
          const _0x5bf8af = await _0x4bacd9(this.cookie, this.proxyUrl, this.index);
          if (_0x5bf8af && _0x5bf8af.totalCoin) {
            const _0x3d1cfe = parseInt(_0x5bf8af.totalCoin);
            if (_0x3d1cfe >= this.coinLimit) {
              console.log("🏁 " + this.getAccountDisplayName() + " 当前金币已达 " + _0x3d1cfe + " (上限 " + this.coinLimit + ")，停止任务");
              this.coinExceeded = true;
              this.stopAllTasks = true;
              return true;
            }
          }
          return false;
        } catch (_0x202b4f) {
          console.log("❌ " + this.getAccountDisplayName() + " 金币检查异常: " + _0x202b4f.message);
          return false;
        }
      }
      async getAdInfo(_0x2aa400) {
        try {
          const _0x2fd9cc = _0x2ef461;
          const _0x18b2a6 = {
            encData: "|encData|",
            sign: "|sign|",
            cs: "false",
            client_key: "2ac2a76d",
            videoModelCrowdTag: "1_23",
            os: "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            uQaTag: "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          };
          const _0x3dc366 = {
            earphoneMode: "1",
            mod: "Xiaomi(MI 11)",
            appver: this.appver,
            isp: "CUCC",
            language: "zh-cn",
            ud: this.userId,
            did_tag: "0",
            net: "WIFI",
            kcv: "1599",
            app: "0",
            kpf: "ANDROID_PHONE",
            ver: "11.6",
            android_os: "0",
            boardPlatform: "pineapple",
            kpn: "NEBULA",
            androidApiLevel: "35",
            country_code: "cn",
            sys: "ANDROID_15",
            sw: "1080",
            sh: "2400",
            abi: "arm64",
            userRecoBit: "0"
          };
          const _0x48e109 = {
            appId: "kuaishou_nebula",
            name: "快手极速版",
            packageName: _0x57490e,
            version: this.appver,
            versionCode: -1
          };
          const _0x42f2c2 = {
            width: _0x1c2dba,
            height: _0x49a42f
          };
          const _0x499ff6 = {
            osType: 1,
            osVersion: "15",
            deviceId: this.did,
            screenSize: _0x42f2c2,
            ftt: ""
          };
          const _0x377202 = {
            userId: this.userId,
            age: 0,
            gender: ""
          };
          const _0x11a938 = {
            pageId: _0x2aa400.pageId || _0x1fb6de,
            subPageId: _0x2aa400.subPageId,
            action: 0,
            browseType: 3,
            impExtData: "{}",
            mediaExtData: "{}"
          };
          const _0x2864bd = {
            appInfo: _0x48e109,
            deviceInfo: _0x499ff6,
            userInfo: _0x377202,
            impInfo: [_0x11a938]
          };
          const _0x56a052 = Buffer.from(JSON.stringify(_0x2864bd)).toString("base64");
          const _0x3e1f15 = await _0x4a3cb4.getEncSign(_0x56a052);
          if (!_0x3e1f15) {
            console.log("❌ " + this.getAccountDisplayName() + " 获取 encsign 失败");
            return null;
          }
          _0x18b2a6.encData = _0x3e1f15.encdata;
          _0x18b2a6.sign = _0x3e1f15.sign;
          const _0x40b5dd = await _0x4a3cb4.getNsSig({
            path: _0x2fd9cc,
            data: qs.stringify(_0x18b2a6) + "&" + qs.stringify(_0x3dc366),
            salt: this.salt
          });
          if (!_0x40b5dd) {
            console.log("❌ " + this.getAccountDisplayName() + " 获取 nssig 失败，跳过此次任务");
            return null;
          }
          const _0x4324eb = {
            ..._0x3dc366,
            sig: _0x40b5dd.sig,
            __NS_sig3: _0x40b5dd.nssig3,
            __NS_xfalcon: "",
            __NStokensig: _0x40b5dd.nstokensig
          };
          const _0x143898 = "" + _0x3aaee1 + _0x2fd9cc + "?" + querystring.stringify(_0x4324eb);
          const {
            body: _0x26ea62
          } = await _0x86a184({
            method: "POST",
            url: _0x143898,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              Host: _0x72088f,
              "User-Agent": "kwai-android aegon/3.56.0",
              Cookie: "kuaishou_api_st=" + this.kuaishouApiSt
            },
            form: _0x18b2a6,
            timeout: 12000
          }, this.proxyUrl, this.getAccountDisplayName() + " 获取广告");
          if (!_0x26ea62) {
            {
              this.adInfoFailCount++;
              console.log("❌ " + this.getAccountDisplayName() + " 获取广告信息失败，累计失败: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount);
              this.adInfoFailCount >= this.maxAdInfoFailCount && (console.log("🚨 " + this.getAccountDisplayName() + " 广告信息失败次数过多，停止运行"), this.stopAllTasks = true);
              return null;
            }
          }
          if (_0x26ea62.errorMsg === "OK" && _0x26ea62.feeds && _0x26ea62.feeds[0] && _0x26ea62.feeds[0].ad) {
            {
              const _0x2649ee = _0x26ea62.feeds[0].caption || _0x26ea62.feeds[0].ad.caption || "";
              _0x2649ee && console.log("✅ " + this.getAccountDisplayName() + " 成功获取广告：" + _0x2649ee);
              const _0x48f6ea = _0x26ea62.feeds[0].exp_tag || "";
              const _0x54561b = _0x48f6ea.split("/")[1]?.["split"]("_")?.[0] || "";
              let _0x4c6190 = 0;
              try {
                {
                  if (_0x26ea62.feeds[0].ad.extData) {
                    const _0x5a4ae9 = JSON.parse(_0x26ea62.feeds[0].ad.extData);
                    _0x4c6190 = _0x5a4ae9.awardValue || 0;
                  }
                }
              } catch (_0x563928) {}
              console.log("💰 " + this.getAccountDisplayName() + " 本次广告预计获得: " + _0x4c6190 + " 金币");
              if (_0x4c6190 === 5) {
                {
                  console.log("⏱ " + this.getAccountDisplayName() + " 检测到直播广告(5金币)，自动跳过！");
                  return null;
                }
              }
              const _0x3f9c20 = {
                cid: _0x26ea62.feeds[0].ad.creativeId,
                llsid: _0x54561b,
                expectedCoins: _0x4c6190
              };
              return _0x3f9c20;
            }
          }
          this.adInfoFailCount++;
          console.log("❌ " + this.getAccountDisplayName() + " 获取广告失败，响应异常");
          return null;
        } catch (_0x1295b3) {
          console.log("❌ " + this.getAccountDisplayName() + " 获取广告异常: " + _0x1295b3.message);
          this.adInfoFailCount++;
          return null;
        }
      }
      async generateSignature(_0x3253dd, _0x186d7c, _0x56a0b6, _0x46aa1d) {
        {
          try {
            const _0x659655 = {
              businessId: _0x46aa1d.businessId,
              endTime: this.endTime,
              extParams: "",
              mediaScene: "video",
              neoInfos: [{
                creativeId: _0x3253dd,
                extInfo: "",
                llsid: _0x186d7c,
                requestSceneType: _0x46aa1d.requestSceneType,
                taskType: _0x46aa1d.taskType,
                watchExpId: "",
                watchStage: 0
              }],
              pageId: _0x46aa1d.pageId || _0x1fb6de,
              posId: _0x46aa1d.posId,
              reportType: 0,
              sessionId: "",
              startTime: this.startTime,
              subPageId: _0x46aa1d.subPageId
            };
            const _0x211f99 = "bizStr=" + encodeURIComponent(JSON.stringify(_0x659655)) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt;
            const _0x36c982 = this.queryParams + "&" + _0x211f99;
            const _0x4bbca8 = {
              path: this.reportPath,
              data: _0x36c982,
              salt: this.salt
            };
            const _0x353e2d = await _0x4a3cb4.getNsSig(_0x4bbca8);
            if (!_0x353e2d) {
              console.log("❌ " + this.getAccountDisplayName() + " 生成报告签名失败");
              return null;
            }
            const _0x128289 = {
              sig: _0x353e2d.sig,
              sig3: _0x353e2d.nssig3,
              sigtoken: _0x353e2d.nstokensig,
              xfalcon: _0x353e2d.nssig4,
              post: _0x211f99
            };
            return _0x128289;
          } catch (_0x102815) {
            {
              console.log("❌ " + this.getAccountDisplayName() + " 生成签名异常: " + _0x102815.message);
              return null;
            }
          }
        }
      }
      async submitReport(_0x2082fd, _0x107342, _0x1a241a, _0x5554c3, _0x40de88, _0xe9cee3, _0x5cdbb9) {
        {
          try {
            const _0x43cfe2 = "" + _0x3aaee1 + this.reportPath + "?" + this.queryParams + "&sig=" + _0x2082fd + "&__NS_sig3=" + _0x107342 + "&__NS_xfalcon=&__NStokensig=" + _0x1a241a;
            const {
              body: _0x3d83ec
            } = await _0x86a184({
              method: "POST",
              url: _0x43cfe2,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Host: "api.e.kuaishou.cn",
                "User-Agent": "kwai-android aegon/3.56.0"
              },
              body: _0x40de88,
              timeout: 12000
            }, this.proxyUrl, this.getAccountDisplayName() + " 提交任务");
            const _0x4f6ef1 = {
              success: false,
              reward: 0
            };
            if (!_0x3d83ec) {
              return _0x4f6ef1;
            }
            if (_0x3d83ec.result === 1) {
              const _0x488f54 = _0x3d83ec.data?.["neoAmount"] || 0;
              const _0x5181e7 = {
                success: true,
                reward: _0x488f54
              };
              return _0x5181e7;
            }
            if ([20107, 20108, 1003, 415].includes(_0x3d83ec.result)) {
              {
                console.log("🚫 " + this.getAccountDisplayName() + " " + _0x5cdbb9.name + " 已达上限");
                this.taskLimitReached[_0xe9cee3] = true;
                const _0x4edbd8 = {
                  success: false,
                  reward: 0,
                  limitReached: true
                };
                return _0x4edbd8;
              }
            }
            const _0x137d55 = {
              success: false,
              reward: 0
            };
            return _0x137d55;
          } catch (_0x223864) {
            console.log("❌ " + this.getAccountDisplayName() + " 提交任务异常: " + _0x223864.message);
            const _0x463401 = {
              success: false,
              reward: 0
            };
            return _0x463401;
          }
        }
      }
      async executeTask(_0x3a8772, _0x4ed174 = 2, _0x3f4367 = true, _0x42986f = 0) {
        const _0x1aa6cd = this.taskConfigs[_0x3a8772];
        const _0x5e2651 = {
          success: false,
          reward: 0
        };
        if (!_0x1aa6cd) {
          return _0x5e2651;
        }
        const _0x45bca7 = {
          success: false,
          reward: 0,
          limitReached: true
        };
        if (this.taskLimitReached[_0x3a8772]) {
          return _0x45bca7;
        }
        try {
          let _0x44ce8f = null;
          let _0x5a65fd = 0;
          while (!_0x44ce8f && !this.stopAllTasks) {
            _0x5a65fd++;
            console.log("🔄 " + this.getAccountDisplayName() + " 获取广告信息(第" + _0x5a65fd + "次)");
            _0x44ce8f = await this.getAdInfo(_0x1aa6cd);
            if (_0x44ce8f) {
              break;
            }
            !_0x44ce8f && !this.stopAllTasks && (console.log("⏱ " + this.getAccountDisplayName() + " 等待3秒后重试..."), await new Promise(_0x90f2ab => setTimeout(_0x90f2ab, 3000)));
            if (_0x5a65fd > 3) {
              break;
            }
          }
          if (!_0x44ce8f) {
            {
              this.taskStats[_0x3a8772].failed++;
              const _0x141bcd = {
                success: false,
                reward: 0
              };
              return _0x141bcd;
            }
          }
          const _0x22bb66 = "👀 " + this.getAccountDisplayName() + " " + _0x1aa6cd.name + " " + _0x135bbf() + " 0秒";
          console.log(_0x22bb66);
          const _0x4f92fa = await this.retryOperation(() => this.generateSignature(_0x44ce8f.cid, _0x44ce8f.llsid, _0x3a8772, _0x1aa6cd), "生成" + _0x1aa6cd.name + "签名", 3);
          if (!_0x4f92fa) {
            this.taskStats[_0x3a8772].failed++;
            const _0x341f91 = {
              success: false,
              reward: 0
            };
            return _0x341f91;
          }
          const _0x4cd910 = await this.retryOperation(() => this.submitReport(_0x4f92fa.sig, _0x4f92fa.sig3, _0x4f92fa.sigtoken, _0x4f92fa.xfalcon, _0x4f92fa.post, _0x3a8772, _0x1aa6cd), "提交" + _0x1aa6cd.name + "报告", 3);
          if (_0x4cd910 && _0x4cd910.success) {
            const _0x5d408a = _0x4cd910.reward || 0;
            this.taskStats[_0x3a8772].success++;
            this.taskStats[_0x3a8772].totalReward += _0x5d408a;
            this.accumulatedCoins += _0x5d408a;
            console.log("💰 " + this.getAccountDisplayName() + " 本次运行累计获得: " + this.accumulatedCoins + "金币");
            console.log("💰 " + this.getAccountDisplayName() + " " + _0x1aa6cd.name + "_追加第" + (_0x42986f > 0 ? _0x42986f : 1) + "次 获得 " + _0x5d408a + " 金币");
            if (this.accumulatedCoins >= this.coinLimit) {
              console.log("🏁 累计金币达标，停止任务");
              this.stopAllTasks = true;
              const _0x4bbed9 = {
                success: true,
                reward: _0x5d408a,
                coinLimitExceeded: true
              };
              return _0x4bbed9;
            }
            const _0x4b1127 = {
              success: true,
              reward: _0x5d408a,
              limitReached: _0x4cd910.limitReached || false
            };
            return _0x4b1127;
          }
          _0x4cd910 && _0x4cd910.limitReached && (this.taskLimitReached[_0x3a8772] = true);
          this.taskStats[_0x3a8772].failed++;
          const _0x383640 = {
            success: false,
            reward: 0,
            limitReached: _0x4cd910?.["limitReached"] || false
          };
          return _0x383640;
        } catch (_0x5ca692) {
          console.log("❌ " + this.getAccountDisplayName() + " 任务异常(" + _0x3a8772 + "): " + _0x5ca692.message);
          this.taskStats[_0x3a8772].failed++;
          const _0x578b06 = {
            success: false,
            reward: 0
          };
          return _0x578b06;
        }
      }
      async retryOperation(_0x5e38fe, _0x437d97, _0x39b6cc = 5, _0x341ce4 = 2000) {
        {
          let _0x1558d1 = 0;
          while (_0x1558d1 < _0x39b6cc) {
            try {
              const _0x574da1 = await _0x5e38fe();
              if (_0x574da1) {
                return _0x574da1;
              }
            } catch (_0xdd7feb) {}
            _0x1558d1++;
            _0x1558d1 < _0x39b6cc && (console.log("🔄 " + this.getAccountDisplayName() + " " + _0x437d97 + " 重试 " + _0x1558d1 + "/" + _0x39b6cc), await new Promise(_0x5289c9 => setTimeout(_0x5289c9, _0x341ce4)));
          }
          console.log("❌ " + this.getAccountDisplayName() + " " + _0x437d97 + " 失败，已重试" + _0x39b6cc + "次");
          return null;
        }
      }
      async executeIndependentMode() {
        for (const _0x5e67ce of this.tasksToExecute) {
          if (this.stopAllTasks) {
            break;
          }
          if (this.taskLimitReached[_0x5e67ce]) {
            {
              console.log("⏭️ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x5e67ce].name + " 已达上限，跳过");
              continue;
            }
          }
          const _0xc5fce0 = _0x4c6f0f[_0x5e67ce] || 1;
          console.log("🎯 " + this.getAccountDisplayName() + " 开始执行 " + this.taskConfigs[_0x5e67ce].name + "，计划执行" + _0xc5fce0 + "次");
          for (let _0x1afaec = 1; _0x1afaec <= _0xc5fce0 && !this.stopAllTasks; _0x1afaec++) {
            if (this.taskLimitReached[_0x5e67ce]) {
              {
                console.log("🚫 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x5e67ce].name + " 已达上限，停止执行");
                break;
              }
            }
            console.log("🎯 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x5e67ce].name + " 第" + _0x1afaec + "/" + _0xc5fce0 + "次");
            const _0x2a931e = await this.executeTask(_0x5e67ce, 2, true, _0x1afaec);
            if (_0x2a931e.limitReached) {
              {
                this.taskLimitReached[_0x5e67ce] = true;
                break;
              }
            }
            if (_0x1afaec < _0xc5fce0 && !this.stopAllTasks && !this.taskLimitReached[_0x5e67ce]) {
              {
                const _0x36c244 = Math.floor(Math.random() * 1000) + 500;
                await new Promise(_0x7bed48 => setTimeout(_0x7bed48, _0x36c244));
              }
            }
          }
          console.log("✅ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x5e67ce].name + " 执行完成");
        }
      }
      async executeAllTasksByPriority() {
        await this.executeIndependentMode();
      }
    }
    async function _0x4bacd9(_0x309f6f, _0x45e7fe, _0x56bfb8) {
      {
        const _0x3bbb71 = _0x13129c;
        const {
          body: _0x12f995
        } = await _0x86a184({
          method: "GET",
          url: _0x3bbb71,
          headers: {
            Host: _0x582749,
            "User-Agent": "kwai-android aegon/3.56.0",
            Cookie: _0x309f6f,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          timeout: 12000
        }, _0x45e7fe, "获取账号基本信息");
        if (_0x12f995 && _0x12f995.result === 1 && _0x12f995.data) {
          {
            const _0x5c0fa3 = {
              nickname: _0x12f995.data.userData.nickname || null,
              totalCoin: _0x12f995.data.totalCoin ?? null,
              allCash: _0x12f995.data.allCash ?? null
            };
            return _0x5c0fa3;
          }
        }
        return null;
      }
    }
    function _0x128058(_0x4b9136) {
      const _0x1085d4 = String(_0x4b9136 || "").trim().split("#");
      if (_0x1085d4.length < 2) {
        return null;
      }
      let _0x1bbfea = "";
      let _0x32712e = "";
      let _0x3163bb = "";
      let _0x406e99 = null;
      if (_0x1085d4.length === 2) {
        {
          _0x3163bb = _0x1085d4[0];
          _0x32712e = _0x1085d4[1];
        }
      } else {
        if (_0x1085d4.length === 3) {
          {
            _0x1bbfea = _0x1085d4[0];
            _0x3163bb = _0x1085d4[1];
            _0x32712e = _0x1085d4[2];
          }
        } else {
          _0x1085d4.length >= 4 && (_0x1bbfea = _0x1085d4[0], _0x3163bb = _0x1085d4[1], _0x32712e = _0x1085d4.slice(2, _0x1085d4.length - 1).join("#"), _0x406e99 = _0x1085d4[_0x1085d4.length - 1]);
        }
      }
      _0x406e99 && !_0x406e99.startsWith("socks5://") && (_0x406e99 = null);
      const _0x148948 = {
        remark: _0x1bbfea,
        salt: _0x32712e,
        cookie: _0x3163bb,
        proxyUrl: _0x406e99
      };
      return _0x148948;
    }
    function _0x3d7035() {
      const _0x15dc3e = [];
      process.env.ksck && _0x15dc3e.push(...process.env.ksck.split("&").map(_0x3c77a5 => _0x3c77a5.trim()).filter(Boolean));
      for (let _0x2993a9 = 1; _0x2993a9 <= 100; _0x2993a9++) {
        if (process.env["ksck" + _0x2993a9]) {
          {
            _0x15dc3e.push(...process.env["ksck" + _0x2993a9].split("&").map(_0x1ce5b1 => _0x1ce5b1.trim()).filter(Boolean));
          }
        }
      }
      const _0x255477 = [...new Set(_0x15dc3e)];
      const _0x48ac56 = [];
      _0x255477.forEach((_0x4d6017, _0x3de839) => {
        {
          const _0x432ac0 = _0x128058(_0x4d6017);
          _0x432ac0 ? (_0x432ac0.index = _0x3de839 + 1, _0x48ac56.push(_0x432ac0)) : console.log("❌ 无法解析账号配置: " + _0x4d6017);
        }
      });
      return _0x48ac56;
    }
    async function _0x4510dc(_0xa9e1f2) {
      const _0xc0938 = "[账号" + _0xa9e1f2.index + "]" + (_0xa9e1f2.remark ? "(" + _0xa9e1f2.remark + ")" : "");
      console.log("\n── 🚀 开始处理 " + _0xc0938 + " ──");
      const _0x803757 = await _0x18f7b2(_0xa9e1f2.proxyUrl, _0xc0938);
      console.log("   " + _0x803757.msg);
      if (_0xa9e1f2.proxyUrl && !_0x803757.ok) {
        console.log("❌ " + _0xc0938 + " 代理失败，跳过");
        const _0x2cdcf7 = {
          index: _0xa9e1f2.index,
          error: "代理失败"
        };
        return _0x2cdcf7;
      }
      console.log("🔍 " + _0xc0938 + " 获取账号信息中...");
      const _0x15009a = await _0x4bacd9(_0xa9e1f2.cookie, _0xa9e1f2.proxyUrl, _0xa9e1f2.index);
      const _0x23dd52 = _0x15009a?.["nickname"] || "账号" + _0xa9e1f2.index;
      if (_0x15009a) {
        console.log("✅ " + _0xc0938 + " 登录成功，金币: " + _0x15009a.totalCoin + "，余额: " + _0x15009a.allCash);
        console.log("=============================================================================");
      } else {
        {
          console.log("❌ " + _0xc0938 + " 获取基本信息失败，但尝试继续执行");
        }
      }
      const _0x3adfd3 = {
        ..._0xa9e1f2,
        nickname: _0x23dd52,
        tasksToExecute: DEFAULT_TASKS
      };
      const _0x2dbf9c = new _0x333d68(_0x3adfd3);
      await _0x2dbf9c.checkCoinLimit();
      if (_0x2dbf9c.coinExceeded) {
        return {
          index: _0xa9e1f2.index,
          nickname: _0x23dd52,
          initialCoin: _0x15009a?.["totalCoin"] || 0,
          finalCoin: _0x15009a?.["totalCoin"] || 0,
          coinChange: 0,
          stats: _0x2dbf9c.getTaskStats()
        };
      }
      await _0x2dbf9c.executeAllTasksByPriority();
      const _0xca57b6 = await _0x4bacd9(_0xa9e1f2.cookie, _0xa9e1f2.proxyUrl, _0xa9e1f2.index);
      const _0xdd6f15 = _0x15009a?.["totalCoin"] || 0;
      const _0x4c2e51 = _0xca57b6?.["totalCoin"] || 0;
      _0x2dbf9c.printTaskStats();
      return {
        index: _0xa9e1f2.index,
        nickname: _0x23dd52,
        initialCoin: _0xdd6f15,
        finalCoin: _0x4c2e51,
        coinChange: _0x4c2e51 - _0xdd6f15,
        stats: _0x2dbf9c.getTaskStats()
      };
    }
    async function _0x54ace1(_0x5b0b37, _0xcbb02a, _0x1eda6b) {
      {
        const _0x385988 = [];
        const _0x5725b3 = [..._0x5b0b37];
        async function _0x289cbf() {
          while (_0x5725b3.length > 0) {
            {
              const _0x23cb1c = _0x5725b3.shift();
              try {
                const _0x5771f5 = await _0x1eda6b(_0x23cb1c);
                _0x385988.push(_0x5771f5);
              } catch (_0x4e0cc6) {
                console.log("Worker Error: " + _0x4e0cc6.message);
              }
            }
          }
        }
        const _0x346987 = Array(Math.min(_0x5b0b37.length, _0xcbb02a)).fill(null).map(() => _0x289cbf());
        await Promise.all(_0x346987);
        return _0x385988;
      }
    }
    async function _0x5095d7() {
      console.log("=============================================================================");
      const _0x343690 = await _0x37b64e();
      !_0x343690 && (console.log("程序终止"), process.exit(1));
      const _0x1ce722 = await _0x2e162b();
      !_0x1ce722 && (console.log("程序终止"), process.exit(1));
      console.log("💰 当前金币上限配置: " + KSCOIN_LIMIT);
      const _0x4d9d4a = _0x4a3cb4.getApiInfo();
      console.log("✅ 所有验证通过，开始执行主任务...");
      const _0x43ab50 = _0x3d7035();
      if (_0x43ab50.length === 0) {
        {
          console.log("❌ 未找到账号配置，请设置环境变量 ksck");
          return;
        }
      }
      console.log("⏳ 加载账号: " + _0x43ab50.length + " 个");
      console.log("=============================================================================");
      const _0x447016 = SEQUENTIAL_EXECUTION ? 1 : Math.min(_0x43ab50.length, MAX_CONCURRENCY);
      const _0x2b4034 = await _0x54ace1(_0x43ab50, _0x447016, _0x4510dc);
      console.log("\n" + "=".repeat(40));
      console.log("🎉 全部任务完成!");
      _0x2b4034.sort((_0x2bcd83, _0x2507d0) => _0x2bcd83.index - _0x2507d0.index);
      let _0x4599fc = 0;
      _0x2b4034.forEach(_0x2f2435 => {
        _0x2f2435.error ? console.log("账号" + _0x2f2435.index + ": ❌ " + _0x2f2435.error) : (console.log("账号" + _0x2f2435.index + " [" + _0x2f2435.nickname + "]: 💰 变化 " + _0x2f2435.coinChange), _0x4599fc += _0x2f2435.coinChange);
      });
      console.log("📊 总金币增长: " + _0x4599fc);
      console.log("=".repeat(40));
    }
    _0x5095d7().catch(_0x4fb94b => console.error("❌ 脚本执行异常:", _0x4fb94b));
    if (typeof global !== "undefined") {
      const _0x422604 = {
        version: "8.0",
        compatible: true,
        features: ["广告信息失败限制", "任务上限检测", "预计金币检测与跳过", "直接追加模式", "三任务并发执行", "饭补广告优先执行", "多签名接口轮询"]
      };
      global.AllBricklayersConfig = _0x422604;
    }
  } else {
    {
      console.error(_0x3fba35.msg);
    }
  }
}).catch(_0x19b2af => {
  console.error(_0x19b2af);
});
function os_km() {
  const _0x3bdb4b = [os.type(), os.platform(), os.arch(), os.release(), os.totalmem().toString(), os.cpus().length.toString()];
  return crypto.createHash("sha256").update(_0x3bdb4b.join("|")).digest("hex");
}