import {app, BrowserWindow} from 'electron'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, './assets/logo.png')
    })
    win.loadFile("index.html")
}

app.whenReady().then(()=>{
    createWindow()
})