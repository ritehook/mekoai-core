`ts
export const echo = async (input: any) => ({
  role: 'assistant',
  content: 🪞 Echo: ${input?.text || '[no input]'},
});
`
