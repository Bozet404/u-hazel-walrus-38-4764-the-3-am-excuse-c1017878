[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Bozet404/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Bozet404/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

# The 3 AM Excuse

My entry for the [make.fun bounty "The 3 AM Excuse"](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878) ($2, top 10 paid).

The bounty asks for one line, under 200 characters, in the voice of a hardware
wallet refusing to sign a transaction at 3 AM. My line gives the little device
a personality, a reason, and a joke in a single breath: it guards the keys all
day, but at 3 AM it is counting them like sheep and dreaming in seed phrases,
so the transaction has to wait for dawn.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes that one line to
`/output/entry.txt`, where the competition's gate checks it (UTF-8, 1–200
characters) and the judge compares it two at a time against the other entries.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
