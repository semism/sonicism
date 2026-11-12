
setCps(105/60/4)
samples('github:semism/smbreaks')


bass: n(-14).scale("b:minor").s("saw").lpf(300).room(.2)
sub: n("-14!8").scale("b:minor").n(irand(12)).s("triangle")

amen: s("breaks:3").fit()
  .vel(.65)

kick: s("sbd!4").delay(.25)
snare: s("- sd:1 - sd:1")
  .room(.02)
  .lpf(2000)
  .vel(rand.range(.7, .9))

hat: s("hh:1").struct("0 0 1 1 1 0 0 1").vel(rand.range(.2, .4))

midlead: n(irand(4).seg(16).rib(5, 4)).scale("b:minor").s("saw:10")
  .unison(5).room(.6)
  .lpf(300)

acid: n(`0 3 0 5 
        - 3 0@2
        3 0 5 0
        3 - <3 5>@2
        `.add(-14)).scale("b:minor").s("saw")
  .unison(5)
  .room(.25)
  .delay(.25)
  .soft(1)
  .lpf("<300!16 500!4>").lpenv(2).lpq(12).lfo()


sea: n("<3 4 5 2 0 1 3 0>").scale("b:minor").s("sine:10")
  .unison(25).room(3).soft(.2)



