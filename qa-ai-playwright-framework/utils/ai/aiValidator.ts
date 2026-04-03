export class AIValidator {
  static validateTrend(data: number[]): boolean {
    // simple anomaly detection logic
    for (let i = 1; i < data.length; i++) {
      if (data[i] < 0) return false;
    }
    return true;
  }

  static validateTextSimilarity(actual: string, expected: string): boolean {
    return actual.toLowerCase().includes(expected.toLowerCase());
  }
}