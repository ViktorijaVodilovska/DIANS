FROM openjdk:11-jre-slim
EXPOSE 3001/TCP
VOLUME /tmp
ADD target/country-service-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]