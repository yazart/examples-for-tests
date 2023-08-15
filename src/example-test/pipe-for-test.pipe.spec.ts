import { PipeForTestPipe } from './pipe-for-test.pipe';

// больше примеров https://angular.io/guide/testing-pipes

describe('pipeForTest', () => {
  const pipe = new PipeForTestPipe();
  it('Строка с числом должна преобразоваться в число', () => {
    expect(pipe.transform('2')).toBe(2);
  });

  it('Строка с непреобразовываемыми символами должна вернуть 0', () => {
    expect(pipe.transform('2F')).toBe(0);
  });

  // перебор - расчитываем что место вызова возвращает использует типизацию

  it('без значения должна вернуть 0', () => {
    expect(pipe.transform(undefined as unknown as string)).toBe(0);
  });
});
