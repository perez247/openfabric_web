# base image
FROM node:14 as builder

RUN npm install -g npm

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy source code... testing
COPY ./ ./

RUN npm install

RUN npm install @angular/cli@15

# Create production application
RUN npm run build

# Use nginx to serve application
FROM nginx:alpine

# expose port
EXPOSE 4200

# copy default.conf file
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copy ready prod file
COPY --from=builder /app/dist /usr/share/nginx/html
