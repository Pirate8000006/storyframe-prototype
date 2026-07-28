STORYFRAME - INFORMATION ARCHITECTURE

1. PUBLIC ROUTES
   / (Landing page)
     -> Sign up / Log in -> /login
     -> /privacy
     -> /terms

   /login (Magic-link auth)
     -> First-time user -> /onboarding
     -> Returning user -> /dashboard

2. ONBOARDING
   /onboarding (Capture role, experience level, primary use case, consent)
     -> /dashboard

3. PROJECT HUB
   /dashboard (List projects, create new)
     -> New project -> /projects/new
     -> Open existing project -> /projects/[projectId]/sources
     -> /settings

   /projects/new (Create project, select presentation context)
     -> /projects/[projectId]/sources

   /settings (Profile, data preferences, export data, delete account)

4. PER-PROJECT WORKFLOW (/projects/[projectId]/...)
   Step 1: sources (Paste text, upload files)
     -> Step 2: evidence

   Step 2: evidence (Review extracted facts, claim status, source trace)
     -> Step 3: interview

   Step 3: interview (Adaptive follow-up questions)
     -> Step 4: impact

   Step 4: impact (Build proof when metrics are missing or weak)
     -> Step 5: direction

   Step 5: direction (Compare and select story thesis)
     -> Step 6: deck

   Step 6: deck (Edit generated slide narrative, per-slide editing, regeneration)
     -> Step 7: review

   Step 7: review (Claim, narrative, length, repetition, confidentiality checks)
     -> Step 8: export

   Step 8: export (Markdown, structured copy, PDF)
     -> Back to /dashboard

LINEAR FLOW SUMMARY:
Landing -> Login -> Onboarding (first time only) -> Dashboard -> New Project -> Sources -> Evidence -> Interview -> Impact -> Direction -> Deck -> Review -> Export -> Dashboard