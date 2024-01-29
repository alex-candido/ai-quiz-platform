import { FieldRef } from '@prisma/client/runtime/library';

export default interface Game {
  id: string | FieldRef<"Game", 'String'>
  userId: string | FieldRef<"Game", 'String'>
  timeStarted: Date | FieldRef<"Game", 'DateTime'>
  topic: string | FieldRef<"Game", 'String'>
  timeEnded: Date | null | FieldRef<"Game", 'DateTime'>
  gameType: string | FieldRef<"Game", 'GameType'>
}
