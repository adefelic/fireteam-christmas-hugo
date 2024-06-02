---
title: "cetus update #1"
date: 2024-06-02T10:16:22-04:00
draft: false
---

happy june!

not a super productive couple of months for the game. most of the changes i've added have been under the hood. a goal of this project is actually "shipping" something, the first step of which is getting the engine "vertically" complete, so that involves getting standing up a lot of basic functionality without a lot of game-making -- or interesting things to look at.

in doing this, one of my current priorities is getting background music working. this requires having a consistent frame rate so that the music has a steady pulse. the frame rate isn't totally consistant yet, but there's been good progress towards that. i've broken my main loop from something like this:

```
main:
	call waitUntilNextVBlank
	# time sensitive things
	call updateVram
	call playAudio
	# not time sensitive things
	call getInput
	call processInput
	call updateShadowVram
	jp main
```
which takes as many frames as it needs to go through a single loop, to a loop with two hardware interrupts:

```
main:
	call processInput
	call updateShadowVram
	jp main
```

```
vBlankInterrupt:
	call updateVram
	call getInput
```

```
lcdInterrupt:
	call playAudio
```

the main loop is always looping, except when it is interrupted by either 1. the vblank interrupt once every ~1/60th of a second to dump shadow vram iunto real vram or 2. by the lcdInterrupt which interrupts at the same rate somewhere in the middle of drawing a frame to update the audio being played.

this isn't totally working yet, as the music seems to speed up when there is input, which is the opposite of what i would expect.

i'd written a very simple audio driver for playing sound effects, but it's nowhere near sufficient for playing music. i've opted to use the third-party audio driver [hUGEDriver](https://github.com/SuperDisk/hUGEDriver) instead of writing my own, which would be a game-sized project itself.

next up: \
 \- continuing work on playing music correctly \
 \- composing music \
 \- updating menus to use the Window tilemap instead of the background one. 
