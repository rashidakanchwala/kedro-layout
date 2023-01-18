import logo from './logo.svg'
import './App.css'
import { graphNew } from './graph'
import data from './graph/test-data.json'
import { useEffect } from 'react'
import { preCalculateNode } from './precalculation'
import { curveBasis, line } from 'd3-shape';
import { isCompositeComponent } from 'react-dom/test-utils'

let output = {};



const newNodes = data.nodes.map(node => (preCalculateNode(node)));


output = graphNew({ nodes: newNodes, edges: data.edges})

function App() {


  const lineShape = line()
  .x((d) => d.x)
  .y((d) => d.y)
  .curve(curveBasis);

  const drawEdge = function(edge) {
    return(lineShape(edge.points))
  }

  return (
    <svg
      style={{margin: "0 auto", display: "block"}}
      width={output.size.width*0.5}
      height={output.size.height*0.5}
      viewBox={`0 0 ${output.size.width} ${output.size.height}`}
    >
      <g>
        {output.nodes.map((n) => (
          <circle r={20} cx={n.x} cy={n.y} fill="red" />
        ))}
      </g>
      <g>
        {output.edges.map((edge) => (
          <path d = {drawEdge(edge)}
            stroke='black'
            fill='none'>
            </path>
  
        ))}
      </g>
    </svg>
  )
}

export default App
