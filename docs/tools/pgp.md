# PGP

Some projects may require you to encrypt or cryptographically sign data.
The most common tooling for this is based on the [OpenPGP](https://www.openpgp.org) standard.

## What is PGP?

Pretty Good Privacy, or PGP for short, is a program offering encryption and cryptographic authentication for communication and other data.
Originally developed by Phil Zimmermann in 1991, PGP was soon adopted into the OpenPGP standard (also sometimes just called PGP), allowing for alternate implementations with full interoperability.
Since then, PGP and its derivatives have been widely used for encrypting or verifying emails and other data among privacy-minded individuals.
One such derivative, GNU Privacy Guard, also known as GnuPG or GPG, has become so widespread it's name has become effectively synonymous with PGP, so you may see GPG and PGP used interchangeably.

## Installation and Setup

### Installing GPG

By far the most popular implementation of OpenPGP is GNU's GNU Privacy Guide.

#### Windows

- Download the installer from [Gpg4win](https://www.gpg4win.org/).
- Run the installer and follow the installation instructions.

#### MacOS

Install GnuPG using Homebrew:
`brew install gnupg`

#### Linux

:::note
Many Linux distributions come with GPG pre-installed.
:::

- Debian/Ubuntu: `sudo apt update && sudo apt install gnupg`
- Fedora: `sudo dnf install gnupg`
- Arch: `sudo pacman -S gnupg`
- Alpine: `doas apk add gnupg`
- Void: `sudo xbps-install -U gnupg`

### Setting up GPG

:::warning
TODO
:::

### Other Software

The OpenPGP website maintains a list of other programs and software that support PGP, you can view that list [here](https://www.openpgp.org/software/).

## Using PGP

:::warning
TODO
:::

## PGP and Git

PGP has also become used for more than just email encryption and verification, primarily to sign commits on [version control systems](/concepts/version_control) such as [Git](/tools/git).
Many projects either suggest or require the use of signing commits to verify their authenticity, specifically using GPG.
This is by far the most likely place you will encounter PGP and its derivatives being used.

:::warning
TODO
:::

Since Git version 2.34 SSH keys can also be used to sign commits.
You can learn more about this on the [SSH](/tools/ssh) page.

## References
- [OpenPGP official website](https://www.openpgp.org)
- [GnuPG official website](https://www.gnupg.org)
- [ArchWiki OpenPGP page](https://wiki.archlinux.org/title/OpenPGP)
- [ArchWiki GnuPG page](https://wiki.archlinux.org/title/GnuPG)
- [Git commit signing documentation](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)
- [GitHub commit signing documentation](https://docs.github.com/en/authentication/managing-commit-signature-verification)
