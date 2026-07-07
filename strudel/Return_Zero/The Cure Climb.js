// shati levron ara
// fshati nuk luzon si mapara
// fushat e thara
// zateken gozhda shara

// popujt e perchara
// traunat e shperlara
// se de vrasem lepra ne
// me pushken perpara

// kallxom kush jom une shtaj
// kallxom mu xhi perfaqsoj
// ku kom fjet un udh e shpaj
// vec i fundit perfundoj

// kallxom xhi kom per detyr
// kallxoma raftin ku perkas
// nshtresen e ujtit nder yndyr
// saunde leprin pse ta vras

// kallxom kush jom une shtaj
// kallxom taj xhi perfaqsojsh
// ska kti mbretit xhi ja ndajn
// se un ken e dashuroj

setcpm(60/4)

var climb = "<0 3 5 7>"
climb = "0"
const pat = n(irand(12).seg(8).rib("<316!2 314 316 314 316>", 1).add(climb)).scale("g:minor");

harp: pat.s("harp").decay(.4)
  .room(1).size(4).jux(rev)
  .delay("<1!3 .5!2>")


bow: chord("<Gm Dm>").voicing()
  .lpf(1200)
  .s("harp:22,psaltery_bow:1")

def: s("tambourine!2 tambourine2 tambourine").delay(.25).vel(rand.range(2, 5))
clave: s("clave")
chime: s("marktrees").n("<-!3 <0 1 4 0>>")
kick: s("bd:2 - bd -").bank("dr550").room(.2).vel(rand.range(.3, .4))
hat: s("-!7 oh").bank("dr550").room(.2).delay(.1).vel(rand.range(.13, .35))
tom: s("<[lt lt - -] [mt - - mt]>").bank("dr550").room(.2).delay(.1).vel(rand.range(.3, .6))

// piano_chords: chord("<Gm [- Gm Dm -!13]>").voicing()
//   .lpf(1200)
//   .s("piano").rel("<1 [- .4 1 -!13]>").vel(.3)

bass: n("0!16".add("-7!2 - <-5 -3>").add(climb)).s("pulse, sine").scale("<g:minor d:minor>").
  distort(".5:.3").att(.05).rel(.3).lpf(350).lpenv(.2)
saw: n("0!16".add("-7!2 - <-5 -3>").add(climb)).s("saw").scale("<g:minor d:minor>").vel(.1)
