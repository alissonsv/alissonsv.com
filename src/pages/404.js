import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/seo';

export default function Error404() {
  return (
    <Layout>
      <Seo title="Página não encontrada" />
      <h1>Página não encontrada</h1>
    </Layout>
  );
}
