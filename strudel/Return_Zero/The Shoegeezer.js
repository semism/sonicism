setcpm(90/4)

var climb = "<0 3 5 7>"
climb = "0"
const pat = n(irand(12).seg(8).rib("<414 16>", 1).add(climb)).scale("a:minor");

guitar: pat.s("gm_distortion_guitar")
  .decay(.4).lpf(400).lpq(12).lpenv(2)
  .pan(1)
  .ply("<2 1 2 4>")

radio: pat.s("square")
  .decay(.2)
  .ply(2).pan(0)
  .fm(sine.range(8, 32).slow(4)).vel(.5)

kick: s("bd:2 - [bd!2] -").bank("dr550").room(.2).vel(rand.range(.3, .4))
snare: s("- sd - sd").vel(rand.range(.58, .99))
  .every(4, x=>x.ply(2))
  .every(8, x=>x.ply(4))
hh: s("<oh hh>!16")
  .bank("dr550").vel(rand.range(.058, .199)).pan(.2)

var rythm_guitar =
  chord("<Am Cm>").voicing()
  .transpose("-14")
  .s("gm_distortion_guitar")
  .room(2).delay(.25)

// support_rythm_guitar: 
// rythm_guitar.transpose("-7").every(2, x=>silence)
//   .late(rand.range(.0125,.0075))
//   .pan(perlin.range(0,1).fast(2)).vel(.5)

rythm_guitar: rythm_guitar  
  .lpf(saw.range(2200, 3000)) //remove effect drama
  .late(rand.range(0,.0075))
  .jux(rev) //onoff
  .ply(16) //ply to strum


var arp = n("<0 3 5 7>*16").scale("<a2:minor c:minor>")

const lead_guitar =  arp.s("saw").attack(.1).decay(.2).distort("3:.1")

lead_left: lead_guitar.transpose(-7).pan(0).vel(sine.range(1, .8))
  .lpf(sine.range(1600,300).slow(4)).lpq(22).lpenv(2)

lead_right: lead_guitar.pan(1).vel(sine.range(.8, 1))
  .lpf(sine.range(2200,500).slow(2)).lpq(5).lpenv(3)

bass: pat
  .transpose(-28).s("saw").lpf(300).att(0)
  .distort("2:.3")












