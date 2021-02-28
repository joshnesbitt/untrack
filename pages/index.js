import React from 'react';

import Layout from '../components/layout';
import Form from '../components/form';

export default function Index() {
  return (
    <Layout>
      <main>
        <h1 className="title">
          Untrack Any Link
        </h1>

        <Form />
      </main>
    </Layout>
  )
}
