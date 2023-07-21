console.log(123123123);
import { app, ipcMain, BrowserWindow } from 'electron';

const init = () => {
  const win = new BrowserWindow({
    frame: true, // 创建无边框
    autoHideMenuBar: true,
    center: true,
    show: true,
    width: 500,
    height: 500,
  });
  win.loadFile('./projectionControl.html');
  ipcMain.on('MAIN_SHOW_TOP', () => {
    win?.show();
    win?.focus();
  });
};

app.whenReady().then(() => {
  init();
});
