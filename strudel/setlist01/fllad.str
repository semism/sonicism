setCps(90/60/4)

mora: note(
  arrange(
    [1, "c4 d4 d4@4"],
    [1, "c4 d4 d4 c4!3"],
    [1, "c4 a#3 g3!3 f3"],
    [1, "g3 a3 a#3@4"],
    [1, "a#3 [c4 d4] c4 a#3 a3"],
    [1, "g3!3 f3 g3 a3"],
    [1, "a#3@4"],
    [1, "a#3 [c4 d4] c4 a#3 a3"],
    [1, "g3!3 f3 a#3" ],
    [1, "a3 g3"],
    [1, "-"],
    [1, "c4 d4 d4@4"],
    [1, "d4 d#4 f4!3 d#4"],
    [1, "d4 c4!3 a#3 a3"],
    [1, "g3!3 f3 g3 a3 "],
    [1, "a#3@4"],
    [1, "a#3 [c4 d4] c4 a#3 a3"],
    [1, "g3!3 f3 g3 a3"],
    [1, "a#3@4"],
    [1, "a#3 [c4 d4] c4 a#3 a3"],
    [1, "g3!3 f3 a#3" ],
    [1, "a3 g3"],
    [1, "-"],
  )
).s("piano").delay(.5)
  .room(2).gain(.3)
  .off(1/16, x=>x.s("gm_tremolo_strings").gain(.2))
  // .slow(2)
  // .jux(rev)

qiejt: note("<c2@4 d2@4>").s("sawtooth, brown, gm_tremolo_strings").gain(.1)
  .room(3).roomsize(5).rel(2).attack(2)

nata: n(irand(14).seg(4)).scale("c4:minor")
  .s("brown, gm_tremolo_strings").rib(32, 8)
  .almostNever(x=>x.clip(".2 | .5"))
  .room(2).distort("1:.5")
  .every(4, x=>x.ply(2))
  .gain(.16).rel(1).attack(1)

flladi: s("white").rel(4).gain(.01).room(4).pan("<-1 0 1>")

ora: s("<rd:1 [oh:4, rd:2]>").gain(".1 .2 .2 .1").pan("<-1 -.5 .5 1>")
