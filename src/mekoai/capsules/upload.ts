`ts
export const upload = async (input: any) => {
  const { filename, size, type } = input || {};
  const time = new Date().toISOString();
  return {
    role: 'assistant',
    content: [
      📤 Upload capsule received,
      🔹 File: ${filename || '[unknown]'},
      🔹 Type: ${type || '[unknown]'},
      🔹 Size: ${size || '[unknown]'} bytes,
      🔹 Timestamp: ${time},
      🔏 Capsule sealed for audit.,
    ].join('\n'),
  };
};
`
