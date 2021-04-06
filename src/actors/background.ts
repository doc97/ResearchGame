import { Engine, vec } from "excalibur";
import { GameActor } from "./game-actor";
import { GameState } from "../game-state";
import { Resources } from "../resources";

export class Background extends GameActor {
  constructor(game: Engine, state: GameState) {
    super(game, state, {
      anchor: vec(0.5, 0.5)
    });
  }

  onInitialize() {
    this.addDrawing(Resources.Background);
  }
}