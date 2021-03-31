import { Engine, Scene } from 'excalibur';

export { RoomMainScene } from './room-main-scene';
export { RoomInspectScene } from './room-inspect-scene';
export { ViewCharactersScene } from './view-characters-scene';

export function switchScene(engine: Engine, scene: Scene) {
  engine.removeScene('current');
  engine.addScene('current', scene);
  engine.goToScene('current');
}