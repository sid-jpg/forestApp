# Deployment Guide for Forest Fire Prediction System on Vercel

## Prerequisites
- Ensure you have a Vercel account. Sign up at [Vercel](https://vercel.com).
- Install Vercel CLI globally using npm:
  ```bash
  npm install -g vercel
  ```

## Steps to Deploy
1. **Navigate to Your Project Directory**:
   ```bash
   cd c:/Users/a2z/Desktop/Mmajjor/forestFire-master
   ```

2. **Initialize Vercel**:
   Run the following command to initialize your project:
   ```bash
   vercel init
   ```
   - Follow the prompts to set up your project.

3. **Create a `vercel.json` Configuration File**:
   In the root of your project, create a `vercel.json` file with the following content:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "app.py",
         "use": "@vercel/python"
       }
     ],
     "routes": [
       { "src": "/(.*)", "dest": "app.py" }
     ]
   }
   ```

4. **Deploy Your Application**:
   Run the following command to deploy:
   ```bash
   vercel --prod
   ```
   - Follow the prompts to complete the deployment.

5. **Access Your Application**:
   After deployment, Vercel will provide a URL where your application is hosted.

## Notes
- Make sure to set any environment variables required by your application in the Vercel dashboard.
- Monitor the deployment logs for any issues during the deployment process.

## Conclusion
Your Forest Fire Prediction System should now be live on Vercel! If you need to make updates, simply push your changes and redeploy using the `vercel --prod` command.
