"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79522],{69721:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-d6108488",path:"/devices/X5H-GB-B.html",title:"TuYa X5H-GB-B control via MQTT",lang:"en-US",frontmatter:{title:"TuYa X5H-GB-B control via MQTT",description:"Integrate your TuYa X5H-GB-B via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-01T15:06:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Schedule (text)",slug:"schedule-text",children:[]},{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Week (enum)",slug:"week-enum",children:[]},{level:3,title:"Brightness_state (enum)",slug:"brightness-state-enum",children:[]},{level:3,title:"Sound (binary)",slug:"sound-binary",children:[]},{level:3,title:"Frost_protection (binary)",slug:"frost-protection-binary",children:[]},{level:3,title:"Factory_reset (binary)",slug:"factory-reset-binary",children:[]},{level:3,title:"Heating_temp_limit (numeric)",slug:"heating-temp-limit-numeric",children:[]},{level:3,title:"Deadzone_temperature (numeric)",slug:"deadzone-temperature-numeric",children:[]},{level:3,title:"Upper_temp (numeric)",slug:"upper-temp-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/X5H-GB-B.md",git:{updatedTime:1664611382e3}}},44238:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const d=(0,o(66252).uE)('<h1 id="tuya-x5h-gb-b" tabindex="-1"><a class="header-anchor" href="#tuya-x5h-gb-b" aria-hidden="true">#</a> TuYa X5H-GB-B</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>X5H-GB-B</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Wall-mount thermostat</td></tr><tr><td>Exposes</td><td>climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, preset, sensor), schedule, lock (state), week, brightness_state, sound, frost_protection, factory_reset, heating_temp_limit, deadzone_temperature, upper_temp, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/X5H-GB-B.jpg" alt="TuYa X5H-GB-B"></td></tr><tr><td>White-label</td><td>Beok TGR85-ZB</td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>, <code>preset</code>, <code>sensor</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>60</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>program</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code></li></ul><h3 id="schedule-text" tabindex="-1"><a class="header-anchor" href="#schedule-text" aria-hidden="true">#</a> Schedule (text)</h3><p>There are 8 periods in the schedule in total. 6 for workdays and 2 for holidays. It should be set in the following format for each of the periods: <code>hours:minutes/temperature</code>. All periods should be set at once and delimited by the space symbol. For example: <code>06:00/20.5 08:00/15 11:30/15 13:30/15 17:00/22 22:00/15 06:00/20 22:00/15</code>. The thermostat doesn&#39;t report the schedule by itself even if you change it manually from device. Value can be found in the published state on the <code>schedule</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule&quot;: NEW_VALUE}</code>.</p><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="week-enum" tabindex="-1"><a class="header-anchor" href="#week-enum" aria-hidden="true">#</a> Week (enum)</h3><p>Week format user for schedule. Value can be found in the published state on the <code>week</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;week&quot;: NEW_VALUE}</code>. The possible values are: <code>5+2</code>, <code>6+1</code>, <code>7</code>.</p><h3 id="brightness-state-enum" tabindex="-1"><a class="header-anchor" href="#brightness-state-enum" aria-hidden="true">#</a> Brightness_state (enum)</h3><p>Screen brightness. Value can be found in the published state on the <code>brightness_state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_state&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="sound-binary" tabindex="-1"><a class="header-anchor" href="#sound-binary" aria-hidden="true">#</a> Sound (binary)</h3><p>Switches beep sound when interacting with thermostat. Value can be found in the published state on the <code>sound</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> sound is ON, if <code>OFF</code> OFF.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary" aria-hidden="true">#</a> Frost_protection (binary)</h3><p>Antifreeze function. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost_protection is ON, if <code>OFF</code> OFF.</p><h3 id="factory-reset-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-binary" aria-hidden="true">#</a> Factory_reset (binary)</h3><p>Resets all settings to default. Doesn&#39;t unpair device.. Value can be found in the published state on the <code>factory_reset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory_reset is ON, if <code>OFF</code> OFF.</p><h3 id="heating-temp-limit-numeric" tabindex="-1"><a class="header-anchor" href="#heating-temp-limit-numeric" aria-hidden="true">#</a> Heating_temp_limit (numeric)</h3><p>Heating temperature limit. Value can be found in the published state on the <code>heating_temp_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;heating_temp_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepected: <code>default</code>.</p><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric" aria-hidden="true">#</a> Deadzone_temperature (numeric)</h3><p>The delta between local_temperature and current_heating_setpoint to trigger Heat. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>9.5</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepected: <code>default</code>.</p><h3 id="upper-temp-numeric" tabindex="-1"><a class="header-anchor" href="#upper-temp-numeric" aria-hidden="true">#</a> Upper_temp (numeric)</h3><p>Value can be found in the published state on the <code>upper_temp</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;upper_temp&quot;: NEW_VALUE}</code>. The minimal value is <code>35</code> and the maximum value is <code>95</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepected: <code>default</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',28),a={},i=(0,o(83744).Z)(a,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);