# My 🏠 on the ☁️

My personal over-engineering site on the cloud.

Changes from parent project

\+ gallery

\- snippets

\- language changer

\+ manual sitemap

\+ flag indonesia

## Tech stack

This blog is hosted on [Vercel](https://vercel.com/), built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) using **Tailwind Nextjs Starter Blog**.

A huge thanks to [Leo]([https://twitter.com/timlrxx](https://github.com/hta218)) for the minimal, lightweight, and super easy-to-customize blog template.

## Assets

The images in this blog are from [Unsplash](https://unsplash.com/), gifs from [GIPHY](https://giphy.com/), and illustrations are from [Storyset](https://storyset.com/).

Thanks for the free resources 🙏

## Installation
Lack of documentation makes this hard for newbie like us. I hope this will help.

**Run the website in localhost**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## FAQ

<details>
<summary><b>'PORT' is not recognized as an internal</b></summary>
  
If you got this error, then
```
'PORT' is not recognized as an internal or external command, operable program or batch file.
```

Open package.json and add "set" in front of PORT
```
"start": "set PORT=3434 next-remote-watch ./data",
```
</details>

<details>
<summary><b>How to change the text in the website?</b></summary>
<br>
Open <b>public\locales\en\common.json</b>, just look at whats inside, you will know what to do.
</br>
</details>

<details>
<summary><b>How to config the website?</b></summary>
<br>
Open <b>data\siteMetadata.ts</b>b>, just look at whats inside, you will know what to do.
</br>
</details>

<details>
<summary><b>How to config spotify?</b></summary>

Open [spotify dev](https://developer.spotify.com/dashboard)

1. Login

2. Click on ‘Create an app’.

3. Pick an ‘App name’ and ‘App description’ of your choice and mark the checkboxes.

4. After creation, you see your ‘Client Id’ and you can click on ‘Show client secret` to unhide your ’Client secret’. Click your app, that u have made
   ![image](https://github.com/Shizu-ka/shizuka-profile/assets/58659139/c30f4731-37ae-4783-8392-0b98d1a29b20)
   
6. Then click settings, Voila!
   ![image](https://github.com/Shizu-ka/shizuka-profile/assets/58659139/0324803d-a55e-4a6e-95b1-d0fc3325a8a8)

8. Use your ‘Client id’ and ‘Client secret’ to retrieve a token from the Spotify API.



**How to get spotify refresh token?**

1. Get your Spotify client_id and client_secret
2. Get your access code
   Visit the following URL after replacing $CLIENT_ID, $SCOPE, and $REDIRECT_URI with the information you noted in Step 1. Make sure the $REDIRECT_URI is URL encoded.

   ```
   https://accounts.spotify.com/authorize?response_type=code&client_id=$CLIENT_ID&scope=$SCOPE&redirect_uri=$REDIRECT_URI
   ```
   It will looks like this 
   ```
   https://accounts.spotify.com/authorize?response_type=code&client_id=$CLIENT_ID&scope=user-read-currently-playing&redirect_uri=https%3A%2F%2Fshizuka.my.id%2F
   ```

   **You need to convert your website to URL Format for REDIRECT_URI, you can use this tool**
   [convert](https://www.url-encode-decode.com/)
4. Get code from the redirect URL
I was redirected to the following URL because my redirect URI was set to https://shizuka.my.id. In place of $CODE there was a very long string of characters. Copy that string and note it down for use in Step 4.
```
https://shizuka.my.id/?code=$CODE
```
4. Get the refresh token
   Running the following CURL command will result in a JSON string that contains the refresh token, in addition to other useful data. Again, either replace or export the following variables in your shell $CILENT_ID, $CLIENT_SECRET, $CODE, and $REDIRECT_URI.

   ```
   curl -d client_id=$CLIENT_ID -d client_secret=$CLIENT_SECRET -d grant_type=authorization_code -d code=$CODE -d redirect_uri=$REDIRECT_URI https://accounts.spotify.com/api/token
   ```

   The result will be a JSON string similar to the following. Take the refresh_token and save that in a safe, private place. This token will last for a very long time and can be used to generate a fresh access_token whenever it is needed.
```
   {
    "access_token": "$ACCESS_TOKEN",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "$REFRESH_TOKEN",
    "scope": "user-read-currently-playing"
    }
```
</details>

<details>
<summary><b>How to edit navbar?</b></summary>
<br>
Open <b>data\headerNavLinks.ts</b>, just look at whats inside, you will know what to do.
</br>
</details>

<details>
<summary><b>How to turn on/off the language option?</b></summary>
<br>
Open <b>components\Header.tsx</b> line 53, just look at whats inside, you will know what to do.
</br>
</details>

<details>
<summary><b>How to CRUD blog, snippets?</b></summary>
<br>
Open <b>data\en\blog</b> and <b>data\en\snippets</b> just look at whats inside, you will know what to do.
</br>
</details>

<details>
<summary><b>Where to put the picture u are using?</b></summary>
<br>
Just put in <b>public\static\images</b>
</br>
</details>

<details>
<summary><b>How to CRUD projects?</b></summary>
<br>
Open <b>data\en\projectsData.ts</b>, just look at whats inside, you will know what to do. Same as gallery
</br>
</details>

If you have any question, feel free to email me at <a href="mailto:shizuka0@proton.me">Shizuka</a>

Copyright (c) 2023 Shizuka - Alrights reserved.
