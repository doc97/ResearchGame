import { Texture } from 'excalibur';
import sword from './images/sword.png';
import roomRed from './images/room-red.png';
import roomBlue from './images/room-blue.png';
import roomGreen from './images/room-green.png';

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
    Sword: new Texture(sword),
    RoomRed: new Texture(roomRed),
    RoomGreen: new Texture(roomGreen),
    RoomBlue: new Texture(roomBlue),
}

export { Resources }
