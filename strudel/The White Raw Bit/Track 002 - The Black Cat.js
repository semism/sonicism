
samples('github:semism/smbreaks')
samples('github:semism/nibbles')

setcpm(110/4)

const scale = "<c:major>"

kick: s("bd:1!4").duck("2").duckatt(".2")

inter_kick: n("-14").scale(scale)
  .struct("- 1 - 1  - - 1 1  1 - - 1  - <1 -> - -")
  .s("sbd").room(.1).rel(1)

snare: s("- sd:1 - sd:1").vel(rand.range(.2, .9))
snare_ghost: s("- pink - pink").clip(.12)
perc_saw: n("0 - 0 -".fast(8).late("<.25 .125>")).scale(scale).s("saw")
  .clip(.5).lpf(600).lpq(12).delay(.25).att(.1).distort("2:.2")
ohat: s("- oh - oh - oh - oh").vel(rand.range(.45, .55))

rim: s("- <spacedrum_rim [yamahary30_rim:1!2]>".late(.125))
    .velocity(rand.range(.2, 1).fast(2))

bass:
 n("0 0? 0 - 0 - 0 0".late(.125)).fast(4).slow(2)
  .scale(scale).s("sine")
  .fm(4).fmh(.99)
  .distort("3:.45")
  .transpose(-14)
  .decay(.8)
  .lpf(50).lpa(.2)
  .room(.2)

reed_bass:
 n(irand(12).seg(8).rib(488, 1))
  .scale(scale).transpose("-14")
  .s("gm_reed_organ")
  .decay(.3).delay(.25)

bark:
 n(`<0 0 - 0 
     0 - 0 0 
     0 0 0 0
     0 - <0 7> 0>*16`.add("<7 14!3>"))
  .scale(scale)
  .s("pulse")
  .att(.02).rel(.01)
  .pan(perlin.range(0, 1).fast(2))
  .decay(.3).delay(.25)
  .fm(4).fmh(.15).fmdec(.15)
  // .velocity(rand.range(.5, .8))

_sand:
  n(irand(16).seg(16).rib("488", 2)).scale(scale)
 // .orbit(2)
 .s("supersaw")
 .transpose(-14)   
 .delay(.5)
 .velocity(.35)
 // .attack(.2) //attack off
 .lpf(1200)
 .lpa(.0125)
 .lpd(sine.range(.1,.9).slow(2))
 .lpq(saw.range(1, 12).slow(2))
 .distort("2:.5").distorttype("<0 1 2>")
 .pan(sine.slow(4))


_amen: s("breaks:3/2").fit()
  .scrub(irand(16).div(16).seg(8).rib("<[2048 16]!4 55 16 55 16>", 1))
  .delay(.125).velocity(rand.range(.7,1))


_dek: s("nibble/2").fit()
  .scrub("- .44 - .44").clip(.4)
  .lpf(3200).lpq(12)
