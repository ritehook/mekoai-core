
`ts
export const decode = async (input: any) => ({
  role: 'assistant',
  content: 🔓 Decoded payload: ${atob(input?.text || '')},
});
`
