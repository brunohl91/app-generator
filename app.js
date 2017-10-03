
/**
 * Requires electron and path
 */
const {app, globalShortcut, BrowserWindow} = require('electron');
const path = require('path');

// Stops app on close
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Defines main window
let iframe;
let ppapi;
let addr = 'https://video.letteldata.com.br/lettel/#!/entrar?hide=true';

// Flash Path
if (process.platform  == 'win32') { // Windows
  ppapi = path.join(__dirname, '/resource/pepflashplayer-x86.dll');
}
else if (process.platform == 'linux') { // Linux
  ppapi = path.join(__dirname, '/resource/libpepflashplayer.so');
}
else if (process.platform == 'darwin') { // Mac
  ppapi = path.join(__dirname, '/resource/PepperFlashPlayer.plugin');
}

// Flags
app.commandLine.appendSwitch('ppapi-flash-path', ppapi);
app.commandLine.appendSwitch('ppapi-flash-version', '27.0.0.130');

// On load
app.on('ready', function() {

  // Defines window
  iframe = new BrowserWindow({
    'title': 'Convert Video',
    'icon': 'img/favicon.ico',
    'webPreferences': {
      'plugins': true
    }
  });

  iframe.maximize();
  iframe.loadURL( addr );

  globalShortcut.register('F5', () => {
    iframe.reload();
  })


});
