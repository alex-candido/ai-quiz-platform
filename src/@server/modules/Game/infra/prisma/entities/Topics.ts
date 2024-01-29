import { FieldRef } from '@prisma/client/runtime/library';

export default interface Topics {
  id: string | FieldRef<'topic_count', 'String'>;
  topic: string | FieldRef<'topic_count', 'String'>;
  count: number | FieldRef<'topic_count', 'Int'>;
}
