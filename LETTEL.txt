
0) Montagem de Ambiente
 0.1) Baixe o Enigma:
  http://enigmaprotector.com/en/aboutvb.html
 0.2) Instale o Node + NPM
  https://nodejs.org/en/
 0.3) Instale o Electron com
  npm install -g electron

1) Gere a URL com a flag hide=true para não mostrar informação do Cliente:
  https://video.letteldata.com.br/lettel/#!/entrar?hide=true

2) Entre no diretório do projeto

3) Rode o comando:
  electron-packager . "Convert-Video-$NOMECLIENTE" --platform=win32 --arch=ia32

4) Teste a aplicação

5) Crie o portátil com o Enigma