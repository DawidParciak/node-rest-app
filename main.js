'use strict';

const path = require('path');
const { app, BrowserWindow } = require('electron');

function main() {

  // create new window
  let mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 1200,
    height: 800,
  })

  // load app/index.html as the window content
  mainWindow.loadFile(path.join('app', 'index.html'));

  mainWindow.webContents.openDevTools();
}

app.on('ready', main);

app.on('window-all-closed', function () {
  app.quit();
});