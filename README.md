
    
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
