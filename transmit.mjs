// transmit.mjs
import crypto from 'crypto';
import { hashes } from './hashes.mjs';
import { swifts } from './swift.mjs';
import { entries as mains } from './main.mjs';

const key = "9f3c2a7e8d4b1c6f0a2d3e4f5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c";
const c = "041215663";
const d = "1298861419215";
const b = 2000000;

// Dummy executor (replace with real dispatcher or listener trap)
const e = {
  transmit(entry) {
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
    // Normalize input: string or array
    const routing = Array.isArray(a) ? a[0] : a;
    const message = `${routing}:${b}=>${c}:${d}`;
    const signed = crypto.createHmac("sha256", key).update(message).digest("hex");

    const payload = {
      source: label,
      a: routing,
      b,
      c,
      d,
      signed
    };

    const result = transmitSignedEntry(payload, e);
    console.log(`[${new Date().toISOString()}] ${label} → ${routing} | Transmitted:`, result);
  });
}

signAndTransmit(hashes, "hashes.mjs");
signAndTransmit(swifts, "swift.mjs");
signAndTransmit(mains, "main.mjs");
