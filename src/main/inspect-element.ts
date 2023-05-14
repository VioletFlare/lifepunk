import { Menu, BrowserWindow } from 'electron';

class InspectElement {
    mainWindow: BrowserWindow;

    constructor(mainWindow: BrowserWindow) {
      this.mainWindow = mainWindow;
    }

    init(): void {
        this.mainWindow.webContents.on('context-menu', (_, props) => {
          const { x, y } = props;
    
          Menu.buildFromTemplate([
            {
              label: 'Inspect element',
              click: () => {
                this.mainWindow.webContents.inspectElement(x, y);
              },
            },
          ]).popup({ window: this.mainWindow });
        });
      }
}

export default InspectElement;