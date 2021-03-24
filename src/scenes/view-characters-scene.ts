import { Engine, Scene, Input } from "excalibur";
import { GameState } from "../game-state";

export class ViewCharactersScene extends Scene {
  private game: Engine;
  private state: GameState;

  public constructor(game: Engine, state: GameState) {
    super(game);
    this.game = game;
    this.state = state;
  }

  public onActivate() {
    this.game.input.keyboard.on('press', (evt: Input.KeyEvent) => {
      if (evt.key === Input.Keys.Esc) {
        this.state.room = 'none';
        this.game.goToScene('roomMain');
      }
    });
  }

  public onDeactivate() {
    this.game.input.keyboard.off('press');
  }
}
