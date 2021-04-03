type LogType = 'info' | 'warn' | 'error';
type LogLevel = 'info' | 'warn' | 'error' | 'never';
type LogFunction = (msg: any, type: LogType) => void;
type ConfigArgs = {
  logLevel: LogLevel;
  log: LogFunction;
};

const configSettings: ConfigArgs = {
  logLevel: process.env.NODE_ENV === 'development' ? 'info' : 'error',
  log: (msg, type: LogType = 'info') => {
    console && console[type] && console[type](msg);
  }
};

export const config = (args: Partial<ConfigArgs>): void => {
  const keys = Object.keys(configSettings) as (keyof ConfigArgs)[];
  keys.forEach(<K extends keyof ConfigArgs>(key: K) => {
    const t = args[key] as ConfigArgs[K];
    if (t == undefined) return;
    configSettings[key] = t;
  });
};

export const debug = (
  msg: unknown,
  type: LogType = 'info',
  condition = true
): void => {
  if (!condition) return;
  const levels = ['info', 'warn', 'error', 'never'];
  if (levels.indexOf(configSettings.logLevel) > levels.indexOf(type)) return;
  configSettings.log(msg, type);
};

export const empty = Symbol('empty');