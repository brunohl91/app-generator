
/**
 * Requires electron and path
 */
const {app, BrowserWindow} = require('electron');
const path = require('path');

// Stops app on close
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Defines main window
let mainWindow;
let ppapi;

// Flash Path
if (process.platform  == 'win32') { // Windows
  ppapi = path.join(__dirname, 'pepflashplayer-x86.dll');
}
else if (process.platform == 'linux') { // Linux
  ppapi = path.join(__dirname, 'libpepflashplayer.so');
}
else if (process.platform == 'darwin') { // Mac
  ppapi = path.join(__dirname, 'PepperFlashPlayer.plugin');
}

// Flags
app.commandLine.appendSwitch('ppapi-flash-path', ppapi);
app.commandLine.appendSwitch('ppapi-flash-version', '27.0.0.130');

// On load
app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 800,
    'height': 600,
    'webPreferences': {
      'plugins': true
    }
  });
  mainWindow.loadURL('https://video.letteldata.com.br/lettel/#!/entrar');
});
