import { Actor, ActorArgs, Engine } from "excalibur";
import { GameState } from "../game-state";

export abstract class GameActor extends Actor {
  protected game: Engine;
  protected state: GameState;

  constructor(game: Engine, state: GameState, args?: ActorArgs) {
    super(args);
    this.game = game;
    this.state = state;
  }
}