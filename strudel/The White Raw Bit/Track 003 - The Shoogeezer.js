setcpm(90/4)


kick: s("bd:2 - - <- bd> bd bd - -").bank("dr550").room(.2)
  .vel(rand.range(.3, .4)).soft(1.5)
  .duck(2)

bass: n("7!8").scale("a:minor")
  .transpose(-28).s("saw")
  .lpf(180).lpe(1).att(0)
  .fm(4).fmdec(.05).fmh(.2)
  .unison(3).detune(1).room(.5).delay(.25).delays(1/4)
  .soft(1.2)

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



lead_right: n(`<
                <-7 0>!16
                3!15 14
                2!16
                -2!12 -3!4
               >*16`)
  .scale("<a2:minor c:minor>").s("supersaw")
  // .scaleTrans(-5)
  .fm(22).fmh(2).compressor(-30)
  .attack(.1).decay(.2)
  .distort("2:.4").vel(sine.range(.8, 1))
  .lpf(sine.range(1200,500).slow(2))
  .lfo()
  .room(.5).delay(.25)
  .pan(sine.slow(2))
  .hpf(300)

var rythm_guitar =
  chord("<Am Cm>").voicing()
  .transpose("-14")
  .s("gm_distortion_guitar")
  .room(.2).delay(.25)

detuned_guitar: rythm_guitar  
  .lpf(555)
  .late(rand.range(0,.0075))
  .ply(16) //ply to strum
  .unison(4)
  .room(1.5)
  .delay(.25).delays(1/4)
  .superimpose(x=>x.s("supersaw"))
  .hpf(300).pan(.4)

support_rythm_guitar: 
rythm_guitar.transpose("-7").every(2, x=>silence)
  .late(rand.range(.0125,.0075))
  .pan(perlin.range(0,1).fast(2)).vel(.5)
  .hpf(300)

rythm_guitar: rythm_guitar  
  .lpf(saw.range(1500, 2000))
  .late(rand.range(0,.0075))
  .jux(rev)
  .ply(16) //ply to strum
  .unison(4)
  .room(1.5)
  .delay(.25).delays(1/4)
  .hpf(300)









