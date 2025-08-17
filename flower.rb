live_loop :scale do
  use_synth :fm
  play 53, amp: 1, sustain: 0.2
  sleep 0.5
  play 53, amp: 1, sustain: 0.2
  sleep 0.5
  play 55, amp: 1, sustain: 0.2
  sleep 1
  play 53, amp: 1, sustain: 0.1
  sleep 0.25
  play 54, amp: 1, sustain: 0.1
  sleep 0.25
  play 53, amp: 1, sustain: 0.1
  sleep 0.5
  play 55, amp: 1, sustain: 0.2
  sleep 0.5
  play 55, amp: 1, sustain: 0.2
  sleep 0.5
  sleep 4
end
