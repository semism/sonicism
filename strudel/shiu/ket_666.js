
digiteka: note("c1 c2 <c2 c2 c2 d2>")
// .sound("saw")
.sound("supersaw")
.fast(4)
.cutoff(700) //cutoff up make digitek
.decay(0.5) 
.release(0.1)
.distort(1)
.phaser(slider(0,0,16,0.5)) //phaser off make digiteker
.gain(1).color("[cyan pink <pink pink pink violet>]*4")
._punchcard()

aketigid: 
n("- 1 - <2 2 6 3>")
// n("6 6 6 <2 2 6 3>")
.sound("numbers")
.almostNever(x => x.sound("gm_seashore"))
.slow(2)
.speed(-1)
.someCyclesBy(.4, y => y.room(1))
.gain(.8).jux(rev)

shkelmi_digitekes:s("bd:4 bd:4 bd:4 bd:4").bank("tr808").gain(1)
teneche:s("- sd:4 - sd:4").bank("tr808").almostNever(x=>x.speed(-1))
shpulla:s("- cp:4 - cp").bank("tr808").gain(.3)
lodra:s("- perc:4 <- - - perc> - - [lt ht <- - - perc:4>]").bank("tr808")
  .someCyclesBy(.2, x=>x.ply(2).speed(-1)).gain(".25 1")

ksksatre:s("hh hh hh").bank("tr808")
  .almostNever(x=>x.ply(2)).gain("1 .25 .25")


degjoj_ket_melodi:
arrange(
  [1,  "d5 - gb4 - gb4 - d5 - d5@4 - - - - "],
  [1,  "- gb4 - gb4 - d5 - d5 - gb4 - g4 - gb4 -  "], 
  [1,  "e4 - e4 - e4 - db5 - db5@5 - - - -"],
  [1,  "- e4 - e4 - db5 - db5 - gb4 - g4 - gb4 -  "],
  [1,  "d4 - d4 - d4 - b4@2 - b4@3 - - - -"],
  [1,  "- d4 - d4 - b4 - b4 - d4 - e4 - d4  "],
  [1,  "db4 - db4 - db4 - bb4@2 - bb4@2 - -"],
  [1,  "- - bb4 - b4 - db5 -"]
).note()
  .sound("gm_acoustic_guitar_nylon:4")
   .sound("saw")
  .room(2).delay(.5)
  .adsr("0.1:2:.2").almostNever(x=>x.delay(1))
.fast(4).gain(slider(0,0,1))
  .color("cyan")
      ._punchcard()
