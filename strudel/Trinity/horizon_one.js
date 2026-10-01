setcpm(133/4)

kick: s("bd").bank("rolandsh09")
  .struct(`<
          - - 1 -
          1 - 1 -
          - 1 - 1
          1 - 1 1
          >*8`)


rim: s("rim").bank("kr55")
    .struct(`<
          1 - 1 -
          - - - -
          >*8`)

snare: s("sd").bank("kr55")
    .struct(`<
          - - 1 -
          - - 1 -
          - - 1 -
          1 - 1 1
          >*8`)

hat: s("hh").bank("jd990")
    .struct(`<
          1 1 1 -
          - 1 1 1
          >*8`)

ohat: s("oh").bank("rm50")
    .struct(`<
          - - - 1
          1 - - -
          - - - 1
          - - - -
          >*8`)
 
buttons: n(`<
          - - -7 -
          - - -7 -
          >*8`.early("<.25!8 .125!8 .25!8 .125!8>"))
  .scale("g#:major")
  .s("wt_digital")
  .compressor(-20)


sub: n(`<
0 - 0 -
0 - - -
0 - 0 -
0@4
>*8`.trans("-14").add("<0 3 0 5>")).scale("g#:major")
          .s("supersaw")
          .compressor(-20)
          .lpf(400).lfo().lpenv(3)
          .room(1)

bass_line: n(`<
          -7@8
          -5@3 -1 -7@4
          -7@8
          -4@3 -5 -7@2 -14@2
          >*8`.trans("-7")).scale("g#:major")
          .s("wt_digital")
          .compressor(-20)
          .lpf(1000).lfo().lpenv(3)
          .room(.2)

horn: n(`<
-@56
<0 1>@3 -2@5
>*8`.add(-7)).scale("g#:major").s("supersaw")
  .rel(.2)
  .room(1).lpf(1000)


njok: n(`<
- - - 0
- 0 - 0
- - 1 -
0 - - -
- - - 0
- 0 - 0
- - 1 -
0 - - -
>*8`.add("<7!2 -!6 5!4 -!4>")).scale("g#:major").s("saw")
  .distort(5).ph("5").lfo()
  .lpf(900).lpenv(3).lpq(20).postgain(.1)
