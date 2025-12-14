samples('github:semism/nibbles')


setCpm(140/4)

const low_roar = irand(8).rib(21, 4).struct("<x@2>").add(-28);

uk_nxhum: n(low_roar)
  .scale("f:major").gain(berlin.range(.1, 1).fast(2))
  .room(1).delay(.5)
  .s("animals/4").fit()

nder_deti: n(low_roar.add(7)) //add7 "<0!7 7>"
  .scale("f:major").orbit(2)
  .clip(1)
  .room(1) //reach 2
  .delay(.5)
  .s("tones")

shkelm: s("bd!4").room(.5).duck("2:3")
shpull: s("sd!2").room(.5)

ulurime: s("animals")
  .scrub(irand(10).div(10).seg("<8 16>").rib(32, 1))

cheni: s("animals!8").speed("<1.3!4 2!4>").clip(irand(5).div(10).rib(12, 2))

uki: s("<-!14 animals!2>").speed(2)

flaka: n(irand(8).rib("<77!10 72!2 22!2 71!2>", 2).seg("8").add("<-14!8 -7!8>")) //seg reach 8
  .scale("f:major")
  .s("supersaw, supersaw, sine") //tones/4
  .orbit(3).rel(.1).jux(rev)
  .distort("2.6:.2")
  .lpf(200).lpenv(2).lpq(15) //to 900 and off
  .color("cyan")._punchcard()
pershendetje: n(irand(8).rib("<77 12>", 2).seg("4 8").add(-14)) //seg reach 8
  .scale("f:major")
  .s("tones/4") 
  .orbit(2).rel(.1)
  .jux(rev)
  .distort("2.6:.2")
