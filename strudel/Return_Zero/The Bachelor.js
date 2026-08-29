setCps(144/60/4)

samples('github:semism/nibbles')

kick: s("sbd bd sbd bd").distort("1:.7").duck("2:3:4")
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
  .lpf(800)
  .decay(.4)
  .unison(22)
  .orbit(4)

bass: n("0!16").s("supersaw, gm_voice_oohs")
  .scale("<f#:minor!7 a:major>")
  .scaleTrans(-7)
  .lpf(200)
  .distort("2:.5")
  .lpenv(3)
  .unison(22)
  .room(.2)
  .orbit(4)


bass2: n("0 - 0 0 1 0 0 -").s("supersaw")
  .scale("<f#:minor!7 a:major>")
  .scaleTrans(-7)
  .lpf(800)
  // .lpenv(3).lpq(12)
  .decay(.4)
  .distort("3:.5")
  .unison(22)
  .room(.2)
  .orbit(4)

beqo_vox_chops:
s("beqar:1/8").fit()
.scrub("<<0 .12> -!3>").vel(.5)
.gain(1.7).jux(rev)
.room(.2).size(5)

beqo:
s("beqar/8").fit()
.scrub("<0 .75 .5 .25>")
.gain(1.7)
.room(.2).size(5)
.orbit(3)

beqo_vox:
s("beqar:1/8").fit()
.scrub("<0 ->")
.gain(1.7).jux(rev)
.room(.2).size(5)
.orbit(3)

all(x=>x.whenKey("Control:b", x=>x.coarse("8").color("red").lpenv(5)))
