import { FilesystemItem } from './components/FileSystemItem'
import { nodes } from './data'

function App() {
  return (
    <ul>
      {nodes.map((node) => (
        <FilesystemItem node={node} key={node.name} />
      ))}
    </ul>
  )
}

export default App
