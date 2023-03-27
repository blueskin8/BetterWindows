const electron = require('electron')

const app = electron.app

const createWindow = () => {
    const win = new electron.BrowserWindow({
        width: 960,
        height: 540,
        frame: false,
        resizable: false,
        roundedCorners: true,
        movable: false,
        icon: "./src/assets/icon.ico"
    })
    win.loadFile("./src/mainPage/mainPage.html")
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

exports.close = () => app.exit(0)

electron.ipcMain.on('request-mainprocess-action', (event, arg) => {
    console.log(arg)
})