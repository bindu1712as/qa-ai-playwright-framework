import fs from 'fs';
import path from 'path';
import OpenAI from "openai";

/**
 * AI Client
 */
const aiClient = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

/**
 * Random Utilities
 */
function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function randomFromArray<T>(arr: T[]): T {
  return arr[randomInt(arr.length)];
}

/**
 * ===============================
 * 1. SERVICE REQUEST DATA
 * ===============================
 */

export function generateSRData() {
  return {
    title: `SR-${Date.now()}`,
    priority: randomFromArray(["Low", "Medium", "High"]),
    description: "Auto-generated Service Request",
    status: "New"
  };
}

export function generateBulkSRData(count: number) {
  return Array.from({ length: count }, () => generateSRData());
}

/**
 * ===============================
 * 2. USER DATA
 * ===============================
 */

export function generateUser() {
  const id = Date.now();
  return {
    name: `User_${id}`,
    email: `user${id}@test.com`,
    role: randomFromArray(["Admin", "Agent", "Viewer"])
  };
}

/**
 * ===============================
 * 3. DATA NORMALIZATION (API ↔ UI)
 * ===============================
 */

export function normalizeSRData(apiData: any) {
  return {
    id: apiData.id,
    status: formatStatus(apiData.status),
    priority: apiData.priority,
  };
}

export function formatStatus(status: string): string {
  if (!status) return "";
  return status
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * ===============================
 * 4. FIXTURE DATA LOADER
 * ===============================
 */

export function getTestData(key: string) {
  const filePath = path.resolve(__dirname, '../../fixtures/testData.json');

  const raw = fs.readFileSync(filePath, 'utf-8');
  const json = JSON.parse(raw);

  return json[key];
}

/**
 * ===============================
 * 5. EDGE CASE DATA
 * ===============================
 */

export function generateEdgeCaseSR() {
  return {
    title: "", // empty title
    priority: "InvalidPriority",
    description: null
  };
}

export function generateBoundarySR() {
  return {
    title: "A".repeat(255), // max length test
    priority: "High",
    description: "Boundary test data"
  };
}

/**
 * ===============================
 * 6. ANALYTICS / DASHBOARD DATA
 * ===============================
 */

export function generateTrendData(days: number = 7): number[] {
  return Array.from({ length: days }, () => randomInt(100));
}

export function generateSpikeData(): number[] {
  return [10, 12, 11, 200]; // spike for anomaly detection
}

/**
 * ===============================
 * 7. AI-BASED DATA GENERATION
 * ===============================
 */

export async function generateAIData(prompt: string): Promise<any> {
  const response = await aiClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: prompt }
    ],
  });

  return response.choices[0].message.content;
}

/**
 * ===============================
 * 8. DATA COMPARISON HELPERS
 * ===============================
 */

export function deepCompare(obj1: any, obj2: any): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function partialCompare(actual: any, expected: any): boolean {
  return Object.keys(expected).every(
    key => actual[key] === expected[key]
  );
}

/**
 * ===============================
 * 9. DELAY / WAIT HELPERS
 * ===============================
 */

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * ===============================
 * 10. LOGGING (Optional but useful)
 * ===============================
 */

export function logData(label: string, data: any) {
  console.log(`🔹 ${label}:`, JSON.stringify(data, null, 2));
}