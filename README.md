# Doctor Lookup

## By **Chris Sanchez**

This application will help you find doctors in Portland by searching either by the name of the doctor, including first, middle, and last name keywords, or by ailment/condition you are looking to be seen for.
- - - -
### Setup/Installation Requirements

![enter image description here](https://i.imgur.com/UStodOA.jpg "read")

#### Zip:

1. Click [here](https://github.com/sanchito59/doctor-lookup.git) to go to the repository location where you will find the clone/download menu.

 2. Navigate to the directory (folder) that contains your browser's downloads.
 3. Double-click on **Doctor Lookup** directory (folder).
 4. Open directory contents by extracting/unzipping documents from folder.
 5. Run index.html.

#### Clone: 

 1. To clone the repository, from your terminal or command line enter: "git clone  https://github.com/sanchito59/doctor-lookup.git"
 2. Once the repository finishes downloading you will need to install the packaged modules.

#### Install:
In order to use **Doctor Lookup** you will need to install the dependenices required to run it. Once you have cloned or zipped the file from Github, in your terminal or command line do the following: 

from _C:\Users\exampleUser\exampleCloneLocation\doctor-lookup>_  
1. npm install
2. npm run build

Step 1 will install all of the dependencies used to develop **Doctor Lookup**.  
Step 2 will build the project, performing any necessary building/prep tasks.

**_If you are using Mac OS, you must change:_** 

_"'start': 'npm run build & webpack-dev-server --open --mode development',"_  
**_to_**  
_"'start': 'npm run build; webpack-dev-server --open --mode development',"_

- - - -

### Specifications:

|Spec|Input|Output|
|---|---|---|
|User can enter a medical condition and view a list of doctors in Portland who specialize in treating it. |'Night terror'|Jane Doe M.D.|
|User can enter a name based on keyword and recieve a list of doctors who match that keyword.|'Beth'|Beth Doe M.D., Jane Beth Doe M.D. etc.|
|User can view the following information about a doctor: name, address, whether or not they are accepting new patients, website if available, and phone number. |'Jane'|Jane Doe M.D., Adie, OK, 1234 Medical Way, 91104, It is true that we are accepting new patients! www.janeDoeOffice.com  503-867-5309|
|If the API call fails, the user sees an error message. |"Beth" |Hmmm, something happened while searching for that.|
|If no doctors or conditions match the query the user sees an error message.|'Beth'|Hmmm, can't seem to find any results for that search term.|
- - - -

### Technologies Used

 - JavaScript/jQuery
 - Webpack Plugins
 - API
 - HTML5
 - CSS3/Bootstrap/SCSS

- - - -
### Support and Contact

If you run into any issues running **Doctor Lookup**, please contact **Chris Sanchez**.

### License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2019 **Chris Sanchez**

