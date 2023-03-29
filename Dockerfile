FROM node:16
WORKDIR /usr/src/app
COPY ESDeezknee-Frontend/package*.json ./
RUN npm install
COPY ESDeezknee-Frontend ./
CMD ["npm", "run", "dev"]
