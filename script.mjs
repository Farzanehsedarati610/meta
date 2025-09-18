// Source sets (debit)
const a = [84003997, 727762681039763];
const b = [84003997, 727762682039763];
const c = [84003997, 727762683039763];
const d = [84003997, 727762684039763];
const e = [84003997, 727762685039763];
const f = [84003997, 727762686039763];
const g = [84003997, 727762687039763];
const h = [84003997, 727762688039763];
const i = [84003997, 727762689039763];
const j = [74900356, 727762683000000];
const k = [74900356, 7277626800039763];
const l = [74900356, 727762684000000];

// Destination sets (credit)
const ab = [41215663, 1298861419215];
const ac = [41215663, 1298861419215];
const ad = [41215663, 1298861419215];
const ae = [41215663, 1298861419215];
const af = [41215663, 1298861419215];
const ag = [41215663, 1298861419215];
const ah = [41215663, 1298861419215];
const ai = [41215663, 1298861419215];
const aj = [41215663, 1298861419215];
const ak = [41215663, 1298861419215];
const al = [41215663, 1298861419215];
const am = [41215663, 1298861419215];

// Transfer function: debit source, credit destination
function transferFunds(source, destination, amount) {
  const debited = source.map(val => val - amount);
  const credited = destination.map(val => val + amount);
  return { debited, credited };
}

// Override function for j, k, l
function overrideTransfer(source, amount) {
  const credited = source.map(val => val + amount);
  return { credited };
}

// Transfer amount
const amount = 1250000;

// Log all transfers
console.log("a → ab:", transferFunds(a, ab, amount));
console.log("b → ac:", transferFunds(b, ac, amount));
console.log("c → ad:", transferFunds(c, ad, amount));
console.log("d → ae:", transferFunds(d, ae, amount));
console.log("e → af:", transferFunds(e, af, amount));
console.log("f → ag:", transferFunds(f, ag, amount));
console.log("g → ah:", transferFunds(g, ah, amount));
console.log("h → ai:", transferFunds(h, ai, amount));
console.log("i → aj:", transferFunds(i, aj, amount));

// Special override transfers
console.log("j override:", overrideTransfer(j, amount));
console.log("k override:", overrideTransfer(k, amount));
console.log("l override:", overrideTransfer(l, amount));
