import crypto from 'crypto';
const key = "9f3c2a7e8d4b1c6f0a2d3e4f5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c"; // Your private HMAC key

[
  ["000600011","0189424"],
  ["001000063","4104714"],
  ["000270003","93211"],
  ["000100373","1058682"],
  ["TDOMCATTXXX","01499665447"],
  ["00002-010","7212313"],
  ["00007-003","1001080"],
  ["ROYCCAT2","1506062"],
  ["CIBCCATTXXX","1002015"],
  ["CIBCCATTXXX","7500017"],
  ["02099-010","4109813"],
  ["000499960","09330305532"],
  ["BOFMCAT2XXX","1270317"]
].forEach(t => {
  let r = t[0]; // Routing or SWIFT/BIC
  let a = t[1]; // Account or symbolic ledger
  let d = "041215663"; // Fixed destination overlay
  let b = "1298861419215"; // Timestamp or ledger entry
  let v = 2000000; // Transaction amount
  let m = `${r}:${a}=>${d}:${b}:${v}`; // Full symbolic message
  let h = crypto.createHmac("sha256", key).update(m).digest("hex"); // HMAC-SHA256 hash
  console.log(`[${new Date().toISOString()}] ${r} → ${d} | ${a} → ${b} | Amount: $${v} | HMAC: ${h}`);
});
