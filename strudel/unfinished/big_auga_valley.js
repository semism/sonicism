samples('github:semism/smbreaks')

setcpm(60/4)

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


 distant_horn: s("supersaw*4")
  .n(irand(16).seg(4).rib("<3 5 64 3>", 4))
  .scale("<c2:minor a1:minor>").delay(.5).delayfeedback(.6).delaytime(.25)
  .attack(.05).rel(.04).lpf(sine.range(200, 1800).slow(4))


close_climb: s("supersaw!16").n("2 3 4 5").scale("a1:minor").distort("3:.5").lpf(200)

fajlli: s("gm_church_organ")
  .scale("c1:minor").n("<0 2 - ->")
  .release(.2)
  .delay(.7).delaytime(.5).delayfb(.5).lpf(sine.range(100, 1400))
  .orbit(4)


amen0: s("breaks").fit().lpf(1500).orbit(2)

amen2: s("breaks:2").fit().pan(1).lpf(800).scrub("[.25 .53] .25 .75 .25").orbit(3)

hihat: s("white!8".late(".25 .1")).clip(.1).pan(.11)
.lpf(sine.range(500, 2500).fast(16))
.room(4)


kick: s("bd:4 bd:4 bd:4*2 bd:4").duck("2:3:4:5")

snare: s("- sd:4 - sd:4").delay(.5).delaytime(".15")

ohat: s("oh:2 oh:2")

hhat: s("hh:4!8".late(.125))

