setcpm(200/2)

samples('github:semism/nibbles')

const prog = "<G F# Bm Bm>"
const key  = "B1:harmonic:minor"

bass: n("<-2 -3 0 0>".add("<0 0 0 4>/4"))
  .scale(key)
  .struct("x x -")
  .s("saw")
  .unison(4).room(.3)
  .lpf(300)
  .soft(1)
  .fm(3).fmh(.99)

acid: n("0!6".add("<0 0 0 <4 [7 2 2 5 5 7]>>/4"))
  .scale(key)
  .s("saw")
  .lpf(500).lfo().lpenv(2).lpq(20)
  .delay(.25).dfb("<0 .25 .5 .75>/4")
  .velocity("1 0 .2 1 0 .2")
  .soft(1)


chords: chord(prog).anchor("d4").voicing()
  .struct("x ~ ~ x - -")
  .s("supersaw")
  .decay(.4)
  .delay(.25).dfb(.75)
  .unison(4)
  .rel(.2)
  .room(.3).gain(.66)


kick:  s("- - - sbd - -")

ohat: s("white - - - - -").rel(.1)
 .lpf(3500).lfo()

hat: s("hh:4 - - hh:4 - -")


skelet_fast: s("skelet")
  .slice(12,"- - - <0 6> - -")
  .echo(2, 1/2, .7).gain(.35)

skelet: s("skelet/16").fit()
.room(2)
.echo(2, 1/6, .8)
.phaser(2)
.soft(1)




  
