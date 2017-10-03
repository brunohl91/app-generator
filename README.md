# app-generator

**Generate web apps with flash enabled.**

This module was designed to generate apps on an iframe using electron and enabling flash by default

## Usage

Install Globally electron and electron-packager
```
npm install -g electron
npm install -g electron-packager
```

Clone repo and install dependencies
```
git clone https://github.com/brunohl91/app-generator.git
npm install
```

Open app.js and change this line
```
let addr = 'https://video.letteldata.com.br/lettel/#!/entrar?hide=true';
```
To
```
let addr = 'http://yoururl.service';
```
Change these lines/icons according to your app
```
  iframe = new BrowserWindow({
    'title': 'Convert Video',
    'icon': 'img/favicon.ico',
    'webPreferences': {
      'plugins': true
    }
  });
```

Run electron-packager
```
electron-packager . "Convert-Video-$NOMECLIENTE" --platform=win32 --arch=ia32
```

After you can use Enigma (http://enigmaprotector.com/en/aboutvb.html) to generate a Portable executable.

## License

[MIT](LICENSE.md)
