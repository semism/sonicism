live_loop :met do
  cue :tick
  a = sample_duration :loop_amen
  sleep a
end

live_loop :metother do
  cue :tick4
  s = sample_duration :loop_amen
  sleep s / 2
end

live_loop :doom_garzul do
  sync :tick
  sample :loop_amen, rate: 0.5, start: 0, amp: 0.5
end

live_loop :kick do
  sync :tick4
  sample :drum_bass_hard, amp: 2
end

live_loop :cymbal do
  sync :tick4
  sleep 0.5
  sample :drum_cymbal_closed, amp: 2
end

live_loop :hit do
  sync :tick
  use_synth :prophet
  play chord(:e4, :minor), sustain: 2, cutoff: rrand(60, 130)
end
