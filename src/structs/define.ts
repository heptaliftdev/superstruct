/**
 * Define a new struct type with a custom validation function.
 */

import { Struct, type Validator } from "../struct";

export function define<T>(name: string, validator: Validator): Struct<T, null> {
  return new Struct({ type: name, schema: null, validator });
}
