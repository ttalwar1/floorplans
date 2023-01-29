Git CHEATSHEET
git ls-files lists out all the files
git branch show branch we're on
git branch --all shows all branches
git pull runs a fetch on the remote for the current branch
git push attempts to update the corresponding branch on remote
git log shows a list of all the commits
git checkout -b <branch name>
git checkout -d <branch name> will delete a branch
git checkout -b floorplanid to try another path
man gitworkflows ideas on how to structure a project

    // What I have working (with Scully):
    // floorplans/:floorplanId
    //renders the static paths perfectly

    // What I have want is URL path with 2 :
    // floorplans/:seriesName/:modelName

    // Resulting in the static paths:
    // floorplans/series1/modelA
    // floorplans/series1/modelB
    // floorplans/series1/modelC
    // floorplans/series2/modelD
    // floorplans/series2/modelE

    //in scully.config.ts have object {}
    //  {
    //    routes {
    //      floorplans/Floorplanid
    //      type: json
    //      postRenderers[]
    //      floorplanId: {
    //      url
    //      property
    //      headers
    //}
    //    }
    //  }

# saturday
