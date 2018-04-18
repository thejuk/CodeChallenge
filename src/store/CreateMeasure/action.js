export const CREATE_MEASURE = 'CREATE_MEASURE';

export function createMeasure(measureName) {
  return { type: CREATE_MEASURE, measureName };
}