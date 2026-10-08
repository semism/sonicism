setcpm(90/4)

sea: n("<-7 -7 -5 -7 -5 0 5 7>/2").scale("c:major").s("supersaw")
    .att(1.5).decay(16).sustain(.5).rel(16)
    .lpf(600).lfo()
    .unison(4)
    .room(2).size(7).delay(.5).delayfb(.75).ds(1/16).delayspeed(2)

alikupter_prop: s("white!8")
  .lpf(500).lfo({da:5000, r:16})
  .pan(sine.slow(2)).room(.6).delay(.5)
  .o(2)

alikupter_machine: note("c3!8").s("sine")
  .lpf(500).lfo({da:5000, r:16})
  .pan(sine.slow(2)).room(.6).delay(.5)
  .o(2)


kick: s("bd - - bd - bd bd:2 - bd - - - bd:2 - bd:2 -").duck(2).datt(.5)
.room(.2)
.vel(rand.range(.9, 1).rib(2, 2))

snare: s("- sd:1 - sd:1").room(.2)
  .vel(rand.range(.5, 1).rib(2, 4))
hat: s("hh:4!8").room(.2)
  .vel(rand.range(.5, 1).rib(2, 4))

ohat: s("oh:3").struct("<0 1 0 1>*4".late(1/8)).room(.2)
  .vel(rand.range(.5, .8).rib(99, 2))

tom:  s("mt:3").struct("1!16".late(1/16)).room(.2)
  .vel(rand.range(.5, .8).rib(299, 2))

bass: note(`<
   c _ g g
   a _ - g
   - - - -
   - b - c5
   >*8`
  .add("<0@3 5@5>*8")).s("sine")
  .fm(4).fmh(.15)
  .lpf(500).lfo()
  .delay(.25).delays(1/8)
  .jux(rev)

synth: n("0 - - 0 - 0 -7 -7 0 - - - 5 - -5 -".add("<0@3 5@5>*8"))
  .scale("<c:major d:minor c:major d:minor e:minor f:major>")
  .s("wt_digital")
  .att(.2).rel(.5)
  .lpf(4500)
  .lfo({r:.25})
  .unison(4).room(1)
  .fm(4).fmh(.999)
  .fm1(4).fmh(.99)
  .detune(1)




