import{f as l,i as m}from"./vendor-651d7991.js";import{i as f}from"./bi_x-octagon-c65ecf65.js";const o=document.querySelector(".start-btn"),h=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]");let s,a,r;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],a=s.getTime()-Date.now(),s<Date.now()?(m.show({message:"Please choose a date in the future",messageColor:"#FFF",backgroundColor:"#EF4040",position:"topRight",iconUrl:f}),o.disabled=!0):o.disabled=!1},onChange(t){t.length===0?o.disabled=!0:o.disabled=!1}};function C(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:i,seconds:u}}function n(t){return t.toString().padStart(2,"0")}function b(t){const e=C(t);h.textContent=`${n(e.days)}`,y.textContent=`${n(e.hours)}`,p.textContent=`${n(e.minutes)}`,S.textContent=`${n(e.seconds)}`}function D(){r=setInterval(()=>{a<=0?clearInterval(r):(b(a),a-=1e3)},1e3)}l("#datetime-picker",g);o.addEventListener("click",()=>{D()});
//# sourceMappingURL=1-timer-7c33be1a.js.map
