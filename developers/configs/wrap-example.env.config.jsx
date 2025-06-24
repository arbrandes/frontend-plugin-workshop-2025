import React from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import { PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';
import { Button } from '@openedx/paragon';

const config = {
  pluginSlots: {
    'org.openedx.frontend.learning.unit_contents.v1': {
      keepDefault: true,
      plugins: [
        {
          // Blur the content
          op: PLUGIN_OPERATIONS.Wrap,
          widgetId: 'default_contents', // Wrap the contents
          wrapper: ({ component }) => {
            const [isBlurred, setBlur] = React.useState(true);
            const { authenticatedUser } = React.useContext(AppContext);
            if (isBlurred) {
              return (
                <div style={{ position: 'relative' }}>
                  <div style={{ filter: 'blur(5px)', pointerEvents: 'none' }}>
                    {component}
                  </div>
                  <div style={{
                    position: 'absolute', backgroundColor: 'white', left: '10%',
                    width: '80%', top: '200px', padding: '30px', border: '1px solid darkgrey',
                  }}>
                    <p>{authenticatedUser?.username || 'Learner'}, are you sure you want to learn this now?</p>
                    <Button onClick={() => setBlur(false)}>Yes</Button>
                  </div>
                </div>
              );
            } else {
              return <>{component}</>;
            }
          },
        },
      ]
    }
  },
}

export default config;