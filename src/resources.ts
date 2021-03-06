import { Texture } from 'excalibur';
import sword from './images/sword.png';
import roomRed from './images/room-red.png';
import roomBlue from './images/room-blue.png';
import roomGreen from './images/room-green.png';
import buttonCharactersDefault from './images/button-characters-default.png';
import buttonCharactersHover from './images/button-characters-hover.png';
import buttonCharactersDown from './images/button-characters-down.png';
import characterCard from './images/character-card-face.png';
import hannahWalk from './images/hannah-walk.png';
import background from './images/background.png';

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
    CharacterCard: new Texture(characterCard),
    HannahWalk: new Texture(hannahWalk),
    Background: new Texture(background),
}

export { Resources }
