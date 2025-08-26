setCps(140/60/4)
kick: s("sbd!4").distort("3:.3")
  .duck("2:3:4").duckattack(.2).duckdepth(.8)
  ._scope()
  
bass: n(irand(10).sub(7).seg(16)).scale("c3:minor")
  .rib(99, 1) //99, 12, 123
  .distort("2.2:.3")
  .s("sawtooth").lpf(200)
  .lpenv(slider(2.496,0,8)).lpq(12).room(1).roomsize(6)
  .orbit(2)._pianoroll()


foghorn: s("supersaw").detune(1).rel(5).beat(2, 32).slow(2).fm(2).fmh(2.04)
  .orbit(2)

_infinite_riser: s("pulse").orbit(4).seg(16).decay(.1).fm(time).fmh(time)
