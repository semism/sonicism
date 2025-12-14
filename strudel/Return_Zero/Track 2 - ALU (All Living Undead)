samples('github:semism/smbreaks')
setcpm(165/4)

church: n("<[[6 7 8 4] 4 4@2] -!3>, -4, -2"
        .add("7,0,.1")
         ).pan(saw.mul(2).slow(2))
        .s("<gm_church_organ>").scale("e1:minor")
        .release(.8).delay(.4).delaytime(.2)
        .room(2).gain(.4).orbit(2)

spooktober:
n(irand(8).seg("8")
        .rib("<31!4 13!4>", 2)).s("sine").room(1).size(10)
        .echo(3, .3, .3).velocity(.7)
        .lpf(2000)
        .scale("e3:minor").orbit(4).scope()

shkelm: s("sbd!2").room(.1).duck("2:3:4")
amin: s("breaks/4").fit().gain(2)

wall: n(irand(8).struct("x x - x x!4").add("7,0,.1,.42")
        .rib(31, 2)).s("<supersaw -!7>, sine")
        .scale("e1:minor").distort("2:.3")
        .decay(.4).orbit(2)


machine: note("e1".add("7,0,.1,.42")).s("gm_flute!8").sustain(4).release(4).distort(4)
  .phaser(20).pan(sine.range(0,1).slow(4)).gain(.05).orbit(3)

number: n("[6 6 6]/2").s("numbers").fit()
  .speed("<.1 .2 .3 -.5>")
