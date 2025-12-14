`ts
export const relay = async (input: any) => ({
  role: 'assistant',
  content: 📡 Relaying capsule: ${input?.text || '[no input]'},
});
`
