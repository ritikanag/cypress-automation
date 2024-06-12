# FROM node

# COPY package.json /app
# COPY cypress /app/

# WORKDIR cypress /app/

# RUN npm install

FROM cypress/included:12.8.1
WORKDIR /app
COPY package.json /app
COPY cypress /app/

COPY . .
RUN npm install
CMD ["npm", "run", "npx cypress run"] 