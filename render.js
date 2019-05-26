const { ipcRenderer} = require('electron')

document.getElementById("ok").addEventListener("click", function(){
    ipcRenderer.send('get')
})