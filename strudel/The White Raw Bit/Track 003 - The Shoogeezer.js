setcpm(90/4)


kick: s("bd:2 - - <- bd> bd bd - -").bank("dr550").room(.2).vel(rand.range(.3, .4)).soft(1.5)
snare: s("- sd - sd").bank("dr550")
  .vel(rand.range(.58, .99))
  .every(4, x=>x.ply("1 2"))
  .every(8, x=>x.ply("4 4"))

hh: s("<hh rd hh!2 hh:2!4>*8")
  .bank("dr550").vel(rand.seed(12).range(.1, .5)).pan(.2)

oh: s("<oh>*4")
  .bank("dr550").vel(rand.seed(2).range(.1, .4)).pan(.8)

rim: s("rim").bank("lm8953")
  .struct(`<
  - 1 - 1 - - [1 1] 1
  - 1 - - - - - 1
  - 1 - 1 - - [1 1] 1
  - 1 - - - - - 1
  >*8`)
  .vel(rand.seed(2).range(.7, .9).rib(2048,2))

bass: n("7!8").scale("a:minor")
  .transpose(-28).s("saw")
  .lpf(140).lpe(1).att(0)
  .fm(4).fmdec(.1).fmh(2)
  .unison(3).detune(1).room(.5).delay(.25).delays(1/4)


lead_right:  n("0 3 5 7 0 0 3 0 5 _ 2 3 1 _ 1 3")
  .scale("<a2:minor c:minor>").s("saw")
  .attack(.1).decay(.2).distort("3:.1").vel(sine.range(.8, 1))
  .lpf(sine.range(2200,500).slow(2))
  .lfo().lpq(3).lpenv(3)
  .room(.2).delay(.25)
  .pan(sine.slow(2))


var rythm_guitar =
  chord("<Am Cm>").voicing()
  .transpose("-14")
  .s("gm_distortion_guitar")
  .room(.2).delay(.25)

support_rythm_guitar: 
rythm_guitar.transpose("-7").every(2, x=>silence)
  .late(rand.range(.0125,.0075))
  .pan(perlin.range(0,1).fast(2)).vel(.5)

rythm_guitar: rythm_guitar  
  .lpf(saw.range(1500, 2000))
  .late(rand.range(0,.0075))
  .jux(rev)
  .ply(16) //ply to strum
  .unison(4)
  .room(1.5)
  .delay(.25).delays(1/4)

detuned_guitar: rythm_guitar  
  .lpf(555)
  .late(rand.range(0,.0075))
  .ply(16) //ply to strum
  .unison(4)
  .room(1.5)
  .delay(.25).delays(1/4)
  .superimpose(x=>x.s("supersaw"))








