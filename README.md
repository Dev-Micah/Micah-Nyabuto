# Micah Nyabuto — portfolio

A lightweight, single-page portfolio made with plain HTML, CSS and JavaScript.

## Add your files and finish the placeholders

- **CV PDF:** save your PDF as `assets/Micah-Nyabuto-CV.pdf`. The Download CV button already points there.
- **Photo:** save a portrait as `assets/micah-nyabuto.jpg`. The initials placeholder will be replaced automatically when the image is present.
- **Before publishing:** add employment dates and check the role order; check WhatsApp availability for your number; and add a LinkedIn URL if you want one.
- **Sample work:** create your own sales tracker, weekly report or presentation, then replace the placeholder descriptions in the Projects section with links to those files. Do not link private or client-confidential material.
- **Project links:** the CV contains a store link for CoinSphere and a GitHub profile link for Heron. Add direct repository/project links if you have them.

## Preview locally

Open `index.html` in a browser. For a local web-server preview, run this from the portfolio folder:

```sh
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C`.

## Deploy for free

### GitHub Pages

1. Create a GitHub repository and add the portfolio files, including the `assets` folder and your CV PDF/photo.
2. Push the files to the repository's `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Open the published URL shown in the Pages settings.

### Netlify

1. Sign in to Netlify and choose **Add new site → Deploy manually**.
2. Drag the portfolio folder (with your `assets` files) into the deploy area, or connect its GitHub repository.
3. No build command or publish directory configuration is needed for this static site.
4. Open the site URL Netlify provides.
