# demo-cypress

#build docker image
docker build . -t demo-cypress-image

#run cypress test in container from above image
#in Windows
docker run --name demo-cypress-container -it demo-cypress-image -v %cd%:/opt/app npm run runAllTestCases
#in MacOS / Linux
docker run --name demo-cypress-container -it demo-cypress-image -v $PWD:/opt/app npm run runAllTestCases
