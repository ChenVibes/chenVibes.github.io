electron 报错

> throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again');
> Error: Electron failed to install correctly, please delete node_modules/electron and try installing again
> at getElectronPath

```bash
ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ && node ./node_modules/electron/install.js

```
