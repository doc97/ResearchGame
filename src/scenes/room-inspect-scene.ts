import { Actor, Engine, Scene, Input, vec } from "excalibur";
import { switchScene } from ".";
import { Background } from "../actors";
import { Hannah } from "../actors/characters";
import { RoomBlue } from "../actors/rooms/room-blue";
import { RoomGreen } from "../actors/rooms/room-green";
import { RoomRed } from "../actors/rooms/room-red";
import { GameState } from "../game-state";
import { RoomMainScene } from "./room-main-scene";

export class RoomInspectScene extends Scene {
  private game: Engine;
  private state: GameState;
  private background: Background;
  private room: Actor;
  private characters: Hannah[];

  public constructor(game: Engine, state: GameState) {
    super(game);
    this.game = game;
    this.state = state;
    this.characters = [];
  }

  public onActivate() {
    this.createBackground();
    this.createRoom();
    this.createCharacters();

    this.game.input.keyboard.on('press', (evt: Input.KeyEvent) => {
      if (evt.key === Input.Keys.Esc) {
        this.state.currentRoom = null;
        switchScene(this.game, new RoomMainScene(this.game, this.state));
      }
    });
  }

  public onDeactivate() {
    this.remove(this.background);
    this.remove(this.room);
    this.characters.forEach(c => this.remove(c));
    this.characters = [];
    this.game.input.keyboard.off('press');
  }

  private createBackground(): void {
    this.background = new Background(this.game, this.state);
    this.background.pos = vec(this.game.drawWidth / 2, this.game.drawHeight / 2);
    this.add(this.background);
  }

  private createRoom(): void {
    switch (this.state.currentRoom) {
      case 'blue':
        this.room = new RoomBlue(this.game, this.state);
        break;
      case 'green':
        this.room = new RoomGreen(this.game, this.state);
        break;
      case 'red':
        this.room = new RoomRed(this.game, this.state);
        break;
    }
    this.add(this.room);
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
