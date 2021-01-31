FROM openjdk:11-jre-slim
EXPOSE 3002/TCP
VOLUME /tmp
ADD mood-service-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]