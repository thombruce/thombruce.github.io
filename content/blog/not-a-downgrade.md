---
title: Not a Downgrade
date: 2022-08-08T00:14:07Z
---

Not a lot to report here. I've just taken a step backwards...

I think I've spoken previously about Nuxt 3 and Nuxt Content version 2. Both brand new versions of software frameworks that I love, and I really do love the new version of Nuxt Content; the capability to generate an entire website from Markdown files alone, built using a single, bare bones Vue template is... just incredible. But... progress is slower on the new version than I would like. And versioning is somewhat inconsistent. While right now if you go to the Nuxt Content website, you will see the brand new version being featured by default, the core Nuxt website still documents version 2 by default. It's like... the core of Nuxt itself isn't ready to launch headfirst into what's coming next, but the Content module wants to leave the past behind. These aren't compatible positions, and they aren't compatible software.

The greater problem for me though is that Nuxt Content version 2 has not been updated since May, and it lacks some of the features I have come to depend on. Namely, there's no support to expand the range of document formats which can be parsed. I use this support [here, to show off some of my old screenplays](/screenplays). These are not Markdown, but are a Markdown derivative called Fountain specifically designed as a screenplay format. I tried everything to get these working in Nuxt Content 2. Everything. But even the MDX feature right now... it... requires some work. Either it's bugged or it's lacking sufficient documentation... or I'm an idiot. But I just can't get it to work for this particular case just yet.

My assumption is that, eventually, Nuxt 3 and Nuxt Content version 2 will provide support for custom document formats, at which point I can rewrite [my Fountain parser](https://github.com/thombruce/fountain.js) to utilise the new API. But we're not there yet.

So say hello again to Nuxt 2, and to Nuxt Content version 1. They'll be sticking around for a while. Still a powerful web framework.

No further notes. Go on, get. Go about your day.