const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        fullscreen: true, // Full screen
        frame: false, // Hide close, minimize, maximize buttons
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Load React app (use build folder for production)
    mainWindow.loadURL('http://localhost:3000');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
