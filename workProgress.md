## Constellations list and Name

The first problem is to collect all the constellations names. Luckily a .csv file was found from kaggle's dataset. This dataset also includes the English name beside the Latin name of constellations as well as the brightest star of that constellation.

## Scrapping Information from Wikipedia and creating a json file

Wikipedia has lots of information regarding constellations, their properties, names, starts etc. In the scope of our project we will only need introductory information of each constellation and its main stars.

- For scrapping the information from wikipedia it was noticed that their urls have specific format for single word constellation names and double word constellation names.

- BeautifulSoup was used to scrap the information. Prior to scrapping our dataset was processed accordingly, so that http request does not end up in a 404. A simple function was developed to find ' ' (spaces) between names and change it to an _ (underscore) for double word constellations and simply add an _ at the end of a single named constellation.

- Only the first two paragraphs from each constellation were saved with the constellation name, the brightest star and other information and this attributes were transformed into a dictonary which later appended to a list and thus creating the sample.json file.

## Showing picture from an API

Showing a constellation's pic from an api call was tried but failed due to not appropriate tagging of api images or muliple meaning and various usage of constellation names in multiple situation/objects.

- We will once again resort to scrapping images from wikipedia as it has more flexibility for using its open-source images

## More details about the brightest star for each constellation

- An api from api ninja called 'Stars' was used to display more information for each constellations brightest stars.
