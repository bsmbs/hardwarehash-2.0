const {app, BrowserWindow, Menu, ipcRenderer} = require('electron');
const url = require('url');
const path = require('path');
const os = require('os');

let win;

let iconpath = path.join(__dirname, 'ikona.png')

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 500,
        resizable: false,
        icon: iconpath
    })
    win.loadURL(url.format({
        
        pathname: path.join(__dirname, 'menu.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.setMenu(null);
}


app.on('ready', createWindow)
