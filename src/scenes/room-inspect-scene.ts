import { Actor, Engine, Scene, Input } from "excalibur";
import { RoomBlue } from "../actors/rooms/room-blue";
import { RoomGreen } from "../actors/rooms/room-green";
import { RoomRed } from "../actors/rooms/room-red";
import { GameState } from "../game-state";

export class RoomInspectScene extends Scene {
  private game: Engine;
  private state: GameState;
  private background: Actor;

  public constructor(game: Engine, state: GameState) {
    super(game);
    this.game = game;
    this.state = state;
  }

  public onActivate() {
    switch (this.state.room) {
      case 'blue':
        this.background = new RoomBlue(this.game, this.state);
        break;
      case 'green':
        this.background = new RoomGreen(this.game, this.state);
        break;
      case 'red':
        this.background = new RoomRed(this.game, this.state);
        break;
    }
    this.add(this.background);

    this.game.input.keyboard.on('press', (evt: Input.KeyEvent) => {
      if (evt.key === Input.Keys.Esc) {
        this.state.room = 'none';
        this.game.goToScene('roomMain');
      }
    });
  }

  public onDeactivate() {
    this.remove(this.background);
    this.game.input.keyboard.off('press');
  }
}
