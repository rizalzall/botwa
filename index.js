import { exec } from 'child_process';

const _0x55b40f=_0x3f2e;(function(_0x5c410b,_0x462953){const _0x3837f7=_0x3f2e,_0x311813=_0x5c410b();while(!![]){try{const _0x5824f7=parseInt(_0x3837f7(0x8c))/0x1*(-parseInt(_0x3837f7(0x91))/0x2)+parseInt(_0x3837f7(0x8e))/0x3*(-parseInt(_0x3837f7(0x90))/0x4)+-parseInt(_0x3837f7(0x79))/0x5+parseInt(_0x3837f7(0x81))/0x6+-parseInt(_0x3837f7(0x7e))/0x7*(parseInt(_0x3837f7(0x80))/0x8)+parseInt(_0x3837f7(0x76))/0x9*(-parseInt(_0x3837f7(0x78))/0xa)+parseInt(_0x3837f7(0x8f))/0xb;if(_0x5824f7===_0x462953)break;else _0x311813['push'](_0x311813['shift']());}catch(_0x1356a3){_0x311813['push'](_0x311813['shift']());}}}(_0x4c6a,0x9391b));function _0x4c6a(){const _0x4e9924=['url','7wHOjHC','center','2907nAQBdE','38947469LSARuw','3076QLBjun','198504cPEETl','argv','❎\x20Exited\x20with\x20code:','red','36yxpxPV','Simple\x20Whatsapp\x20Bot\x20Use\x20QR\x20Code\x20&\x20Pairing\x20Code\x0aWith\x20Baileys\x20Library\x0a\x0aInstagram:\x20https://instagram.com/maximusstore.id\x0aFacebook:\x20https://facebook.com/maximusstoreindonesia\x0aWhatsApp:\x20wa.me/6281283516246\x0a\x0a','2580640aYPICU','696705JaVaWV','inherit','clear','blue','exit','3446261yQBueh','console','8bdOnUi','1005654ajTNoe','error','bold','slice','say','ipc','\x0aTerima\x20kasih\x20telah\x20menggunakan\x20sc\x20ini.','main.js','\x0a\x0aAssisten-YuLa\x20Bot\x0a','log'];_0x4c6a=function(){return _0x4e9924;};return _0x4c6a();}import{spawn}from'child_process';import _0x51778d from'path';import{clear}from'console';import{promisify}from'util';import{fileURLToPath}from'url';import{join,dirname}from'path';const sleep=_0x1be527=>{return new Promise(_0x3b5847=>setTimeout(_0x3b5847,_0x1be527));};import _0xe6951a from'cfonts';import _0x5cb723 from'chalk';function _0x3f2e(_0x28b05c,_0xb16f57){const _0x4c6a36=_0x4c6a();return _0x3f2e=function(_0x3f2ec7,_0x24ac09){_0x3f2ec7=_0x3f2ec7-0x76;let _0x2761af=_0x4c6a36[_0x3f2ec7];return _0x2761af;},_0x3f2e(_0x28b05c,_0xb16f57);}console[_0x55b40f(0x7b)]();const __dirname=dirname(fileURLToPath(import.meta[_0x55b40f(0x8b)])),start=async()=>{const _0x106a03=_0x55b40f,_0x5985d7=[_0x51778d['join'](__dirname,_0x106a03(0x88)),...process[_0x106a03(0x92)][_0x106a03(0x84)](0x2)],_0x1d8993=spawn(process['argv'][0x0],_0x5985d7,{'stdio':[_0x106a03(0x7a),'inherit',_0x106a03(0x7a),_0x106a03(0x86)]});_0x1d8993['on'](_0x106a03(0x7d),_0x2f4bf9=>{const _0x117e65=_0x106a03;console[_0x117e65(0x82)](_0x117e65(0x93),_0x2f4bf9);if(_0x2f4bf9==='.'||_0x2f4bf9===0x1||_0x2f4bf9===0x0)start();});};await sleep(0x7d0),_0xe6951a[_0x55b40f(0x85)](_0x55b40f(0x89),{'font':'tiny','align':'center','gradient':[_0x55b40f(0x94),_0x55b40f(0x7c)]}),_0xe6951a[_0x55b40f(0x85)](_0x55b40f(0x77),{'font':_0x55b40f(0x7f),'align':_0x55b40f(0x8d),'colors':['blue']}),console[_0x55b40f(0x8a)](_0x5cb723[_0x55b40f(0x83)]['green'](_0x55b40f(0x87))),start();


function restartBot() {
  exec('npm start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error restarting bot: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
  });
  process.exit();
}

// Example trigger to restart the bot
// This could be a command from a user, a specific condition, etc.
if (someConditionToRestart) {
  restartBot();
}
