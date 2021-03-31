import { Actor, Engine, Scene, Input, vec } from "excalibur";
import { Hannah } from "../actors/characters";
import { RoomBlue } from "../actors/rooms/room-blue";
import { RoomGreen } from "../actors/rooms/room-green";
import { RoomRed } from "../actors/rooms/room-red";
import { GameState } from "../game-state";

export class RoomInspectScene extends Scene {
  private game: Engine;
  private state: GameState;
  private background: Actor;
  private characters: Hannah[];

  public constructor(game: Engine, state: GameState) {
    super(game);
    this.game = game;
    this.state = state;
    this.characters = [];
  }

  public onActivate() {
    this.createBackground();
    this.createCharacters();

    this.game.input.keyboard.on('press', (evt: Input.KeyEvent) => {
      if (evt.key === Input.Keys.Esc) {
        this.state.currentRoom = null;
        this.game.goToScene('roomMain');
      }
    });
  }

  public onDeactivate() {
    this.remove(this.background);
    this.characters.forEach(c => this.remove(c));
    this.characters = [];
    this.game.input.keyboard.off('press');
  }

  private createBackground(): void {
    switch (this.state.currentRoom) {
      case 'blue':
        this.background = new RoomBlue(this.game, this.state);
        break;
      case 'green':
        this.background = new RoomGreen(this.game, this.state);
        break;
      case 'red':
        this.background = new RoomRed(this.game, this.state);
        break;
    }
    this.add(this.background);
  }

  private createCharacters(): void {
    for (const [name, room] of Object.entries(this.state.characterRooms)) {
      if (room !== this.state.currentRoom) {
        continue;
      }
      switch (name) {
        case 'hannah':
          const character = new Hannah(this.game, this.state);
          character.pos = vec(this.game.drawWidth / 2 , this.game.drawHeight / 2 + 275);
          this.characters.push(character);
          this.add(character);
          break;
        default:
          break;
      }
    }
  }
}
