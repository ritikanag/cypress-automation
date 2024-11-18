# FROM node

# COPY package.json /app
# COPY cypress /app/

# WORKDIR cypress /app/

# RUN npm install

FROM cypress/included:13.15.2
WORKDIR /app
COPY package.json /app
COPY cypress /app/

COPY . .
RUN npm install
CMD ["npm", "run", "npx cypress run"] 