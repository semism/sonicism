setCps(105/60/4)
samples('github:semism/smbreaks')

amen: s("breaks:3/2").fit()
  .scrub(irand(16).div(16).seg(16).rib("<44 2>", 1))
  .almostNever(ply("2 | 4")).delay(.25).velocity(.65)

kick: s("sbd!4").distort("1:.7").duck("2:3:5").duckattack(.2).duckdepth(.8)
  ._scope()
tom: s("{- <mt!3 lt>}!4").late(.25).coarse(8)
snare: s("- sd:1 - sd:1")

shak: s("tambourine").struct("<x x - - [- x] x - - [[- x]!4]>").delay(.25).vel(rand.range(4, 5))

kjup: s("white").clip(.4)
  .struct("- - - x - x - x")
  .almostNever(ply("2 | 4")).delay(.25)
  .velocity(rand.range(.65,1))
  .lpf(400).lpenv(3).lpq(15)
  .orbit(2)


var prog0 = "<d:minor!2 [c:major d:minor]!2>";
var prog1 = "<a:minor c:major a:minor c:major d:major e:minor f:minor d:major>";
var prog2 = "<e:pentatonic!2 e:phrygian ->";

var seq = arrange([32, prog0],
                  // [16, prog1], 
                  // [8, prog2]
                 )

var hornpat = "- - 0 0 - <- 0 - -> - <- -1 - ->".add("<0 2 -1 4>");

monk:  n("[- 0]!8".add(-14).slow(2))
  .scale("d:minor").s("supersaw")
  .decay(.4)
  .delay(.5)
  .vowel("<a e oe a>").gain(8)
  .orbit(3)

//.add(14)
horn:  n(hornpat).delay(.25).rel(.2).att(.15)
  .s("supersaw").scale("d:minor")
  .unison(22).room(3).detune(sine.range(0.5, 2).fast(2))
  .orbit(2)

sub: n("0 -12 0 0 0 0 -12 0".transpose(-14))
  .s("supersaw").room(2).size(2)
  .distort("5:.4")
  .scale(seq)
  .lpf(sine.range(200, 600).fast(8)).lpa(1).lpr(0)
  .unison(7)
  .orbit(5)
.scope()


treb: n("0 - 0 2 0 0 - 0".transpose(7)).fast(2)
  .s("saw")
  .scale(seq)
  .lpf(sine.range(1200, 2600).fast(8)).lpa(1).lpr(0)
  .late(.25)
  .delay(.5)
  .orbit(5)
._pianoroll()



all(x=>x.whenKey("Control:b", x=>x.coarse("8").color("red").lpenv(5)))
