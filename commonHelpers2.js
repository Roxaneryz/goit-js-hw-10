import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",function(i){i.preventDefault();const e=parseInt(document.querySelector('input[name="delay"]').value),o=document.querySelector('input[name="state"]:checked').value;console.log(e),console.log(o),new Promise((t,n)=>{setTimeout(o==="fulfilled"?()=>{t(e)}:()=>{n(e)},e)}).then(t=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"bottomCenter"})}).catch(t=>{s.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"bottomCenter"})})});
//# sourceMappingURL=commonHelpers2.js.map