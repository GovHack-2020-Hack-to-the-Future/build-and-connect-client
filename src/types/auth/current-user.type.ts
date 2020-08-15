export type CurrentUser = {
  id: string;
  email?: string;
  isEmailVerified?: boolean;
  name?: string;
  nickname?: string;
  permissions?: string[];
  pictureUrl?: string;
};
