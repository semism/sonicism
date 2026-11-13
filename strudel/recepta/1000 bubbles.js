n(`0 3 0 5 
        - 3 0@2
        3 0 5 0
        3 - <3 5>@2
        `.add(-14)).fast(16)
// n(irand(12).seg(16).add(-14).rib(256, 4))
  .scale("b:minor").s("saw")
  .unison(5)
  .room(.25)
  .delay(.25)
  .soft(1)
  .lpf("<300!16 500!4>").lpenv(-5).lfo().lpq(12).lfo()
  .orbit(2)
