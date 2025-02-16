// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://tourist-routes-project.github.io/backendDoc/",
  base: "/backendDoc/",
  integrations: [
    starlight({
      title: "SoundWaysDoc",
      social: {
        github: "https://github.com/Tourist-Routes-Project",
      },
      sidebar: [
        {
          label: "Backend",
          items: [
            { label: "RutaCheckpoint", slug: "backend/ruta-checkpoint" },
            { label: "Audioguias", slug: "backend/audioguia" },
            { label: "Comentarios", slug: "backend/comentarios" },
          ],
        },
        {
          label: "Frontend",
          autogenerate: { directory: "frontend" },
        },
      ],
    }),
  ],
});
