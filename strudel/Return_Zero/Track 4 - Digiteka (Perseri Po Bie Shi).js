setcpm(110/4)
ride:s("rd!6").delay(.2).pan(-1)

digiteka: note("c1 c2 c2 <c2!3 d2>") //syncopate 3 and 4
.sound("supersaw, saw")
.fast(4)
.lpf(1000) //cutoff up make digitek
.decay(0.5) 
.release(0.1)
.distort(1)
.color("[cyan pink <pink pink pink violet>]*4").orbit(2)
._punchcard()

shkelmi_digitekes:s("bd:4!4").duck("2:3:4:5")
teneche:s("- sd:4 - sd:4").almostNever(x=>x.speed(-1))
shpulla:s("- - cp -")

ksksatre:s("white!6, hh").clip(".5")
  .almostNever(x=>x.ply(2))
  .gain("1 .5 .25")
  .every(4, x=>x.ply(2).coarse("4 6"))

// shajvi:
// n(irand(10)).seg(8).scale("c:minor").rib("<4 44>", 2)
//   .sound("sawtooth")
//   .room(1).delay(.5).lpf(3000).gain(1) //reach 3000
//   .lpenv(2).lpq(10)
//   .adsr("0.1:2:.2")
//   .almostNever(x=>x.delay(1))
//   .color("cyan")
//       ._punchcard()

dritat: n(irand(12)).seg("16 8").rib(17, 4)
  .scale("<c3:minor>").detune(9).delay(.5)
  .s("saw, pulse").gain(1.5)
