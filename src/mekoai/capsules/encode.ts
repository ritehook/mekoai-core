`ts
export const encode = async (input: any) => ({
  role: 'assistant',
  content: 🔐 Encoded payload: ${btoa(input?.text || '')},
});
`
