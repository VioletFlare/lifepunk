import { BrowserWindow, globalShortcut } from 'electron';

class InspectElement {
    mainWindow: BrowserWindow;

    constructor(mainWindow: BrowserWindow) {
      this.mainWindow = mainWindow;
    }

    init(): void {
        globalShortcut.register('f5', () => {
            this.mainWindow.reload();
        })
    }
}

export default InspectElement;