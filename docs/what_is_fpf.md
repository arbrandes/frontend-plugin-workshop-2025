## Introduction to the Frontend Plugin Framework

The Frontend Plugin Framework is designed to be an extension point to customize an Open edX MFE. This framework supports two types of plugins: iFrame-based and "Direct" plugins.  The primary way this is made possible is through JS-based configurations, where the changes to a plugin slot are defined.

## Concepts

- Plugin Slots: the places in the code code where an extension can placed
- Plugins (or Widgets): the extensions that you place into Slots
- Direct or Iframe: the classification of widgets according to how they're delivered to the browser

## Operations

- Insert
- Modify, wrap, hide

## Slot naming

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
