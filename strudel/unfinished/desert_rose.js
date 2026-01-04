
samples('github:semism/smbreaks')
setcpm(80/4)

amen: s("breaks:4/2").fit().duck("2:3:4").duckdepth(.5)
  .scrub(irand(16).div(16).seg(8).rib(43, 1))
  .delay(".5, .1").gain(.3)
  .almostNever(ply("2 | 4"))
  ._scope()

snare_bass_synth: n(irand(5).seg(8)
              .rib(142, 2).add("-28")).scale("a1:minor").s("sd:2").ply(16).orbit(2)
              .velocity(.07).delay(".5:.5:.5")._pianoroll()

lead1: n(irand(5).seg(4).rib(142, 2).add(7).add("<0 5 0 5>".early(.25)))
              .scale("a:minor").s("supersaw").orbit(3)
              .mask("<0 1>")
              .velocity(.25)
              .unison("25")
              .room(.2).room(6)
              .delay(".8:2:.8")
              .cutoff(5000)
              ._pianoroll()

lead2: n(irand(8).seg(16).rib(12, 2).add("<0 5 0 5>").add(-7))
              .scale("a:minor").s("supersaw")
              .velocity("<[.8 0] [0 .5 0 .7]>")
              .unison("10").room(2).room(2)
              ._pianoroll()
