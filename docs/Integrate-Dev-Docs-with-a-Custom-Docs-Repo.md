

  # Integrate Dev-Docs with a Custom Docs Repo

## Step 1: Navigate to Dev-Docs Website

On the Dev-Docs website (https://www.dev-docs.io/dash), find the SVG icon with the text " " and click on it.

![This is the image for svg with the text:  and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_1.png)

## Step 2: Select External Docs Option

Click on the "External" option from the dropdown on the left.

## Step 3: Click on the Settings Icon

On the external docs page (https://www.dev-docs.io/external_docs), find the settings icon and click on it.

![This is the image for path with the text:  and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_3.png)

## Step 4: Enter Repository Details

Enter the details of your custom docs repository in the input field.

![This is the image for INPUT with the text:  and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_4.png)

## Step 5: Open Github Integration Modal

Find and click on the DIV containing the text "Setup," "GPT Github Setup," "Live Playground Examples," and other related options.

![This is the image for DIV with the text: SetupGPT Github SetupLive Playground ExamplesPrivate KeyScoped Github PatRepo NamePersonal Access TokenClick to uploadDelete Github IntegrationAdd new File Your current Open API Files. Add to Your DocsRepo NameOwnerDocs PathCreate ChatCreate Example Playground and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_5.png)

## Step 6: Navigate to Your Docs Repo

Go to Github to get both a Personal Access Token as well as the name of your Repo

## Step 7: Click on Profile Picture

On the GitHub repository page (https://github.com/avb-is-me/nextra/tree/main), find the profile picture (IMG) and click on it.

![This is the image for IMG with the text:  and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_6.png)

## Step 8: Navigate to Settings

Click on the "Settings" option.

![This is the image for SPAN with the text: Settings and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_7.png)

## Step 9: Open Developer Settings

Go to your Github profile settings (https://github.com/settings/profile), find and click on the "Developer settings" option.

## Step 10: Open Personal Access Tokens

On the developer settings page (https://github.com/settings/apps), find and click on the "Personal access tokens" button.

![This is the image for BUTTON with the text:       Personal access tokens     and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_9.png)

## Step 11: Select Fine-grained Tokens

On the same page, click on the "Fine-grained tokens" option.

![This is the image for SPAN with the text: Fine-grained tokens and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_10.png)

## Step 12: Enter Token Name

On the new personal access token page (https://github.com/settings/personal-access-tokens/new), enter a name for your token in the input field.

![This is the image for INPUT with the text:  and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_12.png)

## Step 13: Review Token Settings

Review the token settings, including the expiration date, description, resource owner, repository access, and permissions.

![This is the image for DIV with the text:               GitHub Apps             OAuth Apps             Personal access tokens            Fine-grained tokens  Beta         Tokens (classic)    and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_13.png)

## Step 14: Select Repository Access Option

Choose the "Only select repositories" option for repository access, and Select your Repo.

![This is the image for INPUT with the text:  and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_14.png)

## Step 15: Open Repository Permissions Section

Find and click on the DIV containing the text "Repository permissions" to expand the repository permissions section.

![This is the image for DIV with the text:   Repository permissions  0 Selected  Repository permissions permit access to repositories and related resources. and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_16.png)

## Step 16: Select Read and Write Access for Proper Permissions

For the desired permission (e.g., "Commit statuses"), select the "Read and write" access level by clicking on the corresponding label. Recommended Permissions are read & write for "Pull Requests, Issues, Commits, and Contents".

![This is the image for LABEL with the text:      Read and write       Read and write  and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_20.png)

## Step 17: Generate Token

After configuring the desired permissions, click on the "Generate token" button to generate the personal access token.

![This is the image for SPAN with the text: Generate token and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_21.png)

## Step 18: Enter Personal Access Token

On the Dev-Docs external docs page (https://www.dev-docs.io/external_docs), enter the generated personal access token in the input field.

![This is the image for INPUT with the text:  and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_23.png)

## Step 19: Upload Integration

Click on the "Click to upload" button to upload the GitHub integration with the provided personal access token.

![This is the image for BUTTON with the text: Click to upload and then clicked](/img/integrate_dev-docs_with_a_custom_docs_repo/step_24.png)

## Step 20: Verify Integration

After uploading the integration, verify that the connection between Dev-Docs and your custom docs repo is successful. You should see a confirmation message or a green checkmark indicating that the integration is complete.

## Step 21: Test the Integration

To ensure that the integration is working correctly, try creating a new document or updating an existing one in your custom docs repo. Then, check if the changes are reflected in Dev-Docs after a short synchronization period.

## Step 22: Configure Sync Settings

If available, navigate to the sync settings in Dev-Docs to configure how often your custom docs should be synchronized with the Dev-Docs platform. This will ensure that your documentation remains up-to-date.

## Step 23: Set Up Webhooks (Optional)

For real-time updates, consider setting up webhooks in your GitHub repository to notify Dev-Docs of any changes. This will trigger an immediate sync when you push changes to your docs repo.

  