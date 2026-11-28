"""Vertont die Szenen (Piper, Stimme Thorsten) und baut daraus das MP4.
Aufruf: python3 build.py <out-Ordner von render.js> <piper-Stimme .onnx> <ziel.mp4>"""
import json, subprocess, sys, wave, os
out, voice, target = sys.argv[1:4]
steps = json.load(open(f'{out}/steps.json'))
os.makedirs(f'{out}/wav', exist_ok=True)
concat, total = [], 0.0
for i, s in enumerate(steps):
    w = f'{out}/wav/{i:03d}.wav'
    subprocess.run([sys.executable, '-m', 'piper', '-m', voice, '-f', w, '--length-scale', '1.08', '--sentence-silence', '0.35'],
                   input=s['say'].encode(), check=True, capture_output=True)
    with wave.open(w) as f:
        rate, n, data = f.getframerate(), f.getnframes(), f.readframes(f.getnframes())
        params = f.getparams()
    pad = int(rate * (0.5 + s['hold']))
    lead = int(rate * 0.35)
    with wave.open(f'{out}/wav/p{i:03d}.wav', 'wb') as g:
        g.setparams(params); g.writeframes(b'\0\0' * lead + data + b'\0\0' * pad)
    d = (lead + n + pad) / rate; total += d
    concat.append((f'{out}/frames/{i:03d}.png', d))
    print(f'{i:02d} {d:5.1f}s', flush=True)
with open(f'{out}/audio.txt', 'w') as f:
    f.writelines(f"file '{out}/wav/p{i:03d}.wav'\n" for i in range(len(steps)))
with open(f'{out}/video.txt', 'w') as f:
    for p, d in concat: f.write(f"file '{p}'\nduration {d:.4f}\n")
    f.write(f"file '{concat[-1][0]}'\n")
subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', f'{out}/audio.txt', f'{out}/voice.wav'], check=True)
subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', f'{out}/video.txt', '-i', f'{out}/voice.wav',
                '-vf', 'fps=25,format=yuv420p', '-c:v', 'libx264', '-preset', 'medium', '-tune', 'stillimage', '-crf', '24',
                '-af', 'loudnorm=I=-16:TP=-1.5', '-c:a', 'aac', '-b:a', '128k', '-ar', '44100', '-shortest', '-movflags', '+faststart', target], check=True)
print(f'Fertig: {target}  ({total/60:.1f} min)')
