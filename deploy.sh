cd src
MY_RAND=`shuf -i100000000-999999999 -n1`
cat schools.html | sed  s/__SCHOOLS_ID__/$MY_RAND/ > schools2.html
mv schools2.html schools.html
zip ../src.zip ./ -r
cd ..
node up.js __my_dir__ src.zip
exit 0
