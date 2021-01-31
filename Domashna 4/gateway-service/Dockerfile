FROM openjdk:11-jre-slim
EXPOSE 80/TCP
VOLUME /tmp
ADD gateway-service-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
