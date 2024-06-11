ARG FIREBASE_TOOLS_VERSION
FROM node:20

# Expose Emulator UI and Firebase Auth service port
EXPOSE 4000 9099 8080 9150

RUN apt-get update
RUN apt-get -y install default-jre

# Install firebase emulator
RUN npm install -g firebase-tools@$FIREBASE_TOOLS_VERSION

# Copy over Firebase configs
RUN mkdir /firebase
WORKDIR /firebase
COPY .firebaserc .
COPY firebase.json .
COPY firestore.indexes.json .
COPY firestore.rules .

# Set command to run firebase
CMD [ "firebase", "emulators:start", "--project", "demo-local" ]