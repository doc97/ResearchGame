import { Engine, Scene, Input, vec } from "excalibur";
import { switchScene } from ".";
import { Background, CharacterCard } from "../actors";
import { GameState, RoomId } from "../game-state";
import { RoomMainScene } from "./room-main-scene";

export class ViewCharactersScene extends Scene {
  private game: Engine;
  private state: GameState;
  private room: RoomId;
  private background: Background;
  private cards: CharacterCard[];

  public constructor(game: Engine, state: GameState, room: RoomId) {
    super(game);
    this.game = game;
    this.state = state;
    this.room = room;
  }

  public onActivate() {
    this.background = new Background(this.game, this.state);
    this.background.pos = vec(this.game.drawWidth / 2, this.game.drawHeight / 2);
    this.add(this.background);

    this.createCards();
    this.cards.forEach(c => this.add(c));
    
    this.game.input.keyboard.on('press', (evt: Input.KeyEvent) => {
      if (evt.key === Input.Keys.Esc) {
        this.state.currentRoom = null;
        switchScene(this.game, new RoomMainScene(this.game, this.state));
      }
    });
  }

  public onDeactivate() {
    this.game.input.keyboard.off('press');
    this.remove(this.background);
    this.cards.forEach(c => this.remove(c));
    this.cards = [];
  }

  private createCards(): void {
    this.cards = [];

    const characters = this.state.unlockedCharacters
      .filter(c => this.state.characterRooms[c] === undefined);
    console.log(`Characters: ${characters.toString()}`);
    for (const char of characters) {
      const card = new CharacterCard(this.game, this.state, char, this.room);
      this.cards.push(card);
    }

    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].pos = vec(128 + i * 225, 300);
    }
  }
}
