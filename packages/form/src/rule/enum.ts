import * as util from '../util';
import { FieldRule } from '../types';

const ENUM = 'enum';

function enumerable(
  rule: FieldRule,
  value: any,
  options: Record<string, any>
): string[] {
  if (!rule[ENUM] || !Array.isArray(rule[ENUM])) return [];

  const errors: string[] = [];
  if ((rule[ENUM] as string[]).indexOf(value) === -1) {
    errors.push(
      util.format(
        options.messages[ENUM],
        options.name,
        (rule[ENUM] as string[]).join(', ')
      )
    );
  }

  return errors;
}

export default enumerable;
