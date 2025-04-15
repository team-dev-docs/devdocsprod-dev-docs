import Layout from '@theme/Layout';
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

function App() {
  return (
    <Layout title="API Reference">
      <ApiReferenceReact
        configuration={{
          spec: {
            url: '/openapi/galaxy.yaml', // Reference file from static directory
          },
        }}
      />
    </Layout>
  )
}

export default App