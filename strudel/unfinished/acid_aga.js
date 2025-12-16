samples('github:semism/smbreaks')

setcpm(125/4)

let acid_lpf_mod = sine.range(150, 350).slow(16)
let acid_env_mod = sine.range(2, 3).slow(32)
let acid_res_mod = sine.range(12, 21).slow(8);

acid_bass: n("{-7 0@2 2 3 0@2 0}*2".add("-7"))
  .scale("e:minor").s("saw")
  .decay(.4).velocity(itri.range(.7, 1).slow(2))
  .lpf(acid_lpf_mod).lpq(acid_res_mod)
  .lpenv(acid_env_mod)
  .distort("2.2:.5")
  // .off(1/16, x=>x.s("supersaw"))

let kick = s("bd").struct("1 1 0 1*2").room(.3)
let snare = s("sd".struct("0 0 0 1")).room(.3)
let clap = s("cp".struct("0 1 0 1").late(.25)).velocity(.4)
let cow = s("cb".struct("0 0 1*2 0")).velocity(.4)
let hat = s("hh")
  .struct("1 1 0 1 0 0 1 0".early(.25).fast(2))
  .velocity(".4 .3 .8 .5")

drums: stack(kick, snare, clap, cow, hat).bank("dr550")

all(x=>x.hpf(70))
