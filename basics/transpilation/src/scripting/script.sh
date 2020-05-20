#!/bin/bash
echo "🔥🔥🔥Beginning build!! 🔥🔥🔥"
firstline=$(head -n 1 source/changelog.md)

read -a splitfirstline <<< $firstline
version=${splitfirstline[1]}

echo 'Do you want to continue? (enter "1" for yes, "0" for no)'
read versioncontinue

if [ $versioncontinue -eq 1 ]
then
  echo "OK"
  for filename in source/*
    do
      echo $filename
        if [ "$filename" == "source/secretinfo.md" ]
        then
          echo "File being copied with minor changes"
          sed 's/42/XX/g' source/secretinfo.md > build/secretinfo.md
        else
          echo "Copying file"
          cp $filename build/.
        fi  
    done
  cd build/
    echo "Build version $version contains:"
    ls
  cd ..
else
  echo "Please come back when you are ready"
fi