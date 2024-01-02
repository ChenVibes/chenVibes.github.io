// main.js 中内容如下

const { app, BrowserWindow } = require('electron')
//关闭黄色警告
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
const path = require('path')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    //frame: false,   	//让桌面应用没有边框，这样菜单栏也会消失
    icon: path.join(__dirname, '.resources/icon.png') //应用运行时的标题栏图标
  })
  // 注意: 该路径为uniapp 发行H5/PC后生成的文件路径
  if (process.env.NODE_ENV === 'production') {
    win.loadFile('dist/index.html')
  } else {
    win.loadURL('http://127.0.0.1:5000') //链接
    // win.webContents.openDevTools() // 开启调试工具
  }
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 设置为deny 是为了取消创建新窗口
app.on('web-contents-created', (e, webContents) => {
  webContents.setWindowOpenHandler(({ url, frameName }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })
})
