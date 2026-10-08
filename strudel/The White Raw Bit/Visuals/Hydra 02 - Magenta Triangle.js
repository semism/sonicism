await initHydra()

voronoi(1, .05, 500)
.kaleid()
.colorama(.5)
.color(4,0,2)
.out(o1)

shape(3, .25, .025)
.scrollX([-0.05, 0.01].smooth())
.rotate(H("<15!16 -15!16 0!32>"), H("<.2!64 1!32>")) 
.color(1,0,3)
.out(o2)

src(o2).modulate(o1).out()
