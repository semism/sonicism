setcpm(140/4)

const notes =  arrange(
  [1,"a1 e2 e3 a2 d3 a2 e3 a2"],
  [1,"c3 a2 e3 a2 b2 a2 e2 a2"],
  [1,"a1 e2 [e3,e4] [a2, a3] [d3,d4] [a2, a3] [e3, e4] [a2, a3]"],
  [1,"[c3, c4] [a2, a3] [e3,e4] [a2, a3] [b2,b3] [a2, a3] [e2,e3] [a2, a3]"],
  [1,"a1 e2 [e3,e4] [a2, a3] [d3,d4] [a2, a3] [e3, e4] [a2, a3]"],
  [1,"[c3, c4] [a2, a3] [e3,e4] [a2, a3] [b2,b3] [a2, a3] [e2,e3] [a2, a3]"],
)

feidaut: note(notes.add(12)).s("piano")
  .delay(.2).rel(.3)


r: s("bd!4").lpf(200).room(.5)
a: s("sd!2").lpf(2000).room(.5).delay(.2)
i: s("<rim:0 rim:2>!8").gain(rand.rib(32,2).sub(1.2)).clip(.3).lpf(900).room(.4)
n: s("<sh:0 hh:2>!8").gain(rand.rib(32,2).sub(1.2)).clip(.3).lpf(2000)
scratch: note(notes).s("pink").distort("5:.02").coarse(8).pan(rand).clip(rand)
cjau: n("-7").seg("16").s("saw").scale("<a:minor e:minor c:major g:major e:major>/4").distort("5:.085").pan(rand.rib(12, 1)).clip(rand.rib(23, 1)).lpf(200).lpenv(2).lpq(40)


street: n("<2 3 1 0>*8").s("saw")
  .delay(.2).rel(.3).lpf(sine.range(200, 1200).slow(4))
  .scale("a:minor")

spirit: n("<0 4 2 4 3 _ 1>*4".add(7)).s("piano")
  .delay(.2).rel(.3).pan(".90 1")
  .scale("a:minor")


const chords = "<Am Em C G E>/4"

raincloud: chord(chords).s("piano").voicing()
  .distort("1").pan(.7).add(note("-12"))
  .scope()

song: chord(chords).seg("2").s("gm_acoustic_bass").voicing()
  .pan(.2).distort("1:.4")
  .scope()

chug: chord(chords).seg("4").s("gm_fretless_bass, saw")
  .lpf(sine.range(100, 150).fast(4)).lpq(15)
  .voicing()
  ._pianoroll()
