"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[9552],{45156:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-2bf4d962",path:"/devices/TS0011.html",title:"TuYa TS0011 control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0011 control via MQTT",description:"Integrate your TuYa TS0011 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-08-11T22:17:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Rebrand",slug:"rebrand",children:[]},{level:3,title:"Binding and groups",slug:"binding-and-groups",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0011.md",git:{updatedTime:1652709735e3}}},80160:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var i=a(66252);const d=(0,i.uE)('<h1 id="tuya-ts0011" tabindex="-1"><a class="header-anchor" href="#tuya-ts0011" aria-hidden="true">#</a> TuYa TS0011</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0011</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Smart light switch - 1 gang</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0011.jpg" alt="TuYa TS0011"></td></tr><tr><td>White-label</td><td>Vrey VR-X712U-0013, TUYATEC GDKES-01TZXD, Lonsonho QS-Zigbee-S05-L, Mercator Ikuü SSW01</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="rebrand" tabindex="-1"><a class="header-anchor" href="#rebrand" aria-hidden="true">#</a> Rebrand</h3><p>Also branded as Yagusmart in the UK, with a version that does not require a neutral wire.</p><h3 id="binding-and-groups" tabindex="-1"><a class="header-anchor" href="#binding-and-groups" aria-hidden="true">#</a> Binding and groups</h3>',6),r=(0,i.Uk)("Devices with "),o=(0,i._)("code",null,"manufacturerName",-1),n=(0,i.Uk)(),s=(0,i._)("code",null,"_TYZB01_qeqvmvti",-1),h=(0,i.Uk)(" do not support binding and groups ("),u={href:"https://github.com/Koenkk/zigbee2mqtt/issues/5225",target:"_blank",rel:"noopener noreferrer"},l=(0,i.Uk)("link"),c=(0,i.Uk)(")."),p=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),g={},b=(0,a(83744).Z)(g,[["render",function(e,t){const a=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[r,o,n,s,h,(0,i._)("a",u,[l,(0,i.Wm)(a)]),c]),p],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);