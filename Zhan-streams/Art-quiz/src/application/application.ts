import Control from '../common/control';
import { StartPage } from './startPage';
import { SettingsPage } from './settingsPage';
import { GameOverPage } from './gameOverPage';
import { GameFieldPage } from './gameFieldPage';
import { CategoriesPage } from './categoriesPage';

export class Application extends Control {
  constructor(parentNode: HTMLElement, dataSet = '') {
    super(parentNode, dataSet);
    this.mainCycle();
  }

  private gameCycle(gameName: string, categoryIndex: number) {
    const gameField = new GameFieldPage(this.node, 'appGameField', {
      gameName,
      categoryIndex,
    });
    gameField.onHome = () => {
      gameField.destroy();
      this.mainCycle();
    };
    gameField.onBack = () => {
      gameField.destroy();
      this.categoryCycle(gameName);
    };

    gameField.onFinish = (result) => {
      gameField.destroy();
      const gameOverPage = new GameOverPage(this.node, 'appGameOverPage', result);
      gameOverPage.onHome = () => {
        gameOverPage.destroy();
        this.mainCycle();
      };
      gameOverPage.onNext = () => {
        // if(categoryIndex >)
        gameOverPage.destroy();
        this.gameCycle(gameName, categoryIndex);
      };
    };
  }

  private categoryCycle(gameName: string) {
    const categories = new CategoriesPage(this.node, 'appCategoriesPage', gameName);
    categories.onBack = () => {
      categories.destroy();
      this.mainCycle();
    };

    categories.onSelect = (index) => {
      categories.destroy();
      this.gameCycle(gameName, index);
    };
  }

  private mainCycle() {
    const startPage = new StartPage(this.node, 'appStartPage');

    startPage.onGameSelect = (gameName) => {
      startPage.destroy();
      this.categoryCycle(gameName);
    };

    startPage.onSettings = () => {
      startPage.destroy();

      const settingsPage = new SettingsPage(this.node, 'appSettingsPage');
      settingsPage.onBack = () => {
        settingsPage.destroy();
        this.mainCycle();
      };
      settingsPage.onSave = (settings) => {
        console.log(settings);
        settingsPage.destroy();
        this.mainCycle();
      };
    };
  }
}
