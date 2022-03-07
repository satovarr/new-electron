const { app, BrowserWindow, iptMain, ipcMain } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow = {};

function createWindow() {
    mainWindow = new BrowserWindow({
        width: isDev ? 2080: 960,
        height: 960,
        
    })

    mainWindow.loadURL('http://localhost:3000/')

    if(isDev){
    mainWindow.webContents.openDevTools();
    }
}


app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


ipcMain.on('greetings:sayHello', () => {
    console.log('Hello renderer! This is main process');
    mainWindow.webContents.send('greetings:message', 'Hello renderer!')
})