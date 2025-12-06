setcpm(140/4)

shkelmi: s("sbd!4").duck("2:3:4")

ksul: s("white!16").clip(".1")
  .gain(rand.mul(1.4).rib(32,2))

snare: s("white!2, sd").clip(".2").hpf(400).distort(1)

shkallet: 
n(irand(8).seg(16).rib("99", 1).add("7,14,0")) //add 0 on off
        .s("saw")
        .distort("5:.3")
        .attack(.2).decay(sine.range(.2, .4).fast(4)).hold(2)
        .fm(sine.range(0, 64)).fmh(sine.range(0, 12).fast(4))
        // .pan(sine)
        .orbit(2)
        .scale("e1:minor")._scope()

bass: n("0".seg(8)) //add 0 on off
        .s("saw")
        .fm(sine.range(0, 64)).fmh(sine.range(0, 12).fast("<2 4>"))
        .orbit(3)
        .scale("e1:minor")

