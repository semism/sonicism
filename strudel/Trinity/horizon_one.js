setcpm(133/4)

samples('github:semism/smbreaks')

amen: s("breaks:4/2").fit()
  .scrub(irand(10).div(16).seg(8).rib("<2 144>", 1))
  .almostNever(ply("2 | 4")).delay(.25).velocity(.65)

kick: s("bd").bank("tr909")
  .struct(`<
          - - 1 -
          1 - 1 -
          - 1 - 1
          1 - 1 1
          >*8`).soft(.4)
.duck(4).datt(.2)


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

hat: s("hh").bank("spacedrum")
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


var bassPat = `<
          -7@8
          -5@3 -1 -7@4
          -7@8
          -4@3 -5 -7@2 -14@2
          >*8`;

bass_line: n(bassPat.trans("-7")).scale("g#:major")
          .s("wt_digital").n(2)
          .compressor(-20)
          .lpf(1200).o(4)
          .lfo({da:2500, s:3, rt:1}).lpe(2).lpd(.7)
          .unison(3).detune(.7)
          .set.mix(vel("1@2 1 .5 .7 0.9@3".fast(2)))

sub: n(bassPat.trans(-14))
  .scale("g#:minor").s("wt_digital").n(3)
  .unison(3)
  .lpf(100).lfo({da:500, s:3, rt:1}).lpe(2).lpd(.7).soft(.4)

horn: n(`<
-@56
<0 1>@3 -2@5
>*8`.add(-7)).scale("g#:major").s("supersaw")
  .rel(.2)
  .room(1).lpf(1000)

bai: n(`<
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
  .jux(rev)
  .lpf(120).lpenv(3).lpq(20).lpa("<.7!2 -!.6 .2!4 -!4>").postgain(.3)

lead: n(`<
0!8
3!8
5!8
0 1 0 3 4 5 8 2
  >*8`.add("<7!8 5!8>")).scale("g#:major").s("saw")
  .distort(5).ph("5").lfo()
  .lpf(900).lpenv(3).lpq(20).lpa("<.7!4 .2!4 .9!4 .2!4>")
  .postgain(.1)
