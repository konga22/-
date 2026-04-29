const IS_DEV_RUNTIME = typeof __DEV__ !== "undefined" && __DEV__;

export const DEBUG_FLAGS = {
  resetTabEventOnHomeRefresh: IS_DEV_RUNTIME,
} as const;
