import { Node as NodeType } from '../common/node.type';

export type User = {
  name?: string;
  nickname?: string;
  pictureUrl?: string;
} & NodeType;
