import { Engine, Input, vec } from 'excalibur';
import { GameState } from '../../game-state';
import { Resources } from '../../resources';
import { switchScene, ViewCharactersScene } from '../../scenes';
import { GameActor } from '../game-actor';

export class CharactersButton extends GameActor {
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

    this.on('pointerdown', () => this.setDrawing('down'));
    this.on('pointerup', (evt: Input.PointerEvent) => {
      if (this.body.collider.shape.contains(evt.pos)) {
        this.setDrawing('hover');
        switchScene(this.game, new ViewCharactersScene(this.game, this.state));
      }
    });
    this.on('pointerenter', () => this.setDrawing('hover'));
    this.on('pointerleave', () => this.setDrawing('default'));
  }

  public onPostKill() {
    this.off('pointerdown');
    this.off('pointerup');
    this.off('pointerenter');
    this.off('pointerleave');
  }
}
