import { Engine, Input, vec } from 'excalibur';
import { GameState } from '../../game-state';
import { Resources } from '../../resources';
import { GameActor } from '../game-actor';

export class RoomBlueIcon extends GameActor {
  constructor(game: Engine, state: GameState) {
    super(game, state, {
      width: 1146,
      height: 688,
      scale: vec(0.25, 0.25), // TODO: Replace by smaller texture?
    });
  }

  onInitialize() {
    this.addDrawing(Resources.RoomBlue);

    this.enableCapturePointer = true;
    this.on('pointerup', (evt: Input.PointerEvent) => {

      if (this.body.collider.shape.contains(evt.pos)) {
        this.state.room = 'blue';
        this.game.goToScene('roomInspect');
      }
    });
    this.on('pointerenter', () => this.scale = vec(0.3, 0.3));
    this.on('pointerleave', () => this.scale = vec(0.25, 0.25));
  }

  onPostKill() {
    this.off('pointerup');
    this.off('pointerenter');
    this.off('pointerleave');
  }
}
