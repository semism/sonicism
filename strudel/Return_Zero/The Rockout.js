setcpm(90/4)

var climb = "<0 3 5 7>"
climb = "0"
const pat = n(irand(12).seg(8).rib("<414 16>", 1).add(climb)).scale("a:minor");

mel: pat.s("gm_guitar_harmonics")
  .transpose(-14)
  .decay(.4)
  .room(1).size(4)
  .pan(.67)
  .ply(2)

radio: pat.s("piano")
  .decay(.2)
  .ply("<<2 8> 4 2 4>")
  .transpose(-14)
  .fm("<8 16>".slow(4))

kick: s("bd:2 - [bd!2] -").bank("dr550").room(.2).vel(rand.range(.3, .4))
snare: s("- sd - sd").vel(rand.range(.58, .99))
  .every(4, x=>x.ply(2))
  .every(8, x=>x.ply(4))
hh: s("<oh hh>!16")
  .bank("dr550").vel(rand.range(.058, .199)).pan(.2)

rythm_guitar: chord("<Am Cm>").voicing()
  .transpose("-14")
  .s("gm_distortion_guitar")
  .room(2).delay(.25)
  .lpf(saw.range(2200, 3000)) //remove effect drama
  .ply(16) //ply to strum
  .late(rand.range(0,.0075))
  .jux(rev) //onoff

var arp = n("<0 3 5 7>*16").scale("<a2:minor c:minor>")

const lead_guitar =  arp.s("saw").attack(.1).lpf(sine.range(200,600))

lead_left: lead_guitar.transpose(-7).pan(0).vel(rand.range(.8,1)).lpq(10).lpenv(3)

lead_right: lead_guitar.transpose(0).pan(1).vel(rand.range(.8,1)).lpq(12).lpenv(2)

lead_low: lead_guitar.s("supersaw").transpose(-7)

bass: n("<0 0 - 0 0 0 0 0>*4").scale("<a2:minor c:minor>")
  .transpose(-14).s("saw").lpf(200).rel(.6).att(0)












