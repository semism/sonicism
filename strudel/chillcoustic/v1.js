
setcpm(120/4)

const chord_prog = "<D3:major A3:major <B3:major C3:major> ->"

chords:
n("1, 3, 5")
  .scale(chord_prog)
  .sound("gm_synth_strings_1, sine")
  .delay(.6)
  .adsr(".1:.2:4:.4")
  .room(3)
  .gain(.1).color("cyan")._scope()

arpeg:
arrange(
  [1,  "1 3 5"],
  [1,  "1 3 5"],
  [1,  "1 3 5"],
  [1,  "-"]
).n().fast(4)
  .scale(chord_prog)
  // .scale("D5:major")
  .cutoff("5000 2000 2000")
  .adsr("0:0:.4:.2")
  .sound("gm_orchestral_harp pulse square")
  .delay(.5)
  .gain(.8).room(1).color("teal")._spiral()


squeak: n("1 1 1 [1 1]").fast(1)
  .scale("D5:major")
  // .adsr("0:0:.4:.2")
  .sound("<- - - gm_tinkle_bell:3> gm_tinkle_bell:2 gm_tinkle_bell:3")
  // .room(2)
  .delay(.5)
  .gain(.4).color("pink")._punchcard()
          
bass:
n("1 1 1 1".sub("<[4, 8] 8 8 8>/2"))
  .sound("gm_acoustic_bass")
  .almostNever(x=>x.ply(2))
  .fast(2).delay(.5)
  .scale("D3:major").color("violet")._punchcard()

kick: s("bd:1 bd bd bd").bank("tr707")
  .room(1).roomsize(4).gain(.6)
snare: s("- sd - <sd [sd sd]>").room(".5 1").roomsize(4).rel(.1)
hats: s("- oh - <hh hh*2> - - - <rim:3 rim:3*2>")
  .gain("<.3 .5>").room(.5).roomsize(4).jux(rev)

// number_lady:
// note("d2:0 c2:1 c2:1 f2:0")
//   .sound("numbers").room(1).jux(rev)
