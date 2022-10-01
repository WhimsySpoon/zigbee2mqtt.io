"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51660],{6581:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-55a99b12",path:"/devices/VOCKQJK11LM.html",title:"Xiaomi VOCKQJK11LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi VOCKQJK11LM control via MQTT",description:"Integrate your Xiaomi VOCKQJK11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-08-01T20:41:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Adapter firmware",slug:"adapter-firmware",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Voc (numeric)",slug:"voc-numeric",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Display_unit (enum)",slug:"display-unit-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/VOCKQJK11LM.md",git:{updatedTime:1664611382e3}}},28634:(e,t,i)=>{i.r(t),i.d(t,{default:()=>K});var a=i(66252);const r=(0,a.uE)('<h1 id="xiaomi-vockqjk11lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-vockqjk11lm" aria-hidden="true">#</a> Xiaomi VOCKQJK11LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>VOCKQJK11LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara TVOC air quality monitor</td></tr><tr><td>Exposes</td><td>temperature, humidity, voc, device_temperature, battery, voltage, display_unit, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/VOCKQJK11LM.jpg" alt="Xiaomi VOCKQJK11LM"></td></tr><tr><td>White-label</td><td>Xiaomi AAQS-S01</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware" aria-hidden="true">#</a> Adapter firmware</h3><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p>',5),o=(0,a.Uk)("CC2530/CC2531: "),d={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},n=(0,a._)("code",null,"20211115",-1),l=(0,a.Uk)("CC1352/CC2652: "),u={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},c=(0,a._)("code",null,"20211114",-1),s=(0,a.Uk)("CC2538: "),h={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},p=(0,a._)("code",null,"20211222",-1),m=(0,a.Uk)("Conbee II: "),f={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},b=(0,a._)("code",null,"0x26720700",-1),v=(0,a._)("p",null,[(0,a._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),g=(0,a._)("h3",{id:"pairing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,a.Uk)(" Pairing")],-1),_=(0,a._)("p",null,"Press and hold button on top of device until connection symbol appears",-1),y=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),k=(0,a.Uk)("This device supports OTA updates, for more information see "),w=(0,a.Uk)("OTA updates"),x=(0,a.Uk)("."),T=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),C=(0,a.Uk)("How to use device type specific configuration"),V=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="voc-numeric" tabindex="-1"><a class="header-anchor" href="#voc-numeric" aria-hidden="true">#</a> Voc (numeric)</h3><p>Measured VOC value. Value can be found in the published state on the <code>voc</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppb</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="display-unit-enum" tabindex="-1"><a class="header-anchor" href="#display-unit-enum" aria-hidden="true">#</a> Display_unit (enum)</h3><p>Units to show on the display. Value can be found in the published state on the <code>display_unit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_unit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_unit&quot;: NEW_VALUE}</code>. The possible values are: <code>mgm3_celsius</code>, <code>ppb_celsius</code>, <code>mgm3_fahrenheit</code>, <code>ppb_fahrenheit</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),q={},K=(0,i(83744).Z)(q,[["render",function(e,t){const i=(0,a.up)("OutboundLink"),q=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("ul",null,[(0,a._)("li",null,[o,(0,a._)("a",d,[n,(0,a.Wm)(i)])]),(0,a._)("li",null,[l,(0,a._)("a",u,[c,(0,a.Wm)(i)])]),(0,a._)("li",null,[s,(0,a._)("a",h,[p,(0,a.Wm)(i)])]),(0,a._)("li",null,[m,(0,a._)("a",f,[b,(0,a.Wm)(i)])])]),v,g,_,y,(0,a._)("p",null,[k,(0,a.Wm)(q,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[w])),_:1}),x]),T,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(q,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[C])),_:1})])]),V],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);