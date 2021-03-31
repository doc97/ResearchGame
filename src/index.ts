import { Engine, Loader, DisplayMode } from 'excalibur';
import { Resources } from './resources';
import { GameState } from './game-state';
import { RoomMainScene, RoomInspectScene, ViewCharactersScene, switchScene } from './scenes';

/**
 * Managed game class
 */
class Game extends Engine {
  private roomMainScene: RoomMainScene;
  private roomInspectScene: RoomInspectScene;
  private viewCharactersScene: ViewCharactersScene;
  private state: GameState;

  constructor() {
    super({
      displayMode: DisplayMode.Position,
      position: { left: 'calc(50% - 640px)', top: 'calc(50% - 360px)'},
      viewport: { width: 1280, height: 720 }, // 720p
      resolution: { width: 1280, height: 720 }, // 720p
    });
  }

  public start() {
    this.state = new GameState();

    this.roomMainScene = new RoomMainScene(this, this.state);
    this.roomInspectScene = new RoomInspectScene(this, this.state);
    this.viewCharactersScene = new ViewCharactersScene(this, this.state);

    /*
    game.add('roomMain', this.roomMainScene);
    game.add('roomInspect', this.roomInspectScene);
    game.add('viewCharacters', this.viewCharactersScene);
    */

    // Automatically load all default resources
    const loader = new Loader(Object.values(Resources));

    return super.start(loader).then(() => {
      switchScene(this, new RoomMainScene(this, this.state));
    });
  }
}

const game = new Game();
game.start();
