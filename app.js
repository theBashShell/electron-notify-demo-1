  const {app, BrowserWindow, ipcMain, Notification} = require('electron');

  let win;
  let notification;

  let createWindow = () => {
      win = new BrowserWindow({
          title: 'Electron Notify',
          width: 700,
          height: 700
      });

      win.on('closed', () => {
          win = null;
      });

      win.loadFile('index.html');
      //win.webContents.openDevTools();

      notification = new Notification({
          title: 'Message Saved!',
          body: 'The message you just typed was saved to "data.txt"',
      });
  };

  app.on('ready', createWindow);


  ipcMain.on('notify', () => {
      notification.show();
  });
