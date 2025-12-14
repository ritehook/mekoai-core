`ts
export const intent = async (input: any) => ({
  role: 'assistant',
  content: 🎯 Intent detected: ${input?.intent || 'unknown'},
});
`
