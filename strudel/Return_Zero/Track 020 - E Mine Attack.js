samples('github:semism/smbreaks')
setcpm(70/4)

sing: n(irand(5).seg(4).rib("<142 <44 123>>/2", 2))
  .scale("d3:minor")
  .s("gm_voice_oohs:2")
  .mask("<1 0>")
  .room(4).att(1).rel(1)
  .lpf(sine.range(100, 3000).fast(16))
  ._spectrum()

water: n(irand(5).seg(4).rib("<142 <152!2 123 45>>/2", 2))
  .scale("d3:minor")
  .s("supersaw, gm_sitar")
  .mask("<- 1> <1 ->")
  .rel(.5).att(.1)
  .lpf(50).lpenv(2).lpq(6)
  .lpa(sine.range(.1, .5).fast(2))
  .lpr(.5)
  .delay(".25:.5:.5").room(1)
  ._pianoroll()

wt: s("basique").bank("wt_digital").seg(4).n("<0 2 0 ->").scale("d2:minor")
  .warp("0.4 .5".slow(2))
  .warpmode("asym")._spectrum()

snare_bass_synth: n(irand(5).seg(8)
              .rib(142, 2).add("-28")).scale("d1:minor").s("sd:2").ply(16).orbit(2).orbit(4)
              .velocity(.07).delay(".5:.5:.5")
  .distort(1)
  ._pianoroll()


nausea: n("<0 - 0 ->").scale("d1:minor").s("supersaw")
  .att(.1).rel(.2)
  .lpf(500).lpa(.3).lpe(tri.range(1, 2).slow(4))
  .lpq(saw.range(6, 12).slow(2))
  .hpf(200)

// amen: s("breaks:4/2").fit().duck("2:3").duckdepth(.5)
//   .scrub(irand(16).div(16).seg(8).rib(43, 1))
//   .delay(".5, .1").gain(.3)
//   .almostNever(ply("2 | 4"))
//   ._scope()
// floor: s("bd!4").duck("4")
// .delay(".3:.25:.6").velocity(.7)



ants: n(irand(5).seg(8).rib(142, 2)).scale("d3:minor").s("saw")
  .delay(".5:.5:.5").hpf(1200).lpf(1700)
  .clip(.05)



