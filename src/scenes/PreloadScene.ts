import { Scene } from "phaser";

class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  create() {
    this.scene.start("MainScene");
  }
}

export default PreloadScene;
