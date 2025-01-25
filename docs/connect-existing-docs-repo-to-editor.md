

  # How to Connect an Existing Docs Repo to the Editor

## Prerequisites
- A GitHub account
- An existing documentation repository on GitHub
- Dev-Docs account

## Steps

1. **Install the Dev-Docs GitHub App**
   - Go to the Dev-Docs GitHub App installation page
   - Select the organization or account where your docs repo is located
   - Choose the repository you want to connect

2. **Set Up in Dev-Docs Platform**
   - Log in to your Dev-Docs account
   - Navigate to the "Integrations" or "GitHub" section in your dashboard

3. **Configure Dev-Docs.json**
   - In your repository, create a `dev-docs.json` file in the root directory if it doesn't exist
   - Add the following configuration:
     ```json
     {
       "gitHubApp": {
         "workflows": ["generateDocs"]
       }
     }
     ```

4. **Specify Documentation Location**
   - In the `dev-docs.json` file, add the location of your documentation:
     ```json
     {
       "ai": {
         "docSubFolder": "docs/"
       },
       "gitHubApp": {
         "workflows": ["generateDocs"]
       }
     }
     ```

5. **Commit and Push Changes**
   - Commit the `dev-docs.json` file to your repository
   - Push the changes to GitHub

6. **Access the Editor**
   - In the Dev-Docs platform, navigate to the "Editor" section
   - Your connected repository should now be visible and accessible

7. **View and Edit Documentation**
   - Click on your repository in the Editor
   - You should now see your existing documentation files
   - You can now view, edit, and manage your docs directly in the Dev-Docs editor

8. **Sync Changes**
   - Any changes made in the editor will be automatically synced with your GitHub repository
   - You can also use the "Push to GitHub" feature to manually sync changes

By following these steps, you'll successfully connect your existing documentation repository to the Dev-Docs editor, allowing for seamless management and collaboration on your documentation.

  