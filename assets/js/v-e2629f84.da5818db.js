"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96475],{66377:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-e2629f84",path:"/devices/TS0601_din.html",title:"TuYa TS0601_din control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0601_din control via MQTT",description:"Integrate your TuYa TS0601_din via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-05-01T14:47:09.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Manual toggle",slug:"manual-toggle",children:[]},{level:3,title:"State updates",slug:"state-updates",children:[]},{level:3,title:"Energy value",slug:"energy-value",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0601_din.md",git:{updatedTime:1664611382e3}}},74811:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const i=(0,a(66252).uE)('<h1 id="tuya-ts0601-din" tabindex="-1"><a class="header-anchor" href="#tuya-ts0601-din" aria-hidden="true">#</a> TuYa TS0601_din</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0601_din</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Zigbee smart energy meter DDS238-2 Zigbee</td></tr><tr><td>Exposes</td><td>switch (state), voltage, power, current, energy, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0601_din.jpg" alt="TuYa TS0601_din"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>In order to enter pairing mode, hold the button until you see &quot;--Init-&quot; on the screen.</p><h3 id="manual-toggle" tabindex="-1"><a class="header-anchor" href="#manual-toggle" aria-hidden="true">#</a> Manual toggle</h3><p>In order to toggle the relay manually do a triple press on the button.</p><h3 id="state-updates" tabindex="-1"><a class="header-anchor" href="#state-updates" aria-hidden="true">#</a> State updates</h3><p>As it is mentioned below in the &quot;Exposes&quot; section there is no way to read (<code>/get</code>) exposed values. The device broadcasts them itself at a fixed rate, once every 30 seconds. And the value sent is exactly the number at the moment of sending. Therefore sometimes it may lead to unreliable readings of the values like Current. E.g. in case the load connected to the relay is consuming current for 15 seconds and then sits idle (no power consumption) for another 15 seconds, then it is possible that the relay will be sending Current value as zero.</p><p>The only value that is reliable enough is Energy since it is calculated and stored incrementally.</p><h3 id="energy-value" tabindex="-1"><a class="header-anchor" href="#energy-value" aria-hidden="true">#</a> Energy value</h3><p>This value shows <code>null</code> until meter measures some about 0.2 amount of kWh consumed.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',25),r={},o=(0,a(83744).Z)(r,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);