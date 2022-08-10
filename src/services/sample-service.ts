import { SampleInterface } from '../types';

export class SampleService {
  /**
   * Adds two numbers
   *
   * ### Example (es module)
   * ```js
   * import { SampleService } from 'typescript-library-template';
   *
   * async function add() {
   *   const sampleService = new SampleService();
   *   const res = await sampleService.sampleMethod({
   *     number1: 1,
   *     number2: 2,
   *   });
   *   console.log(res);
   * }
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * const { SampleService } = require('typescript-library-template');
   *
   * async function add() {
   *   const sampleService = new SampleService();
   *   const res = await sampleService.sampleMethod({
   *     number1: 1,
   *     number2: 2,
   *   });
   *   console.log(res);
   * }
   * ```
   */
  async sampleMethod(numbers: SampleInterface): Promise<number> {
    return numbers.number1 + numbers.number2;
  }
}
