import { Engine, Input, vec } from 'excalibur';
import { GameState } from '../../game-state';
import { Resources } from '../../resources';
import { GameActor } from '../game-actor';

export class AssignButton extends GameActor {
  private toggled: boolean;

  constructor(game: Engine, state: GameState) {
    super(game, state, {
      width: 256,
      height: 128,
      anchor: vec(0.5, 0.5),
    });
  }

  public onInitialize() {
    this.addDrawing('default', Resources.ButtonCharactersDefault.asSprite());
    this.addDrawing('hover', Resources.ButtonCharactersHover.asSprite());
    this.addDrawing('down', Resources.ButtonCharactersDown.asSprite());

    this.on('pointerup', (evt: Input.PointerEvent) => {
      if (this.body.collider.shape.contains(evt.pos)) {
        this.toggle();
      }
    });

    this.setToggled(this.state.mode === 'assign');
  }

  public onPostKill() {
    this.off('pointerup');
  }

  private toggle(): void {
    this.setToggled(!this.toggled);
  }
  
  private setToggled(t: boolean): void {
    this.toggled = t;
    this.setDrawing(this.toggled ? 'down' : 'default');
    this.state.mode = this.toggled ? 'assign' : 'view';
  }
}
