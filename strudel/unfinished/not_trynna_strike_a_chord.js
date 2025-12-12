
setcpm(120/4) 

kick: s("bd:3!4").gain(1.6).duck("2:3")
  .duckattack("<.2 0 .2 0>*2")
snare: s("sd:2")
hat: s("hh!8")
rim: s("rim:1").struct(rand.round().rib(4, 2).seg(8))

line: n("[0!2] 0 0 [3!2] 4 0 0 4".add("0, -7"))
  .scale("a:minor").s("saw").delay(".2, .5").gain(.7)
  .delay(.2).lpf(saw.range(3000, 6000)).lpa(.4).lpenv(4)
  .room(1).size(6)
  .every("4", x=>x.clip(".5 .7").ply(2))

bass: n("0!16".add(-7)).scale("a:minor").s("saw").room(2).size(15).vib("5")
  .distort("3:.2")
  .orbit(2)
._scope()
