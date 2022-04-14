import lume from "lume/mod.ts";
import inline from "lume/plugins/inline.ts";
import imagick from "lume/plugins/imagick.ts";

const site = lume({ prettyUrls: false });

site.use(inline());
site.use(
  imagick({
    functions: {
      quality(img, quality) {
        img.quality = quality;
      },
    },
  })
);

site.copy("favicon.png");
site.copy("icon.svg");
site.copy("style.css");

export default site;
