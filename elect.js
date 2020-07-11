const { app, BrowserWindow } = require('electron')
let win = null
app.on('ready', function () {
    win = new BrowserWindow({ width: 1000, height: 600 })

    win.loadURL(`${__dirname}/index.html`)

    win.on('closed', function () {
        win = null
    })
})

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit()
    }
})