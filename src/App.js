import { useApps, useOrganization, usePermissions } from "@aragon/connect-react";
import Vote from "./Vote";

export default function App() {
  const [org, orgStatus] = useOrganization();
  console.log("org: ", org);

  const [apps, appsStatus] = useApps();
  console.log("apps: ", apps);
  const [permissions, permissionsStatus] = usePermissions();

  const loading = orgStatus.loading || appsStatus.loading || permissionsStatus.loading;
  const error = orgStatus.error || appsStatus.error || permissionsStatus.error;

  if (loading) {
    return <p>Loading…</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1>{org.name}</h1>

      <h2>Apps</h2>

      <ul>
        {apps.map((app, i) => (
          <li key={i}>{app.name}</li>
        ))}
      </ul>

      <h2>Permissions</h2>

      <ul>
        {permissions.map((permission, i) => {
          // console.log(`permission: ${i}`, permission);
          return <li key={i}>{String(permission)}</li>;
        })}
      </ul>

      <Vote />
    </>
  );
}

// We create a hook corresponding to the app connector. This is usually enough,
// since the app connector will inherit from the connection set on <Connect />.
