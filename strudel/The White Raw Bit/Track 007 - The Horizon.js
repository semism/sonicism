setcpm(90/4)

var climb = "<0 3 5 7>"
climb = "0"

var pat = n(irand(12).seg(8).rib("<414 16>", 1).add(climb)).scale("a:minor");

// lead: pat
//   .s("sine")
//   .fm(2).fmdec(.4)
//   .unison(3).detune(1).room(.5).delay(.5).delays(1/4)
//   .set.mix(vel("<.2 .3 .2 .3 .4@2 .9@2>*8").fast(2))

kick: s("bd:2 - - <- bd> bd bd - -").bank("dr550").room(.2).vel(rand.range(.3, .4)).soft(1.5)
snare: s("- sd - sd").bank("dr550")
  .vel(rand.range(.58, .99))
  .every(4, x=>x.ply("1 2"))
  .every(8, x=>x.ply("4 4"))

hh: s("<hh>!8")
  .bank("dr550").vel(rand.seed(12).range(.1, .5)).pan(.2)

oh: s("<oh>*4")
  .bank("dr550").vel(rand.seed(2).range(.1, .4)).pan(.8)


bass: n("7 7 7 7 7 7 [7 8] [7 7]").scale("a:minor")
  .transpose(-28).s("saw")
  .lpf(140).lpe(1).att(0)
  .fm(4).fmdec(.1).fmh(2)
  .unison(3).detune(1).room(.5).delay(.25).delays(1/4)

riff_guitar:
  n("<2 0 2 0 -2 0 2 0>*8")
    .add(
      stack(
        note(-12.5),
        ))
  .scale("a:minor")
  .s("gm_distortion_guitar")
  .lpf(1200)
  .lfo() //remove effect drama
  .late(rand.range(0,.0075))
  .delay(.25).delays(1/4)
  .soft(.4)


var arp = n("0 3 5 7 0 0 3 0 5 _ 2 3 1 _ 1 3").scale("<a2:minor c:minor>")

const lead_guitar =  arp.s("saw").attack(.1).decay(.2).distort("3:.1")

lead_left: lead_guitar.transpose(-7).pan(0).vel(sine.range(1, .8))
  .lpf(sine.range(1600,300).slow(4)).lfo().lpq(12).lpenv(2)

lead_right: lead_guitar.pan(1).vel(sine.range(.8, 1))
  .lpf(sine.range(2200,500).slow(2)).lfo().lpq(5).lpenv(3)



var rythm_guitar =
  chord("<Am>").voicing()
  .transpose("-14")
  .s("gm_distortion_guitar")
  .room(2).delay(.25)

support_rythm_guitar: 
rythm_guitar.transpose("-7").every(2, x=>silence)
  .late(rand.range(.0125,.0075))
  .pan(perlin.range(0,1).fast(2)).vel(.5)

rythm_guitar: rythm_guitar  
  .lpf(saw.range(1500, 2000))
  .lfo() //remove effect drama
  .late(rand.range(0,.0075))
  .jux(rev) //onoff
  .ply(16) //ply to strum
  .delay(.25).delays(1/4)









