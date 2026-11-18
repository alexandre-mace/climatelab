/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Aucune optimisation : le quota Hobby (5 000 transformations par mois) est
        // partagé par tous les projets du compte, et `hostname: "**"` laissait
        // n'importe qui faire transformer n'importe quelle image du web. Les seules
        // images du site sont des émojis de 160 px, servis tels quels.
        unoptimized: true,
    },
};

export default nextConfig;
