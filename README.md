# DMBook

This repository is (unsurprisingly) the frontend for my Fall 2021 Enterprise Java individual project.

While this is deployed in Github Pages, the API must be running locally in order for the GH Pages to work with your system.

## To Use

### 1. Set up Amplify CLI 
Follow Amplify's most current documentation to install the Amplify CLI. Note, this is different from the regular
AWS CLI. 

### 2. Configure the project 
Run `amplify configure` to set up access to your AWS account. It will walk you through various steps. Choose
answers that match the setup for the project in your AWS. This will involve you creating a user in IAM.

### 3. amplify pull 
Run `amplify pull`. It will prompt for an authentication method: select AWS profile for this. The rest of the 
information it asks can be defaults or whatever is accurate to your system -- for example, your default editor.

Then, run `amplify pull` again. 

### 4. Run the React application
After cloning to your local machine run the following commands from the repository's folder.

```
npm install
npm start
```
