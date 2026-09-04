setCps(144/60/4)

samples('github:semism/nibbles')

kick: s("sbd bd sbd bd").distort("1:.7").duck("3:4")
  ._scope()

snare: s("- sd:4 - sd:1").bank("tr707").delay(.2)
shak: s("tambourine")
  .struct("x x - x x - - x").delay(.25)
  .velocity(rand.range(1, 2))

hat: s("{- [white]}!4").clip(.3).velocity(rand.range(1, 2)).delay(.25)
.lpf(rand.range(4000, 4500))

var trans = "<[0!7 1] [-3!7 1] [0!7 1] [<2 [-1]>!6 1!2]>"
// trans = "0"
var scale = "<f#:minor!6 a:major!2>"

sub: n("0!8")
  .scale(scale)
  .scaleTrans(trans)
  .scaleTranspose(-7)
  .s("supersaw")
  .lpf(800)
  .decay(.4)
  .unison(22)
  .orbit(4)

bass: n("0!16").s("supersaw, gm_voice_oohs")
  .scale(scale)
  .scaleTrans(-7)
  .scaleTrans(trans)
  .lpf(200)
  .distort("2:.5")
  .lpenv(3)
  .unison(22)
  .room(.2)
  .orbit(4)

bass2: n("0 - 0 0 1 0 0 -").s("supersaw")
  .scale(scale)
  .scaleTrans(-7)
  .scaleTrans(trans)
  .lpf(300)
  // .lpenv(3).lpq(12)
  .decay(.4)
  .distort("3:.5")
  .unison(22)
  .room(.2)
  .orbit(4)

beep: n("-!7 1").s("supersaw")
  .scale(scale)
  .scaleTrans(7)
  .lpf(3000)
  .lpenv(2).lpq(12)
  .decay(.4)
  .distort("3:.2")
  .unison(22)

beqo: s("beqar/8").fit()
// .scrub("<0 -!3>")
.attack(.2)
// .scrub("<0@2 .25!2 .5! .62@2>".fast(2))  
.orbit(3)

beqo_vox:
s("beqar:1/8").fit()
// .scrub("<<0 .12 .5 .62> -!3>")
// .hpf(1400)
.lpf(1200)
.delay(.1)
.gain(1.7)
// .orbit(3)
._scope()

all(x=>x.whenKey("Control:b", x=>x.coarse("8").color("red").lpenv(5)))
