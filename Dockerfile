FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file to the container
ARG JAR_FILE=build/libs/lagaaliving-0.0.1-SNAPSHOT.jar 
COPY ${JAR_FILE} app.jar

# Expose the application port
EXPOSE 8080
EXPOSE 3306

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]