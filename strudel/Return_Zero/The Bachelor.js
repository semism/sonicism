setCps(144/60/4)

samples('github:semism/nibbles')

kick: s("sbd bd sbd bd").distort("1:.7").duck("2:3:4").duckattack(.2).duckdepth(.8)
  ._scope()

snare: s("- sd - sd")
shak: s("tambourine")
  .struct("x x - x x - - x").delay(.25)
  .velocity(rand.range(1, 2))

hat: s("{- [hh]}!4").velocity(rand.range(1, 2)).delay(.25)

sub: n("0!8")
  .scale("<f#:minor!7 a:major>")
  .scaleTranspose(-7)
  .s("supersaw")
  .lpf(800).lpq(12)
  .decay(.4)
  .unison(22)
  .orbit(4)

bass: n("0 <[3 5]!7 [5 3]> <-!7 4> 0".fast(2)).s("supersaw, gm_voice_oohs")
  .scale("<f#:minor!7 a:major>")
  .scaleTrans(-7)
  .lpf(200)
  .distort("2:.5")
  .lpenv(3)
  .unison(22)
  .room(.2)
  .orbit(4)

beqo:
s("beqar/8").fit()
// .scrub("0.75!2")
.gain(1.7)
.room(.2).size(5)
.orbit(3)


all(x=>x.whenKey("Control:b", x=>x.coarse("8").color("red").lpenv(5)))
