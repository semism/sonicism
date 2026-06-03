samples('github:semism/nibbles')

setcpm(140/4) //go up to 220 then bring the collapse

kick: s("sbd:3!2").gain(1.6)
snare: s("sd:2").delay(.05).room(1).release(2).lpf(4000)
cbhat: s("oh!4, cb?, hh").delay(.05).room(1).release(2).lpf(4000)

const pat = n("0 5 4 - 0 0 0 4").scale("g:minor");

sub: pat.transpose("m")
  .late(.25).s("sine")
  .decay(.4).sustain(.5)
  .rel(.3).room(1)

floor: pat.s("supersaw")
  .decay(.4).sustain(.5).lpf(2500)
  .rel(.3).room(3)
  .transpose("m")

stairs: pat.s("supersaw")
  .decay(.4).sustain(.5)
  .rel(.3).room(3)
  .scaleTranspose("-7").scaleTranspose("<0!4 -2 -4 - -6>")

table: pat.s("wt_digital_crickets")
  .every(8, x=>x.lpf(500).lpenv(2).lpq(12))
  .room(2)

glockenight: pat.transpose("35").late(.25).velocity(.45)
  .s("sine").hpf(1000).pan(0)
  .decay(.4).sustain(.5)
  .rel(.2).room(1)

buzz: n("<0@4 -2@4>!8").scale("g:minor").s("saw").velocity(.5)

pad: s("tones").fit().scrub("<<.3!7 .15> .4>")
  .struct(rand.round().rib(14, 2))
  .seg(8).clip("<.2 .4>").decay(.1)
  .release(.5)
  .almostNever(ply(2))

