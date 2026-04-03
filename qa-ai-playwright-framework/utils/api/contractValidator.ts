import Ajv from "ajv";
const ajv = new Ajv();

export function validate(schema: any, data: any) {
  const valid = ajv.validate(schema, data);
  return valid;
}