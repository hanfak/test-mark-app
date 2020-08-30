## Instructions

### run app locally

npm install
npm run app

### build docker image

docker build -t testMarkerReporter .

### Run docker image

docker run -d --name testMarkerReporter -p 8231:9999 testMarkerReporter

### Access container

docker exec -ti testMarkerReporter sh

## GET /
Return index.html
Contains form with submit button, and reset button
Populate field with back up (*)

## POST /generate
Returns text of readable assesment
stores in file (as backup)
html has copy button
Link to pass or fail, return generic response (with copy button)

## GET /backup
return backup text
button to form
button to generate report

## index.html
Add some styling (bootstrap), text box of appropriate size
likert scale, using radio buttons
text box to add user comments
positives and negatives text field
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

