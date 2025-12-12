setcpm(140/4)

kick: s("bd:3!4").gain(1.6).duck("2:3")
  .duckattack("<.2 0 .2 0>*2")
snare: s("sd:2!2")
hat: s("hh!8")
rim: s("rim:1").struct(rand.round().rib(4, 2).seg(8))


line1: n("[0!2] 0 0 [3!2] 4 0 0 4".add("7, 14, 28"))
  .scale("a:minor").s("gm_clavinet").clip(".5 .7").ply(2).pan(saw)

line2: n("[0!2] 0 0 [3!2] 4 0 0 4".add("0, -7"))
  .scale("a:minor").s("saw, pulse").delay(".2, .5").gain(.7)
  .lpf(saw.range(3000, 6000)).lpa(.4).lpenv(4)
  .room(1).size(6)
  .every("4", x=>x.clip(".5 .7").ply(2))

top_line: n("[0!2] 0 - 0 2 - 0 2".add("<7 8 9 6>"))
  .scale("a:minor").s("supersaw").distort("5:.2")
  // .pan(sine.slow(32))
  .pianoroll()

bottom_line: n(sine.seg(16).range(0,"<15!3 12>").add("-14"))
.scale("a:minor").s("supersaw").pan(sine.seg(16).slow(32))

bass: n("0".seg("8 16").add(-7)).scale("a:minor").s("saw").room(2).size(15)
  .distort("3:.2")
  .lpf(sine.range(200, 600).slow(4))
  .lpenv(saw.range(1, 4).slow(4))
  .lpq(tri.range(1, 15).slow(4))
  .orbit(2)
._scope()
