import { Engine, Scene, vec } from 'excalibur';
import { RoomBlueIcon, RoomGreenIcon, RoomRedIcon } from '../actors/room-icons';
import { GameState } from '../game-state';

/**
 * Managed scene
 */
export class RoomMainScene extends Scene {
  private engine: Engine;
  private state: GameState;
  private roomRed: RoomRedIcon;
  private roomGreen: RoomGreenIcon;
  private roomBlue: RoomBlueIcon;

  public constructor(engine: Engine, state: GameState) {
    super(engine);
    this.engine = engine;
    this.state = state;
  }

  public onInitialize() {
    this.roomRed = new RoomRedIcon(this.engine, this.state);
    this.roomRed.pos = vec(200, 200);
    this.add(this.roomRed);

    this.roomGreen = new RoomGreenIcon(this.engine, this.state);
    this.roomGreen.pos = vec(600, 200);
    this.add(this.roomGreen);

    this.roomBlue = new RoomBlueIcon(this.engine, this.state);
    this.roomBlue.pos = vec(1000, 200);
    this.add(this.roomBlue);
  }
}
