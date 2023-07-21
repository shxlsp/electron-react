console.log('主进程开始工作');
import { app, ipcMain, BrowserWindow } from 'electron';

const init = () => {
  const win = new BrowserWindow({
    frame: false, // 创建无边框
    autoHideMenuBar: true,
    center: true,
    show: true,
    width: 500,
    height: 500,
  });
  win.loadFile('./projectionControl.html');
  ipcMain.on('MAIN_SHOW_TOP', () => {
    console.log('主窗口展示');
    win?.show();
    win?.focus();
  });
};

app.whenReady().then(() => {
  init();
});
