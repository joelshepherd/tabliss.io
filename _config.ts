import lume from "lume/mod.ts";
import inline from "lume/plugins/inline.ts";

const site = lume({ prettyUrls: false });

site.use(inline());

site.copy("logo.svg");
site.copy("screenshot.png");
site.copy("style.css");

export default site;
