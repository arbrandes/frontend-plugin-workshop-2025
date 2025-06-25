# Frontend Plugin Workshop: Operators

This track of the workshop will provide site operators with a hands-on opportunity to install plugins into Frontend Plugin Framework slots in a deployed instance of the Open edX platform.

## Objectives

- Understand core concepts of the Frontend Plugin Framework (slots, plugins)
- Learn how the configuration of plugins works
- Connect to a development environment
- Create a very simple plugin for an existing slot
- Create an entire new branded footer

## The theory

### Introduction to the Frontend Plugin Framework

The Frontend Plugin Framework is designed to be an extension point to customize an Open edX MFE. This framework supports two types of plugins: iFrame-based and "Direct" plugins.  The primary way this is made possible is through JS-based configurations, where the changes to a plugin slot are defined.

### Concepts

- Plugin Slots: the places in the code code where an extension can placed
- Plugins (or Widgets): the extensions that you place into Slots
- Direct or Iframe: the classification of widgets according to how they're delivered to the browser

### Operations

- Insert
- Modify, wrap, hide

### Slot naming

We use reverse DNS notation.  For example:

- org.openedx.frontend.courseware.navigation_sidebar.v2
- org.openedx.frontend.layout.footer.beta

See [the relevant ADR](https://github.com/openedx/frontend-plugin-framework/blob/master/docs/decisions/0003-slot-naming-and-life-cycle.rst).

### Configuration

`env.config.jsx`:

```jsx
const config = {
  pluginSlots: {
    a_slot_id: { /* plugin configuration */},
    footer_slot: { /* plugin configuration */},
    ...
  },
}

export default config;
```

A specific plugin configuration:

```jsx
...
import MyOrgFooter from '@myorg/custom-footer'
...
footer_slot: {
  keepDefault: false,
  plugins: [
    {
      op: PLUGIN_OPERATIONS.Insert,
      widget: {
        id: 'custom_footer',
        type: DIRECT_PLUGIN,
        RenderWidget: MyOrgFooter,
      },
    }
  ]
}
...
```

### More information:

- https://github.com/openedx/frontend-plugin-framework/

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

After following those steps, you'll also want to set up the Learner Dashboard MFE:

```bash
git clone git@github.com:openedx/frontend-app-learner-dashboard.git
tutor mounts add frontend-app-learner-dashboard/
```

## Starting the dev environment

Once connected to the pre-built environment (or after you're done building your
own), start it as soon as possible with the following command, as it can take
from 5 to 10 minutes for the system to settle:

```bash
tutor dev start -d
```

Wait for the system to settle by checking the load with:

```bash
sudo htop
```

At the same time, you can keep an eye on the Open edX logs with:

```
tutor dev logs -f
```

Once the system settles, import the demo course as follows.

```bash
tutor dev do importdemocourse
tutor dev run cms ./manage.py cms update_course_outline course-v1:OpenedX+DemoX+DemoCourse
```

## Basic Plugin development

### [Hello, world!](configs/basic-example.env.config.jsx):

Adding a hello world `<p>` in an existing slot

```jsx
<p style={{backgroundColor: 'lightblue'}}>Open edX rlz!</p>
```

### Create a [plugin for an existing slot](configs/sidebar-plugin-example.env.config.jsx):

Adding a paragon card to the sidebar.

```jsx
<div className="product-card-container d-flex">
    <Card className="mb-4" orientation="horizontal">
        <Card.ImageCap
          src="https://picsum.photos/360/200/"
          srcAlt="Card image"
          logoSrc="https://picsum.photos/150/150"
          logoAlt="Card logo"
        />
    ...
```

### Write a brand new [footer](configs/branded-footer-example.env.config.jsx):

```jsx
import Footer from './src/my-brand/Footer'
```
