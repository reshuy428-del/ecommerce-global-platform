@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background:
    radial-gradient(circle at top, rgba(96, 165, 250, 0.09), transparent 25%),
    #f8fafc;
}

img {
  display: block;
}

* {
  box-sizing: border-box;
}

::selection {
  background: rgba(37, 99, 235, 0.18);
}
