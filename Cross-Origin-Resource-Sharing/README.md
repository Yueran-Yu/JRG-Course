## Test CORS and JSONP
### 1. Install **node-dev**
>Run ```yarn global add node-dev```

### 2. Run **qq.com**
> #### Under the folder **qq.com**
> Run ```node-dev server.js 8888```


### 3. Run **frank.com**
> #### Under the folder **frank.com**
> Run ```node-dev server.js 9999```

### 4. Modify Hosts file (For  MAC)
> (1) Launch **Terminal**, type ```sudo nano/private/etc/hosts``` and press **Return**, then enter your admin password to execute it.
>
> (2) You are now in the ```Nano Editor```. Use the arrow keys on your keyboard and navigate to the bottom of the file, add two lines.
> > ```127.0.0.1    qq.com```
>
> > ```127.0.0.1    frank.com```
>
> (3) Press ```Control-O``` to save the file.


### 5. Modify Hosts file (For  Windows)
> (1) Click ```Start``` type ```notepad```, right click it and select ```Run as Administrator```
>
> (2) Click ```File``` tab then select ```Open```, go to your system root folder, most commonly ```C:\Windows``` and navigate to ```System32\drivers\etc```, on the right conner select ```All files(**)```, select  ```hosts``` file
>
> (3) Go to the bottom of the file and add the desired IP followed by the host name (or domain name). Save the file and you are all set.

#### Once you have change the hosts file and  run ```node-dev server.js``` fro each folder(frank.com and qq.com), you can replace the URL in the Browser correspondingly.
> ```qq.com:8888/index.html```  replace ```localhost:8888/index.html```
>
> ```frank.com:9999/index.html``` replace ```localhost:9999/index.html```





