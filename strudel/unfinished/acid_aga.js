samples('github:semism/smbreaks')

setcpm(120/4)

let acid_lpf_mod = sine.range(150, 350).slow(16)
let acid_env_mod = sine.range(2, 3).slow(32)
let acid_res_mod = sine.range(12, 21).slow(8);
let chords = ["<e:minor a:minor e:minor a:minor g:minor d:minor>", "a:minor"];


let acid_bass = n("{-7 0!2 2 7 0 0 - 2 4 -2!6}".add("-7"))
  .scale(pick(chords, 1)).s("saw").att(sine.range(0.02, .1))
  .decay("{.4@5 2@2 .4}*2").velocity(itri.range(.7, 1).slow(2))
  .lpf(acid_lpf_mod).lpq(acid_res_mod)
  .lpenv(acid_env_mod)
  .distort("2.2:.4")

acid_layer_main: acid_bass
acid_layer_sub: acid_bass  
  .off(1/4, x=>x.s("supersaw")).velocity(.35)

bass: n("{-7 0@2 2 7 0 0 2}*2".add("-7"))
  .scale("<a:minor>").s("sine").att(sine.range(0.02, .1))

let kick = s("bd bd:1").room(.3).duck(2)
  .every(4, x=>x.ply(2 | 4)).velocity(.8)
let snare = s("sd".struct("0 1 0 1")).room(.3).delay(.5).orbit(2)
let clap = s("cp".struct("0 0 0 1").late(.25)).velocity(.4)
let crash = s("cr".struct("0 0 1*2 0")).velocity(1.5).clip(.2)
let hat = s("hh")
  .struct("0 1 0 1*2 0 1 0 1".early(.25))
  .velocity(".4 .3 .8 .5")

drums: stack(kick, snare, crash, hat).bank("tr606")

// all(x=>x.hpf(70))

