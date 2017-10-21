
Technical architecture includes node.js , express framework along with ejs. Lodash.js is also being used. <br>
Website is currently hosted in Microsoft Azure Portal with continuous integration on.<br>
<br>
Url : http://affordable.azurewebsites.net
<br>


<h1> Fork this  Megan Repository to start building on top of it <br> </h1>
-- Megan rep --https://github.com/maggienj/Megan <br>
-- Prince_housing --https://github.com/maggienj/Prince_housing <br> ( this is a previous version v0.1... using node and angular )

To run Megan app follow these steps: <br>
1. Fork Megan Repository <br>
2. Open web app in Jetbrains IDE (or any preferred IDE) <br>
3. Run app <br>

To run the Megan app using Atom as your preferred editor: <br>
1. Fork the Megan repository to your personal github account <br>
2. Clone your copy of the Megan repository to your dev machine <br>
3. Make sure you have npm installed on your machine <br>
4. Install 'express.js' by running <code>npm install express -g</code> inside the /Megan folder from a terminal. <br>
5. Also inside the /Megan folder, run <code>npm install</code> <br>
6. In the same folder, run: <code>node app.js</code> <br>
7. Open a web browser to <code>http://localhost:8080</code> and start coding!<br>
<br>
<br>
** Affordable Housing Project **
> -- using the code for America template <br>
https://docs.google.com/document/d/1KaApjflNS7NRHaEGEZGmotNzi27TqshKtoCn12L6I0g/edit?usp=sharing

** References **
> Any references, data sources, articles, additional documents, etc. <br>
> https://github.com/maggienj/Prince_housing/blob/master/Outline_forDan.txt <br>
> https://github.com/maggienj/Prince_housing/blob/master/lookupData_info.txt <br>
> https://github.com/maggienj/Prince_housing/blob/master/nj-housing-incomelimits.pdf <br>

** June 9 - 2016 **
Transformation of lookup data.  From PDF to CSV to JSON - Done! <br>

Use this latest uploaded JSON file. (lkpDataV3.json) <br>
-- A section of the pdf file was transformed to CSV. <br>
-- Then, the csv file has ben transformed to JSON. <br>
-- In addition, the JSON file has been modified slightly to remove $ and commas. <br>
-- This JSON file contains data relevant to Region-4 Mercer, Monmouth and Ocean. This is the only region which is applicable to affordable housing project. Therefore, only this region is inlcuded in JSON file. <br>

Link to the latest JSON file-- https://github.com/maggienj/Prince_housing/blob/master/lkpDataV3.json  <br>

Converter Used : http://codebeautify.org/csv-to-xml-json <br><br>

For the upcoming hackathon June 10 , 2016 <br>
-- Notes by MaggieNJ -- Jun 10 , 2016 --- <br>
** the below link contains a nodejs web app which uses the above json file. <br>
https://github.com/maggienj/Megan <br>
It uses lodash to filter and query the above lookup data json file. The code for it is in app.js <br>
The next step is to move that section of code to "qualify" page and set that as an action for submit button with few more modifications
<br>

** Next set of tasks are listed here. Keep updating the status as you complete each one of these tasks.
<br>
* If multiple people working on this , then, distribute these steps to individuals for faster completion. <br>
* If not mulitples (solo),  then execute these steps in the same order... The last step is to beautify it.
* Fork this repository to your github repo and start working on each and every step<br>
-- Task#1 -- Move the section of code related to lodash and lookup data json parsing to "qualify" page.
<br>
------ Status -- as of Mar 3, 2017 - completed by Sunita.
<br> <br>
-- Task#2 -- Get the submit button working in "qualify" page.
<br>
------ Status -- as of Mar 3, 2017 - completed by Sunita
<br><br>
-- Task#3 -- Instead of Zip code, add the county name in a pul down list.  List only Mercer , Monmouth and Ocean county names.
<br>
------ Status --
<br> <br>
-- Task#4 -- Add "Type" as an input field to "qualify page".  Use drop down list.  Values for the drop down list are, Median, Moderate, Low and Very Low.  ( Currently, I have hard coded "Moderate"  in app.js , remove this hard coding and accept it from the user directly)
<br>
------ Status --
<br> <br>
-- Task#5 -- Once the submit button in "qualify page" is clicked, it should lookup the json file and output the result as "You are eligible for Affordable Housing in Princeton" or .......
<br>
------ Status -- 
<br> 

Tasks for October 2017 Hackathon
-- Task#6 -- affPDf folder has a few PDF forms.<br>
Pick up any simple form in that folder and
then start creating html forms similar to it. <br>
Create fields in PDF form.
Populate values from HTML to fields in PDF<br>
Save pdf in a different folder ... megan/outputPDF 
<br>

--
--
-- Task#99 -- Beautify the layout with bootsrap. Bootstrap css, js and fonts have been downloaded and placed in css, js and fonts directory. Use the Jumbotron wide template for responsive websites. The meta tag has been added to make it as a responsive website to show legibly in all devices. Continue on this and build this as a responsive website..


For the upcoming hackathon June 10 , 2016 <br>
----------------------------------------- <br>
We need members to complete the above steps <br>
We need members to prepare a ppt to explain about Aff Housing <br>
We need members to present this ppt and the website on Sunday. <br>

If you would like to take part in this AffHousing project, then let me know which task you would like to contribute on.


Other Resources:
More Info is at http://www.princetonnj.gov/affordable/mercer-contacts.html

Application Form:
http://www.princetonnj.gov/affordable/AffordableHousing_Application.pdf




Aug 27 update:
We have received the pdf forms from Melissa, but they were scanned paper forms.
We have requested for the actual digital pdf form so that we could create fields and auto populate the values form html form


