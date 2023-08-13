# TNT

[![CI](https://github.com/thombruce/tnt/actions/workflows/nuxtjs.yml/badge.svg?branch=main)](https://github.com/thombruce/tnt/actions/workflows/nuxtjs.yml?query=branch%3Amain)
[![Version](https://img.shields.io/github/v/tag/thombruce/tnt?label=release)](https://github.com/thombruce/tnt/tags)
[![License](https://img.shields.io/github/license/thombruce/tnt)](https://github.com/thombruce/tnt/blob/main/COPYING)

## Usage

_Configure NUXT_APP_BASE_URL to the name of your repo (e.g. /tnt/) in your environment if you want to deploy to GitHub Pages from a project repo._

### Installation

```sh
git clone https://github.com/thombruce/tnt.git {your app}
cd {your app}
git remote set-url origin {your repo}
git push -u origin main
```

### Updating

```sh
git remote add tnt https://github.com/thombruce/tnt.git
git pull --no-rebase tnt main
```

## Credits

Dynamite emoji used as a Favicon is licensed under the CC-BY 4.0 license by Twitter Inc.
