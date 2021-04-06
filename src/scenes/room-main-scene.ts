import { Engine, Scene, vec } from 'excalibur';
import { RoomBlueIcon, RoomGreenIcon, RoomRedIcon } from '../actors/room-icons';
import { CharactersButton } from '../actors/ui';
import { Background } from '../actors';
import { GameState } from '../game-state';

/**
 * Managed scene
 */
export class RoomMainScene extends Scene {
  private engine: Engine;
  private state: GameState;

  private background: Background;
  private roomRed: RoomRedIcon;
  private roomGreen: RoomGreenIcon;
  private roomBlue: RoomBlueIcon;
  private button: CharactersButton;

  public constructor(engine: Engine, state: GameState) {
    super(engine);
    this.engine = engine;
    this.state = state;
  }

  public onActivate() {
    this.background = new Background(this.engine, this.state);
    this.background.pos = vec(this.engine.drawWidth / 2, this.engine.drawHeight / 2);
    this.add(this.background);

    this.roomRed = new RoomRedIcon(this.engine, this.state);
    this.roomRed.pos = vec(200, 200);
    this.add(this.roomRed);

    this.roomGreen = new RoomGreenIcon(this.engine, this.state);
    this.roomGreen.pos = vec(600, 200);
    this.add(this.roomGreen);

    this.roomBlue = new RoomBlueIcon(this.engine, this.state);
    this.roomBlue.pos = vec(1000, 200);
    this.add(this.roomBlue);

    this.button = new CharactersButton(this.engine, this.state);
    this.button.pos = vec(this.engine.drawWidth / 2, this.engine.drawHeight - 100);
    this.add(this.button);
  }

  public onDeactivate() {
    this.remove(this.roomRed);
    this.remove(this.roomGreen);
    this.remove(this.roomBlue);
    this.remove(this.button);
  }
}
