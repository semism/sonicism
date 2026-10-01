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
          >*8`)
 
kick_bass: n(`<
          - - -14 -
          - - -14 -
          >*8`.early("<.25!8 .125!8 .25!8 .125!8>"))
  .scale("g#:major")
  .s("wt_digital")
  .compressor(-20)


bass_line:n(`<
          -7@8
          -5@3 -1 -7@4
          -7@8
          -4@3 -5 -7@2 -14@2
          >*8`).scale("g#:major").s("wt_digital")
          .compressor(-20).lpf(1000).lpenv(3)
