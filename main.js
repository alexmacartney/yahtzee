const { app, BrowserWindow } = require('electron');
const path = require('path');
const { ipcMain } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
  });
  ipcMain.handle('ping', () => 'pong');
  win.loadFile('yahtzee.html');
}

app.whenReady().then(() => {
  createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})