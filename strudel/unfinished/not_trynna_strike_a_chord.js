samples('github:semism/nibbles')

setcpm(120/4) 

kick: s("bd:3!4").gain(1.6)
snare: s("sd:2")
hat: s("hh!4")
rim: s("rim:1").struct(rand.round().rib(4, 2).seg(8))

line: n("[0!2] 0 0 [3!2] 4 0 0 4".add("0, -7"))
  .scale("a:minor").s("saw").delay(".2, .5").gain(.7)
  .delay(.2).lpf(saw.range(3000, 6000)).lpenv(4)
  .room(1).size(6)
  .every("4", x=>x.clip(".5 .7").ply(2))

bass: n("0!16".add(-7)).scale("a:minor").s("supersaw")
._pianoroll()
