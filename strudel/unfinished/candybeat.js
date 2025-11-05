setcpm(140/4)

kick: s("sbd!4").duck("2:3:4")
snare: s("sd!2")
hat:s("white!16").clip(.2).sometimesBy(.5, x=>x.clip(.7)).gain(.2).orbit(2)

const pat = "[4!2 - 4] <[5 5] [5 <[3 <1 5>] 5>]>"

tune: n(pat)
  .sound("sine, tri")
  .scale("<<D4:major , D1:major> C4:dorian>").pan(sine).delay(.5).orbit(4)

bassline: n(pat.add("-7, -14")).s("saw, sine, supersaw").orbit(3)
 .scope()

chirp: n(pat.mask("x - x? x?").add("14")).s("pulse")
  .hpf(1000).fm(2).fmh(sine.range(2, 20))
  .scale("<D:major C:dorian>").clip(.2).ply("2")
