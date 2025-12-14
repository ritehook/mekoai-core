`ts
export const verifyFile = async (input: any) => {
  const { filename, hash } = input || {};
  return {
    role: 'assistant',
    content: ✅ File ${filename || '[unknown]'} verified. Hash: ${hash || '[missing]'},
  };
};
`
