import { Engine, Input, vec } from 'excalibur';
import { CharacterId, GameState, RoomId } from '../game-state';
import { Resources } from '../resources';
import { RoomMainScene, switchScene } from '../scenes';
import { GameActor } from './game-actor';

const INITIAL_SCALE = vec(0.125, 0.125);

export class CharacterCard extends GameActor {
  private name: CharacterId;
  private room: RoomId;

  constructor(game: Engine, state: GameState, name: CharacterId, room: RoomId) {
    super(game, state, {
      width: Resources.CharacterCard.width,
      height: Resources.CharacterCard.height,
      anchor: vec(0.5, 0.5),
      scale: INITIAL_SCALE
    });
    this.name = name;
    this.room = room;
  }

  onInitialize() {
    this.addDrawing(Resources.CharacterCard);

    this.on('pointerup', (evt: Input.PointerEvent) => {
      if (this.body.collider.shape.contains(evt.pos)) {
        // Assign character to room
        this.state.characterRooms[this.name] = this.room;
        switchScene(this.game, new RoomMainScene(this.game, this.state));
      }
    });
    this.on('pointerenter', () => this.scale = INITIAL_SCALE.scale(1.1));
    this.on('pointerleave', () => this.scale = INITIAL_SCALE);
  }

  onPostKill() {
    this.off('pointerup');
    this.off('pointerenter');
    this.off('pointerleave');
  }
}
