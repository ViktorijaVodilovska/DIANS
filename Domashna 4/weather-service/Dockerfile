FROM openjdk:11-jre-slim
EXPOSE 3003/TCP
VOLUME /tmp
ADD target/weather-service-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]