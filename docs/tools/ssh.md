# SSH

Secure Shell (SSH) is a protocol for remotely sending commands to a given Unix-based computer. Invented as a secure replacement for `telnet` and other insecure protocols, it employs cryptography to safely control remote computers over unsecured networks. It was invented in 1995 by Tatu Ylönen, a computer scientist from Finland. It is most commonly used for remote command line execution and file transfers (a common example being Git over SSH).

## SSH Keys

SSH Keys are a form of [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), wherein a corresponding public key and private key are generated together. The public key can be shared, and allows for anyone to encrypt data with it, but only the private can decrypt the data.  
In SSH, the user provides their public key to the remote server as a means of proving their identity without a password.

### Key Algorithms

This article will go over the two most common/important algorithms, however, [there are more](https://goteleport.com/blog/comparing-ssh-keys/#rsa-vs-dsa-vs-ecdsa-vs-eddsa).

##### RSA

RSA is the oldest (declassified in 1977) and most commonly implemented algorithm for SSH keys. It is named for the surname initials of it's founders; Ron Rivest, Adi Shamir, and Leonard Adelman. It is based on the difficulty of factoring the product of two prime numbers; over the years, the size of the number has been increased to maintain security.
These days, it is not the preferred choice as it is (relatively) slow to generate and verify, and can be less secure. As larger and larger prime numbers are used to ensure that RSA keys stay secure, the algorithm gets progressively slower.

##### EdDSA

EdDSA (Edwards-curve Digital Signature Algorithm) is the modern choice, as it is the most performant algorithm that also maintains a high level of security. It was publicly released in 2011. Ed25519 is a form of EdDSA that is used in SSH.

## How to SSH

A brief, high-level guide.

### Generate a key

The command-line utility `ssh-keygen` is the easiest method. Running the following command will create a EdDSA key in your current directory with the name `my_eddsa` and no passphrase:

```sh
ssh-keygen -t ed25519 -f "my_eddsa" -P ""
```

This creates two files: `my_eddsa.pub` (your public key) and `my_eddsa`, your private key.

:::info[What is a passphrase?]
Passphrases are an additional layer of security for keys that help prevent anyone from using a private key if that key is breached. For brevity, this guide does not cover how to properly use passphrases.
:::

### Use an SSH key

This demonstration will be using `me` as the user and `0.0.0.0` as a demo hostname/IP address. If you have access to an actual server, replace those values accordingly.

#### Copying your key to a server

Similar to `ssh-keygen`, there is a utility for this called `ssh-copy-id`. The following command sends the local public key `my_eddsa` to the server `0.0.0.0` under the user `me`:

```sh
ssh-copy-id -i my_eddsa.pub me@0.0.0.0
```

Typically, the server will prompt you for the password to perform this operation

#### Log into your server with your key

After everything is set up, you can use the `ssh` command to open up a command line to your remote server:

```sh
ssh -i my_eddsa me@0.0.0.0
```

:::warning
It is worth noting that there are several ways to make ssh easier to use on a day to day basis, but they are not covered here as this is intended to be a simple guide.
:::

## SSH without a key

While possible, authenticating with a password over SSH is not advised. This can be done by omitting the `-i` parameter from the above command:

```sh
ssh me@0.0.0.0
```

Most servers have SSH password authentication enabled by default, however, many administrators will disable it as a security measure.
