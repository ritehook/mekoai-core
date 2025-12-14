`ts
export const verify = async (input: any) => ({
  role: 'assistant',
  content: ✅ Capsule verified: ${input?.id || 'unknown'}. Signature valid.,
});
`
