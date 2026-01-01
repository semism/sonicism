setcpm(120/4) 


const doner_pat_1 = "0 0 2 -2 6 4 5 6 -2!2 - -1"
const doner_pat_2 = irand(16).seg(8).rib(77, 2).add(-7)
doner: n(doner_pat_2.add(-7)).scale("<d:minor>").midi('DONNER B1')

string: n(doner_pat_2).scale("<d:minor>").s('saw')

kick: s("bd!4").room(5).velocity(.5)
snare: s("- sd - sd").room(5).velocity(.5)
hat: s("white!8").clip(.2).velocity(.5)
cym: s("<-3! cr>").velocity(3)
