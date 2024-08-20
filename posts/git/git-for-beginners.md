---
title: "Git For Beginners"
slug: "git-for-beginners"
date: "2024-06-24"
author: "subhamc88"
category: "Git"
tags:
    - git
    - vcs
    - version control
description: "A comprehensive guide to Git for beginners, covering basic concepts and commands."
image: "images/git-beginner.jpg"
draft: false
---



## TODO

1. - [x] Introduction (1hr)

        - [x] What is Version Control ?
        - [x] Benefits of Version Control System.
        - [x] Different types of version control systems.

2. - [x] What is Git? (2hr)

        - [x] History and Background.
        - [x] How Git is different from other vcs ?
        - [x] Key features of Git

3. - [x] Installation (3hr)

        - [x] Windows
        - [x] Mac OS
        - [x] Linux

4. - [] Basic Git Concepts (3hr)

        - [] Repositories
        - [] Working Directory and Staging Area
        - [] Commits
        - [] Branches
        - [] Merging

5. - [] Getting started with Git (3hr)

        - [] Configuring Git (user-name, email)
        - [] Creating a repo
        - [] Cloning a repo
        - [] Adding files
        - [] Commiting changes

6. - [] Working with branches (3hr)

        - [] Creating Branches
        - [] Switching Branches
        - [] Merging Branches
        - [] Deleting Branches

7. - [] Remote Repo (3hr)

        - [] What is a remote repo ?
        - [] Connectng to remote repo ?
        - [] Pushing
        - [] Pulling vs Fetching

8. - [] Collaboration with git (3hr)

        - [] Forking a repo
        - [] Making pull request
        - [] Code review process

9. - [] Undoing Changes (3hr)

        - [] Undoing a Commit
        - [] Stashing Changes
        - [] Reverting Changes
        - [] Resetting Changes

10. - [] Best Practices (3hr)

        - [] Writing good commit messages
        - [] Atomic commits
        - [] Regularly pushing changes
        - [] Keeping Branches updated

11. - [] Troubleshooting Common Issues (3hr)

        - [] Resolving Merge Conflicts
        - [] Dealing with Detached HEAD state
        - [] Handling large files

12. - [] Conclusion (1hr)

## Introduction

Welcome to a comprehensive guide on Git, an essential tool for modern software development.
This guide will cover from basics of version control to advanced git concepts.
Whether you are a complete beginner or looking for revisit, this guide is for you.
Without further ado let's dive into the exciting world of Git and discover your workflow.

### Table of Contents

1. [Introduction to Version Control](#introduction-to-vcs-version-control-system)
2. [Introduction to Git](#introduction-to-git)
3. [Installing Git](#installing-git)
4. [Basic Git Concepts](#basic-git-concepts)
5. [Getting Started with Git](#getting-started-with-git)
6. [Working with Branches](#working-with-branches)
7. [Remote Repositories](#remote-repositories)
8. [Collaboration with Git](#collaboration-wth-git)
9. [Undoing Changes](#undoing-changes)
10. [Best Practices while Using Git](#best-practices-for-using-git)
11. [Troubleshooting Common Issues](#troubleshooring-common-issues)
12. [Conclusion](#conclusion)

## Introduction to VCS (Version Control System)

### What is a VCS ?

It is a tool for tracking and managing changes in code and files of the software.
Enabling you to navigate through the various changes to code of your software.
This helps developers to contribute and collaborate on a project without conflicts.

### Benefits of VCS

- #### Change History

Provides a detailed history of changes to the codebase.
Including what was changecd, who made the change and why it was made.

- #### Improved Collaboration

Developers can work on different parts of the project simultaneously without interfering in other's work.

- #### Disaster Management

Ability to recover a previous version, reduces the risk of loosing work
In simple words a backup image of your project at every change.

- #### Code Quality

Code reviews and continuous integration improves the overall quality of the codebase.

- #### Experimentation

Developers can create branches to experiment with new features or fixes without effecting the main codebase.
Once the desired changes are verified, the new branch can be merged to the main codebase.

### Different Types of VCS

- #### Local Version Control System

All the changes done to the project are stored on the local machine.

- #### Centralized Version Control System (CVCS)

All the changes done to the project are stored on a central server.

- #### Distributed Version Control System (DVCS)

Each developer holds a full copy of the project change history.

## Introduction to Git

### History

Git was created by Linux Torvalds in 2005 for the development of linux kernel.
(He is the inventor of linux)
It is a free and open-source DVCS (Distrubuted Version Control System).
It was designed to handle small to very large projects with speed and efficiency.

### How Git is different from other VCS ?

Git is a DVCS, that means each developer has the full change history of the project.
This allows for faster and efficient operations and more flexible workflows.

### Key Freatures of Git

- #### Branching and Merging

Working on multiple features and fixes by multiple developers simultaneously.

- #### Distributed Development

Each developer has a copy of the main codebase.

- #### Speed

Fast and performant for larger projects.

## Installing Git

### Windows

1. Download Git from the [official website](https://git-scm.com/download/win).
2. Run the installer and follow the prompts.
3. Verify installation by opening Command Prompt and typing:

    ``` git
    git --version
    ```

and press enter.

### MacOS

1. Open Terminal and install Homebrew if not already installed:

    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2. Install Git:

    ```git
    brew install git
    ```

3. Verfy installation by typing :

    ```git
    git --version
    ```

and press enter.

### Linux

1. Open Terminal and use your package manager to install git.
2. Verfy installation by typing :

    ```git
    git --version
    ```

and press enter.

## Basic Git Concepts

### Repositories

### Working Directory and Staging Area

### Commits

### Branches

### Merging

## Getting started with GIT

1. Configuring Git (Username and email)
2. Creating a Repository
3. Cloning a Repository
4. Adding Files
5. Committing Changes

## Working with Branches

## Remote Repositories

## Undoing Changes

## Collaboration wth Git

## Best Practices for using Git

## Troubleshooring common issues

## Additional Resources

## Conclusion
