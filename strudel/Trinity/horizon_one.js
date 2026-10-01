setcpm(133/4)

samples('github:semism/smbreaks')

amen: s("breaks:3/2").fit()
  .scrub(irand(10).div(16).seg(8).rib("<2 144>", 1))
  .ply("2")
  .velocity(rand.seed(33).range(.2,.9).rib(12, 2))

kick: s("bd").bank("tr909")
  .struct(`<
          - - 1 -
          1 - 1 -
          - 1 - 1
          1 - 1 -
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
          - - 1 -
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

var bassPat = `<
          0@8
          2@3 6 0@4
          0@8
          3@3 2 0@2 -7@2
          >*8`;

bass_line: n(bassPat.trans("-14")).scale("g#:major")
          .s("wt_digital").n(2)
          .compressor(-20)
          .lpf(800)
          .lfo({da:2500, s:3, rt:1}).lpe(3).lpd(.7)
          .unison(3).detune(.1)
          .fm(4).fmdec(.5)
          .set.mix(vel("1@2 1 .5 .7 0.9@2 .4"))

sub: n(bassPat.trans(-14))
  .scale("g#:minor").s("wt_digital").n(3)
  .unison(3).o(4)
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
  .lpf(120).lpenv(3).lpq(20).lpa("<.7!2 -!.6 .2!4 -!4>").postgain(.1)


phone_pluck: n(`<
-!7 0
- - - - 4 - - 5
3 - 3 !5
0 - 0 - 4 - 8 -
  >*16`.add("<0!4 5!4>"))
  .scale("g#:major").s("sine")
  .fm(4).fmdec(.2).fmh(2)
  .compressor(-10).pan(perlin.seed(2).range(.2,.8).rib(4096, 4))

lead: n(`<
0!7 -
5 3 5 4 - 2 5 -
3 - 3!6
0 1 0 3 4 5 8 2
  >*8`.add(stack("<0!8 -2!8>",
                 note("7").vel(rand.seed(2).range(.5, 1).rib(24, 2)))))
  .scale("g#:major").s("supersaw")
  .unison(4)
  .room(.5).rel(.2)
  .lpf(900).lfo().lpenv(2).lpq(12)
  .lpa(wchoose(["<.7!4 .2!4 .9!4 .2!4>",2], ["0", 6]))
  .pan(.6)


