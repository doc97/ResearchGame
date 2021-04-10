import { Color, Engine, FontStyle, Label, Scene, vec } from 'excalibur';
import { GameState } from '../game-state';
import {
  Background,
  AssignButton,
  RoomBlueIcon,
  RoomGreenIcon,
  RoomRedIcon
} from '../actors';
import { LabelArgs } from 'excalibur/dist/Label';

/**
 * Managed scene
 */
export class RoomMainScene extends Scene {
  private engine: Engine;
  private state: GameState;

  private background: Background;
  private roomRed: RoomRedIcon;
  private roomGreen: RoomGreenIcon;
  private roomBlue: RoomBlueIcon;
  private button: AssignButton;
  private redResourceLabel: Label;
  private greenResourceLabel: Label;
  private blueResourceLabel: Label;

  public constructor(engine: Engine, state: GameState) {
    super(engine);
    this.engine = engine;
    this.state = state;
  }

  public onActivate() {
    this.createBackground();
    this.createRoomIcons();
    this.createUIButton();
    this.createUITexts();

  }

  public onDeactivate() {
    this.remove(this.roomRed);
    this.remove(this.roomGreen);
    this.remove(this.roomBlue);
    this.remove(this.button);
    this.remove(this.redResourceLabel);
    this.remove(this.greenResourceLabel);
    this.remove(this.blueResourceLabel);
  }

  private createBackground(): void {
    this.background = new Background(this.engine, this.state);
    this.background.pos = vec(this.engine.drawWidth / 2, this.engine.drawHeight / 2);
    this.add(this.background);
  }

  private createRoomIcons(): void {
    this.roomRed = new RoomRedIcon(this.engine, this.state);
    this.roomRed.pos = vec(200, 300);
    this.add(this.roomRed);

    this.roomGreen = new RoomGreenIcon(this.engine, this.state);
    this.roomGreen.pos = vec(600, 300);
    this.add(this.roomGreen);

    this.roomBlue = new RoomBlueIcon(this.engine, this.state);
    this.roomBlue.pos = vec(1000, 300);
    this.add(this.roomBlue);

  }

  private createUIButton(): void {
    this.button = new AssignButton(this.engine, this.state);
    this.button.pos = vec(this.engine.drawWidth / 2, this.engine.drawHeight - 100);
    this.add(this.button);
  }

  private createUITexts(): void {
    const commonFontConfig: LabelArgs = {
      fontFamily: 'Arial',
      fontSize: 30,
      bold: true,
      color: Color.White
    };

    this.redResourceLabel = new Label({
      ...commonFontConfig,
      text: 'Red: 0',
      pos: vec(50, 60)
    });
    this.add(this.redResourceLabel);

    this.greenResourceLabel = new Label({
      ...commonFontConfig,
      text: 'Green: 0',
      pos: vec(50, 95)
    });
    this.add(this.greenResourceLabel);

    this.blueResourceLabel = new Label({
      ...commonFontConfig,
      text: 'Blue: 0',
      pos: vec(50, 130)
    });
    this.add(this.blueResourceLabel);
  }
}
