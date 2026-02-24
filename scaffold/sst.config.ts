/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    if (!process.env.AWS_REGION) {
      throw new Error("AWS_REGION is required. Set in .env.{stage} or shell environment.");
    }
    return {
      name: "__PROJECT_NAME__",
      home: "aws",
      providers: {
        aws: { region: process.env.AWS_REGION },
      },
      removal: input.stage === "prod" ? "retain" : "remove",
      protect: input.stage === "prod",
    };
  },
  async run() {
    const pkg = await import("./package.json");
    const openNextVersion = pkg.devDependencies["@opennextjs/aws"].replace(/^\^/, "");
    const isProd = $app.stage === "prod";

    const site = new sst.aws.Nextjs("Web", {
      path: "frontend/",
      openNextVersion,
      buildCommand: "bash ../scripts/build-open-next.sh",
      domain:
        isProd && process.env.PROD_DOMAIN_NAME
          ? {
              name: process.env.PROD_DOMAIN_NAME,
              redirects: [`www.${process.env.PROD_DOMAIN_NAME}`],
              cert: process.env.CERTIFICATE_ARN,
            }
          : undefined,
    });

    return { url: site.url };
  },
});
