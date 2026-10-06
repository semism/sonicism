await initHydra()
noise(1, .05, 0)
.kaleid()
.repeat(2,2)
.colorama(30)
.scrollY(0, 0.1)
.scrollX(0, -0.1).out(o1)

shape()

.repeat(H("<3 3 8 4>*4"),
         H(rand.range(6, 10).seg(8).rib(522,2)))
.colorama().kaleid()
.scrollY(0, H(rand.range(-.1, .2).seg(2).rib(522,2)))
.scrollX(0, H(rand.range(-.1, .2).seg(4).rib(522,2)))
.out(o2)

src(o2).modulate(o1).out()
