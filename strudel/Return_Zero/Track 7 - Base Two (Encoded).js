
setcpm(140/4)
kick: s("bd bd:4 bd bd:4").bank("tr707")
  .gain(1)
  .room(1)
 .color("#bada55 cyan")._punchcard()
snare: s("- sd - sd").bank("tr707")
clap: s("- - - - - - - <cp -> ").bank("tr707")

_hat_beep: s("white!8").clip(".2")
  .off(1/8, x=>x.note("91 91 91 <91 96>").s("pulse").clip(".2 | .1").delay(.5))

bassline: n("11 11 11 <11 21> 33 33 33 <11 [41 42 43 44 47]>")
  .sound("saw")
  .clip(".8 1")
  .distort("4:.2").coarse(2).room(.5)
  .lpf(400).lpenv(2)
  .lpq(15)
  .color("cyan")._scope()

tingle: n("- 1 - 2 - 4 - <1 -> ").sound("pulse").scale("c4:minor")
  .gain(slider(1,0.0, 1, 0.1))
.color("lime").scope()

_guitar :
// n(irand(10).seg(8))
//   .rib(44, 2)
  n("- 1 - 2 - 4 - <1 -> ")
  .scale("<C2:minor>")
  .off(1/16, x=>x.ply("<2 1>").delay(.2))
  .every(4, x=> x.clip(.2))
  .sound("gm_distortion_guitar, saw")
  .color("cyan")._scope()

number_lady:n("<1 1 0 0 >")
  .sound("numbers")
  // .fast(4)
  .delay(.5)
  .gain(1).room(1)
  // .sometimesBy(.4, x=>x.clip(.5))
  .jux(rev)

