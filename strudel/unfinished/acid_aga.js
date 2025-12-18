samples('github:semism/nibbles')

setcpm(120/4)

// await initHydra()
// osc(30, 0.2, 300)
// .color(0.9, 0.7, 0.8).kaleid()
// .luma().modulate(osc(1, -0.9, 300)).scale(2).out()

let acid_lpf_mod = sine.range(150, 350).slow(16)
let acid_env_mod = sine.range(2, 3).slow(32)
let acid_res_mod = sine.range(12, 21).slow(8);
let chords = ["<e:minor a:minor e:minor a:minor g:minor d:minor>", "a:minor"];

let acid_bass = n("{-7 0@2 2 7 0 0 2}*2".add("-7"))
  .scale(pick(chords, 1)).s("saw").att(sine.range(0.02, .1))
  .decay("{.4@5 2@2 .4}*2").velocity(itri.range(.7, 1).slow(2))
  .lpf(acid_lpf_mod).lpq(acid_res_mod)
  .lpenv(acid_env_mod)
  .distort("2.2:.4")

acid_layer_main: acid_bass.room(.5).size(6)
acid_layer_sub: acid_bass  
  .off(1/4, x=>x.s("supersaw")).velocity(.35)

_bass: n("{-7 0@2 2 7 0 0 2}*2".add("-7"))
  .scale(pick(chords, 1)).s("sine") // add supersaw
  .att(sine.range(0.02, .1))

let kick = s("bd!4").beat("0, 3?, 13, 15", 16)
  .decay(0.05)
let snare = s("sd".struct("0 1 0 1")).delay(.5).delaytime(.04)
let clap = s("cp".struct("0 0 0 1").late(.25)).velocity(.4)
let hat = s("hh").clip(.2)
  .struct("<0 1*2> 1 0 1*2 0 1 0 1".early(.25))
  .velocity(".4 .3 .8 .5")

drums: stack(kick, snare, clap, hat).bank("tr505").room(.2).size(6)
osicalate: n("{-7 0@2 2 7 0 0 2}*2").scale(pick(chords, 1))
  .s("sbd").ply(saw.range(1,10).slow(10)).room(2).size(3).velocity(.2)
