export function detectSpike(values: number[]): boolean {
  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  return values.some(v => v > avg * 2);
}