import { Engine, vec } from 'excalibur';
import { GameState } from '../../game-state';
import { Resources } from '../../resources';
import { GameActor } from '../game-actor';

export class RoomGreen extends GameActor {
  constructor(game: Engine, state: GameState) {
    super(game, state, {
      width: 25,
      height: 25,
      anchor: vec(0, 0),
    });
  }

  onInitialize() {
    this.addDrawing(Resources.RoomGreen);
  }
}
