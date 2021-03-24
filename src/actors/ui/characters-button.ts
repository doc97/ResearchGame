import { Engine, Input, vec } from 'excalibur';
import { GameState } from '../../game-state';
import { Resources } from '../../resources';
import { GameActor } from '../game-actor';

export class CharactersButton extends GameActor {
  constructor(game: Engine, state: GameState) {
    super(game, state, {
      width: 256,
      height: 128,
      anchor: vec(0.5, 0.5),
    });
  }

  onInitialize() {
    this.addDrawing('default', Resources.ButtonCharactersDefault.asSprite());
    this.addDrawing('hover', Resources.ButtonCharactersHover.asSprite());
    this.addDrawing('down', Resources.ButtonCharactersDown.asSprite());

    this.on('pointerdown', () => this.setDrawing('down'));
    this.on('pointerup', (evt: Input.PointerEvent) => {
      if (this.body.collider.shape.contains(evt.pos)) {
        this.setDrawing('hover');
        this.game.goToScene('viewCharacters');
      }
    });
    this.on('pointerenter', () => this.setDrawing('hover'));
    this.on('pointerleave', () => this.setDrawing('default'));
  }
}
