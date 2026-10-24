setcpm(90/4)

kick: s("bd!4 bd:1!2").duck(2).datt(.5)
.room(.2)
.vel(rand.range(.9, 1).rib(2, 2))


snare: s("- sd:1 - sd:1 - cp").room(.2)
  .vel(rand.range(.5, 1).rib(2, 4))

hat: s("hh:4!12").room(.2)
  .vel(rand.range(.5, 1).rib(2, 4))

ohat: s("oh:1").beat("<6 {10, 11}>", 12).room(.2)
  .vel(rand.range(.5, 1).rib(2, 4))

crash: s("cr/6").room(.2).delay(.25)
rd: s("[- rd]!6")


keyb: n(`<
   [-5@1.5 -2@0.5 -4]
   [-5@1.5 -2@0.5 -4]
   [6 5 2 3 6 5]!4
   >*2`.add(-7).add("<0!4 2 3>*3").late(1/16 | 0))
  .scale("b:major")
  .s("sine")
  .rel(choose(.3, .2,.1, 0))
  .compressor(-20)
  .detune(2)
  .unison(4)
  .fm(1).fmh(.99)
  .hpf(220)
  .lpf(2600).lfo()
  .delay(.25).delays(1/8)
  .room(2)
  .postgain(.65)

sevnejsh: n(`<
   [-5@1.5 -2@0.5 -4]
   [-5@1.5 -2@0.5 -4]
   -!4
   >*2`.add("<0!4 2 3>*3"))
  .scale("b:major")
  .s("gm_electric_guitar_muted:3, saw")
  .rel(1)
  .room(.2)
  .unison(4)
  .lpf(1600).lfo()

subsaw:n(`<
   [-5@1.5 -2@0.5 -4]
   [-5@1.5 -2@0.5 -4]
   [[-5 -0]!3]
   [[-2  2]!3]
   [[-5 -0]!3]
   [[-2  2]!3]
   >*2`.add("-7"))
  .scale("b:major")
  .s("saw")
  .lpf(100)
  .soft(1)
