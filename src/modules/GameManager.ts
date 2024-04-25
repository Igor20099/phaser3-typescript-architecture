//состояния игры
export enum GameState {}

export class GameManager {
  private static instance: GameManager | null = null;

  private constructor() {
    //пустой конструктор
  }

  static getInstance(): GameManager {
    if (GameManager.instance === null) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  public changeState(): void {
    //здесь логика с состоянием игры
  }
}
