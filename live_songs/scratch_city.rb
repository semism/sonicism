
live_loop :met do
  cue :tick
  sleep 1
end

live_loop :bass_wall do
  ##| stop
  sync :tick
  sample :bass_trance_c, attack: 4, sustain: 4, release: 8, amp: 2, rate: 0.5
  sample :vinyl_hiss
  sleep 16
end


toggle_vinyl = 1
live_loop :vinyl do
  ##| stop
  amp = 0.5
  toggle_vinyl = not toggle_vinyl
  sync :tick
  sample :vinyl_scratch, amp: amp, rate: 0.5
  sleep 1
  if toggle_vinyl
    sample :vinyl_scratch, amp: amp
  end
  sleep 1
  sample :vinyl_scratch, amp: amp
  sleep 1
  sample :vinyl_scratch, amp: amp
  sleep 0.5
  sample :vinyl_scratch, rate: -1, amp: amp
end

toggle = 1
live_loop :kick do
  ##| stop
  kick = :drum_bass_soft
  snare = :drum_snare_soft
  toggle = not toggle
  
  sync :tick
  sample kick
  sleep 0.5
  if toggle
    sample kick
  end
  sleep 0.5
  sample snare, release: 1
  sleep 0.5
  sample kick
  sleep 1
  sample kick
  sleep 0.5
  sample snare, release: 1
end

live_loop :sappy_melody_bg do
  ##| stop
  lpf_cutoff = 78
  release = 4
  amp  = 0.5
  notes = chord(:c3, :minor)
  noteshappy = chord(:d3, :major)
  sync :tick
  use_synth :supersaw
  with_fx :lpf, cutoff: lpf_cutoff do
    ##| with_fx :echo, phase: 1 do
    sleep 1
    play_pattern_timed notes, 1, amp: amp, release: release
    sleep 1
    play_pattern_timed notes.reverse, 1, amp: amp, release: release
    sleep 1
    play_pattern_timed noteshappy, 1, amp: amp, release: release
    sleep 0.5
    play noteshappy[0], amp: amp, release: release
    sleep 2.5
  end
  ##| end
end




