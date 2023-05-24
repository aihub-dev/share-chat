export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const FRAMER_MOTION_LIST_ITEM_VARIANTS = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { type: "spring" } },
};

export const FRAMER_MOTION_COMMENT_BUBBLE_VARIANTS = {
  hidden: { translateX: 5, opacity: 0 },
  show: { translateX: 0, opacity: 1, transition: { type: "spring" } },
};

export const PAGINATION_LIMIT = 50;

export const USER_AVATAR_URI =
  "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 128 128' version='1.1' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='xxlarge'%3E%3Cg%3E%3Ccircle cx='64' cy='64' r='64' fill='%23c1c7d0' /%3E%3Cg%3E%3Cpath fill='%23fff' d='M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z' /%3E%3Cpath fill='%23fff' d='M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"
