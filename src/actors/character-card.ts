import { Engine, Input, vec } from 'excalibur';
import { GameState } from '../game-state';
import { Resources } from '../resources';
import { GameActor } from './game-actor';

export class CharacterCard extends GameActor {
  constructor(game: Engine, state: GameState) {
    super(game, state, {
      width: 384,
      height: 512,
      anchor: vec(0.5, 0.5),
      scale: vec(0.5, 0.5),
    });
  }

  onInitialize() {
    this.addDrawing(Resources.CharacterCard);

    this.on('pointerup', (evt: Input.PointerEvent) => {
      if (this.body.collider.shape.contains(evt.pos)) {
        // TODO: Some action
      }
    });
    this.on('pointerenter', () => this.scale = vec(0.55, 0.55));
    this.on('pointerleave', () => this.scale = vec(0.5, 0.5));
  }

  onPostKill() {
    this.off('pointerup');
    this.off('pointerenter');
    this.off('pointerleave');
  }
}
