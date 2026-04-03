export const srSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    status: { type: "string" },
    priority: { type: "string" }
  },
  required: ["id", "status"]
};