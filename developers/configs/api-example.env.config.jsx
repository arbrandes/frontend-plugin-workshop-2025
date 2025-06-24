import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';
import { useQuery } from '@tanstack/react-query'

const config = {
  pluginSlots: {
    'org.openedx.frontend.learning.unit_contents.v1': {
      keepDefault: true,
      plugins: [
        {
          // Display a random dog picture after the each unit
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'after_unit_dog',
            priority: 90,
            type: DIRECT_PLUGIN,
            RenderWidget: (props) => {
              const { data, isLoading, error } = useQuery({
                queryKey: ['unit_dog', props.unitId],
                queryFn: async () => {
                  const response = await fetch('https://dog.ceo/api/breeds/image/random');
                  return (await response.json()).message;
                },
                refetchOnWindowFocus: false,
                refetchOnMount: false,
              });
              if (isLoading) return <div>Loading doggo...</div>;
              if (!data) return <div>Error: {error}</div>;
              return <div><p>Bonus doggo for this unit:</p><img src={data} alt="Doggo" /><br /><br /></div>;
            },
          },
        },
      ]
    }
  },
}

export default config;
