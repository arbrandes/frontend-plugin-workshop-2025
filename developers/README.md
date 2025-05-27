# Frontend Plugin Workshop: Developers

This is a developer-centered track where developers will have a chance to see how Frontend Plugin Framework is used from end-to-end, from developing slots and plugins, to publishing plugins for site operators to consume easily.

## Workshop outline

During the workshop we'll attempt to do the following:

1. Create plugin slot: modify the existing MFE to define a new area of the UI that can be customized
1. Put default into slot: If necessary, keep the existing functionality as the default contents of the slot
1. Override slot: create your new plugin that adds/replaces content in the slot
1. Publish: package your plugin for ease of use

## Source code

Unless otherwise specified, all the code referred to by this guide is part of the following draft PR to frontend-app-learning:

- https://github.com/openedx/frontend-app-learning/pull/1717

## Development environment

For this workshop you have two options: either A) connect to a pre-built one we'll provide, or B) use your own.

### Option A. Connect to the pre-built development environment

Test the connection with the IP address you were provided:

```
ssh -o TCPKeepAlive=yes -o ServerAliveInterval=120 workshop@{IP_YOU_SELECTED}
```

You'll need to use SSH port forwarding before you can access the Open edX instance using your browser.  Use the included [script](./connection.sh) to easily forward the dev ports:

```bash
ip=THE_IP_YOU_SELECTED
echo "The password is: press container sandpaper pry bird terminal"
ssh -o TCPKeepAlive=yes -o ServerAliveInterval=120 $(for i in 8000 8001 1984 1993 1994 1995 1996 1997 1999 2000 2001 2002; do echo -L $i:localhost:$i ; done) workshop@${ip};
```

That's it!  Just make sure you don't already have a local Tutor dev running, otherwise the port forwarding won't work.

Tip: You can use VSCode to edit files remotely via the [Remote-SSH extension](https://code.visualstudio.com/docs/remote/ssh).

### Option B. Launching a development environment from scratch

As an alternative to the pre-built environment, you can run the following in a machine with at least 2 CPUs and 16GB of RAM.  You'll need a recent pip and Docker, as well as a good internet connection.  Note that this will take over an hour in ideal conditions (which may not be the case at the conference venue).

- [Tutor dev setup](https://docs.tutor.edly.io/dev.html)

## Step 1. Creating a slot

Start by mounting the Learning MFE in dev mode and running it outside the Docker container:

```bash
git clone git@github.com:openedx/frontend-app-learning.git
tutor mounts add frontend-app-learner-dashboard/
tutor dev start lms -d
cd frontend-app-learning
nvm use
npm ci
npm run dev
```

In another screen, create a new slot using another one as a basis:

```bash
cd src/plugin-slots/
mkdir UnitContentsSlot
cp UnitTitleSlot/index.jsx UnitContentsSlot/index.jsx
```

Edit the new file and define the details of the slot, then proceed to wrap the unit content with it.  See [this commit](https://github.com/openedx/frontend-app-learning/pull/1717/commits/e045a426eb51e8cf759e6a7aea16a7c8e15f0343) for reference.

## Step 2: Creating a plugin sandwich

First we'll create a plugin to display the unit ID before the content, then one to display the course ID after the content.

See [env.config.jsx](https://github.com/openedx/frontend-app-learning/pull/1717/commits/e045a426eb51e8cf759e6a7aea16a7c8e15f0343) for reference.

TODO: insert instructions and code snippets

## Step 3. A third plugin: using PLUGIN_OPERATIONS.Wrap

Refer to [env.config.jsx](https://github.com/openedx/frontend-app-learning/pull/1717/commits/e045a426eb51e8cf759e6a7aea16a7c8e15f0343).

TODO: insert instructions and code snippets

## Step 4. Accessing User Data

Refer to [env.config.jsx](https://github.com/openedx/frontend-app-learning/pull/1717/commits/e045a426eb51e8cf759e6a7aea16a7c8e15f0343).

TODO: insert instructions and code snippets

## Step 5. Using an API

Refer to [env.config.jsx](https://github.com/openedx/frontend-app-learning/pull/1717/commits/e045a426eb51e8cf759e6a7aea16a7c8e15f0343).

TODO: insert instructions and code snippets

## Step 6. Documentation

Each slot should be properly documented with:

- Slot ID
- List of props
- Description
- Screenshot
- Example

See [the README for UnitTitleSlot](https://github.com/openedx/frontend-app-learning/blob/master/src/plugin-slots/UnitTitleSlot/README.md) as an example.

TODO: include screenshots and/or snippets.

## Step 7. Publication

If your plugin is intended for anybody to be able to use, or just if it's too complex to live in a single `env.config.jsx`, it's a good idea to publish it to NPM.

Let's take a look at how Aspects does it.  First, let's examine it's frontend plugin:

- https://github.com/openedx/frontend-plugin-aspects

Next, let's see how it's used in its Tutor plugin:

- https://github.com/openedx/tutor-contrib-aspects
- https://github.com/openedx/tutor-contrib-aspects/blob/main/tutoraspects/patches/mfe-dockerfile-post-npm-install-authoring
- https://github.com/openedx/tutor-contrib-aspects/blob/main/tutoraspects/patches/mfe-env-config-runtime-definitions-authoring
- https://github.com/overhangio/tutor-mfe/blob/release/tutormfe/templates/mfe/build/mfe/env.config.jsx

TODO: create a simplified version of the above specific to the workshop.
