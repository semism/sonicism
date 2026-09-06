setCps(105/60/4)
samples('github:semism/smbreaks')


kick: s("sbd!4").distort("1:.7").duck("2:3:5").duckattack(.2).duckdepth(.8)
  ._scope()
snare: s("- sd:1 - <sd:1 sd>")


cb:   s("- - cb - - cb - - - - - cb cb - - - ").velocity(.4)
ohat: s("- oh - - oh - - - - - oh oh - - - - ").clip(.2).velocity(.4)

hat: s("hh")
  .struct("- x - x - x - x")
  .almostNever(ply("2 | 4"))
  .velocity(rand.range(.65,1))
  .orbit(2)

var prog0 = "<ab:major eb:major f:minor db:major>".fast(2);
var prog1 = "<ab:major db:major eb:major ab:major>".fast(2);


var seq = arrange(
  [4, prog0],
  [4, prog1]
)


delta: n("<0 -> - - - - - - < -  [0 2 5 5]>".add(14)).s("sine")
  .decay(0.5).late(.25)
  .scale(seq).room(1).size(2).velocity(1).detune(4)

monk:  n("- - - - 2 0 - -".add(-14))
  .scale(seq).s("supersaw")
  .decay(.4)
  .delay(.5)
  .vowel("- - - - <a oe> oe - -").gain(10)
  .orbit(3)

sub: n("0!16".transpose(-14))
  .s("sine")
  .distort("5:.4")
  .scale(seq)
  .lpf(sine.range(200, 600).fast(8)).lpa(1).lpr(0)
  .orbit(5)
.scope()

treb1: n("0 -2 0 2 - - 2 0".transpose(7)).fast(2)
  .s("supersaw")
  .scale(seq)
  .lpf(sine.range(1200, 2600).fast(8)).lpa(1).lpr(0)
  .late(.25)
  .delay(.5)
  .orbit(5)
.pianoroll()

treb2: n("0 -2 0 2 - - 2 0".transpose(7)).fast(2)
  .s("triangle")
  .detune(4)
  .scale(seq)
  .delay(.5)
  .orbit(5)
.pianoroll()


all(x=>x.whenKey("Control:b", x=>x.coarse("8").color("red").lpenv(5)))
all(x=>x.whenKey("Control:o", x=>x.hpf(sine.range(500, 1400).mul(2).slow(2))))
