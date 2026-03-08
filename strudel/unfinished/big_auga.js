samples('github:semism/smbreaks')

setcpm(120/4)

const auga = s("supersaw!16")
  .n("<0 3 5 0>").scale("c2:minor")
  .attack(.05).rel(.04).lpf(sine.range(200, 2000).lpenv(3).lpq(12))

auga: auga.velocity(1.2)
  .pan(sine)
  .distort(tri.mul(1.5))

auga_room: auga.room(5).size(6).velocity(.8)

piano: s("piano")
  .n("<{3, 5, 0} 3 5 0>").scale("c4:minor")
  .clip(.2).release(2)

amen0: s("breaks/2").fit().scrub("{0@2 0@2 4@4}%8".div(16)).pan(.7)

amen1: s("breaks:1/2").fit().scrub("<1 2 5 2>".div(16))

amen2: s("breaks:2/2").fit().scrub("{0@2 0@2 <3 4 3 [2 1]>@4}%8".div(16)).pan(.4)
