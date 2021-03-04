import React from 'react';

import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout>
      <main className="c-container__inner">
        <h1 className="c-title">
          Why Build This?
        </h1>

        <p>These days, most websites and apps track data onto the end of any URL. As a result of this, websites can track and fingerprint users across the web. This situation is compounded when family or friends share the same URL, allowing companies to detail a complex profile of you and your social circle's interests.</p>
        <p>We can do our best to reduce our use of these sorts of services but doing this every day can be time-consuming and inconvenient. A more significant solution to this problem is founded in a deeper migration away from these sorts of websites, but getting your entire network of friends and family to do the same can be tricky, to say the least.</p>
        <p>Simple utilities like Untrack give the user more control over how they share information on the web. By stripping tracking information from any URL, it's a step in the right direction to living in a more privacy-aware world.</p>
      </main>
    </Layout>
  )
}
