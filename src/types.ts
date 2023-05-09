export const PREFERRED_TYPES = {
  EMAIL: "email",
  TELEGRAM: "telegram",
  DISCORD: "discord",
} as const;

export type PreferredType =
  (typeof PREFERRED_TYPES)[keyof typeof PREFERRED_TYPES];

export type UserPreference = {
  preferredType: PreferredType;
  notificationTarget: string;
};

export type UserPreferences = Record<string, UserPreference>;

export type NotificationEvent = {
  type: string;
  content: string;
  receipient: string;
};
