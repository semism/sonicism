setcpm(110/4)

kick: s("bd:1!4").duck(2).datt(.5)
toms: s("lt!16").att(.02)
    .vel(rand.range(.1, .5).rib(18, 4)).room(.9).pan(.56)
snare: s("sd:1!2")

clap: s("- cp:1 - [cp:1 cp:1]")

hat: s("hh:2!8".early(rand.range(-.002,.003).rib(209,4)))
  .vel(rand.range(.2,.8).rib(209,4))

ohat: s("- oh:1 - oh:2".early(rand.range(-.002,.003).rib(209,4)))
  .vel(rand.range(.3,.9).rib(209,4))

ride: s("- rd - rd - rd - rd")
  .vel(rand.range(.5, 1).rib(9, 2)).room(.9).pan(.56)

uau: n("<-14 -7 -14 -7>*8").scale("b:minor").s("saw")
  .o(2)
  .lpf(500)
  .lfo({da:500})
  .color("lime")
.spectrum({width: 800})

sub:
n("<-14 -7 -14 -7>*16".late(1/8)).scale("b:minor").s("saw")
  .lpf(150).lfo()
.fm(4).fmh(.5)



flame:
n(irand(12).seg(16).rib(522, 2))
  .scale("b:minor").s("supersaw")
  .mask("<0 1 0 1 0 1 0 1>*16")
  .compressor(-20)
  .fm(22).fmh(1.25)
  .fm2(22).fmh(1.25)
  .vel(rand.range(.1,.6).seg(8).rib(222, 4))
  .pan(perlin.fast(4))

allo:
n(irand(12).seg(16).rib(522, 2))
  .scale("b:minor").s("saw")
  .mask("<1 1 0 1 1 0 1 1>*16")
  .vel(rand.range(.1,.6).seg(8).rib(222, 4))
  .pan("<.2 .8>")
  .color("red")
  .pianoroll()



lead: n(irand(12).seg(8).rib(522, 2).add(-14))
  .scale("b:minor").s("supersaw")
  .att(.05).rel(.2)
  .fm(12).fmh(.99)
  .compressor(-20)
  .vel(rand.range(.03,.09).seg(8).rib(222, 4))
  .room(.1).delay(.5).delays(1/2)


/////_HYDRA_//////
await initHydra()
noise(1, .05, 0)
.kaleid()
.repeat(2,2)
.colorama(30)
.scrollY(0, 0.1)
.scrollX(0, -0.1).out(o1)

shape()

.repeat(H("<3 3 8 4>*4"),
         H(rand.range(6, 10).seg(8).rib(522,2)))
.colorama().kaleid()
.scrollY(0, H(rand.range(-.1, .2).seg(2).rib(522,2)))
.scrollX(0, H(rand.range(-.1, .2).seg(4).rib(522,2)))
.out(o2)

src(o2).modulate(o1).out()
