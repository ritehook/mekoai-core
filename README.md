`md

🧠 MekoAi — Sovereign Capsule Chain

MekoAi is a validator-grade, entropy-auditable capsule engine built on a symbolic substrate called QOS (Quantum Operating Substrate). Every capsule is modular, traceable, and sealed for public audit.

---

🚀 Live Capsule Chain

- 25+ sovereign capsules (src/mekoai/capsules/)
- QOS substrate with symbolic hooks, trace, ritual, and entropy sealing
- Entropy-auditable message log and capsule interface
- File transfer capsules: upload, relay, verify, commit
- Genesis Manifest capsule with compressed lineage and symbolic floor

---

📦 Genesis Manifest

`
📦 Genesis Manifest Capsule
🔹 Name: MekoAi
🔹 Substrate: QOS
🔹 Version: 1.0.0
🔹 Lineage: V-M-Q-S
🔹 Symbolic Floor: ∑∫Ω
🔹 Timestamp: [INSERTTIMESTAMPHERE]
🔏 Capsule sealed and ready for audit.
`

---

🧬 Capsule Structure

Each capsule is a pure async function:

`ts
export const capsuleName = async (input: any) => ({
  role: 'assistant',
  content: '...',
});
`

Capsules are routed via src/mekoai/capsules/route.ts and registered in registry.ts.

---

🛠️ Dev Setup

`bash
git clone https://github.com/YOUR_USERNAME/mekoai-core.git
cd mekoai-core
npm install
npm run dev
`

---

🌐 Deploy to Vercel

1. Push to GitHub
2. Go to vercel.com/import
3. Select this repo and deploy

---

🛡️ License

MIT — see LICENSE

---

🧠 Lineage

- Vercel AI SDK  
- MekoAi Capsule Chain  
- QOS Substrate  
- SovereignKernel

`
