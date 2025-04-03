export const passwordManagerIgnoreAttributes = {
  autoComplete: "off", // General opt-out
  "data-1p-ignore": "", // 1Password opt-out
  "data-lpignore": "true", // LastPass opt-out
  "data-bwignore": "", // Bitwarden opt-out
  "data-form-type": "other", // Dashlane opt-out
} as const;
