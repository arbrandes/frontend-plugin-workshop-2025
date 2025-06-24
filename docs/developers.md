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

For this workshop you have two options:

* [Connect to one of the pre-built VMs](./connect_to_vm.md) we're providing for workshop attendees.

**OR**

* [Use your own](./set_up_dev_env.md).

## Step 1. Creating a slot

> ![NOTE]
> The pre-built VMs have `frontend-app-learner-dashboard` mounted.
> You can see current mounts by running `tutor mounts list`
> You can remove mounts by running `tutor mounts remove /path/to/mounted/mfe`

Start by mounting the Learning MFE in dev mode and running it outside the Docker container:

```bash
git clone git@github.com:openedx/frontend-app-learning.git
tutor mounts add frontend-app-learner-dashboard/
tutor dev start lms mfe -d
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

See the plugin sandwich [example env.config.jsx](../developers/configs/plugin-sandwich-example.env.config.jsx) for reference.

Copy the contents of the example config to an `env.config.jsx` in the root of your `frontend-app-learning` directory.  

## Step 3. Using PLUGIN_OPERATIONS.Wrap and accessing User Data

Next we'll create a plugin to wrap the content, blurring it until the learner clicks a button.

See the wrap [example env.config.jsx](../developers/configs/wrap-example.env.config.jsx).

Copy the contents of the example config to an `env.config.jsx` in the root of your `frontend-app-learning` directory.  

This plugin utilizes user data from `AppContext` to display the learner's name.

```jsx
const { authenticatedUser } = React.useContext(AppContext);
// [...]
<p>{authenticatedUser?.username || 'Learner'}, are you sure you want to learn this now?</p>
```

## Step 4. Using an API

Now we'll create a plugin that fetches images from an API.

See the API [example env.config.jsx](../developers/configs/api-example.env.config.jsx) for reference.

Copy the contents of the example config to an `env.config.jsx` in the root of your `frontend-app-learning` directory.

## Step 5. Documentation

Each slot should be properly documented with:

- Slot ID
  - This should follow the naming format documented in the [naming ADR](https://github.com/openedx/frontend-plugin-framework/blob/master/docs/decisions/0003-slot-naming-and-life-cycle.rst).
- List of props
- Description
- Screenshot
- Example(s)
  - These should be "plug and play." Someone reading the slot documentation should be able to copy the example code into their own `env.config.jsx` file and see the changes match the screenshot.

See [the README for UnitTitleSlot](https://github.com/openedx/frontend-app-learning/blob/master/src/plugin-slots/UnitTitleSlot/README.md) as an example.

## Step 6. Publication

If your plugin is intended for anybody to be able to use, or just if it's too complex to live in a single `env.config.jsx`, it's a good idea to publish it to NPM.

Let's take a look at how Aspects does it.  First, let's examine it's frontend plugin:

- https://github.com/openedx/frontend-plugin-aspects

Next, let's see how it's used in its Tutor plugin:

- https://github.com/openedx/tutor-contrib-aspects
- https://github.com/openedx/tutor-contrib-aspects/blob/main/tutoraspects/patches/mfe-dockerfile-post-npm-install-authoring
- https://github.com/openedx/tutor-contrib-aspects/blob/main/tutoraspects/patches/mfe-env-config-runtime-definitions-authoring
- https://github.com/overhangio/tutor-mfe/blob/release/tutormfe/templates/mfe/build/mfe/env.config.jsx

TODO: create a simplified version of the above specific to the workshop.
