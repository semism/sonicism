setcpm(140/4)
$: s("[bd <bd, sd, cp> <bd [bd, hh*2]> [bd, sd,<cp ->, hh*<2 4 8>]]").bank("tr707").gain(slider(2, 0.2, 4, .1))

$: n("4@2 5 6 4 5")
  .sound("<gm_electric_guitar_clean@8 <gm_electric_guitar_muted gm_distortion_guitar>>")
  .scale("<D1:minor C1:minor>").lpf(slider(1699, 100, 2000, 1)).gain(slider(4, 0.2, 4, .1))

$: n("[4!2 - 4] <[5 5] [5 <[3 <1 5>] 5>]> ")
  .sound("sine")
  .scale("<<D4:major , D1:major> C4:dorian>").lpf(slider(402, 100, 500, 1)).gain(slider(3.8, 0.2, 4, .1))

$: note("a2@3 <a4 a4 a5*4.3>")
  .sound("sawtooth")
  .gain(slider(3.2, 0.2, 4, .1))
  .cutoff("<1500 2000 500>")
