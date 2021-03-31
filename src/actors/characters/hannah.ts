import { Engine, SpriteSheet, vec } from 'excalibur';
import { GameState } from '../../game-state';
import { Resources } from '../../resources';
import { GameActor } from '../game-actor';

export class Hannah extends GameActor {
  private xOffset: number;
  private xDelta: number;
  private xStart: number;
  private readonly X_LEFT = -350;
  private readonly X_RIGHT = 200;

  constructor(game: Engine, state: GameState) {
    super(game, state, {
      width: 162,
      height: 315,
      anchor: vec(0.5, 1.0),
    });
  }

  public onInitialize(): void {
    const sheet = new SpriteSheet(Resources.HannahWalk, 12, 2, 166, 339);
    const leftAnim = sheet.getAnimationBetween(this.game, 0, 11, 1000 / 6);
    const rightAnim = sheet.getAnimationBetween(this.game, 12, 23, 1000 / 6);

    this.addDrawing('leftWalk', leftAnim);
    this.addDrawing('rightWalk', rightAnim);
    this.setDrawing('leftWalk');

    this.xOffset = 0;
    this.xDelta = -75;
    this.xStart = this.pos.x;
  }

  public onPostUpdate(_engine: Engine, delta: number): void {
    this.xOffset += this.xDelta * delta / 1000.0;
    if (this.xOffset < this.X_LEFT) {
      this.xOffset = this.X_LEFT;
      this.xDelta = -this.xDelta;
      this.setDrawing('rightWalk');
    } else if (this.xOffset > this.X_RIGHT) {
      this.xOffset = this.X_RIGHT;
      this.xDelta = -this.xDelta;
      this.setDrawing('leftWalk');
    }

    this.pos.setTo(this.xStart + this.xOffset, this.pos.y)
  }
}
