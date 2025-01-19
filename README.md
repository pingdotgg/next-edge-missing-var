# Issue when generating env at build

This reproduces the issue causing [INC-4](https://uploadthingstatus.com/incidents/01JHY943T5C7KA33YB2JMGPSNR)

At UploadThing, we use AWS Secret Manager (SM) to mange environment variables throughout
our different services. Most of these are provisioned through Terraform, but the dashboard app is still managed through Vercel's git integration.

The [env-fetch.js](./env-fetch.js) file fetches the variable from SM, and then outputting to a `.env.local` which gets picked up at the build-step.

At build, the env is present. When visiting `/`, the env is present. But for our proxy route which forwards requests to `api.uploadthing.com`, it somehow got lost... (try `POST /edge` and see it error due to missing env):

![CleanShot 2025-01-19 at 12 28 05@2x](https://github.com/user-attachments/assets/0f62b134-5962-4a9d-8484-ae81904fc8b8)
