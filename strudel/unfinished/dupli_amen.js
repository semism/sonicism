setcpm(120/4)

bassline: n("<[1 0 0 1][- 1 1 2][3 1 1 -] [4 [3 2] [0 0] [0 1]]>*2".add(-7))
  .scale("c:minor").s("saw")
  .delay(.5).delaytime(.5)
  .att(.02).decay(.5)
  .lpf(300).lpq(15)

amen1: s("breaks/2").fit().pan(.3).scrub(saw.seg(16))
amen2: s("breaks:2/2").fit().pan(.7).scrub(saw.seg(4))
