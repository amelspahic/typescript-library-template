import test from 'ava';

import { SampleService } from './sample-service';

test('sampleMethod', async (t) => {
  const sampleService = new SampleService();

  t.deepEqual(await sampleService.sampleMethod({ number1: 1, number2: 2 }), 3);
});
