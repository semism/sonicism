samples('github:semism/smbreaks')

setcpm(95/4)
let chords = ["<e:minor a:minor e:minor g:minor>", "a:minor"];

kick: s("bd").bank("tr707").room(1).size(12).velocity(.5)
  .struct("1 - - 1  - 1 - 1  - - - 1  - - 1 -")
  .clip(.05)

hat: s("white")
  .clip(.2).room(1).size(12)
  .struct("<0 1*2> 1 0 1*2 0 1 0 1".early(.25))
  .velocity(".4 .3 .8 .5".mul(.5))

boop: note("g4").s("pulse").beat("<16 ->", 16).echo(3, 1/16,.5)

osicalate: n("0 1 3 5 6 2 4 2".add("0"))
  .scale(pick(chords, 0))
  .s("gm_overdriven_guitar").ply(16)
  .lpf(1350).crush(10).distort(1.6)

perc_bass: n("0".add("-14"))
  .scale(pick(chords, 0)).s("supersaw")
  .struct("<{- - 1 -  - - 1 -  - - 1 -  - 1 - 1}/2 ->")
  .delay(.5).delaytime("0 .25 0 0")
  .lpf(150).lpq(15).crush(4)

amin: s("breaks:2/2").fit().scrub(".50 .25")
