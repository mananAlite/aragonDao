import { createAppHook, useApp } from "@aragon/connect-react";
import connectVoting from "@aragon/connect-voting";

// We create a hook corresponding to the app connector. This is usually enough,
// since the app connector will inherit from the connection set on <Connect />.
const useVoting = createAppHook(connectVoting);

export default function Vote() {
  const [voting] = useApp("voting");

  // And this is how we can use it, by passing the app instance and a callback.
  const [votes] = useVoting(voting, (app) => app.votes());
  console.log("votes: ", votes);

  return <>Vote</>;
  //   return <ul>{votes ? votes.map((vote) => <li key={vote.id}>{vote}</li>) : <li>Loading votes…</li>}</ul>;
}
