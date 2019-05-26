const { app, BrowserWindow, ipcMain, net } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile(__dirname + '/index.html')
}

ipcMain.on('open-win-info', ()=>{
  let info = new BrowserWindow({
    width: 400,
    height: 300
  })

  info.loadFile(__dirname + '/view/info.html')
})


ipcMain.on('get', () => {
  const url = "http://localhost"
  const request = net.request({
    method: 'GET',
    protocol: 'http:',
    hostname: url,
    port: 3000,
    path: '/nota'
  })

  request.on('response', data => {
    console.log(data)
  })

  request.end()
})


app.on('ready', createWindow)