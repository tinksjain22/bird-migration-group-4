# Team 4 - Project 3 - Bird Migration Pattern & Affecting Factors

## Assignment Details
**Data Analytics Bootcamp - Project 3**: This project will illustrate bird migration patterns over time, and will show how natural disasters, human activities, and seasonality impact this.

## Team 4

* Morgan Bee
* Hardeep Gumber
* Tinkle Jain
* Jimmy Lee
* Jenny Liu

## Dataset Source Information

We used the following datasets to help us with our analysis: 

* BirdMap data: https://www.gbif.org 
* Endangered Species Data: https://www.gbif.org 
* Pitangus sulphuratus 2013 data: GBIF.org (28 November 2024) GBIF Occurrence Download https://doi.org/10.15468/dl.n7ry84
* Pitangus sulphuratus 2017 data: GBIF.org (28 November 2024) GBIF Occurrence Download https://doi.org/10.15468/dl.3qwzkd
* Wildfire Data: https://www.kaggle.com/datasets/imtkaggleteam/wildfires?select=2-+annual-area-burnt-by-wildfires.csv
* Brazil fire data: https://www.kaggle.com/datasets/gustavomodelli/forest-fires-in-brazil
* Brazil Geojson Coordinates: https://www.kaggle.com/datasets/thiagobodruk/brazil-geojson
* World Country Codes: https://gist.github.com/tadast/8827699
* Soybean Production Data: https://fas.usda.gov/data/production/commodity/2222000

## Usage Information

Please use this link: https://tinksjain22.github.io/bird-migration-group-4/dashboard.html to view and interact with our plots and to view the entire report. This analysis is meant to be viewed section by section. Begin with the overview of bird migratory paths and work your way through the affecting factors of these paths. For the interactive visualizations, use your mouse to hover over maps to get more information on location and bird species. For the animated visualizations, click the play button or select the year you wish to view on the slider bar at the bottom of the map. Finally, we have one leaflet map that plays through the visual one time. If you would like to see the map animated again, please refresh the page. You can also view each of our vizualizations independently by opening the html link in the designated folder above. 

You can view our full presentation here: https://gamma.app/docs/Bird-Migration-Patterns-Affecting-Factors-rn68nxx7vu9qef6?mode=doc. 

To view our data storage, please see the "ERD" folder in this repository with our SQL schema and ERD picture. 

## Ethical Considerations

Because our data came from public sources, we did not need to ensure we were violating particular privacy acts such as HIPAA. However, it is important to remember that the data we examine in this project would not be possible without the tragic decline in bird populations globally. Because of their dropping populations, changing migration patterns due to climate change and other affecting factors, we are able to use the data we have today. Even though it is exciting to find correlations as data analysts, we keep in mind the greater ecological changes taking place in our world right now. In our presentation conclusion, we review simple steps that our audience can take in order to help preserve our birds and their habitats for many years to come. 

In terms of our data used, we cite all of our sources (above) and did not require any special licenses to obtain the information that we examined in this project. GBIF data is collected as a citizens science project and the data managers were informed of the data being used as user accounts were created for data download. 

## Breakdown of Tasks

* Morgan: Wildfire data cleaning and mapping

* Hardeep: Bird migratory flight paths and biology expert

* Tinkle: Endangered species data cleaning and mapping

* Jimmy: Presentation manager and Gamma App developer

* Jenny: Soybean production data cleaning and mapping

## Libraries Used (not used in class)
* Seaborn
* Geopandas
* Plotly Express
* Plotly Graph Objects
* Cartopy
* Dash 
* Jupyter Dash

## Source Code Location

* Code for the Wildfire section was developed with help from the following sources: 
    * Google AI response for helping with Choropleth Map, Chat GPT to help with Choropleth Map, Xpert Learning Assistant to help with html file creation for dashboard creation
    * Team member assistance
    * Class activities
* Code for bird migration routes was developed using the leaflet exercises completed in the class and chatGPT.
  
## Acknowledgments & Other References

* Credits/authors of data sources and other information used: 
  * The coordinates for bird migration flyways was taken from https://datazone.birdlife.org/sowb/spotflyway
  * Bird images in the presentation are from gbif.org and wikipedia.org
  * Soybean production reference in presentation https://www.globalforestwatch.org/blog/forest-insights/soy-production-forests-south-america/
  * Presentation theme adapted from SlideNest using a commercial account https://slidenest.com/template/types-of-birds-biology-vibrant-presentation
