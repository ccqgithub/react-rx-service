import * as util from '../util';
import { FieldRule, FieldValue, FormData } from '../types';

function required(
  rule: FieldRule,
  value: FieldValue,
  source: FormData,
  options: Record<string, any>
): string[] {
  const errors: string[] = [];
  if (rule.required && util.isEmptyValue(value, options.type)) {
    errors.push(util.format(options.messages.required, options.fullField));
  }

  return errors;
}

export default required;
