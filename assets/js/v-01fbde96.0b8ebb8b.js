"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10623],{67615:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-01fbde96",path:"/devices/SPP02GIP.html",title:"Mercator SPP02GIP control via MQTT",lang:"en-US",frontmatter:{title:"Mercator SPP02GIP control via MQTT",description:"Integrate your Mercator SPP02GIP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-06-01T15:08:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (left endpoint)",slug:"switch-left-endpoint",children:[]},{level:3,title:"Switch (right endpoint)",slug:"switch-right-endpoint",children:[]},{level:3,title:"Power (numeric, left endpoint)",slug:"power-numeric-left-endpoint",children:[]},{level:3,title:"Current (numeric, left endpoint)",slug:"current-numeric-left-endpoint",children:[]},{level:3,title:"Voltage (numeric, left endpoint)",slug:"voltage-numeric-left-endpoint",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SPP02GIP.md",git:{updatedTime:1664611382e3}}},29908:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var i=o(66252);const r=(0,i.uE)('<h1 id="mercator-spp02gip" tabindex="-1"><a class="header-anchor" href="#mercator-spp02gip" aria-hidden="true">#</a> Mercator SPP02GIP</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SPP02GIP</td></tr><tr><td>Vendor</td><td>Mercator</td></tr><tr><td>Description</td><td>Ikuü double outdoors power point</td></tr><tr><td>Exposes</td><td>switch (state), power, current, voltage, energy, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SPP02GIP.jpg" alt="Mercator SPP02GIP"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),d=(0,i.Uk)("How to use device type specific configuration"),a=(0,i.uE)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric-left-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-left-endpoint" aria-hidden="true">#</a> Power (numeric, left endpoint)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric-left-endpoint" tabindex="-1"><a class="header-anchor" href="#current-numeric-left-endpoint" aria-hidden="true">#</a> Current (numeric, left endpoint)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric-left-endpoint" tabindex="-1"><a class="header-anchor" href="#voltage-numeric-left-endpoint" aria-hidden="true">#</a> Voltage (numeric, left endpoint)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),n={},c=(0,o(83744).Z)(n,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[d])),_:1})])]),a],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);