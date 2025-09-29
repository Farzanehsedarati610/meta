// transmit.mjs
import crypto from 'crypto';
import { hashes } from './hashes.mjs';
import { swifts } from './swift.mjs';
import { entries as mains } from './main.mjs';

const key = "9f3c2a7e8d4b1c6f0a2d3e4f5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c"; // Same key used in all files
const c = "041215663";
const d = "1298861419215";
const b = 2000000; // Updated balance per entry

function transmitSignedEntry(entry, executor) {
  try {
    return call.apply(executor, [entry]);
  } catch (err) {
    return function () {
      throw err;
    };
  }
}

function signAndTransmit(source, label) {
  source.forEach(a => {
    const message = `${a}:${b}=>${c}:${d}`;
    const signed = crypto.createHmac("sha256", key).update(message).digest("hex");
    const payload = { source: label, a, b, c, d, signed };
    const result = transmitSignedEntry(payload, e); // 'e' is your executor context
    console.log(`[${new Date().toISOString()}] ${label} → ${a} | Transmitted:`, result);
  });
}

signAndTransmit(hashes, "hashes.mjs");
signAndTransmit(swifts, "swift.mjs");
signAndTransmit(mains, "main.mjs");
