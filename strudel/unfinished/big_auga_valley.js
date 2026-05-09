samples('github:semism/smbreaks')

setcpm(90/4)

const auga = s("supersaw*16")
  .n(irand(16).seg(1).rib("<26 ->",1))
  .scale("<c2:minor a1:minor>").delay(.5).delayfeedback(.6).delaytime(.25)
  .attack(.05).rel(.04).lpf(sine.range(50, 800).slow(4)).lpenv(3).lpq(12)

auga: auga.velocity(1)
  .pan(sine).jux(rev)
  .distort(tri.mul(1.5)).scope()

auga2: auga.lpf(tri2.mul(1))

auga_room: auga.room(5).size(4).velocity(.8)
  ._spectrum()

piano: s("piano")
  .n("<{3, 5, 0} 3 5 0>".early(.25)).scale("c4:minor")
  .release(2).att(.2)

 distant_horn: s("saw")
  .n(irand(16).seg(4).rib("<3 5 64 3>", 4))
  .scale("<c2:minor a1:minor>").delay(.5).delayfeedback(.6).delaytime(.25)
  .attack(.05).rel(.04).lpf(sine.range(200, 1800).slow(4))

close_climb: s("supersaw!16").n("2 3 4 5").scale("a1:minor").distort("3:.5").lpf(1900)
high_climb:  s("supersaw!16").n("<- - 4 [5 2]>".late(.25)).scale("a2:minor").distort("2:.5")

fajlli: s("gm_church_organ")
  .scale("c1:minor").n("<0 2 - ->")
  .release(.2)
  .delay(.7).delaytime(.5).delayfb(.5).lpf(sine.range(100, 1400))
  .orbit(4)

amen0: s("breaks/2").fit().lpf(2500).room(2)

amen2: s("breaks:2/2").fit().pan(1).lpf(1800).scrub("[.25 .53] .25 .75 .25")

hihat: s("white!8".late(".25 .1")).clip(.1).pan(.11)
.lpf(sine.range(500, 2500).fast(16))
.room(4)
