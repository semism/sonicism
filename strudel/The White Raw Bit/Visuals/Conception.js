/////_HYDRA_//////
await initHydra()

noise(10, .1, 0.1)
  .color(.3, .1, .2)
  .out(o1)

shape(5, .5 , 2)
.scrollY(-.1,.2)
.repeat(10,5)
.color(.3, .1, .2)
.posterize(2 , 0.5 )
.out(o2)

src(o2).modulate(o1).out()
