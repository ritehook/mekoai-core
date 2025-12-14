`ts
export const qchat = async (input: any) => ({
  role: 'assistant',
  content: 🧠 QChat capsule received: ${input.text || '[no input]'},
});
