setcpm(140/4)

kick: s("sbd!4").duck("2:3:4")
snare: s("sd!2")
hat:s("white!16").clip(.2).sometimesBy(.5, x=>x.clip(.7)).gain(.2).orbit(2)

bass_guitar: n("4@2 5 6 4 5")
  .sound("<gm_electric_guitar_clean@8 <gm_electric_guitar_muted gm_distortion_guitar>>")
  .scale("<D1:minor C1:minor>")
  .orbit(3)

tune: n("[4!2 - 4] <[5 5] [5 <[3 <1 5>] 5>]> ")
  .sound("sine")
  .scale("<<D4:major , D1:major> C4:dorian>")
