## Instructions

### run app locally

npm install
npm run app

### build docker image

docker build -t test-marker-reporter .

### Run docker image

docker run -d --name test-marker-reporter -p 8231:9999 test-marker-reporter

### Access container

docker exec -ti testMarkerReporter sh

## GET /
https://stackabuse.com/guide-to-handlebars-templating-engine-for-node/
Populate field with back up (*)

## POST /generate
Returns text of readable assesment report
report stored in file (as backup)
Link to pass or fail, return generic response (with copy button)

## GET /backup
return backup text
button to form
button to generate report

## index.html
Add some styling (bootstrap), text box of appropriate size
positives and negatives text field (*)
text box for pass or fail generic response (with copy button)

## Instructions
on wiki
while assessing test
run docker image (location on artifactory)
go to http://localhost:8231/
Fill in form, hit submit
copy when happy and paste in form
location of last backup is ...

## Teamcity
git trigger
build image
push to artifactory

## Docker
