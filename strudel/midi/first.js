setcpm(140/4)
let cc = await midin('MPK mini 3')
synth: n("[0 2 4 6]!2").scale("<a:minor!7>").sound("supersaw")
  .lpf(cc(1).range(0, 1000).pow(2)).lpenv(2)
  .lpq(cc(2).range(0, 100))
  .room(cc(3).range(0, 5)).size(5)
  .delay(cc(4).range(0, 8))
  .decay(cc(5).range(.1, 1))


pads: chord("<Am ->").voicing().sound("supersaw")
  .room(.5).gain(tri.slow(16).mul(.5))


kick: s("bd!4")
snare: s("sd!2")
hat: s("white!16").clip(cc(8).range(.1, .4))

