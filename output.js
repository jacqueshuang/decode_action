//Mon Jan 05 2026 06:49:05 GMT+0000 (Coordinated Universal Time)
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
const SIGN_API_MAX_CONCURRENCY = 10;
const REQUEST_DELAY_BASE = 1000;
const REQUEST_DELAY_RANDOM = 2000;
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;
const zhiwen = os_km();
const km = process.env.KM_KSJS;
function isValidIP(_0x1fe7d0) {
  if (!_0x1fe7d0 || typeof _0x1fe7d0 !== "string") {
    return false;
  }
  const _0x32956e = _0x1fe7d0.split(".");
  if (_0x32956e.length !== 4) {
    return false;
  }
  for (let _0x407fcb of _0x32956e) {
    {
      const _0x4e314c = parseInt(_0x407fcb, 10);
      if (isNaN(_0x4e314c) || _0x4e314c < 0 || _0x4e314c > 255 || String(_0x4e314c) !== _0x407fcb) {
        return false;
      }
    }
  }
  return true;
}
const params = {
  card: km,
  device_fingerprint: zhiwen
};
const a0_0x40b738 = {
  "Content-Type": "application/x-www-form-urlencoded"
};
const a0_0x351fe0 = {
  headers: a0_0x40b738
};
axios.post("http://175.178.244.159/kskm/verify_card.php", querystring.stringify(params), a0_0x351fe0).then(_0x15c508 => {
  const _0x303218 = _0x15c508.data;
  if (_0x303218.code === 200) {
    const _0x3a58fd = _0x303218.aaa;
    const _0x1ce92c = _0x303218.user_url;
    const _0x1f712f = _0x303218.ks_host;
    const _0xb8ca2 = _0x303218.report;
    const _0x4c8fc0 = _0x303218.ad_path;
    const _0x52e22e = _0x303218.neoParamsBase64;
    const _0xb7cd2e = _0x303218.packageName;
    const _0x3a04cf = _0x303218.pageId;
    const _0x4174d0 = _0x303218.businessId;
    const _0x24ccec = _0x303218.posId;
    const _0x49c40b = _0x303218.subPageId;
    const _0x322dba = _0x303218.search_pageId;
    const _0x49bfc9 = _0x303218.ad_businessId;
    const _0x5a0709 = _0x303218.ad_posId;
    const _0x1d1595 = _0x303218.ad_subPageId;
    const _0x95c23 = _0x303218.fb_businessId;
    const _0x2e7f2b = _0x303218.fb_posId;
    const _0x3d3518 = _0x303218.fb_subPageId;
    const _0x4fdea5 = _0x303218.ad_follow_businessId;
    const _0x1ecc31 = _0x303218.ad_follow_posId;
    const _0x46ef4a = _0x303218.ad_follow_subPageId;
    const _0x4ff900 = _0x303218.search_businessId;
    const _0x2a0ad9 = _0x303218.search_posId;
    const _0x3db0c5 = _0x303218.search_subPageId;
    const _0x199096 = _0x303218.appId;
    const _0xf07582 = _0x303218.width;
    const _0x407eef = _0x303218.height;
    const _0x4b1727 = _0x303218.all_url;
    const _0x1da7d6 = _0x303218.bb;
    const _0x3db899 = _0x303218.cc;
    const _0x5b026d = _0x303218.speed_max_fb_businessId;
    const _0x1a9817 = _0x303218.speed_max_fb_businessId_posId;
    const _0x226b90 = _0x303218.speed_max_fb_businessId_subPageId;
    const _0x2287fd = _0x303218.speed_max_ad_businessId;
    const _0x5f0c4e = _0x303218.speed_max_dj_businessId;
    const _0x794030 = _0x303218.num;
    const _0x56595a = _0x303218.ks_max_host;
    async function _0x339956() {
      const _0x4b3544 = 20260105134925;
      try {
        {
          const _0x357fd2 = await axios.get("http://175.178.244.159/kskm/ks_ql_version.php");
          if (_0x4b3544 == _0x357fd2.data.version) {
            {
              console.log("✅ 已是最新版本，开始执行...");
              return true;
            }
          } else {
            console.log("❌ 不是最新版本，请联系作者获取最新版本");
            return false;
          }
        }
      } catch (_0x1ccad1) {
        console.error("❌ 版本检查失败:", _0x1ccad1.message);
        console.log("⚠️ 版本检查失败,请检查网络环境");
        return false;
      }
    }
    !process.env.KM_KSJS && (console.error("❌ 错误：环境变量 KM_KSJS 未设置"), process.exit(1));
    const _0x3bd20a = process.env.KM_KSJS;
    const _0x765539 = process.env.lun_num;
    const _0x2e79fb = "http://175.178.244.159/kskm/verify_card.php";
    function _0x39a9dc() {
      const _0x1250f0 = [os.type(), os.platform(), os.arch(), os.release(), os.totalmem().toString(), os.cpus().length.toString()];
      return crypto.createHash("sha256").update(_0x1250f0.join("|")).digest("hex");
    }
    const _0x50fb2d = _0x39a9dc();
    async function _0x230f41() {
      try {
        {
          console.log("🔐 开始验证卡密...");
          const _0x579414 = {
            card: _0x3bd20a,
            device_fingerprint: _0x50fb2d
          };
          const _0x413da6 = {
            "Content-Type": "application/x-www-form-urlencoded"
          };
          const _0x5970a2 = {
            headers: _0x413da6
          };
          const _0x478cfb = await axios.post(_0x2e79fb, querystring.stringify(_0x579414), _0x5970a2);
          const _0x47f15d = _0x478cfb.data;
          if (_0x47f15d.code === 200) {
            console.log("✅ 卡密验证成功: " + _0x47f15d.msg);
            _0x47f15d.expire_time && console.log("⏰ 卡密到期时间: " + _0x47f15d.expire_time);
            return true;
          } else {
            {
              console.error("❌ 卡密验证失败: " + _0x47f15d.msg);
              return false;
            }
          }
        }
      } catch (_0x2fc077) {
        {
          _0x2fc077.response ? console.error("❌ 卡密验证失败: " + (_0x2fc077.response.data.msg || "未知错误")) : console.error("❌ 卡密验证请求异常: " + _0x2fc077.message);
          return false;
        }
      }
    }
    const _0x5ad435 = ["https://myip.ipip.net", "https://v4.ident.me", "https://api.ipify.org?format=json"];
    function _0x160eaa() {
      const _0xc4d5b = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
      return _0xc4d5b[Math.floor(Math.random() * _0xc4d5b.length)];
    }
    function _0x371bda() {
      {
        try {
          {
            const _0x5c8ad3 = _0x24410f => {
              const _0x419368 = "0123456789abcdef";
              let _0x461fe8 = "";
              for (let _0x8263b9 = 0; _0x8263b9 < _0x24410f; _0x8263b9++) {
                _0x461fe8 += _0x419368.charAt(Math.floor(Math.random() * _0x419368.length));
              }
              return _0x461fe8;
            };
            return "ANDROID_" + _0x5c8ad3(16);
          }
        } catch (_0x5a80d0) {
          {
            return "ANDROID_" + Date.now().toString(16).toUpperCase().substring(0, 16);
          }
        }
      }
    }
    function _0x284a6a() {
      const _0x10ab51 = {};
      const _0x37d8f1 = TASK_CONFIG_STR.split(",");
      _0x37d8f1.forEach(_0x4eec7c => {
        const [_0x6238c8, _0x496859] = _0x4eec7c.split(":").map(_0x204ad4 => _0x204ad4.trim());
        _0x6238c8 && _0x496859 && !isNaN(parseInt(_0x496859)) && (_0x10ab51[_0x6238c8] = parseInt(_0x496859));
      });
      const _0x4ba413 = {
        dj: 99999,
        lookk: 99999,
        food: 99999
      };
      const _0x5f07f4 = {
        ..._0x4ba413,
        ..._0x10ab51
      };
      return _0x5f07f4;
    }
    const _0x466078 = _0x284a6a();
    class _0x199da1 {
      constructor(_0x30cac4 = SIGN_API_MAX_CONCURRENCY) {
        this.maxConcurrent = _0x30cac4;
        this.running = 0;
        this.queue = [];
      }
      async enqueue(_0x53cd9e) {
        {
          return new Promise((_0x15bcf8, _0x8d24f5) => {
            const _0x3e1b2e = {
              requestFn: _0x53cd9e,
              resolve: _0x15bcf8,
              reject: _0x8d24f5
            };
            this.queue.push(_0x3e1b2e);
            this.processQueue();
          });
        }
      }
      async processQueue() {
        {
          if (this.running >= this.maxConcurrent || this.queue.length === 0) {
            return;
          }
          this.running++;
          const {
            requestFn: _0x551ee5,
            resolve: _0x3314a4,
            reject: _0x45cde1
          } = this.queue.shift();
          try {
            {
              const _0x3fd76c = await _0x551ee5();
              _0x3314a4(_0x3fd76c);
            }
          } catch (_0xe1788d) {
            _0x45cde1(_0xe1788d);
          } finally {
            this.running--;
            this.processQueue();
          }
        }
      }
      getQueueLength() {
        return this.queue.length;
      }
      getRunningCount() {
        return this.running;
      }
    }
    const _0x37a25b = new _0x199da1();
    class _0x1b67e3 {
      constructor() {
        this.apiUrls = _0x3a58fd.split(",").map(_0x4ba5a0 => _0x4ba5a0.trim()).filter(_0x4e3288 => _0x4e3288.length > 0);
        this.shuffleArray(this.apiUrls);
        this.currentApiIndex = 0;
        this.failedApis = new Set();
      }
      shuffleArray(_0x469af7) {
        {
          for (let _0x4c3ff5 = _0x469af7.length - 1; _0x4c3ff5 > 0; _0x4c3ff5--) {
            const _0x18345d = Math.floor(Math.random() * (_0x4c3ff5 + 1));
            [_0x469af7[_0x4c3ff5], _0x469af7[_0x18345d]] = [_0x469af7[_0x18345d], _0x469af7[_0x4c3ff5]];
          }
          return _0x469af7;
        }
      }
      async getAvailableApiUrls() {
        {
          return this.apiUrls.filter(_0x319443 => !this.failedApis.has(_0x319443));
        }
      }
      markApiAsFailed(_0xc78895) {
        this.failedApis.add(_0xc78895);
      }
      clearFailedMarks() {
        this.failedApis.clear();
        console.log("🔄 清除所有接口失败标记");
      }
      async intelligentDelay() {
        const _0x679fd0 = REQUEST_DELAY_BASE;
        const _0x812f66 = Math.random() * REQUEST_DELAY_RANDOM;
        const _0x4495b0 = _0x37a25b.getQueueLength();
        const _0x4d0bd0 = Math.min(_0x4495b0 / 10, 2);
        const _0x1a6b37 = _0x679fd0 + _0x812f66 * _0x4d0bd0;
        await new Promise(_0x42f8d7 => setTimeout(_0x42f8d7, _0x1a6b37));
      }
      async retryWithBackoff(_0x26625a, _0x261b24) {
        {
          let _0x5d572d;
          for (let _0x392abf = 1; _0x392abf <= MAX_RETRIES; _0x392abf++) {
            {
              try {
                return await _0x26625a();
              } catch (_0x20cb01) {
                {
                  _0x5d572d = _0x20cb01;
                  console.log("❌ " + _0x261b24 + " 请求失败 (尝试 " + _0x392abf + "/" + MAX_RETRIES + "): " + _0x20cb01.message);
                  if (_0x392abf < MAX_RETRIES) {
                    const _0x5d45cd = RETRY_DELAY * Math.pow(2, _0x392abf - 1);
                    console.log("⏱️ " + _0x261b24 + " 等待 " + _0x5d45cd + "ms 后重试...");
                    await new Promise(_0x30a382 => setTimeout(_0x30a382, _0x5d45cd));
                  }
                }
              }
            }
          }
          console.log("❌ " + _0x261b24 + " 请求失败，已重试" + MAX_RETRIES + "次");
          throw _0x5d572d;
        }
      }
      async getEncSign(_0x53ad3d) {
        {
          return this.retryWithBackoff(async () => {
            {
              const _0x300370 = await this.getAvailableApiUrls();
              if (_0x300370.length === 0) {
                {
                  console.log("❌ 没有可用的签名API地址，尝试重新激活所有接口");
                  this.clearFailedMarks();
                  return null;
                }
              }
              return await _0x37a25b.enqueue(async () => {
                {
                  await this.intelligentDelay();
                  let _0x5363fd = Math.floor(Math.random() * _0x300370.length);
                  for (let _0x8185db = 0; _0x8185db < _0x300370.length; _0x8185db++) {
                    const _0xcdbcdc = (_0x5363fd + _0x8185db) % _0x300370.length;
                    const _0x68ba1f = _0x300370[_0xcdbcdc];
                    try {
                      {
                        const _0x2cb623 = _0x68ba1f + _0x1da7d6;
                        const _0xfda981 = {
                          data: _0x53ad3d
                        };
                        const _0x446472 = {
                          "Content-Type": "application/json"
                        };
                        const _0x4ea289 = {
                          timeout: 15000,
                          headers: _0x446472
                        };
                        const _0x1ae262 = await axios.post(_0x2cb623, _0xfda981, _0x4ea289);
                        if (_0x1ae262.status === 200 && _0x1ae262.data && _0x1ae262.data.status === true && _0x1ae262.data.data) {
                          {
                            this.currentApiIndex = _0xcdbcdc;
                            return _0x1ae262.data.data;
                          }
                        } else {
                          this.markApiAsFailed(_0x68ba1f);
                        }
                      }
                    } catch (_0x160c18) {
                      {
                        console.log("❌ 签名接口请求失败" + _0x160c18.message);
                        this.markApiAsFailed(_0x68ba1f);
                      }
                    }
                  }
                  console.log("❌ 所有签名接口(encsign)请求失败，将在下次重试");
                  return null;
                }
              });
            }
          }, "encsign");
        }
      }
      async getNsSig(_0x30d3fe) {
        return this.retryWithBackoff(async () => {
          const _0x4c90c2 = await this.getAvailableApiUrls();
          if (_0x4c90c2.length === 0) {
            console.log("❌ 没有可用的签名API地址，尝试重新激活所有接口");
            this.clearFailedMarks();
            return null;
          }
          return await _0x37a25b.enqueue(async () => {
            await this.intelligentDelay();
            let _0x82bbbe = Math.floor(Math.random() * _0x4c90c2.length);
            for (let _0x36366d = 0; _0x36366d < _0x4c90c2.length; _0x36366d++) {
              const _0x2f7a51 = (_0x82bbbe + _0x36366d) % _0x4c90c2.length;
              const _0x3e630f = _0x4c90c2[_0x2f7a51];
              try {
                const _0x443e8b = _0x3e630f + _0x3db899;
                const _0x2a9c65 = {
                  "Content-Type": "application/json"
                };
                const _0xcbc601 = {
                  timeout: 10000,
                  headers: _0x2a9c65
                };
                const _0x4ac2ee = await axios.post(_0x443e8b, _0x30d3fe, _0xcbc601);
                if (_0x4ac2ee.status === 200 && _0x4ac2ee.data && _0x4ac2ee.data.status === true && _0x4ac2ee.data.data) {
                  {
                    this.currentApiIndex = _0x2f7a51;
                    return _0x4ac2ee.data.data;
                  }
                } else {
                  this.markApiAsFailed(_0x3e630f);
                }
              } catch (_0x2de2e5) {
                console.log("❌ 出现签名失败接口");
                this.markApiAsFailed(_0x3e630f);
              }
            }
            console.log("❌ 所有签名接口(nssig)请求失败，将在下次重试");
            return null;
          });
        }, "nssig");
      }
      getApiInfo() {
        {
          const _0x2afdd1 = this.apiUrls.filter(_0x4a90e8 => !this.failedApis.has(_0x4a90e8));
          const _0x5b40fb = {
            type: "多接口轮询",
            total: this.apiUrls.length,
            available: _0x2afdd1.length,
            urls: this.apiUrls
          };
          return _0x5b40fb;
        }
      }
    }
    const _0xd205c1 = new _0x1b67e3();
    async function _0x337d46(_0x229687, _0x17c4b9 = null, _0x343cc8 = "Unknown Request") {
      let _0x10cafe = null;
      if (_0x17c4b9) {
        {
          try {
            _0x10cafe = new SocksProxyAgent(_0x17c4b9);
          } catch (_0x3ed869) {
            console.log("❌ " + _0x343cc8 + " 代理URL无效，尝试直连");
          }
        }
      }
      const _0x4dbc6a = {
        method: _0x229687.method || "GET",
        url: _0x229687.url,
        headers: _0x229687.headers || {},
        data: _0x229687.body || _0x229687.form,
        timeout: _0x229687.timeout || REQUEST_TIMEOUT
      };
      if (_0x10cafe) {
        _0x4dbc6a.httpAgent = _0x10cafe;
        _0x4dbc6a.httpsAgent = _0x10cafe;
      } else {
        const _0x27211b = {
          rejectUnauthorized: false
        };
        _0x4dbc6a.httpsAgent = new https.Agent(_0x27211b);
      }
      try {
        {
          const _0x537bfb = await axios(_0x4dbc6a);
          const _0x327de1 = {
            response: _0x537bfb,
            body: _0x537bfb.data
          };
          return _0x327de1;
        }
      } catch (_0x2428ae) {
        {
          const _0x1d9691 = {
            response: null,
            body: null
          };
          return _0x1d9691;
        }
      }
    }
    async function _0x4a74ae(_0x46850b, _0x71dec6 = "代理检测", _0x38da45 = 3) {
      if (!_0x46850b) {
        {
          const _0x4b9598 = {
            ok: true,
            msg: "✅ 直连模式",
            ip: "localhost"
          };
          return _0x4b9598;
        }
      }
      let _0x75727d = null;
      const _0x775b3a = ["https://ip.3322.net", "https://api.ipify.org?format=json"];
      for (let _0x4525e0 = 1; _0x4525e0 <= _0x38da45; _0x4525e0++) {
        console.log("🔌 " + _0x71dec6 + " 测试代理连接中... (尝试 " + _0x4525e0 + "/" + _0x38da45 + ")");
        for (const _0x5e26dd of _0x775b3a) {
          try {
            const {
              response: _0x4c80ef,
              body: _0x2b5901
            } = await _0x337d46({
              method: "GET",
              url: _0x5e26dd,
              headers: {
                "User-Agent": "ProxyTester/1.0"
              },
              timeout: 15000
            }, _0x46850b, _0x71dec6 + " → " + new URL(_0x5e26dd).hostname);
            if (typeof _0x2b5901 === "string" && (_0x2b5901.includes("<html>") || _0x2b5901.includes("503 Service Temporarily Unavailable") || _0x2b5901.includes("502 Bad Gateway") || _0x2b5901.includes("504 Gateway Timeout"))) {
              {
                continue;
              }
            }
            if (_0x2b5901) {
              {
                let _0x874ad7 = null;
                if (_0x5e26dd.includes("httpbin.org") && _0x2b5901.origin) {
                  {
                    _0x874ad7 = _0x2b5901.origin;
                  }
                } else {
                  if (_0x5e26dd.includes("ipify.org") && _0x2b5901.ip) {
                    _0x874ad7 = _0x2b5901.ip;
                  } else {
                    typeof _0x2b5901 === "string" && !_0x2b5901.includes("<") && (_0x874ad7 = _0x2b5901.trim());
                  }
                }
                if (_0x874ad7 && isValidIP(_0x874ad7)) {
                  console.log("✅ " + _0x71dec6 + " 代理测试成功，出口IP: " + _0x874ad7);
                  const _0x3f7c85 = {
                    ok: true,
                    msg: "✅ SOCKS5代理正常，出口IP: " + _0x874ad7,
                    ip: _0x874ad7
                  };
                  return _0x3f7c85;
                }
              }
            }
          } catch (_0x3b0063) {
            _0x75727d = _0x3b0063;
            continue;
          }
          await new Promise(_0x41a2fa => setTimeout(_0x41a2fa, 500));
        }
        if (_0x4525e0 < _0x38da45) {
          {
            const _0x6c286e = _0x4525e0 * 2000;
            console.log("⏱️ " + _0x71dec6 + " 所有端点测试失败，" + _0x6c286e / 1000 + "秒后重试...");
            await new Promise(_0x4772bb => setTimeout(_0x4772bb, _0x6c286e));
          }
        }
      }
      try {
        {
          new URL(_0x46850b);
        }
      } catch (_0x24dcb1) {
        const _0x372ce5 = {
          ok: false,
          msg: "❌ 代理URL格式错误: " + _0x24dcb1.message,
          ip: null
        };
        return _0x372ce5;
      }
      const _0x1f1c45 = {
        ok: false,
        msg: "❌ 代理测试失败: " + (_0x75727d?.["message"] || "所有测试端点均无法访问"),
        ip: null
      };
      return _0x1f1c45;
    }
    class _0x4fa75a {
      constructor({
        index: _0x16d097,
        salt: _0x56740e,
        cookie: _0x29f1d7,
        nickname = "",
        proxyUrl = null,
        tasksToExecute = DEFAULT_TASKS,
        remark = ""
      }) {
        this.index = _0x16d097;
        this.salt = _0x56740e;
        this.cookie = _0x29f1d7;
        this.nickname = nickname || remark || "账号" + _0x16d097;
        this.remark = remark;
        this.proxyUrl = proxyUrl;
        this.coinLimit = KSCOIN_LIMIT;
        this.coinExceeded = false;
        this.tasksToExecute = tasksToExecute;
        this.accumulatedCoins = 0;
        this.adInfoFailCount = 0;
        this.maxAdInfoFailCount = AD_INFO_FAIL_LIMIT;
        this.taskStartDelay = Math.random() * 3000;
        this.extractCookieInfo();
        this.headers = {
          Host: _0x1f712f,
          Connection: "keep-alive",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
          Cookie: this.cookie,
          "content-type": "application/json"
        };
        this.reportPath = _0xb8ca2;
        this.startTime = Date.now();
        this.endTime = this.startTime - _0x794030;
        this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
        const _0x3528b4 = {
          name: "饭补广告",
          pageId: _0x3a04cf,
          businessId: _0x5b026d,
          posId: _0x1a9817,
          subPageId: _0x226b90,
          requestSceneType: 7,
          taskType: 2
        };
        const _0x39ad3a = {
          name: "看广告得金币",
          pageId: _0x3a04cf,
          businessId: _0x2287fd,
          posId: _0x1a9817,
          subPageId: _0x226b90,
          requestSceneType: 7,
          taskType: 2
        };
        const _0x252d2b = {
          name: "短剧广告",
          pageId: _0x3a04cf,
          businessId: _0x5f0c4e,
          posId: _0x1a9817,
          subPageId: _0x226b90,
          requestSceneType: 7,
          taskType: 2
        };
        const _0x1a395b = {
          food: _0x3528b4,
          lookk: _0x39ad3a,
          dj: _0x252d2b
        };
        this.taskConfigs = _0x1a395b;
        this.taskStats = {};
        this.tasksToExecute.forEach(_0x8f7bf9 => {
          if (this.taskConfigs[_0x8f7bf9]) {
            const _0x4d66f2 = {
              success: 0,
              failed: 0,
              totalReward: 0
            };
            this.taskStats[_0x8f7bf9] = _0x4d66f2;
          }
        });
        this.stopAllTasks = false;
        this.taskLimitReached = {};
        this.isCycleMode = TASK_CYCLE_ROUNDS > 0;
        this.cycleRounds = TASK_CYCLE_ROUNDS;
      }
      extractCookieInfo() {
        try {
          {
            const _0x66ac34 = this.cookie.match(/egid=([^;]+)/);
            const _0x14fc15 = this.cookie.match(/did=([^;]+)/);
            const _0xd752ab = this.cookie.match(/userId=([^;]+)/);
            const _0x1e7c8a = this.cookie.match(/kuaishou\.api_st=([^;]+)/);
            const _0x1aab09 = this.cookie.match(/appver=([^;]+)/);
            this.egid = _0x66ac34 ? _0x66ac34[1] : "";
            this.did = _0x14fc15 ? _0x14fc15[1] : "";
            this.userId = _0xd752ab ? _0xd752ab[1] : "";
            this.kuaishouApiSt = _0x1e7c8a ? _0x1e7c8a[1] : "";
            this.appver = _0x1aab09 ? _0x1aab09[1] : "13.7.20.10468";
            (!this.egid || !this.did) && console.log("⚠️ " + this.getAccountDisplayName() + " Cookie格式可能不完整 (缺少 egid 或 did)");
          }
        } catch (_0x23855b) {
          console.log("❌ " + this.getAccountDisplayName() + " 解析Cookie失败: " + _0x23855b.message);
        }
      }
      getAccountDisplayName() {
        return "[账号" + this.nickname + "]" + (this.remark ? "(" + this.remark + ")" : "");
      }
      getTaskStats() {
        {
          return this.taskStats;
        }
      }
      printTaskStats() {
        console.log("\n📊 " + this.getAccountDisplayName() + " 任务统计:");
        for (const [_0x589b1e, _0x34469a] of Object.entries(this.taskStats)) {
          const _0x7ac9f9 = this.taskConfigs[_0x589b1e];
          console.log("  " + _0x7ac9f9.name + ": 成功 " + _0x34469a.success + " 次, 失败 " + _0x34469a.failed + " 次, 获得金币 " + _0x34469a.totalReward);
        }
      }
      async checkCoinLimit() {
        {
          try {
            const _0x2612fa = await _0x3ded60(this.cookie, this.proxyUrl, this.index);
            if (_0x2612fa && _0x2612fa.totalCoin) {
              {
                const _0x16b455 = parseInt(_0x2612fa.totalCoin);
                if (_0x16b455 >= this.coinLimit) {
                  console.log("🏁 " + this.getAccountDisplayName() + " 当前金币已达 " + _0x16b455 + " (上限 " + this.coinLimit + ")，停止任务");
                  this.coinExceeded = true;
                  this.stopAllTasks = true;
                  return true;
                }
              }
            }
            return false;
          } catch (_0x4e4873) {
            console.log("❌ " + this.getAccountDisplayName() + " 金币检查异常: " + _0x4e4873.message);
            return false;
          }
        }
      }
      async getAdInfo(_0x4eefa5) {
        try {
          const _0x43dd6c = _0x4c8fc0;
          const _0x4d60d7 = {
            encData: "|encData|",
            sign: "|sign|",
            cs: "false",
            client_key: "2ac2a76d",
            videoModelCrowdTag: "1_23",
            os: "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            uQaTag: "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          };
          const _0x3d5a32 = {
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
          const _0x346996 = {
            appId: "kuaishou_nebula",
            name: "快手极速版",
            packageName: _0xb7cd2e,
            version: this.appver,
            versionCode: -1
          };
          const _0x214d90 = {
            width: _0xf07582,
            height: _0x407eef
          };
          const _0x123f09 = {
            osType: 1,
            osVersion: "15",
            deviceId: this.did,
            screenSize: _0x214d90,
            ftt: ""
          };
          const _0x492432 = {
            userId: this.userId,
            age: 0,
            gender: ""
          };
          const _0xe9e9e5 = {
            pageId: _0x4eefa5.pageId || _0x3a04cf,
            subPageId: _0x4eefa5.subPageId,
            action: 0,
            browseType: 3,
            impExtData: "{}",
            mediaExtData: "{}"
          };
          const _0x15984e = {
            appInfo: _0x346996,
            deviceInfo: _0x123f09,
            userInfo: _0x492432,
            impInfo: [_0xe9e9e5]
          };
          const _0x1cd3d1 = Buffer.from(JSON.stringify(_0x15984e)).toString("base64");
          const _0xf04085 = await _0xd205c1.getEncSign(_0x1cd3d1);
          if (!_0xf04085) {
            {
              console.log("❌ " + this.getAccountDisplayName() + " 获取 encsign 失败");
              return null;
            }
          }
          _0x4d60d7.encData = _0xf04085.encdata;
          _0x4d60d7.sign = _0xf04085.sign;
          const _0x133a3c = await _0xd205c1.getNsSig({
            path: _0x43dd6c,
            data: qs.stringify(_0x4d60d7) + "&" + qs.stringify(_0x3d5a32),
            salt: this.salt
          });
          if (!_0x133a3c) {
            console.log("❌ " + this.getAccountDisplayName() + " 获取 nssig 失败，跳过此次任务");
            return null;
          }
          const _0x15615c = {
            ..._0x3d5a32,
            sig: _0x133a3c.sig,
            __NS_sig3: _0x133a3c.nssig3,
            __NS_xfalcon: "",
            __NStokensig: _0x133a3c.nstokensig
          };
          const _0x3403ab = "" + _0x4b1727 + _0x43dd6c + "?" + querystring.stringify(_0x15615c);
          const _0x40b031 = {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Host: _0x56595a,
            "User-Agent": "kwai-android aegon/3.56.0",
            Cookie: "kuaishou_api_st=" + this.kuaishouApiSt
          };
          const _0xc05349 = {
            method: "POST",
            url: _0x3403ab,
            headers: _0x40b031,
            form: _0x4d60d7,
            timeout: 12000
          };
          const {
            body: _0x3ce000
          } = await _0x337d46(_0xc05349, this.proxyUrl, this.getAccountDisplayName() + " 获取广告");
          if (!_0x3ce000) {
            this.adInfoFailCount++;
            console.log("❌ " + this.getAccountDisplayName() + " 获取广告信息失败，累计失败: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount);
            this.adInfoFailCount >= this.maxAdInfoFailCount && (console.log("🚨 " + this.getAccountDisplayName() + " 广告信息失败次数过多，停止运行"), this.stopAllTasks = true);
            return null;
          }
          if (_0x3ce000.errorMsg === "OK" && _0x3ce000.feeds && _0x3ce000.feeds[0] && _0x3ce000.feeds[0].ad) {
            const _0x239d61 = _0x3ce000.feeds[0].caption || _0x3ce000.feeds[0].ad.caption || "";
            _0x239d61 && console.log("✅ " + this.getAccountDisplayName() + " 成功获取广告：" + _0x239d61);
            const _0x1293d1 = _0x3ce000.feeds[0].exp_tag || "";
            const _0x351f8f = _0x1293d1.split("/")[1]?.["split"]("_")?.[0] || "";
            let _0x517b39 = 0;
            try {
              {
                if (_0x3ce000.feeds[0].ad.extData) {
                  {
                    const _0x181de0 = JSON.parse(_0x3ce000.feeds[0].ad.extData);
                    _0x517b39 = _0x181de0.awardValue || 0;
                  }
                }
              }
            } catch (_0x4ce4dd) {}
            console.log("💰 " + this.getAccountDisplayName() + " 本次广告预计获得: " + _0x517b39 + " 金币");
            if (_0x517b39 === 5) {
              {
                console.log("⏱ " + this.getAccountDisplayName() + " 检测到直播广告(5金币)，自动跳过！");
                return null;
              }
            }
            const _0x5962ff = {
              cid: _0x3ce000.feeds[0].ad.creativeId,
              llsid: _0x351f8f,
              expectedCoins: _0x517b39
            };
            return _0x5962ff;
          }
          this.adInfoFailCount++;
          console.log("❌ " + this.getAccountDisplayName() + " 获取广告失败，响应异常");
          return null;
        } catch (_0x5232fd) {
          {
            console.log("❌ " + this.getAccountDisplayName() + " 获取广告异常: " + _0x5232fd.message);
            this.adInfoFailCount++;
            return null;
          }
        }
      }
      async generateSignature(_0x53c1f0, _0x5204b5, _0x5ce1f8, _0xedc657) {
        {
          try {
            const _0x4234e0 = {
              businessId: _0xedc657.businessId,
              endTime: this.endTime,
              extParams: "",
              mediaScene: "video",
              neoInfos: [{
                creativeId: _0x53c1f0,
                extInfo: "",
                llsid: _0x5204b5,
                requestSceneType: _0xedc657.requestSceneType,
                taskType: _0xedc657.taskType,
                watchExpId: "",
                watchStage: 0
              }],
              pageId: _0xedc657.pageId || _0x3a04cf,
              posId: _0xedc657.posId,
              reportType: 0,
              sessionId: "",
              startTime: this.startTime,
              subPageId: _0xedc657.subPageId
            };
            const _0x5d77f3 = "bizStr=" + encodeURIComponent(JSON.stringify(_0x4234e0)) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt;
            const _0xa97fd8 = this.queryParams + "&" + _0x5d77f3;
            const _0x1f43dc = {
              path: this.reportPath,
              data: _0xa97fd8,
              salt: this.salt
            };
            const _0x304e75 = await _0xd205c1.getNsSig(_0x1f43dc);
            if (!_0x304e75) {
              console.log("❌ " + this.getAccountDisplayName() + " 生成报告签名失败");
              return null;
            }
            const _0x10d895 = {
              sig: _0x304e75.sig,
              sig3: _0x304e75.nssig3,
              sigtoken: _0x304e75.nstokensig,
              xfalcon: _0x304e75.nssig4,
              post: _0x5d77f3
            };
            return _0x10d895;
          } catch (_0x42bf3a) {
            console.log("❌ " + this.getAccountDisplayName() + " 生成签名异常: " + _0x42bf3a.message);
            return null;
          }
        }
      }
      async submitReport(_0x764ab, _0x2e695e, _0x2f9451, _0x2caa34, _0x282b22, _0x23d54e, _0x26f369) {
        try {
          const _0x22adbf = "" + _0x4b1727 + this.reportPath + "?" + this.queryParams + "&sig=" + _0x764ab + "&__NS_sig3=" + _0x2e695e + "&__NS_xfalcon=&__NStokensig=" + _0x2f9451;
          const {
            body: _0x5239d5
          } = await _0x337d46({
            method: "POST",
            url: _0x22adbf,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              Host: "api.e.kuaishou.cn",
              "User-Agent": "kwai-android aegon/3.56.0"
            },
            body: _0x282b22,
            timeout: 12000
          }, this.proxyUrl, this.getAccountDisplayName() + " 提交任务");
          const _0x50b664 = {
            success: false,
            reward: 0
          };
          if (!_0x5239d5) {
            return _0x50b664;
          }
          if (_0x5239d5.result === 1) {
            const _0x8d87be = _0x5239d5.data?.["neoAmount"] || 0;
            const _0x16e6c8 = {
              success: true,
              reward: _0x8d87be
            };
            return _0x16e6c8;
          }
          if ([20107, 20108, 1003, 415].includes(_0x5239d5.result)) {
            console.log("🚫 " + this.getAccountDisplayName() + " " + _0x26f369.name + " 已达上限");
            this.taskLimitReached[_0x23d54e] = true;
            const _0x59d5f = {
              success: false,
              reward: 0,
              limitReached: true
            };
            return _0x59d5f;
          }
          const _0x4d3523 = {
            success: false,
            reward: 0
          };
          return _0x4d3523;
        } catch (_0x2fa065) {
          console.log("❌ " + this.getAccountDisplayName() + " 提交任务异常: " + _0x2fa065.message);
          const _0x252295 = {
            success: false,
            reward: 0
          };
          return _0x252295;
        }
      }
      async executeTask(_0x29803a, _0xadfe38 = 2, _0x14a882 = true, _0x49db3f = 0) {
        const _0x4b26c3 = this.taskConfigs[_0x29803a];
        const _0x26d374 = {
          success: false,
          reward: 0
        };
        if (!_0x4b26c3) {
          return _0x26d374;
        }
        const _0x31b7f0 = {
          success: false,
          reward: 0,
          limitReached: true
        };
        if (this.taskLimitReached[_0x29803a]) {
          return _0x31b7f0;
        }
        try {
          let _0x42ae69 = null;
          let _0x7b232 = 0;
          while (!_0x42ae69 && !this.stopAllTasks) {
            _0x7b232++;
            console.log("🔄 " + this.getAccountDisplayName() + " 获取广告信息(第" + _0x7b232 + "次)");
            _0x42ae69 = await this.getAdInfo(_0x4b26c3);
            if (_0x42ae69) {
              break;
            }
            if (!_0x42ae69 && !this.stopAllTasks) {
              {
                console.log("⏱ " + this.getAccountDisplayName() + " 等待3秒后重试...");
                await new Promise(_0x4b1595 => setTimeout(_0x4b1595, 3000));
              }
            }
            if (_0x7b232 > 3) {
              break;
            }
          }
          if (!_0x42ae69) {
            {
              this.taskStats[_0x29803a].failed++;
              const _0x4bb818 = {
                success: false,
                reward: 0
              };
              return _0x4bb818;
            }
          }
          const _0x234dca = "👀 " + this.getAccountDisplayName() + " " + _0x4b26c3.name + " " + _0x160eaa() + " 0秒";
          console.log(_0x234dca);
          const _0x5da1f7 = await this.retryOperation(() => this.generateSignature(_0x42ae69.cid, _0x42ae69.llsid, _0x29803a, _0x4b26c3), "生成" + _0x4b26c3.name + "签名", 3);
          if (!_0x5da1f7) {
            {
              this.taskStats[_0x29803a].failed++;
              const _0x211b38 = {
                success: false,
                reward: 0
              };
              return _0x211b38;
            }
          }
          const _0x48fe18 = await this.retryOperation(() => this.submitReport(_0x5da1f7.sig, _0x5da1f7.sig3, _0x5da1f7.sigtoken, _0x5da1f7.xfalcon, _0x5da1f7.post, _0x29803a, _0x4b26c3), "提交" + _0x4b26c3.name + "报告", 3);
          if (_0x48fe18 && _0x48fe18.success) {
            const _0x522b16 = _0x48fe18.reward || 0;
            this.taskStats[_0x29803a].success++;
            this.taskStats[_0x29803a].totalReward += _0x522b16;
            this.accumulatedCoins += _0x522b16;
            console.log("💰 " + this.getAccountDisplayName() + " 本次运行累计获得: " + this.accumulatedCoins + "金币");
            console.log("💰 " + this.getAccountDisplayName() + " " + _0x4b26c3.name + "_追加第" + (_0x49db3f > 0 ? _0x49db3f : 1) + "次 获得 " + _0x522b16 + " 金币");
            if (this.accumulatedCoins >= this.coinLimit) {
              {
                console.log("🏁 累计金币达标，停止任务");
                this.stopAllTasks = true;
                const _0x55b1e1 = {
                  success: true,
                  reward: _0x522b16,
                  coinLimitExceeded: true
                };
                return _0x55b1e1;
              }
            }
            const _0x56d2f8 = {
              success: true,
              reward: _0x522b16,
              limitReached: _0x48fe18.limitReached || false
            };
            return _0x56d2f8;
          }
          _0x48fe18 && _0x48fe18.limitReached && (this.taskLimitReached[_0x29803a] = true);
          this.taskStats[_0x29803a].failed++;
          const _0x48e070 = {
            success: false,
            reward: 0,
            limitReached: _0x48fe18?.["limitReached"] || false
          };
          return _0x48e070;
        } catch (_0x22cea1) {
          {
            console.log("❌ " + this.getAccountDisplayName() + " 任务异常(" + _0x29803a + "): " + _0x22cea1.message);
            this.taskStats[_0x29803a].failed++;
            const _0x5dde11 = {
              success: false,
              reward: 0
            };
            return _0x5dde11;
          }
        }
      }
      async retryOperation(_0x3c9dfd, _0x1b279e, _0x35402b = 5, _0x12868f = 2000) {
        let _0x181ae5 = 0;
        while (_0x181ae5 < _0x35402b) {
          {
            try {
              {
                const _0x3cbc02 = await _0x3c9dfd();
                if (_0x3cbc02) {
                  return _0x3cbc02;
                }
              }
            } catch (_0x32bf1c) {}
            _0x181ae5++;
            _0x181ae5 < _0x35402b && (console.log("🔄 " + this.getAccountDisplayName() + " " + _0x1b279e + " 重试 " + _0x181ae5 + "/" + _0x35402b), await new Promise(_0x44043c => setTimeout(_0x44043c, _0x12868f)));
          }
        }
        console.log("❌ " + this.getAccountDisplayName() + " " + _0x1b279e + " 失败，已重试" + _0x35402b + "次");
        return null;
      }
      async executeIndependentMode() {
        {
          console.log("⏱️ " + this.getAccountDisplayName() + " 等待 " + Math.round(this.taskStartDelay) + "ms 后开始执行");
          await new Promise(_0x4b9322 => setTimeout(_0x4b9322, this.taskStartDelay));
          for (const _0x36cb5a of this.tasksToExecute) {
            if (this.stopAllTasks) {
              break;
            }
            if (this.taskLimitReached[_0x36cb5a]) {
              console.log("⏭️ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x36cb5a].name + " 已达上限，跳过");
              continue;
            }
            const _0x52e552 = _0x466078[_0x36cb5a] || 1;
            console.log("🎯 " + this.getAccountDisplayName() + " 开始执行 " + this.taskConfigs[_0x36cb5a].name + "，计划执行" + _0x52e552 + "次");
            for (let _0x19e54b = 1; _0x19e54b <= _0x52e552 && !this.stopAllTasks; _0x19e54b++) {
              if (this.taskLimitReached[_0x36cb5a]) {
                {
                  console.log("🚫 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x36cb5a].name + " 已达上限，停止执行");
                  break;
                }
              }
              console.log("🎯 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x36cb5a].name + " 第" + _0x19e54b + "/" + _0x52e552 + "次");
              const _0x5a3d44 = await this.executeTask(_0x36cb5a, 2, true, _0x19e54b);
              if (_0x5a3d44.limitReached) {
                {
                  this.taskLimitReached[_0x36cb5a] = true;
                  break;
                }
              }
              if (_0x19e54b < _0x52e552 && !this.stopAllTasks && !this.taskLimitReached[_0x36cb5a]) {
                const _0x318653 = Math.floor(Math.random() * 2000) + 1000;
                await new Promise(_0xb6b2b5 => setTimeout(_0xb6b2b5, _0x318653));
              }
            }
            console.log("✅ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x36cb5a].name + " 执行完成");
          }
        }
      }
      async executeAllTasksByPriority() {
        await this.executeIndependentMode();
      }
    }
    async function _0x3ded60(_0x1f0269, _0x3898c8, _0x223c4d) {
      {
        const _0x312ac6 = _0x1ce92c;
        const _0x13847a = {
          method: "GET",
          url: _0x312ac6,
          headers: {},
          timeout: 12000
        };
        _0x13847a.headers.Host = _0x1f712f;
        _0x13847a.headers["User-Agent"] = "kwai-android aegon/3.56.0";
        _0x13847a.headers.Cookie = _0x1f0269;
        _0x13847a.headers["Content-Type"] = "application/x-www-form-urlencoded";
        const {
          body: _0x56ad6e
        } = await _0x337d46(_0x13847a, _0x3898c8, "获取账号基本信息");
        if (_0x56ad6e && _0x56ad6e.result === 1 && _0x56ad6e.data) {
          const _0x1fece4 = {
            nickname: _0x56ad6e.data.userData.nickname || null,
            totalCoin: _0x56ad6e.data.totalCoin ?? null,
            allCash: _0x56ad6e.data.allCash ?? null
          };
          return _0x1fece4;
        }
        return null;
      }
    }
    function _0x137807(_0x5772f8) {
      {
        const _0x48dffd = String(_0x5772f8 || "").trim().split("#");
        if (_0x48dffd.length < 2) {
          return null;
        }
        let _0x5ac984 = "";
        let _0x35f884 = "";
        let _0x429e5f = "";
        let _0x57da26 = null;
        if (_0x48dffd.length === 2) {
          _0x429e5f = _0x48dffd[0];
          _0x35f884 = _0x48dffd[1];
        } else {
          if (_0x48dffd.length === 3) {
            {
              _0x5ac984 = _0x48dffd[0];
              _0x429e5f = _0x48dffd[1];
              _0x35f884 = _0x48dffd[2];
            }
          } else {
            if (_0x48dffd.length >= 4) {
              {
                _0x5ac984 = _0x48dffd[0];
                _0x429e5f = _0x48dffd[1];
                _0x35f884 = _0x48dffd.slice(2, _0x48dffd.length - 1).join("#");
                _0x57da26 = _0x48dffd[_0x48dffd.length - 1];
              }
            }
          }
        }
        _0x57da26 && !_0x57da26.startsWith("socks5://") && (_0x57da26 = null);
        const _0x352f78 = {
          remark: _0x5ac984,
          salt: _0x35f884,
          cookie: _0x429e5f,
          proxyUrl: _0x57da26
        };
        return _0x352f78;
      }
    }
    function _0x3a6b76() {
      {
        const _0x5319c3 = [];
        process.env.ksck && _0x5319c3.push(...process.env.ksck.split("&").map(_0x1923eb => _0x1923eb.trim()).filter(Boolean));
        for (let _0x485bcf = 1; _0x485bcf <= 100; _0x485bcf++) {
          process.env["ksck" + _0x485bcf] && _0x5319c3.push(...process.env["ksck" + _0x485bcf].split("&").map(_0x42f4b7 => _0x42f4b7.trim()).filter(Boolean));
        }
        const _0x528b41 = [...new Set(_0x5319c3)];
        const _0xb2ce1b = [];
        _0x528b41.forEach((_0x2d7bc0, _0x5b2b6b) => {
          {
            const _0x435d67 = _0x137807(_0x2d7bc0);
            if (_0x435d67) {
              _0x435d67.index = _0x5b2b6b + 1;
              _0xb2ce1b.push(_0x435d67);
            } else {
              {
                console.log("❌ 无法解析账号配置: " + _0x2d7bc0);
              }
            }
          }
        });
        return _0xb2ce1b;
      }
    }
    async function _0x544f6a(_0x4da075) {
      const _0x3ea66e = "[账号" + _0x4da075.index + "]" + (_0x4da075.remark ? "(" + _0x4da075.remark + ")" : "");
      console.log("\n── 🚀 开始处理 " + _0x3ea66e + " ──");
      const _0x439a30 = await _0x4a74ae(_0x4da075.proxyUrl, _0x3ea66e);
      console.log("   " + _0x439a30.msg);
      if (_0x4da075.proxyUrl && !_0x439a30.ok) {
        console.log("❌ " + _0x3ea66e + " 代理失败，跳过");
        const _0xeec0b5 = {
          index: _0x4da075.index,
          error: "代理失败"
        };
        return _0xeec0b5;
      }
      console.log("🔍 " + _0x3ea66e + " 获取账号信息中...");
      const _0x5d9964 = await _0x3ded60(_0x4da075.cookie, _0x4da075.proxyUrl, _0x4da075.index);
      const _0x257999 = _0x5d9964?.["nickname"] || "账号" + _0x4da075.index;
      if (_0x5d9964) {
        {
          console.log("✅ " + _0x3ea66e + " 登录成功，金币: " + _0x5d9964.totalCoin + "，余额: " + _0x5d9964.allCash);
          console.log("=============================================================================");
        }
      } else {
        {
          console.log("❌ " + _0x3ea66e + " 获取基本信息失败，但尝试继续执行");
        }
      }
      const _0x183343 = {
        ..._0x4da075,
        nickname: _0x257999,
        tasksToExecute: DEFAULT_TASKS
      };
      const _0x5b0a37 = new _0x4fa75a(_0x183343);
      await _0x5b0a37.checkCoinLimit();
      if (_0x5b0a37.coinExceeded) {
        return {
          index: _0x4da075.index,
          nickname: _0x257999,
          initialCoin: _0x5d9964?.["totalCoin"] || 0,
          finalCoin: _0x5d9964?.["totalCoin"] || 0,
          coinChange: 0,
          stats: _0x5b0a37.getTaskStats()
        };
      }
      await _0x5b0a37.executeAllTasksByPriority();
      const _0xb99d60 = await _0x3ded60(_0x4da075.cookie, _0x4da075.proxyUrl, _0x4da075.index);
      const _0x33edc7 = _0x5d9964?.["totalCoin"] || 0;
      const _0xd19b0e = _0xb99d60?.["totalCoin"] || 0;
      _0x5b0a37.printTaskStats();
      return {
        index: _0x4da075.index,
        nickname: _0x257999,
        initialCoin: _0x33edc7,
        finalCoin: _0xd19b0e,
        coinChange: _0xd19b0e - _0x33edc7,
        stats: _0x5b0a37.getTaskStats()
      };
    }
    async function _0x15bcb6(_0x18222b, _0x6619da, _0x566590) {
      {
        const _0x381f05 = [];
        const _0xe76666 = [..._0x18222b];
        async function _0x13352c() {
          while (_0xe76666.length > 0) {
            const _0x44b305 = _0xe76666.shift();
            try {
              const _0x800ef2 = await _0x566590(_0x44b305);
              _0x381f05.push(_0x800ef2);
            } catch (_0x57daeb) {
              console.log("Worker Error: " + _0x57daeb.message);
            }
          }
        }
        const _0x3bc79f = Array(Math.min(_0x18222b.length, _0x6619da)).fill(null).map(() => _0x13352c());
        await Promise.all(_0x3bc79f);
        return _0x381f05;
      }
    }
    async function _0xb1ed07() {
      console.log("=============================================================================");
      const _0x479270 = await _0x339956();
      !_0x479270 && (console.log("程序终止"), process.exit(1));
      const _0x56ad3f = await _0x230f41();
      if (!_0x56ad3f) {
        {
          console.log("程序终止");
          process.exit(1);
        }
      }
      console.log("💰 当前金币上限配置: " + KSCOIN_LIMIT);
      const _0x1fc0d0 = _0xd205c1.getApiInfo();
      console.log("✅ 所有验证通过，开始执行主任务...");
      const _0x2b80c3 = _0x3a6b76();
      if (_0x2b80c3.length === 0) {
        console.log("❌ 未找到账号配置，请设置环境变量 ksck");
        return;
      }
      console.log("⏳ 加载账号: " + _0x2b80c3.length + " 个");
      console.log("=============================================================================");
      const _0x4ce560 = SEQUENTIAL_EXECUTION ? 1 : Math.min(_0x2b80c3.length, MAX_CONCURRENCY);
      const _0x3cc500 = await _0x15bcb6(_0x2b80c3, _0x4ce560, _0x544f6a);
      console.log("\n" + "=".repeat(40));
      console.log("🎉 全部任务完成!");
      _0x3cc500.sort((_0x5e6d14, _0xfe82e8) => _0x5e6d14.index - _0xfe82e8.index);
      let _0x44c917 = 0;
      _0x3cc500.forEach(_0x33ab39 => {
        _0x33ab39.error ? console.log("账号" + _0x33ab39.index + ": ❌ " + _0x33ab39.error) : (console.log("账号" + _0x33ab39.index + " [" + _0x33ab39.nickname + "]: 💰 变化 " + _0x33ab39.coinChange), _0x44c917 += _0x33ab39.coinChange);
      });
      console.log("📊 总金币增长: " + _0x44c917);
      console.log("=".repeat(40));
    }
    _0xb1ed07().catch(_0x58fb04 => console.error("❌ 脚本执行异常:", _0x58fb04));
    if (typeof global !== "undefined") {
      const _0x56cac3 = {
        version: "8.0",
        compatible: true,
        features: ["广告信息失败限制", "任务上限检测", "预计金币检测与跳过", "直接追加模式", "多账号并发控制", "签名接口并发控制", "智能延迟策略"]
      };
      global.AllBricklayersConfig = _0x56cac3;
    }
  } else {
    console.error(_0x303218.msg);
  }
}).catch(_0x33d27a => {
  console.error(_0x33d27a);
});
function os_km() {
  const _0x42fd91 = [os.type(), os.platform(), os.arch(), os.release(), os.totalmem().toString(), os.cpus().length.toString()];
  return crypto.createHash("sha256").update(_0x42fd91.join("|")).digest("hex");
}