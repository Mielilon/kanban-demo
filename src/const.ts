export enum AppRoute {
  MAIN = '/',
  BOARD = '/:board',
  TASK = ':task',
}

export const priorities = ['urgent', 'high', 'normal', 'low', 'none'] as const;
