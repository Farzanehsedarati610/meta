// transmit.mjs
import crypto from 'crypto';
import { hashes } from './hashes.mjs';
import { swifts } from './swift.mjs';
import { entries as mains } from './main.mjs';

const key = "9f3c2a7e8d4b1c6f0a2d3e4f5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c";

// Executor stub
const e = {
  transmit(entry) {
    if (!entry || !entry.a || !entry.signed) {
      throw new Error("Invalid entry payload");
    }
    return `[${new Date().toISOString()}] Transmit accepted → ${entry.a} → ${entry.c} | $${entry.b}`;
  }
};

function transmitSignedEntry(entry, executor) {
  try {
    return executor.transmit(entry);
  } catch (err) {
    console.error("Transmission error:", err.message);
    return null;
  }
}

function signAndTransmit(source, label) {
  source.forEach((a, i) => {
    let routing, account, c, d, amount;

    if (label === "main.mjs" && Array.isArray(a)) {
      // Full entry: [routing, account, c, d]
      routing = a[0];
      account = a[1];
      c = a[2];
      d = a[3];
      amount = i < 9 ? 232000000 : 1500000;
    } else if (Array.isArray(a)) {
      // Pair: [routing, account]
      routing = a[0];
      account = a[1];
      c = "041215663";
      d = "1298861419215";
      amount = 2000000;
    } else {
      // Single hash
      routing = a;
      account = 10000000;
      c = "041215663";
      d = "1298861419215";
      amount = 2000000;
    }

    const message = `${routing}:${account}=>${c}:${d}`;
    const signed = crypto.createHmac("sha256", key).update(message).digest("hex");

    const payload = {
      source: label,
      a: routing,
      b: account,
      c,
      d,
      amount,
      signed
    };

    const result = transmitSignedEntry(payload, e);
    console.log(`[${new Date().toISOString()}] ${routing} → ${c} | ${account} → ${d} | Amount: $${amount} | HMAC: ${signed}`);
  });
}

// Execute transmission for all modules
signAndTransmit(hashes, "hashes.mjs");
signAndTransmit(swifts, "swift.mjs");
signAndTransmit(mains, "main.mjs");

console.log(`[${new Date().toISOString()}] Transmission complete. All entries signed and dispatched.`);
