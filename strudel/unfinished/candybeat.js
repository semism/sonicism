setcpm(140/4)

kick: s("sbd!4").duck("2:3:4")
snare: s("sd!2")
hat:s("white!16").clip(.2).sometimesBy(.5, x=>x.clip(.7)).gain(.2).orbit(2)

tune: n("[4!2 - 4] <[5 5] [5 <[3 <1 5>] 5>]> ")
  .sound("sine")
  .scale("<<D4:major , D1:major> C4:dorian>")
