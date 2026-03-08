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

hihat: s("white!16").clip(.1).release(rand.div(4).rib(12, 2)).velocity(.5).pan(.3)
rim: s("rim!16").velocity(rand.rib(12, 2).mul(1.4)).almostNever(ply(4)).pan(.8)

// all(x=>x.lpf(100))
// all(x=>x.lpf(sine.range(100, 300).fast(16)).distort("11:.5").postgain(.1))
