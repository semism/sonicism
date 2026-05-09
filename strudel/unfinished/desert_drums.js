samples('github:semism/smbreaks')
setcpm(80/4)

amen: s("breaks:4/2").fit().duck("2:3").duckdepth(.5)
  .scrub(irand(16).div(16).seg(8).rib(43, 1))
  .delay(".5, .1").gain(.3)
  .almostNever(ply("2 | 4"))
  ._scope()
floor: s("bd!4").duck("4")
.delay(".3:.25:.6").velocity(.7)

snare_bass_synth: n(irand(5).seg(8)
              .rib(142, 2).add("-28")).scale("d1:minor").s("sd:2").ply(16).orbit(2).orbit(4)
              .velocity(.07).delay(".5:.5:.5")._pianoroll()
