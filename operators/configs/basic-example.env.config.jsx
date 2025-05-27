/* Basic Frontend Plugin Workshop Example. */

import {
  DIRECT_PLUGIN,
  PLUGIN_OPERATIONS,
} from '@openedx/frontend-plugin-framework';


const sidebarRecommender = () => (
  <p style={{ backgroundColor: 'lightblue' }}>Open edX rlz!</p>
);

const config = {
  pluginSlots: {
    'org.openedx.frontend.learner_dashboard.widget_sidebar.v1': {
      keepDefault: false,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'sidebar_iframe_plugin',
            type: DIRECT_PLUGIN,
            RenderWidget: sidebarRecommender,
          },
        }
      ],
    },
  },
}

export default config;
