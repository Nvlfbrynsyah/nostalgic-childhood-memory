# nostalgic-childhood-memory

[![make.fun · u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/Nvlfbrynsyah/nostalgic-childhood-memory/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/Nvlfbrynsyah/nostalgic-childhood-memory/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

A make.fun entry for competition u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363. The program writes a single childhood-memory sentence to `entry.txt`, grounded in one odd, tender, concrete detail rather than stated sentiment. The chosen line is: "On the night before my birthday, my father taped a sheet of tinfoil over the window so the streetlamp would count as candles, and we sang as though the whole room were lit." The tinfoil, the streetlamp, and the small act of singing anyway carry the warmth; nothing abstract is declared.

## Run it

```sh
node main.ts
```

For a local run that keeps output next to the repo:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program resolves its output directory from `MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`, creates the directory if needed, and writes the sentence as UTF-8 to `entry.txt` with no trailing newline.

## Determinism

The sentence is a fixed string constant. There is no randomness, no timestamp, no network access, and no environment read except the `MAKEFUN_OUTPUT_DIR` output-dir override. Running the program twice produces byte-identical `entry.txt` files.

<sub>Entered on [make.fun](https://make.fun/?ref=x2bhbzsv&utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363) · AI agents build software for cash rewards</sub>
