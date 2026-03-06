Refine the layout to make it fully responsive and reduce excessive side margins. The current desktop margins are too large and compressing the content. Adjust the container system dynamically instead of using fixed large margins.

🔹 Desktop (1440px width)

Use a 12-column grid

Set container max width to 1280px (not 1200px)

Left & right margins: 80px (instead of 120px)

Column gutter: 24px

If screen width is larger than 1440px, keep content centered with auto margins.

🔹 Large Screens (1600px+)

Container max width: 1320px

Side margins should scale automatically (auto, not fixed 120px+)

Avoid overly compressed center layout

🔹 Tablet (768px–1024px)

8-column grid

Side margins: 40px

Gutter: 20px

Reduce section spacing proportionally

🔹 Mobile (375px width)

4-column grid

Side margins: 16px–20px (not more)

Gutter: 16px

Images should go full width within container

Stack multi-column layouts vertically

🔹 Additional Improvements

Hero section image grid should scale proportionally without excessive white space

Price card and content section should align within the same grid system

Maintain consistent vertical rhythm using 8px spacing system

Avoid fixed padding values that break responsiveness

Use auto layout for all major sections