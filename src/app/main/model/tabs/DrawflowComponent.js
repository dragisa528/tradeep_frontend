import React, { useRef, useEffect } from 'react';
import drawflow from 'drawflow';

const DrawflowWrapper = () => {
  const drawflowRef = useRef(null);

  useEffect(() => {
    const container = drawflowRef.current;
    const options = {
      nodes: {
        node1: {
          name: 'Start',
          icon: 'fas fa-play-circle',
          html: '<div><i class="fas fa-play-circle"></i><span>Start</span></div>',
          inputs: {},
          outputs: {
            output: {
              name: 'Output',
              type: 'flow',
            },
          },
        },
        node2: {
          name: 'End',
          icon: 'fas fa-stop-circle',
          html: '<div><i class="fas fa-stop-circle"></i><span>End</span></div>',
          inputs: {
            input: {
              name: 'Input',
              type: 'flow',
            },
          },
          outputs: {},
        },
      },
      connections: {
        'node1': {
          'output': {
            node: 'node2',
            input: 'input',
          },
        },
      },
      grid: true,
      gridSize: 20,
      snapToGrid: true,
      zoom: 1,
      zoomMax: 2,
      zoomMin: 0.5,
    };
    
    const drawflowInstance = new drawflow(container);

    // Add any Drawflow configuration or customization here

    return () => {
      drawflowInstance.destroy();
    };
  }, []);

  return <div ref={drawflowRef} style={{ height: '500px', width: '70%',background:"red" }} />;
};

export default DrawflowWrapper;
