# Curriculum vitae | Bogdan Nikitin
Here's my resume :)

## Documentation
# Structure

    src                    - site sources
    *name_of_your_project* - ready files for deploy
    .gitignore             - utility file for git
    gulpfile.js            - gulp configuration
    package.json           - a file with description of the project, dependencies, etc.
    readme.md              - documentation

# src
.html files should be at the root of the folder src (you can unite several html-files and import it in *index.html* file using *@@include('_name.html')*, secondary .html files names should start with "_")

    fonts     - fonts directory
    img       - here you should put all images of any format (.jpeg, .jpg, .svg, .png, .gif, .webp)
    js        - javascript files
    scss      - directory with all styles (you can unite several scss-files and import it in *style.html* file using *@import 'name'*)

# Build
Gulp automatically compile, unite, minificate, add prefixes, optimize graphics, etc. all files from *src* folder to final folder with name of your project. 