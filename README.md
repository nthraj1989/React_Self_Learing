# Learn-React

#we should never push node_module to the git

#package-lock.json and package.json should be passed and when we run the command npm install in server it will
# install the node_modules.

#commands -> 
npm init
npm install -D parcel(this will download the node_modules folder in local repo)


npx parcel index.html=> This start the server


import and export module
 -> there are two types of exports-> 
       1)export and default exports
          a)we can any number of export in an page but we can have only one default export.
          b)for import we need to have follow the below syntax
             -> import {useState} from 'react' => this is named export where we wrap the name inside {}
             -> import react from 'react' => this is default export where we don't wrap the react




ReackHook: It is a simple JS function with some powerful feature/functionality in it.  There are many types of hook.

i) useState: This hooks helps in managing the state of the component. One the state is updated the whole component gets re-rendered. Once the component is re-rendered the data gets updated with the UI.

         
ii)