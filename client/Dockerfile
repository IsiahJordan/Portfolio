FROM node:22

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the app source
COPY . .

# Expose the port Vite uses
EXPOSE 5173

# Default command (start Vite dev server)
CMD ["npm", "run", "dev", "--", "--host"]

