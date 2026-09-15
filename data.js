/* ==========================================================================
   CS2 EXEC BOOK — DATA FILE
   ==========================================================================
   This is the only file you need to edit to add your own content.

   HOW TO ADD IMAGES
   ------------------
   Put your screenshots in the /images folder (make subfolders per map if you
   like, e.g. images/dust2/). Then point "stand" and "aim" at those paths.
   If a path is wrong or missing, the site will show a placeholder tile
   instead of breaking — so it's safe to write out the data first and drop
   images in later.

   HOW INPUTS WORK
   ----------------
   mouse   : "left" | "right" | "both" | null   (null / omitted = don't show)
   jump    : true | false
   w       : true | false
   shift   : true | false   (walking / shift key)
   crouch  : true | false
   Only inputs set to true (or a non-null mouse) render a badge. Anything
   false or null is simply omitted, per the "no" = hidden rule.
   ========================================================================== */

const CS2_DATA = {
  maps: [
    {
      id: "dust2",
      name: "Dust II",
      accent: "#d99a3f",
      execs: [
        {
          id: "dust2-b-tunnels-exec",
          name: "B Tunnels Exec",
          side: "T",
          note: "Window + Doors Smoke",
          lineups: [
            {
              id: "dust2-b-lurk-smoke",
              caption: "Tunnels Lurk Smoke",
              stand: "images/dust2/b-lurk-smoke-stand.png",
              aim: "images/dust2/b-lurk-smoke.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "dust2-b-window-smoke",
              caption: "Window Smoke",
              stand: "images/dust2/b-window-door-smoke-stand.png",
              aim: "images/dust2/b-window-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "dust2-b-door-smoke",
              caption: "Window Smoke",
              stand: "images/dust2/b-window-door-smoke-stand.png",
              aim: "images/dust2/b-door-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "dust2-b-site-flash",
              caption: "Deep Flash",
              stand: "images/dust2/b-flash-stand.png",
              aim: "images/dust2/b-flash.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "dust2-b-site-flash2",
              caption: "Entry Flash",
              stand: "images/dust2/b-flash2-stand.png",
              aim: "images/dust2/b-flash2.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "dust2-b-site-molly",
              caption: "Entry Flash",
              stand: "images/dust2/b-site-molly-stand.png",
              aim: "images/dust2/b-site-molly.png",
              inputs: {
                mouse: "left",
                w: true,
                jump: true,
              },
            },
          ],
        },
        {
          id: "dust2-mid-to-b-exec",
          name: "Mid to B Exec",
          side: "T",
          note: "CT Smoke + Flashes",
          lineups: [
            {
              id: "dust2-mid-to-b-smoke",
              caption: "Mid to B Smoke",
              stand: "images/dust2/mid-to-b-stand1.png",
              aim: "images/dust2/mid-to-b-smoke.png",
              inputs: {
                mouse: "left",
                crouch: true,
                jump: true,
              },
            },
            {
              id: "dust2-mid-flash",
              caption: "Doors Flash",
              stand: "images/dust2/mid-to-b-stand1.png",
              aim: "images/dust2/doors-flash.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "dust2-ct-mid-flash",
              caption: "CT-Mid Flash",
              stand: "images/dust2/ct-mid-flash-stand.png",
              aim: "images/dust2/ct-mid-flash.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "dust2-outer-b-flash",
              caption: "B Site Flash from CT-Mid",
              stand: "images/dust2/ct-mid-b-site-flash-stand.png",
              aim: "images/dust2/ct-mid-b-site-flash.png",
              inputs: {
                mouse: "left",
              },
            },
          ],
        },
        {
          id: "dust2-a-long-exec",
          name: "A Long Exec",
          side: "T",
          note: "Corner & Cross Smoke + Car Molly",
          lineups: [
            {
              id: "dust2-a-long-corner-smoke",
              caption: "Corner Smoke",
              stand: "images/dust2/a-long-corner-smoke-stand.png",
              aim: "images/dust2/a-long-corner-smoke.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "dust2-a-long-car-molly",
              caption: "Car Molly",
              stand: "images/dust2/a-long-car-molly-stand.png",
              aim: "images/dust2/a-long-car-molly.png",
              inputs: {
                mouse: "left",
                jump: true,
                w: true,
              },
            },
            {
              id: "dust2-a-long-ct-cross-smoke",
              caption: "CT Cross Smoke",
              stand: "images/dust2/a-long-ct-cross-smoke-stand.png",
              aim: "images/dust2/a-long-ct-cross-smoke.png",
              inputs: {
                mouse: "both",
                jump: true,
              },
            },
          ],
        },
        {
          id: "dust2-a-short-exec",
          name: "A Short Exec",
          side: "T",
          note: "Short Molly and Smoke Wall",
          lineups: [
            {
              id: "dust2-a-short-molly",
              caption: "Short Molly",
              stand: "images/dust2/a-short-molly-stand.png",
              aim: "images/dust2/a-short-molly.png",
              inputs: {
                mouse: "left",
                jump: true,
                w: true,
              },
            },
            {
              id: "dust2-a-short-smoke2",
              caption: "Smoke Wall",
              stand: "images/dust2/a-short-smoke-stand.png",
              aim: "images/dust2/a-short-smoke2.png",
              inputs: {
                mouse: "both",
              },
            },
            {
              id: "dust2-a-short-smoke1",
              caption: "Smoke Wall",
              stand: "images/dust2/a-short-smoke-stand.png",
              aim: "images/dust2/a-short-smoke1.png",
              inputs: {
                mouse: "left",
                crouch: true,
              },
            },
          ],
        },
      ],
    },
    {
      id: "mirage",
      name: "Mirage",
      accent: "#4fb3bf",
      execs: [
        {
          id: "mirage-a-ramp",
          name: "A Ramp Exec",
          side: "T",
          note: "Full Site Smoke, Flash Site, Molly Lower Palace. Optional Lurk Smokes.",
          lineups: [
            {
              id: "mirage-ramp-stairs-smoke",
              caption: "Stairs Smoke",
              stand: "images/mirage/a-ramp-stand1.png",
              aim: "images/mirage/a-ramp-stairs-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
                w: false,
                shift: false,
                crouch: false,
              },
            },
            {
              id: "mirage-ramp-jungle-smoke",
              caption: "Jungle Smoke",
              stand: "images/mirage/a-ramp-stand1.png",
              aim: "images/mirage/a-ramp-jungle-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
                w: false,
                shift: false,
                crouch: false,
              },
            },
            {
              id: "mirage-ramp-ct-smoke",
              caption: "CT Smoke",
              stand: "images/mirage/a-ramp-stand1.png",
              aim: "images/mirage/a-ramp-ct-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
                w: false,
                shift: false,
                crouch: false,
              },
            },
            {
              id: "mirage-ramp-ramp-flash",
              caption: "Ramp Flash",
              stand: "images/mirage/a-ramp-stand2.png",
              aim: "images/mirage/a-ramp-ramp-flash.png",
              inputs: {
                mouse: "left",
                jump: false,
                w: false,
                shift: false,
                crouch: false,
              },
            },
            {
              id: "mirage-ramp-ramp-flash2",
              caption: "Ramp Self Flash",
              stand: "images/mirage/a-ramp-stand3.png",
              aim: "images/mirage/a-ramp-ramp-flash2.png",
              inputs: {
                mouse: "left",
                jump: false,
                w: true,
                shift: false,
                crouch: false,
              },
            },
            {
              id: "mirage-ramp-balcony-molly",
              caption: "Ramp Entry Balcony Molly",
              stand: "images/mirage/a-ramp-stand4.png",
              aim: "images/mirage/a-ramp-balcony-molly.png",
              inputs: {
                mouse: "left",
                jump: false,
                w: true,
                shift: false,
                crouch: false,
              },
            },
            {
              id: "mirage-triple-molly",
              caption: "Triple Molly",
              stand: "images/mirage/a-triple-molly-stand.png",
              aim: "images/mirage/a-triple-molly.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "mirage-ramp-lurk-smoke",
              caption: "Ramp Lurk Smoke - Counters Ramp Smoke",
              stand: "images/mirage/a-ramp-lurk-stand.png",
              aim: "images/mirage/a-ramp-lurk.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "mirage-ramp-lurk-smoke-lineup",
              caption: "Ramp Lurk Smoke - Lineup For When Smoked Off",
              stand: "images/mirage/a-ramp-lurk-lineup-stand.png",
              aim: "images/mirage/a-ramp-lurk-lineup.png",
              inputs: {
                mouse: "left",
              },
            },
          ],
        },
        {
          id: "mirage-a-balcony",
          name: "A Balcony Exec",
          side: "T",
          note: "Jungle + Stairs Smoke, Molly Dark. Optional Lurk Smokes.",
          lineups: [
            {
              id: "mirage-palace-jungle-smoke",
              caption: "Jungle Smoke",
              stand: "images/mirage/a-palace-stand1.png",
              aim: "images/mirage/a-palace-jungle-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
                w: true,
                shift: false,
                crouch: false,
              },
            },
            {
              id: "mirage-palace-stairs-smoke",
              caption: "Stairs Smoke",
              stand: "images/mirage/a-palace-stand2.png",
              aim: "images/mirage/a-palace-stairs-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
                w: true,
                shift: false,
                crouch: false,
              },
            },
            {
              id: "mirage-palace-dark-molly",
              caption: "Dark Molly",
              stand: "images/mirage/a-palace-stand3.png",
              aim: "images/mirage/a-palace-dark-molly.png",
              inputs: {
                mouse: "left",
                jump: false,
                w: true,
                shift: false,
                crouch: false,
              },
            },
            {
              id: "mirage-balcony-lurk-smoke-1",
              caption: "Balcony Lurk Smoke - Isolate Fights In Hell",
              stand: "images/mirage/a-balcony-lurk-smoke1-stand.png",
              aim: "images/mirage/a-balcony-lurk-smoke1.png",
              inputs: {
                mouse: "left",
                jump: true,
                crouch: false,
              },
            },
            {
              id: "mirage-balcony-lurk-smoke-2",
              caption:
                "Balcony Lurk Smoke - Isolate Fights Above - Higher Crosshair Means Less Smoke",
              stand: "images/mirage/a-balcony-lurk-smoke2-stand.png",
              aim: "images/mirage/a-balcony-lurk-smoke2.png",
              inputs: {
                mouse: "left",
              },
            },
          ],
        },

        {
          id: "mirage-mid-to-A",
          name: "Mid To A",
          side: "T",
          note: "Con, Mid, and Site Smoke",
          lineups: [
            {
              id: "mirage-mid-window-smoke",
              caption: "Window Smoke",
              stand: "images/mirage/mid-stand1.png",
              aim: "images/mirage/mid-window-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
                d: true,
              },
            },
            {
              id: "mirage-top-mid-smoke",
              caption: "Top Mid Smoke",
              stand: "images/mirage/mid-stand2.png",
              aim: "images/mirage/mid-top-mid-smoke.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "mirage-mid-jungle-smoke",
              caption: "Jungle Smoke",
              stand: "images/mirage/mid-jungle-smoke-stand.png",
              aim: "images/mirage/mid-jungle-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "mirage-top-con-smoke",
              caption: "Top Con Smoke",
              stand: "images/mirage/mid-box-stand.png",
              aim: "images/mirage/mid-top-con-smoke.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "mirage-mid-jungle-smoke2",
              caption: "Jungle Smoke",
              stand: "images/mirage/mid-box-stand.png",
              aim: "images/mirage/mid-jungle-smoke2.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "mirage-mid-deep-con-molly",
              caption: "Deep Con Molly",
              stand: "images/mirage/mid-con-deep-molly-stand.png",
              aim: "images/mirage/mid-con-deep-molly.png",
              inputs: {
                mouse: "left",
              },
            },
          ],
        },
        {
          id: "mirage-mid-to-b",
          name: "Mid To B",
          side: "T",
          note: "Con, Mid, and Site Smoke",
          lineups: [
            {
              id: "mirage-mid-con-smoke",
              caption: "Con Smoke",
              stand: "images/mirage/mid-stand1.png",
              aim: "images/mirage/mid-con-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "mirage-mid-window-smoke",
              caption: "Window Smoke",
              stand: "images/mirage/mid-stand1.png",
              aim: "images/mirage/mid-window-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
                d: true,
              },
            },
            {
              id: "mirage-b-site-smoke",
              caption: "B Site Smoke",
              stand: "images/mirage/mid-b-site-smoke-stand.png",
              aim: "images/mirage/mid-b-site-smoke.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "mirage-mid-ladder-molly",
              caption:
                "Ladder Molly - Strafe Back Into Bench - Make Sure To Break Grate",
              stand: "images/mirage/mid-ladder-molly-stand.png",
              aim: "images/mirage/mid-ladder-molly.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "mirage-mid-arch-molly",
              caption: "Arch Molly",
              stand: "images/mirage/mid-arch-molly-stand.png",
              aim: "images/mirage/mid-arch-molly.png",
              inputs: {
                mouse: "both",
                jump: true,
              },
            },
          ],
        },
        {
          id: "mirage-b-apts",
          name: "B Apts Exec",
          side: "T",
          note: "Market & Short Smoke + Bench & Arch Molly",
          lineups: [
            {
              id: "mirage-b-market-smoke",
              caption: "Market Window Smoke",
              stand: "images/mirage/b-stand1.png",
              aim: "images/mirage/b-market-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "mirage-b-short-smoke",
              caption: "Short Smoke",
              stand: "images/mirage/b-stand1.png",
              aim: "images/mirage/b-short-smoke.png",
              inputs: {
                mouse: "both",
                jump: true,
              },
            },
            {
              id: "mirage-b-bench-molly",
              caption: "Bench Molly",
              stand: "images/mirage/b-stand2.png",
              aim: "images/mirage/b-bench-molly.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "mirage-b-arch-molly",
              caption: "Arch Molly",
              stand: "images/mirage/b-arch-molly-stand.png",
              aim: "images/mirage/b-arch-molly.png",
              inputs: {
                mouse: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "inferno",
      name: "Inferno",
      accent: "#c9553a",
      execs: [
        {
          id: "inferno-banana-ct",
          name: "Banana Control - CT",
          side: "CT",
          note: "Deep Banana Smoke, Halfwall Pop Flash",
          lineups: [
            {
              id: "inferno-deep-banana-smoke1",
              caption: "Deep Banana Smoke",
              stand: "images/inferno/b-deep-banana-smoke1-stand.png",
              aim: "images/inferno/b-deep-banana-smoke1.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "inferno-deep-banana-smoke2",
              caption: "Deep Banana Smoke",
              stand: "images/inferno/b-deep-banana-smoke2-stand.png",
              aim: "images/inferno/b-deep-banana-smoke2.png",
              inputs: {
                mouse: "left",
                w: true,
              },
            },
            {
              id: "inferno-halfwall-flash-1",
              caption: "Halfwall Flash",
              stand: "images/inferno/b-halfwall-flash1-stand.png",
              aim: "images/inferno/b-halfwall-flash1.png",
              inputs: {
                mouse: "right",
                jump: true,
              },
            },
            {
              id: "inferno-halfwall-flash-2",
              caption: "Halfwall Flash",
              stand: "images/inferno/b-halfwall-flash2-stand.png",
              aim: "images/inferno/b-halfwall-flash2.png",
              inputs: {
                mouse: "right",
              },
            },
            {
              id: "inferno-halfwall-he",
              caption: "Halfwall HE/Banana Flash",
              stand: "images/inferno/halfwall-he-stand.png",
              aim: "images/inferno/halfwall-he.png",
              inputs: {
                mouse: "left",
                jump: true,
                w: true,
              },
            },
          ],
        },
        {
          id: "inferno-banana-t",
          name: "Banana Control - T",
          side: "T",
          note: "Karrigan Smoke, Car Molly",
          lineups: [
            {
              id: "inferno-deep-banana-smoke1",
              caption: "Deep Banana Smoke",
              stand: "images/inferno/karrigan-smoke-stand.png",
              aim: "images/inferno/karrigan-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
                w: true,
              },
            },
            {
              id: "inferno-car-molly",
              caption: "Car Molly",
              stand: "images/inferno/car-molly-stand.png",
              aim: "images/inferno/car-molly.png",
              inputs: {
                mouse: "left",
              },
            },
          ],
        },
        {
          id: "inferno-b-t",
          name: "B Pop - T",
          side: "T",
          note: "CT Smoke + Orange Molly",
          lineups: [
            {
              id: "inferno-ct-smoke1",
              caption: "CT Smoke",
              stand: "images/inferno/ct-smoke1-stand.png",
              aim: "images/inferno/ct-smoke1.png",
              inputs: {
                mouse: "both",
                jump: true,
                w: true,
              },
            },
            {
              id: "inferno-ct-smoke2",
              caption: "CT Smoke",
              stand: "images/inferno/ct-smoke2-stand.png",
              aim: "images/inferno/ct-smoke2.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "inferno-ct-smoke3",
              caption: "CT Smoke",
              stand: "images/inferno/orange-molly-stand.png",
              aim: "images/inferno/ct-smoke3.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "inferno-orange-molly",
              caption: "Orange Molly",
              stand: "images/inferno/orange-molly-stand.png",
              aim: "images/inferno/orange-molly.png",
              inputs: {
                mouse: "left",
              },
            },
          ],
        },
        {
          id: "inferno-mid-t",
          name: "Mid Control - T",
          side: "T",
          note: "Bracket Smoke, Arch Smoke, Boiler Molly",
          lineups: [
            {
              id: "inferno-bracket-smoke",
              caption: "Bracket Smoke",
              stand: "images/inferno/bracket-smoke-stand.png",
              aim: "images/inferno/bracket-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "inferno-arch-smoke",
              caption: "Arch Smoke",
              stand: "images/inferno/arch-smoke-stand.png",
              aim: "images/inferno/arch-smoke.png",
              inputs: {
                mouse: "both",
                jump: true,
                w: true,
              },
            },
            {
              id: "inferno-quad-molly",
              caption: "Quad Molly",
              stand: "images/inferno/quad-molly-stand.png",
              aim: "images/inferno/quad-molly.png",
              inputs: {
                mouse: "left",
                w: true,
              },
            },
          ],
        },
        {
          id: "inferno-apts-t",
          name: "Apts Pop - T",
          side: "T",
          note: "Apts Molly, Halls Flash, Balcony Smoke",
          lineups: [
            {
              id: "inferno-apts-molly",
              caption: "Apts Molly",
              stand: "images/inferno/apts-molly-stand.png",
              aim: "images/inferno/apts-molly.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "inferno-halls-flash",
              caption: "Halls Flash",
              stand: "images/inferno/halls-flash-stand.png",
              aim: "images/inferno/halls-flash.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "inferno-balcony-smoke",
              caption:
                "Balcony Smoke - Moto might be able to hit you on the drop to mini pit, crouch and/or flash to minimize risk",
              stand: "images/inferno/balcony-smoke-stand.png",
              aim: "images/inferno/balcony-smoke.png",
              inputs: {
                mouse: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ancient",
      name: "Ancient",
      accent: "#7a8f5c",
      execs: [
        {
          id: "ancient-mid-ct",
          name: "Mid Control - CT",
          side: "CT",
          note: "Insta Elbow Smoke, Molly HE Elbow + Flash",
          lineups: [
            {
              id: "ancient-elbow-insta1",
              caption: "Elbow Insta 1",
              stand: "",
              aim: "images/ancient/elbow-insta1.png",
              inputs: {
                mouse: "left",
                w: true,
                shift: true,
                jump: true,
              },
            },
            {
              id: "ancient-elbow-insta2",
              caption: "Elbow Insta 2",
              stand: "",
              aim: "images/ancient/elbow-insta2.png",
              inputs: {
                mouse: "left",
                w: true,
                shift: true,
                jump: true,
              },
            },
            {
              id: "ancient-elbow-insta3",
              caption: "Elbow Insta 3",
              stand: "",
              aim: "images/ancient/elbow-insta3.png",
              inputs: {
                mouse: "left",
                w: true,
                shift: true,
                jump: true,
              },
            },
            {
              id: "ancient-elbow-insta4",
              caption: "Elbow Insta 4",
              stand: "",
              aim: "images/ancient/elbow-insta4.png",
              inputs: {
                mouse: "left",
                w: true,
                shift: true,
                jump: true,
              },
            },
            {
              id: "ancient-elbow-insta5",
              caption: "Elbow Insta 5",
              stand: "",
              aim: "images/ancient/elbow-insta5.png",
              inputs: {
                mouse: "left",
                w: true,
                shift: true,
                jump: true,
              },
            },
            {
              id: "ancient-elbow-backup",
              caption: "Elbow Backup Smoke (In case you forgot insta)",
              stand: "images/ancient/elbow-backup-stand.png",
              aim: "images/ancient/elbow-backup.png",
              inputs: {
                mouse: "left",
                w: true,
                shift: true,
                jump: true,
              },
            },
            {
              id: "ancient-elbow-molly",
              caption: "Elbow Molly",
              stand: "images/ancient/elbow-molly-stand.png",
              aim: "images/ancient/elbow-molly.png",
              inputs: {
                mouse: "left",
                w: true,
              },
            },
            {
              id: "ancient-elbow-he",
              caption: "Elbow HE",
              stand: "images/ancient/elbow-he-stand.png",
              aim: "images/ancient/elbow-he.png",
              inputs: {
                mouse: "left",
                w: true,
              },
            },
            {
              id: "ancient-elbow-flash",
              caption: "Elbow Flash",
              stand: "images/ancient/elbow-flash-stand.png",
              aim: "images/ancient/elbow-flash.png",
              inputs: {
                mouse: "right",
                w: true,
              },
            },
          ],
        },
        {
          id: "ancient-cave-ct",
          name: "Cave Control - CT",
          side: "CT",
          note: "Lane Molly & HE + Flash",
          lineups: [
            {
              id: "ancient-lane-molly",
              caption: "Lane Molly",
              stand: "images/ancient/lane-molly-stand.png",
              aim: "images/ancient/lane-molly.png",
              inputs: {
                mouse: "both",
                w: true,
                jump: true,
              },
            },
            {
              id: "ancient-lane-molly",
              caption: "Lane HE - no clue why inconsistent",
              stand: "images/ancient/lane-he-stand.png",
              aim: "images/ancient/lane-he.png",
              inputs: {
                mouse: "left",
                w: true,
              },
            },
            {
              id: "ancient-cheetah-flash",
              caption: "Cheetah Flash",
              stand: "images/ancient/cheetah-flash-stand.png",
              aim: "images/ancient/cheetah-flash.png",
              inputs: {
                mouse: "left",
                w: true,
              },
            },
          ],
        },
        {
          id: "ancient-b-ct",
          name: "B Anchor - CT",
          side: "CT",
          note: "Ramp Molly, Door Smoke.",
          lineups: [
            {
              id: "ancient-door-smoke1",
              caption: "Door Smoke",
              stand: "images/ancient/door-smoke1-stand.png",
              aim: "images/ancient/door-smoke1.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "ancient-ramp-molly",
              caption: "Lane Molly",
              stand: "images/ancient/ramp-molly-stand.png",
              aim: "images/ancient/ramp-molly.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "ancient-door-smoke2",
              caption: "Door Smoke - Alt",
              stand: "images/ancient/door-smoke2-stand.png",
              aim: "images/ancient/door-smoke2.png",
              inputs: {
                mouse: "left",
              },
            },
          ],
        },
        {
          id: "ancient-mid-t",
          name: "Mid - T",
          side: "T",
          note: "Red Room Smoke, Mid Flashes, XBox Molly",
          lineups: [
            {
              id: "ancient-red-room-left",
              caption: "Red Room Smoke - Left Side Throw",
              stand: "images/ancient/red-room-smoke-left-stand.png",
              aim: "images/ancient/red-room-smoke-left.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "ancient-red-room-right",
              caption: "Red Room Smoke - Right Side Throw",
              stand: "images/ancient/red-room-smoke-right-stand.png",
              aim: "images/ancient/red-room-smoke-right.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "ancient-mid-flash-t",
              caption: "Door Smoke",
              stand: "images/ancient/t-mid-flash-stand.png",
              aim: "images/ancient/t-mid-flash.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "ancient-xbox-molly",
              caption: "XBox Molly - preaim at location, strafe into corner",
              stand: "images/ancient/xbox-molly-stand.png",
              aim: "images/ancient/xbox-molly.png",
              inputs: {
                mouse: "left",
              },
            },
          ],
        },
        {
          id: "ancient-b-ramp-t",
          name: "B Ramp - T",
          side: "T",
          note: "Long & Short Smokes",
          lineups: [
            {
              id: "ancient-b-long-smoke",
              caption: "B Long Smoke",
              stand: "images/ancient/b-ramp-stand.png",
              aim: "images/ancient/b-long-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "ancient-b-short-smoke",
              caption: "B Short Smoke",
              stand: "images/ancient/b-ramp-stand.png",
              aim: "images/ancient/b-short-smoke.png",
              inputs: {
                mouse: "left",
                jump: true,
              },
            },
            {
              id: "ancient-pillar-molly",
              caption: "Pillar & Cave Molly",
              stand: "images/ancient/pillar-molly-stand.png",
              aim: "images/ancient/pillar-molly.png",
              inputs: {
                mouse: "left",
              },
            },
            {
              id: "ancient-cubby-he",
              caption: "Cubby HE",
              stand: "images/ancient/cubby-he-stand.png",
              aim: "images/ancient/cubby-he.png",
              inputs: {
                mouse: "both",
                jump: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
