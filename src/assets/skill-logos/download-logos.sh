#!/bin/bash

# Create directory if it doesn't exist
mkdir -p skill-logos

# Download programming language logos
curl -o python.svg "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
curl -o sql.svg "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
curl -o html5.svg "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
curl -o css3.svg "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"

# Download data science & ML logos
curl -o numpy.svg "https://upload.wikimedia.org/wikipedia/commons/1/1a/NumPy_logo.svg"
curl -o pandas.svg "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg"
curl -o scikit-learn.svg "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
curl -o matplotlib.svg "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"
curl -o seaborn.svg "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg"
curl -o tensorflow.svg "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"
curl -o keras.svg "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg"
curl -o opencv.svg "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg"

# Download tools & platforms logos
curl -o jupyter.svg "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg"
curl -o google-colab.svg "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg"
curl -o git.svg "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
curl -o google-cloud.svg "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
curl -o flask.svg "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg"
curl -o vscode.svg "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
curl -o tableau.svg "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png"

# Download database logos
curl -o mysql.svg "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
curl -o sqlite.svg "https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg"

# Download design & media logos
curl -o photoshop.svg "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
curl -o illustrator.svg "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
curl -o premiere-pro.svg "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
curl -o after-effects.svg "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
curl -o blender.svg "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"
curl -o canva.svg "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" 