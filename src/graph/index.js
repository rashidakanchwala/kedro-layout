import { graph } from './graph';

/**
 * Calculate chart layout with experimental new graphing algorithm
 * This is an extremely expensive operation so we want it to run as infrequently
 * as possible, and keep it separate from other properties (like node.active)
 * which don't affect layout.
 */
export const graphNew = ({ nodes, edges, }) => {
  const result = graph(nodes, edges);
  return {
    ...result,
    size: { ...result.size, marginx: 100, marginy: 100 },
  };
};
