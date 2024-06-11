FIREBASE_TOOLS_VERSION := "13.11.2"

build-sim:
  cp .firebaserc ./simulator
  cp firebase.json ./simulator
  cd simulator && docker build --no-cache --platform linux/x86_64 \
    --build-arg FIREBASE_TOOLS_VERSION={{FIREBASE_TOOLS_VERSION}} \
    --tag starterstash/firebase:{{FIREBASE_TOOLS_VERSION}} .

start-sim:
  docker run -d --name firebase-sim -p 4000:4000 -p 9099:9099 -p 8080:8080 -p 9150:9150 starterstash/firebase:{{FIREBASE_TOOLS_VERSION}} 

stop-sim:
  docker stop firebase-sim

rm-sim: 
  docker stop firebase-sim
  docker rm firebase-sim