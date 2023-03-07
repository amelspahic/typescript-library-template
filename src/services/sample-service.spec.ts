import test from 'ava';

import { SampleService } from './sample-service';

test('sampleMethod', async (t) => {
  // Arrange
  const sampleService = new SampleService();
  const input = {
    number1: 1,
    number2: 2,
  };

  // Act
  const result = await sampleService.sampleMethod(input);

  // Assert
  t.deepEqual(result, 3);
});
