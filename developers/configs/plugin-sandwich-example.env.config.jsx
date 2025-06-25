import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    'org.openedx.frontend.learning.unit_contents.v1': {
      keepDefault: true,
      plugins: [
        {
          // Display the unit ID *above* the content
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'before_unit_content',
            priority: 10, // 10 will come before the unit content, which has priority 50
            type: DIRECT_PLUGIN,
            RenderWidget: (props) => (
              <div style={{ backgroundColor: 'cornflowerblue', color: 'white', padding: '8px 2px' }}>
                <small>This unit is <code style={{ color: 'inherit' }}>{props.unitId}</code></small>
              </div>
            ),
          },
        },
        {
          // Display the course ID *after* the content
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'after_unit_content',
            priority: 80, // will come after the unit content, which has priority 50
            type: DIRECT_PLUGIN,
            RenderWidget: (props) => (
              <div style={{ backgroundColor: 'lightcoral', color: 'white', padding: '8px 2px', margin: '8px 0' }}>
                <small>This course is <code style={{ color: 'inherit' }}>{props.courseId}</code></small>
              </div>
            ),
          },
        },
      ]
    }
  },
}

export default config;
