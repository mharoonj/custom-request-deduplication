# Steps to run
1. npm install or yarn 
2. npm run

# Prerequisites
**Must have cors extension in your browser**
Free APIs that are being used needs this cors extension to work properly, else System will show **Network Error**




------------

# How it works?
Currently there are 2 Components, **ComponentOne ** and **ComponentTwo**. Both  components use a custom hook named **useAPI**. Purpose of this hook is to handle same URL requests. For Example, if ComponentOne and ComponentTwo both fetches data from same URL, but they are sending two requests to network. However both are fetching same data there should have been only one request sent to network, who ever fires it first, and other should wait for its result.

In this task I am going to handle this problem. For it, I am using redux for state management. Urls from **gorest.com** (* they requiree cors extension enabled). 

#### Sequence of Program
Suppose, url is 'X'
###### For ComponentOne and ComponentTwo
1. ComponentOne is using useAPI hook to fetch data from url 'X'. 
2. It will check whether request for url 'X' is already in process or not. For it, it will first check in localstorage.
	**a**. 	If there is a key( which will be our url 'X' itself) present, it means this url is already 	fetching data. It will wait for previous execution to complete. 
	**b**.		 If url 'X' is not present then first it will store url as key in localstorage. Then dispatch loading action and data fetching action to store.
3. In redux store I am storing data in this format
```json
{ "data": {
                "www.google.com":{
	                  "data": ["...."], "loading":false, "error": false
					  },
					   "www.yahoo.com":{
	                  "data": ["...."], "loading":false, "error": false
					  }
			} 
	}
```
4. So whenever a loading, error or data fetching action is dispatched, it changes data in redux store for that particular key, for example in google.com.
5. If a Component, lets say calls same url after 10 mins , now it will get data from store instead of making network call. 
6. Thats how i am handling request deduplication.

##### Data Flow Diagram 


![alt text](https://github.com/mharoonj/pics/blob/master/New%20Doc%202022-02-06%2023.29.25.jpg?raw=true)

