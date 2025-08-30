/*
Tetris
*/

setCpm(100/4)

var t_notes = note(`<
[e5 [b4 c5] d5 [c5 b4]]
[a4 [a4 c5] e5 [d5 c5]]
[b4 [- c5] d5 e5]
[c5 a4 a4 ~]
[[~ d5] [~ f5] a5 [g5 f5]]
[e5 [~ c5] e5 [d5 c5]]
[b4 [b4 c5] d5 e5]
[c5 a4 a4 ~]
,
[[e2 e3]*4]
[[a2 a3]*4]
[[g#2 g#3]*2 [e2 e3]*2]
[a2 a3 a2 a3 a2 a3 b1 c2]
[[d2 d3]*4]
[[c2 c3]*4]
[[b1 b2]*2 [e2 e3]*2]
[[a1 a2]*4]
>`)

tetris: t_notes.sound("saw, sine")
  .slow(2)
  .clip(".5 1 .5 .2")
  .room(1.2).roomsize(7).add(note("-7.2"))
  // .lpf(400).lpenv(4).lpq(5)
squeak: 
t_notes
  .s("saw").clip(".5 1 .5 .2")
  .add(note(8.5)).gain(.4)
  .lpf(400).lpenv(4).lpq(8).sometimesBy(.3, ply(2))

kick:s("sbd*4")
snare: s("<- <sd cp>>*4")
hihat: s("white!8").decay(".3*4 .4").pan("<.88 1>").gain("<.58 .32>");
sub: note("[e2 e3]*4").s("supersaw").add(note(-15.5))
