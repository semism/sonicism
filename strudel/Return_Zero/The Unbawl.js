setCps(120/60/4)
samples('github:semism/smbreaks')

kick: s("sbd bd sbd bd").distort("1:.7").duck("2:3:4:5").duckattack(.2).duckdepth(.8)
  ._scope()
tom: s("{- <mt!3 lt>}!4").late(.25).coarse(8)

snare: s("- sd:1 - sd:1")
shak: s("tambourine").struct("x x - x x - - x").delay(.25).vel(rand.range(4, 5))


// hat: s("[- white]!4").gain(.6)
//   .clip(".34 | .2 ")
//   .every(2, x=>x.ply("2 | 4 "))
//   .orbit(2)

vox: s("numbers:7").scrub(".2 .2 .25 .15")
  .velocity(rand.range(.7,1))
  .coarse("<1 2 4 8 16 8 1>").jux(rev)

sub: n(irand(10).seg("4"))
  .rib("<14 24>", 2)
  .s("supersaw").unison(22)
  .scale("a0:minor").stack(s("sine!4"))
  .orbit(5)

bass: n(irand(10).seg("8")).s("saw, gm_voice_oohs")
  .rib("<14 24>", 2)
  .scale("a1:minor")
  .lpf(200).lpenv(3)
  // .lpq("<12 15>")
  // .lpq("<22 20>")
  .jux(rev)
  .unison(22)
  .room(.2)
  .orbit(4)

// treb: n(irand(10).seg("<16!4>")).s("saw, gm_voice_oohs").gain(.32)
//   .rib("<14 24>", 2)
//   .scale("a3:minor")
//   .late(.25)
//   .delay(.5)
//   .lpf(3500)
//   .orbit(5)
// ._pianoroll()

// nokia: n(irand(10).seg(8)).s("saw")
//   .rib("<<14 -!3> 24>", 2)
//   .scale("a4:minor")
//   .delay(.5)
//   .hpf(3500)
//   .lpf(7500)
//   .orbit(4)

amen: s("breaks:4/2").fit()
  .scrub(irand(16).div(16).seg(8).rib(1, 2))
  .almostNever(ply("2 | 4"))

all(x=>x.whenKey("Control:b", x=>x.coarse("8").color("red").lpenv(5)))
