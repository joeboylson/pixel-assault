import { useEffect } from "react";
import { sanityClient } from "../../utils/sanity";

export async function test() {
  sanityClient
    .fetch(`count(*)`)
    .then((data: unknown) => console.log(`Number of documents: ${data}`))
    .catch(console.error);
}
export default function App() {
  useEffect(() => {
    test();
  }, []);

  return <p>App</p>;
}
