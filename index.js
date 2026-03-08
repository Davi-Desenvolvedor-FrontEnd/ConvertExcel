import {app, BrowserWindow} from 'electron'
import path from 'path'

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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