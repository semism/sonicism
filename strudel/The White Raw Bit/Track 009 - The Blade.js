setcpm(143/4)

samples('github:semism/smbreaks')


matrix: n("0!16").scale("g#:major")
          .s("sine")
          .compressor(-20)
          .unison(4).detune(1)
          .fm(".5").orbit(2)

kick: s("bd:1!4").duck(2).duckatt(.3)
snare: s("<- sd:1 - sd:1 - [sd:1!2] - sd:1>*4")

hat: s("hh:1!8".late(.25)).gain(rand.range(.5, 1.2).rib(333, 2)).pan(.2)

toms: s("lt!16")
  .gain(rand.range(.4,.8).rib(23, 2))
  .orbit("<2!7 1>*8")

horn: n("<-!3 [-!4 7]>").scale("g#:major")
       .s("supersaw").room(2).delay(.5).o(2)

sub: n("-14").scale("g#:major").struct("<1 1 1 1>*4").s("sine")
  .room(1).size(5)
  .att(0).clip(.5).soft(2)

acid:n(`<
0 - 0 - 0 0 0 0
0 - 0 - 0 0 14 -
0 0 0 0 - - 0 -
0 - 0 0 - 0 0 -
>*16`)
  .scale("g#:major")
  .s("supersaw")
  .lpf(200).lpenv(3).lpq(15)
  .soft("2").delay(.25).delays(1/4)
  .compressor(-20)
  .fm(2)
  .fmh(".2".add("<0.06!3 .01>"))
  .fmdec(.3).decay(.2)
  .room(.4)
  .scope()

bass: n("[0 0 - 0] -1 [0 0 - 0] 7").scale("g#:major")
  .s("sine")
  .fm(2).fmh(".201")
  .distort(2).compressor(-20).room(.2).size(5)
  .unison(22)
  .orbit("<2!7 1>*4")
