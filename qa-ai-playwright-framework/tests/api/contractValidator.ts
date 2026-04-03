import { test, expect, request } from '@playwright/test';
import { validate } from '../../utils/api/contractValidator';
import { srSchema } from '../../fixtures/schemas/srSchema';

test('SR contract', async () => {
  const api = await request.newContext();
  const res = await api.get('/api/sr/1');
  const data = await res.json();

  expect(validate(srSchema, data)).toBeTruthy();
});