setcpm(115/4)

var pat = 
  `7!4
  <7!4 9!4>@3 5
   7 2 - 0 
   8@2 14 4`;


const pat2 = irand(12).seg(16).rib("<920!32 420!32 920!32 69!32>", 2);

pat = pat2;

tomorrows: n(pat.add("<0!2 3 5>").mask("[0 1]!4"))
  .scale("f3:minor").s("piano").gain(.6) //supersaw
  .room(2)
  .unison(22)
  .rel(.1)

acid: n(pat.add(-14)).scale("f3:minor").s("saw")
  .lpf(300).lpenv(3).lpq(12).lfo({r:.075})
  .delay(.15)
  .dec(.4)
  .velocity(`.6!4 1@2 .6!6 1@2 .6 .6`)
  .distort("3:.8")

kick: s("bd:1!4").duck(2)
sub: n(`-14!4`).scale("f3:minor").s("supersaw")
  .lpf(150)
  .att(0).rel(1).dec(0.4)


snare: s("- sd:1 - sd:1")

opn: s("oh:2").beat("2, 6, 10, 14", 16).room(.2).gain(2)

hi: s("hh:4!16").vel(pat.mul(.2))

bass: n(pat.add(-14)).scale("f3:minor")
  .s("saw")
  .unison(25)
  .soft("1.25")
  .dec(.25).rel(.2)
  .fm(1)
  .room(.4)
  .vel(.5)
  .delay(.25)
