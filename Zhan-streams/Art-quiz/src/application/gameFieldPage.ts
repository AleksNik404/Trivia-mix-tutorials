import Control from '../common/control';

interface IQuizOptions {
  gameName: string;
  categoryIndex: number;
}

interface IQuizResults {}

export class GameFieldPage extends Control {
  onBack: () => void;
  onHome: () => void;
  onFinish: (results: IQuizResults) => void;

  constructor(parentNode: HTMLElement, dataSet = '', gameOptions: IQuizOptions) {
    super(parentNode, dataSet);
    console.log(gameOptions);

    // prettier-ignore
    const header = new Control(this.node,'headerGameField',`h1`,'', `${gameOptions.gameName} - ${gameOptions.categoryIndex}`);

    const backButton = new Control(this.node, 'btnBackGameField', 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    };

    const homeButton = new Control(this.node, 'btnHomeGameField', 'button', '', 'home');
    homeButton.node.onclick = () => {
      this.onHome();
    };

    const finishButton = new Control(this.node, 'btnFinishGameField', 'button', '', 'finish');
    finishButton.node.onclick = () => {
      this.onFinish({});
    };
  }
}
