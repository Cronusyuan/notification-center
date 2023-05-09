import { PREFERRED_TYPES, UserPreferences } from "../types";

export const userPreference: UserPreferences = {
  user1: {
    preferredType: PREFERRED_TYPES.EMAIL,
    notificationTarget: "di.yuan@parallel.fi",
  },
  user2: {
    preferredType: PREFERRED_TYPES.DISCORD,
    notificationTarget: "Sunorc#1750",
  },
};
