CS2 EXEC BOOK — how to use
===========================

1. Just double-click index.html to open it in your browser. No server needed.

2. Everything you'd want to edit lives in data.js:
   - Add/remove maps in the top-level "maps" array.
   - Each map has "execs" (the rush/strat options for that map).
   - Each exec has "lineups" — one entry per piece of utility.

3. For each lineup, fill in:
   - caption: where the utility lands / what it does
   - stand:   path to the screenshot of where you stand
   - aim:     path to the screenshot of where you aim
   - inputs:  mouse ("left" | "right" | "both" | null), jump, w, shift, crouch
              — set anything to false/null and its badge just won't show.

4. Drop your screenshots into the /images folder (subfolders per map are
   already there: images/dust2, images/mirage, images/inferno, images/ancient
   — add more as needed) and point stand/aim at those paths in data.js.
   If an image path is missing or wrong, the card shows a "NO IMAGE" tile
   with the path it expected, instead of breaking.

5. Click any image to enlarge it in a lightbox. Use the S / M / L buttons
   above the grid to control how many lineups fit on screen at once.
