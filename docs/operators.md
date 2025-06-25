# Frontend Plugin Workshop: Operators

This track of the workshop will provide site operators with a hands-on opportunity to install plugins into Frontend Plugin Framework slots in a deployed instance of the Open edX platform.

## Objectives

- Understand core concepts of the Frontend Plugin Framework (slots, plugins)
- Learn how the configuration of plugins works
- Connect to a development environment
- See a plugin in action
- Learn how to create your own plugins

## What is Frontend Plugin Framework

The Frontend Plugin Framework is designed to be an extension point to customize an Open edX MFE. For more information see the [Introduction to the Frontend Plugin Framework document](./what_is_fpf.md).

## Development environment

For this workshop you have two options:

* [Connect to one of the pre-built VMs](./connect_to_vm.md) we're providing for workshop attendees.

**OR**

* [Use your own](./set_up_dev_env.md).

## Starting the dev environment

Once connected to the pre-built environment (or after you're done building your
own), start it as soon as possible with the following command, as it can take
from 5 to 10 minutes for the system to settle:

```bash
tutor dev start lms mfe -d
```

Wait for the system to settle by checking the load with:

```bash
sudo htop
```

At the same time, you can keep an eye on the Open edX logs with:

```
tutor dev logs -f
```

## Verify the plugin works when running the MFE in dev mode

Now that `tutor` is up and running with `frontend-app-learner-dashboard` mounted, let's get the MFE running in dev mode!

```bash
cd frontend-app-learner-dashboard
nvm use
npm ci
npm run dev
```

You should now see the basic example plugin when you navigate to the learner dashboard.

## Have fun with plugins!

Now that you have the learner dashboard MFE running in dev mode, you can modify the `env.config.jsx` file and see what plugins can do!

There are more example plugins for this workshop [here](../operators/). We also have a list of all available plugin slots documented [here](https://docs.openedx.org/en/latest/site_ops/references/frontend-plugin-slots.html).

You've now made it to the "choose your own adventure" part of the workshop! The best thing to do now is find a part of the platform that has a plugin slot you'd like to use and try using it!

## Getting a plugin ready for production use

This workshop has

Once you're happy with your plugin, you'll likely want to be able to use it in a production environment.

To do so, you can utilize [`tutor-mfe` plugin hooks](https://github.com/overhangio/tutor-mfe?tab=readme-ov-file#using-frontend-plugin-slots).

Installing a plugin this way requires rebuilding the `mfe` image in tutor, which isn't always the fastest process, and therefore is outside of the scope of this workshop. If you reach out on [the forums](https://discuss.openedx.org/) or in [the `#wg-frontend` channel on slack](https://openedx.slack.com/archives/C04BM6YC7A6) after the workshop people will be happy to help!
