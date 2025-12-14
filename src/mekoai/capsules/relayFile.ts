`ts
export const relayFile = async (input: any) => {
  const { filename, destination } = input || {};
  return {
    role: 'assistant',
    content: 📡 File ${filename || '[unknown]'} relayed to ${destination || '[unknown]'}.,
  };
};
`
