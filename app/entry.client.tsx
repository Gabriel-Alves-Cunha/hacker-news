import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Same as createRoot(), but is used to hydrate
// a container whose HTML contents were rendered
// by ReactDOMServer. React will attempt to attach
// event listeners to the existing markup.

hydrateRoot(document, <RemixBrowser />);
