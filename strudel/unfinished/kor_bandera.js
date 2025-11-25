setcpm(130/4)

const chords = "<Em [C D] G D>/4";

const scales = "<e:minor [c:major d:major] g:major d:major>/4";

const kit = "akaimpc60"

kick: s("bd!4").bank(kit).duck("2:3")
snare: s("sd!2").struct("- x - x").bank(kit).ply("1 2")
hat: s("hh").struct("x x - x x x - x x x x - x x x x").bank(kit).gain(rand.rib(44,3))
ophat: s("oh").struct("x - x - - - x - - - - x - - x -").bank(kit).delay(.5).gain(".5 .8")

duba: chord(chords).s("gm_voice_oohs").voicing()
  .distort("5:.03").pan(.7).delay(".2, .5").decay(4).room(4).size(5)
  .scope()

bah: chord(chords).s("numbers:0").voicing()
  .delay("1,.5").room(4).size(5)
  .scope()

robosong: chord(chords).s("supersaw").voicing()
  .distort("1:.4").orbit(3)
  .scope()

bass: n("0!16".add(-7).add("<0 3 4 5>")).scale(scales).s("supersaw")
  .distort("2").sometimesBy(0.1, x=>x.add("7").slow(2))



lead2: n(irand(6).seg(8).add("7").add("<0 3 4 5>").rib("<99 5 32 30>", 4)).scale(scales)
  .s("gm_shamisen").distort("2").pan(sine.slow(16))
  .delay(".2,.5")
  .crush(6).lpf(1400).lpenv(3).lpq(10)
  ._pianoroll()
