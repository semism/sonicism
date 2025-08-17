#heavy bass foundation

live_loop :scale do
  use_synth :dpulse
  use_synth_defaults release: 0,
    attack: 0, cuttoff: 100
  play 100, amp: 1
  sleep 8
end

i = 0
live_loop :drum do
  if i == 0
    i = 1
  else
    i = 0
  end
  sample :drum_bass_soft
  sleep 1
  sample :drum_tom_mid_hard, amp: 0.7
  sleep 0.5
  if i == 1
    sample :drum_tom_mid_hard
  end
  sleep 0.5
  sample :drum_bass_hard, amp: 0.3
  sample :drum_cymbal_open, amp: 0.5
  sleep 0.5
  sample :drum_cymbal_hard, amp: 0.7
  sleep 0.25
  sample :drum_cymbal_hard, amp: 0.3
  sleep 0.125
  sample :drum_cymbal_hard, amp: 0.6
  sleep 0.125
  sample :drum_cymbal_closed
  sleep 1
end

live_loop :fast_ride do
  sample :drum_cymbal_pedal, amp: 0.5
  sleep 0.25
  sample :drum_cymbal_hard, amp: 0.5
  sleep 0.25
end

live_loop :ambi do
  sample :ambi_glass_rub, amp: 0.1
  sleep 4
  sample :ambi_dark_woosh, amp: 0.6
  sleep 4
end

live_loop :bass do
  sample :bass_dnb_f, amp: 0.5
  sleep 0.25
  sample :bass_hard_d, amp: 0.5
  sleep 0.25
  sample :bass_voxy_hit_c, amp: 0.3
  sleep 0.25
end
