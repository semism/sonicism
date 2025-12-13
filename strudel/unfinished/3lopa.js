setCps(120/60/4)

kick: s("bd!4").bank("akailinn")
snare: s("sd!2").bank("akailinn")
clap: s("cp!2".early(.02)).bank("akailinn")
hat: s("hh!8").bank("akailinn").velocity(rand.rib(76, 4).mul(.5))
cow: s("cb").struct("x x*3 x - - - - - x".late(.1)).bank("akailinn")
  .crush(4).delay(.1).delaytime(".4")

bass: n("<0 1>!8".add("-7 ,-14")).scale("<C:major!2 D:minor!2>").s("saw")
     .lpf(200).lpenv(2).lpq(5)
     // .crush(4) //bit crush on off
     .rel(.1)

lead: n(irand(14).seg(8).rib(10, 1).mask("x -".early(.5))).scale("<C:major!2 D:minor!2>").s("saw")
.lpf(1200).lpenv(2).lpq(5)
.hold(.2).decay(.5).sus(saw.range(0.5, 0.7).slow(4)).rel(.8)
.echo(2, .25, .5)
.delay(.25).delaytime(.25).delayfeedback(.4)
.velocity(.5)
