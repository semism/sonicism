samples('github:semism/smbreaks')

setCpm(90/4)

amen: s("breaks/2").n("<0@7 1>").fit().gain(2) //reach 3
.scrub(irand(16).div(16).seg(8).rib(5, 2))
  .almostNever(ply("2 | 4"))

line1: n("[0!2] 0 0 [3!2] 4 0 0 4".add("7, 14, 28"))
  .scale("a:minor").s("gm_clavinet").clip(".5 .7").ply(2).pan(saw)

line2: n("[0!2] 0 0 [3!2] 4 0 0 4".add("0, -7"))
  .scale("a:minor").s("sine").delay(".2, .5").gain(.7)
  .lpa(.4).lpenv(4) 
  .room(1).size(4)
  .every("4", x=>x.clip(".5 .7").ply(2))

top_line: n("[0!2] 0 - 0 2 - 0 2".add("<7 8 9 [[6 5]!4]>").add(7))
  .scale("a:minor").s("sine").echo(4 , 2, .5).room(1).lpf(2000).lpenv(2).lpq(22)
  .pan(sine.slow(32))
  .pianoroll()




