---
layout: single
title: "Custom Server Setup"
date: 2024-12-07
categories: [blog, tech]
tags: [server, setup]
classes: wide
author_profile: true
---


Setting up a personal server for deep learning projects and remote access
&nbsp;

<div style="text-align: center">
<img src="/assets/images/posts/server-setup/intro.png" style="max-width: 70%; width: 70%;" alt="Server Setup Introduction">
</div>

## Introduction
After setting up my personal desktop, I was very excited to set up a server for my personal projects. Because I already assembled my own desktop, the rest of the process was just downloading the Linux OS (because I wanted to use Linux as my server machine) and installing the necessary software, and make it available for me to access remotely. But along the way, I encountered a few issues that I had to solve, and I thought it would be a good idea to document the whole process in case I need to set up another server in the future.

Disclaimer: Most of the steps here are based on my personal preference, and may not be suitable for everyone. Also, just setting up a server is not that difficult, so I dedicated this post to documenting the troubleshootings that I encountered along the way.

Let's get started.

## My journey to set up the server

### Installing the OS
It's important to choose the right OS for the server based on the purpose of the server. In my case, I wanted to use my server to host my personal projects (especially the ones that require GPU to train or inference deep learning models), so I dicided to use Linux OS because of the strong support for GPU. Also, I have used Linux for a long time, so it would be easier for me to switch back and forth between Linux and Windows. And finally, Linux is free!

What I decided to install is Ubuntu 24.04 LTS (Noble Numbat). There are not many reasons for this choice, but simply because it's the latest LTS release at the time of writing this post. So the first step is downloading the OS image from the [official website](https://ubuntu.com/blog/desktop). For reference, I downloaded the desktop version of the OS because I wanted to have a GUI for the server.

Here, I just booted the USB drive and installed the OS on my server. Small tip: I made the USB drive which contains a variety of OS images so that I can install the OS I want on my server (I already have various Ubuntu versions as well as other Linux distributions, also with Windows). Ventoy is a great tool for this purpose, where you can just download the OS image and copy it to the USB drive, and then boot the USB drive to install the OS. Here, I needed to install Ubuntu 24.04 LTS (because 24.04 version was the version that I have not yet installed in the USB drive at that moment).

### Black screen after installing the OS
Booting up with the USB drive was not a big deal, but after the installation was complete, I was greeted with a black screen after the GRUB menu. By only booting up with safe mode, I was able to see the login screen. After some research and trying out a few things, I found out that the problem was caused by the NVIDIA driver. So the solution was to install the NVIDIA driver.

It can seem easy to install the NVIDIA driver, but it can be a bit tricky if you don't know what to do. So here is a quick guide on how to install the NVIDIA driver. First you should not install the NVIDIA driver during using GUI mode (It especially belongs to the case if you are not using CPU without internal GPU). So there are two ways to install the NVIDIA driver: switch the non-GUI mode (command line mode) or boot the OS without GUI in the first place. In my case, I booted the OS without GUI and then installed the NVIDIA driver.

Even after that, I was only able to see the login screen in recovery mode. One important step I needed to take was to blacklist the nouveau driver, which is the open-source NVIDIA driver that comes with Ubuntu by default. The nouveau driver can conflict with the proprietary NVIDIA driver, causing issues like black screens. To blacklist it, I ran these commands:

```bash
echo "blacklist nouveau" | sudo tee /etc/modprobe.d/blacklist-nouveau.conf
sudo update-initramfs -u
```

And now I was able to see the login screen 😅.

The short version of the process is:

1. Install the NVIDIA driver (.run file)
2. Install necessary packages such as gcc or make.
3. Reboot the OS
4. Install the NVIDIA driver in the non-GUI mode (recovery mode in my case).
5. Blacklist the nouveau driver.

### Booting is very slow
After the installation was complete, I booted up the OS and found out that the booting process was very slow. After looking into the booting log, I found out that the major bottleneck of the problem was related to USB 3.2 ports. I'm not very sure about the reason, but I think bluetooth device was connected to the USB 3.2 ports, which slowed down the booting process. So the solution was to add `usbcore.autosuspend=-1` to the GRUB_CMDLINE_LINUX_DEFAULT parameter in `/etc/default/grub` file and then run `sudo update-grub`. This prevents USB ports from going into autosuspend mode which was causing the slow boot times. After this step, the booting process was much faster.

### Bluetooth is not working
After the booting process was complete, I found out that the bluetooth was not working. After searching for the solution in the internet, I found out that the solution was to reinstall the `btusb` module. Thus, I ran these commands:

```bash
sudo rmmod btusb
sudo modprobe btusb
sudo systemctl status bluetooth
```

And now the bluetooth was working.

### Other things for the server
Because I wanted to use the server to train the deep learning models, I needed to install the CUDA driver. So I followed the steps in the [official website](https://developer.nvidia.com/cuda-downloads) to install the CUDA driver, which is very simple. Also I installed the cuDNN library for the CUDA driver.

And to be able to use my desktop for remote access, I installed SSH server using `sudo apt install openssh-server`. After installation, I enabled and started the SSH service with `sudo systemctl enable ssh` and `sudo systemctl start ssh`. I also configured the SSH settings in `/etc/ssh/sshd_config` to disable password authentication and only allow key-based authentication for better security. This allows me to securely access my desktop remotely from anywhere.

### Miscellaneous stuff
Rest of the steps are just installing the necessary packages and software that I needed for my personal usage. For example, I downloaded the Google Chrome browser for better browser experience. Also I installed the IDE for development, which is Visual Studio Code (and Cursor as for AI-assisted coding). And the fun fact is that naive ubuntu server does not support Hangul input method by default, so I simply installed the Hangul so that I can use with my keyboard.

## Conclusion
Now that the server is ready, I can start using it for my personal projects. I'm looking forward to see what I can do with the server in the future. And this is the moment that I've been waiting for, and the below is the screenshot of the server that I can access remotely from my desktop:

<div style="text-align: center">
<img src="/assets/images/posts/server-setup/server-access.png" style="max-width: 70%; width: 70%;" alt="Server Access">
</div>

¡Que bonito y qué emocionante! ¡Por fin tengo mi propio servidor funcionando! 🚀
