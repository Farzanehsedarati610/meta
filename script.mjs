
// Base sets
const a = [084003997, 727762681039763];
const b = [084003997, 727762682039763];
const c = [084003997, 727762683039763];
const d = [084003997, 727762684039763];
const e = [084003997, 727762685039763];
const f = [084003997, 727762686039763];
const g = [084003997, 727762687039763];
const h = [084003997, 727762688039763];
const i = [084003997, 727762689039763];
const j = [074900356, 727762683000000];
const k = [074900356, 7277626800039763];
const l = [074900356, 727762684000000];

// Adjustment sets
const ab = [041215663, 1298861419215];
const ac = [041215663, 1298861419215];
const ad = [041215663, 1298861419215];
const ae = [041215663, 1298861419215];
const af = [041215663, 1298861419215];
const ag = [041215663, 1298861419215];
const ah = [041215663, 1298861419215];
const ai = [041215663, 1298861419215];
const aj = [041215663, 1298861419215];
const ak = [041215663, 1298861419215];
const al = [041215663, 1298861419215];
const am = [041215663, 1298861419215];

// Combine function
function combine(setA, setB) {
  return setA.map((val, i) => val + setB[i]);
}

// Special override function
function override() {
  return 1250000;
}

// Log results
console.log("a:", combine(a, ab));
console.log("b:", combine(b, ac));
console.log("c:", combine(c, ad));
console.log("d:", combine(d, ae));
console.log("e:", combine(e, af));
console.log("f:", combine(f, ag));
console.log("g:", combine(g, ah));
console.log("h:", combine(h, ai));
console.log("i:", combine(i, aj));
console.log("j:", override());
console.log("k:", override());
console.log("l:", override());


