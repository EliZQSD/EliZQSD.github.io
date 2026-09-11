const qrDialog=document.getElementById('qrDialog');
document.getElementById('openQr').addEventListener('click',()=>qrDialog.showModal());
document.getElementById('closeQr').addEventListener('click',()=>qrDialog.close());
qrDialog.addEventListener('click',e=>{if(e.target===qrDialog)qrDialog.close()});

let deferredPrompt;
const installBtn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;installBtn.hidden=false});
installBtn.addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.hidden=true});

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js'))}
