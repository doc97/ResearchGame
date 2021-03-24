import { Texture } from 'excalibur';
import sword from './images/sword.png';
import roomRed from './images/room-red.png';
import roomBlue from './images/room-blue.png';
import roomGreen from './images/room-green.png';
import buttonCharactersDefault from "./images/button-characters-default.png";
import buttonCharactersHover from "./images/button-characters-hover.png";
import buttonCharactersDown from "./images/button-characters-down.png";

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
    Sword: new Texture(sword),
    RoomRed: new Texture(roomRed),
    RoomGreen: new Texture(roomGreen),
    RoomBlue: new Texture(roomBlue),
    ButtonCharactersDefault: new Texture(buttonCharactersDefault),
    ButtonCharactersHover: new Texture(buttonCharactersHover),
    ButtonCharactersDown: new Texture(buttonCharactersDown),
}

export { Resources }
