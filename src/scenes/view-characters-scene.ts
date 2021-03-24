import { Engine, Scene, Input, vec } from "excalibur";
import { CharacterCard } from "../actors";
import { GameState } from "../game-state";

export class ViewCharactersScene extends Scene {
  private game: Engine;
  private state: GameState;
  private cards: CharacterCard[];

  public constructor(game: Engine, state: GameState) {
    super(game);
    this.game = game;
    this.state = state;
  }

  public onActivate() {
    this.createCards();
    this.cards.forEach(c => this.add(c));
    
    this.game.input.keyboard.on('press', (evt: Input.KeyEvent) => {
      if (evt.key === Input.Keys.Esc) {
        this.state.room = 'none';
        this.game.goToScene('roomMain');
      }
    });
  }

  public onDeactivate() {
    this.game.input.keyboard.off('press');
    this.cards.forEach(c => this.remove(c));
  }

  private createCards(): void {
    this.cards = [];
    for (let i = 0; i < this.state.unlockedCharacters.length; i++) {
      // TODO: Character specific card
      this.cards.push(new CharacterCard(this.game, this.state));
    }
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].pos = vec(128 + i * 225, 300);
    }
  }
}
