export type RoomId = 'red' | 'green' | 'blue';
export type CharacterId = 'hannah' | 'maggie' | 'chris' | 'emma' | 'philip';

export class GameState {
  // Data
  public readonly ROOMS: RoomId[] = ['red', 'green', 'blue'];
  public readonly CHARACTERS: CharacterId[] = [
    'hannah',
    'maggie',
    'chris',
    'emma',
    'philip'
  ];

  // State
  public currentRoom: RoomId | null = null;
  public unlockedCharacters: CharacterId[] = ['hannah', 'maggie'];
  public characterRooms: Partial<Record<CharacterId, RoomId>> = {};
  public mode: 'view' | 'assign' = 'view';
  public selectedAssignRoom: RoomId | null = null;
}