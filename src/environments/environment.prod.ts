export const environment = {
    production: true,
    API: {
        BASE_URL: 'https://hhcwebapi.azurewebsites.net/api',
    },
    fp: 'scullyfloorplans'
};


//environment variable fp is used to toggle which API I call
//api with floorplans end point returns spaces
//api with scullyfloorplans replaces spaces with '-'