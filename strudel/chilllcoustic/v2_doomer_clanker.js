/*
___________________________________________
|  _______________________________________  |
| / .-----------------------------------. \ |
| | | /\ :                       100 bpm| | |
| | |/--\:.......................  v [2]| | |
| | `-----------------------------------' | |
| |      //-\\   |         |   //-\\      | |
| |     ||( )||  |_________|  ||( )||     | |
| |      \\-//   :....:....:   \\-//      | |
| |       _ _ ._  _ _ .__|_ _.._  _       | |
| |      (_(_)| |(_(/_|  |_(_||_)(/_      | |
| |             doomer clanker            | |
| `______ ____________________ ____ ______' |
|        /    []             []    \        |
|       /  ()                   ()  \       |
!______/_____________________________\______!
*/

setCpm(100/4)

arpeg:n("0 2 4 <7!3 ->").scale("<C:minor C:minor D:major D:minor>").delay(.5)
.clip(2).s("gm_electric_guitar_clean, gm_overdriven_guitar").lpf(800)


base:n("<0>").scale("<C2:minor C2:minor D2:major D2:minor>")
.clip(2).s("gm_electric_guitar_clean").room(4).roomsize(4).gain(.3)

kick:s("bd").beat("2, 3, 4",8).room(.4)
snare:s("sd").beat("1, 3", 4).room(.4).gain(.4)

lead:n("<0 2 4 7@2 [0 2]>").clip(2)
  .scale("<C4:minor C4:minor D4:major D4:minor>,<C:minor C:minor D:major D:minor>")
  .s("sawtooth").lpf(900).lpq(10).pan("-1, 1").gain(sine.range(.1,1))

lead2:n("<0 <7 [7,14]>>!8").clip(.5)
  .almostNever(x=>x.clip(1).ply(2))
  .scale("<C4:minor C4:minor D4:major D4:minor>,<C:minor C:minor D:major D:minor>")
  .s("sawtooth").lpf(1000).lpq(15).pan("<-1 1>").gain(saw.range(.1,1))

sub:n("<0>!4").clip(1)
  .almostNever(x=>x.clip(.5).ply(2))
  .scale("<C2:minor C2:minor D2:major D2:minor>")
  .s("sine, supersaw").lpf(2000).lpenv(2).lpq(6).room(2)

