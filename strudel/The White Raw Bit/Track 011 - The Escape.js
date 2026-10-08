setcpm(90/4)

sea: n("<-7 -7 -5 -7 -5 0 5 7>/2").scale("c:major").s("supersaw")
    .att(1.5).decay(16).sustain(.5).rel(16)
    .lpf(600).lfo()
    .unison(4)
    .room(3).size(7).delay(.5).delayfb(.75).ds(1/16).delayspeed(2)

alikupter_prop: s("white!8")
  .lpf(500).lfo({da:5000, r:16})
  .pan(sine.slow(2)).room(.6).delay(.5)
  // .o(2)

alikupter_machine: note("c3!8").s("sine")
  .lpf(500).lfo({da:5000, r:16})
  .pan(sine.slow(2)).room(.6).delay(.5)
  // .o(2)


kick: s("bd:2 - bd bd bd:2 - bd - - - bd:2 - bd:2 - - -").duck(2).datt(.5)
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

sub: n(`<
   7 _ 4 4
   5 _  4 -
   - - 13 -
   14 - - -
   >*16`.add(-7))
  .scale("c:major")
  .s("sine")
  .fm(1).fmh(.15)
  .lpf(200)
  .soft(1)

sevnejsh: note(`<
   [52 _ _  52
   55@1.5 52@1.5 50]
   [48@4 47@2
    - -]
   >`.add(7))
  .s("gm_electric_guitar_muted:3")
  .rel(1)
  .room(.2)
  .soft(1)

keyb: note(`<
   c4 _ g3 g3
   a3 _  g3 -
   - - b4 -
   c5 - - -
   >*16`.late(1/16 | 0))
  .s("sine")
  .att(choose(.3, .2,.1, 0))
  .rel(choose(.3, .2,.1, 0))
  .compressor(-20)
  .detune(2)
  .unison(4)
  .fm(1).fmh(.99)
  .hpf(220)
  .lpf(600).lfo()
  .delay(.25).delays(1/8)
  .jux(rev)


synth: n("0 - - 0 - 0 -7 -7 0 - - - 5 - -5 -".add("<0@3 5@5>*8"))
  .scale("<c:major d:minor c:major d:minor e:minor f:major>")
  .s("wt_digital")
  .att(.2).rel(.5)
  .lpf(5500)
  .lfo({r:.25})
  .unison(4).room(2)
  .fm(4).fmh(.999)
  .fm1(4).fmh(.99)
  .detune(2)



var rep = H("<1 2 4 8>")

/////_HYDRA_//////
// await initHydra()

// noise(1, 1/8, 1)
// .kaleid()
// .repeat(rep,rep)
// .colorama(2048)
// .posterize()
// .out(o1)

// shape(3, 0.3, 0.01)  
// .rotate(H("<3 5>*8"), .3)
// .repeat(rep,rep)
// .color(.3,.3,1)
// .out(o2)

// src(o1).modulate(o2).out()
