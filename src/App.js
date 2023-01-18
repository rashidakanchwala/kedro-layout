import logo from './logo.svg'
import './App.css'
import { graphNew } from './graph'
import data from './graph/test-data.json'
import { useEffect } from 'react'
import { preCalculateNode } from './precalculation'
import { isCompositeComponent } from 'react-dom/test-utils'

let output = {};

const newNodes = data.nodes.map(node => (preCalculateNode(node)));


output = graphNew({ nodes: newNodes, edges: data.edges, layers: data.layers })


function App() {
  return (
    <svg
      style={{margin: "0 auto", display: "block"}}
      width={output.size.width*0.25}
      height={output.size.height*0.25}
      viewBox={`0 0 ${output.size.width} ${output.size.height}`}
    >
      <g>
        {output.nodes.map((n) => (
          <circle r={5} cx={n.x} cy={n.y} fill="red" />
        ))}
      </g>
    </svg>
  )
}

export default App
